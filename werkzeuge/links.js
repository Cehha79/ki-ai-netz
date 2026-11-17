// Prüft, ob die Webadressen in den Datendateien erreichbar sind: Anbieter, Beziehungen, Abos,
// Finanzen, Modelldaten und Datenschutzhinweise. Aufruf: node werkzeuge/links.js
// Das Skript ruft jede Adresse einmal ab und ändert nichts. Es braucht Internet.
// Manche Websites sperren automatische Abrufe (Status 403); das ist kein Beweis für eine falsche Adresse.
"use strict";

const fs = require("fs");
const path = require("path");

// Jede Datendatei schreibt auf window; hier landen alle in einem gemeinsamen Objekt.
const daten = {};
for (const datei of ["anbieter.js", "beziehungen.js", "abos.js", "finanzen.js", "modelle.js", "datenschutz.js"]) {
  new Function("window", fs.readFileSync(path.join(__dirname, "..", "daten", datei), "utf8"))(daten);
}

// Jede Adresse nur einmal prüfen, aber merken, wo sie überall steht.
const fundorte = new Map();
const merken = (adresse, ort) => {
  if (!adresse) return;
  if (!fundorte.has(adresse)) fundorte.set(adresse, []);
  fundorte.get(adresse).push(ort);
};
for (const eintrag of daten.KI_ANBIETER) {
  merken(eintrag.web, eintrag.name + " · Website");
  merken(eintrag.spitzenmodell.quelle.url, eintrag.name + " · Quelle Spitzenmodell");
  for (const quelle of eintrag.quellen) merken(quelle.url, eintrag.name + " · Quelle");
}
for (const b of daten.KI_BEZIEHUNGEN || []) merken(b.quelle.url, "Beziehung " + b.von + " → " + b.nach);
for (const quelle of daten.KI_ABO_QUELLEN || []) merken(quelle.url, "Abos · " + quelle.name);
for (const [schluessel, quelle] of Object.entries(daten.KI_FINANZ_QUELLEN || {})) merken(quelle.url, "Finanzen · " + schluessel);
merken((daten.KI_MODELLE_STAND || {}).adresse, "Modelldaten · Herkunft");
for (const abschnitt of (daten.KI_DATENSCHUTZ || {}).abschnitte || []) {
  for (const teil of abschnitt.teile) {
    // E-Mail-Adressen lassen sich nicht abrufen.
    for (const eintrag of teil.liste || []) if (eintrag.url.startsWith("https://")) merken(eintrag.url, "Datenschutz · " + abschnitt.titel.de);
  }
}

async function abrufen(adresse) {
  const abbruch = new AbortController();
  const frist = setTimeout(() => abbruch.abort(), 20000);
  try {
    const antwort = await fetch(adresse, {
      redirect: "follow",
      signal: abbruch.signal,
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh) Linkpruefung", "Accept": "text/html,*/*" }
    });
    return { status: antwort.status, ziel: antwort.url };
  } catch (fehler) {
    return { status: 0, ziel: "", grund: fehler.name === "AbortError" ? "Zeit abgelaufen" : (fehler.cause && fehler.cause.code) || fehler.message };
  } finally {
    clearTimeout(frist);
  }
}

async function alle() {
  const adressen = [...fundorte.keys()];
  const ergebnisse = new Map();
  let naechste = 0;
  // Acht Abrufe laufen gleichzeitig.
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (naechste < adressen.length) {
      const adresse = adressen[naechste++];
      ergebnisse.set(adresse, await abrufen(adresse));
    }
  }));

  const gruppen = { erreichbar: [], gesperrt: [], fehler: [] };
  for (const [adresse, ergebnis] of ergebnisse) {
    if (ergebnis.status >= 200 && ergebnis.status < 300) gruppen.erreichbar.push(adresse);
    else if ([401, 403, 429].includes(ergebnis.status)) gruppen.gesperrt.push(adresse);
    else gruppen.fehler.push(adresse);
  }
  console.log(adressen.length + " Adressen geprüft: " + gruppen.erreichbar.length + " erreichbar, " + gruppen.gesperrt.length + " für automatische Abrufe gesperrt, " + gruppen.fehler.length + " mit Fehler.");
  for (const [titel, liste] of [["Gesperrt (von Hand im Browser prüfen)", gruppen.gesperrt], ["Fehler", gruppen.fehler]]) {
    if (!liste.length) continue;
    console.log("\n" + titel + ":");
    for (const adresse of liste) {
      const ergebnis = ergebnisse.get(adresse);
      console.log("  " + (ergebnis.status || ergebnis.grund) + "  " + adresse + "\n        " + fundorte.get(adresse).join("; "));
    }
  }
  process.exit(gruppen.fehler.length ? 1 : 0);
}

alle();
