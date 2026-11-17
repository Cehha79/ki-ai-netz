// Baustein „Abrechnung“ der Wissensseite: stellt Abo und API als getrennte Töpfe gegenüber und
// rechnet aus, was eine Menge an Token über die API kosten würde, verglichen mit dem festen Preis
// eines Abos. Abo-Preise aus daten/abos.js, Modellpreise aus daten/modelle.js.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js, daten/abos.js und daten/modelle.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.abrechnung = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText, tabelle, quellenliste, schrittliste } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = new Map((window.KI_ANBIETER || []).map(eintrag => [eintrag.id, eintrag]));
  const abos = (window.KI_ABOS || []).filter(abo => typeof abo.preis === "number" && abo.preis > 0);
  const modelle = (window.KI_MODELLE || []).filter(modell => modell.preis && modell.preis.ein > 0 && modell.preis.aus > 0 && modell.status !== "deprecated");
  const quellen = (window.KI_ABO_QUELLEN || []).filter(quelle => quelle.fuer.includes("abrechnung"));
  const waehrung = (window.KI_ABOS_STAND || {}).waehrung || "USD";

  // Bleibt beim Sprachwechsel erhalten. Mengen in Millionen Token je Monat.
  const stand = { abo: "max", modell: "", ein: 100, aus: 20 };

  function bauen(ziel) {
    const abo = abos.find(eintrag => eintrag.id === stand.abo) || abos[0];
    if (!abo) return;
    const auswahlModelle = modelle.filter(modell => modell.anbieter === abo.anbieter);
    if (!auswahlModelle.some(modell => modell.id === stand.modell)) stand.modell = (auswahlModelle[0] || { id: "" }).id;

    const aboWahl = el("select");
    // Enthält nur Eigennamen und Zahlen; ohne diese Kennzeichnung macht die türkische Großschreibung aus i ein İ.
    aboWahl.lang = "en";
    aboWahl.setAttribute("aria-label", T("lim.spAbo"));
    for (const eintrag of abos) {
      const punkt = el("option", "", anbieter.get(eintrag.anbieter).kurz + " · " + eintrag.name + " · " + zahlText(eintrag.preis) + " " + waehrung);
      punkt.value = eintrag.id;
      aboWahl.append(punkt);
    }
    aboWahl.value = abo.id;
    aboWahl.addEventListener("change", () => {
      stand.abo = aboWahl.value;
      Klang.ton(660, 0.3);
      bauen(ziel);
    });
    const modellWahl = el("select");
    // Enthält nur Eigennamen und Zahlen; ohne diese Kennzeichnung macht die türkische Großschreibung aus i ein İ.
    modellWahl.lang = "en";
    modellWahl.setAttribute("aria-label", T("ktx.modell"));
    for (const modell of auswahlModelle) {
      const punkt = el("option", "", modell.name + " · " + zahlText(modell.preis.ein, 2) + " / " + zahlText(modell.preis.aus, 2) + " " + waehrung);
      punkt.value = modell.id;
      modellWahl.append(punkt);
    }
    modellWahl.value = stand.modell;

    // Baut einen Schieberegler für eine Menge in Millionen Token.
    const regler = (text, feld, hoechstens, schritt) => {
      const zeile = el("label", "regler");
      const kopf = el("span", "regler-kopf");
      const anzeige = el("b");
      kopf.append(document.createTextNode(T(text)), anzeige);
      const schieber = el("input");
      schieber.type = "range";
      schieber.min = "0";
      schieber.max = String(hoechstens);
      schieber.step = String(schritt);
      schieber.value = String(stand[feld]);
      schieber.addEventListener("input", () => {
        stand[feld] = Number(schieber.value);
        rechnen();
      });
      zeile.append(kopf, schieber);
      return { zeile, zeigen: () => { anzeige.textContent = zahlText(stand[feld]) + " " + T("abr.mio"); } };
    };
    const regelEin = regler("abr.ein", "ein", 1000, 5);
    const regelAus = regler("abr.aus", "aus", 200, 1);

    const balken = el("div", "balken geld");
    const zeile = (text, farbe) => {
      const bahn = el("i");
      const fuellung = el("u");
      fuellung.style.setProperty("--f", farbe);
      bahn.append(fuellung);
      const wert = el("em");
      balken.append(el("span", "", T(text)), bahn, wert);
      return { fuellung, wert };
    };
    const balkenAbo = zeile("abr.balkenAbo", "#ffb000");
    const balkenApi = zeile("abr.balkenApi", "#7fb4d6");
    const meldung = el("p", "fenstermeldung");
    meldung.setAttribute("aria-live", "polite");
    const zahlen = el("div", "zahlen vier");
    const felder = {};
    for (const [name, text] of [["abo", "abr.zAbo"], ["api", "abr.zApi"], ["unterschied", "abr.zUnterschied"], ["gleich", "abr.zGleich"]]) {
      const feld = el("div");
      felder[name] = el("b", "", "0");
      feld.append(felder[name], el("span", "", T(text)));
      zahlen.append(feld);
    }

    function rechnen() {
      stand.modell = modellWahl.value;
      const modell = auswahlModelle.find(eintrag => eintrag.id === stand.modell);
      if (!modell) return;
      // Die Mengen stehen in Millionen Token, die Preise gelten je Million Token.
      const api = stand.ein * modell.preis.ein + stand.aus * modell.preis.aus;
      const menge = stand.ein + stand.aus;
      const gleichstand = menge > 0 ? abo.preis / (api / menge) : null;
      const mass = Math.max(api, abo.preis);
      balkenAbo.fuellung.style.setProperty("--w", (abo.preis / mass * 100) + "%");
      balkenApi.fuellung.style.setProperty("--w", (api / mass * 100) + "%");
      balkenAbo.wert.textContent = zahlText(abo.preis) + " " + waehrung;
      balkenApi.wert.textContent = zahlText(api, 2) + " " + waehrung;
      regelEin.zeigen();
      regelAus.zeigen();
      felder.abo.textContent = zahlText(abo.preis);
      felder.api.textContent = zahlText(api, 2);
      felder.unterschied.textContent = zahlText(Math.abs(api - abo.preis), 2);
      felder.gleich.textContent = gleichstand === null ? "–" : zahlText(gleichstand, 1);
      meldung.textContent = T(menge === 0 ? "abr.meldungLeer" : api > abo.preis ? "abr.meldungTeurer" : "abr.meldungGuenstiger");
    }
    modellWahl.addEventListener("change", () => {
      Klang.ton(660, 0.3);
      rechnen();
    });

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const wahlzeile = el("div", "filterzeile schlicht");
    wahlzeile.append(aboWahl);
    const modellzeile = el("div", "filterzeile schlicht");
    modellzeile.append(modellWahl);
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("ktx.einstellen"), wahlzeile, modellzeile, regelEin.zeile, regelAus.zeile, abschnitt("abr.was"), el("p", "erklaerung", T("abr.wasText")), abschnitt("abr.bruecke"), el("p", "erklaerung", T("abr.brueckeText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("abr.bild"), balken, meldung, zahlen, el("p", "profil-notiz", T("abr.hinweis")), abschnitt("abr.falle"), el("p", "erklaerung", T("abr.falleText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);

    const unten = el("div", "breit");
    unten.append(
      abschnitt("abr.ablauf"),
      schrittliste([
        { klasse: "modell", titel: T("abr.s1"), text: T("abr.s1Text") },
        { klasse: "nutzer", titel: T("abr.s2"), text: T("abr.s2Text") },
        { klasse: "aufruf", titel: T("abr.s3"), text: T("abr.s3Text") },
        { klasse: "werkzeug", titel: T("abr.s4"), text: T("abr.s4Text") }
      ]),
      abschnitt("abr.vergleich"),
      tabelle("", [T("lim.spFrage"), T("abr.spAbo"), T("abr.spApi")], [
        { zellen: [T("abr.f1"), T("abr.f1Abo"), T("abr.f1Api")] },
        { zellen: [T("abr.f2"), T("abr.f2Abo"), T("abr.f2Api")] },
        { zellen: [T("abr.f3"), T("abr.f3Abo"), T("abr.f3Api")] },
        { zellen: [T("abr.f4"), T("abr.f4Abo"), T("abr.f4Api")] }
      ])
    );
    const grenze = el("div");
    grenze.append(abschnitt("tok.grenze"), el("p", "erklaerung", T("abr.grenzeText")));
    const herkunft = el("div");
    herkunft.append(abschnitt("lim.quellen"), quellenliste(quellen, anbieter));
    const schluss = el("div", "zwei");
    schluss.append(grenze, herkunft);
    ziel.replaceChildren(spalten, unten, schluss);
    rechnen();
  }

  return { bauen };
})();
