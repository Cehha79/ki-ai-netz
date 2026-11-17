// Holt die Modell-Liste von models.dev und schreibt daraus daten/modelle.js.
// Aufruf im Projektordner:
//   node werkzeuge/modelle-holen.js              holt die Liste aus dem Internet
//   node werkzeuge/modelle-holen.js <Datei>      liest eine schon gespeicherte Kopie von api.json
// Übernommen werden nur die eigenen Modelle der Anbieter aus daten/anbieter.js.
// models.dev wird von einer Gemeinschaft gepflegt (MIT-Lizenz), nicht von den Anbietern selbst.
"use strict";

const fs = require("fs");
const path = require("path");

const wurzel = path.join(__dirname, "..");
const quelle = "https://models.dev/api.json";
const ziel = path.join(wurzel, "daten", "modelle.js");

// Unser Anbieter → Eintrag bei models.dev. Führt der Eintrag dort auch fremde Modelle,
// lässt „nur“ allein die passenden Namen durch und „ohne“ schließt Namen aus.
const zuordnung = {
  openai: { von: "openai" },
  google: { von: "google" },
  anthropic: { von: "anthropic" },
  meta: { von: "meta" },
  xai: { von: "xai" },
  deepseek: { von: "deepseek" },
  qwen: { von: "alibaba", nur: /^(qwen|qwq|wan)/i },
  moonshot: { von: "moonshotai" },
  zai: { von: "zai" },
  mistral: { von: "mistral", ohne: /^(deepseek|glm)/i },
  tencent: { von: "tencent-tokenhub" },
  minimax: { von: "minimax" },
  bytedance: { von: "volcengine", nur: /^(seed|doubao)/i },
  stepfun: { von: "stepfun-ai" },
  xiaomi: { von: "xiaomi" },
  cohere: { von: "cohere" },
  amazon: { von: "nova" },
  ai21: { von: "ai21" },
  perplexity: { von: "perplexity" },
  thinking: { von: "thinkingmachines", nur: /^inkling/i },
  reflection: { von: "reflection" }
};

function ladeDaten(datei, name) {
  const window = {};
  new Function("window", fs.readFileSync(datei, "utf8"))(window);
  return window[name];
}

async function holeListe() {
  const lokal = process.argv[2];
  if (lokal) return JSON.parse(fs.readFileSync(lokal, "utf8"));
  const antwort = await fetch(quelle, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh) Datenabruf" } });
  if (!antwort.ok) throw new Error("Abruf fehlgeschlagen: HTTP " + antwort.status);
  return antwort.json();
}

const zahl = wert => typeof wert === "number" && Number.isFinite(wert) ? wert : null;

function umformen(anbieter, modell) {
  const kosten = modell.cost || null;
  const grenzen = modell.limit || {};
  const arten = modell.modalities || {};
  return {
    anbieter,
    id: modell.id,
    name: modell.name,
    datum: /^\d{4}-\d{2}-\d{2}$/.test(modell.release_date || "") ? modell.release_date : "",
    wissen: modell.knowledge || "",
    kontext: zahl(grenzen.context),
    ausgabe: zahl(grenzen.output),
    eingabeArten: arten.input || [],
    ausgabeArten: arten.output || [],
    denken: Boolean(modell.reasoning),
    werkzeuge: Boolean(modell.tool_call),
    offeneGewichte: Boolean(modell.open_weights),
    status: modell.status || "",
    preis: kosten ? { ein: zahl(kosten.input), aus: zahl(kosten.output), cacheLesen: zahl(kosten.cache_read), cacheSchreiben: zahl(kosten.cache_write) } : null
  };
}

function schreibeZeile(modell) {
  return "  " + JSON.stringify(modell).replace(/"([A-Za-z]+)":/g, "$1: ").replace(/,(?=[A-Za-z]+: )/g, ", ");
}

async function los() {
  const anbieter = ladeDaten(path.join(wurzel, "daten", "anbieter.js"), "KI_ANBIETER");
  const reihenfolge = anbieter.map(eintrag => eintrag.id);
  for (const kennung of Object.keys(zuordnung)) {
    if (!reihenfolge.includes(kennung)) throw new Error("Zuordnung nennt einen Anbieter, den es in daten/anbieter.js nicht gibt: " + kennung);
  }
  const liste = await holeListe();
  const modelle = [];
  for (const [kennung, regel] of Object.entries(zuordnung)) {
    const eintrag = liste[regel.von];
    if (!eintrag) {
      console.log("Hinweis: models.dev führt „" + regel.von + "“ nicht mehr (Anbieter " + kennung + ").");
      continue;
    }
    for (const modell of Object.values(eintrag.models || {})) {
      if (regel.nur && !regel.nur.test(modell.name || "")) continue;
      if (regel.ohne && regel.ohne.test(modell.name || "")) continue;
      modelle.push(umformen(kennung, modell));
    }
  }
  modelle.sort((a, b) => reihenfolge.indexOf(a.anbieter) - reihenfolge.indexOf(b.anbieter) || b.datum.localeCompare(a.datum) || a.name.localeCompare(b.name));

  // Vergleich mit dem bisherigen Stand: was ist neu, was fehlt, wo hat sich ein Preis geändert.
  const schluessel = modell => modell.anbieter + "/" + modell.id;
  const vorher = fs.existsSync(ziel) ? ladeDaten(ziel, "KI_MODELLE") || [] : null;
  if (vorher) {
    const alt = new Map(vorher.map(modell => [schluessel(modell), modell]));
    const neu = new Map(modelle.map(modell => [schluessel(modell), modell]));
    const dazu = [...neu.keys()].filter(k => !alt.has(k));
    const weg = [...alt.keys()].filter(k => !neu.has(k));
    const preis = [...neu.keys()].filter(k => alt.has(k) && JSON.stringify(alt.get(k).preis) !== JSON.stringify(neu.get(k).preis));
    console.log("Gegenüber dem bisherigen Stand: " + dazu.length + " neu, " + weg.length + " entfallen, " + preis.length + " mit geändertem Preis.");
    for (const k of dazu) console.log("  neu:        " + k + "  (" + neu.get(k).name + ")");
    for (const k of weg) console.log("  entfallen:  " + k + "  (" + alt.get(k).name + ")");
    for (const k of preis) console.log("  Preis:      " + k + "  " + JSON.stringify(alt.get(k).preis) + " → " + JSON.stringify(neu.get(k).preis));
  }

  const heute = new Date().toISOString().slice(0, 10);
  const stand = { quelle: "models.dev", adresse: "https://models.dev", lizenz: "MIT", abgerufenAm: heute, einheit: "USD je 1 Mio. Token" };
  const text = `// Modelle und Preise laut models.dev (MIT-Lizenz, von einer Gemeinschaft gepflegt).
// Diese Datei erzeugt werkzeuge/modelle-holen.js. Nicht von Hand ändern, sondern das Skript neu laufen lassen.
// Preise in USD je 1 Mio. Token: ein = Eingabe, aus = Ausgabe, cacheLesen und cacheSchreiben = Zwischenspeicher.
// kontext und ausgabe sind Obergrenzen in Token. Leere Angaben fehlen in der Quelle.
window.KI_MODELLE_STAND = ${JSON.stringify(stand, null, 2).replace(/^(\s*)"([A-Za-z]+)":/gm, "$1$2:")};

window.KI_MODELLE = [
${modelle.map(schreibeZeile).join(",\n")}
];
`;
  fs.writeFileSync(ziel, text);
  const jeAnbieter = new Map();
  for (const modell of modelle) jeAnbieter.set(modell.anbieter, (jeAnbieter.get(modell.anbieter) || 0) + 1);
  console.log("geschrieben: daten/modelle.js mit " + modelle.length + " Modellen von " + jeAnbieter.size + " Anbietern, Stand " + heute + ".");
  console.log("  " + [...jeAnbieter].map(([kennung, anzahl]) => kennung + " " + anzahl).join(" · "));
  console.log("  ohne Preis: " + modelle.filter(modell => !modell.preis).length + " · Preis 0 / 0: " + modelle.filter(modell => modell.preis && modell.preis.ein === 0 && modell.preis.aus === 0).length);
}

los().catch(fehler => {
  console.error(fehler.message);
  process.exit(1);
});
