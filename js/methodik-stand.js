// Baustein „Datenstand“ der Methodikseite: Prüfdatum je Datenart und je Anbieter, dazu die Angaben,
// die sich nicht bestätigen ließen. Alles wird aus den Datendateien gelesen.
// Braucht js/rahmen.js, js/hilfen.js und js/methodik.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.stand = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { zahlText, datumText, eigenname, logo, offeneFelder, tabelle } = window.Hilfen;
  const Methodik = window.Methodik;
  const Klang = window.Klang;
  const anbieter = window.KI_ANBIETER || [];
  const beziehungen = window.KI_BEZIEHUNGEN || [];

  // Bleibt beim Sprachwechsel erhalten.
  let nurOffene = false;

  function bauen(ziel) {
    const wahl = el("div", "umschalter");
    const liste = el("div");
    const mitDatum = anbieter.filter(eintrag => eintrag.spitzenmodell && eintrag.spitzenmodell.datum);
    const zahlen = el("div", "zahlen vier");
    for (const [wert, text] of [
      [zahlText(anbieter.length), "std.zGeprueft"],
      [zahlText(anbieter.filter(eintrag => (eintrag.offen || []).length).length), "std.zOffen"],
      [zahlText(mitDatum.filter(eintrag => eintrag.spitzenmodell.datumBelegt).length) + " / " + zahlText(mitDatum.length), "std.zBelegt"],
      [zahlText(beziehungen.filter(b => b.gesichert).length) + " / " + zahlText(beziehungen.length), "std.zBeziehungen"]
    ]) {
      const feld = el("div");
      feld.append(el("b", "", wert), el("span", "", T(text)));
      zahlen.append(feld);
    }

    function zeigen() {
      wahl.replaceChildren(...[[false, "kos.alle"], [true, "std.nurOffen"]].map(([wert, text]) => {
        const knopf = el("button", "", T(text));
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(wert === nurOffene));
        knopf.addEventListener("click", () => {
          nurOffene = wert;
          Klang.doppelton();
          zeigen();
        });
        return knopf;
      }));
      const zeilen = anbieter.filter(eintrag => !nurOffene || (eintrag.offen || []).length).map(eintrag => {
        const name = el("span", "modellname");
        const link = eigenname("a", eintrag.name);
        link.href = "anbieter.html#" + eintrag.id;
        name.append(logo(eintrag, false), link);
        const modell = eintrag.spitzenmodell || {};
        return {
          zellen: [
            name,
            datumText(eintrag.geprueftAm),
            eigenname("span", modell.name || "–"),
            modell.datum ? datumText(modell.datum) + (modell.datumBelegt ? "" : " · " + T("std.unbelegt")) : "–",
            offeneFelder(eintrag) || T("std.keine")
          ]
        };
      });
      liste.replaceChildren(tabelle("datenstand", [T("fin.anbieter"), T("her.zStand"), T("std.spModell"), T("std.spDatum"), T("std.spOffen")], zeilen));
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("std.zeigen"), wahl, abschnitt("std.was"), el("p", "erklaerung", T("std.wasText")), abschnitt("std.offen"), el("p", "erklaerung", T("std.offenText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("std.ueberblick"), zahlen, el("p", "profil-notiz", T("std.zahlenText")), abschnitt("std.arten"), tabelle("staende", [T("her.spArt"), T("her.zStand")], Methodik.arten.map(art => ({ zellen: [L(art.name), Methodik.standText(art)] }))));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    const unten = el("div", "breit");
    unten.append(abschnitt("std.anbieter"), liste);
    ziel.replaceChildren(spalten, unten);
    zeigen();
  }

  return { bauen };
})();
