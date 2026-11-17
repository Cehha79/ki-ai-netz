// Schaubild „Kontextfenster“: zeigt als Balken, wie Systemanweisung, Dokumente, Gesprächsverlauf und
// der Platz für die Antwort das Fenster eines Modells füllen, und was geschieht, wenn es voll ist.
// Die Größen von Seite und Nachricht sind Annahmen und stehen auf der Seite.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js und daten/modelle.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.kontext = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = new Map((window.KI_ANBIETER || []).map(eintrag => [eintrag.id, eintrag]));
  const modelle = (window.KI_MODELLE || []).filter(modell => modell.preis && modell.preis.ein > 0 && modell.kontext > 0 && modell.status !== "deprecated");
  const jeSeite = 650;
  const jeNachricht = 300;
  const farben = { system: "#ffb000", dokumente: "#7fb4d6", verlauf: "#d8dbc9", antwort: "#86f58f" };

  // Bleibt beim Sprachwechsel erhalten.
  const stand = {
    modell: (modelle.find(modell => modell.name === "Claude Fable 5.2") || modelle[0] || { id: "" }).id,
    system: 2000,
    seiten: 200,
    nachrichten: 60,
    antwort: 8000,
    kuerzen: false
  };
  let warVoll = false;

  function bauen(ziel) {
    const auswahl = el("select");
    // Enthält nur Eigennamen und Zahlen; ohne diese Kennzeichnung macht die türkische Großschreibung aus i ein İ.
    auswahl.lang = "en";
    auswahl.setAttribute("aria-label", T("ktx.modell"));
    for (const modell of modelle) {
      const punkt = el("option", "", anbieter.get(modell.anbieter).kurz + " · " + modell.name + " · " + zahlText(modell.kontext));
      punkt.value = modell.id;
      auswahl.append(punkt);
    }
    auswahl.value = stand.modell;

    // Baut einen Schieberegler mit Beschriftung und Anzeige des Werts.
    const regler = (text, feld, hoechstens, schritt, einheit) => {
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
      return { zeile, schieber, zeigen: token => { anzeige.textContent = zahlText(stand[feld]) + " " + T(einheit) + (einheit === "ktx.token" ? "" : " = " + zahlText(token) + " " + T("ktx.token")); } };
    };
    const regelSystem = regler("ktx.system", "system", 50000, 500, "ktx.token");
    const regelDokumente = regler("ktx.dokumente", "seiten", 3000, 10, "ktx.seiten");
    const regelVerlauf = regler("ktx.verlauf", "nachrichten", 2000, 10, "ktx.nachrichten");
    const regelAntwort = regler("ktx.antwort", "antwort", 128000, 1000, "ktx.token");

    const kuerzen = el("button", "", T("ktx.kuerzen"));
    kuerzen.type = "button";
    kuerzen.setAttribute("aria-pressed", String(stand.kuerzen));
    kuerzen.addEventListener("click", () => {
      stand.kuerzen = !stand.kuerzen;
      kuerzen.setAttribute("aria-pressed", String(stand.kuerzen));
      Klang.ton(stand.kuerzen ? 990 : 660, 0.3);
      rechnen();
    });
    const schalterzeile = el("div", "umschalter");
    schalterzeile.append(kuerzen);

    const balken = el("div", "fensterbalken");
    const teile = {};
    for (const name of ["system", "dokumente", "verlauf", "antwort"]) {
      teile[name] = el("i");
      teile[name].style.background = farben[name];
      balken.append(teile[name]);
    }
    const grenze = el("u");
    balken.append(grenze);
    const meldung = el("p", "fenstermeldung");
    meldung.setAttribute("aria-live", "polite");
    const zahlen = el("div", "zahlen vier");
    const felder = {};
    for (const [name, text] of [["fenster", "ktx.fenster"], ["belegt", "ktx.belegt"], ["frei", "ktx.frei"], ["anteil", "ktx.anteil"]]) {
      const feld = el("div");
      felder[name] = el("b", "", "0");
      feld.append(felder[name], el("span", "", T(text)));
      zahlen.append(feld);
    }
    const aufstellung = el("dl", "werte rechnung");
    const zeilen = {};
    for (const [name, text] of [["system", "ktx.system"], ["dokumente", "ktx.dokumente"], ["verlauf", "ktx.verlauf"], ["antwort", "ktx.antwort"], ["kosten", "ktx.kosten"]]) {
      const titel = el("dt");
      if (farben[name]) {
        const licht = el("i", "farbfeld");
        licht.style.background = farben[name];
        titel.append(licht);
      }
      titel.append(document.createTextNode(T(text)));
      zeilen[name] = el("dd", "", "–");
      aufstellung.append(titel, zeilen[name]);
    }

    function rechnen() {
      stand.modell = auswahl.value;
      const modell = modelle.find(eintrag => eintrag.id === stand.modell);
      if (!modell) return;
      // Die Antwort kann nie länger sein, als das Modell ausgeben darf.
      const hoechsteAntwort = modell.ausgabe || 128000;
      regelAntwort.schieber.max = String(hoechsteAntwort);
      if (stand.antwort > hoechsteAntwort) {
        stand.antwort = hoechsteAntwort;
        regelAntwort.schieber.value = String(hoechsteAntwort);
      }
      const system = stand.system, dokumente = stand.seiten * jeSeite, antwort = stand.antwort;
      let verlauf = stand.nachrichten * jeNachricht;
      let entfallen = 0;
      if (stand.kuerzen && system + dokumente + verlauf + antwort > modell.kontext) {
        entfallen = Math.min(stand.nachrichten, Math.ceil((system + dokumente + verlauf + antwort - modell.kontext) / jeNachricht));
        verlauf -= entfallen * jeNachricht;
      }
      const summe = system + dokumente + verlauf + antwort;
      const zuViel = Math.max(0, summe - modell.kontext);
      const mass = Math.max(summe, modell.kontext);
      for (const [name, wert] of [["system", system], ["dokumente", dokumente], ["verlauf", verlauf], ["antwort", antwort]]) {
        teile[name].style.width = (wert / mass * 100) + "%";
        zeilen[name].textContent = zahlText(wert) + " " + T("ktx.token");
      }
      grenze.style.left = (modell.kontext / mass * 100) + "%";
      grenze.hidden = !zuViel;
      balken.classList.toggle("voll", zuViel > 0);
      regelSystem.zeigen(system);
      regelDokumente.zeigen(stand.seiten * jeSeite);
      regelVerlauf.zeigen(stand.nachrichten * jeNachricht);
      regelAntwort.zeigen(antwort);
      felder.fenster.textContent = zahlText(modell.kontext);
      felder.belegt.textContent = zahlText(summe);
      felder.frei.textContent = zahlText(Math.max(0, modell.kontext - summe));
      felder.anteil.textContent = zahlText(summe / modell.kontext * 100, 1) + " %";
      zeilen.kosten.textContent = zahlText(((system + dokumente + verlauf) * modell.preis.ein + antwort * (modell.preis.aus || 0)) / 1000000, 4) + " USD";
      meldung.className = "fenstermeldung" + (zuViel ? " voll" : "");
      if (zuViel) meldung.textContent = T("ktx.voll") + " " + zahlText(zuViel) + " " + T("ktx.zuviel");
      else if (entfallen) meldung.textContent = zahlText(entfallen) + " " + T("ktx.gekuerzt");
      else meldung.textContent = T("ktx.passt");
      if (zuViel && !warVoll) Klang.ton(220, 0.5, 0.2);
      warVoll = zuViel > 0;
    }
    auswahl.addEventListener("change", () => {
      Klang.ton(660, 0.3);
      rechnen();
    });

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const wahlzeile = el("div", "filterzeile schlicht");
    wahlzeile.append(auswahl);
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("ktx.einstellen"), wahlzeile, regelSystem.zeile, regelDokumente.zeile, regelVerlauf.zeile, regelAntwort.zeile, schalterzeile, el("p", "profil-notiz", T("ktx.annahme")), abschnitt("ktx.was"), el("p", "erklaerung", T("ktx.wasText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("ktx.bild"), balken, meldung, zahlen, aufstellung, el("p", "profil-notiz", T("tok.preisquelle")), abschnitt("ktx.warum"), el("p", "erklaerung", T("ktx.warumText")), abschnitt("tok.grenze"), el("p", "erklaerung", T("ktx.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    rechnen();
  }

  return { bauen };
})();
