// Gemeinsame Grundlage der Methodikseite: Umfang und Prüfdatum jeder Datenart, berechnet aus den
// Datendateien selbst, damit die Seite nie etwas anderes behauptet, als in den Daten steht.
// Braucht js/rahmen.js und js/hilfen.js sowie alle Datendateien.
window.Methodik = (() => {
  "use strict";

  const { L } = window.Rahmen;
  const { zahlText, datumText } = window.Hilfen;
  const anbieter = window.KI_ANBIETER || [];
  const technik = (window.KI_BEREICHE || []).find(bereich => bereich.id === "technik") || { bausteine: [] };
  const umfaenge = {
    anbieter: anbieter.length,
    spitzenmodelle: anbieter.filter(eintrag => eintrag.spitzenmodell && eintrag.spitzenmodell.datum).length,
    modelle: (window.KI_MODELLE || []).length,
    beziehungen: (window.KI_BEZIEHUNGEN || []).length,
    abos: (window.KI_ABOS || []).length,
    finanzen: Object.keys(window.KI_FINANZ_QUELLEN || {}).length,
    glossar: (window.KI_GLOSSAR || []).length,
    logos: anbieter.filter(eintrag => eintrag.logo).length,
    schaubilder: technik.bausteine.filter(baustein => baustein.stand === "fertig").length
  };
  // null heißt: für diese Datenart gibt es kein eigenes Prüfdatum.
  const staende = {
    anbieter: (window.KI_DATENSTAND || {}).anbieter || null,
    spitzenmodelle: (window.KI_DATENSTAND || {}).anbieter || null,
    modelle: (window.KI_MODELLE_STAND || {}).abgerufenAm || null,
    beziehungen: (window.KI_BEZIEHUNGEN_STAND || {}).geprueftAm || null,
    abos: (window.KI_ABOS_STAND || {}).geprueftAm || null,
    finanzen: (window.KI_FINANZEN_STAND || {}).geprueftAm || null,
    glossar: null,
    logos: null,
    schaubilder: null
  };

  const umfangText = art => zahlText(umfaenge[art.id]) + " " + L(art.einheit);
  const standText = art => staende[art.id] ? datumText(staende[art.id]) : "–";

  return { arten: window.KI_DATENARTEN || [], umfaenge, staende, umfangText, standText };
})();
