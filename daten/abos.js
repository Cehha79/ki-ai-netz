// Abos und Nutzungsgrenzen der Anbieter laut ihren offiziellen Seiten. Von Hand gepflegt.
// preis: US-Dollar je Monat bei monatlicher Zahlung; null heißt: nicht bestätigt.
// fenster und woche: Vielfaches der Nutzung des Pro-Abos desselben Anbieters als Zahl;
// null heißt: kein Verhältnis veröffentlicht; "keins" heißt: diese Grenze gibt es bei dem Abo nicht.
// fensterText und wocheText sagen dasselbe in Worten und stehen in den Tabellen.
window.KI_ABOS_STAND = { geprueftAm: "2026-11-17", waehrung: "USD" };

window.KI_ABOS = [
  {
    anbieter: "anthropic", id: "free", name: "Free", preis: 0, fenster: null, woche: null,
    fensterText: { de: "begrenzt", en: "limited", tr: "sınırlı" },
    wocheText: { de: "begrenzt", en: "limited", tr: "sınırlı" }
  },
  {
    anbieter: "anthropic", id: "pro", name: "Pro", preis: 20, fenster: 1, woche: 1,
    fensterText: { de: "Grundmenge", en: "base amount", tr: "temel miktar" },
    wocheText: { de: "Grundmenge", en: "base amount", tr: "temel miktar" },
    hinweis: { de: "17 USD je Monat bei jährlicher Zahlung (200 USD im Voraus)", en: "USD 17 per month when billed annually (USD 200 up front)", tr: "Yıllık ödemede aylık 17 USD (peşin 200 USD)" }
  },
  {
    anbieter: "anthropic", id: "max", name: "Max", preis: 100, fenster: 5, woche: 5,
    fensterText: { de: "5 × Pro", en: "5 × Pro", tr: "5 × Pro" },
    wocheText: { de: "5 × Pro", en: "5 × Pro", tr: "5 × Pro" },
    hinweis: { de: "zusätzlich ein eigenes Wochenlimit für Fable", en: "plus a separate weekly limit for Fable", tr: "ayrıca Fable için ayrı bir haftalık sınır" }
  },
  {
    anbieter: "anthropic", id: "ultra", name: "Ultra", preis: 200, fenster: "keins", woche: 10,
    fensterText: { de: "kein Limit, sobald das Konto bestätigt ist", en: "no limit once the account is verified", tr: "hesap doğrulandıktan sonra sınır yok" },
    wocheText: { de: "10 × Pro", en: "10 × Pro", tr: "10 × Pro" },
    hinweis: { de: "zusätzlich ein eigenes Wochenlimit für Fable; enthält monatliches Guthaben für die API", en: "plus a separate weekly limit for Fable; includes monthly credits for the API", tr: "ayrıca Fable için ayrı bir haftalık sınır; aylık API kredisi içerir" }
  },
  {
    anbieter: "openai", id: "plus", name: "Plus", preis: null, fenster: null, woche: null,
    fensterText: { de: "ja; für Codex schätzt OpenAI je nach Modell 5 bis 3.000 lokale Nachrichten", en: "yes; for Codex, OpenAI estimates 5 to 3,000 local messages depending on the model", tr: "var; Codex için OpenAI modele göre 5 ila 3.000 yerel mesaj tahmin ediyor" },
    wocheText: { de: "kann zusätzlich gelten", en: "may apply in addition", tr: "ek olarak geçerli olabilir" }
  },
  {
    anbieter: "openai", id: "pro100", name: "Pro 100", preis: 100, fenster: "keins", woche: null,
    fensterText: { de: "derzeit keins für Work und Codex", en: "currently none for Work and Codex", tr: "Work ve Codex için şu anda yok" },
    wocheText: { de: "Wochenlimit für GPT-6 Pro im Chat, Zahl nicht veröffentlicht", en: "weekly limit for GPT-6 Pro in chat, number not published", tr: "sohbette GPT-6 Pro için haftalık sınır, sayı yayımlanmadı" }
  },
  {
    anbieter: "openai", id: "pro200", name: "Pro 200", preis: 200, fenster: "keins", woche: null,
    fensterText: { de: "derzeit keins für Work und Codex", en: "currently none for Work and Codex", tr: "Work ve Codex için şu anda yok" },
    wocheText: { de: "Wochenlimit für GPT-6 Pro im Chat, Zahl nicht veröffentlicht", en: "weekly limit for GPT-6 Pro in chat, number not published", tr: "sohbette GPT-6 Pro için haftalık sınır, sayı yayımlanmadı" }
  },
  {
    anbieter: "openai", id: "pro500", name: "Pro 500", preis: 500, fenster: "keins", woche: null,
    fensterText: { de: "derzeit keins für Work und Codex", en: "currently none for Work and Codex", tr: "Work ve Codex için şu anda yok" },
    wocheText: { de: "Wochenlimit für GPT-6 Pro im Chat, Zahl nicht veröffentlicht", en: "weekly limit for GPT-6 Pro in chat, number not published", tr: "sohbette GPT-6 Pro için haftalık sınır, sayı yayımlanmadı" },
    hinweis: { de: "einzige Stufe mit Ultrafast", en: "the only tier with Ultrafast", tr: "Ultrafast içeren tek kademe" }
  }
];

// Gegenüberstellung: dieselbe Frage, je Anbieter eine Antwort.
window.KI_ABO_VERGLEICH = [
  {
    frage: { de: "Was zählt zusammen?", en: "What counts together?", tr: "Neler birlikte sayılır?" },
    antworten: {
      anthropic: { de: "Chat im Browser, Desktop-App und Claude Code zählen in dasselbe Limit.", en: "Chat in the browser, the desktop app and Claude Code count toward the same limit.", tr: "Tarayıcıdaki sohbet, masaüstü uygulaması ve Claude Code aynı sınıra sayılır." },
      openai: { de: "Getrennt: Die Nachrichtenlimits im Chat sind unabhängig vom Kontingent für Work und Codex.", en: "Separate: message limits in chat are independent of the allowance for Work and Codex.", tr: "Ayrı: sohbetteki mesaj sınırları, Work ve Codex kotasından bağımsızdır." }
    }
  },
  {
    frage: { de: "Gibt es ein 5-Stunden-Fenster?", en: "Is there a five-hour window?", tr: "5 saatlik pencere var mı?" },
    antworten: {
      anthropic: { de: "Ja bei Free, Pro und Max. Bei Ultra entfällt es, sobald das Konto bestätigt ist.", en: "Yes on Free, Pro and Max. On Ultra it no longer applies once the account is verified.", tr: "Free, Pro ve Max'te var. Ultra'da hesap doğrulanınca kalkar." },
      openai: { de: "Bei Plus ja (Codex). Bei Pro 100, Pro 200 und Pro 500 derzeit nicht.", en: "Yes on Plus (Codex). Currently not on Pro 100, Pro 200 and Pro 500.", tr: "Plus'ta var (Codex). Pro 100, Pro 200 ve Pro 500'de şu anda yok." }
    }
  },
  {
    frage: { de: "Gibt es ein Wochenlimit?", en: "Is there a weekly limit?", tr: "Haftalık sınır var mı?" },
    antworten: {
      anthropic: { de: "Ja, über alle Modelle; bei Max und Ultra zusätzlich ein eigenes für Fable. Geleert wird zu einem festen Zeitpunkt je Konto.", en: "Yes, across all models; on Max and Ultra there is an additional one for Fable. It resets at a fixed time per account.", tr: "Var, tüm modeller için; Max ve Ultra'da ayrıca Fable için ayrı bir sınır bulunur. Hesaba özel sabit bir zamanda sıfırlanır." },
      openai: { de: "Für GPT-6 Pro im Chat ja. Für Work und Codex können Wochenlimits zusätzlich gelten.", en: "Yes for GPT-6 Pro in chat. Weekly limits may also apply to Work and Codex.", tr: "Sohbette GPT-6 Pro için var. Work ve Codex için de haftalık sınırlar geçerli olabilir." }
    }
  },
  {
    frage: { de: "Welche Zahlen sind veröffentlicht?", en: "Which numbers are published?", tr: "Hangi sayılar yayımlandı?" },
    antworten: {
      anthropic: { de: "Nur Verhältnisse: Max hat das 5-Fache von Pro, Ultra das 10-Fache je Woche. Absolute Mengen nennt Anthropic nicht.", en: "Only ratios: Max has 5 times Pro, Ultra 10 times Pro per week. Anthropic does not state absolute amounts.", tr: "Yalnızca oranlar: Max, Pro'nun 5 katı; Ultra haftada Pro'nun 10 katı. Anthropic mutlak miktar belirtmez." },
      openai: { de: "Für Plus Schätzwerte je 5 Stunden, etwa 15 bis 150 lokale Nachrichten mit GPT-6 Sol. Für die Pro-Stufen keine festen Zahlen.", en: "For Plus, estimates per 5 hours, for example 15 to 150 local messages with GPT-6 Sol. No fixed numbers for the Pro tiers.", tr: "Plus için 5 saatlik tahminler, örneğin GPT-6 Sol ile 15 ila 150 yerel mesaj. Pro kademeleri için sabit sayı yok." }
    }
  },
  {
    frage: { de: "Was geht, wenn die Grenze erreicht ist?", en: "What can you do once the limit is reached?", tr: "Sınıra ulaşılınca ne yapılabilir?" },
    antworten: {
      anthropic: { de: "Warten oder Usage Credits einschalten: Dann läuft es zu API-Preisen weiter, bis zu einer selbst gesetzten Monatsgrenze.", en: "Wait, or enable usage credits: usage then continues at API rates, up to a monthly cap you set yourself.", tr: "Beklemek ya da Usage Credits'i açmak: kullanım, kendi belirlediğin aylık sınıra kadar API fiyatlarıyla sürer." },
      openai: { de: "Warten oder Credits kaufen. Sie verlängern die Nutzung von Codex und weiteren Funktionen; der Verbrauch hängt vom Modell ab.", en: "Wait, or buy credits. They extend the use of Codex and other features; consumption depends on the model.", tr: "Beklemek ya da kredi satın almak. Krediler Codex'in ve başka özelliklerin kullanımını uzatır; tüketim modele bağlıdır." }
    }
  }
];

// Quellen der Wissensseite. „fuer“ nennt die Bausteine, in denen die Quelle erscheint.
window.KI_ABO_QUELLEN = [
  { anbieter: "anthropic", fuer: ["limits"], name: "Plans & pricing", url: "https://claude.com/pricing" },
  { anbieter: "anthropic", fuer: ["limits"], name: "What is the Max plan?", url: "https://support.claude.com/en/articles/11049741-what-is-the-max-plan" },
  { anbieter: "anthropic", fuer: ["limits"], name: "What is the Ultra plan?", url: "https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan" },
  { anbieter: "anthropic", fuer: ["limits"], name: "How do usage and length limits work?", url: "https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work" },
  { anbieter: "anthropic", fuer: ["limits", "abrechnung"], name: "Manage usage credits for paid Claude plans", url: "https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans" },
  { anbieter: "anthropic", fuer: ["abrechnung"], name: "Use Claude Code with your Pro, Max, or Ultra plan", url: "https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan" },
  { anbieter: "anthropic", fuer: ["abrechnung", "api"], name: "Pricing (API)", url: "https://platform.claude.com/docs/en/about-claude/pricing" },
  { anbieter: "anthropic", fuer: ["api"], name: "Rate limits (API)", url: "https://platform.claude.com/docs/en/api/rate-limits" },
  { anbieter: "openai", fuer: ["limits"], name: "About ChatGPT Pro tiers", url: "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers" },
  { anbieter: "openai", fuer: ["limits", "abrechnung"], name: "Pricing (Codex)", url: "https://learn.chatgpt.com/docs/pricing" }
];
