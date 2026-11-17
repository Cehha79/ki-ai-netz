// Baustein „Geldgeber“ der Finanzseite: Raster aus Geldgebern und Empfängern nach den belegten
// Beziehungen (daten/beziehungen.js, Arten „geld“ und „uebernahme“), dazu die Geldgeber der Runden
// aus daten/finanzen.js.
// Braucht js/rahmen.js, js/hilfen.js und js/finanzen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.geldgeber = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { datumText, eigenname, verweis, logo, linien, strecken, tabelle } = window.Hilfen;
  const Finanz = window.Finanz;
  const Klang = window.Klang;
  const beziehungen = (window.KI_BEZIEHUNGEN || []).filter(b => b.art === "geld" || b.art === "uebernahme");
  const runden = window.KI_RUNDEN || [];
  const geber = [...new Set(beziehungen.map(b => b.von))];
  const empfaenger = [...new Set(beziehungen.map(b => b.nach))];

  // Bleibt beim Sprachwechsel erhalten: Stelle der gewählten Beziehung in der Liste.
  let gewaehlt = 0;

  function bauen(ziel) {
    const raster = el("div", "geldraster");
    raster.style.setProperty("--spalten", String(empfaenger.length));
    const auswahl = el("div", "geldauswahl");
    auswahl.setAttribute("aria-live", "polite");
    // Kopf einer Zeile oder, mit „oben“, einer Spalte: Logo und Kurzname.
    const marke = (kennung, oben) => {
      const firma = Finanz.anbieter.get(kennung);
      const feld = el("span", "rasterkopf" + (oben ? " oben" : ""));
      feld.append(logo(firma, false), eigenname("b", firma.kurz));
      return feld;
    };

    function zeigen() {
      const knoten = [el("span", "rasterecke", T("gel.ecke"))];
      for (const kennung of empfaenger) knoten.push(marke(kennung, true));
      for (const von of geber) {
        knoten.push(marke(von));
        for (const nach of empfaenger) {
          const stelle = beziehungen.findIndex(b => b.von === von && b.nach === nach);
          if (stelle < 0) {
            knoten.push(el("span", "rasterfeld leer"));
            continue;
          }
          const b = beziehungen[stelle];
          const knopf = el("button", "rasterfeld" + (b.gesichert ? "" : " offen") + (stelle === gewaehlt ? " gewaehlt" : ""));
          knopf.type = "button";
          knopf.style.setProperty("--f", linien[b.art].farbe);
          knopf.setAttribute("aria-label", Finanz.anbieter.get(von).name + " → " + Finanz.anbieter.get(nach).name);
          knopf.setAttribute("aria-pressed", String(stelle === gewaehlt));
          knopf.addEventListener("click", () => {
            gewaehlt = stelle;
            Klang.ton(880, 0.3);
            zeigen();
          });
          knoten.push(knopf);
        }
      }
      raster.replaceChildren(...knoten);

      const b = beziehungen[gewaehlt];
      if (!b) {
        auswahl.replaceChildren(el("p", "profil-notiz", T("gel.keine")));
        return;
      }
      const kopf = el("div", "anbieterzeile");
      kopf.append(logo(Finanz.anbieter.get(b.von), false), eigenname("strong", Finanz.anbieter.get(b.von).name), document.createTextNode("→"), logo(Finanz.anbieter.get(b.nach), false), eigenname("strong", Finanz.anbieter.get(b.nach).name));
      const art = el("p", "att-kopf");
      const artName = el("b", "", T("beziehung." + b.art));
      artName.style.color = linien[b.art].farbe;
      art.append(artName, document.createTextNode(" · " + datumText(b.datum) + (b.gesichert ? "" : " · " + T("start.ungesichert"))));
      const quelle = el("p", "beleg");
      const link = verweis(b.quelle.url, b.quelle.name);
      link.lang = "en";
      quelle.append(link);
      auswahl.replaceChildren(kopf, art, el("p", "erklaerung", L(b.text)), quelle);
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("gel.bild"), raster, abschnitt("gel.lesen"), el("p", "erklaerung", T("gel.lesenText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("gel.auswahl"), auswahl, abschnitt("gel.doppelt"), el("p", "erklaerung", T("gel.doppeltText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);

    const unten = el("div", "breit");
    unten.append(
      abschnitt("gel.tabelle"),
      strecken(beziehungen, Finanz.anbieter, true),
      abschnitt("gel.runden"),
      tabelle("geldgeber", [T("fin.datum"), T("fin.anbieter"), T("gel.spRunde"), T("gel.spGeldgeber"), T("feld.quelle")], [...runden].filter(runde => runde.geldgeber).sort((a, b) => b.datum.localeCompare(a.datum)).map(runde => ({
        zellen: [datumText(runde.datum), Finanz.firma(runde.anbieter), L(runde.art), L(runde.geldgeber), Finanz.belege(runde.quellen)]
      })))
    );
    const grenze = el("div");
    grenze.append(abschnitt("tok.grenze"), el("p", "erklaerung", T("gel.grenzeText")));
    const herkunft = el("div");
    herkunft.append(abschnitt("lim.quellen"), Finanz.quellenliste(runden.flatMap(runde => runde.quellen)));
    const schluss = el("div", "zwei");
    schluss.append(grenze, herkunft);
    ziel.replaceChildren(Finanz.hinweis(), spalten, unten, schluss);
    zeigen();
  }

  return { bauen };
})();
