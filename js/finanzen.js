// Gemeinsame Hilfen der Finanzseite: Hinweis „keine Anlageberatung“, Quellenangaben mit Datum und
// Art, Namen der Firmen mit Logo, Schreibweise von Beträgen und Kennzahlen.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js und daten/finanzen.js.
window.Finanz = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { zahlText, datumText, eigenname, verweis, logo } = window.Hilfen;
  const anbieter = new Map((window.KI_ANBIETER || []).map(eintrag => [eintrag.id, eintrag]));
  const quellen = window.KI_FINANZ_QUELLEN || {};
  const zeitraeume = window.KI_ZEITRAEUME || {};
  const datenstand = window.KI_FINANZEN_STAND || {};

  // Steht über jedem Baustein der Finanzseite.
  function hinweis() {
    const kasten = el("p", "att-warnung finanzhinweis");
    kasten.append(el("b", "", T("fin.keineBeratung")), document.createTextNode(" " + T("fin.keineBeratungText") + " " + T("fin.geprueft") + " " + datumText(datenstand.geprueftAm) + "."));
    return kasten;
  }

  // Eine Quelle: Verweis, Datum der Veröffentlichung und der Vermerk, wenn es ein Pressebericht ist.
  function beleg(schluessel) {
    const quelle = quellen[schluessel];
    const feld = el("span", "beleg");
    const link = verweis(quelle.url, quelle.name);
    link.lang = "en";
    feld.append(link, document.createTextNode(" · " + (quelle.datum ? datumText(quelle.datum) : T("fin.ohneDatum")) + (quelle.art === "presse" ? " · " + T("fin.presse") : "")));
    return feld;
  }

  // Mehrere Quellen untereinander, etwa in einer Tabellenzelle.
  function belege(schluessel) {
    const feld = el("span", "belege");
    feld.append(...schluessel.map(beleg));
    return feld;
  }

  // Liste aller Quellen eines Bausteins, jede nur einmal.
  function quellenliste(schluessel) {
    const liste = el("ul", "quellenliste");
    for (const eintrag of [...new Set(schluessel)]) {
      const punkt = el("li");
      punkt.append(beleg(eintrag));
      liste.append(punkt);
    }
    return liste;
  }

  // Name einer Firma mit Logo.
  function firma(kennung) {
    const eintrag = anbieter.get(kennung);
    const feld = el("span", "modellname");
    feld.append(logo(eintrag, false), eigenname("b", eintrag.kurz));
    return feld;
  }

  // Betrag in Milliarden mit Währung; das Zeichen davor sagt „bis zu“, „mehr als“ oder „rund“.
  function betrag(wert, waehrung, zeichen) {
    return (zeichen ? zeichen + " " : "") + zahlText(wert, 2) + " " + T("fin.mrd") + " " + waehrung;
  }

  // Wert einer Kennzahl: Milliarden US-Dollar, als Spanne oder als Leistung in Gigawatt.
  function kennzahlText(zeile) {
    if (zeile.groesse === "leistung") return (zeile.ab ? "> " : "") + zahlText(zeile.wert, 1) + " GW";
    if (typeof zeile.bis === "number") return zahlText(zeile.wert, 2) + " – " + zahlText(zeile.bis, 2) + " " + T("fin.mrd") + " USD";
    return betrag(zeile.wert, "USD");
  }

  const zeitraum = schluessel => L(zeitraeume[schluessel]);

  // Zeichen vor dem Betrag oder der Bewertung einer Runde: „bis zu“, „mehr als“ oder „rund“.
  const zeichen = (runde, feld) => runde[feld + "Bis"] ? "≤" : runde[feld + "Ab"] ? ">" : runde[feld + "Rund"] ? "≈" : "";

  return { anbieter, quellen, hinweis, beleg, belege, quellenliste, firma, betrag, kennzahlText, zeitraum, zeichen };
})();
