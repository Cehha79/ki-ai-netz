// Baustein „API“ der Wissensseite: stellt aus Modell, Frage und Obergrenze eine Anfrage zusammen und
// zeigt sie zusammen mit dem Aufbau der Antwort und den höchsten Kosten. Die Seite sendet nichts.
// Die Anfrage folgt dem Format der Messages API von Anthropic.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js, daten/abos.js und daten/modelle.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.api = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText, quellenliste, schrittliste } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = new Map((window.KI_ANBIETER || []).map(eintrag => [eintrag.id, eintrag]));
  const modelle = (window.KI_MODELLE || []).filter(modell => modell.anbieter === "anthropic" && modell.preis && modell.preis.ein > 0 && modell.preis.aus > 0 && modell.status !== "deprecated");
  const quellen = (window.KI_ABO_QUELLEN || []).filter(quelle => quelle.fuer.includes("api"));
  const adresse = "https://api.anthropic.com/v1/messages";
  const fassung = "2026-10-21";

  // Bleibt beim Sprachwechsel erhalten; null heißt: mit der Beispielfrage der Sprache beginnen.
  const stand = { modell: (modelle[0] || { id: "" }).id, frage: null, hoechstens: 1024 };

  function bauen(ziel) {
    if (stand.frage === null) stand.frage = T("api.beispiel");
    const auswahl = el("select");
    // Enthält nur Eigennamen und Zahlen; ohne diese Kennzeichnung macht die türkische Großschreibung aus i ein İ.
    auswahl.lang = "en";
    auswahl.setAttribute("aria-label", T("ktx.modell"));
    for (const modell of modelle) {
      const punkt = el("option", "", modell.name + " · " + modell.id);
      punkt.value = modell.id;
      auswahl.append(punkt);
    }
    auswahl.value = stand.modell;
    const eingabe = el("textarea", "eingabe niedrig");
    eingabe.maxLength = 2000;
    eingabe.value = stand.frage;
    eingabe.setAttribute("aria-label", T("rag.frage"));
    const regler = el("label", "regler");
    const reglerKopf = el("span", "regler-kopf");
    const anzeige = el("b");
    reglerKopf.append(document.createTextNode(T("api.max")), anzeige);
    const schieber = el("input");
    schieber.type = "range";
    schieber.min = "256";
    schieber.max = "16000";
    schieber.step = "256";
    schieber.value = String(stand.hoechstens);
    regler.append(reglerKopf, schieber);

    const anfrage = el("pre", "sicht ganz");
    const antwort = el("pre", "sicht ganz");
    const zahlen = el("div", "zahlen vier drei");
    const felder = {};
    for (const [name, text] of [["ein", "api.zEin"], ["aus", "api.zAus"], ["kosten", "api.zKosten"]]) {
      const feld = el("div");
      felder[name] = el("b", "", "0");
      feld.append(felder[name], el("span", "", T(text)));
      zahlen.append(feld);
    }

    function zeigen() {
      stand.modell = auswahl.value;
      stand.frage = eingabe.value;
      stand.hoechstens = Number(schieber.value);
      const modell = modelle.find(eintrag => eintrag.id === stand.modell);
      if (!modell) return;
      anzeige.textContent = zahlText(stand.hoechstens) + " " + T("ktx.token");
      // Grobe Schätzung: vier Zeichen je Token.
      const ein = Math.ceil([...stand.frage].length / 4);
      const rumpf = { model: modell.id, max_tokens: stand.hoechstens, messages: [{ role: "user", content: stand.frage }] };
      anfrage.textContent = "POST " + adresse + "\nx-api-key: " + T("api.platzhalter") + "\nanthropic-version: " + fassung + "\ncontent-type: application/json\n\n" + JSON.stringify(rumpf, null, 2);
      antwort.textContent = [
        "{",
        '  "type": "message",',
        '  "role": "assistant",',
        '  "model": "' + modell.id + '",',
        '  "content": [{ "type": "text", "text": "' + T("api.antwortText") + '" }],',
        '  "stop_reason": "end_turn",',
        '  "usage": { "input_tokens": ' + ein + ', "output_tokens": ≤ ' + stand.hoechstens + " }",
        "}"
      ].join("\n");
      felder.ein.textContent = zahlText(ein);
      felder.aus.textContent = zahlText(stand.hoechstens);
      felder.kosten.textContent = zahlText((ein * modell.preis.ein + stand.hoechstens * modell.preis.aus) / 1000000, 4);
    }
    auswahl.addEventListener("change", () => {
      Klang.ton(660, 0.3);
      zeigen();
    });
    eingabe.addEventListener("input", zeigen);
    schieber.addEventListener("input", zeigen);

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const wahlzeile = el("div", "filterzeile schlicht");
    wahlzeile.append(auswahl);
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("api.bauen"), wahlzeile, eingabe, regler, abschnitt("api.was"), el("p", "erklaerung", T("api.wasText")), abschnitt("api.schluessel"), el("p", "erklaerung", T("api.schluesselText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("api.anfrage"), anfrage, abschnitt("api.antwort"), antwort, zahlen, el("p", "profil-notiz", T("api.schaetzung")), el("p", "profil-notiz", T("kos.preisquelle")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);

    const unten = el("div", "breit");
    unten.append(abschnitt("api.schritte"), schrittliste([
      { klasse: "nutzer", titel: T("api.s1"), text: T("api.s1Text") },
      { klasse: "aufruf", titel: T("api.s2"), text: T("api.s2Text") },
      { klasse: "werkzeug", titel: T("api.s3"), text: T("api.s3Text") },
      { klasse: "modell", titel: T("api.s4"), text: T("api.s4Text") }
    ]));
    const grenzen = el("div");
    grenzen.append(abschnitt("api.grenzen"), el("p", "erklaerung", T("api.grenzenText")));
    const sparen = el("div");
    sparen.append(abschnitt("api.sparen"), el("p", "erklaerung", T("api.sparenText")));
    const mitte = el("div", "zwei");
    mitte.append(grenzen, sparen);
    const grenze = el("div");
    grenze.append(abschnitt("tok.grenze"), el("p", "erklaerung", T("api.grenzeText")));
    const herkunft = el("div");
    herkunft.append(abschnitt("lim.quellen"), quellenliste(quellen, anbieter));
    const schluss = el("div", "zwei");
    schluss.append(grenze, herkunft);
    ziel.replaceChildren(spalten, unten, mitte, schluss);
    zeigen();
  }

  return { bauen };
})();
