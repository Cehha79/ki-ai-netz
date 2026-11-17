// Schaubild „Agenten und Werkzeuge“: spielt Schritt für Schritt durch, wie ein Modell eine Aufgabe
// mit zwei Werkzeugen löst. Der Ablauf ist ein fester Beispielfall; die Zahlen stammen aus daten/modelle.js.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js und daten/modelle.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.agenten = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = new Map((window.KI_ANBIETER || []).map(eintrag => [eintrag.id, eintrag]));
  const modelle = (window.KI_MODELLE || []).filter(modell => modell.preis && modell.preis.ein > 0 && modell.status !== "deprecated");
  const jeSeite = 650;
  const stationen = ["nutzer", "modell", "aufruf", "werkzeug"];
  const stationsTexte = ["agt.station1", "agt.station2", "agt.station3", "agt.station4"];
  const rollenTexte = { nutzer: "agt.rolleNutzer", modell: "agt.rolleModell", aufruf: "agt.rolleAufruf", werkzeug: "agt.rolleWerkzeug" };

  // Bleibt beim Sprachwechsel erhalten.
  const stand = { modell: (modelle.find(modell => modell.name === "Claude Fable 5.2") || modelle[0] || { id: "" }).id, seiten: 500, schritt: 1 };
  let uhr = null;

  function schritte(modell) {
    const token = stand.seiten * jeSeite;
    const kosten = token * modell.preis.ein / 1000000;
    const fuellen = text => T(text).replace("{seiten}", zahlText(stand.seiten)).replace("{modell}", modell.name).replace("{token}", zahlText(token)).replace("{kosten}", zahlText(kosten, 4));
    return [
      { wer: "nutzer", text: fuellen("agt.aufgabe") },
      { wer: "modell", text: fuellen("agt.denken1") },
      { wer: "aufruf", text: 'preis_nachschlagen({ modell: "' + modell.id + '" })' },
      { wer: "werkzeug", text: "{ eingabe_usd_je_mio_token: " + modell.preis.ein + " }" },
      { wer: "modell", text: fuellen("agt.denken2") },
      { wer: "aufruf", text: 'rechnen({ ausdruck: "' + token + " * " + modell.preis.ein + ' / 1000000" })' },
      { wer: "werkzeug", text: "{ ergebnis: " + Number(kosten.toFixed(4)) + " }" },
      { wer: "modell", text: fuellen("agt.antwort") }
    ];
  }

  function bauen(ziel) {
    clearInterval(uhr);
    const auswahl = el("select");
    // Enthält nur Eigennamen und Zahlen; ohne diese Kennzeichnung macht die türkische Großschreibung aus i ein İ.
    auswahl.lang = "en";
    auswahl.setAttribute("aria-label", T("ktx.modell"));
    for (const modell of modelle) {
      const punkt = el("option", "", anbieter.get(modell.anbieter).kurz + " · " + modell.name);
      punkt.value = modell.id;
      auswahl.append(punkt);
    }
    auswahl.value = stand.modell;
    const regler = el("label", "regler");
    const reglerKopf = el("span", "regler-kopf");
    const anzeige = el("b");
    reglerKopf.append(document.createTextNode(T("agt.seiten")), anzeige);
    const schieber = el("input");
    schieber.type = "range";
    schieber.min = "10";
    schieber.max = "5000";
    schieber.step = "10";
    schieber.value = String(stand.seiten);
    regler.append(reglerKopf, schieber);

    const kreis = el("div", "kreislauf");
    const felder = stationen.map((name, nummer) => {
      const feld = el("div", "", T(stationsTexte[nummer]));
      kreis.append(feld);
      return feld;
    });
    const zaehler = el("p", "att-kopf");
    zaehler.setAttribute("aria-live", "polite");
    const ablauf = el("ol", "ablauf");

    function zeigen() {
      const modell = modelle.find(eintrag => eintrag.id === stand.modell);
      if (!modell) return;
      const alle = schritte(modell);
      stand.schritt = Math.max(1, Math.min(alle.length, stand.schritt));
      anzeige.textContent = zahlText(stand.seiten) + " = " + zahlText(stand.seiten * jeSeite) + " " + T("ktx.token");
      const aktuell = alle[stand.schritt - 1];
      felder.forEach((feld, nummer) => feld.classList.toggle("aktiv", stationen[nummer] === aktuell.wer));
      zaehler.replaceChildren(document.createTextNode(T("agt.zaehler") + " "), el("b", "", stand.schritt + " / " + alle.length));
      ablauf.replaceChildren(...alle.slice(0, stand.schritt).map((eintrag, nummer) => {
        const punkt = el("li", eintrag.wer + (nummer === stand.schritt - 1 ? " neu" : ""));
        punkt.append(el("b", "", T(rollenTexte[eintrag.wer])), el(eintrag.wer === "aufruf" || eintrag.wer === "werkzeug" ? "code" : "span", "", eintrag.text));
        return punkt;
      }));
      ablauf.scrollTop = ablauf.scrollHeight;
    }
    const weiter = () => {
      const ende = schritte(modelle.find(eintrag => eintrag.id === stand.modell)).length;
      if (stand.schritt >= ende) {
        clearInterval(uhr);
        return;
      }
      stand.schritt++;
      Klang.ton(stand.schritt === ende ? 1320 : 880, 0.35);
      zeigen();
    };
    const knopf = (text, tun) => {
      const taste = el("button", "", T(text));
      taste.type = "button";
      taste.addEventListener("click", tun);
      return taste;
    };
    const tasten = el("div", "umschalter");
    tasten.append(
      knopf("agt.schritt", () => { clearInterval(uhr); weiter(); }),
      knopf("agt.abspielen", () => { clearInterval(uhr); stand.schritt = 1; zeigen(); uhr = setInterval(weiter, window.Rahmen.bewegung() ? 1100 : 250); }),
      knopf("agt.neu", () => { clearInterval(uhr); stand.schritt = 1; Klang.ton(660, 0.3); zeigen(); })
    );
    const neuBeginnen = () => {
      clearInterval(uhr);
      stand.modell = auswahl.value;
      stand.seiten = Number(schieber.value);
      stand.schritt = 1;
      zeigen();
    };
    auswahl.addEventListener("change", neuBeginnen);
    schieber.addEventListener("input", neuBeginnen);

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const wahlzeile = el("div", "filterzeile schlicht");
    wahlzeile.append(auswahl);
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("ktx.einstellen"), wahlzeile, regler, tasten, abschnitt("agt.was"), el("p", "erklaerung", T("agt.wasText")), abschnitt("agt.werkzeuge"), el("p", "erklaerung", T("agt.werkzeugeText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("agt.kreislauf"), kreis, abschnitt("agt.protokoll"), zaehler, ablauf, abschnitt("tok.grenze"), el("p", "erklaerung", T("agt.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    zeigen();
  }

  return { bauen };
})();
