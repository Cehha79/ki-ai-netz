// Baustein „Meldungen“ der Neuigkeitenseite: alle Meldungen als Liste, die jüngste zuerst, mit
// Auswahl der Art und Suchfeld. Jede Zeile nennt Datum und Quelle.
// Braucht js/rahmen.js, js/hilfen.js, js/finanzen.js und js/neuigkeiten.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.meldungen = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText, datumText, verweis, tabelle, sprachkennung } = window.Hilfen;
  const Finanz = window.Finanz;
  const Meldungen = window.Meldungen;
  const Klang = window.Klang;

  // Bleibt beim Sprachwechsel erhalten.
  const stand = { art: "", suche: "" };

  function bauen(ziel) {
    const alle = Meldungen.liste();
    const klein = text => text.toLocaleLowerCase(sprachkennung());
    const wahl = el("div", "umschalter");
    const feld = el("input", "frage");
    feld.type = "search";
    feld.maxLength = 60;
    feld.value = stand.suche;
    feld.placeholder = T("mel.suche");
    feld.setAttribute("aria-label", T("mel.suche"));
    const zaehler = el("p", "att-kopf");
    zaehler.setAttribute("aria-live", "polite");
    const liste = el("div", "meldungsliste");

    function zeigen() {
      stand.suche = feld.value.trim();
      wahl.replaceChildren(...[["", "mel.alle"], ...Meldungen.arten.map(art => [art, "na." + art])].map(([kennung, text]) => {
        const knopf = el("button", "", T(text));
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(kennung === stand.art));
        knopf.addEventListener("click", () => {
          stand.art = kennung;
          Klang.doppelton();
          zeigen();
        });
        return knopf;
      }));
      const gesucht = klein(stand.suche);
      const treffer = alle.filter(meldung => (!stand.art || meldung.art === stand.art) && (!gesucht || klein(meldung.text).includes(gesucht) || meldung.firmen.some(kennung => klein(Finanz.anbieter.get(kennung).name).includes(gesucht))));
      zaehler.replaceChildren(el("b", "", zahlText(treffer.length)), document.createTextNode(" " + T("mel.zahl")));
      if (!treffer.length) {
        liste.replaceChildren(el("p", "profil-notiz", T("mel.nichts")));
        return;
      }
      liste.replaceChildren(tabelle("meldungen", [T("fin.datum"), T("mel.spArt"), T("fin.anbieter"), T("mel.spMeldung"), T("feld.quelle")], treffer.map(meldung => {
        const art = el("span", "", T("na." + meldung.art));
        art.style.color = Meldungen.farben[meldung.art];
        const firmen = el("span", "belege");
        firmen.append(...meldung.firmen.map(Finanz.firma));
        const quelle = el("span", "beleg");
        const link = verweis(meldung.quelle.url, meldung.quelle.name);
        link.lang = meldung.quelle.sprache || "en";
        quelle.append(link);
        if (meldung.offen) quelle.append(document.createTextNode(" · " + T("start.ungesichert")));
        return { zellen: [datumText(meldung.datum), art, firmen, meldung.text, quelle] };
      })));
    }
    feld.addEventListener("input", zeigen);

    const kopf = el("div", "glossarkopf");
    kopf.append(feld, zaehler);
    const oben = el("div", "meldungskopf");
    oben.append(wahl, kopf);
    const grenze = el("div");
    grenze.append(el("h3", "profil-abschnitt", T("tok.grenze")), el("p", "erklaerung", T("neu.herkunft") + " " + T("zt.grenzeText")));
    ziel.replaceChildren(oben, liste, grenze);
    zeigen();
  }

  return { bauen };
})();
