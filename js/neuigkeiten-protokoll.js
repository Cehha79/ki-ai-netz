// Baustein „Änderungsprotokoll“ der Neuigkeitenseite: was sich an der Website selbst geändert hat.
// Daten aus daten/protokoll.js.
// Braucht js/rahmen.js und js/hilfen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.protokoll = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { datumText, tabelle } = window.Hilfen;
  const eintraege = window.KI_PROTOKOLL || [];

  function bauen(ziel) {
    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const zeilen = [...eintraege].sort((a, b) => b.datum.localeCompare(a.datum)).map(eintrag => {
      const text = el("span");
      text.append(el("b", "", L(eintrag.titel)), document.createTextNode(" · " + L(eintrag.text)));
      return { zellen: [datumText(eintrag.datum), eintrag.version || "–", text] };
    });
    const erklaerung = el("div");
    const link = el("a", "", T("pro.zurMethodik"));
    link.href = "methodik.html#stand";
    const hinweis = el("p", "erklaerung", T("pro.wasText") + " ");
    hinweis.append(link);
    erklaerung.append(abschnitt("pro.was"), hinweis);
    const oben = el("div", "breit");
    oben.append(abschnitt("pro.liste"), tabelle("protokoll", [T("fin.datum"), T("pro.spVersion"), T("pro.spAenderung")], zeilen));
    ziel.replaceChildren(oben, erklaerung);
  }

  return { bauen };
})();
