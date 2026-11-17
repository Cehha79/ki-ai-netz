// Baustein „Zeitachse“ der Neuigkeitenseite: alle Meldungen als Marken auf einer Achse, je Art eine
// Zeile. Der Zeitraum ist wählbar; ein Klick auf eine Marke zeigt die Meldung mit ihrer Quelle.
// Braucht js/rahmen.js, js/hilfen.js, js/finanzen.js und js/neuigkeiten.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.zeitachse = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { datumText, eigenname, verweis, logo, sprachkennung } = window.Hilfen;
  const Finanz = window.Finanz;
  const Meldungen = window.Meldungen;
  const Klang = window.Klang;
  const monate = { drei: 3, jahr: 12 };
  const links = 132, rechts = 1088;
  const svgKnoten = (name, werte, text) => {
    const knoten = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (const [feld, wert] of Object.entries(werte)) knoten.setAttribute(feld, wert);
    if (text) knoten.textContent = text;
    return knoten;
  };
  const tag = datum => {
    const [jahr, monat, zahl] = datum.split("-").map(Number);
    return Date.UTC(jahr, monat - 1, zahl);
  };

  // Bleibt beim Sprachwechsel erhalten: Zeitraum und Datum samt Stelle der gewählten Meldung.
  const stand = { spanne: "jahr", gewaehlt: 0 };

  function bauen(ziel) {
    const alle = Meldungen.liste();
    if (!alle.length) return;
    // Die Achse endet mit dem Monat des Datenstands.
    const [endJahr, endMonat] = ((window.KI_DATENSTAND || {}).anbieter || alle[0].datum).split("-").map(Number);
    const ende = Date.UTC(endJahr, endMonat, 1);
    const wahl = el("div", "umschalter");
    const karte = svgKnoten("svg", { class: "schaubild zeitkarte", role: "group", "aria-label": T("zeit.titel") });
    const huelle = el("div", "planhuelle");
    huelle.append(karte);
    const zahlen = el("div", "zahlen");
    const auswahl = el("div", "geldauswahl");
    auswahl.setAttribute("aria-live", "polite");

    function zeigen() {
      wahl.replaceChildren(...[["drei", "zt.drei"], ["jahr", "zt.jahr"], ["alles", "zt.alles"]].map(([kennung, text]) => {
        const knopf = el("button", "", T(text));
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(kennung === stand.spanne));
        knopf.addEventListener("click", () => {
          stand.spanne = kennung;
          Klang.doppelton();
          zeigen();
        });
        return knopf;
      }));

      const [erstesJahr, ersterMonat] = alle[alle.length - 1].datum.split("-").map(Number);
      const anfang = stand.spanne === "alles" ? Date.UTC(erstesJahr, ersterMonat - 1, 1) : Date.UTC(endJahr, endMonat - monate[stand.spanne], 1);
      const stelle = datum => links + (tag(datum) - anfang) / (ende - anfang) * (rechts - links);
      const sichtbar = alle.map((meldung, nummer) => ({ meldung, nummer })).filter(({ meldung }) => tag(meldung.datum) >= anfang && tag(meldung.datum) < ende);

      // Je Art eine Zeile; Marken, die sich überdecken würden, stehen übereinander.
      const zeilen = Meldungen.arten.map(art => {
        const marken = sichtbar.filter(({ meldung }) => meldung.art === art).sort((a, b) => a.meldung.datum.localeCompare(b.meldung.datum));
        const stufen = [];
        for (const marke of marken) {
          marke.x = stelle(marke.meldung.datum);
          let stufe = 0;
          while (stufen[stufe] !== undefined && marke.x - stufen[stufe] < 10) stufe++;
          stufen[stufe] = marke.x;
          marke.stufe = stufe;
        }
        return { art, marken, hoehe: Math.max(1, stufen.length) * 11 + 14 };
      });
      const hoehe = 24 + zeilen.reduce((summe, zeile) => summe + zeile.hoehe, 0) + 6;
      karte.setAttribute("viewBox", "0 0 1100 " + hoehe);
      karte.replaceChildren();

      const monatsname = new Intl.DateTimeFormat(sprachkennung(), { month: "short", year: "2-digit", timeZone: "UTC" });
      const anzahl = Math.round((ende - anfang) / (30.44 * 86400000));
      for (let lauf = new Date(anfang); lauf.getTime() < ende; lauf = new Date(Date.UTC(lauf.getUTCFullYear(), lauf.getUTCMonth() + 1, 1))) {
        const x = Math.round(links + (lauf.getTime() - anfang) / (ende - anfang) * (rechts - links)) + 0.5;
        karte.append(svgKnoten("line", { x1: x, y1: 18, x2: x, y2: hoehe - 6, class: "gitter" }));
        if (anzahl <= 14 || lauf.getUTCMonth() % 3 === 0) karte.append(svgKnoten("text", { x: x + 3, y: 12, class: "matt" }, monatsname.format(lauf)));
      }
      let oben = 24;
      for (const zeile of zeilen) {
        const unten = oben + zeile.hoehe;
        karte.append(
          svgKnoten("line", { x1: 0, y1: unten - 0.5, x2: 1100, y2: unten - 0.5, class: "gitter" }),
          svgKnoten("rect", { x: 6, y: unten - 15, width: 8, height: 8, fill: Meldungen.farben[zeile.art] }),
          svgKnoten("text", { x: 20, y: unten - 7 }, T("na." + zeile.art))
        );
        for (const marke of zeile.marken) {
          const farbe = Meldungen.farben[zeile.art];
          const punkt = svgKnoten("rect", {
            x: marke.x - 4, y: unten - 15 - marke.stufe * 11, width: 8, height: 8,
            fill: marke.meldung.offen ? "#0a0b08" : farbe, stroke: farbe,
            class: "punkt" + (marke.nummer === stand.gewaehlt ? " gewaehlt" : ""), tabindex: "0", role: "button",
            "aria-label": datumText(marke.meldung.datum) + " · " + marke.meldung.text
          });
          const waehlen = () => {
            stand.gewaehlt = marke.nummer;
            Klang.ton(880, 0.3);
            zeigen();
          };
          punkt.addEventListener("click", waehlen);
          punkt.addEventListener("keydown", ereignis => {
            if (ereignis.key === "Enter" || ereignis.key === " ") {
              ereignis.preventDefault();
              waehlen();
            }
          });
          karte.append(punkt);
        }
        oben = unten;
      }

      zahlen.replaceChildren(...zeilen.map(zeile => {
        const feld = el("div");
        feld.append(el("b", "", String(zeile.marken.length)), el("span", "", T("na." + zeile.art)));
        return feld;
      }));

      const meldung = alle[stand.gewaehlt];
      const kopf = el("div", "anbieterzeile");
      meldung.firmen.forEach((kennung, nummer) => {
        const firma = Finanz.anbieter.get(kennung);
        const link = eigenname("a", firma.name);
        link.href = "anbieter.html#" + kennung;
        if (nummer) kopf.append(document.createTextNode("→"));
        kopf.append(logo(firma, false), link);
      });
      const zeile = el("p", "att-kopf");
      const art = el("b", "", T("na." + meldung.art));
      art.style.color = Meldungen.farben[meldung.art];
      zeile.append(art, document.createTextNode(" · " + datumText(meldung.datum)));
      const quelle = el("p", "beleg");
      const link = verweis(meldung.quelle.url, meldung.quelle.name);
      link.lang = meldung.quelle.sprache || "en";
      quelle.append(link);
      auswahl.replaceChildren(kopf, zeile, el("p", "erklaerung", meldung.text), quelle);
      if (meldung.offen) auswahl.append(el("p", "profil-notiz", T("neu.offen")));
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const oben = el("div", "breit");
    oben.append(abschnitt("zt.spanne"), wahl, huelle, zahlen);
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("zt.auswahl"), auswahl);
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("zt.lesen"), el("p", "erklaerung", T("zt.lesenText")), abschnitt("tok.grenze"), el("p", "erklaerung", T("zt.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(oben, spalten);
    zeigen();
  }

  return { bauen };
})();
