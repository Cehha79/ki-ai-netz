// Baustein „Glossar“ der Wissensseite: Fachbegriffe aus daten/glossar.js, nach dem Alphabet der
// gewählten Sprache geordnet, mit Suchfeld und Verweis auf die Seite, die den Begriff zeigt.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/glossar.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.glossar = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { zahlText, sprachkennung } = window.Hilfen;
  const begriffe = window.KI_GLOSSAR || [];

  // Bleibt beim Sprachwechsel erhalten.
  let suche = "";

  function bauen(ziel) {
    const kennung = sprachkennung();
    const klein = text => text.toLocaleLowerCase(kennung);
    const feld = el("input", "frage");
    feld.type = "search";
    feld.maxLength = 60;
    feld.value = suche;
    feld.placeholder = T("glo.suche");
    feld.setAttribute("aria-label", T("glo.suche"));
    const zaehler = el("p", "att-kopf");
    zaehler.setAttribute("aria-live", "polite");
    const liste = el("dl", "glossar");
    const geordnet = [...begriffe].sort((a, b) => L(a.begriff).localeCompare(L(b.begriff), kennung));

    function zeigen() {
      suche = feld.value.trim();
      const gesucht = klein(suche);
      const treffer = geordnet.filter(eintrag => !gesucht || klein(L(eintrag.begriff)).includes(gesucht) || klein(eintrag.begriff.en).includes(gesucht) || klein(L(eintrag.text)).includes(gesucht));
      zaehler.replaceChildren(el("b", "", zahlText(treffer.length)), document.createTextNode(" " + T("glo.zahl")));
      if (!treffer.length) {
        liste.replaceChildren(el("dd", "leer", T("glo.nichts")));
        return;
      }
      const knoten = [];
      for (const eintrag of treffer) {
        const titel = el("dt");
        titel.append(el("b", "", L(eintrag.begriff)));
        // Der englische Begriff hilft beim Wiedererkennen, wenn er anders lautet.
        if (klein(eintrag.begriff.en) !== klein(L(eintrag.begriff))) {
          const englisch = el("span", "", eintrag.begriff.en);
          englisch.lang = "en";
          titel.append(englisch);
        }
        const text = el("dd", "", L(eintrag.text));
        if (eintrag.siehe) {
          const link = el("a", "", T("glo.siehe"));
          link.href = eintrag.siehe;
          text.append(document.createTextNode(" "), link);
        }
        knoten.push(titel, text);
      }
      liste.replaceChildren(...knoten);
    }
    feld.addEventListener("input", zeigen);

    const kopf = el("div", "glossarkopf");
    kopf.append(feld, zaehler);
    ziel.replaceChildren(kopf, liste);
    zeigen();
  }

  return { bauen };
})();
