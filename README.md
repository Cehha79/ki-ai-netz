# KI/AI - Netz — Übersicht der KI-Anbieter und Modelle

![Live](https://img.shields.io/badge/Live-cehha79.github.io%2Fki--ai--netz-2f6df6)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?logo=javascript&logoColor=black)
![Sprachen](https://img.shields.io/badge/Sprachen-DE%20%C2%B7%20EN-2f6df6)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222)
![Build](https://img.shields.io/badge/Build-none-3fb950)
![Dependencies](https://img.shields.io/badge/Dependencies-0-3fb950)
![Offline](https://img.shields.io/badge/Offline-per%20Doppelklick-3fb950)

Eine quellengeprüfte Übersicht der großen KI-Anbieter und ihrer Modelle — sortiert
nach Anbieter und Modelltyp, mit Nutzer-, Umsatz- und Bewertungszahlen, **zweisprachig
(Deutsch / Englisch)**. Ein Projekt von **Mika-Tec** (Hasan Tepegöz).

> Statische, **abhängigkeitsfreie Einzelseite** in Vanilla HTML/CSS/JavaScript —
> kein Build, kein Framework, kein Server-Backend. Läuft offline durch Doppelklick
> auf `index.html`.

## Überblick

Die Seite bündelt die aktuellen Modelle der acht großen KI-Anbieter (OpenAI, Google,
Anthropic, Meta, xAI, DeepSeek, Mistral, Alibaba/Qwen) und listet 21 weitere bekannte
Anbieter. Sämtliche Interaktivität — Filter, Ansichtswechsel, Detailmasken, Sprache,
Hell/Dunkel — läuft **client-seitig in Vanilla JavaScript**. Es gibt keine Datenbank,
kein CMS und keine externen Laufzeit-Abhängigkeiten; die Daten liegen als geprüfter,
statischer Stand in einer einzigen Datei (`data.js`).

## Ansichten & Funktionen

- **Anbieter-Zeile** oben: klickbare Tafeln (Logo, Land, Modellzahl) filtern die Ansicht
  auf einen Anbieter; die Leiste „Alle Anbieter" setzt zurück.
- **Vier Tab-Ansichten** — immer nur eine sichtbar:
  - **Raster** — Anbieter → Modelle nach Typ, Flaggschiff hervorgehoben
  - **Baumstruktur** — Wurzel → Anbieter → Modelle als verbundener Baum
  - **Detailkarten** — alle Modelle nach Modalität gruppiert
  - **Gesamtliste** — Tabelle mit Nutzerzahlen, Umsatz/ARR, Bewertung, Gründung und Quelle
- **Klickbare Modell-Kacheln** öffnen eine Detail-Maske (Beschreibung, Preis, Kontextfenster,
  Lizenz, Stärken, Einsatz, Links). Schließen per X, Klick außerhalb oder Escape.
- **Typ-Filter** (Text · Bild · Audio · Video · Multimodal), **Sprachumschalter (DE/EN)** und
  **Hell/Dunkel-Umschalter** — Auswahl wird in `localStorage` gemerkt.
- **Kurzliste weiterer Anbieter** — anklickbar, mit Kurzinfo und Link zur offiziellen Seite.
- Eigene **Datenschutzseite** (`datenschutz.html`, DE/EN) für den cookielosen Besucherzähler.

## Modell-Aktualität — zwei Kopf-Knöpfe

Beide öffnen dasselbe Modal-Overlay und lassen `data.js` unangetastet (nichts wird
automatisch überschrieben):

- **„Neu & Geplant"** (`#newsBtn`, `renderNews`) — eine **handverlesene, quellenbelegte**
  Liste aus `KI_ATLAS_NEU`, gruppiert nach *neu erschienen · aktuelle Flaggschiffe ·
  angekündigt/geplant*, zweisprachig, jeder Eintrag mit Quelle. Ein **grünes Badge** zeigt,
  welche Einträge bereits in den Anbieter-Karten stehen.
- **„Alle Kataloge"** (`#refreshBtn`, `rfRenderReport`) — holt **anonym** den öffentlichen
  Modellkatalog von **[OpenRouter](https://openrouter.ai)** (kein API-Schlüssel, kein Konto)
  und gleicht die Modell-Kennungen per Teilstring mit `data.js` ab: bekannte mit Häkchen,
  mögliche neue hervorgehoben. Reine Bild-/Audio-/Video-Anbieter und Apple sind im Katalog
  nicht enthalten (ehrlicher Hinweis).

Der Abruf läuft **direkt** aus dem Browser (OpenRouter erlaubt CORS) — kein eigener Server und
kein API-Schlüssel nötig. Die Katalog-Adresse steht in der Konstante `PROXY_URL` in `index.html`.

## Datenschutz & Besucherzähler

Ein **cookieloser Besucherzähler (GoatCounter)** misst die ungefähre Reichweite, ohne Profile
zu bilden. Details, die USA-Datenübermittlung (GitHub Pages, OpenRouter) und die Betroffenenrechte
stehen in der eigenen, zweisprachigen `datenschutz.html`. Keine Werbe- oder Profiling-Werkzeuge,
keine Cookies.

## Merkmale

- **Zero-Dependency & build-less** — kein npm, kein Bundler, kein Transpiler; direkt auslieferbar.
- **Zweisprachig (DE/EN)** — UI-Texte über ein `I18N`-Wörterbuch, Datenfelder als `{ de, en }`;
  Umschaltung ohne Neuladen, Sprache in `localStorage` gemerkt.
- **Daten von Darstellung getrennt** — `data.js` (geprüfte Daten) und `index.html` (Anzeige/Logik).
- **Sicheres Rendering** — alle dynamischen Inhalte laufen über `esc()` bzw. `textContent`; keine
  ungeprüfte HTML-Interpolation von Datenwerten.
- **Datensparsam** — keine Cookies und kein Tracking-Profil; einziger Zähler ist das cookielose
  GoatCounter, externe Abrufe (OpenRouter) nur auf ausdrücklichen Klick.
- **Cache-Busting** — `data.js` wird versioniert eingebunden (`data.js?v=N`); bei Datenänderung
  wird die Version erhöht.
- **Barrierearm** — ARIA-Rollen für Tabs und Dialog, Tastatur-Bedienung (Enter/Escape), sichtbarer Fokus.

## Ehrliche Datenpflege

Preise stehen nur dort, wo es einen **öffentlichen Token-Preis** gibt (quellengeprüft an den
offiziellen Anbieterseiten). Bei Bild-/Audio-/Video-Modellen (andere Abrechnung), Open-Weight-Modellen
und noch nicht veröffentlichten Modellen steht bewusst ein **ehrlicher Hinweis statt einer erfundenen
Zahl**. In der Gesamtliste sind Nutzer-/Umsatzzahlen Schätzungen bzw. Run-Rate (ARR) und nicht direkt
vergleichbar (WAU vs. MAU); leere Felder bleiben „—", jede Zeile nennt ihre Quelle. Die Liste
„Neu & Geplant" ist handverlesen und quellenbelegt; „geplant" beruht auf öffentlichen Ankündigungen
und kann sich ändern.

**Datenstand:** Modelle 4. Juli 2026 · Marktzahlen Juli 2026.

## Tech-Stack

| Ebene        | Umsetzung |
|--------------|-----------|
| Markup       | HTML5, semantisch, eine Einzelseite (+ `datenschutz.html`) |
| Styling      | CSS3 — Custom Properties, Grid, Flexbox, `color-mix()`, `clamp()`, Media Queries |
| Interaktion  | Vanilla JavaScript (eine IIFE), `localStorage` (Sprache/Theme/Ansicht), Modal-Steuerung, `fetch` (OpenRouter) |
| Daten        | `data.js` — Globals `KI_ATLAS_META`, `KI_ATLAS_DATA`, `KI_ATLAS_WEITERE`, `KI_ATLAS_MARKT`, `KI_ATLAS_NEU` |
| Live-Abgleich| Direktabruf des öffentlichen OpenRouter-Katalogs (kein Schlüssel, kein Konto) |
| Hosting      | GitHub Pages, Auslieferung aus dem Repo-Root |

## Projektstruktur

```text
ki-ai-netz/
├── index.html        ← die Seite: Struktur, CSS und gesamte Render-Logik
├── data.js           ← die geprüften Daten (Anbieter, Modelle, Marktzahlen, Neu-Liste)
├── datenschutz.html  ← eigene, zweisprachige Datenschutzseite
├── README.md         ← diese Datei
├── .gitignore
└── .nojekyll         ← GitHub Pages liefert statische Dateien direkt aus
```

## Architektur

Kern sind zwei Dateien, bewusst getrennt nach **Daten** und **Darstellung**:

- **`data.js`** setzt fünf Globals: `KI_ATLAS_META` (Stand/Hinweise), `KI_ATLAS_DATA` (die acht
  großen Anbieter mit Modellen), `KI_ATLAS_WEITERE` (Kurzliste weiterer Anbieter), `KI_ATLAS_MARKT`
  (Marktzahlen der Gesamtliste) und `KI_ATLAS_NEU` (handverlesene Neu-/Aktuell-/Geplant-Liste mit
  Quellen). Übersetzbare Felder liegen als `{ de, en }`. `data.js` muss **im selben Ordner** neben
  `index.html` liegen.
- **`index.html`** enthält Struktur, CSS und die Render-Logik in einer IIFE. Zustand sind nur zwei
  Variablen (aktiver Typ- und Anbieter-Filter) plus aktive Ansicht und Sprache; jede Änderung ruft
  schlicht neu. Ansichten liegen in einer `VIEWS`-Map (Raster, Baum, Detailkarten, Gesamtliste);
  die zwei Kopf-Knöpfe nutzen `renderNews` bzw. `rfRenderReport`.

## Lokale Nutzung

Kein Setup nötig:

```bash
# Repository klonen
git clone https://github.com/Cehha79/ki-ai-netz.git

# index.html im Browser öffnen — fertig, läuft sofort offline.
```

Wichtig: `data.js` muss neben `index.html` liegen. Nach Datenänderungen die Cache-Version
im `<script src="data.js?v=N">` erhöhen, sonst zeigt der Browser einen alten Stand.

## Deployment

Auslieferung über **GitHub Pages** aus dem Repo-Root (`main`). Ein `.nojekyll` sorgt dafür,
dass die statischen Dateien direkt ausgeliefert werden. GitHub cacht die Seiten rund 10 Minuten;
nach einem Push ggf. hart neu laden (Safari: `Cmd + Option + R`).

---

Konzept & Umsetzung: **Hasan Tepegöz** · © Mika-Tec · [www.mika-tec.com](https://www.mika-tec.com)
