// Hilfen für alle Seiten, die Anbieterdaten zeigen: Logos, Verweise, Datum und Zahlen in der
// gewählten Sprache, Farben der Gruppen und Leitungen, die Tabelle der Verbindungen sowie
// Tabelle, Quellenliste und Schrittliste für die Bausteine der Wissensseite.
// Braucht js/rahmen.js.
window.Hilfen = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const logoPfad = "assets/anbieter/";
  const kennungen = { de: "de-DE", en: "en-GB", tr: "tr-TR" };
  const sprachkennung = () => kennungen[window.Rahmen.sprache()];

  const farben = { spitze: "#ffb000", weitere: "#d8dbc9", labore: "#ff5a3c", medien: "#7fb4d6", chips: "#86f58f" };
  const linien = {
    geld: { farbe: "#ffb000", strich: "", rand: "solid" },
    rechner: { farbe: "#7fb4d6", strich: "6 4", rand: "dashed" },
    uebernahme: { farbe: "#ff5a3c", strich: "2 4", rand: "dotted" }
  };
  // Felder aus „offen“ in den Daten und der Text, unter dem sie angezeigt werden.
  const feldTexte = {
    gruendung: "feld.gruendung", sitz: "feld.sitz", land: "feld.land", produkt: "feld.produkt", status: "feld.status", statusText: "feld.status",
    "spitzenmodell.name": "feld.spitzenmodell", "spitzenmodell.datum": "feld.modellDatum", "spitzenmodell.art": "feld.modellArt", "spitzenmodell.quelleUrl": "feld.modellQuelle"
  };

  // Macht aus 2026-11-09 ein Datum in der Schreibweise der gewählten Sprache.
  function datumText(wert) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(wert || "")) return "";
    const [jahr, monat, tag] = wert.split("-").map(Number);
    return new Intl.DateTimeFormat(sprachkennung(), { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(jahr, monat - 1, tag));
  }

  // Schreibt eine Zahl mit den Trennzeichen der gewählten Sprache; fehlt sie, steht ein Strich.
  function zahlText(wert, nachkommastellen) {
    if (typeof wert !== "number") return "–";
    return new Intl.NumberFormat(sprachkennung(), { maximumFractionDigits: nachkommastellen || 0 }).format(wert);
  }

  function hostname(adresse) {
    try {
      return new URL(adresse).hostname.replace(/^www\./, "");
    } catch (_) {
      return adresse;
    }
  }

  // Firmen- und Modellnamen bleiben in jeder Sprache gleich geschrieben. Ohne diese Kennzeichnung
  // würde die türkische Großschreibung aus „Anthropic“ ein „ANTHROPİC“ machen.
  function eigenname(marke, text) {
    const knoten = el(marke, "", text);
    knoten.lang = "en";
    return knoten;
  }

  // Verweis auf eine fremde Website; öffnet in einem neuen Fenster.
  function verweis(adresse, text) {
    const link = el("a", "", text);
    link.href = adresse;
    link.target = "_blank";
    link.rel = "noopener";
    return link;
  }

  function logo(eintrag, gross) {
    const feld = el("span", "logo" + (eintrag.logoGrund ? " " + eintrag.logoGrund : "") + (gross ? " gross" : ""));
    feld.setAttribute("aria-hidden", "true");
    if (eintrag.logo) {
      const bild = el("img");
      bild.src = logoPfad + eintrag.logo;
      bild.alt = "";
      bild.decoding = "async";
      feld.append(bild);
    }
    return feld;
  }

  // Nennt die Felder eines Anbieters, die sich nicht bestätigen ließen; leer, wenn alles belegt ist.
  function offeneFelder(eintrag) {
    if (!(eintrag.offen || []).length) return "";
    const namen = [...new Set(eintrag.offen.map(feld => T(feldTexte[feld] || "feld.status")))];
    return T("start.offen") + ": " + namen.join(", ");
  }

  // Baut die Tabelle der Verbindungen. Mit „verlinken“ führen die Namen zum Profil des Anbieters.
  function strecken(liste, nachKennung, verlinken) {
    const tabelle = el("div", "strecken");
    for (const schluessel of ["tab.von", "tab.art", "tab.nach", "tab.angabe", "feld.quelle"]) tabelle.append(el("span", "kopfzeile", T(schluessel)));
    const name = id => {
      const eintrag = nachKennung.get(id);
      if (!verlinken) return eigenname("span", eintrag.kurz);
      const feld = el("span");
      const link = eigenname("a", eintrag.kurz);
      link.href = "anbieter.html#" + id;
      feld.append(link);
      return feld;
    };
    for (const b of liste) {
      const art = el("span", "art", T("beziehung." + b.art));
      art.style.setProperty("--f", linien[b.art].farbe);
      const text = L(b.text) + " · " + datumText(b.datum) + (b.gesichert ? "" : " · " + T("start.ungesichert"));
      const angabe = el("span", "angabe", text);
      angabe.title = text;
      const beleg = el("span");
      beleg.append(verweis(b.quelle.url, hostname(b.quelle.url)));
      beleg.title = b.quelle.name;
      tabelle.append(name(b.von), art, name(b.nach), angabe, beleg);
    }
    return tabelle;
  }

  // Baut eine Tabelle mit festem Raster. Kopf und Zellen sind Texte oder fertige Knoten;
  // eine Zeile ist { zellen, klasse }.
  function tabelle(klasse, koepfe, zeilen) {
    const gitter = el("table", "vergleich" + (klasse ? " " + klasse : ""));
    const kopf = el("tr");
    for (const inhalt of koepfe) kopf.append(typeof inhalt === "string" ? el("th", "", inhalt) : inhalt);
    gitter.append(kopf);
    for (const zeile of zeilen) {
      const reihe = el("tr", zeile.klasse || "");
      for (const inhalt of zeile.zellen) {
        const zelle = el("td");
        zelle.append(inhalt);
        reihe.append(zelle);
      }
      gitter.append(reihe);
    }
    const huelle = el("div", "tabellenhuelle");
    huelle.append(gitter);
    return huelle;
  }

  // Baut die Liste der Quellen: Kurzname des Anbieters und Verweis auf die Seite.
  function quellenliste(quellen, nachKennung) {
    const liste = el("ul", "quellenliste");
    for (const quelle of quellen) {
      const punkt = el("li");
      const link = verweis(quelle.url, quelle.name);
      link.lang = "en";
      punkt.append(eigenname("span", nachKennung.get(quelle.anbieter).kurz + " · "), link);
      liste.append(punkt);
    }
    return liste;
  }

  // Baut eine nummerierte Liste von Schritten; ein Schritt ist { klasse, titel, text }.
  function schrittliste(schritte) {
    const liste = el("ol", "ablauf offen");
    schritte.forEach((schritt, nummer) => {
      const punkt = el("li", schritt.klasse || "");
      punkt.append(el("b", "", (nummer + 1) + " · " + schritt.titel), el("span", "", schritt.text));
      liste.append(punkt);
    });
    return liste;
  }

  return { sprachkennung, farben, linien, datumText, zahlText, hostname, eigenname, verweis, logo, offeneFelder, strecken, tabelle, quellenliste, schrittliste };
})();
