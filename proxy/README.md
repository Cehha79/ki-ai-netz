# Katalog-Proxy (Cloudflare Worker)

Kleiner Worker für den **Aktualisieren**-Knopf von „KI/AI - Netz". Er holt den
**öffentlichen** Modellkatalog von [OpenRouter](https://openrouter.ai) und
reicht ihn mit CORS an die Seite.

> **Anonym, ohne Schlüssel, ohne Konto.** Der OpenRouter-Katalog ist frei
> abrufbar. Es werden keine API-Schlüssel und kein Anbieter-Konto benötigt. Der
> Worker sorgt nur dafür, dass der Browser der Besucher ausschließlich mit
> **deinem** Worker spricht, nicht direkt mit Dritten.

## Was er liefert — und was nicht

- **Liefert:** die aktuellen Modell-Kennungen vieler Anbieter (Text-/Multimodal-
  Modelle). Damit erkennt die Seite, ob ein **neues Modell** aufgetaucht ist, das
  noch nicht in `data.js` steht.
- **Liefert nicht:** die gepflegten Karten-Inhalte (Stärken, Preis, Kontext,
  deutsche/englische Beschreibungen) — die bleiben Handarbeit.

## Abgedeckte Anbieter

Über OpenRouter: OpenAI, Anthropic, Google, Meta, xAI, DeepSeek, Mistral,
Alibaba/Qwen **und** viele weitere (NVIDIA, Cohere, Amazon, Perplexity,
Microsoft, IBM, AI21, Baidu, Tencent, ByteDance, Moonshot, Zhipu, MiniMax, Reka).

**Nicht** dabei: reine Bild-/Audio-/Video-Anbieter (Midjourney, Runway,
ElevenLabs, Stability, Luma, Suno, Black Forest Labs) und Apple — die bleiben
„manuell prüfen".

## Einrichtung

Am einfachsten im Cloudflare-Dashboard:

1. **Workers & Pages → Create → Worker** (Hello-World-Vorlage), Name z. B.
   `ki-ai-netz-proxy`, **Deploy**.
2. **Code bearbeiten** → gesamten Inhalt durch `worker.js` (dieser Ordner)
   ersetzen → **Bereitstellen**.
3. Die Worker-URL (`https://ki-ai-netz-proxy.<subdomain>.workers.dev`) in
   `index.html` bei `PROXY_URL` eintragen.

Es sind **keine** Secrets/Schlüssel zu setzen.

## Alternative ohne Worker

Da OpenRouter `access-control-allow-origin: *` sendet, könnte die Seite den
Katalog auch direkt aus dem Browser laden. Der Worker wird nur genutzt, damit die
Besucher-Browser keine Drittanbieter direkt kontaktieren (sauberere
Datenschutz-Linie).
