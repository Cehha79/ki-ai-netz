// Baustein „Datenherkunft“ der Methodikseite: je Datenart Umfang, Prüfdatum, Quelle und Pflege.
// Beschreibungen aus daten/methodik.js, Zahlen aus js/methodik.js.
// Braucht js/rahmen.js, js/hilfen.js und js/methodik.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.herkunft = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const { verweis, tabelle } = window.Hilfen;
  const Methodik = window.Methodik;
  const Klang = window.Klang;

  // Bleibt beim Sprachwechsel erhalten.
  let gewaehlt = "anbieter";

  function bauen(ziel) {
    const liste = el("div", "umschalter spalte");
    const kopf = el("h3", "profil-abschnitt");
    const zahlen = el("div", "zahlen vier drei");
    const felder = {};
    for (const [name, text] of [["umfang", "her.zUmfang"], ["stand", "her.zStand"], ["rhythmus", "her.zRhythmus"]]) {
      const feld = el("div");
      felder[name] = el("b", "", "–");
      feld.append(felder[name], el("span", "", T(text)));
      zahlen.append(feld);
    }
    const quelle = el("p", "erklaerung");
    const pflege = el("p", "erklaerung");
    const zusatz = el("p", "profil-notiz");
    const zurSeite = el("p", "beleg");

    function zeigen() {
      liste.replaceChildren(...Methodik.arten.map(art => {
        const knopf = el("button", "", L(art.name));
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(art.id === gewaehlt));
        knopf.addEventListener("click", () => {
          gewaehlt = art.id;
          Klang.ton(880, 0.3);
          zeigen();
        });
        return knopf;
      }));
      const art = Methodik.arten.find(eintrag => eintrag.id === gewaehlt) || Methodik.arten[0];
      kopf.textContent = L(art.name);
      felder.umfang.textContent = Methodik.umfangText(art);
      felder.stand.textContent = Methodik.standText(art);
      felder.rhythmus.textContent = T("rh." + art.rhythmus);
      quelle.textContent = L(art.quelle);
      pflege.textContent = L(art.pflege);
      // Die Modelldaten nennen Herkunft und Lizenz selbst.
      const modellstand = window.KI_MODELLE_STAND || {};
      zusatz.hidden = art.id !== "modelle" || !modellstand.adresse;
      if (!zusatz.hidden) zusatz.replaceChildren(verweis(modellstand.adresse, modellstand.quelle), document.createTextNode(" · " + T("her.lizenz") + " " + modellstand.lizenz));
      const link = el("a", "", T("her.zurSeite"));
      link.href = art.seite;
      zurSeite.replaceChildren(link);
    }

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("her.wahl"), liste);
    const rechteSeite = el("div");
    rechteSeite.append(kopf, zahlen, abschnitt("her.quelle"), quelle, zusatz, abschnitt("her.pflege"), pflege, zurSeite);
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    const unten = el("div", "breit");
    unten.append(abschnitt("her.tabelle"), tabelle("herkunft", [T("her.spArt"), T("her.zUmfang"), T("feld.quelle"), T("her.zStand")], Methodik.arten.map(art => ({
      zellen: [L(art.name), Methodik.umfangText(art), L(art.quelle), Methodik.standText(art)]
    }))));
    ziel.replaceChildren(spalten, unten);
    zeigen();
  }

  return { bauen };
})();
