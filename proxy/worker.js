/**
 * Cloudflare Worker — Live-Modell-Listen-Proxy für „KI/AI - Netz".
 *
 * Zweck
 *   Die statische Seite (GitHub Pages) darf die Modell-Endpunkte der Anbieter
 *   nicht direkt aus dem Browser abfragen (CORS + geheime API-Schlüssel dürfen
 *   nicht im Seitencode stehen). Dieser Worker hält die Schlüssel als Secrets,
 *   fragt die APIs ab und gibt NUR die öffentlichen Modell-IDs zurück.
 *
 * Schlüssel
 *   Werden NICHT hier eingetragen, sondern als Worker-Secrets gesetzt, z. B.:
 *     npx wrangler secret put OPENAI_KEY
 *   Nur Anbieter mit gesetztem Schlüssel werden abgefragt; fehlt einer, wird er
 *   sauber als „übersprungen" gemeldet. So kannst du schrittweise Schlüssel
 *   ergänzen.
 *
 * Rückgabe (JSON)
 *   {
 *     "generatedAt": "2026-…Z",
 *     "providers": {
 *       "openai":    { "ok": true,  "count": 63, "models": ["gpt-…", …] },
 *       "anthropic": { "ok": false, "skipped": true, "error": "kein Schlüssel gesetzt" },
 *       …
 *     }
 *   }
 */

// Nur dieser Ursprung darf den Worker aus dem Browser aufrufen (CORS).
// Bei eigener Domain hier anpassen bzw. um Einträge erweitern.
const ALLOW_ORIGINS = [
  "https://cehha79.github.io",
];

// Anbieter mit einer öffentlich abfragbaren Modell-Liste. Die Schlüssel (key)
// entsprechen den Anbieter-„id"s in data.js, damit das Frontend zuordnen kann.
const PROVIDERS = {
  openai: {
    secret: "OPENAI_KEY",
    url: () => "https://api.openai.com/v1/models",
    headers: (k) => ({ Authorization: "Bearer " + k }),
    parse: (j) => (j.data || []).map((m) => m.id),
  },
  anthropic: {
    secret: "ANTHROPIC_KEY",
    url: () => "https://api.anthropic.com/v1/models?limit=1000",
    headers: (k) => ({ "x-api-key": k, "anthropic-version": "2023-06-01" }),
    parse: (j) => (j.data || []).map((m) => m.id),
  },
  google: {
    secret: "GOOGLE_KEY",
    url: (k) =>
      "https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000&key=" +
      encodeURIComponent(k),
    headers: () => ({}),
    parse: (j) =>
      (j.models || []).map((m) => String(m.name || "").replace(/^models\//, "")),
  },
  xai: {
    secret: "XAI_KEY",
    url: () => "https://api.x.ai/v1/models",
    headers: (k) => ({ Authorization: "Bearer " + k }),
    parse: (j) => (j.data || []).map((m) => m.id),
  },
  deepseek: {
    secret: "DEEPSEEK_KEY",
    url: () => "https://api.deepseek.com/models",
    headers: (k) => ({ Authorization: "Bearer " + k }),
    parse: (j) => (j.data || []).map((m) => m.id),
  },
  mistral: {
    secret: "MISTRAL_KEY",
    url: () => "https://api.mistral.ai/v1/models",
    headers: (k) => ({ Authorization: "Bearer " + k }),
    parse: (j) => (j.data || []).map((m) => m.id),
  },
};

async function queryProvider(def, env) {
  const key = env[def.secret];
  if (!key) return { ok: false, skipped: true, error: "kein Schlüssel gesetzt" };
  try {
    const res = await fetch(def.url(key), { headers: def.headers(key) });
    if (!res.ok) {
      const text = (await res.text()).slice(0, 200);
      return { ok: false, status: res.status, error: "HTTP " + res.status + (text ? " — " + text : "") };
    }
    const j = await res.json();
    const models = def.parse(j).filter(Boolean).sort();
    return { ok: true, count: models.length, models: models };
  } catch (e) {
    return { ok: false, error: String((e && e.message) || e) };
  }
}

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

    const results = {};
    await Promise.all(
      Object.keys(PROVIDERS).map(async (name) => {
        results[name] = await queryProvider(PROVIDERS[name], env);
      })
    );

    const body = JSON.stringify({
      generatedAt: new Date().toISOString(),
      providers: results,
    });
    return new Response(body, { headers: corsHeaders(origin) });
  },
};
