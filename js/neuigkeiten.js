// Gemeinsame Grundlage der Neuigkeitenseite: stellt die Meldungen aus den Daten der Website
// zusammen. Es gibt keine eigene Liste von Meldungen; jede entsteht aus einem Eintrag in
// daten/anbieter.js (Spitzenmodell), daten/beziehungen.js oder daten/finanzen.js und trägt
// dessen Datum und Quelle.
// Braucht js/rahmen.js, js/hilfen.js und js/finanzen.js sowie die genannten Datendateien.
window.Meldungen = (() => {
  "use strict";

  const { T, L } = window.Rahmen;
  const { zahlText, hostname } = window.Hilfen;
  const Finanz = window.Finanz;
  const farben = { modell: "#d8dbc9", geld: "#ffb000", rechner: "#7fb4d6", uebernahme: "#ff5a3c", boerse: "#86f58f" };
  const arten = Object.keys(farben);

  // Liefert alle Meldungen in der gewählten Sprache, die jüngste zuerst.
  function liste() {
    const meldungen = [];
    const kurz = kennung => Finanz.anbieter.get(kennung).kurz;
    // Die Quellen der Spitzenmodelle sind nur auf Deutsch beschrieben; in den anderen Sprachen
    // steht deshalb der Name der Website.
    const deutsch = window.Rahmen.sprache() === "de";
    const modellQuelle = quelle => deutsch ? { name: quelle.name, url: quelle.url, sprache: "de" } : { name: hostname(quelle.url), url: quelle.url, sprache: "en" };

    for (const eintrag of window.KI_ANBIETER || []) {
      const modell = eintrag.spitzenmodell;
      if (!modell || !modell.datum) continue;
      meldungen.push({ datum: modell.datum, art: "modell", firmen: [eintrag.id], text: T("neu.modell").replace("{modell}", modell.name), quelle: modellQuelle(modell.quelle), offen: !modell.datumBelegt });
    }
    for (const b of window.KI_BEZIEHUNGEN || []) {
      meldungen.push({ datum: b.datum, art: b.art, firmen: [b.von, b.nach], text: kurz(b.von) + " → " + kurz(b.nach) + ": " + L(b.text), quelle: b.quelle, offen: !b.gesichert });
    }
    const boerse = (window.KI_BOERSE || []).filter(eintrag => (eintrag.handel && !eintrag.erwartet) || eintrag.eingereicht);
    for (const eintrag of boerse) {
      const quelle = Finanz.quellen[eintrag.quellen[0]];
      let text = T("neu.eingereicht");
      if (eintrag.handel) {
        text = T(eintrag.status === "mutter" ? "neu.handelMutter" : "neu.handel").replace("{platz}", eintrag.platz).replace("{kuerzel}", eintrag.kuerzel);
        if (typeof eintrag.preis === "number") text += ", " + T("boe.preis") + " " + zahlText(eintrag.preis, 2) + " " + eintrag.waehrung;
      }
      meldungen.push({ datum: eintrag.handel || eintrag.eingereicht, art: "boerse", firmen: [eintrag.anbieter], text, quelle, offen: quelle.art === "presse" });
    }
    // Ein Börsengang erscheint nur einmal: als erster Handelstag, wenn es ihn schon gab.
    const anDerBoerse = new Set(boerse.filter(eintrag => eintrag.handel).map(eintrag => eintrag.anbieter));
    for (const runde of window.KI_RUNDEN || []) {
      if (runde.datumBericht || (runde.boersengang && anDerBoerse.has(runde.anbieter))) continue;
      const quelle = Finanz.quellen[runde.quellen[0]];
      const text = L(runde.art) + ": " + Finanz.betrag(runde.betrag, runde.waehrung, Finanz.zeichen(runde, "betrag")) + (typeof runde.bewertung === "number" ? ", " + T("bew.spBewertung") + " " + Finanz.betrag(runde.bewertung, runde.waehrung, Finanz.zeichen(runde, "bewertung")) : "");
      meldungen.push({ datum: runde.datum, art: runde.boersengang ? "boerse" : "geld", firmen: [runde.anbieter], text, quelle, offen: quelle.art === "presse" });
    }
    return meldungen.sort((a, b) => b.datum.localeCompare(a.datum) || arten.indexOf(a.art) - arten.indexOf(b.art));
  }

  return { arten, farben, liste };
})();
