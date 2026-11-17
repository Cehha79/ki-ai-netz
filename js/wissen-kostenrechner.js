// Baustein „Kostenrechner“ der Wissensseite: rechnet für eine Aufgabe aus Eingabe- und Ausgabe-Token
// die Kosten bei jedem Modell mit bekanntem Preis aus und ordnet die Modelle nach Kosten.
// Preise aus daten/modelle.js (models.dev, Grundtarif).
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js und daten/modelle.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.kostenrechner = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText, eigenname, logo, tabelle } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = new Map((window.KI_ANBIETER || []).map(eintrag => [eintrag.id, eintrag]));
  const modelle = (window.KI_MODELLE || []).filter(modell => modell.preis && modell.preis.ein > 0 && modell.preis.aus > 0 && modell.status !== "deprecated");
  const firmen = [...new Set(modelle.map(modell => modell.anbieter))].filter(kennung => anbieter.has(kennung));
  // Die Token-Zahlen der Beispielaufgaben sind Annahmen zur Orientierung.
  const aufgaben = [
    { text: "kos.kurz", ein: 500, aus: 300 },
    { text: "kos.dokument", ein: 60000, aus: 1500 },
    { text: "kos.sitzung", ein: 2000000, aus: 60000 }
  ];

  // Bleibt beim Sprachwechsel erhalten.
  const stand = { ein: 60000, aus: 1500, mal: 1, cache: 0, anbieter: "" };

  // Schreibt kleine Beträge mit mehr Stellen, damit sie nicht als 0 erscheinen.
  const betrag = wert => zahlText(wert, wert < 0.01 ? 6 : wert < 1 ? 4 : 2);

  function bauen(ziel) {
    // Baut ein Zahlenfeld mit Beschriftung.
    const zahlenfeld = (text, feld, hoechstens) => {
      const zeile = el("label", "regler");
      const kopf = el("span", "regler-kopf");
      kopf.append(document.createTextNode(T(text)));
      const eingabe = el("input", "frage");
      eingabe.type = "number";
      eingabe.min = feld === "mal" ? "1" : "0";
      eingabe.max = String(hoechstens);
      eingabe.step = "1";
      eingabe.value = String(stand[feld]);
      eingabe.addEventListener("input", () => {
        const wert = Math.round(Number(eingabe.value));
        stand[feld] = Math.max(Number(eingabe.min), Math.min(hoechstens, Number.isFinite(wert) ? wert : 0));
        rechnen();
      });
      zeile.append(kopf, eingabe);
      return { zeile, eingabe };
    };
    const feldEin = zahlenfeld("kos.ein", "ein", 100000000);
    const feldAus = zahlenfeld("kos.aus", "aus", 100000000);
    const feldMal = zahlenfeld("kos.mal", "mal", 1000000);

    const vorlagen = el("div", "umschalter spalte");
    for (const aufgabe of aufgaben) {
      const knopf = el("button", "", T(aufgabe.text) + " · " + zahlText(aufgabe.ein) + " / " + zahlText(aufgabe.aus));
      knopf.type = "button";
      knopf.addEventListener("click", () => {
        stand.ein = aufgabe.ein;
        stand.aus = aufgabe.aus;
        feldEin.eingabe.value = String(aufgabe.ein);
        feldAus.eingabe.value = String(aufgabe.aus);
        Klang.ton(880, 0.3);
        rechnen();
      });
      vorlagen.append(knopf);
    }

    const cacheRegler = el("label", "regler");
    const cacheKopf = el("span", "regler-kopf");
    const cacheAnzeige = el("b");
    cacheKopf.append(document.createTextNode(T("kos.cache")), cacheAnzeige);
    const cacheSchieber = el("input");
    cacheSchieber.type = "range";
    cacheSchieber.min = "0";
    cacheSchieber.max = "100";
    cacheSchieber.step = "5";
    cacheSchieber.value = String(stand.cache);
    cacheSchieber.addEventListener("input", () => {
      stand.cache = Number(cacheSchieber.value);
      rechnen();
    });
    cacheRegler.append(cacheKopf, cacheSchieber);

    const firmenWahl = el("select");
    // Enthält nur Eigennamen und Zahlen; ohne diese Kennzeichnung macht die türkische Großschreibung aus i ein İ.
    firmenWahl.lang = "en";
    firmenWahl.setAttribute("aria-label", T("kos.alle"));
    const alle = el("option", "", T("kos.alle"));
    alle.value = "";
    firmenWahl.append(alle);
    for (const kennung of firmen) {
      const punkt = el("option", "", anbieter.get(kennung).name);
      punkt.value = kennung;
      firmenWahl.append(punkt);
    }
    firmenWahl.value = stand.anbieter;
    firmenWahl.addEventListener("change", () => {
      stand.anbieter = firmenWahl.value;
      Klang.ton(660, 0.3);
      rechnen();
    });

    const zahlen = el("div", "zahlen vier");
    const felder = {};
    for (const [name, text] of [["guenstig", "kos.zGuenstig"], ["teuer", "kos.zTeuer"], ["spanne", "kos.zSpanne"], ["modelle", "kos.zModelle"]]) {
      const feld = el("div");
      felder[name] = el("b", "", "0");
      feld.append(felder[name], el("span", "", T(text)));
      zahlen.append(feld);
    }
    const liste = el("div", "kostenliste");
    liste.setAttribute("aria-live", "polite");

    function rechnen() {
      cacheAnzeige.textContent = zahlText(stand.cache) + " %";
      const ausCache = stand.ein * stand.cache / 100;
      const zeilen = modelle.filter(modell => !stand.anbieter || modell.anbieter === stand.anbieter).map(modell => {
        // Für den Anteil aus dem Cache gilt der Cache-Preis, soweit er bekannt ist.
        const cachePreis = typeof modell.preis.cacheLesen === "number" ? modell.preis.cacheLesen : modell.preis.ein;
        const kosten = ((stand.ein - ausCache) * modell.preis.ein + ausCache * cachePreis + stand.aus * modell.preis.aus) / 1000000 * stand.mal;
        return { modell, kosten };
      }).sort((a, b) => a.kosten - b.kosten);
      const kleinste = zeilen.length ? zeilen[0].kosten : 0;
      const groesste = zeilen.length ? zeilen[zeilen.length - 1].kosten : 0;
      felder.guenstig.textContent = zeilen.length ? betrag(kleinste) : "–";
      felder.teuer.textContent = zeilen.length ? betrag(groesste) : "–";
      felder.spanne.textContent = kleinste > 0 ? "× " + zahlText(groesste / kleinste) : "–";
      felder.modelle.textContent = zahlText(zeilen.length);
      liste.replaceChildren(tabelle("kosten", [T("kos.spRang"), T("kos.spModell"), T("kos.spEin"), T("kos.spAus"), T("kos.spKosten"), T("kos.spFaktor")], zeilen.map((zeile, nummer) => {
        const name = el("span", "modellname");
        name.append(logo(anbieter.get(zeile.modell.anbieter), false), eigenname("b", zeile.modell.name));
        return {
          zellen: [String(nummer + 1), name, zahlText(zeile.modell.preis.ein, 3), zahlText(zeile.modell.preis.aus, 3), betrag(zeile.kosten), kleinste > 0 ? "× " + zahlText(zeile.kosten / kleinste, 1) : "–"]
        };
      })));
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const wahlzeile = el("div", "filterzeile schlicht");
    wahlzeile.append(firmenWahl);
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("kos.aufgabe"), vorlagen, el("p", "profil-notiz", T("kos.annahme")), feldEin.zeile, feldAus.zeile, feldMal.zeile, cacheRegler, wahlzeile, abschnitt("kos.wie"), el("p", "erklaerung", T("kos.wieText")), abschnitt("kos.warum"), el("p", "erklaerung", T("kos.warumText")), abschnitt("tok.grenze"), el("p", "erklaerung", T("kos.grenzeText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("kos.liste"), zahlen, liste, el("p", "profil-notiz", T("kos.preisquelle")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    rechnen();
  }

  return { bauen };
})();
