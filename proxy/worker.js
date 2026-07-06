/**
 * Cloudflare Worker — anonymer Katalog-Proxy für „KI/AI - Netz".
 *
 * Zweck
 *   Holt den ÖFFENTLICHEN Modellkatalog von OpenRouter (kein API-Schlüssel,
 *   kein Konto) und reicht ihn mit CORS an die Seite weiter. So kontaktiert der
 *   Browser der Besucher nur diesen Worker, nicht direkt Dritte.
 *
 * Kein Schlüssel nötig — der Katalog ist frei abrufbar. Der Worker fügt nur die
 * CORS-Freigabe für die Seite hinzu und hält den Abruf serverseitig.
 *
 * Rückgabe: der OpenRouter-Katalog unverändert, Form { "data": [ { "id": "openai/gpt-…", … }, … ] }.
 */

const ALLOW_ORIGINS = [
  "https://cehha79.github.io",
];

const CATALOG_URL = "https://openrouter.ai/api/v1/models";

function corsHeaders(origin) {
  const allow = ALLOW_ORIGINS.indexOf(origin) >= 0 ? origin : ALLOW_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }
    try {
      const res = await fetch(CATALOG_URL, { headers: { Accept: "application/json" } });
      const text = await res.text();
      return new Response(text, { status: res.ok ? 200 : 502, headers: corsHeaders(origin) });
    } catch (e) {
      return new Response(
        JSON.stringify({ error: String((e && e.message) || e) }),
        { status: 502, headers: corsHeaders(origin) }
      );
    }
  },
};
