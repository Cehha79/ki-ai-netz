// Baustein „Börsengänge“ der Finanzseite: Zeitachse der ersten Handelstage, Auswahl eines Anbieters
// mit seinen Angaben und Quellen, Tabelle aller Einträge. Daten aus daten/finanzen.js (KI_BOERSE).
// Braucht js/rahmen.js, js/hilfen.js und js/finanzen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.boerse = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { zahlText, datumText, eigenname, logo, tabelle, schrittliste } = window.Hilfen;
  const Finanz = window.Finanz;
  const Klang = window.Klang;
  const eintraege = window.KI_BOERSE || [];
  const datenstand = window.KI_FINANZEN_STAND || {};
  const farben = { notiert: "#86f58f", mutter: "#7fb4d6", laeuft: "#ffb000", eingereicht: "#d8dbc9" };
  // Die Zeitachse reicht vom 01.01.2025 bis zum 31.12.2026.
  const anfang = Date.UTC(2025, 0, 1), ende = Date.UTC(2026, 11, 31);
  const stelle = datum => {
    const [jahr, monat, tag] = datum.split("-").map(Number);
    return 20 + (Date.UTC(jahr, monat - 1, tag) - anfang) / (ende - anfang) * 560;
  };
  const svgKnoten = (name, werte, text) => {
    const knoten = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (const [feld, wert] of Object.entries(werte)) knoten.setAttribute(feld, wert);
    if (text) knoten.textContent = text;
    return knoten;
  };

  // Bleibt beim Sprachwechsel erhalten.
  let gewaehlt = "anthropic";

  function bauen(ziel) {
    const preisText = eintrag => {
      if (eintrag.spanne) return zahlText(eintrag.spanne[0]) + " – " + zahlText(eintrag.spanne[1]) + " " + eintrag.waehrung;
      return typeof eintrag.preis === "number" ? zahlText(eintrag.preis, 2) + " " + eintrag.waehrung : "–";
    };
    const handelText = eintrag => eintrag.handel ? datumText(eintrag.handel) + (eintrag.erwartet ? " (" + T("boe.erwartet") + ")" : "") : "–";
    const platzText = eintrag => eintrag.platz ? eintrag.platz + " · " + eintrag.kuerzel : "–";

    const liste = el("div", "umschalter spalte");
    const kopf = el("div", "anbieterzeile");
    const karte = svgKnoten("svg", { class: "schaubild", viewBox: "0 0 600 132", role: "group", "aria-label": T("boe.achse") });
    const einzelheiten = el("dl", "werte rechnung");
    const beschreibung = el("p", "erklaerung");
    const nachweise = el("div", "belege");

    function zeigen() {
      liste.replaceChildren(...eintraege.map((eintrag, nummer) => {
        const knopf = el("button");
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(eintrag.anbieter === gewaehlt));
        knopf.append(document.createTextNode((nummer + 1) + " · "), eigenname("span", Finanz.anbieter.get(eintrag.anbieter).kurz), document.createTextNode(" · " + T("boe." + eintrag.status)));
        knopf.addEventListener("click", () => waehlen(eintrag.anbieter));
        return knopf;
      }));

      karte.replaceChildren();
      for (let viertel = 0; viertel <= 8; viertel++) {
        const x = Math.round(20 + viertel * 70) + 0.5;
        karte.append(svgKnoten("line", { x1: x, y1: 14, x2: x, y2: 104, class: "gitter" }));
        if (viertel < 8) karte.append(svgKnoten("text", { x: x + 4, y: 120, class: viertel % 4 === 0 ? "betont" : "matt" }, viertel % 4 === 0 ? String(2025 + viertel / 4) : "Q" + (viertel % 4 + 1)));
      }
      karte.append(svgKnoten("line", { x1: 20, y1: 104.5, x2: 580, y2: 104.5, stroke: "#33382a" }));
      const heute = stelle(datenstand.geprueftAm);
      karte.append(svgKnoten("line", { x1: heute, y1: 14, x2: heute, y2: 104, stroke: "#ff5a3c", "stroke-dasharray": "2 3" }), svgKnoten("text", { x: heute - 4, y: 11, "text-anchor": "end", class: "matt" }, T("boe.stand")));
      // Marken, die sich überdecken würden, rücken eine Zeile höher.
      const belegt = [];
      eintraege.forEach((eintrag, nummer) => {
        if (!eintrag.handel) return;
        const x = stelle(eintrag.handel);
        let zeile = 0;
        while (belegt.some(marke => marke.zeile === zeile && Math.abs(marke.x - x) < 20)) zeile++;
        belegt.push({ x, zeile });
        const y = 82 - zeile * 22;
        const gruppe = svgKnoten("g", { class: "punkt" + (eintrag.anbieter === gewaehlt ? " gewaehlt" : ""), tabindex: "0", role: "button", "aria-label": Finanz.anbieter.get(eintrag.anbieter).name });
        gruppe.append(
          svgKnoten("line", { x1: x, y1: y + 16, x2: x, y2: 104, stroke: farben[eintrag.status] }),
          svgKnoten("rect", { x: x - 8, y, width: 16, height: 16, fill: eintrag.erwartet ? "#0a0b08" : farben[eintrag.status], stroke: farben[eintrag.status] }),
          svgKnoten("text", { x, y: y + 12, "text-anchor": "middle", style: "fill:" + (eintrag.erwartet ? farben[eintrag.status] : "#0a0b08") + ";font-weight:700" }, String(nummer + 1))
        );
        gruppe.addEventListener("click", () => waehlen(eintrag.anbieter));
        gruppe.addEventListener("keydown", ereignis => {
          if (ereignis.key === "Enter" || ereignis.key === " ") {
            ereignis.preventDefault();
            waehlen(eintrag.anbieter);
          }
        });
        karte.append(gruppe);
      });

      const eintrag = eintraege.find(zeile => zeile.anbieter === gewaehlt) || eintraege[0];
      const firma = Finanz.anbieter.get(eintrag.anbieter);
      kopf.replaceChildren(logo(firma, false), eigenname("strong", firma.name));
      const paare = [[T("boe.spStatus"), T("boe." + eintrag.status)], [T("boe.platz"), platzText(eintrag)]];
      if (eintrag.eingereicht) paare.push([T("boe.eingereichtAm"), datumText(eintrag.eingereicht)]);
      paare.push([T(eintrag.erwartet ? "boe.handelErwartet" : "boe.handel"), eintrag.handel ? datumText(eintrag.handel) : "–"], [T(eintrag.spanne ? "boe.spanne" : "boe.preis"), preisText(eintrag)], [T("boe.aktien"), typeof eintrag.aktien === "number" ? zahlText(eintrag.aktien) : "–"]);
      einzelheiten.replaceChildren(...paare.flatMap(([name, wert]) => [el("dt", "", name), el("dd", "", wert)]));
      beschreibung.textContent = eintrag.text ? L(eintrag.text) : "";
      beschreibung.hidden = !eintrag.text;
      nachweise.replaceChildren(...eintrag.quellen.map(Finanz.beleg));
    }
    function waehlen(kennung) {
      gewaehlt = kennung;
      Klang.ton(880, 0.3);
      zeigen();
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("boe.liste"), liste, abschnitt("boe.was"), el("p", "erklaerung", T("boe.wasText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("boe.achse"), karte, abschnitt("fin.einzelheiten"), kopf, einzelheiten, beschreibung, nachweise);
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);

    const unten = el("div", "breit");
    unten.append(
      abschnitt("boe.schritte"),
      schrittliste([
        { klasse: "nutzer", titel: T("boe.s1"), text: T("boe.s1Text") },
        { klasse: "modell", titel: T("boe.s2"), text: T("boe.s2Text") },
        { klasse: "aufruf", titel: T("boe.s3"), text: T("boe.s3Text") },
        { klasse: "werkzeug", titel: T("boe.s4"), text: T("boe.s4Text") }
      ]),
      abschnitt("boe.tabelle"),
      tabelle("boerse", [T("kos.spRang"), T("fin.anbieter"), T("boe.spStatus"), T("boe.platz"), T("boe.handel"), T("boe.preis"), T("feld.quelle")], eintraege.map((eintrag, nummer) => ({
        zellen: [String(nummer + 1), Finanz.firma(eintrag.anbieter), T("boe." + eintrag.status), platzText(eintrag), handelText(eintrag), preisText(eintrag), Finanz.belege(eintrag.quellen)]
      })))
    );
    const lange = el("div");
    lange.append(abschnitt("boe.lange"), el("p", "erklaerung", T("boe.langeText")));
    const grenze = el("div");
    grenze.append(abschnitt("tok.grenze"), el("p", "erklaerung", T("boe.grenzeText")));
    const schluss = el("div", "zwei");
    schluss.append(lange, grenze);
    ziel.replaceChildren(Finanz.hinweis(), spalten, unten, schluss);

    zeigen();
  }

  return { bauen };
})();
