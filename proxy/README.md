# Live-Modell-Proxy (Cloudflare Worker)

Kleiner Proxy für den **Aktualisieren**-Knopf von „KI/AI - Netz". Er hält die
API-Schlüssel geheim, fragt die Modell-Endpunkte der Anbieter ab und gibt nur
die öffentlichen **Modell-IDs** an die Seite zurück.

> Die statische Seite darf die Anbieter-APIs nicht direkt aus dem Browser
> aufrufen (CORS + Schlüssel dürfen nicht im Seitencode stehen). Deshalb dieser
> Zwischenschritt.

## Was er liefert — und was nicht

- **Liefert:** die aktuellen Modell-**IDs** je Anbieter (z. B. `gpt-…`, `claude-…`).
  Damit erkennt die Seite, ob ein **neues Modell** aufgetaucht ist, das noch
  nicht in `data.js` steht.
- **Liefert nicht:** die gepflegten Karten-Inhalte (Stärken, Preis, Kontext,
  deutsche/englische Beschreibungen). Die bleiben Handarbeit — die APIs geben so
  etwas nicht her.

## Abgedeckte Anbieter (haben eine Modell-Listen-API)

OpenAI · Anthropic · Google (Gemini) · xAI · DeepSeek · Mistral

Meta (offene Gewichte), Alibaba/Qwen (Regions-Hürden) und die „weiteren
Anbieter" haben keine einheitliche API und werden bewusst **nicht** live
abgefragt.

## Einrichtung (einmalig)

Voraussetzung: ein kostenloses Cloudflare-Konto und Node.js.

1. In diesen Ordner wechseln:
   ```
   cd proxy
   ```
2. Bei Cloudflare anmelden (öffnet den Browser):
   ```
   npx wrangler login
   ```
3. Schlüssel als **Secrets** setzen — nur die, die du hast. Jeder Befehl fragt
   den Wert interaktiv ab (nichts landet in einer Datei):
   ```
   npx wrangler secret put OPENAI_KEY
   npx wrangler secret put ANTHROPIC_KEY
   npx wrangler secret put GOOGLE_KEY
   npx wrangler secret put XAI_KEY
   npx wrangler secret put DEEPSEEK_KEY
   npx wrangler secret put MISTRAL_KEY
   ```
   Anbieter ohne gesetzten Schlüssel werden einfach als „übersprungen" gemeldet.
4. Deployen:
   ```
   npx wrangler deploy
   ```
   Am Ende zeigt Wrangler die Worker-URL an, z. B.
   `https://ki-ai-netz-proxy.<dein-subdomain>.workers.dev`.

## Mit der Seite verbinden

In `index.html` die Konstante `PROXY_URL` (im Kopf der IIFE) auf die
Worker-URL setzen:

```js
var PROXY_URL = "https://ki-ai-netz-proxy.<dein-subdomain>.workers.dev";
```

Danach `data.js?v=N` **nicht** nötig — es ändert sich nur `index.html`. Version
in `index.html` selbst gibt es nicht; einfach committen, pushen, Pages neu bauen.

## Schlüssel bekommen

| Anbieter  | Schlüssel unter                         |
|-----------|-----------------------------------------|
| OpenAI    | platform.openai.com → API keys          |
| Anthropic | console.anthropic.com → API Keys        |
| Google    | aistudio.google.com → Get API key       |
| xAI       | console.x.ai → API Keys                 |
| DeepSeek  | platform.deepseek.com → API keys        |
| Mistral   | console.mistral.ai → API Keys           |

Das bloße **Auflisten** der Modelle (`/v1/models`) ist bei diesen Anbietern in
der Regel kostenlos; es werden keine Modelle ausgeführt.

## Sicherheitshinweis (ehrlich)

Der Worker beschränkt den Zugriff per **CORS** auf die Seite
`cehha79.github.io`. Das schützt vor fremden Webseiten, aber nicht vor direkten
Aufrufen (z. B. per `curl`) — CORS ist keine harte Sperre. Da nur die
kostengünstigen Modell-Listen-Endpunkte abgefragt werden, ist das Risiko gering.
Wer es dichter will, kann später einen geheimen Token zwischen Seite und Worker
ergänzen.
