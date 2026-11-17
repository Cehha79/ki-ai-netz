// Die acht Bereiche der Website mit ihren Bausteinen, in Deutsch, Englisch und Türkisch.
// Aus dieser einen Liste entstehen die Navigation, die Seitentitel und die Übersichten.
// stand: "geplant" oder "fertig". Die Bausteine der Technikseite tragen zusätzlich eine id für ihr Schaubild.
window.KI_BEREICHE = [
  {
    id: "start",
    datei: "index.html",
    nr: "01",
    name: { de: "Start", en: "Start", tr: "Başlangıç" },
    titel: { de: "Die KI-Welt", en: "The AI world", tr: "Yapay zekâ dünyası" },
    akzent: { de: "auf einen Blick", en: "at a glance", tr: "tek bakışta" },
    text: {
      de: "Anbieter, Modelle, Geld und Technik als ein zusammenhängendes Lagebild. Jede Angabe mit Quelle und Datum.",
      en: "Providers, models, money and technology as one connected picture. Every figure with source and date.",
      tr: "Sağlayıcılar, modeller, para ve teknoloji tek bir bütün resimde. Her bilgi kaynağı ve tarihiyle."
    },
    bausteine: [
      {
        name: { de: "Schichtenplan", en: "Layer plan", tr: "Katman planı" },
        text: { de: "Alle Anbieter in festen Ebenen, Verbindungen als Leitungen", en: "All providers in fixed layers, connections as lines", tr: "Tüm sağlayıcılar sabit katmanlarda, bağlantılar hat olarak" },
        stand: "fertig"
      },
      {
        name: { de: "Lage", en: "Status", tr: "Durum" },
        text: { de: "Kennzahlen nach Gruppe und Land", en: "Key figures by group and country", tr: "Gruba ve ülkeye göre temel sayılar" },
        stand: "fertig"
      },
      {
        name: { de: "Meldungsband", en: "News ticker", tr: "Haber bandı" },
        text: { de: "Die letzten Meldungen als laufende Zeile", en: "The latest news as a running line", tr: "Son haberler kayan satır olarak" },
        stand: "fertig"
      },
      {
        name: { de: "Suche", en: "Search", tr: "Arama" },
        text: { de: "Anbieter, Modell oder Land finden", en: "Find a provider, model or country", tr: "Sağlayıcı, model veya ülke bul" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "anbieter",
    datei: "anbieter.html",
    nr: "02",
    name: { de: "Anbieter", en: "Providers", tr: "Sağlayıcılar" },
    titel: { de: "Anbieter", en: "Providers", tr: "Sağlayıcılar" },
    akzent: { de: "und ihre Verbindungen", en: "and their connections", tr: "ve bağlantıları" },
    text: {
      de: "Wer die Modelle baut, wer Chips und Rechenzentren liefert und wie die Firmen zusammenhängen.",
      en: "Who builds the models, who supplies chips and data centres, and how the companies are connected.",
      tr: "Modelleri kim geliştiriyor, çipleri ve veri merkezlerini kim sağlıyor, şirketler birbirine nasıl bağlı."
    },
    bausteine: [
      {
        name: { de: "Verzeichnis", en: "Directory", tr: "Dizin" },
        text: { de: "Alle Anbieter in fünf Gruppen", en: "All providers in five groups", tr: "Beş grupta tüm sağlayıcılar" },
        stand: "fertig"
      },
      {
        name: { de: "Profil", en: "Profile", tr: "Profil" },
        text: { de: "Kurzporträt, Herkunft, Gründung, offizielle Links", en: "Short portrait, origin, founding year, official links", tr: "Kısa tanıtım, köken, kuruluş yılı, resmî bağlantılar" },
        stand: "fertig"
      },
      {
        name: { de: "Modelle des Anbieters", en: "The provider's models", tr: "Sağlayıcının modelleri" },
        text: { de: "Aktuelle Modelle mit Preis und Kontextfenster", en: "Current models with price and context window", tr: "Güncel modeller, fiyat ve bağlam penceresiyle" },
        stand: "fertig"
      },
      {
        name: { de: "Verbindungen", en: "Connections", tr: "Bağlantılar" },
        text: { de: "Geld, Rechenleistung und Übernahmen mit Quelle", en: "Money, computing power and acquisitions with source", tr: "Para, işlem gücü ve satın almalar, kaynağıyla" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "modelle",
    datei: "modelle.html",
    nr: "03",
    name: { de: "Modelle", en: "Models", tr: "Modeller" },
    titel: { de: "Modelle", en: "Models", tr: "Modeller" },
    akzent: { de: "im Vergleich", en: "compared", tr: "karşılaştırmalı" },
    text: {
      de: "Welche Modelle es gibt, was sie kosten und was sie können.",
      en: "Which models exist, what they cost and what they can do.",
      tr: "Hangi modeller var, ne kadar tutuyor ve neler yapabiliyor."
    },
    bausteine: [
      {
        name: { de: "Katalog", en: "Catalogue", tr: "Katalog" },
        text: { de: "Alle Modelle mit Filter nach Anbieter, Art und Status", en: "All models, filtered by provider, type and status", tr: "Tüm modeller; sağlayıcı, tür ve duruma göre filtre" },
        stand: "fertig"
      },
      {
        name: { de: "Direktvergleich", en: "Side-by-side comparison", tr: "Yan yana karşılaştırma" },
        text: { de: "Mehrere Modelle nebeneinander", en: "Several models side by side", tr: "Birkaç model yan yana" },
        stand: "fertig"
      },
      {
        name: { de: "Preis und Leistung", en: "Price and performance", tr: "Fiyat ve performans" },
        text: { de: "Diagramm aus Preis und Kontextfenster", en: "Chart of price and context window", tr: "Fiyat ve bağlam penceresi grafiği" },
        stand: "fertig"
      },
      {
        name: { de: "Zeitachse", en: "Timeline", tr: "Zaman çizelgesi" },
        text: { de: "Veröffentlichungen in zeitlicher Folge", en: "Releases in chronological order", tr: "Yayınlar zaman sırasıyla" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "technik",
    datei: "technik.html",
    nr: "04",
    name: { de: "Technik", en: "Technology", tr: "Teknoloji" },
    titel: { de: "Technik", en: "Technology", tr: "Teknoloji" },
    akzent: { de: "zum Anfassen", en: "hands-on", tr: "uygulamalı" },
    text: {
      de: "Wie ein Sprachmodell arbeitet, gezeigt an Schaubildern, die du selbst bedienst.",
      en: "How a language model works, shown in diagrams you operate yourself.",
      tr: "Bir dil modelinin nasıl çalıştığı, kendi kullandığın şemalarla."
    },
    bausteine: [
      {
        id: "token",
        name: { de: "Token", en: "Tokens", tr: "Token" },
        text: { de: "Wie Text in Bausteine zerlegt wird", en: "How text is split into pieces", tr: "Metin nasıl parçalara ayrılır" },
        stand: "fertig"
      },
      {
        id: "kontext",
        name: { de: "Kontextfenster", en: "Context window", tr: "Bağlam penceresi" },
        text: { de: "Wie viel ein Modell auf einmal im Blick hat", en: "How much a model can take in at once", tr: "Bir model aynı anda ne kadarını görebilir" },
        stand: "fertig"
      },
      {
        id: "attention",
        name: { de: "Attention", en: "Attention", tr: "ATTENTION (dikkat)" },
        text: { de: "Wie ein Modell Wörter zueinander gewichtet", en: "How a model weighs words against each other", tr: "Bir model kelimeleri birbirine göre nasıl ağırlıklandırır" },
        stand: "fertig"
      },
      {
        id: "diffusion",
        name: { de: "Diffusion", en: "Diffusion", tr: "Difüzyon" },
        text: { de: "Wie aus Rauschen ein Bild wird", en: "How noise turns into an image", tr: "Gürültüden nasıl görüntü oluşur" },
        stand: "fertig"
      },
      {
        id: "embeddings",
        name: { de: "Embeddings", en: "Embeddings", tr: "EMBEDDING" },
        text: { de: "Wie Bedeutung zu Zahlen wird", en: "How meaning becomes numbers", tr: "Anlam nasıl sayılara dönüşür" },
        stand: "fertig"
      },
      {
        id: "rag",
        name: { de: "RAG", en: "RAG", tr: "RAG" },
        text: { de: "Wie ein Modell vor der Antwort in Dokumenten nachschlägt", en: "How a model looks things up in documents before answering", tr: "Bir model yanıt vermeden önce belgelere nasıl bakar" },
        stand: "fertig"
      },
      {
        id: "agenten",
        name: { de: "Agenten und Werkzeuge", en: "Agents and tools", tr: "Ajanlar ve araçlar" },
        text: { de: "Wie ein Modell in Schritten arbeitet und Programme aufruft", en: "How a model works in steps and calls programs", tr: "Bir model nasıl adım adım çalışır ve programları çağırır" },
        stand: "fertig"
      },
      {
        id: "mcp",
        name: { de: "MCP", en: "MCP", tr: "MCP" },
        text: { de: "Wie Modelle über eine gemeinsame Schnittstelle an Werkzeuge kommen", en: "How models reach tools through a shared interface", tr: "Modeller ortak bir arayüzle araçlara nasıl ulaşır" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "wissen",
    datei: "wissen.html",
    nr: "05",
    name: { de: "Wissen", en: "Knowledge", tr: "Bilgi" },
    titel: { de: "Wissen", en: "Knowledge", tr: "Bilgi" },
    akzent: { de: "für die Praxis", en: "for practice", tr: "pratik için" },
    text: {
      de: "Was Abos und Schnittstellen kosten, wo die Grenzen liegen und wie abgerechnet wird.",
      en: "What subscriptions and APIs cost, where the limits are and how billing works.",
      tr: "Abonelikler ve API'ler ne kadar tutar, sınırlar nerede ve faturalama nasıl işler."
    },
    bausteine: [
      {
        id: "limits",
        name: { de: "Limits", en: "Limits", tr: "Limitler" },
        text: { de: "Nutzungsgrenzen der Abos verständlich erklärt", en: "Subscription usage limits explained clearly", tr: "Abonelik kullanım sınırları anlaşılır biçimde" },
        stand: "fertig"
      },
      {
        id: "abrechnung",
        name: { de: "Abrechnung", en: "Billing", tr: "Faturalama" },
        text: { de: "Abo und API als getrennte Töpfe", en: "Subscription and API as separate budgets", tr: "Abonelik ve API ayrı bütçeler olarak" },
        stand: "fertig"
      },
      {
        id: "api",
        name: { de: "API", en: "API", tr: "API" },
        text: { de: "Schlüssel, Aufruf und Kosten je Token", en: "Keys, calls and cost per token", tr: "Anahtar, çağrı ve token başına maliyet" },
        stand: "fertig"
      },
      {
        id: "kostenrechner",
        name: { de: "Kostenrechner", en: "Cost calculator", tr: "Maliyet hesaplayıcı" },
        text: { de: "Was eine Aufgabe bei welchem Modell kostet", en: "What a task costs with which model", tr: "Bir görev hangi modelde ne kadar tutar" },
        stand: "fertig"
      },
      {
        id: "glossar",
        name: { de: "Glossar", en: "Glossary", tr: "Sözlük" },
        text: { de: "Fachbegriffe kurz erklärt", en: "Technical terms explained briefly", tr: "Teknik terimler kısaca" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "finanzen",
    datei: "finanzen.html",
    nr: "06",
    name: { de: "Finanzen", en: "Finance", tr: "Finans" },
    titel: { de: "Finanzen", en: "Finance", tr: "Finans" },
    akzent: { de: "mit Quelle und Datum", en: "with source and date", tr: "kaynak ve tarihle" },
    text: {
      de: "Börsengänge, Bewertungen und Geldgeber der KI-Anbieter. Nur Tatsachen, keine Anlageberatung.",
      en: "IPOs, valuations and investors of AI providers. Facts only, no investment advice.",
      tr: "Yapay zekâ sağlayıcılarının halka arzları, değerlemeleri ve yatırımcıları. Yalnızca olgular, yatırım tavsiyesi değildir."
    },
    bausteine: [
      {
        id: "boerse",
        name: { de: "Börsengänge", en: "IPOs", tr: "Halka arzlar" },
        text: { de: "Wer an der Börse ist und wer es plant", en: "Who is listed and who plans to be", tr: "Kim borsada, kim planlıyor" },
        stand: "fertig"
      },
      {
        id: "bewertungen",
        name: { de: "Bewertungen", en: "Valuations", tr: "Değerlemeler" },
        text: { de: "Finanzierungsrunden und Firmenwerte", en: "Funding rounds and company values", tr: "Yatırım turları ve şirket değerleri" },
        stand: "fertig"
      },
      {
        id: "geldgeber",
        name: { de: "Geldgeber", en: "Investors", tr: "Yatırımcılar" },
        text: { de: "Wer in wen investiert", en: "Who invests in whom", tr: "Kim kime yatırım yapıyor" },
        stand: "fertig"
      },
      {
        id: "rechenzentren",
        name: { de: "Rechenzentren", en: "Data centres", tr: "Veri merkezleri" },
        text: { de: "Große Verträge und Investitionsausgaben", en: "Major contracts and capital spending", tr: "Büyük sözleşmeler ve yatırım harcamaları" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "neuigkeiten",
    datei: "neuigkeiten.html",
    nr: "07",
    name: { de: "Neuigkeiten", en: "News", tr: "Haberler" },
    titel: { de: "Neuigkeiten", en: "News", tr: "Haberler" },
    akzent: { de: "mit Quelle", en: "with sources", tr: "kaynağıyla" },
    text: {
      de: "Was sich bei Anbietern und Modellen geändert hat, in zeitlicher Folge.",
      en: "What has changed among providers and models, in chronological order.",
      tr: "Sağlayıcılarda ve modellerde neler değişti, zaman sırasıyla."
    },
    bausteine: [
      {
        id: "zeitachse",
        name: { de: "Zeitachse", en: "Timeline", tr: "Zaman çizelgesi" },
        text: { de: "Meldungen auf einer Achse", en: "News on a timeline", tr: "Haberler bir eksen üzerinde" },
        stand: "fertig"
      },
      {
        id: "meldungen",
        name: { de: "Meldungen", en: "News items", tr: "Haber kayıtları" },
        text: { de: "Jede Meldung mit Datum und Originalquelle", en: "Every item with date and original source", tr: "Her haber tarihi ve asıl kaynağıyla" },
        stand: "fertig"
      },
      {
        id: "protokoll",
        name: { de: "Änderungsprotokoll", en: "Change log", tr: "Değişiklik günlüğü" },
        text: { de: "Was an dieser Seite geändert wurde", en: "What has changed on this site", tr: "Bu sitede neler değişti" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "methodik",
    datei: "methodik.html",
    nr: "08",
    name: { de: "Methodik", en: "Method", tr: "Yöntem" },
    titel: { de: "Methodik", en: "Method", tr: "Yöntem" },
    akzent: { de: "und Datenherkunft", en: "and data sources", tr: "ve veri kaynakları" },
    text: {
      de: "Woher die Angaben stammen, wie alt sie sind und wie sie gepflegt werden.",
      en: "Where the figures come from, how old they are and how they are maintained.",
      tr: "Bilgiler nereden geliyor, ne kadar eski ve nasıl güncelleniyor."
    },
    bausteine: [
      {
        id: "herkunft",
        name: { de: "Datenherkunft", en: "Data sources", tr: "Veri kaynakları" },
        text: { de: "Quellen je Datenart", en: "Sources per type of data", tr: "Veri türüne göre kaynaklar" },
        stand: "fertig"
      },
      {
        id: "stand",
        name: { de: "Datenstand", en: "Data status", tr: "Veri durumu" },
        text: { de: "Prüfdatum je Angabe", en: "Review date for each figure", tr: "Her bilgi için kontrol tarihi" },
        stand: "fertig"
      },
      {
        id: "pflege",
        name: { de: "Pflege", en: "Maintenance", tr: "Güncelleme" },
        text: { de: "Was wann geprüft wird", en: "What is checked and when", tr: "Ne, ne zaman kontrol edilir" },
        stand: "fertig"
      },
      {
        id: "grenzen",
        name: { de: "Grenzen", en: "Limitations", tr: "Sınırlar" },
        text: { de: "Was diese Seite nicht leistet", en: "What this site does not provide", tr: "Bu sitenin sunmadıkları" },
        stand: "fertig"
      }
    ]
  }
];

// Seiten außerhalb der acht Bereiche. Sie stehen nicht in der Seitenleiste und haben keine
// Bausteine; Titel, Akzent und Vorspann sind aufgebaut wie bei einem Bereich.
window.KI_NEBENSEITEN = [
  {
    id: "datenschutz",
    datei: "datenschutz.html",
    nr: "",
    name: { de: "Datenschutz", en: "Privacy", tr: "Gizlilik" },
    titel: { de: "Datenschutz", en: "Privacy", tr: "Gizlilik" },
    akzent: { de: "dieser Website", en: "on this website", tr: "bu sitede" },
    text: {
      de: "Datenschutzhinweise für die Website KI/AI-Netz, ein Projekt von MikaTec.",
      en: "Privacy notice for the KI/AI-Netz website, a project by MikaTec.",
      tr: "MikaTec projesi olan KI/AI-Netz sitesinin gizlilik bildirimi."
    },
    bausteine: []
  }
];
