// Baustein „Grenzen“ der Methodikseite: was diese Website nicht leistet. Texte aus daten/methodik.js.
// Braucht js/rahmen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.grenzen = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const grenzen = window.KI_GRENZEN || [];

  function bauen(ziel) {
    const liste = el("dl", "glossar");
    for (const grenze of grenzen) {
      const titel = el("dt");
      titel.append(el("b", "", L(grenze.titel)));
      liste.append(titel, el("dd", "", L(grenze.text)));
    }
    ziel.replaceChildren(el("p", "erklaerung einleitung", T("gre.einleitung")), liste);
  }

  return { bauen };
})();
