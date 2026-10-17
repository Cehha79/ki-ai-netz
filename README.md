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

Eine redaktionelle Übersicht der großen KI-Anbieter und ihrer Modelle — sortiert
nach Anbieter und Modelltyp, mit Quellen und gekennzeichnetem Prüfstand, **zweisprachig
(Deutsch / Englisch)**. Ein Projekt von **MikaTec** (Hasan Tepegöz).

> Statische, **abhängigkeitsfreie Einzelseite** in Vanilla HTML/CSS/JavaScript —
> kein Build, kein Framework, kein Server-Backend. Läuft offline durch Doppelklick
> auf `index.html`.

## Überblick

Die Seite bündelt ausgewählte Modelle und Produkte der acht großen KI-Anbieter (OpenAI, Google,
Anthropic, Meta, xAI, DeepSeek, Mistral, Alibaba/Qwen) und listet 21 weitere bekannte
Anbieter. Sämtliche Interaktivität — Filter, Ansichtswechsel, Detailmasken, Sprache,
Hell/Dunkel — läuft **client-seitig in Vanilla JavaScript**. Es gibt keine Datenbank,
kein CMS und keine externen Laufzeit-Abhängigkeiten; die Daten liegen als geprüfter,
statischer Stand in einer einzigen Datei (`data.js`). Der lokale Abgleich vom 14.09.2026
enthält direkte Modellquellen, Prüfdatum und Status für Vorschau, eingeschränkten Zugang,
Abschaltung und unbestätigte Altangaben.

## Ansichten & Funktionen

Links steht die Navigation. Rechts erscheint jeweils **ein eigener Inhaltsbereich**.
Nur dieser Bereich scrollt; die Position bleibt beim Wechsel erhalten. Kopfzeile,
Navigation und Fußzeile stehen fest. Direktlinks und Zurück/Vorwärts führen zum
jeweiligen Bereich.

- **Entdecken** — bedienbares Anbieternetz mit Suche, Original-Logos, Herkunftsflaggen,
  Anbieterfarben und pausierbarer Animation.
- **Modelle & Ebenen** — Raster, Baumstruktur und Detailkarten mit eigener Suche,
  Anbieter- und Typfilter. Die Gesamtliste führt zur Marktübersicht.
- **Alle Anbieter** — vollständiges Verzeichnis einschließlich der weiteren Anbieter,
  mit eigener Suche, Kurzprofilen und offiziellen Links.
- **Marktübersicht** — separat durchsuchbare Tabelle. Nicht belegte Nutzer-, Umsatz-
  und Bewertungszahlen sind gekennzeichnet; die Reihenfolge ist keine Rangliste.
- **Neu & Geplant** — redaktionelle Aktualitätsliste mit Quellen und klar markierten
  unbestätigten Altangaben.
- **Alle Kataloge** — öffentlicher OpenRouter-Katalog auf Klick. Der Vergleich gibt
  Hinweise auf mögliche Ergänzungen und überschreibt `data.js` nicht.
- **Ausprobieren** — bedienbarer Zeitplaner, gespeicherte Textausgabe, veränderbares
  Diagramm und ein tatsächlich KI-generiertes Bild mit Originaleingabe und Herkunft.
- **Fortschritt** — ausgewählte, mit Originalquellen verlinkte Meilensteine.

Modellkacheln öffnen Details mit Beschreibung, Preis, Kontextfenster, Lizenz,
Verfügbarkeit, Quellen und Prüfdatum. Schließen per X, Klick außerhalb oder Escape.
DE/EN, Hell/Dunkel und die Katalogansicht werden lokal im Browser gespeichert.
Die Fahnen kennzeichnen die bisherige Länderzuordnung der Anbieter, keinen Serverstandort.

## Modell-Aktualität

`renderNews()` zeigt die gepflegte Liste aus `KI_ATLAS_NEU`. Unbestätigte Angaben
sind kein belegter Ausblick. `fetchLiveCatalog()` holt den öffentlichen Modellkatalog
von [OpenRouter](https://openrouter.ai) direkt aus dem Browser, ohne Konto und ohne
API-Schlüssel. Dabei wird die IP-Adresse an OpenRouter übermittelt. Ladezustand,
Fehler und erneuter Versuch sind sichtbar. Der Vergleich von Modellkennungen
bestätigt weder Preise noch Verfügbarkeit.

Der Katalog wird ausschließlich über die Schaltfläche „OpenRouter-Katalog abrufen“ geladen.
Die Adresse `https://openrouter.ai/api/v1/models` steht in `fetchLiveCatalog()`.
Die gespeicherten Inhalte und Beispiele funktionieren auch ohne diesen Abruf.

## Datenschutz & Besucherzähler

Ein **cookieloser Besucherzähler (GoatCounter)** misst die ungefähre Reichweite, ohne Profile
zu bilden. Die Zahl wird **nicht auf der Seite angezeigt** (GoatCounter cacht die öffentliche
Zahl stundenlang) — die Auswertung läuft im privaten GoatCounter-Dashboard. Details, die
USA-Datenübermittlung (GitHub Pages, OpenRouter) und die Betroffenenrechte stehen in der eigenen,
zweisprachigen `datenschutz.html`. Lokale Vorschauen per `file://`, `localhost` und
Loopback-Adresse laden den Zähler nicht. Keine Werbe- oder Profiling-Werkzeuge, keine Cookies.

## Merkmale

- **Zero-Dependency & build-less** — kein npm, kein Bundler, kein Transpiler; direkt auslieferbar.
- **Zweisprachig (DE/EN)** — UI-Texte über `englishUI` und `textPair()`, Datenfelder als `{ de, en }`;
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

Preise werden mit Einheit und offizieller Modellquelle angegeben. API-Preise sind
keine Chat-Abonnements. Wo Variante, Region oder Zugangsbedingungen entscheidend
sind, verweist der Eintrag auf die konkrete Preistabelle. Offene Gewichte
verursachen beim eigenen Betrieb Rechenkosten. Nicht belastbar belegte Marktkennzahlen
sind als „Nicht belegt“ gekennzeichnet. Unbestätigte Altangaben sind kein belegter
Ausblick; angekündigte Abschaltungen und bereits abgeschaltete Endpunkte sind
eigens markiert. Das Prüfdatum ist kein Veröffentlichungsdatum.

**Redaktioneller Datenstand:** 14.09.2026. Modellquellen und Prüfdatum stehen am jeweiligen
Eintrag. Nicht belegte Marktkennzahlen sind ausdrücklich gekennzeichnet.

## Prüfung des lokalen Standes

Am 14.09.2026 wurden 653 technische Bedingungen mit Node.js und einer vereinfachten
Nachbildung der Seitenelemente geprüft. Zusätzlich wurden alle 33 benötigten Website-Dateien
über einen lokalen Webserver unter einem Projekt-Unterpfad ausgeliefert und verglichen.
Die technische Prüfung ist keine automatisierte visuelle Browserprüfung. Hasan hatte
den zugrunde liegenden Entwurf praktisch geprüft und hat den übertragenen Stand
am 14.09.2026 akzeptiert und zur Veröffentlichung freigegeben.

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
├── assets/
│   ├── anbieter/     ← lokale Original-Logos aller Anbieter
│   └── beispiele/    ← lokal gespeichertes KI-Bild
└── .nojekyll         ← GitHub Pages liefert statische Dateien direkt aus
```

## Architektur

Kern sind zwei Dateien, bewusst getrennt nach **Daten** und **Darstellung**:

- **`data.js`** setzt fünf Globals: `KI_ATLAS_META` (Stand/Hinweise), `KI_ATLAS_DATA` (die acht
  großen Anbieter mit Modellen), `KI_ATLAS_WEITERE` (Kurzliste weiterer Anbieter), `KI_ATLAS_MARKT`
  (Marktzahlen der Gesamtliste) und `KI_ATLAS_NEU` (handverlesene Neu-/Aktuell-/Geplant-Liste mit
  Quellen). Übersetzbare Felder liegen als `{ de, en }`. `data.js` muss **im selben Ordner** neben
  `index.html` liegen.
- **`index.html`** enthält Struktur, CSS und die Darstellungslogik in einer abgeschlossenen
  JavaScript-Funktion. `showSection()` steuert die acht Bereiche, deren Scrollpositionen
  und die Browsernavigation. `renderNetwork()`, `renderCatalog()`, `renderDirectory()`,
  `renderMarket()` und `renderNews()` bauen die jeweiligen Ausgaben auf.
- **`assets/`** enthält sämtliche lokalen Logos und das Bildbeispiel. Die Zuordnung der
  Logos steht in `logoFiles`. Für die veröffentlichbare Website werden keine Dateien
  aus dem lokalen, von Git ausgeschlossenen `DOKU/` benötigt.
- **Browsereinstellungen** behalten die bestehenden Schlüssel `kiatlas-lang`,
  `kiatlas-theme` und `kiatlas-view`. Einstellungen aus dem Entwurf dienen nur als
  Ersatz, wenn noch keine entsprechende Einstellung der eigentlichen Website vorliegt.
  Gesperrter Browserspeicher verhindert die Bedienung nicht.

## Lokale Nutzung

Kein Setup nötig:

```bash
# Repository klonen
git clone https://github.com/Cehha79/ki-ai-netz.git

# index.html im Browser öffnen — fertig, läuft sofort offline.
```

Wichtig: `data.js` und der Ordner `assets/` müssen neben `index.html` liegen. Nach Datenänderungen die Cache-Version
im `<script src="data.js?v=N">` erhöhen, sonst zeigt der Browser einen alten Stand.

## Deployment

Auslieferung über **GitHub Pages** aus dem Repo-Root (`main`). Ein `.nojekyll` sorgt dafür,
dass die statischen Dateien direkt ausgeliefert werden. Die Seite ist unter
[cehha79.github.io/ki-ai-netz](https://cehha79.github.io/ki-ai-netz/) erreichbar.
Bei Veröffentlichungen wird `assets/` mit übertragen. Änderungen werden erst nach
Hasans Auftrag veröffentlicht; anschließend den tatsächlich ausgelieferten Stand prüfen.

---

Konzept & Umsetzung: **Hasan Tepegöz** · © MikaTec · [www.mika-tec.com](https://www.mika-tec.com)
