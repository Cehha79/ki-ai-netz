// Finanzdaten der KI-Anbieter: Börsengänge, Finanzierungsrunden und Kennzahlen. Von Hand gepflegt.
// Jede Angabe nennt ihre Quelle über einen Schlüssel aus KI_FINANZ_QUELLEN. Die Art der Quelle sagt,
// wie gut die Angabe belegt ist: "primaer" (Mitteilung oder Pflichtbericht der Firma, Börsenaufsicht)
// oder "presse" (Bericht eines Mediums). Beträge in Milliarden, soweit nicht anders genannt.
// Nur Tatsachen mit Quelle und Datum. Keine Kurse, keine Kursziele, keine Empfehlungen.
window.KI_FINANZEN_STAND = { geprueftAm: "2026-11-17" };

// datum: Tag der Veröffentlichung; null heißt: die Quelle nennt kein Datum.
window.KI_FINANZ_QUELLEN = {
  anthropicSerieH: { name: "Anthropic: Series H", url: "https://www.anthropic.com/news/series-h", datum: "2026-05-28", art: "primaer" },
  anthropicBlatt: { name: "Anthropic: IPO fact sheet", url: "https://ipo.anthropic.com/documents/us/factsheet.pdf", datum: null, art: "primaer" },
  cnbcAnthropic: { name: "CNBC: Anthropic sets price range", url: "https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html", datum: "2026-11-10", art: "presse" },
  alJazeeraOpenai: { name: "Al Jazeera: OpenAI files for US initial public offering", url: "https://www.aljazeera.com/economy/2026/6/8/tech-giant-openai-files-for-us-initial-public-offering", datum: "2026-06-08", art: "presse" },
  secSpacex: { name: "SEC EDGAR: SpaceX, prospectus 424B4", url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026042639/0001628280-26-042639-index.htm", datum: "2026-06-12", art: "primaer" },
  kqedSpacex: { name: "KQED: SpaceX IPO", url: "https://www.kqed.org/news/12087212/spacex-blasts-off-with-a-record-breaking-75-billion-ipo", datum: null, art: "presse" },
  techcrunchSpacex: { name: "TechCrunch: SpaceX opens at $150", url: "https://techcrunch.com/2026/06/12/spacex-opens-at-150-an-11-pop-for-the-most-anticipated-debut-in-history", datum: "2026-06-12", art: "presse" },
  cursorBlog: { name: "Cursor: Cursor is now a part of SpaceX", url: "https://cursor.com/blog/joining-spacex", datum: "2026-08-14", art: "primaer" },
  cerebrasIpo: { name: "Cerebras: Pricing of initial public offering", url: "https://cerebras.ai/press-release/cerebras-systems-announces-pricing-of-initial-public-offering", datum: "2026-05-13", art: "primaer" },
  coreweaveIpo: { name: "CoreWeave: Pricing of initial public offering", url: "https://coreweave.com/news/coreweave-announces-pricing-of-initial-public-offering", datum: "2025-03-27", art: "primaer" },
  coreweaveQ3: { name: "CoreWeave: Third quarter 2026 results", url: "https://investors.coreweave.com/news/news-details/2026/CoreWeave-Reports-Strong-Third-Quarter-2026-Results/default.aspx", datum: "2026-11-10", art: "primaer" },
  nvidiaQ2: { name: "NVIDIA: Results for second quarter fiscal 2027", url: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027", datum: "2026-08-26", art: "primaer" },
  metaQ3: { name: "SEC EDGAR: Meta, third quarter 2026 results", url: "https://www.sec.gov/Archives/edgar/data/0001326801/000162828026066700/meta-09302026xexhibit991.htm", datum: "2026-10-21", art: "primaer" },
  cnbcAlphabet: { name: "CNBC: Alphabet Q3 2026 earnings", url: "https://www.cnbc.com/2026/10/28/alphabet-googl-earnings-q3-2026.html", datum: "2026-10-28", art: "presse" },
  cnbcAmazon: { name: "CNBC: Amazon Q3 2026 earnings", url: "https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html", datum: "2026-10-29", art: "presse" },
  mistralD: { name: "Mistral AI: Series D", url: "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/", datum: "2026-09-08", art: "primaer" },
  yicaiZhipu: { name: "Yicai Global: Zhipu AI debuts in Hong Kong", url: "https://www.yicaiglobal.com/news/zhipu-ai-soars-in-hong-kong-stock-market-debut-as-chinese-startup-becomes-worlds-first-llm-firm-to-go-public", datum: "2026-01-08", art: "presse" },
  yicaiMinimax: { name: "Yicai Global: MiniMax debuts in Hong Kong", url: "https://www.yicaiglobal.com/news/chinese-ai-startup-minimaxs-stock-pops-in-hong-kong-trading-debut", datum: "2026-01-09", art: "presse" }
};

// Börsenstatus. status: "notiert" (eigene Aktie im Handel), "mutter" (über den börsennotierten
// Mutterkonzern), "laeuft" (Börsengang angekündigt, noch kein Handel), "eingereicht" (Unterlagen
// eingereicht, kein Termin). handel: erster Handelstag; erwartet: true, solange er noch aussteht.
// preis: Ausgabepreis je Aktie; spanne: Preisspanne vor der Festsetzung; aktien: angebotene Aktien.
window.KI_BOERSE = [
  { anbieter: "coreweave", status: "notiert", platz: "Nasdaq", kuerzel: "CRWV", handel: "2025-03-28", preis: 40, waehrung: "USD", aktien: 37500000, quellen: ["coreweaveIpo"] },
  { anbieter: "zai", status: "notiert", platz: "HKEX", kuerzel: "2513", handel: "2026-01-08", quellen: ["yicaiZhipu"],
    text: { de: "Notiert als Knowledge Atlas Technology. Der Börsengang brachte über 4,3 Mrd. HKD ein.", en: "Listed as Knowledge Atlas Technology. The offering raised more than HKD 4.3 billion.", tr: "Knowledge Atlas Technology adıyla işlem görüyor. Halka arzdan 4,3 milyar HKD'den fazla gelir elde edildi." } },
  { anbieter: "minimax", status: "notiert", platz: "HKEX", kuerzel: "0100", handel: "2026-01-09", preis: 165, waehrung: "HKD", aktien: 29200000, quellen: ["yicaiMinimax"],
    text: { de: "Die Zahl der Aktien ist gerundet (rund 29,2 Mio.).", en: "The number of shares is rounded (about 29.2 million).", tr: "Hisse sayısı yuvarlanmıştır (yaklaşık 29,2 milyon)." } },
  { anbieter: "cerebras", status: "notiert", platz: "Nasdaq", kuerzel: "CBRS", handel: "2026-05-14", preis: 185, waehrung: "USD", aktien: 30000000, quellen: ["cerebrasIpo"] },
  { anbieter: "xai", status: "mutter", platz: "Nasdaq", kuerzel: "SPCX", handel: "2026-06-12", preis: 135, waehrung: "USD", aktien: 555555555, quellen: ["secSpacex", "kqedSpacex", "techcrunchSpacex"],
    text: { de: "Kein eigener Börsengang. xAI gehört seit Februar 2026 zu SpaceX; an der Börse ist der Mutterkonzern. Der Börsengang von SpaceX brachte 75 Mrd. USD ein.", en: "No listing of its own. xAI has been part of SpaceX since February 2026; the listed company is the parent. The SpaceX offering raised USD 75 billion.", tr: "Kendi halka arzı yok. xAI, Şubat 2026'dan beri SpaceX'e bağlı; borsada işlem gören ana şirkettir. SpaceX'in halka arzı 75 milyar USD getirdi." } },
  { anbieter: "cursor", status: "mutter", platz: "Nasdaq", kuerzel: "SPCX", quellen: ["cursorBlog"],
    text: { de: "Anysphere, das Unternehmen hinter Cursor, gehört seit dem 14.08.2026 zu SpaceX; an der Börse ist der Mutterkonzern.", en: "Anysphere, the company behind Cursor, has been part of SpaceX since 14 August 2026; the listed company is the parent.", tr: "Cursor'ın arkasındaki şirket Anysphere, 14.08.2026'dan beri SpaceX'e bağlı; borsada işlem gören ana şirkettir." } },
  { anbieter: "openai", status: "eingereicht", eingereicht: "2026-06-08", quellen: ["alJazeeraOpenai"],
    text: { de: "Vertraulich bei der US-Börsenaufsicht eingereicht. OpenAI nennt keinen Zeitplan.", en: "Filed confidentially with the US securities regulator. OpenAI has given no timeline.", tr: "ABD sermaye piyasası kurumuna gizli başvuru yapıldı. OpenAI bir takvim açıklamadı." } },
  { anbieter: "anthropic", status: "laeuft", platz: "Nasdaq", kuerzel: "ANT", handel: "2026-11-19", erwartet: true, spanne: [70, 78], waehrung: "USD", aktien: 825000000, quellen: ["anthropicBlatt", "cnbcAnthropic"],
    text: { de: "Preisfestsetzung für den 18.11.2026 und erster Handelstag für den 19.11.2026 erwartet, vorbehaltlich der Freigabe durch die Aufsicht.", en: "Pricing expected for 18 November 2026 and first day of trading for 19 November 2026, subject to regulatory clearance.", tr: "Fiyat belirlemenin 18.11.2026'da, ilk işlem gününün 19.11.2026'da olması bekleniyor; düzenleyici onayına bağlıdır." } }
];

// Finanzierungsrunden und Börsengänge mit Bewertung. betrag und bewertung in Milliarden der
// genannten Währung; null heißt: die Quelle nennt keinen Wert. Die Zusätze …Bis, …Ab und …Rund
// stehen für „bis zu“, „mehr als“ und „rund“. boersengang: true kennzeichnet einen Börsengang;
// datumBericht: true heißt, das Datum ist das des Berichts, nicht das des Ereignisses.
window.KI_RUNDEN = [
  { anbieter: "anthropic", datum: "2026-05-28", art: { de: "Finanzierungsrunde Series H", en: "Series H funding round", tr: "Series H yatırım turu" }, betrag: 65, bewertung: 965, waehrung: "USD", quellen: ["anthropicSerieH"],
    geldgeber: { de: "Angeführt von Altimeter Capital, Dragoneer, Greenoaks und Sequoia Capital. Enthält 15 Mrd. USD früher zugesagter Mittel von Cloud-Konzernen, davon 5 Mrd. USD von Amazon.", en: "Led by Altimeter Capital, Dragoneer, Greenoaks and Sequoia Capital. Includes USD 15 billion of previously committed funds from cloud companies, of which USD 5 billion from Amazon.", tr: "Altimeter Capital, Dragoneer, Greenoaks ve Sequoia Capital öncülük etti. Bulut şirketlerinin daha önce taahhüt ettiği 15 milyar USD'yi içerir; bunun 5 milyar USD'si Amazon'dandır." } },
  { anbieter: "anthropic", datum: "2026-11-10", boersengang: true, art: { de: "Börsengang, oberes Ende der Preisspanne", en: "IPO, top of the price range", tr: "Halka arz, fiyat aralığının üst sınırı" }, betrag: 64.35, betragBis: true, bewertung: 1405, bewertungBis: true, waehrung: "USD", quellen: ["cnbcAnthropic"],
    geldgeber: { de: "Dazu eine Privatplatzierung über 26 Mrd. USD an AMD, Broadcom, Google, Micron, Microsoft, Nvidia und TSMC.", en: "Plus a private placement of USD 26 billion to AMD, Broadcom, Google, Micron, Microsoft, Nvidia and TSMC.", tr: "Ayrıca AMD, Broadcom, Google, Micron, Microsoft, Nvidia ve TSMC'ye 26 milyar USD'lik özel plasman." } },
  { anbieter: "openai", datum: "2026-06-08", datumBericht: true, art: { de: "Finanzierungsrunde Anfang 2026, laut Presse", en: "Funding round in early 2026, according to press reports", tr: "2026 başındaki yatırım turu, basına göre" }, betrag: 110, bewertung: 840, waehrung: "USD", quellen: ["alJazeeraOpenai"],
    geldgeber: { de: "Getragen von SoftBank, Amazon und Nvidia. Das Datum ist das des Berichts; OpenAIs eigene Mitteilung war nicht abrufbar.", en: "Backed by SoftBank, Amazon and Nvidia. The date is that of the report; OpenAI's own announcement could not be retrieved.", tr: "SoftBank, Amazon ve Nvidia destekledi. Tarih, haberin tarihidir; OpenAI'nin kendi duyurusuna erişilemedi." } },
  { anbieter: "xai", datum: "2026-06-12", boersengang: true, art: { de: "Börsengang von SpaceX, dem Mutterkonzern", en: "IPO of SpaceX, the parent company", tr: "Ana şirket SpaceX'in halka arzı" }, betrag: 75, bewertung: 1750, bewertungRund: true, waehrung: "USD", quellen: ["kqedSpacex", "secSpacex"],
    geldgeber: { de: "555.555.555 Aktien zu je 135 USD. Die Bewertung gilt für den ganzen Konzern, nicht für die KI-Sparte.", en: "555,555,555 shares at USD 135 each. The valuation applies to the whole group, not to the AI division.", tr: "Her biri 135 USD'den 555.555.555 hisse. Değerleme yapay zekâ bölümünü değil, tüm grubu kapsar." } },
  { anbieter: "mistral", datum: "2026-09-08", art: { de: "Finanzierungsrunde Series D", en: "Series D funding round", tr: "Series D yatırım turu" }, betrag: 3, bewertung: 21, bewertungAb: true, waehrung: "EUR", quellen: ["mistralD"],
    geldgeber: { de: "Angeführt von Samsung Electronics, mit dem Scaleup Europe Fund (EQT) und PSG Equity. Unter den bisherigen Geldgebern: ASML und NVIDIA.", en: "Led by Samsung Electronics, with the Scaleup Europe Fund (EQT) and PSG Equity. Existing investors include ASML and NVIDIA.", tr: "Samsung Electronics öncülük etti; Scaleup Europe Fund (EQT) ve PSG Equity eşlik etti. Mevcut yatırımcılar arasında ASML ve NVIDIA var." } },
  { anbieter: "cerebras", datum: "2026-05-13", boersengang: true, art: { de: "Börsengang", en: "IPO", tr: "Halka arz" }, betrag: 5.55, bewertung: null, waehrung: "USD", quellen: ["cerebrasIpo"],
    geldgeber: { de: "30 Mio. Aktien zu je 185 USD; der Betrag ist daraus errechnet.", en: "30 million shares at USD 185 each; the amount is calculated from that.", tr: "Her biri 185 USD'den 30 milyon hisse; tutar bundan hesaplanmıştır." } },
  { anbieter: "coreweave", datum: "2025-03-27", boersengang: true, art: { de: "Börsengang", en: "IPO", tr: "Halka arz" }, betrag: 1.5, bewertung: null, waehrung: "USD", quellen: ["coreweaveIpo"],
    geldgeber: { de: "37,5 Mio. Aktien zu je 40 USD; der Betrag ist daraus errechnet.", en: "37.5 million shares at USD 40 each; the amount is calculated from that.", tr: "Her biri 40 USD'den 37,5 milyon hisse; tutar bundan hesaplanmıştır." } }
];

// Zeiträume der Kennzahlen.
window.KI_ZEITRAEUME = {
  q3: { de: "3. Quartal 2026", en: "Q3 2026", tr: "2026 3. çeyrek" },
  neun: { de: "Januar bis September 2026", en: "January to September 2026", tr: "Ocak–Eylül 2026" },
  nvidiaQ2: { de: "2. Quartal des Geschäftsjahrs 2027 (bis 26.07.2026)", en: "Q2 of fiscal year 2027 (to 26 July 2026)", tr: "2027 mali yılının 2. çeyreği (26.07.2026'ya kadar)" },
  jahr: { de: "Gesamtjahr 2026, Ausblick der Firma", en: "Full year 2026, company outlook", tr: "2026 yılının tamamı, şirket öngörüsü" },
  stichtag: { de: "Stand 30.09.2026", en: "As of 30 September 2026", tr: "30.09.2026 itibarıyla" }
};

// Kennzahlen aus Berichten. groesse: umsatz, verlust, auftragsbestand, rechenzentren (Umsatz der
// Sparte), cloud (Umsatz der Cloud-Sparte), capex (Investitionsausgaben im Zeitraum), capexJahr
// (Ausblick für das Jahr), leistung (vertraglich gesicherte elektrische Leistung in Gigawatt).
// wert in Milliarden US-Dollar, bei leistung in Gigawatt; bis: oberes Ende einer Spanne.
window.KI_KENNZAHLEN = [
  { anbieter: "anthropic", groesse: "umsatz", wert: 17.0, zeitraum: "q3", quelle: "anthropicBlatt" },
  { anbieter: "anthropic", groesse: "verlust", wert: 23.3, zeitraum: "q3", quelle: "anthropicBlatt",
    hinweis: { de: "davon 21,9 Mrd. USD nicht zahlungswirksam (Wertänderung von Wandelanleihen und ähnlichen Papieren)", en: "of which USD 21.9 billion non-cash (change in value of convertible notes and similar instruments)", tr: "bunun 21,9 milyar USD'si nakit dışıdır (dönüştürülebilir tahvil ve benzeri araçların değer değişimi)" } },
  { anbieter: "anthropic", groesse: "umsatz", wert: 33.24, zeitraum: "neun", quelle: "cnbcAnthropic" },
  { anbieter: "anthropic", groesse: "verlust", wert: 104, zeitraum: "neun", quelle: "cnbcAnthropic",
    hinweis: { de: "überwiegend Wertänderungen von Wandelanleihen und Derivaten", en: "mostly changes in the value of convertible notes and derivatives", tr: "çoğunlukla dönüştürülebilir tahvil ve türev araçların değer değişimleri" } },
  { anbieter: "nvidia", groesse: "umsatz", wert: 96.2, zeitraum: "nvidiaQ2", quelle: "nvidiaQ2" },
  { anbieter: "nvidia", groesse: "rechenzentren", wert: 89.0, zeitraum: "nvidiaQ2", quelle: "nvidiaQ2" },
  { anbieter: "coreweave", groesse: "umsatz", wert: 3.661, zeitraum: "q3", quelle: "coreweaveQ3" },
  { anbieter: "coreweave", groesse: "verlust", wert: 0.709, zeitraum: "q3", quelle: "coreweaveQ3" },
  { anbieter: "coreweave", groesse: "auftragsbestand", wert: 132.5, zeitraum: "stichtag", quelle: "coreweaveQ3" },
  { anbieter: "amazon", groesse: "umsatz", wert: 201.94, zeitraum: "q3", quelle: "cnbcAmazon" },
  { anbieter: "amazon", groesse: "cloud", wert: 45.98, zeitraum: "q3", quelle: "cnbcAmazon" },
  { anbieter: "google", groesse: "umsatz", wert: 127.58, zeitraum: "q3", quelle: "cnbcAlphabet" },
  { anbieter: "google", groesse: "cloud", wert: 30.7, zeitraum: "q3", quelle: "cnbcAlphabet" },
  { anbieter: "meta", groesse: "umsatz", wert: 64.60, zeitraum: "q3", quelle: "metaQ3" },
  { anbieter: "amazon", groesse: "capex", wert: 77.3, zeitraum: "q3", quelle: "cnbcAmazon" },
  { anbieter: "google", groesse: "capex", wert: 51.36, zeitraum: "q3", quelle: "cnbcAlphabet" },
  { anbieter: "meta", groesse: "capex", wert: 34.91, zeitraum: "q3", quelle: "metaQ3",
    hinweis: { de: "einschließlich Tilgung von Finanzierungsleasing", en: "including principal payments on finance leases", tr: "finansal kiralama anapara ödemeleri dahil" } },
  { anbieter: "amazon", groesse: "capexJahr", wert: 220, zeitraum: "jahr", quelle: "cnbcAmazon" },
  { anbieter: "google", groesse: "capexJahr", wert: 195, bis: 205, zeitraum: "jahr", quelle: "cnbcAlphabet" },
  { anbieter: "meta", groesse: "capexJahr", wert: 135, bis: 145, zeitraum: "jahr", quelle: "metaQ3" },
  { anbieter: "coreweave", groesse: "capexJahr", wert: 37, bis: 39, zeitraum: "jahr", quelle: "coreweaveQ3" },
  { anbieter: "coreweave", groesse: "leistung", wert: 4.6, ab: true, zeitraum: "stichtag", quelle: "coreweaveQ3" }
];
