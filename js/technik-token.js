// Schaubild „Token“: zerlegt einen Text in Stücke, zählt sie und rechnet aus, was die Eingabe kostet.
// Die Zerlegung ist eine Näherung nach einfachen Regeln, kein echter Tokenizer eines Anbieters.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js und daten/modelle.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.token = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = new Map((window.KI_ANBIETER || []).map(eintrag => [eintrag.id, eintrag]));
  const modelle = (window.KI_MODELLE || []).filter(modell => modell.preis && modell.preis.ein > 0 && modell.kontext > 0 && modell.status !== "deprecated");
  const proben = window.KI_TEXTE["tok.probe"];
  const laengstens = 2000;
  const zeigtHoechstens = 600;

  // Bleibt beim Sprachwechsel erhalten: der eingegebene Text und das gewählte Modell.
  let text = null;
  let modellWahl = (modelle.find(modell => modell.name === "GPT-6 Astra") || modelle[0] || { id: "" }).id;

  // Näherung: kurze Wörter sind ein Stück, lange werden in Stücke von etwa vier Buchstaben geteilt,
  // Zahlen in Dreiergruppen, jedes Satzzeichen ist ein eigenes Stück. Ein Leerzeichen gehört zum folgenden Stück.
  function zerlegen(eingabe) {
    const stuecke = [];
    for (const treffer of eingabe.matchAll(/(\n)|([ \t]*)(\p{L}+|\p{N}+|[^\s\p{L}\p{N}])/gu)) {
      if (treffer[1]) {
        stuecke.push("\n");
        continue;
      }
      const davor = treffer[2] ? " " : "";
      const kern = treffer[3];
      let teile = [kern];
      if (/^\p{L}+$/u.test(kern) && [...kern].length > 6) teile = kern.match(/.{1,4}/gu);
      if (/^\p{N}+$/u.test(kern)) teile = kern.match(/.{1,3}/gu);
      if (teile.length > 1 && [...teile[teile.length - 1]].length < 2) {
        const rest = teile.pop();
        teile[teile.length - 1] += rest;
      }
      teile.forEach((teil, nummer) => stuecke.push((nummer === 0 ? davor : "") + teil));
    }
    return stuecke;
  }

  function bauen(ziel) {
    if (text === null) text = proben[window.Rahmen.sprache()] || proben.de;

    const eingabe = el("textarea", "eingabe");
    eingabe.maxLength = laengstens;
    eingabe.spellcheck = false;
    eingabe.value = text;
    eingabe.setAttribute("aria-label", T("tok.eingabe"));
    const beispiele = el("div", "umschalter");
    for (const [kennung, name] of [["de", "Deutsch"], ["en", "English"], ["tr", "Türkçe"]]) {
      const knopf = el("button", "", T("tok.beispiel") + ": ");
      knopf.type = "button";
      // Der Sprachname behält seine eigene Großschreibung, gleich in welcher Sprache die Seite steht.
      const sprachname = el("span", "", name);
      sprachname.lang = kennung === "tr" ? "tr" : "en";
      knopf.append(sprachname);
      knopf.addEventListener("click", () => {
        eingabe.value = proben[kennung];
        Klang.ton(880, 0.3);
        rechnen();
      });
      beispiele.append(knopf);
    }
    const tokenfeld = el("div", "tokenfeld");
    tokenfeld.setAttribute("aria-live", "polite");
    const zahlen = el("div", "zahlen vier");
    const felder = {};
    for (const [name, schluessel] of [["zeichen", "tok.zeichen"], ["woerter", "tok.woerter"], ["token", "tok.token"], ["jeToken", "tok.jeToken"]]) {
      const feld = el("div");
      felder[name] = el("b", "", "0");
      feld.append(felder[name], el("span", "", T(schluessel)));
      zahlen.append(feld);
    }

    const auswahl = el("select");
    // Enthält nur Eigennamen und Zahlen; ohne diese Kennzeichnung macht die türkische Großschreibung aus i ein İ.
    auswahl.lang = "en";
    auswahl.setAttribute("aria-label", T("tok.modell"));
    for (const modell of modelle) {
      const punkt = el("option", "", anbieter.get(modell.anbieter).kurz + " · " + modell.name);
      punkt.value = modell.id;
      auswahl.append(punkt);
    }
    auswahl.value = modellWahl;
    const rechnung = el("dl", "werte rechnung");
    const zeilen = {};
    for (const [name, schluessel] of [["kosten", "tok.kosten"], ["tausend", "tok.tausend"], ["anteil", "tok.anteil"], ["passt", "tok.passt"]]) {
      zeilen[name] = el("dd", "", "–");
      rechnung.append(el("dt", "", T(schluessel)), zeilen[name]);
    }

    function rechnen() {
      text = eingabe.value;
      modellWahl = auswahl.value;
      const stuecke = zerlegen(text);
      const zeichen = [...text].length;
      felder.zeichen.textContent = zahlText(zeichen);
      felder.woerter.textContent = zahlText((text.match(/\p{L}+/gu) || []).length);
      felder.token.textContent = zahlText(stuecke.length);
      felder.jeToken.textContent = stuecke.length ? zahlText(zeichen / stuecke.length, 1) : "–";
      tokenfeld.replaceChildren(...stuecke.slice(0, zeigtHoechstens).map((stueck, nummer) => {
        if (stueck === "\n") return el("br");
        const marke = el("span", "tok");
        marke.style.setProperty("--nummer", Math.min(nummer, 80));
        marke.title = String(nummer + 1);
        if (stueck.startsWith(" ")) marke.append(el("i", "", "·"), document.createTextNode(stueck.slice(1)));
        else marke.textContent = stueck;
        return marke;
      }));
      const modell = modelle.find(eintrag => eintrag.id === modellWahl);
      if (!modell || !stuecke.length) {
        for (const feld of Object.values(zeilen)) feld.textContent = "–";
        return;
      }
      const kosten = stuecke.length * modell.preis.ein / 1000000;
      zeilen.kosten.textContent = zahlText(kosten, 6) + " USD";
      zeilen.tausend.textContent = zahlText(kosten * 1000, 4) + " USD";
      zeilen.anteil.textContent = zahlText(stuecke.length / modell.kontext * 100, 4) + " %";
      zeilen.passt.textContent = zahlText(Math.floor(modell.kontext / stuecke.length));
    }
    eingabe.addEventListener("input", rechnen);
    auswahl.addEventListener("change", () => {
      Klang.ton(660, 0.3);
      rechnen();
    });

    const abschnitt = text2 => el("h3", "profil-abschnitt", T(text2));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("tok.eingabe"), eingabe, beispiele, abschnitt("tok.was"), el("p", "erklaerung", T("tok.wasText")), abschnitt("tok.warum"), el("p", "erklaerung", T("tok.warumText")));
    const rechteSeite = el("div");
    const wahlzeile = el("div", "filterzeile schlicht");
    wahlzeile.append(auswahl);
    rechteSeite.append(abschnitt("tok.zerlegt"), tokenfeld, zahlen, abschnitt("tok.rechner"), wahlzeile, rechnung, el("p", "profil-notiz", T("tok.preisquelle")), abschnitt("tok.grenze"), el("p", "erklaerung", T("tok.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    rechnen();
  }

  return { bauen };
})();
