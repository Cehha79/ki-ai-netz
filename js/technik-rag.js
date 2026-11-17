// Schaubild „RAG“: sucht zu einer Frage die passenden Stellen in den Kurzporträts der Anbieter
// und zeigt, was ein Modell dann zusammen mit der Frage bekäme. Die Suche läuft im Browser und
// vergleicht Wörter; eine Antwort erzeugt die Seite nicht, weil hier kein Modell läuft.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.rag = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { zahlText, eigenname, logo, sprachkennung } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = window.KI_ANBIETER || [];
  const beispielTexte = ["rag.frage1", "rag.frage2", "rag.frage3"];
  // Wörter ohne eigene Aussage; sie zählen bei der Suche nicht.
  const fuellwoerter = {
    de: "der die das und oder ist sind ein eine einer einen dem den des mit für von auf im in an zu als auch wer was wie welche welcher welches wo hat haben wird werden sich nicht bei aus über es firma baut macht erzeugt entwickelt liefert",
    en: "the a an and or is are of for with in on to as who what which how where does do has have its it by from at that this company builds makes generates develops",
    tr: "ve veya bir bu şu ile için de da kim ne hangi nasıl nerede olan olarak gibi daha en çok şirket üretiyor geliştiriyor yapıyor"
  };

  // Bleibt beim Sprachwechsel erhalten; null heißt: mit der ersten Beispielfrage der Sprache beginnen.
  let frage = null;

  function woerter(text) {
    const sprache = window.Rahmen.sprache();
    const ohne = new Set((fuellwoerter[sprache] || fuellwoerter.de).split(" "));
    return (text.toLocaleLowerCase(sprachkennung()).match(/[\p{L}\p{N}]{2,}/gu) || []).filter(wort => !ohne.has(wort));
  }

  // Zwei Wörter gelten als gleich, wenn eines mit dem anderen beginnt (ab vier Buchstaben),
  // damit „Chip“ auch „Chips“ findet.
  const passt = (a, b) => a === b || (Math.min(a.length, b.length) >= 4 && (a.startsWith(b) || b.startsWith(a)));

  function suchen(text) {
    const gesucht = [...new Set(woerter(text))];
    const dokumente = anbieter.map(eintrag => {
      const inhalt = L(eintrag.portraet);
      return { eintrag, inhalt, woerter: woerter(eintrag.name + " " + inhalt) };
    });
    // Seltene Wörter zählen mehr als häufige.
    const gewicht = new Map(gesucht.map(wort => [wort, Math.log(1 + dokumente.length / (1 + dokumente.filter(d => d.woerter.some(w => passt(w, wort))).length))]));
    const treffer = dokumente.map(d => {
      const gefunden = gesucht.filter(wort => d.woerter.some(w => passt(w, wort)));
      return { ...d, gefunden, wert: gefunden.reduce((summe, wort) => summe + gewicht.get(wort), 0) };
    }).filter(d => d.wert > 0).sort((a, b) => b.wert - a.wert).slice(0, 3);
    return { gesucht, treffer };
  }

  // Setzt den Text einer Fundstelle zusammen und hebt die gefundenen Wörter hervor.
  function markiert(inhalt, gefunden) {
    const feld = el("p");
    for (const stueck of inhalt.split(/([\p{L}\p{N}]+)/u)) {
      const klein = stueck.toLocaleLowerCase(sprachkennung());
      feld.append(gefunden.some(wort => passt(klein, wort)) ? el("mark", "", stueck) : document.createTextNode(stueck));
    }
    return feld;
  }

  function bauen(ziel) {
    if (frage === null) frage = T(beispielTexte[0]);
    const eingabe = el("input", "frage");
    eingabe.type = "text";
    eingabe.maxLength = 160;
    eingabe.value = frage;
    eingabe.setAttribute("aria-label", T("rag.frage"));
    const beispiele = el("div", "umschalter spalte");
    for (const text of beispielTexte) {
      const knopf = el("button", "", T(text));
      knopf.type = "button";
      knopf.addEventListener("click", () => {
        eingabe.value = T(text);
        Klang.ton(880, 0.3);
        zeigen();
      });
      beispiele.append(knopf);
    }
    const fundstellen = el("div", "fundstellen");
    fundstellen.setAttribute("aria-live", "polite");
    const sicht = el("pre", "sicht");
    const laenge = el("p", "profil-notiz");

    function zeigen() {
      frage = eingabe.value.trim();
      const { treffer } = suchen(frage);
      if (!treffer.length) {
        fundstellen.replaceChildren(el("p", "profil-notiz", T("rag.nichts")));
      } else {
        fundstellen.replaceChildren(...treffer.map((d, nummer) => {
          const karte = el("div", "fundstelle");
          const kopf = el("div", "fundkopf");
          const bahn = el("i");
          const fuellung = el("u");
          fuellung.style.width = (d.wert / treffer[0].wert * 100) + "%";
          bahn.append(fuellung);
          kopf.append(el("b", "", "[" + (nummer + 1) + "]"), logo(d.eintrag, false), eigenname("strong", d.eintrag.name), bahn);
          karte.append(kopf, markiert(d.inhalt, d.gefunden));
          return karte;
        }));
      }
      const text = T("rag.anweisung") + "\n\n" + T("rag.quellenZeile") + "\n" + (treffer.length ? treffer.map((d, nummer) => "[" + (nummer + 1) + "] " + d.eintrag.name + ": " + d.inhalt).join("\n") : "–") + "\n\n" + T("rag.frageZeile") + " " + frage;
      sicht.textContent = text;
      laenge.textContent = T("rag.laenge").replace("{token}", zahlText(Math.round([...text].length / 4)));
    }
    eingabe.addEventListener("input", zeigen);

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("rag.frage"), eingabe, beispiele, el("p", "profil-notiz", T("rag.sammlung").replace("{zahl}", zahlText(anbieter.length))), abschnitt("rag.was"), el("p", "erklaerung", T("rag.wasText")), abschnitt("rag.warum"), el("p", "erklaerung", T("rag.warumText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("rag.treffer"), fundstellen, abschnitt("rag.sicht"), sicht, laenge, abschnitt("tok.grenze"), el("p", "erklaerung", T("rag.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    zeigen();
  }

  return { bauen };
})();
