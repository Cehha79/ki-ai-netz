// Baut auf jeder Seite den gemeinsamen Rahmen: Seitenleiste, Kopfzeile, Fußzeile und die Übersicht des Bereichs.
// Steuert außerdem Sprache, Klang und Bewegung. Die Inhalte kommen aus js/texte.js und js/bereiche.js.
(() => {
  "use strict";

  const texte = window.KI_TEXTE || {};
  const bereiche = window.KI_BEREICHE || [];
  const Klang = window.Klang;
  const sprachen = ["de", "en", "tr"];
  const sprachkennung = { de: "de-DE", en: "en-GB", tr: "tr-TR" };
  const $ = id => document.getElementById(id);
  // Die Seite gehört zu einem der acht Bereiche oder ist eine Nebenseite ohne Platz in der Leiste.
  const nebenseiten = window.KI_NEBENSEITEN || [];
  const bereich = [...bereiche, ...nebenseiten].find(eintrag => eintrag.id === document.body.dataset.bereich) || bereiche[0];
  const versionsangabe = document.querySelector('meta[name="site-version"]');
  const seitenversion = versionsangabe ? versionsangabe.content : "";

  // Einstellungen liegen im Browserspeicher. Ist er gesperrt, bleibt die Seite trotzdem bedienbar.
  function lesen(schluessel) {
    try {
      return localStorage.getItem(schluessel);
    } catch (_) {
      return null;
    }
  }

  function merken(schluessel, wert) {
    try {
      localStorage.setItem(schluessel, wert);
    } catch (_) {
      return;
    }
  }

  // Die Sprache kommt aus der Adresse (?lang=tr), sonst aus dem Speicher, sonst ist sie Deutsch.
  const adressSprache = new URLSearchParams(window.location.search).get("lang");
  const gespeicherteSprache = lesen("kiatlas-lang");
  const gespeicherteBewegung = lesen("kiatlas-bewegung");
  let sprache = sprachen.includes(adressSprache) ? adressSprache : sprachen.includes(gespeicherteSprache) ? gespeicherteSprache : "de";
  if (sprachen.includes(adressSprache)) merken("kiatlas-lang", sprache);
  let bewegung = gespeicherteBewegung === "an" || (gespeicherteBewegung !== "aus" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // T liest einen Text der Oberfläche nach seinem Schlüssel, L liest ein Feld mit den drei Sprachen.
  const T = schluessel => {
    const eintrag = texte[schluessel];
    return eintrag ? eintrag[sprache] || eintrag.de : schluessel;
  };
  const L = wert => {
    if (typeof wert === "string") return wert;
    return wert ? wert[sprache] || wert.de || "" : "";
  };

  // Baut ein Element mit Klasse und Text. Text wird nie als HTML gelesen.
  function el(marke, klasse, text) {
    const knoten = document.createElement(marke);
    if (klasse) knoten.className = klasse;
    if (text !== undefined) knoten.textContent = text;
    return knoten;
  }

  // Baut eine Tafel: Kasten mit Kopfzeile in eckigen Klammern und optionalem Zusatz rechts.
  function tafel(titel, zusatz) {
    const kasten = el("section", "tafel");
    const kopf = el("h2", "", "[ " + titel + " ]");
    if (zusatz) kopf.append(el("small", "", zusatz));
    kasten.append(kopf);
    return kasten;
  }

  function fortschritt(bausteine) {
    const fertig = bausteine.filter(baustein => baustein.stand === "fertig").length;
    return { fertig, gesamt: bausteine.length, text: fertig + " " + T("stand.von") + " " + bausteine.length + " " + T("stand.fertig") };
  }

  function leisteBauen() {
    const leiste = $("leiste");
    leiste.setAttribute("aria-label", T("nav.seitennavigation"));
    const marke = el("a", "marke");
    marke.href = "index.html";
    marke.append(el("b", "", "KI/AI-NETZ"), el("small", "", T("marke.unterzeile")));
    const nav = el("nav");
    nav.setAttribute("aria-label", T("nav.bereiche"));
    for (const eintrag of bereiche) {
      const link = el("a");
      link.href = eintrag.datei;
      link.title = L(eintrag.name);
      if (eintrag === bereich) link.setAttribute("aria-current", "page");
      link.append(el("span", "", eintrag.nr), el("b", "", L(eintrag.name)));
      link.addEventListener("mouseenter", () => Klang.ton(660, 0.2, 0.04));
      nav.append(link);
    }
    leiste.replaceChildren(marke, nav, el("div", "leiste-fuss", T("marke.projekt")));
  }

  function klangKnopfBeschriften(knopf) {
    knopf.textContent = Klang.istAn() ? T("kopf.klangAn") : T("kopf.klangAus");
    knopf.setAttribute("aria-pressed", String(Klang.istAn()));
  }

  function bewegungKnopfBeschriften(knopf) {
    knopf.textContent = bewegung ? T("kopf.bewegungAn") : T("kopf.bewegungAus");
    knopf.setAttribute("aria-pressed", String(bewegung));
  }

  function kopfBauen() {
    const pfad = el("div", "pfad");
    pfad.append(document.createTextNode("KI/AI-NETZ / "), el("b", "", L(bereich.name)));
    const uhr = el("div", "uhr");
    uhr.id = "uhr";
    uhr.setAttribute("aria-hidden", "true");

    const sprachwahl = el("div", "sprachwahl");
    sprachwahl.setAttribute("role", "group");
    sprachwahl.setAttribute("aria-label", T("kopf.sprache"));
    for (const kennung of sprachen) {
      const knopf = el("button", "", kennung.toUpperCase());
      knopf.type = "button";
      knopf.lang = kennung;
      knopf.setAttribute("aria-pressed", String(kennung === sprache));
      knopf.addEventListener("click", () => spracheSetzen(kennung));
      sprachwahl.append(knopf);
    }

    const klangKnopf = el("button");
    klangKnopf.type = "button";
    klangKnopfBeschriften(klangKnopf);
    klangKnopf.addEventListener("click", () => {
      Klang.schalten();
      klangKnopfBeschriften(klangKnopf);
      Klang.doppelton();
    });

    const bewegungKnopf = el("button");
    bewegungKnopf.type = "button";
    bewegungKnopfBeschriften(bewegungKnopf);
    bewegungKnopf.addEventListener("click", () => {
      bewegungSetzen(!bewegung);
      bewegungKnopfBeschriften(bewegungKnopf);
      Klang.ton(bewegung ? 990 : 660, 0.4);
    });

    const schalter = el("div", "schalter");
    schalter.append(sprachwahl, klangKnopf, bewegungKnopf);
    $("kopf").replaceChildren(pfad, uhr, schalter);
    uhrStellen();
  }

  function uhrStellen() {
    const uhr = $("uhr");
    if (!uhr) return;
    uhr.textContent = new Intl.DateTimeFormat(sprachkennung[sprache], {
      day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
    }).format(new Date());
  }

  function titelBauen() {
    document.documentElement.lang = sprache;
    document.title = (bereich.id === "start" ? "" : L(bereich.name) + " · ") + "KI/AI-Netz";
    const zeiger = el("i", "zeiger");
    zeiger.setAttribute("aria-hidden", "true");
    $("seitentitel").replaceChildren(document.createTextNode(L(bereich.titel) + " "), el("span", "", L(bereich.akzent)), zeiger);
    $("seitentext").textContent = L(bereich.text);
  }

  // Übersicht: auf der Startseite alle acht Bereiche als Verweise, auf jeder Seite die Bausteine des Bereichs.
  function uebersichtBauen() {
    // Nebenseiten haben keine Bausteine und deshalb keine Übersicht.
    if (!bereich.bausteine.length) {
      $("uebersicht").replaceChildren();
      return;
    }
    const teile = [];
    if (bereich.id === "start") {
      const alleBausteine = bereiche.flatMap(eintrag => eintrag.bausteine);
      const module = tafel(T("tafel.module"), T("tafel.bausteine") + ": " + fortschritt(alleBausteine).text);
      const raster = el("div", "zellen");
      bereiche.forEach((eintrag, nummer) => {
        const stand = fortschritt(eintrag.bausteine);
        const zelle = el("a", "zelle");
        zelle.href = eintrag.datei;
        zelle.style.setProperty("--nummer", nummer);
        const kopf = el("b");
        kopf.append(el("span", "", eintrag.nr), document.createTextNode(L(eintrag.name)));
        zelle.append(kopf, el("small", "", L(eintrag.kurz)), el("em", stand.fertig === stand.gesamt ? "fertig" : "", stand.text));
        zelle.addEventListener("mouseenter", () => Klang.ton(660, 0.2, 0.04));
        raster.append(zelle);
      });
      module.append(raster);
      teile.push(module);
    }

    const stand = fortschritt(bereich.bausteine);
    const bausteine = tafel(T("tafel.bausteine"), stand.text);
    const raster = el("div", "zellen");
    bereich.bausteine.forEach((baustein, nummer) => {
      const zelle = el("div", "zelle");
      zelle.style.setProperty("--nummer", nummer);
      const kopf = el("b");
      kopf.append(el("span", "", bereich.nr + "." + (nummer + 1)), document.createTextNode(L(baustein.name)));
      const fertig = baustein.stand === "fertig";
      zelle.append(kopf, el("small", "", L(baustein.text)), el("em", fertig ? "fertig" : "", (fertig ? "■ " : "□ ") + T(fertig ? "stand.fertig" : "stand.geplant")));
      raster.append(zelle);
    });
    bausteine.append(raster);
    teile.push(bausteine);
    $("uebersicht").replaceChildren(...teile);
  }

  function fussBauen() {
    const angabe = el("span", "", "KI/AI-Netz · " + T("fuss.version") + " " + seitenversion);
    const nav = el("nav");
    nav.setAttribute("aria-label", T("fuss.verweise"));
    const verweise = [
      ["fuss.datenschutz", "datenschutz.html"],
      ["fuss.impressum", "https://mika-tec.com/impressum.html"],
      ["fuss.kontakt", "https://mika-tec.com/kontakt.html"],
      ["fuss.feedback", "mailto:info@mika-tec.com?subject=Feedback%20zu%20KI%2FAI%20-%20Netz"],
      ["fuss.spenden", "https://paypal.me/mikatec"],
      ["", "https://www.mika-tec.com"]
    ];
    for (const [schluessel, adresse] of verweise) {
      const link = el("a", "", schluessel ? T(schluessel) : "MikaTec");
      link.href = adresse;
      // Der Firmenname bleibt auch in türkischer Großschreibung unverändert.
      if (!schluessel) link.lang = "de";
      // Nur Verweise auf fremde Websites öffnen ein neues Fenster.
      if (adresse.startsWith("https://")) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      nav.append(link);
    }
    $("fuss").replaceChildren(angabe, nav);
  }

  const sprung = el("a", "sprung");
  sprung.href = "#inhalt";
  document.body.prepend(sprung);

  function allesBauen() {
    sprung.textContent = T("nav.sprung");
    leisteBauen();
    kopfBauen();
    titelBauen();
    uebersichtBauen();
    fussBauen();
  }

  function spracheSetzen(kennung) {
    if (!sprachen.includes(kennung) || kennung === sprache) return;
    sprache = kennung;
    merken("kiatlas-lang", sprache);
    allesBauen();
    const knopf = document.querySelector('.sprachwahl button[lang="' + sprache + '"]');
    if (knopf) knopf.focus();
    Klang.ton(880, 0.4);
    document.dispatchEvent(new CustomEvent("sprachwechsel", { detail: { sprache } }));
  }

  function bewegungSetzen(wert) {
    bewegung = wert;
    merken("kiatlas-bewegung", bewegung ? "an" : "aus");
    document.documentElement.classList.toggle("ruhig", !bewegung);
    document.dispatchEvent(new CustomEvent("bewegungswechsel", { detail: { bewegung } }));
  }

  // Schnittstelle für die Skripte der einzelnen Seiten.
  window.Rahmen = {
    T,
    L,
    el,
    tafel,
    bereich,
    sprache: () => sprache,
    bewegung: () => bewegung
  };

  window.addEventListener("error", ereignis => {
    document.documentElement.setAttribute("data-fehler", ereignis.message || "Fehler");
  });

  document.documentElement.classList.toggle("ruhig", !bewegung);
  allesBauen();
  setInterval(uhrStellen, 1000);

  // Besucherzähler GoatCounter: ohne Cookies, nur auf der öffentlichen Website, nie in lokalen Vorschauen.
  const zaehlerName = "kiainetz";
  const lokal = ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);
  if (["http:", "https:"].includes(window.location.protocol) && !lokal) {
    const zaehler = document.createElement("script");
    zaehler.async = true;
    zaehler.src = "https://gc.zgo.at/count.js";
    zaehler.setAttribute("data-goatcounter", "https://" + zaehlerName + ".goatcounter.com/count");
    document.body.appendChild(zaehler);
  }
})();
