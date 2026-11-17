// Baustein „Bewertungen“ der Finanzseite: Balken der genannten Firmenwerte, Tabelle der Runden und
// Börsengänge, Tabelle der Zahlen aus den Berichten. Daten aus daten/finanzen.js.
// Braucht js/rahmen.js, js/hilfen.js und js/finanzen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.bewertungen = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { datumText, tabelle } = window.Hilfen;
  const Finanz = window.Finanz;
  const Klang = window.Klang;
  const runden = window.KI_RUNDEN || [];
  const kennzahlen = (window.KI_KENNZAHLEN || []).filter(zeile => ["umsatz", "verlust", "auftragsbestand", "rechenzentren", "cloud"].includes(zeile.groesse));
  const zeichen = Finanz.zeichen;

  // Bleibt beim Sprachwechsel erhalten.
  let ordnung = "wert";

  function bauen(ziel) {
    const wahl = el("div", "umschalter");
    const balken = el("div", "balken geld");

    function zeigen() {
      wahl.replaceChildren(...[["wert", "bew.nachWert"], ["datum", "bew.nachDatum"]].map(([kennung, text]) => {
        const knopf = el("button", "", T(text));
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(kennung === ordnung));
        knopf.addEventListener("click", () => {
          ordnung = kennung;
          Klang.doppelton();
          zeigen();
        });
        return knopf;
      }));
      const mitWert = runden.filter(runde => typeof runde.bewertung === "number");
      const geordnet = [...mitWert].sort((a, b) => ordnung === "datum" ? b.datum.localeCompare(a.datum) : (b.waehrung === "USD") - (a.waehrung === "USD") || b.bewertung - a.bewertung);
      // Balken gibt es nur für Angaben in US-Dollar; andere Währungen sind nicht umgerechnet.
      const groesste = Math.max(...mitWert.filter(runde => runde.waehrung === "USD").map(runde => runde.bewertung));
      const zeilen = [];
      for (const runde of geordnet) {
        const name = el("span");
        name.append(Finanz.firma(runde.anbieter), document.createTextNode(datumText(runde.datum)));
        const bahn = el("i");
        const fuellung = el("u");
        fuellung.style.setProperty("--f", runde.bewertungBis ? "#7fb4d6" : "#ffb000");
        fuellung.style.setProperty("--w", (runde.waehrung === "USD" ? runde.bewertung / groesste * 100 : 0) + "%");
        bahn.append(fuellung);
        zeilen.push(name, bahn, el("em", "", Finanz.betrag(runde.bewertung, runde.waehrung, zeichen(runde, "bewertung"))));
      }
      balken.replaceChildren(...zeilen);
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("bew.ordnen"), wahl, abschnitt("bew.was"), el("p", "erklaerung", T("bew.wasText")), abschnitt("bew.begriffe"), el("p", "erklaerung", T("bew.begriffeText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("bew.bild"), balken, el("p", "profil-notiz", T("bew.balkenHinweis") + " " + T("fin.zeichen")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);

    const unten = el("div", "breit");
    unten.append(
      abschnitt("bew.runden"),
      tabelle("runden", [T("fin.datum"), T("fin.anbieter"), T("bew.spArt"), T("bew.spBetrag"), T("bew.spBewertung"), T("fin.einzelheiten"), T("feld.quelle")], [...runden].sort((a, b) => b.datum.localeCompare(a.datum)).map(runde => ({
        zellen: [
          datumText(runde.datum),
          Finanz.firma(runde.anbieter),
          L(runde.art),
          Finanz.betrag(runde.betrag, runde.waehrung, zeichen(runde, "betrag")),
          typeof runde.bewertung === "number" ? Finanz.betrag(runde.bewertung, runde.waehrung, zeichen(runde, "bewertung")) : T("bew.keine"),
          L(runde.geldgeber),
          Finanz.belege(runde.quellen)
        ]
      }))),
      abschnitt("bew.kennzahlen"),
      tabelle("kennzahlen", [T("fin.anbieter"), T("bew.spGroesse"), T("bew.spZeitraum"), T("bew.spWert"), T("lim.spHinweis"), T("feld.quelle")], kennzahlen.map(zeile => ({
        zellen: [Finanz.firma(zeile.anbieter), T("kz." + zeile.groesse), Finanz.zeitraum(zeile.zeitraum), Finanz.kennzahlText(zeile), zeile.hinweis ? L(zeile.hinweis) : "–", Finanz.beleg(zeile.quelle)]
      }))),
      el("p", "profil-notiz", T("fin.alphabet"))
    );
    const grenze = el("div");
    grenze.append(abschnitt("tok.grenze"), el("p", "erklaerung", T("bew.grenzeText")));
    const herkunft = el("div");
    herkunft.append(abschnitt("lim.quellen"), Finanz.quellenliste([...runden.flatMap(runde => runde.quellen), ...kennzahlen.map(zeile => zeile.quelle)]));
    const schluss = el("div", "zwei");
    schluss.append(grenze, herkunft);
    ziel.replaceChildren(Finanz.hinweis(), spalten, unten, schluss);
    zeigen();
  }

  return { bauen };
})();
