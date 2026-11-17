// Startseite: Suchzeile, Meldungsband, Schichtenplan aller Anbieter mit Leitungen, Auswahl und Lage.
// Braucht js/rahmen.js, js/hilfen.js, js/finanzen.js und js/neuigkeiten.js sowie daten/anbieter.js,
// daten/beziehungen.js, daten/modelle.js und daten/finanzen.js.
(() => {
  "use strict";

  const { T, L, el, tafel } = window.Rahmen;
  const Klang = window.Klang;
  const anbieter = window.KI_ANBIETER || [];
  const gruppen = window.KI_GRUPPEN || [];
  const laender = window.KI_LAENDER || {};
  const beziehungen = window.KI_BEZIEHUNGEN || [];
  const modelle = window.KI_MODELLE || [];
  const datenstand = window.KI_DATENSTAND || {};
  const ziel = document.getElementById("start");
  if (!ziel || !anbieter.length) return;

  const spalten = 9;
  const { logo, verweis, hostname, datumText, eigenname, farben, linien, offeneFelder, strecken, sprachkennung } = window.Hilfen;

  const nachKennung = new Map(anbieter.map(eintrag => [eintrag.id, eintrag]));
  const beziehungenVon = id => beziehungen.filter(b => b.von === id || b.nach === id);
  const svgKnoten = (name, werte) => {
    const knoten = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (const [schluessel, wert] of Object.entries(werte)) knoten.setAttribute(schluessel, wert);
    return knoten;
  };
  // Vorauswahl: der Anbieter aus der Adresse (#anthropic), sonst der mit den meisten Leitungen.
  const ausAdresse = decodeURIComponent(window.location.hash.slice(1));
  let aktiv = nachKennung.has(ausAdresse) ? ausAdresse : anbieter.reduce((best, eintrag) => beziehungenVon(eintrag.id).length > beziehungenVon(best.id).length ? eintrag : best).id;
  let alle = false;
  let frage = "";
  let zellen = new Map();
  let zeilenAnfang = [];
  let spaltenKoepfe = [];
  let plan = null;
  let leitungen = null;
  let planZeile = null;
  let auswahlKasten = null;
  let auswahlKennung = null;

  // Verteilt die Anbieter einer Gruppe gleichmäßig auf so viele Zeilen, wie nötig sind.
  function zeilenEinerGruppe(mitglieder) {
    const anzahl = Math.ceil(mitglieder.length / spalten);
    const jeZeile = Math.ceil(mitglieder.length / anzahl);
    const zeilen = [];
    for (let beginn = 0; beginn < mitglieder.length; beginn += jeZeile) zeilen.push(mitglieder.slice(beginn, beginn + jeZeile));
    return zeilen;
  }

  function planBauen() {
    const kasten = tafel(T("start.plan"));
    const kopf = kasten.firstChild;
    planZeile = el("small");
    const umschalter = el("span", "umschalter");
    umschalter.setAttribute("role", "group");
    umschalter.setAttribute("aria-label", T("start.leitungenZeigen"));
    for (const [wert, schluessel] of [[false, "start.auswahl"], [true, "start.alle"]]) {
      const knopf = el("button", "", T(schluessel));
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", String(alle === wert));
      knopf.addEventListener("click", () => {
        alle = wert;
        for (const anderer of umschalter.children) anderer.setAttribute("aria-pressed", String(anderer === knopf));
        Klang.ton(alle ? 990 : 660, 0.4);
        planZeileSetzen();
        leitungenZeichnen();
      });
      umschalter.append(knopf);
    }
    kopf.append(planZeile, umschalter);

    plan = el("div", "plan");
    zellen = new Map();
    zeilenAnfang = [];
    spaltenKoepfe = [];
    plan.append(el("div"));
    for (let spalte = 1; spalte <= spalten; spalte++) {
      const spaltenkopf = el("div", "spaltenkopf", String(spalte).padStart(2, "0"));
      spaltenKoepfe.push(spaltenkopf);
      plan.append(spaltenkopf);
    }
    let zeilennummer = 0;
    let folge = 0;
    gruppen.forEach((gruppe, gruppennummer) => {
      const mitglieder = anbieter.filter(eintrag => eintrag.gruppe === gruppe.id);
      const zeilen = zeilenEinerGruppe(mitglieder);
      const schild = el("div", "ebene");
      schild.style.gridRow = "span " + zeilen.length;
      schild.title = L(gruppe.text);
      const kopfzeile = el("b", "", gruppe.nr);
      kopfzeile.append(el("em", "", mitglieder.length + " " + T("start.anbieterKurz")));
      schild.append(kopfzeile, el("span", "", L(gruppe.name)));
      plan.append(schild);
      let laufend = 0;
      for (const zeile of zeilen) {
        zeilennummer++;
        for (let spalte = 1; spalte <= spalten; spalte++) {
          const eintrag = zeile[spalte - 1];
          let feld;
          if (!eintrag) {
            feld = el("div", "frei");
          } else {
            laufend++;
            const kennung = (gruppennummer + 1) + "-" + String(laufend).padStart(2, "0");
            feld = el("button", "platz");
            feld.type = "button";
            feld.title = eintrag.name + " · " + eintrag.spitzenmodell.name;
            feld.style.setProperty("--f", farben[gruppe.id]);
            feld.style.setProperty("--nummer", folge++);
            const kopfteil = el("span", "kennung");
            const zahl = beziehungenVon(eintrag.id).length;
            kopfteil.append(logo(eintrag, false), document.createTextNode(kennung), el("em", "", zahl ? "V" + zahl : ""));
            feld.append(kopfteil, eigenname("b", eintrag.kurz), el("small", "", eintrag.spitzenmodell.name));
            feld.addEventListener("click", () => waehlen(eintrag.id, true));
            feld.addEventListener("keydown", ereignis => pfeiltaste(ereignis, eintrag.id));
            zellen.set(eintrag.id, { knopf: feld, eintrag, zeile: zeilennummer, spalte, kennung });
          }
          if (spalte === 1) zeilenAnfang.push(feld);
          plan.append(feld);
        }
      }
    });
    leitungen = svgKnoten("svg", { id: "leitungen", "aria-hidden": "true" });
    plan.append(leitungen);
    const huelle = el("div", "planhuelle");
    huelle.append(plan);

    const erklaerung = el("div", "zeichenerklaerung");
    for (const gruppe of gruppen) {
      const stueck = el("span");
      const licht = el("i");
      licht.style.setProperty("--f", farben[gruppe.id]);
      stueck.append(licht, document.createTextNode(L(gruppe.name)));
      erklaerung.append(stueck);
    }
    for (const art of Object.keys(linien)) {
      const stueck = el("span");
      const strich = el("u");
      strich.style.setProperty("--f", linien[art].farbe);
      strich.style.setProperty("--s", linien[art].rand);
      stueck.append(strich, document.createTextNode(T("beziehung." + art)));
      erklaerung.append(stueck);
    }
    erklaerung.append(el("span", "", T("start.planHinweis")));
    kasten.append(huelle, erklaerung);
    new ResizeObserver(leitungenZeichnen).observe(plan);
    return kasten;
  }

  function pfeiltaste(ereignis, id) {
    const richtung = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] }[ereignis.key];
    if (!richtung) return;
    const von = zellen.get(id);
    const kandidaten = [...zellen.values()].filter(z => z.zeile === von.zeile + richtung[0]);
    if (!kandidaten.length) return;
    const zielSpalte = von.spalte + richtung[1];
    const naechste = kandidaten.reduce((best, z) => Math.abs(z.spalte - zielSpalte) < Math.abs(best.spalte - zielSpalte) ? z : best);
    if (naechste === von) return;
    ereignis.preventDefault();
    naechste.knopf.focus();
    waehlen(naechste.eintrag.id, true);
  }

  // Legt die Leitungen rechtwinklig durch die Gassen zwischen den Zellen.
  function leitungenZeichnen() {
    if (!plan || !leitungen) return;
    leitungen.replaceChildren();
    const rand = plan.getBoundingClientRect();
    if (!rand.width) return;
    const feld = knoten => {
      const r = knoten.getBoundingClientRect();
      return { l: r.left - rand.left, r: r.right - rand.left, o: r.top - rand.top, u: r.bottom - rand.top };
    };
    const zeileFeld = zeilenAnfang.map(feld);
    const spalteFeld = spaltenKoepfe.map(feld);
    const letzte = zeileFeld.length;
    // Die Breite der Gassen legt die Gestaltung fest; hier wird sie nur gelesen.
    const masse = window.getComputedStyle(plan);
    const rinne = parseFloat(masse.rowGap) || 18;
    const rinneHoch = parseFloat(masse.columnGap) || 14;
    // Waagerechte Gasse g liegt über Zeile g; Gasse letzte+1 liegt unter der letzten Zeile.
    const gasseQuer = g => g === 1 ? { a: zeileFeld[0].o - rinne, b: zeileFeld[0].o } : g === letzte + 1 ? { a: zeileFeld[letzte - 1].u, b: zeileFeld[letzte - 1].u + rinne } : { a: zeileFeld[g - 2].u, b: zeileFeld[g - 1].o };
    // Senkrechte Gasse s liegt rechts von Spalte s.
    const gasseHoch = s => ({ a: spalteFeld[s - 1].r, b: s < spalten ? spalteFeld[s].l : spalteFeld[s - 1].r + rinneHoch });

    const gezeigt = (alle ? beziehungen : beziehungenVon(aktiv)).map(b => {
      const von = zellen.get(b.von), nach = zellen.get(b.nach);
      if (!von || !nach) return null;
      const weg = { b, von, nach };
      if (von.zeile === nach.zeile) Object.assign(weg, { vonKante: "o", nachKante: "o", quer1: von.zeile });
      else if (nach.zeile < von.zeile) {
        Object.assign(weg, { vonKante: "o", nachKante: "u", quer1: von.zeile });
        if (von.zeile - nach.zeile > 1) Object.assign(weg, { hoch: von.spalte, quer2: nach.zeile + 1 });
      } else {
        Object.assign(weg, { vonKante: "u", nachKante: "o", quer1: von.zeile + 1 });
        if (nach.zeile - von.zeile > 1) Object.assign(weg, { hoch: von.spalte, quer2: nach.zeile });
      }
      return weg;
    }).filter(Boolean).sort((a, b) => a.von.spalte - b.von.spalte || a.von.zeile - b.von.zeile);

    // Jede Leitung bekommt in jeder Gasse und an jeder Zellkante einen eigenen Platz.
    const plaetze = new Map();
    const merken = (schluessel, weg, name) => {
      if (!plaetze.has(schluessel)) plaetze.set(schluessel, []);
      plaetze.get(schluessel).push([weg, name]);
    };
    for (const weg of gezeigt) {
      merken("k|" + weg.b.von + "|" + weg.vonKante, weg, "vonX");
      merken("k|" + weg.b.nach + "|" + weg.nachKante, weg, "nachX");
      merken("q|" + weg.quer1, weg, "y1");
      if (weg.hoch) {
        merken("h|" + weg.hoch, weg, "hochX");
        merken("q|" + weg.quer2, weg, "y2");
      }
    }
    for (const [schluessel, liste] of plaetze) {
      const [art, wert] = schluessel.split("|");
      const bereich = art === "k" ? feld(zellen.get(wert).knopf) : null;
      liste.forEach(([weg, name], nummer) => {
        const anteil = (nummer + 1) / (liste.length + 1);
        if (art === "k") weg[name] = bereich.l + (bereich.r - bereich.l) * anteil;
        else {
          const gasse = art === "q" ? gasseQuer(Number(wert)) : gasseHoch(Number(wert));
          weg[name] = gasse.a + (gasse.b - gasse.a) * anteil;
        }
      });
    }

    const scharf = wert => Math.round(wert) + 0.5;
    for (const weg of gezeigt) {
      const vonFeld = feld(weg.von.knopf), nachFeld = feld(weg.nach.knopf);
      const vonY = weg.vonKante === "o" ? vonFeld.o : vonFeld.u;
      const nachY = weg.nachKante === "o" ? nachFeld.o : nachFeld.u;
      const punkte = weg.hoch
        ? [[weg.vonX, vonY], [weg.vonX, weg.y1], [weg.hochX, weg.y1], [weg.hochX, weg.y2], [weg.nachX, weg.y2], [weg.nachX, nachY]]
        : [[weg.vonX, vonY], [weg.vonX, weg.y1], [weg.nachX, weg.y1], [weg.nachX, nachY]];
      const pfad = punkte.map(([x, y], i) => (i ? "L" : "M") + scharf(x) + " " + scharf(y)).join(" ");
      const stil = linien[weg.b.art];
      const betrifft = weg.b.von === aktiv || weg.b.nach === aktiv;
      const gruppe = svgKnoten("g", { opacity: betrifft ? "1" : "0.38" });
      const strich = svgKnoten("path", { d: pfad, stroke: stil.farbe });
      if (stil.strich) strich.setAttribute("stroke-dasharray", stil.strich);
      gruppe.append(strich);
      if (betrifft) gruppe.append(svgKnoten("path", { d: pfad, class: "fluss" }));
      const x = scharf(weg.nachX), y = scharf(nachY), weite = weg.nachKante === "o" ? -6 : 6;
      gruppe.append(svgKnoten("polygon", { points: (x - 4) + "," + (y + weite) + " " + (x + 4) + "," + (y + weite) + " " + x + "," + y, fill: stil.farbe }));
      leitungen.append(gruppe);
    }
  }

  function planZeileSetzen() {
    if (!planZeile) return;
    const treffer = frage ? T("start.treffer") + ": " + [...zellen.values()].filter(z => !z.knopf.classList.contains("gedimmt")).length + " · " : "";
    planZeile.replaceChildren(
      document.createTextNode(treffer + T("start.gewaehlt") + ": "),
      eigenname("span", nachKennung.get(aktiv).name),
      document.createTextNode(" · " + T("start.leitungen") + ": " + (alle ? beziehungen.length : beziehungenVon(aktiv).length))
    );
  }

  function suchen() {
    const gesucht = frage.toLocaleLowerCase(sprachkennung());
    for (const z of zellen.values()) {
      const e = z.eintrag;
      const land = laender[e.land] || {};
      const gruppe = gruppen.find(g => g.id === e.gruppe) || { name: {} };
      const text = [e.name, e.kurz, e.produkt, e.spitzenmodell.name, land.de, land.en, land.tr, gruppe.name.de, gruppe.name.en, gruppe.name.tr].join(" ").toLocaleLowerCase(sprachkennung());
      z.knopf.classList.toggle("gedimmt", Boolean(gesucht) && !text.includes(gesucht));
    }
    planZeileSetzen();
  }

  function werkzeugzeileBauen() {
    const zeile = el("div", "werkzeugzeile");
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
      suchen();
    });
    eingabe.addEventListener("keydown", ereignis => {
      if (ereignis.key === "Enter") {
        const erste = [...zellen.values()].find(z => !z.knopf.classList.contains("gedimmt"));
        if (erste) {
          waehlen(erste.eintrag.id, true);
          erste.knopf.focus();
        }
      }
      if (ereignis.key === "Escape") {
        eingabe.value = "";
        frage = "";
        suchen();
      }
    });
    befehl.append(el("span", "", "> " + T("start.suche")), eingabe, el("kbd", "", "/"));
    const stand = el("div", "standzeile", T("start.stand") + " ");
    stand.append(el("b", "", datumText(datenstand.anbieter)));
    zeile.append(befehl, stand);
    return zeile;
  }

  function auswahlBauen() {
    const kasten = tafel(T("start.auswahl"));
    kasten.setAttribute("aria-live", "polite");
    auswahlKennung = el("small");
    kasten.firstChild.append(auswahlKennung);
    auswahlKasten = el("div", "rolle auswahl");
    kasten.append(auswahlKasten);
    return kasten;
  }

  function auswahlZeigen() {
    const stelle = zellen.get(aktiv);
    const eintrag = stelle.eintrag;
    const eigene = beziehungenVon(aktiv);
    const gruppe = gruppen.find(g => g.id === eintrag.gruppe);
    auswahlKennung.textContent = T("start.zelle") + " " + stelle.kennung;

    const kopf = el("div", "auswahl-kopf");
    const titel = el("div");
    const zumProfil = el("a", "profil-verweis", T("profil.oeffnen") + " →");
    zumProfil.href = "anbieter.html#" + eintrag.id;
    titel.append(eigenname("strong", eintrag.name), el("p", "", L(eintrag.portraet)), zumProfil);
    kopf.append(logo(eintrag, true), titel);
    const teile = [kopf];
    if (eintrag.hinweis) teile.push(el("p", "auswahl-hinweis", L(eintrag.hinweis)));

    const werte = el("dl", "werte");
    const modell = eintrag.spitzenmodell;
    const modellText = modell.name + " · " + T("art." + modell.art) + (modell.datum ? " · " + datumText(modell.datum) + (modell.datumBelegt ? "" : " (" + T("start.datumUnsicher") + ")") : "");
    const zeilen = [
      ["feld.gruppe", L(gruppe.name)],
      ["feld.land", L(laender[eintrag.land])],
      ["feld.sitz", L(eintrag.sitz)],
      ["feld.gruendung", eintrag.gruendung ? String(eintrag.gruendung) : "–"],
      ["feld.produkt", eintrag.produkt || "–"],
      ["feld.spitzenmodell", modellText]
    ];
    for (const [schluessel, wert] of zeilen) {
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

    teile.push(eigene.length ? strecken(eigene, nachKennung, false) : el("p", "auswahl-offen", T("start.keineLeitung")));
    auswahlKasten.replaceChildren(...teile);
    auswahlKasten.scrollTop = 0;
  }

  function waehlen(id, mitTon) {
    aktiv = id;
    const verbunden = new Set();
    for (const b of beziehungenVon(id)) {
      verbunden.add(b.von);
      verbunden.add(b.nach);
    }
    for (const [schluessel, z] of zellen) {
      z.knopf.setAttribute("aria-pressed", String(schluessel === id));
      z.knopf.classList.toggle("nachbar", schluessel !== id && verbunden.has(schluessel));
    }
    auswahlZeigen();
    planZeileSetzen();
    leitungenZeichnen();
    if (mitTon) {
      Klang.doppelton();
      try {
        window.history.replaceState(null, "", "#" + id);
      } catch (_) {
        return;
      }
    }
  }

  function balken(titel, zeilen) {
    const block = el("div");
    block.append(el("h3", "", titel));
    const liste = el("div", "balken");
    const groesster = Math.max(...zeilen.map(zeile => zeile[1]));
    for (const [name, wert, farbe] of zeilen) {
      const bahn = el("i");
      const fuellung = el("u");
      if (farbe) fuellung.style.setProperty("--f", farbe);
      const breite = (wert / groesster * 100) + "%";
      fuellung.style.setProperty("--w", window.Rahmen.bewegung() ? "0%" : breite);
      bahn.append(fuellung);
      const schild = el("span", "", name);
      schild.title = name;
      liste.append(schild, bahn, el("em", "", String(wert)));
      if (window.Rahmen.bewegung()) requestAnimationFrame(() => requestAnimationFrame(() => fuellung.style.setProperty("--w", breite)));
    }
    block.append(liste);
    return block;
  }

  function lageBauen() {
    const kasten = tafel(T("start.lage"), T("start.stand") + " " + datumText(datenstand.anbieter));
    const jeLand = new Map();
    for (const eintrag of anbieter) jeLand.set(eintrag.land, (jeLand.get(eintrag.land) || 0) + 1);
    const zahlen = el("div", "zahlen");
    for (const [wert, schluessel] of [[anbieter.length, "zahl.anbieter"], [gruppen.length, "zahl.gruppen"], [beziehungen.length, "zahl.leitungen"], [jeLand.size, "zahl.laender"], [modelle.length, "zahl.modelle"]]) {
      const feld = el("div");
      feld.append(el("b", "", String(wert)), el("span", "", T(schluessel)));
      zahlen.append(feld);
    }
    const paar = el("div", "balkenpaar");
    paar.append(
      balken(T("start.nachGruppe"), gruppen.map(gruppe => [L(gruppe.name), anbieter.filter(eintrag => eintrag.gruppe === gruppe.id).length, farben[gruppe.id]])),
      balken(T("start.nachLand"), [...jeLand].sort((a, b) => b[1] - a[1]).map(([land, zahl]) => [L(laender[land]), zahl, ""]))
    );
    const bild = el("div", "lagebild");
    bild.append(zahlen, paar);
    kasten.append(bild);
    return kasten;
  }

  // Meldungsband: die jüngsten Meldungen als laufende Zeile. Meldungen, die sich nur im Geldgeber
  // unterscheiden, stehen zusammen in einem Eintrag.
  function bandBauen() {
    const Meldungen = window.Meldungen;
    if (!Meldungen) return null;
    const eintraege = [];
    const gruppen = new Map();
    for (const meldung of Meldungen.liste()) {
      if (meldung.firmen.length !== 2) {
        eintraege.push({ meldung, firma: nachKennung.get(meldung.firmen[0]).kurz, text: meldung.text });
        continue;
      }
      const angabe = meldung.text.slice(meldung.text.indexOf(": ") + 2);
      const schluessel = [meldung.datum, meldung.art, meldung.firmen[1], angabe].join("|");
      if (!gruppen.has(schluessel)) {
        const eintrag = { meldung, von: [], nach: nachKennung.get(meldung.firmen[1]).kurz, angabe };
        gruppen.set(schluessel, eintrag);
        eintraege.push(eintrag);
      }
      gruppen.get(schluessel).von.push(nachKennung.get(meldung.firmen[0]).kurz);
    }
    const juengste = eintraege.slice(0, 10);
    const band = el("div", "band");
    band.setAttribute("role", "region");
    band.setAttribute("aria-label", T("band.titel"));
    const lauf = el("div", "band-lauf");
    lauf.style.setProperty("--dauer", (juengste.length * 7) + "s");
    // Die Zeile steht zweimal hintereinander, damit der Lauf ohne Sprung von vorn beginnt.
    for (const doppel of [false, true]) {
      for (const eintrag of juengste) {
        const link = el("a", "band-meldung" + (doppel ? " band-doppel" : ""));
        link.href = "neuigkeiten.html#meldungen";
        if (doppel) {
          link.setAttribute("aria-hidden", "true");
          link.tabIndex = -1;
        }
        const marke = el("i");
        marke.style.setProperty("--f", Meldungen.farben[eintrag.meldung.art]);
        link.append(el("time", "", datumText(eintrag.meldung.datum)), marke, eigenname("b", eintrag.von ? eintrag.von.join(", ") + " → " + eintrag.nach : eintrag.firma), el("span", "", eintrag.von ? eintrag.angabe : eintrag.text));
        lauf.append(link);
      }
    }
    const fenster = el("div", "band-fenster");
    fenster.append(lauf);
    const alleMeldungen = el("a", "band-alle", T("band.alle") + " →");
    alleMeldungen.href = "neuigkeiten.html#meldungen";
    band.append(el("span", "band-kopf", T("band.titel")), fenster, alleMeldungen);
    return band;
  }

  function bauen() {
    const reihe = el("div", "reihe");
    const planKasten = planBauen();
    reihe.append(auswahlBauen(), lageBauen());
    ziel.replaceChildren(...[werkzeugzeileBauen(), bandBauen(), planKasten, reihe].filter(Boolean));
    suchen();
    waehlen(aktiv, false);
  }

  document.addEventListener("sprachwechsel", bauen);
  document.addEventListener("keydown", ereignis => {
    const feld = document.getElementById("suche");
    if (ereignis.key === "/" && feld && document.activeElement !== feld) {
      ereignis.preventDefault();
      feld.focus();
    }
  });
  if (/[?&]alle\b/.test(window.location.search)) alle = true;
  bauen();
})();
