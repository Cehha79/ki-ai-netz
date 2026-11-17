// Anbieterseite: links das Verzeichnis aller Anbieter, rechts das Profil des gewählten Anbieters.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js, daten/beziehungen.js und daten/modelle.js.
(() => {
  "use strict";

  const { T, L, el, tafel } = window.Rahmen;
  const { logo, verweis, hostname, datumText, zahlText, eigenname, offeneFelder, strecken, sprachkennung } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = window.KI_ANBIETER || [];
  const gruppen = window.KI_GRUPPEN || [];
  const laender = window.KI_LAENDER || {};
  const beziehungen = window.KI_BEZIEHUNGEN || [];
  const modelle = window.KI_MODELLE || [];
  const modellStand = window.KI_MODELLE_STAND || {};
  const ziel = document.getElementById("anbieter");
  if (!ziel || !anbieter.length) return;

  const nachKennung = new Map(anbieter.map(eintrag => [eintrag.id, eintrag]));
  // Ein- und Ausgabearten aus den Modelldaten und der Text, unter dem sie angezeigt werden.
  const artTexte = { text: "art.text", image: "art.bild", video: "art.video", audio: "art.audio", pdf: "art.pdf" };
  const ausAdresse = () => decodeURIComponent(window.location.hash.slice(1));

  let aktiv = nachKennung.has(ausAdresse()) ? ausAdresse() : anbieter[0].id;
  let frage = "";
  let liste = null;
  let trefferZeile = null;
  let profil = null;
  let profilKennung = null;

  function passt(eintrag) {
    if (!frage) return true;
    const land = laender[eintrag.land] || {};
    const gruppe = gruppen.find(g => g.id === eintrag.gruppe) || { name: {} };
    const text = [eintrag.name, eintrag.kurz, eintrag.produkt, eintrag.spitzenmodell.name, land.de, land.en, land.tr, gruppe.name.de, gruppe.name.en, gruppe.name.tr].join(" ");
    return text.toLocaleLowerCase(sprachkennung()).includes(frage.toLocaleLowerCase(sprachkennung()));
  }

  function listeFuellen() {
    const teile = [];
    let treffer = 0;
    for (const gruppe of gruppen) {
      const mitglieder = anbieter.filter(eintrag => eintrag.gruppe === gruppe.id && passt(eintrag));
      if (!mitglieder.length) continue;
      const kopf = el("h3", "verz-gruppe");
      kopf.append(el("b", "", gruppe.nr), document.createTextNode(L(gruppe.name)), el("em", "", String(mitglieder.length)));
      teile.push(kopf);
      for (const eintrag of mitglieder) {
        treffer++;
        const knopf = el("button", "verz-eintrag");
        knopf.type = "button";
        knopf.dataset.id = eintrag.id;
        knopf.setAttribute("aria-pressed", String(eintrag.id === aktiv));
        const text = el("span");
        text.append(eigenname("b", eintrag.name), el("small", "", L(laender[eintrag.land]) + " · " + eintrag.spitzenmodell.name));
        knopf.append(logo(eintrag, false), text);
        knopf.addEventListener("click", () => waehlen(eintrag.id, true));
        teile.push(knopf);
      }
    }
    if (!treffer) teile.push(el("p", "verz-leer", T("verz.keinTreffer")));
    liste.replaceChildren(...teile);
    trefferZeile.textContent = treffer + " / " + anbieter.length;
  }

  function verzeichnisBauen() {
    const kasten = tafel(T("verz.titel"));
    kasten.classList.add("verzeichnis");
    trefferZeile = el("small");
    kasten.firstChild.append(trefferZeile);
    const befehl = el("label", "befehl");
    const eingabe = el("input");
    eingabe.type = "search";
    eingabe.id = "suche";
    eingabe.autocomplete = "off";
    eingabe.placeholder = T("start.suchfeld");
    eingabe.setAttribute("aria-label", T("start.suchfeld"));
    eingabe.value = frage;
    eingabe.addEventListener("input", () => {
      frage = eingabe.value.trim();
      listeFuellen();
    });
    eingabe.addEventListener("keydown", ereignis => {
      if (ereignis.key === "Enter") {
        const erster = liste.querySelector(".verz-eintrag");
        if (erster) waehlen(erster.dataset.id, true);
      }
      if (ereignis.key === "Escape") {
        eingabe.value = "";
        frage = "";
        listeFuellen();
      }
    });
    befehl.append(el("span", "", "> " + T("start.suche")), eingabe, el("kbd", "", "/"));
    liste = el("div", "verz-liste");
    kasten.append(befehl, liste);
    listeFuellen();
    return kasten;
  }

  function abschnitt(titel, zusatz) {
    const kopf = el("h3", "profil-abschnitt", titel);
    if (zusatz) kopf.append(el("small", "", zusatz));
    return kopf;
  }

  function modellTabelle(eigene) {
    const tabelle = el("table", "tabelle");
    const kopfzeile = el("tr");
    for (const [schluessel, rechts] of [["mod.modell", false], ["mod.datum", false], ["mod.kontext", true], ["mod.maxAusgabe", true], ["mod.preisEin", true], ["mod.preisAus", true], ["mod.arten", false], ["mod.merkmale", false]]) {
      const zelle = el("th", rechts ? "rechts" : "", T(schluessel));
      zelle.scope = "col";
      kopfzeile.append(zelle);
    }
    const kopf = el("thead");
    kopf.append(kopfzeile);
    const rumpf = el("tbody");
    const arten = werte => werte.map(wert => T(artTexte[wert] || "art.text")).join(", ");
    for (const modell of eigene) {
      const zeile = el("tr", modell.status === "deprecated" ? "matt" : "");
      const name = el("td");
      name.append(eigenname("b", modell.name));
      if (modell.status) name.append(el("em", "merkmal", T("mod." + modell.status)));
      const merkmale = el("td");
      for (const [vorhanden, schluessel] of [[modell.denken, "mod.denken"], [modell.werkzeuge, "mod.werkzeuge"], [modell.offeneGewichte, "mod.offeneGewichte"]]) {
        if (vorhanden) merkmale.append(el("em", "merkmal", T(schluessel)));
      }
      zeile.append(
        name,
        el("td", "", datumText(modell.datum) || "–"),
        el("td", "rechts", zahlText(modell.kontext)),
        el("td", "rechts", zahlText(modell.ausgabe)),
        el("td", "rechts", modell.preis ? zahlText(modell.preis.ein, 4) : "–"),
        el("td", "rechts", modell.preis ? zahlText(modell.preis.aus, 4) : "–"),
        el("td", "", arten(modell.eingabeArten) + " → " + arten(modell.ausgabeArten)),
        merkmale
      );
      rumpf.append(zeile);
    }
    tabelle.append(kopf, rumpf);
    const huelle = el("div", "tabellenhuelle");
    huelle.append(tabelle);
    return huelle;
  }

  function profilZeigen() {
    const eintrag = nachKennung.get(aktiv);
    const gruppe = gruppen.find(g => g.id === eintrag.gruppe);
    const modell = eintrag.spitzenmodell;
    profilKennung.textContent = gruppe.nr + " · " + L(gruppe.name);

    const kopf = el("div", "profil-kopf");
    const titel = el("div");
    const marken = el("p", "profil-marken");
    marken.append(el("span", "", L(laender[eintrag.land])));
    if (eintrag.status !== "unveraendert") marken.append(el("span", "betont", T("status." + eintrag.status)));
    titel.append(eigenname("h2", eintrag.name), marken, el("p", "profil-text", L(eintrag.portraet)));
    kopf.append(logo(eintrag, true), titel);
    const teile = [kopf];
    if (eintrag.hinweis) teile.push(el("p", "auswahl-hinweis", L(eintrag.hinweis)));

    teile.push(abschnitt(T("profil.stammdaten"), T("profil.geprueft") + " " + datumText(eintrag.geprueftAm)));
    const werte = el("dl", "werte");
    const modellText = modell.name + " · " + T("art." + modell.art) + (modell.datum ? " · " + datumText(modell.datum) + (modell.datumBelegt ? "" : " (" + T("start.datumUnsicher") + ")") : "");
    for (const [schluessel, wert] of [
      ["feld.gruppe", L(gruppe.name)],
      ["feld.land", L(laender[eintrag.land])],
      ["feld.sitz", L(eintrag.sitz)],
      ["feld.gruendung", eintrag.gruendung ? String(eintrag.gruendung) : "–"],
      ["feld.produkt", eintrag.produkt || "–"],
      ["feld.spitzenmodell", modellText]
    ]) {
      const inhalt = el("dd", "", wert);
      inhalt.title = wert;
      werte.append(el("dt", "", T(schluessel)), inhalt);
    }
    const seite = el("dd");
    seite.append(verweis(eintrag.web, hostname(eintrag.web)));
    const beleg = el("dd");
    beleg.append(verweis(modell.quelle.url, hostname(modell.quelle.url)));
    beleg.title = modell.quelle.name;
    werte.append(el("dt", "", T("feld.website")), seite, el("dt", "", T("feld.modellQuelle")), beleg);
    teile.push(werte);
    const offen = offeneFelder(eintrag);
    if (offen) teile.push(el("p", "auswahl-offen", offen));

    const eigeneModelle = modelle.filter(m => m.anbieter === aktiv);
    teile.push(abschnitt(T("profil.modelle"), String(eigeneModelle.length)));
    if (eigeneModelle.length) {
      teile.push(el("p", "profil-notiz", T("profil.modellHinweis") + " " + datumText(modellStand.abgerufenAm) + ". " + T("profil.modellGrenze")), modellTabelle(eigeneModelle));
    } else {
      teile.push(el("p", "profil-notiz", T("profil.keineModelle")));
    }

    const eigene = beziehungen.filter(b => b.von === aktiv || b.nach === aktiv);
    teile.push(abschnitt(T("profil.verbindungen"), String(eigene.length)));
    teile.push(eigene.length ? strecken(eigene, nachKennung, true) : el("p", "profil-notiz", T("start.keineLeitung")));

    teile.push(abschnitt(T("profil.quellen"), String(eintrag.quellen.length)));
    const quellen = el("ul", "quellenliste");
    for (const quelle of eintrag.quellen) {
      const punkt = el("li");
      // Die Beschreibung der Quelle liegt nur auf Deutsch vor; in den anderen Sprachen steht allein die Adresse.
      punkt.append(verweis(quelle.url, hostname(quelle.url)));
      if (window.Rahmen.sprache() === "de") punkt.append(document.createTextNode(" · " + quelle.name));
      quellen.append(punkt);
    }
    teile.push(quellen);

    const zumPlan = el("a", "profil-verweis", T("profil.imPlan") + " →");
    zumPlan.href = "index.html#" + eintrag.id;
    teile.push(zumPlan);
    profil.replaceChildren(...teile);
  }

  function waehlen(id, vonHand) {
    if (!nachKennung.has(id)) return;
    aktiv = id;
    for (const knopf of liste.querySelectorAll(".verz-eintrag")) knopf.setAttribute("aria-pressed", String(knopf.dataset.id === id));
    profilZeigen();
    // In der breiten Ansicht steht das Profil neben dem Verzeichnis, in der schmalen darunter.
    if (window.innerWidth <= 1180) profil.scrollIntoView({ block: "start" });
    else document.getElementById("inhalt").scrollTop = 0;
    if (!vonHand) return;
    Klang.doppelton();
    try {
      window.history.replaceState(null, "", "#" + id);
    } catch (_) {
      return;
    }
  }

  function bauen() {
    const kasten = tafel(T("profil.titel"));
    profilKennung = el("small");
    kasten.firstChild.append(profilKennung);
    profil = el("div", "profil");
    kasten.append(profil);
    const spalten = el("div", "zweispalter");
    spalten.append(verzeichnisBauen(), kasten);
    ziel.replaceChildren(spalten);
    profilZeigen();
  }

  document.addEventListener("sprachwechsel", bauen);
  window.addEventListener("hashchange", () => {
    if (nachKennung.has(ausAdresse()) && ausAdresse() !== aktiv) waehlen(ausAdresse(), false);
  });
  document.addEventListener("keydown", ereignis => {
    const feld = document.getElementById("suche");
    if (ereignis.key === "/" && feld && document.activeElement !== feld) {
      ereignis.preventDefault();
      feld.focus();
    }
  });
  bauen();
})();
