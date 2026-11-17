// Schaubild „Embeddings“: zeigt Wörter als Punkte auf einer Karte; Ähnliches liegt nah beieinander.
// Veranschaulichung: Die Lage der Wörter ist von Hand gesetzt und hat nur zwei Zahlen je Wort.
// Braucht js/rahmen.js und js/hilfen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.embeddings = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { zahlText } = window.Hilfen;
  const Klang = window.Klang;
  const farben = { tiere: "#86f58f", essen: "#ffb000", technik: "#7fb4d6", orte: "#d8dbc9", beides: "#ff5a3c" };
  // Von Hand gesetzt: x und y zwischen 0 und 1.
  const woerter = [
    { id: "hund", gruppe: "tiere", x: 0.18, y: 0.25, name: { de: "Hund", en: "dog", tr: "köpek" } },
    { id: "katze", gruppe: "tiere", x: 0.26, y: 0.19, name: { de: "Katze", en: "cat", tr: "kedi" } },
    { id: "pferd", gruppe: "tiere", x: 0.13, y: 0.36, name: { de: "Pferd", en: "horse", tr: "at" } },
    { id: "vogel", gruppe: "tiere", x: 0.29, y: 0.32, name: { de: "Vogel", en: "bird", tr: "kuş" } },
    { id: "brot", gruppe: "essen", x: 0.72, y: 0.2, name: { de: "Brot", en: "bread", tr: "ekmek" } },
    { id: "kaese", gruppe: "essen", x: 0.81, y: 0.27, name: { de: "Käse", en: "cheese", tr: "peynir" } },
    { id: "apfel", gruppe: "essen", x: 0.68, y: 0.32, name: { de: "Apfel", en: "apple", tr: "elma" } },
    { id: "suppe", gruppe: "essen", x: 0.84, y: 0.15, name: { de: "Suppe", en: "soup", tr: "çorba" } },
    { id: "computer", gruppe: "technik", x: 0.26, y: 0.74, name: { de: "Computer", en: "computer", tr: "bilgisayar" } },
    { id: "telefon", gruppe: "technik", x: 0.16, y: 0.82, name: { de: "Telefon", en: "phone", tr: "telefon" } },
    { id: "programm", gruppe: "technik", x: 0.33, y: 0.84, name: { de: "Programm", en: "program", tr: "program" } },
    { id: "chip", gruppe: "technik", x: 0.2, y: 0.66, name: { de: "Chip", en: "chip", tr: "çip" } },
    { id: "berlin", gruppe: "orte", x: 0.74, y: 0.74, name: { de: "Berlin", en: "Berlin", tr: "Berlin" } },
    { id: "ankara", gruppe: "orte", x: 0.83, y: 0.68, name: { de: "Ankara", en: "Ankara", tr: "Ankara" } },
    { id: "london", gruppe: "orte", x: 0.7, y: 0.84, name: { de: "London", en: "London", tr: "Londra" } },
    { id: "stadt", gruppe: "orte", x: 0.82, y: 0.82, name: { de: "Stadt", en: "city", tr: "şehir" } },
    { id: "maus", gruppe: "beides", x: 0.23, y: 0.48, name: { de: "Maus", en: "mouse", tr: "fare" } }
  ];
  const svgKnoten = (name, werte, text) => {
    const knoten = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (const [feld, wert] of Object.entries(werte)) knoten.setAttribute(feld, wert);
    if (text) knoten.textContent = text;
    return knoten;
  };
  const abstand = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

  // Bleibt beim Sprachwechsel erhalten.
  let gewaehlt = "maus";

  function bauen(ziel) {
    const karte = svgKnoten("svg", { class: "schaubild karte", viewBox: "0 0 600 400", role: "group", "aria-label": T("emb.bild") });
    const kopf = el("p", "att-kopf");
    kopf.setAttribute("aria-live", "polite");
    const liste = el("div", "balken att-balken");

    function zeigen() {
      const mitte = woerter.find(wort => wort.id === gewaehlt);
      const andere = woerter.filter(wort => wort !== mitte).sort((a, b) => abstand(mitte, a) - abstand(mitte, b));
      const nah = andere.slice(0, 3);
      karte.replaceChildren();
      for (let i = 1; i < 10; i++) {
        karte.append(svgKnoten("line", { x1: i * 60 + 0.5, y1: 0, x2: i * 60 + 0.5, y2: 400, class: "gitter" }), svgKnoten("line", { x1: 0, y1: i * 40 + 0.5, x2: 600, y2: i * 40 + 0.5, class: "gitter" }));
      }
      for (const wort of nah) karte.append(svgKnoten("line", { x1: mitte.x * 600, y1: mitte.y * 400, x2: wort.x * 600, y2: wort.y * 400, stroke: "#ffb000", "stroke-width": 1.5 }));
      for (const wort of woerter) {
        const gruppe = svgKnoten("g", { class: "wort" + (wort === mitte ? " gewaehlt" : ""), tabindex: "0", role: "button", "aria-pressed": String(wort === mitte) });
        const halb = wort === mitte ? 7 : 4.5;
        gruppe.append(
          svgKnoten("rect", { x: wort.x * 600 - halb, y: wort.y * 400 - halb, width: halb * 2, height: halb * 2, fill: farben[wort.gruppe] }),
          svgKnoten("text", { x: wort.x * 600 + 11, y: wort.y * 400 + 4 }, L(wort.name))
        );
        const waehlen = () => {
          gewaehlt = wort.id;
          Klang.ton(880, 0.35);
          zeigen();
        };
        gruppe.addEventListener("click", waehlen);
        gruppe.addEventListener("keydown", ereignis => {
          if (ereignis.key === "Enter" || ereignis.key === " ") {
            ereignis.preventDefault();
            waehlen();
          }
        });
        karte.append(gruppe);
      }
      kopf.replaceChildren(el("b", "", "„" + L(mitte.name) + "“"), document.createTextNode(" " + T("emb.zahlen") + " [" + zahlText(mitte.x, 2) + " · " + zahlText(mitte.y, 2) + "]"));
      const weitester = abstand(mitte, andere[andere.length - 1]);
      const zeilen = [];
      for (const wort of andere.slice(0, 6)) {
        const bahn = el("i");
        const fuellung = el("u");
        fuellung.style.setProperty("--f", farben[wort.gruppe]);
        fuellung.style.setProperty("--w", ((1 - abstand(mitte, wort) / weitester) * 100) + "%");
        bahn.append(fuellung);
        zeilen.push(el("span", "", L(wort.name)), bahn, el("em", "", zahlText(abstand(mitte, wort), 2)));
      }
      liste.replaceChildren(...zeilen);
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("emb.nachbarn"), kopf, liste, el("p", "profil-notiz", T("emb.abstand")), abschnitt("emb.was"), el("p", "erklaerung", T("emb.wasText")), abschnitt("emb.warum"), el("p", "erklaerung", T("emb.warumText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("emb.bild"), karte, el("p", "att-warnung", T("emb.hinweis")), abschnitt("tok.grenze"), el("p", "erklaerung", T("emb.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    zeigen();
  }

  return { bauen };
})();
