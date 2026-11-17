// Belegte Beziehungen zwischen den Anbietern aus daten/anbieter.js.
// art: "geld" (von = Geldgeber, nach = Empfänger), "rechner" (von = Lieferant von Rechenleistung
// oder Chips, nach = Nutzer), "uebernahme" (von = Käufer, nach = übernommenes Unternehmen).
// gesichert: false heißt, die Quelle ließ sich nicht direkt abrufen und wurde nur als Suchauszug gelesen.
(() => {
  "use strict";

  const quellen = {
    anthropicRunde: { name: "Anthropic: Series H", url: "https://www.anthropic.com/news/series-h" },
    anthropicBoersengang: { name: "CNBC: Anthropic sets price range", url: "https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html" },
    openaiRunde: { name: "OpenAI: Accelerating the next phase of AI", url: "https://openai.com/index/accelerating-the-next-phase-ai/" },
    cursorSpacex: { name: "Cursor Blog: Cursor is now a part of SpaceX", url: "https://cursor.com/blog/joining-spacex" },
    reveOpenai: { name: "Reve Blog: A New Chapter for Reve", url: "https://blog.reve.com/posts/a-new-chapter-for-reve/" },
    coreweaveNvidia: { name: "CoreWeave: Vera Rubin NVL72 at Production Scale", url: "https://coreweave.com/news/coreweave-delivers-nvidia-vera-rubin-nvl72-performance-at-production-scale-starting-with-cognition" },
    mistralRunde: { name: "Mistral AI: Series D", url: "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/" }
  };

  const platzierung = {
    de: "Privatplatzierung zum Börsengang",
    en: "Private placement alongside the IPO",
    tr: "Halka arzla birlikte özel plasman"
  };
  const runde = {
    de: "Finanzierungsrunde vom März 2026",
    en: "Funding round of March 2026",
    tr: "Mart 2026 yatırım turu"
  };

  // Tag, an dem die Beziehungen zuletzt gegen ihre Quellen geprüft wurden.
  window.KI_BEZIEHUNGEN_STAND = { geprueftAm: "2026-11-17" };

  window.KI_BEZIEHUNGEN = [
    {
      von: "amazon", nach: "anthropic", art: "rechner", datum: "2026-05-28", gesichert: true,
      text: { de: "Rechenleistung bis zu 5 Gigawatt", en: "Computing capacity of up to 5 gigawatts", tr: "5 gigavata kadar işlem kapasitesi" },
      quelle: quellen.anthropicRunde
    },
    {
      von: "google", nach: "anthropic", art: "rechner", datum: "2026-05-28", gesichert: true,
      text: { de: "TPU-Kapazität von 5 Gigawatt, zusammen mit Broadcom", en: "5 gigawatts of TPU capacity, together with Broadcom", tr: "Broadcom ile birlikte 5 gigavatlık TPU kapasitesi" },
      quelle: quellen.anthropicRunde
    },
    {
      von: "broadcom", nach: "anthropic", art: "rechner", datum: "2026-05-28", gesichert: true,
      text: { de: "Chips für die TPU-Kapazität, zusammen mit Google", en: "Chips for the TPU capacity, together with Google", tr: "Google ile birlikte TPU kapasitesi için çipler" },
      quelle: quellen.anthropicRunde
    },
    {
      von: "xai", nach: "anthropic", art: "rechner", datum: "2026-05-28", gesichert: true,
      text: { de: "GPU-Kapazität bei SpaceX, dem Mutterkonzern", en: "GPU capacity at SpaceX, the parent company", tr: "Ana şirket SpaceX'te GPU kapasitesi" },
      quelle: quellen.anthropicRunde
    },
    { von: "google", nach: "anthropic", art: "geld", datum: "2026-11-10", gesichert: true, text: platzierung, quelle: quellen.anthropicBoersengang },
    { von: "microsoft", nach: "anthropic", art: "geld", datum: "2026-11-10", gesichert: true, text: platzierung, quelle: quellen.anthropicBoersengang },
    { von: "nvidia", nach: "anthropic", art: "geld", datum: "2026-11-10", gesichert: true, text: platzierung, quelle: quellen.anthropicBoersengang },
    { von: "amd", nach: "anthropic", art: "geld", datum: "2026-11-10", gesichert: true, text: platzierung, quelle: quellen.anthropicBoersengang },
    { von: "broadcom", nach: "anthropic", art: "geld", datum: "2026-11-10", gesichert: true, text: platzierung, quelle: quellen.anthropicBoersengang },
    { von: "amazon", nach: "openai", art: "geld", datum: "2026-03-31", gesichert: false, text: runde, quelle: quellen.openaiRunde },
    { von: "nvidia", nach: "openai", art: "geld", datum: "2026-03-31", gesichert: false, text: runde, quelle: quellen.openaiRunde },
    { von: "microsoft", nach: "openai", art: "geld", datum: "2026-03-31", gesichert: false, text: runde, quelle: quellen.openaiRunde },
    {
      von: "openai", nach: "reve", art: "geld", datum: "2026-07-27", gesichert: true,
      text: { de: "Beteiligung an Reve", en: "Stake in Reve", tr: "Reve'de pay" },
      quelle: quellen.reveOpenai
    },
    {
      von: "xai", nach: "cursor", art: "uebernahme", datum: "2026-08-14", gesichert: true,
      text: { de: "SpaceX, der Mutterkonzern, hat Anysphere (Cursor) übernommen", en: "SpaceX, the parent company, acquired Anysphere (Cursor)", tr: "Ana şirket SpaceX, Anysphere'i (Cursor) satın aldı" },
      quelle: quellen.cursorSpacex
    },
    {
      von: "nvidia", nach: "coreweave", art: "rechner", datum: "2026-09-30", gesichert: true,
      text: { de: "Vera Rubin NVL72 läuft in der CoreWeave Cloud", en: "Vera Rubin NVL72 runs in the CoreWeave Cloud", tr: "Vera Rubin NVL72, CoreWeave Cloud'da çalışıyor" },
      quelle: quellen.coreweaveNvidia
    },
    {
      von: "nvidia", nach: "mistral", art: "geld", datum: "2026-09-08", gesichert: true,
      text: { de: "Bisheriger Geldgeber, beteiligt an der Series D", en: "Existing investor, took part in the Series D", tr: "Mevcut yatırımcı, Series D'ye katıldı" },
      quelle: quellen.mistralRunde
    }
  ];
})();
