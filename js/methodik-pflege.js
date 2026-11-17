// Baustein „Pflege“ der Methodikseite: der vorgesehene Prüfrhythmus je Datenart und der Weg einer
// Änderung von der Quelle bis zur Veröffentlichung.
// Braucht js/rahmen.js, js/hilfen.js und js/methodik.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.pflege = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { tabelle, schrittliste } = window.Hilfen;
  const Methodik = window.Methodik;
  const folge = ["woche", "monat", "anlass", "bedarf"];

  function bauen(ziel) {
    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const geordnet = [...Methodik.arten].sort((a, b) => folge.indexOf(a.rhythmus) - folge.indexOf(b.rhythmus));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("pfl.wie"), el("p", "erklaerung", T("pfl.wieText")), abschnitt("pfl.programme"), el("p", "erklaerung", T("pfl.programmeText")), abschnitt("pfl.fehler"), el("p", "erklaerung", T("pfl.fehlerText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("pfl.plan"), tabelle("pflege", [T("pfl.spRhythmus"), T("her.spArt"), T("her.zStand")], geordnet.map(art => ({
      zellen: [T("rh." + art.rhythmus), L(art.name), Methodik.standText(art)]
    }))));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    const unten = el("div", "breit");
    unten.append(abschnitt("pfl.schritte"), schrittliste([
      { klasse: "nutzer", titel: T("pfl.s1"), text: T("pfl.s1Text") },
      { klasse: "modell", titel: T("pfl.s2"), text: T("pfl.s2Text") },
      { klasse: "aufruf", titel: T("pfl.s3"), text: T("pfl.s3Text") },
      { klasse: "werkzeug", titel: T("pfl.s4"), text: T("pfl.s4Text") }
    ]));
    ziel.replaceChildren(spalten, unten);
  }

  return { bauen };
})();
