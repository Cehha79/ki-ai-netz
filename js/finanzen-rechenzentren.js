// Baustein „Rechenzentren“ der Finanzseite: Investitionsausgaben als Balken (Ausblick für das Jahr
// oder Ausgaben im Quartal), Verträge über Rechenleistung aus daten/beziehungen.js (Art „rechner“)
// und weitere Zahlen aus daten/finanzen.js.
// Braucht js/rahmen.js, js/hilfen.js und js/finanzen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.rechenzentren = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { zahlText, strecken, tabelle } = window.Hilfen;
  const Finanz = window.Finanz;
  const Klang = window.Klang;
  const kennzahlen = window.KI_KENNZAHLEN || [];
  const vertraege = (window.KI_BEZIEHUNGEN || []).filter(b => b.art === "rechner");
  const weitere = kennzahlen.filter(zeile => zeile.groesse === "auftragsbestand" || zeile.groesse === "leistung");

  // Bleibt beim Sprachwechsel erhalten.
  let ansicht = "capexJahr";

  function bauen(ziel) {
    const wahl = el("div", "umschalter");
    const balken = el("div", "balken geld");
    const zahlen = el("div", "zahlen vier drei");
    const felder = {};
    for (const [name, text] of [["firmen", "rz.zFirmen"], ["von", "rz.zVon"], ["bis", "rz.zBis"]]) {
      const feld = el("div");
      felder[name] = el("b", "", "0");
      feld.append(felder[name], el("span", "", T(text)));
      zahlen.append(feld);
    }
    const zeitraum = el("p", "att-kopf");
    const nachweise = el("div", "belege");

    function zeigen() {
      wahl.replaceChildren(...[["capexJahr", "rz.jahr"], ["capex", "rz.quartal"]].map(([kennung, text]) => {
        const knopf = el("button", "", T(text));
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(kennung === ansicht));
        knopf.addEventListener("click", () => {
          ansicht = kennung;
          Klang.doppelton();
          zeigen();
        });
        return knopf;
      }));
      const reihe = kennzahlen.filter(zeile => zeile.groesse === ansicht).sort((a, b) => (b.bis || b.wert) - (a.bis || a.wert));
      const groesste = Math.max(...reihe.map(zeile => zeile.bis || zeile.wert));
      const zeilen = [];
      for (const zeile of reihe) {
        const bahn = el("i");
        const fuellung = el("u");
        fuellung.style.setProperty("--f", "#ffb000");
        fuellung.style.setProperty("--w", ((zeile.bis || zeile.wert) / groesste * 100) + "%");
        bahn.append(fuellung);
        zeilen.push(Finanz.firma(zeile.anbieter), bahn, el("em", "", Finanz.kennzahlText(zeile)));
      }
      balken.replaceChildren(...zeilen);
      felder.firmen.textContent = String(reihe.length);
      felder.von.textContent = zahlText(reihe.reduce((summe, zeile) => summe + zeile.wert, 0), 2);
      felder.bis.textContent = zahlText(reihe.reduce((summe, zeile) => summe + (zeile.bis || zeile.wert), 0), 2);
      zeitraum.textContent = reihe.length ? Finanz.zeitraum(reihe[0].zeitraum) : "";
      nachweise.replaceChildren(...[...new Set(reihe.map(zeile => zeile.quelle))].map(Finanz.beleg));
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("rz.wahl"), wahl, abschnitt("rz.was"), el("p", "erklaerung", T("rz.wasText")), abschnitt("rz.gw"), el("p", "erklaerung", T("rz.gwText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("rz.bild"), zeitraum, balken, zahlen, el("p", "profil-notiz", T("rz.hinweis") + " " + T("fin.alphabet")), nachweise);
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);

    const unten = el("div", "breit");
    unten.append(
      abschnitt("rz.vertraege"),
      strecken(vertraege, Finanz.anbieter, true),
      abschnitt("rz.weitere"),
      tabelle("kennzahlen", [T("fin.anbieter"), T("bew.spGroesse"), T("bew.spZeitraum"), T("bew.spWert"), T("lim.spHinweis"), T("feld.quelle")], weitere.map(zeile => ({
        zellen: [Finanz.firma(zeile.anbieter), T("kz." + zeile.groesse), Finanz.zeitraum(zeile.zeitraum), Finanz.kennzahlText(zeile), zeile.hinweis ? L(zeile.hinweis) : "–", Finanz.beleg(zeile.quelle)]
      })))
    );
    const grenze = el("div");
    grenze.append(abschnitt("tok.grenze"), el("p", "erklaerung", T("rz.grenzeText")));
    const herkunft = el("div");
    herkunft.append(abschnitt("lim.quellen"), Finanz.quellenliste(kennzahlen.filter(zeile => ["capex", "capexJahr", "auftragsbestand", "leistung"].includes(zeile.groesse)).map(zeile => zeile.quelle)));
    const schluss = el("div", "zwei");
    schluss.append(grenze, herkunft);
    ziel.replaceChildren(Finanz.hinweis(), spalten, unten, schluss);
    zeigen();
  }

  return { bauen };
})();
