// Modellseite: Katalog mit Filtern, Direktvergleich, Diagramm aus Preis und Kontext, Zeitachse.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/anbieter.js und daten/modelle.js.
(() => {
  "use strict";

  const { T, el, tafel } = window.Rahmen;
  const { logo, datumText, zahlText, eigenname, farben, sprachkennung } = window.Hilfen;
  const Klang = window.Klang;
  const anbieter = window.KI_ANBIETER || [];
  const modelle = window.KI_MODELLE || [];
  const stand = window.KI_MODELLE_STAND || {};
  const ziel = document.getElementById("modelle");
  if (!ziel || !modelle.length) return;

  const hoechstens = 4;
  const nachKennung = new Map(anbieter.map(eintrag => [eintrag.id, eintrag]));
  const schluessel = modell => modell.anbieter + "/" + modell.id;
  const nachSchluessel = new Map(modelle.map(modell => [schluessel(modell), modell]));
  const artTexte = { text: "art.text", image: "art.bild", video: "art.video", audio: "art.audio", pdf: "art.pdf" };
  const arten = werte => werte.map(wert => T(artTexte[wert] || "art.text")).join(", ");
  const svgKnoten = (name, werte, text) => {
    const knoten = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (const [feld, wert] of Object.entries(werte)) knoten.setAttribute(feld, wert);
    if (text) knoten.textContent = text;
    return knoten;
  };
  const preis = (modell, feld) => modell.preis && typeof modell.preis[feld] === "number" ? modell.preis[feld] : null;

  const filter = { frage: "", anbieter: "", art: "", aktuell: true, offen: false };
  let sortierung = { feld: "datum", absteigend: true };
  // Der Vergleich steht in der Adresse (#v=anbieter/modell,anbieter/modell); sonst beginnen die Spitzenmodelle.
  let vergleich = (decodeURIComponent(window.location.hash).match(/^#v=(.*)$/) || ["", ""])[1].split(",").filter(k => nachSchluessel.has(k)).slice(0, hoechstens);
  if (!vergleich.length) {
    for (const eintrag of anbieter.filter(a => a.gruppe === "spitze")) {
      const treffer = modelle.find(m => m.anbieter === eintrag.id && m.name === eintrag.spitzenmodell.name);
      if (treffer && vergleich.length < hoechstens) vergleich.push(schluessel(treffer));
    }
  }

  let rumpf = null;
  let zaehler = null;
  let kopfKnoepfe = [];
  let vergleichKasten = null;
  let vergleichZaehler = null;
  let diagramm = null;
  let zeitachse = null;

  const werte = {
    name: modell => modell.name.toLocaleLowerCase(sprachkennung()),
    anbieter: modell => nachKennung.get(modell.anbieter).kurz.toLocaleLowerCase(sprachkennung()),
    datum: modell => modell.datum || null,
    kontext: modell => modell.kontext,
    ausgabe: modell => modell.ausgabe,
    preisEin: modell => preis(modell, "ein"),
    preisAus: modell => preis(modell, "aus")
  };

  function gefiltert() {
    const frage = filter.frage.toLocaleLowerCase(sprachkennung());
    const liste = modelle.filter(modell => {
      if (filter.anbieter && modell.anbieter !== filter.anbieter) return false;
      if (filter.art && !modell.ausgabeArten.includes(filter.art)) return false;
      if (filter.aktuell && modell.status === "deprecated") return false;
      if (filter.offen && !modell.offeneGewichte) return false;
      if (!frage) return true;
      const eintrag = nachKennung.get(modell.anbieter);
      return (modell.name + " " + modell.id + " " + eintrag.name + " " + eintrag.kurz).toLocaleLowerCase(sprachkennung()).includes(frage);
    });
    const lesen = werte[sortierung.feld];
    // Fehlende Angaben stehen immer am Ende, gleich in welcher Richtung sortiert wird.
    return liste.sort((a, b) => {
      const x = lesen(a), y = lesen(b);
      if (x === null || x === undefined) return y === null || y === undefined ? 0 : 1;
      if (y === null || y === undefined) return -1;
      const ordnung = x < y ? -1 : x > y ? 1 : 0;
      return sortierung.absteigend ? -ordnung : ordnung;
    });
  }

  function merkmale(modell) {
    const feld = el("td");
    for (const [vorhanden, text] of [[modell.denken, "mod.denken"], [modell.werkzeuge, "mod.werkzeuge"], [modell.offeneGewichte, "mod.offeneGewichte"]]) {
      if (vorhanden) feld.append(el("em", "merkmal", T(text)));
    }
    return feld;
  }

  function tabelleFuellen(liste) {
    const zeilen = liste.map(modell => {
      const eintrag = nachKennung.get(modell.anbieter);
      const zeile = el("tr", modell.status === "deprecated" ? "matt" : "");
      const wahl = el("td");
      const kasten = el("input");
      kasten.type = "checkbox";
      kasten.checked = vergleich.includes(schluessel(modell));
      kasten.dataset.schluessel = schluessel(modell);
      kasten.setAttribute("aria-label", T("kat.vergleichen") + ": " + modell.name);
      kasten.addEventListener("change", () => vergleichUmschalten(schluessel(modell)));
      wahl.append(kasten);
      const firma = el("td", "firma");
      const zumProfil = eigenname("a", eintrag.kurz);
      zumProfil.href = "anbieter.html#" + eintrag.id;
      firma.append(logo(eintrag, false), zumProfil);
      const name = el("td");
      name.append(eigenname("b", modell.name));
      if (modell.status) name.append(el("em", "merkmal", T("mod." + modell.status)));
      zeile.append(
        wahl, firma, name,
        el("td", "", datumText(modell.datum) || "–"),
        el("td", "rechts", zahlText(modell.kontext)),
        el("td", "rechts", zahlText(modell.ausgabe)),
        el("td", "rechts", zahlText(preis(modell, "ein"), 4)),
        el("td", "rechts", zahlText(preis(modell, "aus"), 4)),
        merkmale(modell)
      );
      return zeile;
    });
    if (!zeilen.length) {
      const leer = el("tr");
      const feld = el("td", "", T("kat.keinTreffer"));
      feld.colSpan = 9;
      leer.append(feld);
      zeilen.push(leer);
    }
    rumpf.replaceChildren(...zeilen);
    zaehler.textContent = liste.length + " " + T("stand.von") + " " + modelle.length;
    for (const knopf of kopfKnoepfe) {
      const aktiv = knopf.dataset.feld === sortierung.feld;
      knopf.setAttribute("aria-pressed", String(aktiv));
      knopf.querySelector("i").textContent = aktiv ? (sortierung.absteigend ? " ▼" : " ▲") : "";
    }
  }

  function katalogBauen() {
    const kasten = tafel(T("kat.titel"));
    zaehler = el("small");
    kasten.firstChild.append(zaehler);

    const zeile = el("div", "filterzeile");
    const befehl = el("label", "befehl");
    const eingabe = el("input");
    eingabe.type = "search";
    eingabe.id = "suche";
    eingabe.autocomplete = "off";
    eingabe.placeholder = T("kat.suchfeld");
    eingabe.setAttribute("aria-label", T("kat.suchfeld"));
    eingabe.value = filter.frage;
    eingabe.addEventListener("input", () => {
      filter.frage = eingabe.value.trim();
      aktualisieren();
    });
    befehl.append(el("span", "", "> " + T("start.suche")), eingabe, el("kbd", "", "/"));

    // Mit „eigennamen“ enthält das Feld Firmennamen; die Kennzeichnung verhindert, dass die
    // türkische Großschreibung aus i ein İ macht.
    const auswahl = (bezeichnung, eintraege, feld, eigennamen) => {
      const liste = el("select");
      liste.setAttribute("aria-label", bezeichnung);
      if (eigennamen) liste.lang = "en";
      for (const [wert, text] of eintraege) {
        const punkt = el("option", "", text);
        punkt.value = wert;
        liste.append(punkt);
      }
      liste.value = filter[feld];
      liste.addEventListener("change", () => {
        filter[feld] = liste.value;
        Klang.ton(660, 0.3);
        aktualisieren();
      });
      return liste;
    };
    const mitModellen = anbieter.filter(eintrag => modelle.some(modell => modell.anbieter === eintrag.id));
    const schalter = (text, feld) => {
      const knopf = el("button", "", T(text));
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", String(filter[feld]));
      knopf.addEventListener("click", () => {
        filter[feld] = !filter[feld];
        knopf.setAttribute("aria-pressed", String(filter[feld]));
        Klang.ton(filter[feld] ? 990 : 660, 0.3);
        aktualisieren();
      });
      return knopf;
    };
    const knoepfe = el("span", "umschalter");
    knoepfe.append(schalter("kat.aktuell", "aktuell"), schalter("kat.offen", "offen"));
    zeile.append(
      befehl,
      auswahl(T("kat.anbieter"), [["", T("kat.alleAnbieter")], ...mitModellen.map(eintrag => [eintrag.id, eintrag.name])], "anbieter", true),
      auswahl(T("kat.art"), [["", T("kat.alleArten")], ...["text", "image", "audio", "video"].map(wert => [wert, T("kat.art") + ": " + T(artTexte[wert])])], "art"),
      knoepfe
    );

    const tabelle = el("table", "tabelle");
    const kopfzeile = el("tr");
    kopfKnoepfe = [];
    const spalten = [["", "kat.vergleichen", false], ["anbieter", "kat.anbieter", false], ["name", "mod.modell", false], ["datum", "mod.datum", false], ["kontext", "mod.kontext", true], ["ausgabe", "mod.maxAusgabe", true], ["preisEin", "mod.preisEin", true], ["preisAus", "mod.preisAus", true], ["", "mod.merkmale", false]];
    for (const [feld, text, rechts] of spalten) {
      const zelle = el("th", rechts ? "rechts" : "");
      zelle.scope = "col";
      if (!feld) {
        zelle.textContent = T(text);
      } else {
        const knopf = el("button", "sortierknopf", T(text));
        knopf.type = "button";
        knopf.dataset.feld = feld;
        knopf.append(el("i"));
        knopf.addEventListener("click", () => {
          sortierung = { feld, absteigend: sortierung.feld === feld ? !sortierung.absteigend : feld !== "name" && feld !== "anbieter" };
          Klang.ton(880, 0.3);
          aktualisieren();
        });
        kopfKnoepfe.push(knopf);
        zelle.append(knopf);
      }
      kopfzeile.append(zelle);
    }
    const kopf = el("thead");
    kopf.append(kopfzeile);
    rumpf = el("tbody");
    tabelle.append(kopf, rumpf);
    const huelle = el("div", "kataloghuelle");
    huelle.append(tabelle);
    kasten.append(zeile, huelle, el("p", "tafel-notiz", T("profil.modellHinweis") + " " + datumText(stand.abgerufenAm) + ". " + T("profil.modellGrenze")));
    return kasten;
  }

  // Schreibt den Vergleich in die Adresse, damit er sich verlinken lässt.
  function adresseSetzen() {
    try {
      window.history.replaceState(null, "", vergleich.length ? "#v=" + vergleich.join(",") : window.location.pathname + window.location.search);
    } catch (_) {
      return;
    }
  }

  function vergleichUmschalten(k) {
    if (vergleich.includes(k)) vergleich = vergleich.filter(wert => wert !== k);
    else if (vergleich.length < hoechstens) vergleich.push(k);
    else Klang.ton(220, 0.5, 0.15);
    Klang.doppelton();
    adresseSetzen();
    for (const kasten of rumpf.querySelectorAll("input[type=checkbox]")) kasten.checked = vergleich.includes(kasten.dataset.schluessel);
    vergleichZeigen();
    const liste = gefiltert();
    diagrammZeichnen(liste);
    zeitachseZeichnen(liste);
  }

  function vergleichZeigen() {
    const gewaehlt = vergleich.map(k => nachSchluessel.get(k));
    vergleichZaehler.textContent = gewaehlt.length + " / " + hoechstens;
    if (!gewaehlt.length) {
      vergleichKasten.replaceChildren(el("p", "tafel-notiz", T("vgl.leer")));
      return;
    }
    const tabelle = el("table", "tabelle vergleich");
    const kopfzeile = el("tr");
    kopfzeile.append(el("th"));
    for (const modell of gewaehlt) {
      const eintrag = nachKennung.get(modell.anbieter);
      const zelle = el("th");
      zelle.scope = "col";
      const weg = el("button", "sortierknopf", "×");
      weg.type = "button";
      weg.title = T("vgl.entfernen");
      weg.setAttribute("aria-label", T("vgl.entfernen") + ": " + modell.name);
      weg.addEventListener("click", () => vergleichUmschalten(schluessel(modell)));
      const kopf = el("div", "vergleich-kopf");
      const text = el("span");
      text.append(eigenname("b", modell.name), eigenname("small", eintrag.name));
      kopf.append(logo(eintrag, false), text, weg);
      zelle.append(kopf);
      kopfzeile.append(zelle);
    }
    const kopf = el("thead");
    kopf.append(kopfzeile);
    const rumpfVergleich = el("tbody");
    // Bei Zahlen gewinnt der größte Wert (Kontext, Ausgabe) oder der kleinste (Preise).
    const zahlZeile = (text, lesen, stellen, kleinstesGewinnt) => {
      const zahlen = gewaehlt.map(lesen);
      const vorhanden = zahlen.filter(wert => typeof wert === "number");
      const bester = vorhanden.length > 1 ? (kleinstesGewinnt ? Math.min(...vorhanden) : Math.max(...vorhanden)) : null;
      const zeile = el("tr");
      const titel = el("th", "", T(text));
      titel.scope = "row";
      zeile.append(titel);
      for (const wert of zahlen) zeile.append(el("td", wert === bester && new Set(vorhanden).size > 1 ? "bestwert" : "", zahlText(wert, stellen)));
      return zeile;
    };
    const textZeile = (text, lesen) => {
      const zeile = el("tr");
      const titel = el("th", "", T(text));
      titel.scope = "row";
      zeile.append(titel);
      for (const modell of gewaehlt) zeile.append(el("td", "", lesen(modell)));
      return zeile;
    };
    const jaNein = wert => T(wert ? "vgl.ja" : "vgl.nein");
    rumpfVergleich.append(
      textZeile("mod.datum", modell => datumText(modell.datum) || "–"),
      textZeile("vgl.wissen", modell => modell.wissen || "–"),
      zahlZeile("mod.kontext", modell => modell.kontext, 0, false),
      zahlZeile("mod.maxAusgabe", modell => modell.ausgabe, 0, false),
      zahlZeile("mod.preisEin", modell => preis(modell, "ein"), 4, true),
      zahlZeile("mod.preisAus", modell => preis(modell, "aus"), 4, true),
      zahlZeile("vgl.cacheLesen", modell => preis(modell, "cacheLesen"), 4, true),
      zahlZeile("vgl.cacheSchreiben", modell => preis(modell, "cacheSchreiben"), 4, true),
      textZeile("vgl.eingabe", modell => arten(modell.eingabeArten)),
      textZeile("vgl.ausgabe", modell => arten(modell.ausgabeArten)),
      textZeile("mod.denken", modell => jaNein(modell.denken)),
      textZeile("mod.werkzeuge", modell => jaNein(modell.werkzeuge)),
      textZeile("mod.offeneGewichte", modell => jaNein(modell.offeneGewichte)),
      textZeile("feld.status", modell => modell.status ? T("mod." + modell.status) : T("vgl.aktuell"))
    );
    tabelle.append(kopf, rumpfVergleich);
    const huelle = el("div", "tabellenhuelle");
    huelle.append(tabelle);
    vergleichKasten.replaceChildren(huelle, el("p", "tafel-notiz", T("vgl.bestwert")));
  }

  // Teilung einer Achse in Zehnerschritten: gleiche Abstände bedeuten gleiche Vielfache.
  function zehner(kleinster, groesster) {
    const von = Math.floor(Math.log10(kleinster)), bis = Math.ceil(Math.log10(groesster));
    return { von, bis: bis === von ? von + 1 : bis };
  }

  function punktMarke(modell, x, y, angabe) {
    const gewaehlt = vergleich.includes(schluessel(modell));
    const eintrag = nachKennung.get(modell.anbieter);
    const halb = gewaehlt ? 5.5 : 3;
    const marke = svgKnoten("rect", { x: x - halb, y: y - halb, width: halb * 2, height: halb * 2, fill: gewaehlt ? "#ffb000" : farben[eintrag.gruppe], class: "punkt" + (gewaehlt ? " gewaehlt" : "") });
    marke.append(svgKnoten("title", {}, modell.name + " · " + eintrag.name + " · " + angabe));
    marke.addEventListener("click", () => vergleichUmschalten(schluessel(modell)));
    return marke;
  }

  function diagrammZeichnen(liste) {
    diagramm.replaceChildren();
    const breite = diagramm.getBoundingClientRect().width;
    if (breite < 80) return;
    const hoehe = 330, links = 78, rechts = breite - 18, oben = 66, unten = hoehe - 44;
    const punkte = liste.filter(modell => preis(modell, "aus") > 0 && modell.kontext > 0);
    if (!punkte.length) return;
    const xTeil = zehner(Math.min(...punkte.map(m => preis(m, "aus"))), Math.max(...punkte.map(m => preis(m, "aus"))));
    const yTeil = zehner(Math.min(...punkte.map(m => m.kontext)), Math.max(...punkte.map(m => m.kontext)));
    const xLage = wert => Math.round(links + (Math.log10(wert) - xTeil.von) / (xTeil.bis - xTeil.von) * (rechts - links)) + 0.5;
    const yLage = wert => Math.round(unten - (Math.log10(wert) - yTeil.von) / (yTeil.bis - yTeil.von) * (unten - oben)) + 0.5;
    for (let stufe = xTeil.von; stufe <= xTeil.bis; stufe++) {
      const x = xLage(10 ** stufe);
      diagramm.append(svgKnoten("line", { x1: x, y1: oben, x2: x, y2: unten, class: "gitter" }), svgKnoten("text", { x, y: unten + 16, "text-anchor": "middle", class: "matt" }, zahlText(10 ** stufe, 3)));
    }
    for (let stufe = yTeil.von; stufe <= yTeil.bis; stufe++) {
      const y = yLage(10 ** stufe);
      diagramm.append(svgKnoten("line", { x1: links, y1: y, x2: rechts, y2: y, class: "gitter" }), svgKnoten("text", { x: links - 8, y: y + 3.5, "text-anchor": "end", class: "matt" }, zahlText(10 ** stufe)));
    }
    diagramm.append(svgKnoten("text", { x: (links + rechts) / 2, y: hoehe - 8, "text-anchor": "middle" }, T("dia.x")));
    // Gewählte Modelle zuletzt zeichnen, damit sie oben liegen. Ihre Namen stehen gestaffelt
    // übereinander, damit sie sich nicht überdecken, wenn die Punkte dicht beieinanderliegen.
    let stufe = 0;
    for (const modell of punkte.slice().sort((a, b) => vergleich.includes(schluessel(a)) - vergleich.includes(schluessel(b)) || preis(a, "aus") - preis(b, "aus"))) {
      const x = xLage(preis(modell, "aus")), y = yLage(modell.kontext);
      if (vergleich.includes(schluessel(modell))) {
        const nachLinks = x > rechts - 150;
        const hoch = y - 12 - stufe * 13;
        stufe++;
        diagramm.append(
          svgKnoten("line", { x1: x, y1: y, x2: x, y2: hoch + 3, stroke: "#ffb000" }),
          svgKnoten("text", { x: nachLinks ? x - 5 : x + 5, y: hoch, "text-anchor": nachLinks ? "end" : "start", class: "betont", lang: "en" }, modell.name)
        );
      }
      diagramm.append(punktMarke(modell, x, y, zahlText(preis(modell, "aus"), 4) + " USD · " + zahlText(modell.kontext) + " Token"));
    }
  }

  function zeitachseZeichnen(liste) {
    zeitachse.replaceChildren();
    const breite = zeitachse.getBoundingClientRect().width;
    if (breite < 80) return;
    const tag = 86400000;
    const ende = new Date(stand.abgerufenAm + "T00:00:00").getTime();
    const beginn = ende - 365 * tag;
    const zeit = modell => new Date(modell.datum + "T00:00:00").getTime();
    const sichtbar = liste.filter(modell => modell.datum && zeit(modell) >= beginn && zeit(modell) <= ende);
    const reihen = anbieter.filter(eintrag => sichtbar.some(modell => modell.anbieter === eintrag.id));
    const links = 104, rechts = breite - 18, oben = 22, zeile = 18;
    const hoehe = oben + reihen.length * zeile + 10;
    zeitachse.setAttribute("height", String(Math.max(hoehe, 60)));
    const xLage = wert => Math.round(links + (wert - beginn) / (ende - beginn) * (rechts - links)) + 0.5;
    const monat = new Intl.DateTimeFormat(sprachkennung(), { month: "2-digit", year: "2-digit" });
    const lauf = new Date(beginn);
    lauf.setDate(1);
    lauf.setMonth(lauf.getMonth() + 1);
    while (lauf.getTime() <= ende) {
      const x = xLage(lauf.getTime());
      zeitachse.append(svgKnoten("line", { x1: x, y1: oben - 4, x2: x, y2: hoehe - 6, class: "gitter" }), svgKnoten("text", { x: x + 3, y: 12, class: "matt" }, monat.format(lauf)));
      lauf.setMonth(lauf.getMonth() + 1);
    }
    reihen.forEach((eintrag, nummer) => {
      const y = oben + nummer * zeile + zeile / 2;
      zeitachse.append(svgKnoten("line", { x1: links, y1: Math.round(y) + 0.5, x2: rechts, y2: Math.round(y) + 0.5, class: "gitter" }), svgKnoten("text", { x: links - 8, y: y + 3.5, "text-anchor": "end", lang: "en" }, eintrag.kurz));
      for (const modell of sichtbar.filter(m => m.anbieter === eintrag.id)) zeitachse.append(punktMarke(modell, xLage(zeit(modell)), y, datumText(modell.datum)));
    });
  }

  function aktualisieren() {
    const liste = gefiltert();
    tabelleFuellen(liste);
    diagrammZeichnen(liste);
    zeitachseZeichnen(liste);
  }

  function bauen() {
    const vergleichTafel = tafel(T("vgl.titel"));
    vergleichZaehler = el("small");
    vergleichTafel.firstChild.append(vergleichZaehler);
    vergleichKasten = el("div", "tafel-rumpf");
    vergleichTafel.append(vergleichKasten);

    const diagrammTafel = tafel(T("dia.titel"), T("dia.y"));
    diagramm = svgKnoten("svg", { class: "schaubild", height: "330", role: "img", "aria-label": T("dia.titel") });
    diagrammTafel.append(diagramm, el("p", "tafel-notiz", T("dia.hinweis") + " " + T("dia.ohne")));

    const zeitTafel = tafel(T("zeit.titel"));
    zeitachse = svgKnoten("svg", { class: "schaubild", height: "60", role: "img", "aria-label": T("zeit.titel") });
    zeitTafel.append(zeitachse, el("p", "tafel-notiz", T("zeit.hinweis")));

    ziel.replaceChildren(katalogBauen(), vergleichTafel, diagrammTafel, zeitTafel);
    vergleichZeigen();
    aktualisieren();
    new ResizeObserver(() => {
      const liste = gefiltert();
      diagrammZeichnen(liste);
      zeitachseZeichnen(liste);
    }).observe(diagramm);
  }

  document.addEventListener("sprachwechsel", bauen);
  document.addEventListener("keydown", ereignis => {
    const feld = document.getElementById("suche");
    if (ereignis.key === "/" && feld && document.activeElement !== feld) {
      ereignis.preventDefault();
      feld.focus();
    }
  });
  bauen();
})();
