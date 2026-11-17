// Prüft das Gerüst der Website. Aufruf im Projektordner: node werkzeuge/pruefen.js
// Node ist ein Programm, das JavaScript außerhalb des Browsers ausführt. Die Website selbst braucht es nicht.
"use strict";

const fs = require("fs");
const path = require("path");

const wurzel = path.join(__dirname, "..");
const fehler = [];
const hinweise = [];
const melden = text => fehler.push(text);
const lies = datei => fs.readFileSync(path.join(wurzel, datei), "utf8");
const gibtEs = datei => fs.existsSync(path.join(wurzel, datei));

// Die Datendateien schreiben auf window; hier bekommt jede ein eigenes leeres window.
function laden(datei, name) {
  const window = {};
  new Function("window", lies(datei))(window);
  return window[name];
}

const texte = laden("js/texte.js", "KI_TEXTE");
const bereiche = laden("js/bereiche.js", "KI_BEREICHE");
// Nebenseiten wie die Datenschutzseite haben denselben Aufbau wie ein Bereich, aber keine Bausteine.
const nebenseiten = laden("js/bereiche.js", "KI_NEBENSEITEN") || [];
const alleSeiten = [...bereiche, ...nebenseiten];
const sprachen = ["de", "en", "tr"];

// 1. Jeder Text liegt in allen drei Sprachen vor.
function sprachenPruefen(wert, ort) {
  if (Array.isArray(wert)) {
    wert.forEach((eintrag, nummer) => sprachenPruefen(eintrag, ort + "[" + nummer + "]"));
    return;
  }
  if (!wert || typeof wert !== "object") return;
  if ("de" in wert) {
    for (const sprache of sprachen) {
      if (typeof wert[sprache] !== "string" || !wert[sprache].trim()) melden("Text fehlt (" + sprache + "): " + ort);
    }
    return;
  }
  for (const [schluessel, eintrag] of Object.entries(wert)) sprachenPruefen(eintrag, ort + "." + schluessel);
}
sprachenPruefen(texte, "texte");
sprachenPruefen(bereiche, "bereiche");
sprachenPruefen(nebenseiten, "nebenseiten");

// 2. Jeder Textschlüssel, den ein Skript nennt, steht in texte.js, und jeder Text wird benutzt.
// Schlüssel stehen als "bereich.name" in den Skripten; "bereich." + Wert setzt den Schlüssel erst beim Lauf zusammen.
const rahmen = lies("js/rahmen.js");
const skripte = fs.readdirSync(path.join(wurzel, "js")).filter(datei => datei.endsWith(".js") && datei !== "texte.js" && datei !== "bereiche.js");
const bereicheDerTexte = [...new Set(Object.keys(texte).map(schluessel => schluessel.split(".")[0]))].join("|");
const benutzt = new Set();
const anfaenge = new Set();
for (const datei of skripte) {
  const inhalt = lies("js/" + datei);
  for (const treffer of inhalt.matchAll(new RegExp("[\"'`]((?:" + bereicheDerTexte + ")\\.[A-Za-z0-9]+)[\"'`]", "g"))) {
    benutzt.add(treffer[1]);
    if (!texte[treffer[1]]) melden(datei + " nennt einen Text, den es nicht gibt: " + treffer[1]);
  }
  for (const treffer of inhalt.matchAll(new RegExp("[\"'`]((?:" + bereicheDerTexte + ")\\.)[\"'`]\\s*\\+", "g"))) anfaenge.add(treffer[1]);
}
for (const schluessel of Object.keys(texte)) {
  if (!benutzt.has(schluessel) && ![...anfaenge].some(anfang => schluessel.startsWith(anfang))) hinweise.push("Text wird nicht benutzt: " + schluessel);
}

// 3. Jeder Bereich hat seine Seite, und die Seite stimmt mit bereiche.js überein.
const versionen = new Map();
const entschluesseln = text => text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
const kennungen = new Set();
for (const bereich of alleSeiten) {
  if (kennungen.has(bereich.id)) melden("Bereich doppelt: " + bereich.id);
  kennungen.add(bereich.id);
  for (const baustein of bereich.bausteine) {
    if (!["geplant", "fertig"].includes(baustein.stand)) melden("Unbekannter Stand „" + baustein.stand + "“ in " + bereich.id);
  }
  if (!gibtEs(bereich.datei)) {
    melden("Seite fehlt: " + bereich.datei);
    continue;
  }
  const seite = lies(bereich.datei);
  if (!seite.includes('data-bereich="' + bereich.id + '"')) melden(bereich.datei + ": data-bereich ist nicht „" + bereich.id + "“");
  for (const kennung of ["leiste", "kopf", "inhalt", "seitentitel", "seitentext", "uebersicht", "fuss"]) {
    if (!seite.includes('id="' + kennung + '"')) melden(bereich.datei + ": Element mit id „" + kennung + "“ fehlt");
  }
  const titel = seite.match(/<h1 id="seitentitel">(.*?) <span>(.*?)<\/span><\/h1>/);
  if (!titel || entschluesseln(titel[1]) !== bereich.titel.de || entschluesseln(titel[2]) !== bereich.akzent.de) melden(bereich.datei + ": Überschrift weicht von bereiche.js ab");
  const vorspann = seite.match(/<p class="vorspann" id="seitentext">(.*?)<\/p>/);
  if (!vorspann || entschluesseln(vorspann[1]) !== bereich.text.de) melden(bereich.datei + ": Vorspann weicht von bereiche.js ab");

  // 4. Eingebundene Dateien gibt es, und ihre Versionsnummer ist auf allen Seiten gleich.
  for (const treffer of seite.matchAll(/(?:src|href)="((?:css|js|daten)\/[^"?]+)\?v=(\d+)"/g)) {
    const [, datei, version] = treffer;
    if (!gibtEs(datei)) melden(bereich.datei + ": eingebundene Datei fehlt: " + datei);
    if (!versionen.has(datei)) versionen.set(datei, new Map());
    versionen.get(datei).set(bereich.datei, version);
  }
  for (const treffer of seite.matchAll(/(?:src|href)="((?:css|js|daten)\/[^"?]+)"/g)) melden(bereich.datei + ": Versionsnummer ?v= fehlt bei " + treffer[1]);
}
for (const [datei, seiten] of versionen) {
  const werte = new Set(seiten.values());
  if (werte.size > 1) melden("Versionsnummer von " + datei + " ist nicht auf allen Seiten gleich: " + [...werte].join(", "));
  // Die Dateien des Rahmens gehören auf jede Seite, alle anderen nur dorthin, wo sie gebraucht werden.
  const rahmenDateien = ["css/leitstand.css", "js/texte.js", "js/bereiche.js", "js/klang.js", "js/rahmen.js"];
  if (rahmenDateien.includes(datei) && seiten.size !== alleSeiten.length) melden(datei + " ist nicht auf allen Seiten eingebunden");
}

// 5. Verweise im Rahmen zeigen auf vorhandene Dateien.
for (const treffer of rahmen.matchAll(/"([a-z-]+\.html)"/g)) if (!gibtEs(treffer[1])) melden("rahmen.js verweist auf eine fehlende Seite: " + treffer[1]);

// 6. Anbieterdaten: Pflichtfelder, Gruppen, Länder, Adressen, Logos, Datumsangaben.
const anbieterDatei = "daten/anbieter.js";
let anbieter = [];
if (!gibtEs(anbieterDatei)) {
  melden("Datendatei fehlt: " + anbieterDatei);
} else {
  const daten = {};
  new Function("window", lies(anbieterDatei))(daten);
  anbieter = daten.KI_ANBIETER || [];
  const gruppen = daten.KI_GRUPPEN || [];
  const laender = daten.KI_LAENDER || {};
  sprachenPruefen(gruppen, "gruppen");
  sprachenPruefen(laender, "laender");
  const gruppenKennungen = new Set(gruppen.map(gruppe => gruppe.id));
  const arten = ["text", "multi", "bild", "video", "audio", "chip", "rechenzentrum"];
  const zustaende = ["unveraendert", "umbenannt", "uebernommen", "fusioniert", "eingestellt"];
  const istDatum = wert => /^\d{4}-\d{2}-\d{2}$/.test(wert || "");
  const istAdresse = wert => /^https:\/\/[^\s"]+$/.test(wert || "");
  const gesehen = new Set();
  for (const eintrag of anbieter) {
    const ort = "anbieter." + eintrag.id;
    if (!/^[a-z0-9]+$/.test(eintrag.id || "")) melden(ort + ": Kennung fehlt oder enthält andere Zeichen als Kleinbuchstaben und Ziffern");
    if (gesehen.has(eintrag.id)) melden(ort + ": Kennung doppelt");
    gesehen.add(eintrag.id);
    for (const feld of ["name", "kurz"]) if (typeof eintrag[feld] !== "string" || !eintrag[feld].trim()) melden(ort + ": Feld „" + feld + "“ fehlt");
    // Der Sitz ist ein Text oder, wenn die Stadt in den Sprachen verschieden heißt, ein Feld mit drei Sprachen.
    if (typeof eintrag.sitz === "string") {
      if (!eintrag.sitz.trim()) melden(ort + ": Feld „sitz“ fehlt");
    } else {
      sprachenPruefen({ sitz: eintrag.sitz || { de: "" } }, ort);
    }
    if ((eintrag.kurz || "").length > 12) melden(ort + ": Kurzname länger als 12 Zeichen");
    if (!gruppenKennungen.has(eintrag.gruppe)) melden(ort + ": unbekannte Gruppe „" + eintrag.gruppe + "“");
    if (!laender[eintrag.land]) melden(ort + ": Land „" + eintrag.land + "“ steht nicht in KI_LAENDER");
    // Ein Gründungsjahr darf nur fehlen, wenn es ausdrücklich als offen geführt wird.
    const jahrOffen = eintrag.gruendung === null && (eintrag.offen || []).includes("gruendung");
    if (!jahrOffen && (!Number.isInteger(eintrag.gruendung) || eintrag.gruendung < 1900 || eintrag.gruendung > 2026)) melden(ort + ": Gründungsjahr fehlt oder ist unplausibel");
    if (!istAdresse(eintrag.web)) melden(ort + ": Webadresse fehlt oder beginnt nicht mit https://");
    if (!zustaende.includes(eintrag.status)) melden(ort + ": unbekannter Status „" + eintrag.status + "“");
    if (eintrag.status !== "unveraendert" && !eintrag.hinweis) melden(ort + ": Status „" + eintrag.status + "“ ohne Hinweis");
    if (!istDatum(eintrag.geprueftAm)) melden(ort + ": Prüfdatum fehlt");
    if (eintrag.logo) {
      if (!gibtEs("assets/anbieter/" + eintrag.logo)) melden(ort + ": Logodatei fehlt: " + eintrag.logo);
      // logoGrund fehlt bei Logos für hellen Grund; "dunkel" und "system" sind die Ausnahmen.
      if (eintrag.logoGrund && !["dunkel", "system"].includes(eintrag.logoGrund)) melden(ort + ": unbekannter Wert für logoGrund: " + eintrag.logoGrund);
    } else {
      hinweise.push("Kein Logo: " + eintrag.name);
    }
    sprachenPruefen({ portraet: eintrag.portraet, hinweis: eintrag.hinweis }, ort);
    if (!eintrag.portraet) melden(ort + ": Kurzporträt fehlt");
    const modell = eintrag.spitzenmodell || {};
    if (!modell.name) melden(ort + ": Spitzenmodell fehlt");
    if (!arten.includes(modell.art)) melden(ort + ": unbekannte Art „" + modell.art + "“ beim Spitzenmodell");
    if (modell.datum && !istDatum(modell.datum)) melden(ort + ": Datum des Spitzenmodells ist nicht JJJJ-MM-TT");
    if (!modell.quelle || !istAdresse(modell.quelle.url) || !modell.quelle.name) melden(ort + ": Quelle des Spitzenmodells fehlt");
    if (!Array.isArray(eintrag.quellen) || !eintrag.quellen.length) melden(ort + ": Quellen fehlen");
    for (const quelle of eintrag.quellen || []) if (!quelle.name || !istAdresse(quelle.url)) melden(ort + ": Quelle ohne Namen oder gültige Adresse");
    if ((eintrag.offen || []).length) hinweise.push("Offene Felder bei " + eintrag.name + ": " + eintrag.offen.join(", "));
  }
  for (const gruppe of gruppen) if (!anbieter.some(eintrag => eintrag.gruppe === gruppe.id)) melden("Gruppe ohne Anbieter: " + gruppe.id);
}

// 6b. Beziehungen: beide Seiten bekannt, Art, Datum, Text in drei Sprachen, Quelle.
const beziehungDatei = "daten/beziehungen.js";
let beziehungen = [];
if (!gibtEs(beziehungDatei)) {
  melden("Datendatei fehlt: " + beziehungDatei);
} else {
  const daten = {};
  new Function("window", lies(beziehungDatei))(daten);
  beziehungen = daten.KI_BEZIEHUNGEN || [];
  const kennungenDerAnbieter = new Set(anbieter.map(eintrag => eintrag.id));
  beziehungen.forEach((b, nummer) => {
    const ort = "beziehungen[" + nummer + "] " + b.von + "→" + b.nach;
    if (!kennungenDerAnbieter.has(b.von) || !kennungenDerAnbieter.has(b.nach)) melden(ort + ": Anbieter steht nicht in daten/anbieter.js");
    if (b.von === b.nach) melden(ort + ": Anfang und Ziel sind gleich");
    if (!["geld", "rechner", "uebernahme"].includes(b.art)) melden(ort + ": unbekannte Art „" + b.art + "“");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(b.datum || "")) melden(ort + ": Datum fehlt oder ist nicht JJJJ-MM-TT");
    if (typeof b.gesichert !== "boolean") melden(ort + ": Angabe „gesichert“ fehlt");
    if (!b.quelle || !b.quelle.name || !/^https:\/\//.test(b.quelle.url || "")) melden(ort + ": Quelle fehlt");
    sprachenPruefen({ text: b.text || { de: "" } }, ort);
  });
}

// 7. Modelldaten aus models.dev: Herkunftsangabe, Zuordnung zum Anbieter, Zahlen und Datumsangaben.
const modellDatei = "daten/modelle.js";
let modelle = [];
if (!gibtEs(modellDatei)) {
  melden("Datendatei fehlt: " + modellDatei);
} else {
  const daten = {};
  new Function("window", lies(modellDatei))(daten);
  modelle = daten.KI_MODELLE || [];
  const stand = daten.KI_MODELLE_STAND || {};
  for (const feld of ["quelle", "adresse", "lizenz", "abgerufenAm", "einheit"]) if (!stand[feld]) melden("modelle: Angabe „" + feld + "“ fehlt in KI_MODELLE_STAND");
  const anbieterKennungen = new Set(anbieter.map(eintrag => eintrag.id));
  const gesehen = new Set();
  const istMenge = wert => wert === null || (typeof wert === "number" && wert >= 0);
  for (const modell of modelle) {
    const ort = "modelle." + modell.anbieter + "/" + modell.id;
    if (!anbieterKennungen.has(modell.anbieter)) melden(ort + ": Anbieter steht nicht in daten/anbieter.js");
    if (!modell.id || !modell.name) melden(ort + ": Kennung oder Name fehlt");
    if (gesehen.has(ort)) melden(ort + ": Modell doppelt");
    gesehen.add(ort);
    if (modell.datum && !/^\d{4}-\d{2}-\d{2}$/.test(modell.datum)) melden(ort + ": Datum ist nicht JJJJ-MM-TT");
    if (!istMenge(modell.kontext) || !istMenge(modell.ausgabe)) melden(ort + ": Kontext oder Ausgabe ist keine Zahl");
    if (!Array.isArray(modell.eingabeArten) || !Array.isArray(modell.ausgabeArten)) melden(ort + ": Ein- oder Ausgabearten fehlen");
    if (modell.preis && !["ein", "aus", "cacheLesen", "cacheSchreiben"].every(feld => istMenge(modell.preis[feld]))) melden(ort + ": Preis enthält einen ungültigen Wert");
  }
  if (!modelle.length) melden("modelle: Liste ist leer");
}

// 8. Abos: bekannter Anbieter, Preis, Verhältnisse, Texte in drei Sprachen, Quellen und Prüfdatum.
const aboDatei = "daten/abos.js";
let abos = [];
if (!gibtEs(aboDatei)) {
  melden("Datendatei fehlt: " + aboDatei);
} else {
  const daten = {};
  new Function("window", lies(aboDatei))(daten);
  abos = daten.KI_ABOS || [];
  const kennungenDerAnbieter = new Set(anbieter.map(eintrag => eintrag.id));
  const stand = daten.KI_ABOS_STAND || {};
  if (!/^\d{4}-\d{2}-\d{2}$/.test(stand.geprueftAm || "")) melden("abos: Prüfdatum fehlt in KI_ABOS_STAND");
  if (!stand.waehrung) melden("abos: Währung fehlt in KI_ABOS_STAND");
  const istVerhaeltnis = wert => wert === null || wert === "keins" || (typeof wert === "number" && wert > 0);
  const gesehen = new Set();
  for (const abo of abos) {
    const ort = "abos." + abo.id;
    if (!abo.id || !abo.name) melden(ort + ": Kennung oder Name fehlt");
    if (gesehen.has(abo.id)) melden(ort + ": Kennung doppelt");
    gesehen.add(abo.id);
    if (!kennungenDerAnbieter.has(abo.anbieter)) melden(ort + ": Anbieter steht nicht in daten/anbieter.js");
    if (abo.preis !== null && !(typeof abo.preis === "number" && abo.preis >= 0)) melden(ort + ": Preis ist keine Zahl");
    if (abo.preis === null) hinweise.push("Preis nicht bestätigt: " + abo.anbieter + " " + abo.name);
    if (!istVerhaeltnis(abo.fenster) || !istVerhaeltnis(abo.woche)) melden(ort + ": „fenster“ oder „woche“ hat einen ungültigen Wert");
    sprachenPruefen({ fensterText: abo.fensterText || { de: "" }, wocheText: abo.wocheText || { de: "" }, hinweis: abo.hinweis }, ort);
  }
  (daten.KI_ABO_VERGLEICH || []).forEach((zeile, nummer) => {
    const ort = "abos.vergleich[" + nummer + "]";
    sprachenPruefen({ frage: zeile.frage || { de: "" }, antworten: zeile.antworten }, ort);
    for (const kennung of Object.keys(zeile.antworten || {})) if (!kennungenDerAnbieter.has(kennung)) melden(ort + ": Anbieter „" + kennung + "“ steht nicht in daten/anbieter.js");
  });
  const quellen = daten.KI_ABO_QUELLEN || [];
  if (!quellen.length) melden("abos: Quellen fehlen");
  for (const quelle of quellen) if (!quelle.name || !/^https:\/\//.test(quelle.url || "") || !kennungenDerAnbieter.has(quelle.anbieter)) melden("abos: Quelle ohne Namen, gültige Adresse oder bekannten Anbieter");
  for (const quelle of quellen) if (!Array.isArray(quelle.fuer) || !quelle.fuer.length) melden("abos: Quelle ohne Zuordnung zu einem Baustein: " + quelle.name);
}

// 8b. Finanzdaten: bekannte Anbieter und Quellen, Datumsangaben, Texte in drei Sprachen.
const finanzDatei = "daten/finanzen.js";
let finanzQuellen = 0;
if (!gibtEs(finanzDatei)) {
  melden("Datendatei fehlt: " + finanzDatei);
} else {
  const daten = {};
  new Function("window", lies(finanzDatei))(daten);
  const kennungenDerAnbieter = new Set(anbieter.map(eintrag => eintrag.id));
  const quellen = daten.KI_FINANZ_QUELLEN || {};
  const zeitraeume = daten.KI_ZEITRAEUME || {};
  const istDatum = wert => /^\d{4}-\d{2}-\d{2}$/.test(wert || "");
  finanzQuellen = Object.keys(quellen).length;
  if (!istDatum((daten.KI_FINANZEN_STAND || {}).geprueftAm)) melden("finanzen: Prüfdatum fehlt in KI_FINANZEN_STAND");
  for (const [schluessel, quelle] of Object.entries(quellen)) {
    if (!quelle.name || !/^https:\/\//.test(quelle.url || "")) melden("finanzen.quellen." + schluessel + ": Name oder gültige Adresse fehlt");
    if (quelle.datum !== null && !istDatum(quelle.datum)) melden("finanzen.quellen." + schluessel + ": Datum ist weder JJJJ-MM-TT noch null");
    if (!["primaer", "presse"].includes(quelle.art)) melden("finanzen.quellen." + schluessel + ": unbekannte Art „" + quelle.art + "“");
  }
  const benutzteQuellen = new Set();
  const quellenPruefen = (liste, ort) => {
    if (!liste.length) melden(ort + ": Quelle fehlt");
    for (const schluessel of liste) {
      benutzteQuellen.add(schluessel);
      if (!quellen[schluessel]) melden(ort + ": Quelle „" + schluessel + "“ steht nicht in KI_FINANZ_QUELLEN");
    }
  };
  sprachenPruefen(zeitraeume, "finanzen.zeitraeume");
  (daten.KI_BOERSE || []).forEach(eintrag => {
    const ort = "finanzen.boerse." + eintrag.anbieter;
    if (!kennungenDerAnbieter.has(eintrag.anbieter)) melden(ort + ": Anbieter steht nicht in daten/anbieter.js");
    if (!["notiert", "mutter", "laeuft", "eingereicht"].includes(eintrag.status)) melden(ort + ": unbekannter Status „" + eintrag.status + "“");
    for (const feld of ["handel", "eingereicht"]) if (eintrag[feld] && !istDatum(eintrag[feld])) melden(ort + ": „" + feld + "“ ist nicht JJJJ-MM-TT");
    if ((typeof eintrag.preis === "number" || eintrag.spanne) && !eintrag.waehrung) melden(ort + ": Preis ohne Währung");
    quellenPruefen(eintrag.quellen || [], ort);
    sprachenPruefen({ text: eintrag.text }, ort);
  });
  (daten.KI_RUNDEN || []).forEach((runde, nummer) => {
    const ort = "finanzen.runden[" + nummer + "] " + runde.anbieter;
    if (!kennungenDerAnbieter.has(runde.anbieter)) melden(ort + ": Anbieter steht nicht in daten/anbieter.js");
    if (!istDatum(runde.datum)) melden(ort + ": Datum fehlt oder ist nicht JJJJ-MM-TT");
    if (typeof runde.betrag !== "number" || !runde.waehrung) melden(ort + ": Betrag oder Währung fehlt");
    if (runde.bewertung !== null && typeof runde.bewertung !== "number") melden(ort + ": Bewertung ist weder Zahl noch null");
    quellenPruefen(runde.quellen || [], ort);
    sprachenPruefen({ art: runde.art || { de: "" }, geldgeber: runde.geldgeber }, ort);
  });
  (daten.KI_KENNZAHLEN || []).forEach((zeile, nummer) => {
    const ort = "finanzen.kennzahlen[" + nummer + "] " + zeile.anbieter;
    if (!kennungenDerAnbieter.has(zeile.anbieter)) melden(ort + ": Anbieter steht nicht in daten/anbieter.js");
    if (!texte["kz." + zeile.groesse]) melden(ort + ": für die Größe „" + zeile.groesse + "“ fehlt der Text kz." + zeile.groesse);
    if (typeof zeile.wert !== "number") melden(ort + ": Wert ist keine Zahl");
    if (!zeitraeume[zeile.zeitraum]) melden(ort + ": Zeitraum „" + zeile.zeitraum + "“ steht nicht in KI_ZEITRAEUME");
    quellenPruefen([zeile.quelle], ort);
    sprachenPruefen({ hinweis: zeile.hinweis }, ort);
  });
  for (const schluessel of Object.keys(quellen)) if (!benutzteQuellen.has(schluessel)) hinweise.push("Finanzquelle wird nicht benutzt: " + schluessel);
}

// 9. Glossar: Kennung, Begriff und Text in drei Sprachen, Verweis auf eine vorhandene Seite.
const glossarDatei = "daten/glossar.js";
let glossar = [];
if (!gibtEs(glossarDatei)) {
  melden("Datendatei fehlt: " + glossarDatei);
} else {
  const daten = {};
  new Function("window", lies(glossarDatei))(daten);
  glossar = daten.KI_GLOSSAR || [];
  const gesehen = new Set();
  for (const eintrag of glossar) {
    const ort = "glossar." + eintrag.id;
    if (!/^[a-z0-9]+$/.test(eintrag.id || "")) melden(ort + ": Kennung fehlt oder enthält andere Zeichen als Kleinbuchstaben und Ziffern");
    if (gesehen.has(eintrag.id)) melden(ort + ": Kennung doppelt");
    gesehen.add(eintrag.id);
    sprachenPruefen({ begriff: eintrag.begriff || { de: "" }, text: eintrag.text || { de: "" } }, ort);
    if (eintrag.siehe && !gibtEs(eintrag.siehe.split("#")[0])) melden(ort + ": Verweis auf eine fehlende Seite: " + eintrag.siehe);
  }
  if (!glossar.length) melden("glossar: Liste ist leer");
}

// 10. Änderungsprotokoll und Methodik: Datum, Texte in drei Sprachen, bekannte Werte, vorhandene Seiten.
let protokoll = [];
if (!gibtEs("daten/protokoll.js")) {
  melden("Datendatei fehlt: daten/protokoll.js");
} else {
  const daten = {};
  new Function("window", lies("daten/protokoll.js"))(daten);
  protokoll = daten.KI_PROTOKOLL || [];
  protokoll.forEach((eintrag, nummer) => {
    const ort = "protokoll[" + nummer + "]";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(eintrag.datum || "")) melden(ort + ": Datum fehlt oder ist nicht JJJJ-MM-TT");
    sprachenPruefen({ titel: eintrag.titel || { de: "" }, text: eintrag.text || { de: "" } }, ort);
  });
  if (!protokoll.length) melden("protokoll: Liste ist leer");
}
if (!gibtEs("daten/methodik.js")) {
  melden("Datendatei fehlt: daten/methodik.js");
} else {
  const daten = {};
  new Function("window", lies("daten/methodik.js"))(daten);
  const bekannteArten = ["anbieter", "spitzenmodelle", "modelle", "beziehungen", "abos", "finanzen", "glossar", "logos", "schaubilder"];
  for (const art of daten.KI_DATENARTEN || []) {
    const ort = "methodik." + art.id;
    if (!bekannteArten.includes(art.id)) melden(ort + ": für diese Datenart kennt js/methodik.js weder Umfang noch Prüfdatum");
    if (!texte["rh." + art.rhythmus]) melden(ort + ": unbekannter Rhythmus „" + art.rhythmus + "“");
    if (!gibtEs((art.seite || "").split("#")[0])) melden(ort + ": Verweis auf eine fehlende Seite: " + art.seite);
    sprachenPruefen({ name: art.name || { de: "" }, einheit: art.einheit || { de: "" }, quelle: art.quelle || { de: "" }, pflege: art.pflege || { de: "" } }, ort);
  }
  (daten.KI_GRENZEN || []).forEach((grenze, nummer) => sprachenPruefen({ titel: grenze.titel || { de: "" }, text: grenze.text || { de: "" } }, "methodik.grenzen[" + nummer + "]"));
  if (!(daten.KI_DATENARTEN || []).length || !(daten.KI_GRENZEN || []).length) melden("methodik: Datenarten oder Grenzen fehlen");
}

// 11. Datenschutzhinweise: Stand, Texte in drei Sprachen, bekannte Arten von Teilen, gültige Adressen.
if (!gibtEs("daten/datenschutz.js")) {
  melden("Datendatei fehlt: daten/datenschutz.js");
} else {
  const daten = {};
  new Function("window", lies("daten/datenschutz.js"))(daten);
  const hinweise = daten.KI_DATENSCHUTZ || {};
  if (!/^\d{4}-\d{2}$/.test(hinweise.stand || "")) melden("datenschutz: Stand fehlt oder ist nicht JJJJ-MM");
  sprachenPruefen({ kurz: hinweise.kurz || { de: "" }, schluss: hinweise.schluss || { de: "" } }, "datenschutz");
  (hinweise.abschnitte || []).forEach((abschnitt, nummer) => {
    const ort = "datenschutz.abschnitte[" + nummer + "]";
    sprachenPruefen({ titel: abschnitt.titel || { de: "" } }, ort);
    for (const teil of abschnitt.teile || []) {
      if (!["absatz", "liste", "verweise"].includes(teil.art)) melden(ort + ": unbekannte Art „" + teil.art + "“");
      sprachenPruefen({ text: teil.text, titel: teil.titel, punkte: teil.punkte }, ort);
      for (const eintrag of teil.liste || []) {
        if (!/^(https:\/\/|mailto:)/.test(eintrag.url || "")) melden(ort + ": Verweis ohne gültige Adresse");
        if (typeof eintrag.name !== "string") sprachenPruefen({ name: eintrag.name || { de: "" } }, ort);
      }
    }
  });
  if (!(hinweise.abschnitte || []).length) melden("datenschutz: Abschnitte fehlen");
}

const bausteine = bereiche.reduce((summe, bereich) => summe + bereich.bausteine.length, 0);
console.log("Geprüft: " + bereiche.length + " Bereiche, " + nebenseiten.length + " Nebenseite, " + bausteine + " Bausteine, " + Object.keys(texte).length + " Texte der Oberfläche, " + anbieter.length + " Anbieter, " + beziehungen.length + " Beziehungen, " + modelle.length + " Modelle, " + abos.length + " Abos, " + glossar.length + " Begriffe, " + finanzQuellen + " Finanzquellen, drei Sprachen.");
for (const [datei, seiten] of versionen) console.log("  " + datei + "  ?v=" + [...new Set(seiten.values())].join(","));
for (const hinweis of hinweise) console.log("Hinweis: " + hinweis);
if (fehler.length) {
  console.log("\n" + fehler.length + " Fehler:");
  for (const eintrag of fehler) console.log("  - " + eintrag);
  process.exit(1);
}
console.log("Keine Fehler.");
