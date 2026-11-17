// Schaubild „MCP“: zeigt Schritt für Schritt die Nachrichten zwischen einer KI-Anwendung und einem
// MCP-Server. Die Server sind erfundene Beispiele, die Nachrichten gekürzt; Methoden und Aufbau
// (initialize, tools/list, tools/call, JSON-RPC 2.0) folgen dem Model Context Protocol.
// Braucht js/rahmen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.mcp = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const Klang = window.Klang;
  const kaesten = ["mcp.kasten1", "mcp.kasten2", "mcp.kasten3", "mcp.kasten4"];
  const farbklassen = ["modell", "aufruf", "werkzeug", "nutzer"];
  const server = {
    dateien: {
      name: "mcp.dateien",
      werkzeuge: [
        { name: "datei_lesen", text: { de: "Liest eine Datei", en: "Reads a file", tr: "Bir dosyayı okur" } },
        { name: "dateien_suchen", text: { de: "Sucht Dateien nach Namen", en: "Finds files by name", tr: "Dosyaları ada göre arar" } }
      ],
      eingabe: { pfad: "notizen.txt" },
      ergebnis: { de: "Einkauf: Brot, Käse", en: "Shopping: bread, cheese", tr: "Alışveriş: ekmek, peynir" }
    },
    kalender: {
      name: "mcp.kalender",
      werkzeuge: [
        { name: "termine_auflisten", text: { de: "Listet die Termine eines Tages", en: "Lists the appointments of a day", tr: "Bir günün randevularını listeler" } },
        { name: "termin_anlegen", text: { de: "Legt einen Termin an", en: "Creates an appointment", tr: "Randevu oluşturur" } }
      ],
      eingabe: { tag: "2026-11-18" },
      ergebnis: { de: "10:00 Zahnarzt", en: "10:00 dentist", tr: "10:00 diş hekimi" }
    },
    datenbank: {
      name: "mcp.datenbank",
      werkzeuge: [
        { name: "abfrage_ausfuehren", text: { de: "Führt eine Abfrage aus", en: "Runs a query", tr: "Bir sorgu çalıştırır" } },
        { name: "tabellen_auflisten", text: { de: "Listet die Tabellen", en: "Lists the tables", tr: "Tabloları listeler" } }
      ],
      eingabe: { sql: "SELECT COUNT(*) FROM kunden" },
      ergebnis: { de: "42", en: "42", tr: "42" }
    }
  };

  // Bleibt beim Sprachwechsel erhalten.
  const stand = { server: "dateien", schritt: 1 };

  function schritte() {
    const s = server[stand.server];
    const werkzeug = s.werkzeuge[0];
    const json = wert => JSON.stringify(wert);
    return [
      { von: 1, nach: 2, titel: "mcp.schritt1", code: json({ jsonrpc: "2.0", id: 1, method: "initialize" }) },
      { von: 2, nach: 1, titel: "mcp.schritt2", code: json({ id: 1, result: { serverInfo: { name: stand.server }, capabilities: { tools: {} } } }) },
      { von: 1, nach: 2, titel: "mcp.schritt3", code: json({ jsonrpc: "2.0", id: 2, method: "tools/list" }) },
      { von: 2, nach: 1, titel: "mcp.schritt4", code: json({ id: 2, result: { tools: s.werkzeuge.map(w => ({ name: w.name, description: L(w.text) })) } }) },
      { von: 0, nach: 1, titel: "mcp.schritt5", code: werkzeug.name },
      { von: 1, nach: 2, titel: "mcp.schritt6", code: json({ jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: werkzeug.name, arguments: s.eingabe } }) },
      { von: 2, nach: 3, titel: "mcp.schritt7", code: "" },
      { von: 2, nach: 1, titel: "mcp.schritt8", code: json({ id: 3, result: { content: [{ type: "text", text: L(s.ergebnis) }] } }) },
      { von: 1, nach: 0, titel: "mcp.schritt9", code: L(s.ergebnis) }
    ];
  }

  function bauen(ziel) {
    const wahl = el("div", "umschalter");
    const kreis = el("div", "kreislauf");
    const felder = kaesten.map(text => {
      const feld = el("div", "", T(text));
      kreis.append(feld);
      return feld;
    });
    const zaehler = el("p", "att-kopf");
    zaehler.setAttribute("aria-live", "polite");
    const ablauf = el("ol", "ablauf");

    function zeigen() {
      const alle = schritte();
      stand.schritt = Math.max(1, Math.min(alle.length, stand.schritt));
      wahl.replaceChildren(...Object.keys(server).map(kennung => {
        const knopf = el("button", "", T(server[kennung].name));
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(kennung === stand.server));
        knopf.addEventListener("click", () => {
          stand.server = kennung;
          stand.schritt = 1;
          Klang.doppelton();
          zeigen();
        });
        return knopf;
      }));
      const aktuell = alle[stand.schritt - 1];
      felder.forEach((feld, nummer) => feld.classList.toggle("aktiv", nummer === aktuell.von || nummer === aktuell.nach));
      zaehler.replaceChildren(document.createTextNode(T("agt.zaehler") + " "), el("b", "", stand.schritt + " / " + alle.length));
      ablauf.replaceChildren(...alle.slice(0, stand.schritt).map((eintrag, nummer) => {
        const punkt = el("li", farbklassen[eintrag.von] + (nummer === stand.schritt - 1 ? " neu" : ""));
        punkt.append(el("b", "", T(kaesten[eintrag.von]) + " → " + T(kaesten[eintrag.nach])), el("span", "", T(eintrag.titel)));
        if (eintrag.code) punkt.append(el("code", "block", eintrag.code));
        return punkt;
      }));
      ablauf.scrollTop = ablauf.scrollHeight;
    }
    const knopf = (text, tun) => {
      const taste = el("button", "", T(text));
      taste.type = "button";
      taste.addEventListener("click", tun);
      return taste;
    };
    const tasten = el("div", "umschalter");
    tasten.append(
      knopf("agt.schritt", () => {
        if (stand.schritt >= schritte().length) return;
        stand.schritt++;
        Klang.ton(880, 0.35);
        zeigen();
      }),
      knopf("agt.neu", () => {
        stand.schritt = 1;
        Klang.ton(660, 0.3);
        zeigen();
      })
    );

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("mcp.wahl"), wahl, tasten, abschnitt("mcp.was"), el("p", "erklaerung", T("mcp.wasText")), abschnitt("mcp.warum"), el("p", "erklaerung", T("mcp.warumText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("mcp.bild"), kreis, abschnitt("mcp.nachrichten"), zaehler, ablauf, abschnitt("tok.grenze"), el("p", "erklaerung", T("mcp.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    zeigen();
  }

  return { bauen };
})();
