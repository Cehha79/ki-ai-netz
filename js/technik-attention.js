// Schaubild „Attention“: zeigt an zwei Beispielsätzen, auf welche Wörter ein gewähltes Wort achtet.
// Die Gewichte sind von Hand gesetzt und veranschaulichen das Prinzip; sie stammen aus keinem Modell.
// Braucht js/rahmen.js und js/hilfen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.attention = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText } = window.Hilfen;
  const Klang = window.Klang;

  // Jedes Wort trägt seine Rolle im Satz. Die Sätze A und B unterscheiden sich nur im Eigenschaftswort.
  const saetze = {
    de: [["Die", "art1"], ["Katze", "subjekt"], ["jagte", "verb"], ["die", "art2"], ["Maus", "objekt"], [",", "komma"], ["weil", "bindewort"], ["sie", "fuerwort"], ["*", "eigenschaft"], ["war", "sein"], [".", "punkt"]],
    en: [["The", "art1"], ["cat", "subjekt"], ["chased", "verb"], ["the", "art2"], ["mouse", "objekt"], ["because", "bindewort"], ["it", "fuerwort"], ["was", "sein"], ["*", "eigenschaft"], [".", "punkt"]],
    tr: [["Kedi", "subjekt"], ["fareyi", "objekt"], ["kovaladı", "verb"], [",", "komma"], ["çünkü", "bindewort"], ["o", "fuerwort"], ["*", "eigenschaft"], [".", "punkt"]]
  };
  const eigenschaft = {
    a: { de: "hungrig", en: "hungry", tr: "açtı" },
    b: { de: "klein", en: "small", tr: "küçüktü" }
  };
  // Von Hand gesetzt: auf welche Rollen eine Rolle besonders achtet. „bezug“ ist in Satz A das Subjekt, in Satz B das Objekt.
  const starkeBezuege = {
    art1: [["subjekt", 0.6]],
    subjekt: [["verb", 0.3], ["art1", 0.2]],
    verb: [["subjekt", 0.35], ["objekt", 0.35]],
    art2: [["objekt", 0.6]],
    objekt: [["verb", 0.3], ["art2", 0.2]],
    komma: [["bindewort", 0.2]],
    bindewort: [["verb", 0.3], ["sein", 0.2], ["eigenschaft", 0.15]],
    fuerwort: [["bezug", 0.55], ["eigenschaft", 0.2]],
    eigenschaft: [["fuerwort", 0.3], ["bezug", 0.3]],
    sein: [["fuerwort", 0.3], ["eigenschaft", 0.3]],
    punkt: [["sein", 0.15], ["eigenschaft", 0.15]]
  };

  // Bleibt beim Sprachwechsel erhalten.
  let satzWahl = "a";
  let gewaehlteRolle = "fuerwort";

  function woerter() {
    const sprache = window.Rahmen.sprache();
    return (saetze[sprache] || saetze.de).map(([wort, rolle]) => ({ wort: wort === "*" ? eigenschaft[satzWahl][sprache] : wort, rolle }));
  }

  // Verteilt das Gewicht eines Wortes: zuerst die starken Bezüge, ein kleiner Teil auf das Wort selbst,
  // der Rest gleichmäßig auf alle übrigen. Die Summe ist eins.
  function gewichte(liste, rolle) {
    const bezug = satzWahl === "a" ? "subjekt" : "objekt";
    const ergebnis = liste.map(() => 0);
    let vergeben = 0;
    for (const [ziel, wert] of starkeBezuege[rolle] || []) {
      const stelle = liste.findIndex(eintrag => eintrag.rolle === (ziel === "bezug" ? bezug : ziel));
      if (stelle < 0) continue;
      ergebnis[stelle] += wert;
      vergeben += wert;
    }
    const selbst = liste.findIndex(eintrag => eintrag.rolle === rolle);
    ergebnis[selbst] += 0.1;
    vergeben += 0.1;
    const uebrige = liste.map((_, stelle) => stelle).filter(stelle => ergebnis[stelle] === 0);
    for (const stelle of uebrige) ergebnis[stelle] = Math.max(0, 1 - vergeben) / uebrige.length;
    const summe = ergebnis.reduce((a, b) => a + b, 0);
    return ergebnis.map(wert => wert / summe);
  }

  function bauen(ziel) {
    const beispiele = el("div", "umschalter");
    const obereZeile = el("div", "att-zeile");
    const raum = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    raum.setAttribute("class", "att-raum");
    raum.setAttribute("aria-hidden", "true");
    const untereZeile = el("div", "att-zeile unten");
    const balken = el("div", "balken att-balken");
    const kopf = el("p", "att-kopf");
    kopf.setAttribute("aria-live", "polite");

    function linienZeichnen(liste, werte) {
      raum.replaceChildren();
      const rand = raum.getBoundingClientRect();
      if (!rand.width) return;
      const stelle = liste.findIndex(eintrag => eintrag.rolle === gewaehlteRolle);
      const oben = obereZeile.children[stelle].getBoundingClientRect();
      const x1 = oben.left + oben.width / 2 - rand.left;
      [...untereZeile.children].forEach((feld, nummer) => {
        const unten = feld.getBoundingClientRect();
        const linie = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linie.setAttribute("x1", x1);
        linie.setAttribute("y1", 0);
        linie.setAttribute("x2", unten.left + unten.width / 2 - rand.left);
        linie.setAttribute("y2", rand.height);
        linie.setAttribute("stroke-width", (0.6 + werte[nummer] * 14).toFixed(1));
        linie.setAttribute("opacity", Math.min(1, 0.18 + werte[nummer] * 1.6).toFixed(2));
        raum.append(linie);
      });
    }

    function zeigen() {
      const liste = woerter();
      if (!liste.some(eintrag => eintrag.rolle === gewaehlteRolle)) gewaehlteRolle = "fuerwort";
      const werte = gewichte(liste, gewaehlteRolle);
      const groesstes = Math.max(...werte);
      const gewaehlt = liste.find(eintrag => eintrag.rolle === gewaehlteRolle);
      beispiele.replaceChildren(...["a", "b"].map(kennung => {
        const knopf = el("button", "", "… " + eigenschaft[kennung][window.Rahmen.sprache()]);
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(kennung === satzWahl));
        knopf.addEventListener("click", () => {
          satzWahl = kennung;
          Klang.doppelton();
          zeigen();
        });
        return knopf;
      }));
      obereZeile.replaceChildren(...liste.map(eintrag => {
        const knopf = el("button", "", eintrag.wort);
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(eintrag.rolle === gewaehlteRolle));
        knopf.addEventListener("click", () => {
          gewaehlteRolle = eintrag.rolle;
          Klang.ton(880, 0.35);
          zeigen();
        });
        return knopf;
      }));
      untereZeile.replaceChildren(...liste.map((eintrag, nummer) => {
        const feld = el("span", "", eintrag.wort);
        feld.style.setProperty("--staerke", (werte[nummer] / groesstes).toFixed(2));
        return feld;
      }));
      kopf.replaceChildren(el("b", "", "„" + gewaehlt.wort + "“"), document.createTextNode(" " + T("att.achtet")));
      const zeilen = [];
      liste.forEach((eintrag, nummer) => {
        const bahn = el("i");
        const fuellung = el("u");
        fuellung.style.setProperty("--f", "#ffb000");
        fuellung.style.setProperty("--w", (werte[nummer] / groesstes * 100) + "%");
        bahn.append(fuellung);
        zeilen.push(el("span", "", eintrag.wort), bahn, el("em", "", zahlText(werte[nummer] * 100) + " %"));
      });
      balken.replaceChildren(...zeilen);
      linienZeichnen(liste, werte);
    }
    new ResizeObserver(() => zeigen()).observe(raum);

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("att.beispiel"), beispiele, el("p", "profil-notiz", T("att.klick")), abschnitt("att.was"), el("p", "erklaerung", T("att.wasText")), abschnitt("att.warum"), el("p", "erklaerung", T("att.warumText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("att.bild"), obereZeile, raum, untereZeile, el("p", "att-warnung", T("att.hinweis")), abschnitt("att.gewichte"), kopf, balken, abschnitt("tok.grenze"), el("p", "erklaerung", T("att.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    zeigen();
  }

  return { bauen };
})();
