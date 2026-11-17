// Baustein „Limits“ der Wissensseite: zeigt an zwei Behältern, wie das 5-Stunden-Fenster und das
// Wochenlimit eines Abos zusammenwirken, und stellt die Abos von Anthropic und OpenAI gegenüber.
// Die Verhältnisse der Abos stammen aus daten/abos.js. Die Mengen der Knöpfe und die Größe des
// Fasses sind Annahmen und stehen so auf der Seite.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js und daten/abos.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.limits = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { zahlText, datumText, eigenname, logo, tabelle, quellenliste } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = new Map((window.KI_ANBIETER || []).map(eintrag => [eintrag.id, eintrag]));
  const abos = window.KI_ABOS || [];
  const vergleich = window.KI_ABO_VERGLEICH || [];
  const quellen = (window.KI_ABO_QUELLEN || []).filter(quelle => quelle.fuer.includes("limits"));
  const datenstand = window.KI_ABOS_STAND || {};
  // Nur Abos mit veröffentlichtem Verhältnis lassen sich am Bild zeigen.
  const stufen = abos.filter(abo => typeof abo.woche === "number");
  // Annahme: Das Fass des Pro-Abos fasst zehn volle Becher des Pro-Abos.
  const becherJeFass = 10;
  // Mengen in Einheiten; eine Einheit ist ein voller Becher des Pro-Abos.
  const mengen = [["lim.frage", 0.02], ["lim.aufgabe", 0.2], ["lim.auftrag", 1]];
  const rund = wert => Math.round(wert * 10000) / 10000;

  // Bleibt beim Sprachwechsel erhalten.
  const stand = { abo: "pro", becher: 0, fass: 0, fenster: 1, meldung: "lim.bereit" };

  function bauen(ziel) {
    const abo = stufen.find(eintrag => eintrag.id === stand.abo) || stufen[0];
    if (!abo) return;
    const becherGroesse = typeof abo.fenster === "number" ? abo.fenster : null;
    const fassGroesse = abo.woche * becherJeFass;

    const wahl = el("div", "umschalter");
    for (const stufe of stufen) {
      const knopf = eigenname("button", stufe.name);
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", String(stufe.id === abo.id));
      knopf.addEventListener("click", () => {
        Object.assign(stand, { abo: stufe.id, becher: 0, fass: 0, fenster: 1, meldung: "lim.bereit" });
        Klang.doppelton();
        bauen(ziel);
      });
      wahl.append(knopf);
    }

    // Baut einen Behälter: Name, Säule mit Füllung, Anteil in Prozent, Menge in Einheiten.
    const mass = text => {
      const kasten = el("div", "mass");
      const rohr = el("div", "mass-rohr");
      const fuellung = el("i");
      rohr.append(fuellung);
      const zahl = el("b");
      const wert = el("span", "mass-wert");
      kasten.append(el("span", "mass-name", T(text)), rohr, zahl, wert);
      return { kasten, fuellung, zahl, wert };
    };
    const becher = mass("lim.becher");
    const fass = mass("lim.fass");
    const behaelter = el("div", "behaelter");
    behaelter.append(becher.kasten, fass.kasten);
    const meldung = el("p", "fenstermeldung");
    meldung.setAttribute("aria-live", "polite");
    const fensterzeile = el("p", "att-kopf");

    function zeigen() {
      const fassVoll = stand.fass >= fassGroesse;
      const becherVoll = becherGroesse !== null && stand.becher >= becherGroesse;
      if (becherGroesse === null) {
        becher.kasten.className = "mass aus";
        becher.fuellung.style.height = "0";
        becher.zahl.textContent = "–";
        becher.wert.textContent = T("lim.keinBecher");
      } else {
        becher.kasten.className = "mass" + (becherVoll ? " voll" : "");
        becher.fuellung.style.height = (stand.becher / becherGroesse * 100) + "%";
        becher.zahl.textContent = zahlText(stand.becher / becherGroesse * 100) + " %";
        becher.wert.textContent = zahlText(stand.becher, 2) + " / " + zahlText(becherGroesse) + " " + T("lim.einheiten");
      }
      fass.kasten.className = "mass" + (fassVoll ? " voll" : "");
      fass.fuellung.style.height = (stand.fass / fassGroesse * 100) + "%";
      fass.zahl.textContent = zahlText(stand.fass / fassGroesse * 100) + " %";
      fass.wert.textContent = zahlText(stand.fass, 2) + " / " + zahlText(fassGroesse) + " " + T("lim.einheiten");
      meldung.className = "fenstermeldung" + (fassVoll || becherVoll ? " voll" : "");
      meldung.textContent = T(stand.meldung);
      fensterzeile.replaceChildren(document.createTextNode(T("lim.fenster") + " "), el("b", "", String(stand.fenster)));
    }

    // Dieselbe Menge fließt in beide Behälter; ist einer voll, geht nichts mehr.
    function nutzen(menge) {
      const frei = Math.min(becherGroesse === null ? Infinity : becherGroesse - stand.becher, fassGroesse - stand.fass);
      if (frei <= 0) {
        stand.meldung = stand.fass >= fassGroesse ? "lim.fassVoll" : "lim.becherVoll";
        Klang.ton(220, 0.5, 0.2);
        zeigen();
        return;
      }
      const dazu = Math.min(menge, frei);
      stand.becher = rund(stand.becher + dazu);
      stand.fass = rund(stand.fass + dazu);
      if (stand.fass >= fassGroesse) stand.meldung = "lim.fassVoll";
      else if (becherGroesse !== null && stand.becher >= becherGroesse) stand.meldung = "lim.becherVoll";
      else stand.meldung = "lim.laeuft";
      Klang.ton(stand.meldung === "lim.laeuft" ? 880 : 220, 0.35);
      zeigen();
    }

    const knopf = (text, tun) => {
      const taste = el("button", "", text);
      taste.type = "button";
      taste.addEventListener("click", tun);
      return taste;
    };
    const nutzKnoepfe = el("div", "umschalter spalte");
    for (const [text, menge] of mengen) nutzKnoepfe.append(knopf(T(text) + " · " + zahlText(menge, 2) + " " + T("lim.einheiten"), () => nutzen(menge)));
    const spaeter = knopf(T("lim.fuenf"), () => {
      stand.becher = 0;
      stand.fenster++;
      stand.meldung = stand.fass >= fassGroesse ? "lim.fassVoll" : "lim.geleert";
      Klang.ton(660, 0.3);
      zeigen();
    });
    spaeter.disabled = becherGroesse === null;
    const zeitKnoepfe = el("div", "umschalter");
    zeitKnoepfe.append(spaeter, knopf(T("lim.woche"), () => {
      Object.assign(stand, { becher: 0, fass: 0, fenster: 1, meldung: "lim.neueWoche" });
      Klang.ton(990, 0.3);
      zeigen();
    }));

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const firmen = [...new Set(abos.map(eintrag => eintrag.anbieter))].filter(kennung => anbieter.has(kennung));
    const unten = el("div", "breit");
    unten.append(abschnitt("lim.plaene"));
    for (const kennung of firmen) {
      const firma = anbieter.get(kennung);
      const kopf = el("div", "anbieterzeile");
      kopf.append(logo(firma, false), eigenname("strong", firma.name));
      const zeilen = abos.filter(eintrag => eintrag.anbieter === kennung).map(eintrag => ({
        klasse: eintrag.id === abo.id ? "gewaehlt" : "",
        zellen: [
          eigenname("b", eintrag.name),
          eintrag.preis === null ? T("lim.unbestaetigt") : zahlText(eintrag.preis) + " " + datenstand.waehrung,
          L(eintrag.fensterText),
          L(eintrag.wocheText),
          eintrag.hinweis ? L(eintrag.hinweis) : "–"
        ]
      }));
      unten.append(kopf, tabelle("abos", [T("lim.spAbo"), T("lim.spPreis"), T("lim.spFenster"), T("lim.spWoche"), T("lim.spHinweis")], zeilen));
    }
    unten.append(el("p", "profil-notiz", T("lim.geprueft") + " " + datumText(datenstand.geprueftAm) + "."));
    unten.append(abschnitt("lim.vergleich"), tabelle("", [T("lim.spFrage"), ...firmen.map(kennung => eigenname("th", anbieter.get(kennung).name))], vergleich.map(zeile => ({
      zellen: [L(zeile.frage), ...firmen.map(kennung => zeile.antworten[kennung] ? L(zeile.antworten[kennung]) : "–")]
    }))));

    const grenze = el("div");
    grenze.append(abschnitt("tok.grenze"), el("p", "erklaerung", T("lim.grenzeText")));
    const herkunft = el("div");
    herkunft.append(abschnitt("lim.quellen"), quellenliste(quellen, anbieter));
    const schluss = el("div", "zwei");
    schluss.append(grenze, herkunft);

    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("lim.abo"), wahl, abschnitt("lim.nutzen"), nutzKnoepfe, abschnitt("lim.zeit"), zeitKnoepfe, abschnitt("lim.was"), el("p", "erklaerung", T("lim.wasText")), abschnitt("lim.menge"), el("p", "erklaerung", T("lim.mengeText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("lim.bild"), behaelter, meldung, fensterzeile, el("p", "profil-notiz", T("lim.annahme")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten, unten, schluss);
    zeigen();
  }

  return { bauen };
})();
