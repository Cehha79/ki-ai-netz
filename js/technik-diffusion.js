// Schaubild „Diffusion“: zeigt in 20 Schritten, wie aus Rauschen ein Bild wird.
// Veranschaulichung: Gemischt wird zwischen festem Rauschen und einem fertig gezeichneten Bild.
// Ein echtes Modell kennt das Bild nicht; es schätzt in jedem Schritt das Rauschen und zieht es ab.
// Braucht js/rahmen.js und js/hilfen.js.
window.KI_SCHAUBILDER = window.KI_SCHAUBILDER || {};
window.KI_SCHAUBILDER.diffusion = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const { zahlText } = window.Hilfen;
  const Klang = window.Klang;
  const breite = 96, hoehe = 64, schritteGesamt = 20;

  // Zufallszahlen mit festem Startwert, damit das Rauschen bei jedem Öffnen gleich ist.
  let saat = 20261117;
  const zufall = () => {
    saat = (saat * 16807) % 2147483647;
    return saat / 2147483647;
  };
  const rauschen = new Uint8ClampedArray(breite * hoehe * 3);
  for (let i = 0; i < rauschen.length; i++) rauschen[i] = Math.round(zufall() * 255);
  const sterne = Array.from({ length: 26 }, () => [Math.floor(zufall() * breite), Math.floor(zufall() * 30)]);

  // Die beiden Bilder sind aus einfachen Formen gezeichnet: Farbe eines Bildpunkts nach seiner Lage.
  const motive = {
    a: (x, y) => {
      const hang1 = 44 + Math.sin(x / 15) * 6, hang2 = 50 + Math.sin(x / 9 + 2) * 4;
      if (y > hang2) return [38, 74, 44];
      if (y > hang1) return [58, 104, 62];
      if (Math.hypot(x - 66, y - 22) < 9) return [255, 190, 40];
      const tief = y / 44;
      return [30 + 190 * tief, 60 + 80 * tief, 130 - 40 * tief];
    },
    b: (x, y) => {
      if (y > 52) return [24, 34, 28];
      if (x >= 36 && x <= 62 && y >= 34 && y <= 52) return x >= 45 && x <= 52 && y >= 39 && y <= 46 ? [255, 214, 90] : [112, 78, 62];
      if (y >= 20 && y < 34 && Math.abs(x - 49) <= (y - 20) * 1.1) return [150, 54, 44];
      if (sterne.some(([sx, sy]) => sx === x && sy === y)) return [240, 240, 220];
      return [12, 16, 40 + y * 0.5];
    }
  };

  // Bleibt beim Sprachwechsel erhalten.
  const stand = { motiv: "a", schritt: 0 };
  let uhr = null;

  function bauen(ziel) {
    clearInterval(uhr);
    const flaeche = el("canvas", "diffusionsbild");
    flaeche.width = breite;
    flaeche.height = hoehe;
    const stift = flaeche.getContext("2d");
    const bild = stift.createImageData(breite, hoehe);
    const wahl = el("div", "umschalter spalte");
    const regler = el("label", "regler");
    const reglerKopf = el("span", "regler-kopf");
    const anzeige = el("b");
    reglerKopf.append(document.createTextNode(T("agt.zaehler")), anzeige);
    const schieber = el("input");
    schieber.type = "range";
    schieber.min = "0";
    schieber.max = String(schritteGesamt);
    schieber.step = "1";
    regler.append(reglerKopf, schieber);
    const anteil = el("p", "att-kopf");
    anteil.setAttribute("aria-live", "polite");

    function zeichnen() {
      // Der Anteil des Bildes wächst erst langsam, dann schneller, wie beim schrittweisen Entrauschen.
      const klar = (stand.schritt / schritteGesamt) ** 1.6;
      const farbe = motive[stand.motiv];
      for (let y = 0; y < hoehe; y++) {
        for (let x = 0; x < breite; x++) {
          const stelle = y * breite + x;
          const ziel3 = farbe(x, y);
          for (let k = 0; k < 3; k++) bild.data[stelle * 4 + k] = rauschen[stelle * 3 + k] * (1 - klar) + ziel3[k] * klar;
          bild.data[stelle * 4 + 3] = 255;
        }
      }
      stift.putImageData(bild, 0, 0);
      schieber.value = String(stand.schritt);
      anzeige.textContent = stand.schritt + " / " + schritteGesamt;
      anteil.replaceChildren(document.createTextNode(T("dif.rauschen") + " "), el("b", "", zahlText((1 - klar) * 100) + " %"));
    }
    function wahlZeigen() {
      wahl.replaceChildren(...[["a", "dif.motivA"], ["b", "dif.motivB"]].map(([kennung, text]) => {
        const knopf = el("button", "", "„" + T(text) + "“");
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(kennung === stand.motiv));
        knopf.addEventListener("click", () => {
          stand.motiv = kennung;
          Klang.doppelton();
          wahlZeigen();
          zeichnen();
        });
        return knopf;
      }));
    }
    const laufen = richtung => {
      clearInterval(uhr);
      stand.schritt = richtung > 0 ? 0 : schritteGesamt;
      zeichnen();
      uhr = setInterval(() => {
        stand.schritt += richtung;
        Klang.ton(440 + stand.schritt * 30, 0.2, 0.05);
        zeichnen();
        if (stand.schritt <= 0 || stand.schritt >= schritteGesamt) clearInterval(uhr);
      }, window.Rahmen.bewegung() ? 220 : 40);
    };
    const knopf = (text, tun) => {
      const taste = el("button", "", T(text));
      taste.type = "button";
      taste.addEventListener("click", tun);
      return taste;
    };
    const tasten = el("div", "umschalter");
    tasten.append(knopf("dif.entrauschen", () => laufen(1)), knopf("dif.verrauschen", () => laufen(-1)));
    schieber.addEventListener("input", () => {
      clearInterval(uhr);
      stand.schritt = Number(schieber.value);
      zeichnen();
    });

    const abschnitt = text => el("h3", "profil-abschnitt", T(text));
    const linkeSeite = el("div");
    linkeSeite.append(abschnitt("dif.motiv"), wahl, regler, tasten, abschnitt("dif.was"), el("p", "erklaerung", T("dif.wasText")), abschnitt("dif.warum"), el("p", "erklaerung", T("dif.warumText")));
    const rechteSeite = el("div");
    rechteSeite.append(abschnitt("dif.bild"), flaeche, anteil, el("p", "att-warnung", T("dif.hinweis")), abschnitt("tok.grenze"), el("p", "erklaerung", T("dif.grenzeText")));
    const spalten = el("div", "zwei");
    spalten.append(linkeSeite, rechteSeite);
    ziel.replaceChildren(spalten);
    wahlZeigen();
    zeichnen();
  }

  return { bauen };
})();
