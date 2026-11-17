// Anbieter der KI-Welt: Gruppen, Länder und je Anbieter Stammdaten, Kurzporträt und Spitzenmodell.
// Jede Angabe wurde am Datum in geprueftAm an den genannten Quellen geprüft.
// offen: Felder, die sich nicht an einer verlässlichen Quelle bestätigen ließen.
// datumBelegt: false heißt, das Datum stammt nur aus einer Sekundärquelle.
window.KI_DATENSTAND = {
  anbieter: "2026-11-17"
};

window.KI_LAENDER = {
  US: {
    de: "USA",
    en: "United States",
    tr: "ABD"
  },
  CN: {
    de: "China",
    en: "China",
    tr: "Çin"
  },
  FR: {
    de: "Frankreich",
    en: "France",
    tr: "Fransa"
  },
  CA: {
    de: "Kanada",
    en: "Canada",
    tr: "Kanada"
  },
  IL: {
    de: "Israel",
    en: "Israel",
    tr: "İsrail"
  },
  DE: {
    de: "Deutschland",
    en: "Germany",
    tr: "Almanya"
  },
  GB: {
    de: "Vereinigtes Königreich",
    en: "United Kingdom",
    tr: "Birleşik Krallık"
  }
};

window.KI_GRUPPEN = [
  {
    id: "spitze",
    nr: "E1",
    name: {
      de: "Spitzengruppe",
      en: "Leading group",
      tr: "Öncü grup"
    },
    text: {
      de: "Anbieter mit den leistungsstärksten Modellen und der größten Verbreitung",
      en: "Providers with the most capable models and the widest reach",
      tr: "En yetenekli modellere ve en geniş kullanıma sahip sağlayıcılar"
    }
  },
  {
    id: "weitere",
    nr: "E2",
    name: {
      de: "Wichtige weitere",
      en: "Other major providers",
      tr: "Diğer önemli sağlayıcılar"
    },
    text: {
      de: "Große Modellanbieter und Konzerne mit eigenen Modellen",
      en: "Large model providers and corporations with their own models",
      tr: "Kendi modelleri olan büyük model sağlayıcıları ve şirketler"
    }
  },
  {
    id: "labore",
    nr: "E3",
    name: {
      de: "Neue Labore",
      en: "New labs",
      tr: "Yeni laboratuvarlar"
    },
    text: {
      de: "Junge Firmen mit ersten eigenen Modellen",
      en: "Young companies with their first models",
      tr: "İlk modellerini çıkaran genç şirketler"
    }
  },
  {
    id: "medien",
    nr: "E4",
    name: {
      de: "Bild, Video, Audio",
      en: "Image, video, audio",
      tr: "Görüntü, video, ses"
    },
    text: {
      de: "Spezialisten für Bilder, Videos, Sprache und Musik",
      en: "Specialists in images, video, speech and music",
      tr: "Görüntü, video, konuşma ve müzik uzmanları"
    }
  },
  {
    id: "chips",
    nr: "E5",
    name: {
      de: "Chips und Rechenzentren",
      en: "Chips and data centres",
      tr: "Çipler ve veri merkezleri"
    },
    text: {
      de: "Hersteller der Chips und Betreiber der Rechenzentren",
      en: "Makers of the chips and operators of the data centres",
      tr: "Çip üreticileri ve veri merkezi işletmecileri"
    }
  }
];

window.KI_ANBIETER = [
  {
    id: "openai",
    name: "OpenAI",
    kurz: "OpenAI",
    gruppe: "spitze",
    land: "US",
    sitz: "San Francisco",
    gruendung: 2015,
    web: "https://openai.com",
    logo: "openai.svg",
    produkt: "ChatGPT",
    status: "unveraendert",
    portraet: {
      de: "US-Unternehmen hinter ChatGPT und der GPT-Modellreihe. Entwickelt Sprach-, Bild- und Audiomodelle und bietet sie über ChatGPT und eine Programmierschnittstelle (API) an.",
      en: "US company behind ChatGPT and the GPT model series. It develops language, image and audio models and offers them through ChatGPT and an API.",
      tr: "ChatGPT'nin ve GPT model serisinin arkasındaki ABD şirketi. Dil, görüntü ve ses modelleri geliştirir ve bunları ChatGPT ile bir API üzerinden sunar."
    },
    spitzenmodell: {
      name: "GPT-6.2 Astra",
      art: "multi",
      datum: "2026-11-17",
      datumBelegt: true,
      quelle: {
        name: "OpenAI Developers – Changelog (Eintrag vom 17.11.2026) und Modellübersicht",
        url: "https://developers.openai.com/api/docs/changelog"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – OpenAI (Sitz, Gründung 08.12.2015)",
        url: "https://en.wikipedia.org/wiki/OpenAI"
      },
      {
        name: "OpenAI Developers – Models",
        url: "https://developers.openai.com/api/docs/models"
      },
      {
        name: "OpenAI Developers – GPT-6.2 Astra (Eingabearten Text und Bild)",
        url: "https://developers.openai.com/api/docs/models/gpt-6.2-astra"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "google",
    name: "Google",
    kurz: "Google",
    gruppe: "spitze",
    land: "US",
    sitz: "Mountain View",
    gruendung: 1998,
    web: "https://deepmind.google",
    logo: "google.svg",
    produkt: "Gemini",
    status: "unveraendert",
    portraet: {
      de: "US-Konzern aus Mountain View. Seine Forschungssparte Google DeepMind mit Sitz in London entwickelt die Gemini-Modelle und ist für AlphaGo und AlphaFold bekannt.",
      en: "US corporation based in Mountain View. Its research division Google DeepMind, headquartered in London, develops the Gemini models and is known for AlphaGo and AlphaFold.",
      tr: "Mountain View merkezli ABD şirketi. Londra merkezli araştırma birimi Google DeepMind, Gemini modellerini geliştirir; AlphaGo ve AlphaFold ile tanınır."
    },
    spitzenmodell: {
      name: "Gemini 4 Carbon",
      art: "multi",
      datum: "2026-11-10",
      datumBelegt: true,
      quelle: {
        name: "Gemini API – Release Notes (Eintrag vom 10.11.2026, allgemein verfügbar)",
        url: "https://aistudio.google.com/docs/changelog"
      }
    },
    quellen: [
      {
        name: "Wikipedia (en): Google (Sitz und Gründungsjahr)",
        url: "https://en.wikipedia.org/wiki/Google"
      },
      {
        name: "Wikipedia (EN) – Google DeepMind (Sitz London, Gründung 15.11.2010)",
        url: "https://en.wikipedia.org/wiki/Google_DeepMind"
      },
      {
        name: "Gemini API – Models",
        url: "https://aistudio.google.com/docs/models"
      },
      {
        name: "Gemini API – Gemini 4 Carbon (Eingabearten)",
        url: "https://aistudio.google.com/docs/models/gemini-4-carbon"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "anthropic",
    name: "Anthropic",
    kurz: "Anthropic",
    gruppe: "spitze",
    land: "US",
    sitz: "San Francisco",
    gruendung: 2021,
    web: "https://www.anthropic.com",
    logo: "anthropic.png",
    produkt: "Claude",
    status: "unveraendert",
    portraet: {
      de: "US-Unternehmen für KI-Sicherheit und -Forschung, das die Claude-Modelle entwickelt. Bekannt für den Assistenten Claude und den Schwerpunkt auf sicheren, steuerbaren KI-Systemen.",
      en: "US AI safety and research company that develops the Claude models. Known for the Claude assistant and its focus on safe, steerable AI systems.",
      tr: "Claude modellerini geliştiren ABD merkezli yapay zekâ güvenliği ve araştırma şirketi. Claude asistanı ve güvenli, yönlendirilebilir yapay zekâ sistemlerine odaklanmasıyla tanınır."
    },
    spitzenmodell: {
      name: "Claude Fable 5.2",
      art: "multi",
      datum: "2026-11-09",
      datumBelegt: true,
      quelle: {
        name: "Claude-Dokumentation – Modellseite Claude Fable 5.2",
        url: "https://platform.claude.com/docs/en/models/fable-5-2/overview"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – Anthropic (Sitz, Gründung 26.01.2021)",
        url: "https://en.wikipedia.org/wiki/Anthropic"
      },
      {
        name: "Anthropic – Startseite (Ankündigung vom 09.11.2026)",
        url: "https://www.anthropic.com"
      },
      {
        name: "Claude-Dokumentation – Models overview",
        url: "https://platform.claude.com/docs/en/about-claude/models/overview"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "meta",
    name: "Meta",
    kurz: "Meta",
    gruppe: "spitze",
    land: "US",
    sitz: "Menlo Park",
    gruendung: 2004,
    web: "https://ai.meta.com",
    logo: "meta.svg",
    produkt: "Meta AI",
    status: "unveraendert",
    portraet: {
      de: "US-Konzern hinter Facebook, Instagram und WhatsApp. Entwickelt die Muse-Modelle und den Assistenten Meta AI; bekannt auch für die offene Modellreihe Llama.",
      en: "US group behind Facebook, Instagram and WhatsApp. It develops the Muse models and the Meta AI assistant and is also known for the open Llama model series.",
      tr: "Facebook, Instagram ve WhatsApp'ın arkasındaki ABD şirketi. Muse modellerini ve Meta AI asistanını geliştirir; açık Llama model serisiyle de tanınır."
    },
    spitzenmodell: {
      name: "Muse Wonder",
      art: "multi",
      datum: "2026-10-12",
      datumBelegt: true,
      quelle: {
        name: "Meta Newsroom – Introducing Muse Wonder and Muse Wonder Full",
        url: "https://about.fb.com/news/2026/10/introducing-muse-wonder/"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – Meta Platforms (Sitz Menlo Park, Gründung 04.02.2004)",
        url: "https://en.wikipedia.org/wiki/Meta_Platforms"
      },
      {
        name: "Meta – Muse Wonder Model Card (Datum 12.10.2026, Eingabearten)",
        url: "https://research.meta.ai/static/muse-wonder-model-card"
      },
      {
        name: "AI at Meta – Blog",
        url: "https://ai.meta.com/blog/"
      }
    ],
    offen: [
      "produkt"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "xai",
    name: "SpaceX Super Intelligence",
    kurz: "SpaceXSI",
    gruppe: "spitze",
    land: "US",
    sitz: "Palo Alto",
    gruendung: 2023,
    web: "https://x.ai",
    logo: "xai.svg",
    produkt: "Grok",
    status: "uebernommen",
    portraet: {
      de: "KI-Sparte von SpaceX, 2023 als xAI gegründet. Entwickelt die Grok-Modelle und den gleichnamigen Assistenten, der eng mit der Plattform X verbunden ist.",
      en: "SpaceX's AI division, founded in 2023 as xAI. It develops the Grok models and the assistant of the same name, which is closely tied to the X platform.",
      tr: "SpaceX'in 2023'te xAI adıyla kurulan yapay zekâ birimi. Grok modellerini ve X platformuyla yakından bağlantılı aynı adlı asistanı geliştirir."
    },
    spitzenmodell: {
      name: "Grok 4.7",
      art: "multi",
      datum: "2026-09-21",
      datumBelegt: true,
      quelle: {
        name: "SpaceXSI – Ankündigung Grok 4.7",
        url: "https://x.ai/news/grok-4-7"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – xAI / SpaceX Super Intelligence (Sitz, Gründung 09.03.2023, Übernahme, Umbenennungen)",
        url: "https://en.wikipedia.org/wiki/XAI_(company)"
      },
      {
        name: "Entwickler-Dokumentation – Models (Grok 4.7, Bezeichnung SpaceXSI)",
        url: "https://docs.x.ai/docs/models"
      },
      {
        name: "Entwickler-Dokumentation – Grok 4.7 (Eingabearten Text und Bild)",
        url: "https://docs.x.ai/docs/models/grok-4.7"
      }
    ],
    offen: [
      "sitz"
    ],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "xAI wurde im Februar 2026 von SpaceX übernommen, trat ab Juli 2026 als SpaceXAI auf und heißt seit Oktober 2026 SpaceX Super Intelligence (SpaceXSI).",
      en: "xAI was acquired by SpaceX in February 2026, operated as SpaceXAI from July 2026 and has been called SpaceX Super Intelligence (SpaceXSI) since October 2026.",
      tr: "xAI, Şubat 2026'da SpaceX tarafından satın alındı; Temmuz 2026'dan itibaren SpaceXAI adını kullandı ve Ekim 2026'dan beri SpaceX Super Intelligence (SpaceXSI) adını taşıyor."
    }
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    kurz: "DeepSeek",
    gruppe: "weitere",
    land: "CN",
    sitz: "Hangzhou",
    gruendung: 2023,
    web: "https://www.deepseek.com",
    logo: "deepseek.png",
    produkt: "DeepSeek",
    status: "unveraendert",
    portraet: {
      de: "Chinesisches KI-Unternehmen aus Hangzhou, finanziert vom Hedgefonds High-Flyer. Bekannt für leistungsfähige, günstige Sprachmodelle mit offen veröffentlichten Gewichten.",
      en: "Chinese AI company from Hangzhou, funded by the hedge fund High-Flyer. Known for capable, low-cost language models released with open weights.",
      tr: "Hangzhou merkezli, High-Flyer adlı serbest yatırım fonunun finanse ettiği Çinli yapay zekâ şirketi. Ağırlıkları açık yayımlanan, güçlü ve düşük maliyetli dil modelleriyle tanınır."
    },
    spitzenmodell: {
      name: "DeepSeek V4.1-Flash",
      art: "multi",
      datum: "2026-09-10",
      datumBelegt: true,
      quelle: {
        name: "DeepSeek API Docs – DeepSeek-V4.1-Flash Release (10.09.2026); aktuelle Fassung V4.1-Flash-1017 vom 17.10.2026",
        url: "https://api-docs.deepseek.com/news/news260910"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – DeepSeek (Sitz Hangzhou, Gründung 17.07.2023)",
        url: "https://en.wikipedia.org/wiki/DeepSeek"
      },
      {
        name: "DeepSeek API Docs – Change Log",
        url: "https://api-docs.deepseek.com/updates"
      },
      {
        name: "DeepSeek API Docs – DeepSeek-V4.1-Flash-1017 (17.10.2026)",
        url: "https://api-docs.deepseek.com/news/news261017"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "qwen",
    name: "Alibaba (Qwen)",
    kurz: "Qwen",
    gruppe: "weitere",
    land: "CN",
    sitz: "Hangzhou",
    gruendung: 2009,
    web: "https://qwen.ai",
    logo: "qwen.png",
    produkt: "Qwen",
    status: "unveraendert",
    portraet: {
      de: "Cloud-Sparte des chinesischen Alibaba-Konzerns aus Hangzhou. Entwickelt die Qwen-Modelle (Tongyi Qianwen), von denen viele mit offenen Gewichten erscheinen, und die Qwen-App.",
      en: "Cloud division of China's Alibaba Group, based in Hangzhou. It develops the Qwen models (Tongyi Qianwen), many of them released with open weights, and the Qwen app.",
      tr: "Çinli Alibaba Grubu'nun Hangzhou merkezli bulut birimi. Birçoğu açık ağırlıklarla yayımlanan Qwen (Tongyi Qianwen) modellerini ve Qwen uygulamasını geliştirir."
    },
    spitzenmodell: {
      name: "Qwen4-Max",
      art: "multi",
      datum: "2026-11-16",
      datumBelegt: false,
      quelle: {
        name: "Alibaba Cloud Model Studio – Qwen4-Max (Modellseite; Datum laut TechNode)",
        url: "https://www.alibabacloud.com/help/en/model-studio/qwen4-max"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – Alibaba Cloud (Sitz Hangzhou, Start September 2009, Mutter Alibaba Group)",
        url: "https://en.wikipedia.org/wiki/Alibaba_Cloud"
      },
      {
        name: "Wikipedia (EN) – Qwen (Entwickler Alibaba Cloud, Qwen-App)",
        url: "https://en.wikipedia.org/wiki/Qwen"
      },
      {
        name: "TechNode – Alibaba launches Qwen4-Max (16.11.2026)",
        url: "https://technode.com/2026/11/16/alibaba-launches-qwen4-max-with-lower-api-prices-and-a-million-token-context-window/"
      },
      {
        name: "Qwen-Blog – Qwen4-Max (offizielle Ankündigung, per Abruf nicht lesbar)",
        url: "https://qwen.ai/blog?id=qwen4-max"
      }
    ],
    offen: [
      "spitzenmodell.datum",
      "gruendung"
    ],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "Das Gründungsjahr gilt für Alibaba Cloud, die Cloud-Sparte des Konzerns.",
      en: "The founding year refers to Alibaba Cloud, the group's cloud division.",
      tr: "Kuruluş yılı, grubun bulut birimi Alibaba Cloud'a aittir."
    }
  },
  {
    id: "moonshot",
    name: "Moonshot AI",
    kurz: "Moonshot",
    gruppe: "weitere",
    land: "CN",
    sitz: {
      de: "Peking",
      en: "Beijing",
      tr: "Pekin"
    },
    gruendung: 2023,
    web: "https://www.moonshot.ai",
    logo: "moonshot-ai.jpeg",
    produkt: "Kimi",
    status: "unveraendert",
    portraet: {
      de: "Chinesisches KI-Unternehmen aus Peking, gegründet 2023. Entwickelt den Assistenten Kimi und die Kimi-Modelle, die mit offenen Gewichten erscheinen und für lange Kontextfenster bekannt sind.",
      en: "Chinese AI company from Beijing, founded in 2023. It develops the Kimi assistant and the Kimi models, which are released with open weights and known for long context windows.",
      tr: "2023'te kurulan Pekin merkezli Çinli yapay zekâ şirketi. Kimi asistanını ve açık ağırlıklarla yayımlanan, uzun bağlam pencereleriyle tanınan Kimi modellerini geliştirir."
    },
    spitzenmodell: {
      name: "Kimi K3.1 Pro",
      art: "multi",
      datum: "2026-10-24",
      datumBelegt: true,
      quelle: {
        name: "Moonshot AI – Startseite (Eintrag Kimi K3.1 Pro, 24.10.2026)",
        url: "https://www.moonshot.ai"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – Moonshot AI (Sitz Peking, Gründung März 2023)",
        url: "https://en.wikipedia.org/wiki/Moonshot_AI"
      },
      {
        name: "Kimi API Platform – Kimi K3.1 Pro Quickstart (Eingabearten Text, Bild, Video)",
        url: "https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart.md"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "zai",
    name: "Z.ai (Zhipu AI)",
    kurz: "Z.ai",
    gruppe: "weitere",
    land: "CN",
    sitz: {
      de: "Peking",
      en: "Beijing",
      tr: "Pekin"
    },
    gruendung: 2019,
    web: "https://z.ai",
    logo: "zhipu-ai-z-ai.svg",
    produkt: "Z.ai",
    status: "umbenannt",
    portraet: {
      de: "Chinesisches KI-Unternehmen aus Peking, gegründet 2019. Entwickelt die GLM-Sprachmodelle, die großteils mit offenen Gewichten erscheinen, und tritt international als Z.ai auf.",
      en: "Chinese AI company from Beijing, founded in 2019. It develops the GLM language models, most of them released with open weights, and operates internationally as Z.ai.",
      tr: "2019'da kurulan Pekin merkezli Çinli yapay zekâ şirketi. Çoğu açık ağırlıklarla yayımlanan GLM dil modellerini geliştirir ve uluslararası alanda Z.ai adıyla faaliyet gösterir."
    },
    spitzenmodell: {
      name: "GLM-5.3",
      art: "text",
      datum: "2026-08-18",
      datumBelegt: true,
      quelle: {
        name: "Z.ai Developer Docs – Release Notes (Eintrag GLM-5.3, 18.08.2026)",
        url: "https://docs.z.ai/release-notes/new-released"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – Z.ai / Zhipu AI (Sitz Peking, Gründung 2019, Umbenennung, Börsengang)",
        url: "https://en.wikipedia.org/wiki/Zhipu_AI"
      },
      {
        name: "Z.ai Developer Docs – GLM-5.3 (Spitzenmodell, nur Texteingabe)",
        url: "https://docs.z.ai/guides/llm/glm-5.3"
      },
      {
        name: "Z.ai – Chat (Weiterleitung von z.ai)",
        url: "https://chat.z.ai/"
      }
    ],
    offen: [
      "statusText"
    ],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "Tritt außerhalb Chinas seit 2025 als Z.ai auf, in China weiter als Zhipu AI. Seit Januar 2026 an der Börse Hongkong notiert.",
      en: "Has operated as Z.ai outside China since 2025 and remains Zhipu AI in China. Listed on the Hong Kong stock exchange since January 2026.",
      tr: "2025'ten beri Çin dışında Z.ai adıyla, Çin'de ise Zhipu AI adıyla faaliyet gösteriyor. Ocak 2026'dan beri Hong Kong borsasında işlem görüyor."
    }
  },
  {
    id: "mistral",
    name: "Mistral AI",
    kurz: "Mistral",
    gruppe: "weitere",
    land: "FR",
    sitz: "Paris",
    gruendung: 2023,
    web: "https://mistral.ai",
    logo: "mistral.svg",
    produkt: "Mistral Vibe",
    status: "unveraendert",
    portraet: {
      de: "Französisches KI-Unternehmen aus Paris, gegründet 2023. Entwickelt Sprachmodelle, viele davon mit offenen Gewichten, sowie den Assistenten Mistral Vibe (früher Le Chat).",
      en: "French AI company from Paris, founded in 2023. It develops language models, many of them with open weights, and the assistant Mistral Vibe (formerly Le Chat).",
      tr: "2023'te kurulan Paris merkezli Fransız yapay zekâ şirketi. Birçoğu açık ağırlıklı dil modelleri ile Mistral Vibe (eski adıyla Le Chat) asistanını geliştirir."
    },
    spitzenmodell: {
      name: "Mistral Large 4",
      art: "multi",
      datum: "2026-10-06",
      datumBelegt: true,
      quelle: {
        name: "Mistral Docs – Changelog (Eintrag vom 06.10.2026, Public Preview)",
        url: "https://docs.mistral.ai/resources/changelogs"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN) – Mistral AI (Sitz Paris, Gründung 28.04.2023, Umbenennung Le Chat in Mistral Vibe)",
        url: "https://en.wikipedia.org/wiki/Mistral_AI"
      },
      {
        name: "Mistral Docs – Mistral Large 4 (Status GA, Stand 05.11.2026)",
        url: "https://docs.mistral.ai/models/mistral-large-4"
      },
      {
        name: "Mistral AI – Mistral Large 4 is now open weight",
        url: "https://mistral.ai/news/mistral-large-4-oss/"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "tencent",
    name: "Tencent",
    kurz: "Tencent",
    gruppe: "weitere",
    land: "CN",
    sitz: "Shenzhen",
    gruendung: 1998,
    web: "https://hunyuan.tencent.com",
    logo: "tencent.png",
    produkt: "Yuanbao",
    status: "unveraendert",
    portraet: {
      de: "Tencent entwickelt die Sprachmodellreihe Hy (Hunyuan) sowie Modelle für Bild, Video und 3D. Sie laufen im Assistenten Yuanbao, in weiteren Tencent-Produkten und in der Tencent Cloud; ein Teil erscheint mit offenen Gewichten.",
      en: "Tencent develops the Hy (Hunyuan) language model line as well as image, video and 3D models. They run in the Yuanbao assistant, other Tencent products and Tencent Cloud; some are released as open weights.",
      tr: "Tencent, Hy (Hunyuan) dil modeli serisini ve görüntü, video ile 3B modellerini geliştirir. Modeller Yuanbao asistanında, diğer Tencent ürünlerinde ve Tencent Cloud'da çalışır; bir kısmı açık ağırlıklı olarak yayımlanır."
    },
    spitzenmodell: {
      name: "Hy4",
      art: "multi",
      datum: "2026-11-04",
      datumBelegt: false,
      quelle: {
        name: "Tencent Hy: Hy4 (Research)",
        url: "https://hy.tencent.ai/research/hy4"
      }
    },
    quellen: [
      {
        name: "Tencent: About Us (Sitz und Gründungsjahr)",
        url: "https://www.tencent.com/en-us/about.html"
      },
      {
        name: "TechNode: Tencent launches Hy4 with vision and computer-use capabilities (04.11.2026)",
        url: "https://technode.com/2026/11/04/tencent-launches-hy4-with-vision-and-computer-use-capabilities/"
      },
      {
        name: "IT Brief UK: Tencent opens Hy4 preview (03.09.2026, nennt Yuanbao)",
        url: "https://itbrief.co.uk/story/tencent-opens-hy4-preview-in-an-open-source-ai-push"
      },
      {
        name: "Hugging Face: tencent (Hy4-preview, 28.08.2026)",
        url: "https://huggingface.co/tencent"
      }
    ],
    offen: [
      "spitzenmodell.datum",
      "spitzenmodell.quelleUrl"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "baidu",
    name: "Baidu",
    kurz: "Baidu",
    gruppe: "weitere",
    land: "CN",
    sitz: {
      de: "Peking",
      en: "Beijing",
      tr: "Pekin"
    },
    gruendung: 2000,
    web: "https://ernie.baidu.com",
    logo: "baidu.png",
    produkt: "Wenxin",
    status: "unveraendert",
    portraet: {
      de: "Baidu entwickelt die ERNIE-Modellfamilie (chinesisch Wenxin) und bietet sie über den Wenxin-Assistenten und die Cloud-Plattform Qianfan an. Bekannt ist der Konzern als Betreiber der größten Suchmaschine Chinas.",
      en: "Baidu develops the ERNIE model family (Wenxin in Chinese) and offers it through the Wenxin assistant and its Qianfan cloud platform. The company is best known as the operator of China's largest search engine.",
      tr: "Baidu, ERNIE (Çince Wenxin) model ailesini geliştirir ve bunu Wenxin asistanı ile Qianfan bulut platformu üzerinden sunar. Şirket, Çin'in en büyük arama motorunun işletmecisi olarak tanınır."
    },
    spitzenmodell: {
      name: "ERNIE 5.1",
      art: "text",
      datum: "2026-05-09",
      datumBelegt: true,
      quelle: {
        name: "Baidu ERNIE: ERNIE 5.1 Officially Released!",
        url: "https://ernie.baidu.com/research/posts/ernie-5.1-0508-release/"
      }
    },
    quellen: [
      {
        name: "Wikipedia (en): Baidu (Sitz und Gründungsdatum)",
        url: "https://en.wikipedia.org/wiki/Baidu"
      },
      {
        name: "Baidu ERNIE: Startseite mit Modellliste und Meldungen",
        url: "https://ernie.baidu.com/"
      },
      {
        name: "Baidu ERNIE: ERNIE 5.5 Flash Preview (11.11.2026)",
        url: "https://ernie.baidu.com/release/ernie-5-5-flash-preview/"
      },
      {
        name: "Baidu-Pressemitteilung vom 12.11.2026 (Abdruck bei Finviz)",
        url: "https://finviz.com/news/421825/baidu-unveils-latest-ernie-models-amid-broader-full-stack-ai-lineup-and-debuts-token-exchange-to-power-intelligent-organizations"
      }
    ],
    offen: [
      "spitzenmodell.art",
      "spitzenmodell.name"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "minimax",
    name: "MiniMax",
    kurz: "MiniMax",
    gruppe: "weitere",
    land: "CN",
    sitz: {
      de: "Shanghai",
      en: "Shanghai",
      tr: "Şanghay"
    },
    gruendung: 2021,
    web: "https://www.minimax.io",
    logo: "minimax.png",
    produkt: "Hailuo AI",
    status: "unveraendert",
    portraet: {
      de: "MiniMax entwickelt Sprachmodelle der M-Reihe sowie Modelle für Video, Bild, Sprache und Musik. Das Unternehmen aus Shanghai ist seit Januar 2026 in Hongkong börsennotiert; bekannt sind die Apps Hailuo AI und Talkie.",
      en: "MiniMax develops the M series of language models as well as models for video, image, speech and music. The Shanghai-based company has been listed in Hong Kong since January 2026 and is known for the apps Hailuo AI and Talkie.",
      tr: "MiniMax, M serisi dil modellerinin yanı sıra video, görüntü, konuşma ve müzik modelleri geliştirir. Şanghay merkezli şirket Ocak 2026'dan beri Hong Kong borsasında işlem görür; Hailuo AI ve Talkie uygulamalarıyla tanınır."
    },
    spitzenmodell: {
      name: "MiniMax M3",
      art: "multi",
      datum: "2026-06-01",
      datumBelegt: true,
      quelle: {
        name: "MiniMax Blog: MiniMax M3: Frontier Coding, 1M Context, Native Multimodality",
        url: "https://www.minimax.io/blog/minimax-m3"
      }
    },
    quellen: [
      {
        name: "Wikipedia (en): MiniMax (Sitz, Gründung, Börsengang 09.01.2026)",
        url: "https://en.wikipedia.org/wiki/MiniMax_(company)"
      },
      {
        name: "Caixin Global: MiniMax eyes Shanghai listing (01.06.2026)",
        url: "https://www.caixinglobal.com/2026-06-01/minimax-eyes-shanghai-listing-as-china-ai-firms-chase-capital-102449938.html"
      },
      {
        name: "MiniMax Blog: Übersicht der Meldungen",
        url: "https://www.minimax.io/blog"
      },
      {
        name: "MiniMax Blog: MiniMax M3.1 Flash (19.10.2026)",
        url: "https://www.minimax.io/blog/minimax-m31f"
      }
    ],
    offen: [
      "gruendung"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "bytedance",
    name: "ByteDance",
    kurz: "ByteDance",
    gruppe: "weitere",
    land: "CN",
    sitz: {
      de: "Peking",
      en: "Beijing",
      tr: "Pekin"
    },
    gruendung: 2012,
    web: "https://seed.bytedance.com/en",
    logo: "bytedance.png",
    produkt: "Doubao",
    status: "unveraendert",
    portraet: {
      de: "ByteDance entwickelt im Team Seed die Sprachmodelle Doubao Seed sowie Seedance (Video) und Seedream (Bild). Die Modelle laufen im Assistenten Doubao und in der Cloud Volcano Engine; bekannt ist der Konzern durch TikTok und Douyin.",
      en: "ByteDance's Seed team develops the Doubao Seed language models as well as Seedance (video) and Seedream (image). The models run in the Doubao assistant and on the Volcano Engine cloud; the group is known for TikTok and Douyin.",
      tr: "ByteDance'in Seed ekibi Doubao Seed dil modellerini, Seedance (video) ve Seedream (görüntü) modellerini geliştirir. Modeller Doubao asistanında ve Volcano Engine bulutunda çalışır; şirket TikTok ve Douyin ile tanınır."
    },
    spitzenmodell: {
      name: "Doubao Seed 2.1 Pro",
      art: "multi",
      datum: "2026-06-23",
      datumBelegt: true,
      quelle: {
        name: "ByteDance Seed: Seed2.1 Officially Released: Advancing AI Productivity",
        url: "https://seed.bytedance.com/blog/seed2-1-officially-released-advancing-ai-productivity"
      }
    },
    quellen: [
      {
        name: "Wikipedia (en): ByteDance (Sitz und Gründungsdatum)",
        url: "https://en.wikipedia.org/wiki/ByteDance"
      },
      {
        name: "ByteDance Seed: Modellübersicht",
        url: "https://seed.bytedance.com/en/models"
      },
      {
        name: "Doubao (Assistent für Endnutzer)",
        url: "https://www.doubao.com/"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "stepfun",
    name: "StepFun",
    kurz: "StepFun",
    gruppe: "weitere",
    land: "CN",
    sitz: {
      de: "Shanghai",
      en: "Shanghai",
      tr: "Şanghay"
    },
    gruendung: 2023,
    web: "https://www.stepfun.com",
    logo: "stepfun.svg",
    produkt: "StepFun AI",
    status: "unveraendert",
    portraet: {
      de: "StepFun aus Shanghai entwickelt die Step-Modellreihe für Text, Bild, Audio und Agenten und veröffentlicht einen Teil davon mit offenen Gewichten. 2026 stellte das Unternehmen mit dem STEPX Neo ein eigenes KI-Smartphone vor.",
      en: "Shanghai-based StepFun develops the Step series of models for text, images, audio and agents and releases some of them as open weights. In 2026 it also introduced its own AI smartphone, the STEPX Neo.",
      tr: "Şanghay merkezli StepFun; metin, görüntü, ses ve ajan görevleri için Step model serisini geliştirir ve bir kısmını açık ağırlıklı olarak yayımlar. 2026'da kendi yapay zekâ telefonu STEPX Neo'yu da tanıttı."
    },
    spitzenmodell: {
      name: "Step 5 Preview",
      art: "multi",
      datum: "2026-09-20",
      datumBelegt: false,
      quelle: {
        name: "Hugging Face (offizielles Konto stepfun-ai): Step-5-Preview",
        url: "https://huggingface.co/stepfun-ai/Step-5-Preview"
      }
    },
    quellen: [
      {
        name: "Wikipedia (en): StepFun (Sitz, Gründung 06.04.2023)",
        url: "https://en.wikipedia.org/wiki/StepFun"
      },
      {
        name: "Hugging Face: stepfun-ai (Modellliste)",
        url: "https://huggingface.co/stepfun-ai"
      },
      {
        name: "OfficeChai: StepFun releases Step 5 Preview (21.09.2026)",
        url: "https://officechai.com/ai/chinas-stepfun-releases-step-5-preview-beats-gemini-3-8-flash-on-performance-and-cost/"
      }
    ],
    offen: [
      "spitzenmodell.datum",
      "produkt"
    ],
    geprueftAm: "2026-11-17",
    logoGrund: "dunkel"
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
    kurz: "Xiaomi",
    gruppe: "weitere",
    land: "CN",
    sitz: {
      de: "Peking",
      en: "Beijing",
      tr: "Pekin"
    },
    gruendung: 2010,
    web: "https://mimo.mi.com",
    logo: "xiaomi.png",
    produkt: "Super XiaoAI",
    status: "unveraendert",
    portraet: {
      de: "Xiaomi entwickelt die MiMo-Modelle für Text, Bild, Video und Sprache und veröffentlicht einen Teil davon mit offenen Gewichten. Bekannt ist der Konzern für Smartphones, vernetzte Haushaltsgeräte und Elektroautos.",
      en: "Xiaomi develops the MiMo models for text, image, video and speech and releases some of them as open weights. The group is known for smartphones, connected home devices and electric cars.",
      tr: "Xiaomi; metin, görüntü, video ve konuşma için MiMo modellerini geliştirir ve bir kısmını açık ağırlıklı olarak yayımlar. Şirket akıllı telefonları, bağlantılı ev cihazları ve elektrikli otomobilleriyle tanınır."
    },
    spitzenmodell: {
      name: "MiMo-V2.6-Pro",
      art: "multi",
      datum: "2026-09-22",
      datumBelegt: true,
      quelle: {
        name: "Xiaomi MiMo: MiMo-V2.6: Scaling Up Reinforcement Learning for Self-Improvement",
        url: "https://mimo.mi.com/docs/en-US/news/latest/v2-6"
      }
    },
    quellen: [
      {
        name: "Wikipedia (en): Xiaomi (Sitz und Gründungsdatum)",
        url: "https://en.wikipedia.org/wiki/Xiaomi"
      },
      {
        name: "Xiaomi MiMo: Startseite mit Modellliste",
        url: "https://mimo.mi.com"
      },
      {
        name: "Xiaomi MiMo: Änderungsprotokoll der Modelle",
        url: "https://mimo.mi.com/docs/en-US/updates/model"
      }
    ],
    offen: [
      "produkt"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "cohere",
    name: "Cohere",
    kurz: "Cohere",
    gruppe: "weitere",
    land: "CA",
    sitz: "Toronto",
    gruendung: 2019,
    web: "https://cohere.com",
    logo: "cohere.png",
    produkt: "North",
    status: "unveraendert",
    portraet: {
      de: "Cohere entwickelt Sprachmodelle (Command), Embedding- und Rerank-Modelle sowie die Agentenplattform North für Unternehmen und Behörden. Schwerpunkt sind Einsätze mit Datenhoheit, etwa in der eigenen Umgebung des Kunden.",
      en: "Cohere builds language models (Command), embedding and rerank models and the North agent platform for enterprises and governments. Its focus is on deployments with data sovereignty, such as in the customer's own environment.",
      tr: "Cohere; şirketler ve kamu kurumları için dil modelleri (Command), embedding ve rerank modelleri ile North ajan platformunu geliştirir. Odak noktası, müşterinin kendi ortamı gibi veri egemenliği sağlayan kurulumlardır."
    },
    spitzenmodell: {
      name: "Command A+",
      art: "multi",
      datum: "2026-05-20",
      datumBelegt: true,
      quelle: {
        name: "Cohere Blog: Introducing Command A+",
        url: "https://cohere.com/blog/command-a-plus"
      }
    },
    quellen: [
      {
        name: "Cohere: About (Gründung 2019 in Toronto, Standorte)",
        url: "https://cohere.com/about"
      },
      {
        name: "Wikipedia (en): Cohere (Sitz, Stand der Fusion)",
        url: "https://en.wikipedia.org/wiki/Cohere"
      },
      {
        name: "The Next Web: Cohere and Aleph Alpha sign definitive agreement (16.09.2026)",
        url: "https://thenextweb.com/news/cohere-aleph-alpha-definitive-agreement-transatlantic-sovereign-ai"
      },
      {
        name: "Cohere Blog (Meldungen bis 17.11.2026, kein Vollzug gemeldet)",
        url: "https://cohere.com/blog"
      },
      {
        name: "Cohere Docs: Modellübersicht",
        url: "https://docs.cohere.com/docs/models"
      }
    ],
    offen: [
      "status"
    ],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "Der Zusammenschluss mit Aleph Alpha ist seit 16.09.2026 vereinbart, aber am 17.11.2026 noch nicht vollzogen. Das gemeinsame Unternehmen soll Cohere heißen.",
      en: "The merger with Aleph Alpha was agreed on 16 September 2026 but had not been completed as of 17 November 2026. The combined company is to be called Cohere.",
      tr: "Aleph Alpha ile birleşme 16.09.2026'da kararlaştırıldı, ancak 17.11.2026 itibarıyla tamamlanmadı. Ortak şirketin adı Cohere olacak."
    }
  },
  {
    id: "microsoft",
    name: "Microsoft",
    kurz: "Microsoft",
    gruppe: "weitere",
    land: "US",
    sitz: "Redmond",
    gruendung: 1975,
    web: "https://microsoft.ai",
    logo: "microsoft.svg",
    produkt: "Copilot",
    status: "unveraendert",
    portraet: {
      de: "Microsoft entwickelt in der Sparte Microsoft AI eigene MAI-Modelle für Text, Bild, Sprache und Code; daneben gibt es die kleinen Phi-Modelle. Bekannt ist der Konzern für den Assistenten Copilot und die Cloud-Plattform Azure.",
      en: "Microsoft's Microsoft AI division builds its own MAI models for text, image, speech and code; the company also publishes the small Phi models. It is known for the Copilot assistant and the Azure cloud platform.",
      tr: "Microsoft, Microsoft AI biriminde metin, görüntü, konuşma ve kod için kendi MAI modellerini geliştirir; ayrıca küçük Phi modellerini yayımlar. Şirket, Copilot asistanı ve Azure bulut platformuyla tanınır."
    },
    spitzenmodell: {
      name: "MAI-Thinking-1",
      art: "text",
      datum: "2026-06-02",
      datumBelegt: false,
      quelle: {
        name: "Microsoft AI: Introducing MAI Thinking 1",
        url: "https://microsoft.ai/news/introducing-mai-thinking-1/"
      }
    },
    quellen: [
      {
        name: "Microsoft: Facts About Microsoft (Sitz und Gründungsjahr)",
        url: "https://news.microsoft.com/facts-about-microsoft/"
      },
      {
        name: "Microsoft AI: Modellübersicht",
        url: "https://microsoft.ai/models/"
      },
      {
        name: "Microsoft AI: Meldungen",
        url: "https://microsoft.ai/news/"
      },
      {
        name: "Thurrott: Build 2026: Microsoft Launches First Flagship Reasoning AI Model",
        url: "https://www.thurrott.com/a-i/336960/build-2026-microsoft-launches-first-flagship-reasoning-ai-model-and-more"
      }
    ],
    offen: [
      "spitzenmodell.datum"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "amazon",
    name: "Amazon (AWS)",
    kurz: "Amazon",
    gruppe: "weitere",
    land: "US",
    sitz: "Seattle",
    gruendung: 1994,
    web: "https://aws.amazon.com/nova/",
    logo: "amazon-aws.png",
    produkt: "Alexa+",
    status: "unveraendert",
    portraet: {
      de: "Amazon entwickelt die Nova-Modelle für Text, Bild- und Videoverständnis sowie Sprache und bietet sie über den AWS-Dienst Amazon Bedrock an, der auch Modelle anderer Anbieter führt. Für Endnutzer gibt es den Assistenten Alexa+.",
      en: "Amazon develops the Nova models for text, image and video understanding and speech, offered through the AWS service Amazon Bedrock, which also hosts models from other providers. For consumers there is the Alexa+ assistant.",
      tr: "Amazon; metin, görüntü ve video anlama ile konuşma için Nova modellerini geliştirir ve bunları, başka sağlayıcıların modellerini de barındıran AWS hizmeti Amazon Bedrock üzerinden sunar. Son kullanıcılara Alexa+ asistanı sunulur."
    },
    spitzenmodell: {
      name: "Nova 2 Lite",
      art: "multi",
      datum: "2025-12-02",
      datumBelegt: true,
      quelle: {
        name: "AWS News Blog: Introducing Amazon Nova 2 Lite, a fast, cost-effective reasoning model",
        url: "https://aws.amazon.com/blogs/aws/introducing-amazon-nova-2-lite-a-fast-cost-effective-reasoning-model/"
      }
    },
    quellen: [
      {
        name: "Wikipedia (en): Amazon (Sitz und Gründungsdatum)",
        url: "https://en.wikipedia.org/wiki/Amazon_(company)"
      },
      {
        name: "AWS: Amazon Nova Modelle",
        url: "https://aws.amazon.com/nova/models/"
      },
      {
        name: "AWS Docs: Amazon-Modellkarten in Amazon Bedrock",
        url: "https://docs.aws.amazon.com/bedrock/latest/userguide/model-cards-amazon.html"
      },
      {
        name: "eWeek: Amazon Scales Back Nova AI Models as Premier Nears End of Life (30.07.2026)",
        url: "https://www.eweek.com/news/amazon-nova-ai-overhaul/"
      }
    ],
    offen: [
      "spitzenmodell.name",
      "produkt"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ibm",
    name: "IBM",
    kurz: "IBM",
    gruppe: "weitere",
    land: "US",
    sitz: "Armonk",
    gruendung: 1911,
    web: "https://www.ibm.com/granite",
    logo: "ibm.jpeg",
    produkt: "watsonx",
    status: "unveraendert",
    portraet: {
      de: "IBM entwickelt die Granite-Modelle: kompakte, quelloffene Modelle für Text, Bildverstehen und Spracherkennung unter Apache-2.0-Lizenz für den Einsatz in Unternehmen. Angeboten werden sie unter anderem über die Plattform watsonx.",
      en: "IBM develops the Granite models: compact open-source models for text, vision and speech recognition under the Apache 2.0 licence, aimed at enterprise use. They are offered through the watsonx platform, among others.",
      tr: "IBM, Granite modellerini geliştirir: kurumsal kullanım için Apache 2.0 lisanslı, açık kaynaklı, kompakt metin, görüntü anlama ve konuşma tanıma modelleri. Modeller, başka kanalların yanı sıra watsonx platformu üzerinden sunulur."
    },
    spitzenmodell: {
      name: "Granite 4.2",
      art: "text",
      datum: "2026-08-25",
      datumBelegt: true,
      quelle: {
        name: "IBM Research: Granite 4.2 brings native reasoning to enterprise agents",
        url: "https://research.ibm.com/blog/introducing-granite-4-2"
      }
    },
    quellen: [
      {
        name: "Wikipedia (en): IBM (Sitz und Gründungsdatum)",
        url: "https://en.wikipedia.org/wiki/IBM"
      },
      {
        name: "IBM: Granite (Übersicht, Verweis auf watsonx.ai)",
        url: "https://www.ibm.com/granite"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "apple",
    name: "Apple",
    kurz: "Apple",
    gruppe: "weitere",
    land: "US",
    sitz: "Cupertino",
    gruendung: 1976,
    web: "https://www.apple.com/apple-intelligence/",
    logo: "apple.png",
    produkt: "Apple Intelligence",
    status: "unveraendert",
    portraet: {
      de: "Apple baut mit Apple Intelligence KI-Funktionen in iPhone, iPad und Mac ein. Die eigenen Apple Foundation Models laufen auf dem Gerät und in Private Cloud Compute; 2026 kam der Assistent Siri AI hinzu.",
      en: "Apple builds AI features into iPhone, iPad and Mac under the name Apple Intelligence. Its own Apple Foundation Models run on device and in Private Cloud Compute; the Siri AI assistant was added in 2026.",
      tr: "Apple, Apple Intelligence adıyla iPhone, iPad ve Mac'e yapay zekâ özellikleri ekler. Kendi Apple Foundation Models modelleri cihazda ve Private Cloud Compute üzerinde çalışır; 2026'da Siri AI asistanı eklendi."
    },
    spitzenmodell: {
      name: "AFM 3 Cloud Pro",
      art: "multi",
      datum: "2026-06-08",
      datumBelegt: true,
      quelle: {
        name: "Apple Machine Learning Research: Introducing the third generation of Apple Foundation Models",
        url: "https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): Apple Inc. (Gründung 01.04.1976, Sitz Cupertino)",
        url: "https://en.wikipedia.org/wiki/Apple_Inc."
      },
      {
        name: "Apple Newsroom, 14.09.2026: Major updates for Apple's software platforms are now available",
        url: "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/"
      },
      {
        name: "Apple Newsroom, 08.06.2026: Apple introduces Siri AI",
        url: "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ai21",
    name: "AI21 Labs",
    kurz: "AI21 Labs",
    gruppe: "weitere",
    land: "IL",
    sitz: "Tel Aviv",
    gruendung: 2017,
    web: "https://www.ai21.com/",
    logo: "ai21-labs.png",
    produkt: "",
    status: "unveraendert",
    portraet: {
      de: "AI21 Labs trainiert offene Sprachmodelle auf die Aufgaben einzelner Unternehmen nach (Post-Training) und bietet ein Gateway an, das Token-Kosten von KI-Agenten senkt. Bekannt wurde sie durch die Modellreihen Jurassic und Jamba.",
      en: "AI21 Labs post-trains open language models on a company's own tasks and offers a gateway that cuts token costs for AI agents. The firm became known for its Jurassic and Jamba model families.",
      tr: "AI21 Labs, açık dil modellerini şirketlerin kendi görevlerine göre yeniden eğitir (post-training) ve yapay zekâ ajanlarının token maliyetini düşüren bir ağ geçidi sunar. Şirket, Jurassic ve Jamba model aileleriyle tanındı."
    },
    spitzenmodell: {
      name: "Jamba2 Mini",
      art: "text",
      datum: "2026-01-08",
      datumBelegt: true,
      quelle: {
        name: "AI21 Blog: Introducing Jamba2",
        url: "https://www.ai21.com/blog/introducing-jamba2/"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): AI21 Labs (Gründung November 2017, Sitz Tel Aviv)",
        url: "https://en.wikipedia.org/wiki/AI21_Labs"
      },
      {
        name: "AI21: About (Gründer, NVIDIA als Investor genannt)",
        url: "https://www.ai21.com/about/"
      },
      {
        name: "AI21: Post-Training (aktuelles Angebot)",
        url: "https://www.ai21.com/post-training/"
      },
      {
        name: "AI21: Gateway (aktuelles Angebot)",
        url: "https://www.ai21.com/gateway/"
      },
      {
        name: "Globes, 12.01.2026: AI21 Labs denies Nvidia acquisition talks",
        url: "https://en.globes.co.il/en/article-1001531815"
      }
    ],
    offen: [
      "spitzenmodell.name"
    ],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "Das Angebot hat sich geändert: Die Website führt nur noch das Nachtrainieren von Modellen und ein Gateway. Die Modellreihe Jamba steht nicht mehr im aktuellen Angebot.",
      en: "The offering has changed: the website now lists only model post-training and a gateway. The Jamba model series is no longer part of the current offering.",
      tr: "Sunulan hizmet değişti: web sitesinde artık yalnızca modellerin sonradan eğitilmesi ve bir ağ geçidi yer alıyor. Jamba model serisi güncel teklifte bulunmuyor."
    }
  },
  {
    id: "perplexity",
    name: "Perplexity",
    kurz: "Perplexity",
    gruppe: "weitere",
    land: "US",
    sitz: "San Francisco",
    gruendung: 2022,
    web: "https://www.perplexity.ai/",
    logo: "perplexity.png",
    produkt: "Perplexity",
    status: "unveraendert",
    portraet: {
      de: "Perplexity betreibt eine KI-Suchmaschine, die Fragen mit Quellenangaben beantwortet, und den Browser Comet. Die eigene Modellreihe Sonar ist auf Websuche ausgelegt; die Agent API bindet auch Modelle anderer Anbieter ein.",
      en: "Perplexity runs an AI search engine that answers questions with cited sources, and the Comet browser. Its own Sonar model line is built for web search; its Agent API also routes to models from other providers.",
      tr: "Perplexity, soruları kaynak göstererek yanıtlayan bir yapay zekâ arama motoru ve Comet tarayıcısını işletir. Kendi Sonar model serisi web araması için tasarlanmıştır; Agent API başka sağlayıcıların modellerini de kullanır."
    },
    spitzenmodell: {
      name: "Sonar Deep Research",
      art: "text",
      datum: "2025-03-07",
      datumBelegt: false,
      quelle: {
        name: "Perplexity Docs: Sonar Models",
        url: "https://docs.perplexity.ai/docs/sonar/models"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): Perplexity AI (Gründung 22.08.2022, Sitz San Francisco)",
        url: "https://en.wikipedia.org/wiki/Perplexity_AI"
      },
      {
        name: "Perplexity: Terms of Service (Perplexity AI, Inc., Anschrift San Francisco)",
        url: "https://www.perplexity.ai/hub/legal/terms-of-service"
      },
      {
        name: "Perplexity Docs: Changelog (Juli 2026: Sonar Chat Completions is now Agent API)",
        url: "https://docs.perplexity.ai/changelog"
      },
      {
        name: "OpenRouter: Perplexity Sonar Deep Research (Sekundärquelle für das Datum)",
        url: "https://openrouter.ai/perplexity/sonar-deep-research"
      }
    ],
    offen: [
      "spitzenmodell.name",
      "spitzenmodell.datum"
    ],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "Die Sonar-Schnittstelle endete am 27.09.2026 und ging in der Agent API auf. Das genannte Spitzenmodell und sein Datum sind nicht bestätigt.",
      en: "The Sonar API ended on 27 September 2026 and was merged into the Agent API. The listed top model and its date are unconfirmed.",
      tr: "Sonar arayüzü 27.09.2026'da sona erdi ve Agent API'ye dahil edildi. Belirtilen en üst model ve tarihi doğrulanmadı."
    }
  },
  {
    id: "reka",
    name: "Reka",
    kurz: "Reka",
    gruppe: "weitere",
    land: "US",
    sitz: "San Francisco",
    gruendung: 2022,
    web: "https://reka.ai/",
    logo: "reka.jpeg",
    produkt: "",
    status: "fusioniert",
    portraet: {
      de: "Reka baut multimodale Modelle und Infrastruktur für „Physical AI“, also KI für Roboter und reale Umgebungen. Bekannt ist die Firma für Modelle, die Text, Bild und Video verstehen, und für die Videoplattform Reka Vision.",
      en: "Reka builds multimodal models and infrastructure for physical AI, meaning AI for robots and real-world settings. It is known for models that understand text, images and video, and for its Reka Vision video platform.",
      tr: "Reka, robotlar ve gerçek dünya ortamları için yapay zekâ anlamına gelen “Physical AI” alanında çok kipli modeller ve altyapı geliştirir. Metin, görüntü ve videoyu anlayan modelleri ve Reka Vision video platformuyla tanınır."
    },
    spitzenmodell: {
      name: "Reka Edge",
      art: "multi",
      datum: "2026-03-11",
      datumBelegt: true,
      quelle: {
        name: "Reka News: Reka Edge: Frontier-Level Edge Intelligence for Physical AI",
        url: "https://reka.ai/news/reka-edge-frontier-level-edge-intelligence-for-physical-ai"
      }
    },
    quellen: [
      {
        name: "Reka News, 09.06.2026: Reka and Moonvalley Join Forces (Sitz San Francisco, Zusammenschluss)",
        url: "https://reka.ai/news/reka-and-moonvalley-join-forces-to-advance-models-and-infrastructure-for-physical-ai"
      },
      {
        name: "TechCrunch, 27.06.2023: Reka emerges from stealth (Sitz San Francisco, Gründer)",
        url: "https://techcrunch.com/2023/06/27/reka-emerges-from-stealth-to-build-custom-ai-models-for-the-enterprise"
      },
      {
        name: "Latent Space Wiki: Reka (Arbeit ab Ende 2022; Sekundärquelle für das Gründungsjahr)",
        url: "https://latent.space/wiki/reka-4b5ab511/"
      },
      {
        name: "Reka News, 05.10.2026: Rho-1 (Forschungsvorschau, kein fertiges Produkt)",
        url: "https://reka.ai/news/rho-1-collapsing-the-multimodal-stack"
      }
    ],
    offen: [
      "gruendung",
      "status",
      "spitzenmodell.name"
    ],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "Reka meldete am 09.06.2026 den Zusammenschluss mit dem Forschungsteam von Moonvalley. Der Name Reka bleibt; Bedingungen und Rechtsform sind nicht offengelegt.",
      en: "On 9 June 2026 Reka announced a merger with Moonvalley's research team. The name Reka remains; terms and legal structure have not been disclosed.",
      tr: "Reka, 09.06.2026'da Moonvalley'nin araştırma ekibiyle birleştiğini duyurdu. Reka adı korunuyor; koşullar ve hukuki yapı açıklanmadı."
    }
  },
  {
    id: "thinking",
    name: "Thinking Machines Lab",
    kurz: "Thinking M.",
    gruppe: "labore",
    land: "US",
    sitz: "San Francisco",
    gruendung: 2025,
    web: "https://thinkingmachines.ai/",
    logo: "thinking-machines-lab.png",
    produkt: "Tinker",
    status: "unveraendert",
    portraet: {
      de: "Thinking Machines Lab entwickelt die offenen Modelle der Reihe Inkling und die Plattform Tinker, mit der sich Modelle auf eigene Aufgaben nachtrainieren lassen. Das Labor wurde 2025 von früheren OpenAI-Führungskräften gegründet.",
      en: "Thinking Machines Lab develops the open-weights Inkling models and Tinker, a platform for fine-tuning models on your own tasks. The lab was founded in 2025 by former OpenAI leaders.",
      tr: "Thinking Machines Lab, açık ağırlıklı Inkling modellerini ve modellerin kendi görevlerinize göre ince ayarlanmasını sağlayan Tinker platformunu geliştirir. Laboratuvar 2025'te eski OpenAI yöneticileri tarafından kuruldu."
    },
    spitzenmodell: {
      name: "Inkling 2 Small",
      art: "multi",
      datum: "2026-11-05",
      datumBelegt: true,
      quelle: {
        name: "Thinking Machines Lab News: Introducing Inkling 2 Small",
        url: "https://thinkingmachines.ai/news/inkling-2-small/"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): Thinking Machines Lab (Gründung Februar 2025, Sitz San Francisco)",
        url: "https://en.wikipedia.org/wiki/Thinking_Machines_Lab"
      },
      {
        name: "Thinking Machines Lab: News (Übersicht mit Datumsangaben)",
        url: "https://thinkingmachines.ai/news/"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "reflection",
    name: "Reflection AI",
    kurz: "Reflection",
    gruppe: "labore",
    land: "US",
    sitz: "New York",
    gruendung: 2024,
    web: "https://reflection.ai/",
    logo: "reflection-ai.png",
    produkt: "",
    status: "unveraendert",
    portraet: {
      de: "Reflection AI entwickelt offene Sprachmodelle für Programmierung, logisches Schließen und Agenten. Das erste Modell Beam mit 501 Milliarden Parametern erschien im Oktober 2026 mit offenen Gewichten unter Apache-2.0-Lizenz.",
      en: "Reflection AI develops open-weight language models for coding, reasoning and agents. Its first model, Beam, with 501 billion parameters, was released in October 2026 with open weights under the Apache 2.0 license.",
      tr: "Reflection AI, kodlama, akıl yürütme ve ajanlar için açık ağırlıklı dil modelleri geliştirir. 501 milyar parametreli ilk modeli Beam, Ekim 2026'da Apache 2.0 lisansıyla açık ağırlıklı olarak yayımlandı."
    },
    spitzenmodell: {
      name: "Beam",
      art: "text",
      datum: "2026-10-16",
      datumBelegt: true,
      quelle: {
        name: "Reflection AI Blog: Beam is available",
        url: "https://reflection.ai/blog/beam-is-available"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): Reflection AI (Gründung 2024, Sitz New York City)",
        url: "https://en.wikipedia.org/wiki/Reflection_AI"
      },
      {
        name: "Reflection AI Blog, 05.10.2026: Introducing Beam (Ankündigung, Frühzugang)",
        url: "https://reflection.ai/blog/introducing-beam"
      },
      {
        name: "Reflection AI: Beam Model Card (Ein- und Ausgabe nur Text)",
        url: "https://reflection.ai/beam-model-card"
      }
    ],
    offen: [
      "sitz"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "cursor",
    name: "Cursor",
    kurz: "Cursor",
    gruppe: "labore",
    land: "US",
    sitz: "San Francisco",
    gruendung: 2022,
    web: "https://cursor.com/",
    logo: "cursor.png",
    produkt: "Cursor",
    status: "uebernommen",
    portraet: {
      de: "Cursor ist ein KI-Code-Editor, in dem Agenten Programmieraufgaben übernehmen. Der Hersteller Anysphere trainiert dafür eigene Modelle der Reihe Composer und gehört seit August 2026 zu SpaceX.",
      en: "Cursor is an AI code editor in which agents carry out programming tasks. Its maker, Anysphere, trains its own Composer models for it and has been part of SpaceX since August 2026.",
      tr: "Cursor, ajanların programlama görevlerini üstlendiği bir yapay zekâ kod düzenleyicisidir. Üreticisi Anysphere bunun için kendi Composer modellerini eğitir ve Ağustos 2026'dan beri SpaceX'e bağlıdır."
    },
    spitzenmodell: {
      name: "Composer 2.5",
      art: "text",
      datum: "2026-05-18",
      datumBelegt: true,
      quelle: {
        name: "Cursor Blog: Composer 2.5",
        url: "https://cursor.com/blog/composer-2-5"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): Cursor (code editor) (Anysphere, Inc., Gründung 2022, Sitz San Francisco)",
        url: "https://en.wikipedia.org/wiki/Cursor_(code_editor)"
      },
      {
        name: "Cursor Blog, 14.08.2026: Cursor is now a part of SpaceX",
        url: "https://cursor.com/blog/joining-spacex"
      },
      {
        name: "Cursor Docs: Models (Composer 2.5 als einziges eigenes Modell gelistet)",
        url: "https://cursor.com/docs/models"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "SpaceX hat die Übernahme von Anysphere, dem Unternehmen hinter Cursor, am 14.08.2026 abgeschlossen. Cursor wird als Produkt weitergeführt.",
      en: "SpaceX completed its acquisition of Anysphere, the company behind Cursor, on 14 August 2026. Cursor continues as a product.",
      tr: "SpaceX, Cursor'ın arkasındaki şirket Anysphere'i satın alma işlemini 14.08.2026'da tamamladı. Cursor ürün olarak sürdürülüyor."
    }
  },
  {
    id: "bfl",
    name: "Black Forest Labs",
    kurz: "BFL",
    gruppe: "medien",
    land: "DE",
    sitz: "Freiburg im Breisgau",
    gruendung: 2024,
    web: "https://bfl.ai",
    logo: "black-forest-labs.svg",
    produkt: "",
    status: "unveraendert",
    portraet: {
      de: "Black Forest Labs entwickelt die FLUX-Modelle zur Erzeugung und Bearbeitung von Bildern, seit FLUX 3 auch von Video mit Ton. Gegründet von früheren Entwicklern von Stable Diffusion, veröffentlicht es auch offene Modellgewichte.",
      en: "Black Forest Labs develops the FLUX models for generating and editing images and, since FLUX 3, video with audio. Founded by former Stable Diffusion developers, it also releases open model weights.",
      tr: "Black Forest Labs, görüntü üretimi ve düzenlemesi için FLUX modellerini geliştirir; FLUX 3 ile sesli video da üretilebiliyor. Şirketi Stable Diffusion'ın eski geliştiricileri kurdu; açık model ağırlıkları da yayımlıyor."
    },
    spitzenmodell: {
      name: "FLUX 3",
      art: "multi",
      datum: "2026-07-23",
      datumBelegt: true,
      quelle: {
        name: "Black Forest Labs, Blog: FLUX 3 - Real World Models",
        url: "https://bfl.ai/blog/flux-3"
      }
    },
    quellen: [
      {
        name: "Black Forest Labs, Impressum (BFL GmbH, Freiburg im Breisgau)",
        url: "https://bfl.ai/legal/imprint"
      },
      {
        name: "Wikipedia (englisch), Black Forest Labs (Gründung 2024)",
        url: "https://en.wikipedia.org/wiki/Black_Forest_Labs"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "stability",
    name: "Stability AI",
    kurz: "Stability AI",
    gruppe: "medien",
    land: "GB",
    sitz: {
      de: "London",
      en: "London",
      tr: "Londra"
    },
    gruendung: 2019,
    web: "https://stability.ai",
    logo: "stability-ai.png",
    produkt: "Stable Audio",
    status: "unveraendert",
    portraet: {
      de: "Stability AI entwickelt generative Modelle für Bild, Video, Audio und 3D und ist für die Bildmodellreihe Stable Diffusion bekannt. Viele Modelle erscheinen mit offenen Gewichten; zuletzt kam die Audio-Reihe Stable Audio 3.0.",
      en: "Stability AI develops generative models for image, video, audio and 3D and is known for the Stable Diffusion family of image models. Many models are released with open weights; the latest is the Stable Audio 3.0 family.",
      tr: "Stability AI görüntü, video, ses ve 3B için üretken modeller geliştirir ve Stable Diffusion görüntü modeli ailesiyle tanınır. Modellerin çoğu açık ağırlıklarla yayımlanır; en son Stable Audio 3.0 ailesi çıktı."
    },
    spitzenmodell: {
      name: "Stable Diffusion 3.5 Large",
      art: "bild",
      datum: "2024-10-22",
      datumBelegt: false,
      quelle: {
        name: "Stability AI, Introducing Stable Diffusion 3.5",
        url: "https://stability.ai/news-updates/introducing-stable-diffusion-3-5"
      }
    },
    quellen: [
      {
        name: "Wikipedia (englisch), Stability AI (Gründung 2019, Sitz London)",
        url: "https://en.wikipedia.org/wiki/Stability_AI"
      },
      {
        name: "Stability AI, News (Stable Audio 3.0 vom 20.05.2026 als jüngste Modellveröffentlichung)",
        url: "https://stability.ai/news-updates"
      },
      {
        name: "Stability AI, Stable Image (Stable Diffusion 3.5 Large als stärkstes Bildmodell)",
        url: "https://stability.ai/stable-image"
      }
    ],
    offen: [
      "spitzenmodell.datum"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    kurz: "Midjourney",
    gruppe: "medien",
    land: "US",
    sitz: "South San Francisco",
    gruendung: 2021,
    web: "https://www.midjourney.com",
    logo: "midjourney.png",
    produkt: "Midjourney",
    status: "unveraendert",
    portraet: {
      de: "Midjourney ist ein unabhängiges Forschungslabor, das einen gleichnamigen Dienst zur Bilderzeugung aus Textvorgaben betreibt. Bekannt ist er für künstlerisch wirkende Bilder; genutzt wird er über die Website und Discord.",
      en: "Midjourney is an independent research lab that runs an image generation service of the same name based on text prompts. It is known for its artistic-looking images and is used via its website and Discord.",
      tr: "Midjourney, metin girdilerinden görüntü üreten aynı adlı hizmeti işleten bağımsız bir araştırma laboratuvarıdır. Sanatsal görünümlü görüntüleriyle tanınır; web sitesi ve Discord üzerinden kullanılır."
    },
    spitzenmodell: {
      name: "Midjourney V8.2",
      art: "bild",
      datum: "2026-07-24",
      datumBelegt: true,
      quelle: {
        name: "Midjourney, Dokumentation: Version",
        url: "https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version"
      }
    },
    quellen: [
      {
        name: "Midjourney, Terms of Service (Postadresse South San Francisco)",
        url: "https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service"
      },
      {
        name: "Wikipedia (englisch), Midjourney (gegründet in San Francisco, ohne Jahresangabe)",
        url: "https://en.wikipedia.org/wiki/Midjourney"
      },
      {
        name: "Contrary Research, Midjourney (Sekundärquelle zum Gründungsjahr, dort uneinheitlich 2021/2022)",
        url: "https://research.contrary.com/company/midjourney"
      }
    ],
    offen: [
      "gruendung",
      "sitz"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "runway",
    name: "Runway",
    kurz: "Runway",
    gruppe: "medien",
    land: "US",
    sitz: "New York",
    gruendung: 2018,
    web: "https://runway.com",
    logo: "runway.png",
    produkt: "Runway",
    status: "unveraendert",
    portraet: {
      de: "Runway entwickelt Modelle und Werkzeuge zur Erzeugung und Bearbeitung von Video, darunter die Gen-Reihe, und arbeitet an Weltmodellen. Die Angebote richten sich vor allem an Film-, Werbe- und Medienproduktion.",
      en: "Runway develops models and tools for generating and editing video, including the Gen series, and works on world models. Its products are aimed mainly at film, advertising and media production.",
      tr: "Runway, aralarında Gen serisinin de bulunduğu video üretim ve düzenleme modelleri ile araçları geliştirir ve dünya modelleri üzerinde çalışır. Ürünleri ağırlıklı olarak film, reklam ve medya prodüksiyonuna yöneliktir."
    },
    spitzenmodell: {
      name: "Gen-4.5",
      art: "video",
      datum: "2025-12-01",
      datumBelegt: true,
      quelle: {
        name: "Runway, Research: Runway Gen-4.5",
        url: "https://runway.com/research/introducing-runway-gen-4.5"
      }
    },
    quellen: [
      {
        name: "Wikipedia (englisch), Runway (Gründung 2018, Sitz New York City)",
        url: "https://en.wikipedia.org/wiki/Runway_(company)"
      },
      {
        name: "Runway, About (Runway AI, Inc.; Büros, New York zuerst genannt)",
        url: "https://runway.com/about"
      },
      {
        name: "Runway, Changelog (Modellveröffentlichungen mit Datum)",
        url: "https://runway.com/changelog"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "luma",
    name: "Luma AI",
    kurz: "Luma AI",
    gruppe: "medien",
    land: "US",
    sitz: "Redwood City",
    gruendung: 2021,
    web: "https://lumalabs.ai",
    logo: "luma-ai.png",
    produkt: "Luma",
    status: "unveraendert",
    portraet: {
      de: "Luma AI entwickelt die Videomodelle der Ray-Reihe und das Bildmodell Uni-1 sowie eine Arbeitsumgebung mit KI-Agenten für kreative Aufgaben. Bekannt wurde das Unternehmen durch 3D-Aufnahmen und den Videodienst Dream Machine.",
      en: "Luma AI develops the Ray series of video models and the Uni-1 image model, along with a workspace of AI agents for creative tasks. The company became known for 3D capture and the Dream Machine video service.",
      tr: "Luma AI, Ray serisi video modellerini ve Uni-1 görüntü modelini, ayrıca yaratıcı işler için yapay zekâ ajanlı bir çalışma ortamı geliştirir. Şirket 3B çekim ve Dream Machine video hizmetiyle tanındı."
    },
    spitzenmodell: {
      name: "Ray3.2",
      art: "video",
      datum: "2026-06-09",
      datumBelegt: true,
      quelle: {
        name: "Luma AI, News: Luma Introduces Ray3.2 Model & API",
        url: "https://lumalabs.ai/news/introducing-ray-3-2"
      }
    },
    quellen: [
      {
        name: "Luma AI, Official Information for AI Assistants (Redwood City, gegründet 2021)",
        url: "https://lumalabs.ai/llm-info"
      },
      {
        name: "Luma AI, Startseite (strukturierte Daten: Redwood City, foundingDate 2021)",
        url: "https://lumalabs.ai"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    kurz: "ElevenLabs",
    gruppe: "medien",
    land: "US",
    sitz: "New York",
    gruendung: 2022,
    web: "https://elevenlabs.io",
    logo: "elevenlabs.svg",
    produkt: "ElevenCreative",
    status: "unveraendert",
    portraet: {
      de: "ElevenLabs entwickelt Modelle für Sprachsynthese, Spracherkennung, Stimmklonen, Synchronisation und Musik. Bekannt ist das Unternehmen für natürlich klingende künstliche Stimmen in vielen Sprachen und für Sprachagenten.",
      en: "ElevenLabs develops models for speech synthesis, speech recognition, voice cloning, dubbing and music. The company is known for natural-sounding synthetic voices in many languages and for voice agents.",
      tr: "ElevenLabs konuşma sentezi, konuşma tanıma, ses klonlama, dublaj ve müzik için modeller geliştirir. Şirket, birçok dilde doğal duyulan yapay sesleri ve sesli ajanlarıyla tanınır."
    },
    spitzenmodell: {
      name: "Eleven v4",
      art: "audio",
      datum: "2026-09-28",
      datumBelegt: true,
      quelle: {
        name: "ElevenLabs, Blog: Eleven v4",
        url: "https://elevenlabs.io/blog/eleven-v4"
      }
    },
    quellen: [
      {
        name: "ElevenLabs, Terms of Use (Eleven Labs Inc., New York; strukturierte Daten: foundingDate 2022)",
        url: "https://elevenlabs.io/terms-of-use"
      },
      {
        name: "Wikipedia (englisch), ElevenLabs (2022 in London gegründet; nennt London und New York als Sitz)",
        url: "https://en.wikipedia.org/wiki/ElevenLabs"
      }
    ],
    offen: [
      "land",
      "sitz"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "suno",
    name: "Suno",
    kurz: "Suno",
    gruppe: "medien",
    land: "US",
    sitz: {
      de: "Cambridge (Massachusetts)",
      en: "Cambridge (Massachusetts)",
      tr: "Cambridge (Massachusetts)"
    },
    gruendung: 2022,
    web: "https://suno.com",
    logo: "suno.png",
    produkt: "Suno",
    status: "unveraendert",
    portraet: {
      de: "Suno entwickelt Modelle, die aus Textvorgaben vollständige Musikstücke mit Gesang erzeugen, und betreibt dazu eine eigene Plattform mit Studio-Werkzeug. Der Dienst gehört zu den bekanntesten Angeboten für KI-Musik.",
      en: "Suno develops models that generate complete songs with vocals from text prompts and runs its own platform with a studio tool. The service is among the best-known offerings for AI music.",
      tr: "Suno, metin girdilerinden vokalli eksiksiz müzik parçaları üreten modeller geliştirir ve stüdyo aracı da içeren kendi platformunu işletir. Hizmet, yapay zekâ müziği alanındaki en bilinen tekliflerden biridir."
    },
    spitzenmodell: {
      name: "Suno v6",
      art: "audio",
      datum: "2026-09-09",
      datumBelegt: true,
      quelle: {
        name: "Suno, Release Notes: Introducing v6",
        url: "https://suno.com/release-notes/introducing-v6"
      }
    },
    quellen: [
      {
        name: "Suno, About (gegründet 2022)",
        url: "https://suno.com/about"
      },
      {
        name: "Suno, Terms of Service (Adresse Cambridge, Massachusetts)",
        url: "https://suno.com/terms"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "reve",
    name: "Reve",
    kurz: "Reve",
    gruppe: "medien",
    land: "US",
    sitz: "Palo Alto",
    gruendung: null,
    web: "https://reve.com",
    logo: "reve.svg",
    produkt: "Reve",
    status: "unveraendert",
    portraet: {
      de: "Reve entwickelt Bildmodelle und eine Web-Anwendung zum Erzeugen, Bearbeiten und Gestalten von Bildern. Die Modelle planen zunächst ein bearbeitbares Layout und rendern das Bild dann in hoher Auflösung.",
      en: "Reve develops image models and a web app for creating, editing and designing images. Its models first plan an editable layout and then render the image at high resolution.",
      tr: "Reve, görüntü modelleri ve görüntü oluşturma, düzenleme ve tasarlama için bir web uygulaması geliştirir. Modelleri önce düzenlenebilir bir yerleşim planlar, ardından görüntüyü yüksek çözünürlükte oluşturur."
    },
    spitzenmodell: {
      name: "Reve 2.1",
      art: "bild",
      datum: "2026-07-09",
      datumBelegt: true,
      quelle: {
        name: "Reve, Blog: Launching Reve 2.1",
        url: "https://blog.reve.com/posts/launching-reve-2.1/"
      }
    },
    quellen: [
      {
        name: "Reve, Blog: A New Chapter for Reve (Reve AI, Inc.; Beteiligung von OpenAI, bleibt eigenständig)",
        url: "https://blog.reve.com/posts/a-new-chapter-for-reve/"
      },
      {
        name: "LLM Reference, Reve (Sekundärquelle für Sitz Palo Alto; Gründungsjahr dort und anderswo uneinheitlich 2023/2024)",
        url: "https://www.llmreference.com/researcher/reve"
      },
      {
        name: "Arena, Text-to-Image-Rangliste (Reve 2.1 auf Platz 9, Stand 12.11.2026)",
        url: "https://arena.ai/leaderboard/text-to-image"
      }
    ],
    offen: [
      "sitz",
      "land",
      "gruendung"
    ],
    geprueftAm: "2026-11-17",
    hinweis: {
      de: "OpenAI ist seit 27.07.2026 an Reve beteiligt; ein Teil des Forschungsteams wechselt dorthin. Laut Reve bleibt das Unternehmen eigenständig.",
      en: "OpenAI has held a stake in Reve since 27 July 2026, and part of the research team is moving there. According to Reve, the company remains independent.",
      tr: "OpenAI, 27.07.2026'dan beri Reve'de pay sahibi; araştırma ekibinin bir bölümü oraya geçiyor. Reve'e göre şirket bağımsız kalıyor."
    },
    logoGrund: "system"
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    kurz: "NVIDIA",
    gruppe: "chips",
    land: "US",
    sitz: "Santa Clara",
    gruendung: 1993,
    web: "https://www.nvidia.com/en-us/ai/",
    logo: "nvidia.svg",
    produkt: "",
    status: "unveraendert",
    portraet: {
      de: "NVIDIA entwickelt Grafikprozessoren, Komplettsysteme und die Softwareplattform CUDA für KI-Rechenzentren; die Chips gelten als Standard für das Training großer Modelle. Dazu kommen eigene offene Modelle wie die Reihe Nemotron.",
      en: "NVIDIA designs GPUs, complete systems and the CUDA software platform for AI data centers; its chips are regarded as the standard for training large models. It also publishes its own open models such as the Nemotron family.",
      tr: "NVIDIA, yapay zekâ veri merkezleri için grafik işlemcileri, sistemler ve CUDA yazılım platformunu geliştirir; çipleri büyük modellerin eğitiminde standart sayılır. Ayrıca Nemotron ailesi gibi kendi açık modellerini yayımlar."
    },
    spitzenmodell: {
      name: "Vera Rubin NVL72",
      art: "chip",
      datum: "2026-01-05",
      datumBelegt: true,
      quelle: {
        name: "NVIDIA Newsroom: NVIDIA Kicks Off the Next Generation of AI With Rubin",
        url: "https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): Nvidia (Gründung 05.04.1993, Sitz Santa Clara)",
        url: "https://en.wikipedia.org/wiki/Nvidia"
      },
      {
        name: "NVIDIA: Vera Rubin NVL72 (Produktseite, Stand „Available Now“)",
        url: "https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/"
      },
      {
        name: "NVIDIA Investor Relations, 31.05.2026: Vera Rubin Ramps Into Full Production",
        url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Vera-Rubin-Ramps-Into-Full-Production-to-Power-Agentic-AI-Factories-Worldwide/default.aspx"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "amd",
    name: "AMD",
    kurz: "AMD",
    gruppe: "chips",
    land: "US",
    sitz: "Santa Clara",
    gruendung: 1969,
    web: "https://www.amd.com/en/solutions/ai.html",
    logo: "amd.ico",
    produkt: "",
    status: "unveraendert",
    portraet: {
      de: "AMD entwickelt Prozessoren und Grafikbeschleuniger für KI-Rechenzentren, darunter die Reihe Instinct und das Rack-System Helios. Im KI-Bereich gilt AMD als größter Wettbewerber von NVIDIA bei Beschleunigerchips.",
      en: "AMD designs processors and GPU accelerators for AI data centers, including the Instinct line and the Helios rack-scale system. In AI it is regarded as NVIDIA's largest competitor in accelerator chips.",
      tr: "AMD, yapay zekâ veri merkezleri için işlemciler ve grafik hızlandırıcılar geliştirir; Instinct serisi ve Helios raf sistemi bunların arasındadır. Yapay zekâda hızlandırıcı çiplerde NVIDIA'nın en büyük rakibi sayılır."
    },
    spitzenmodell: {
      name: "Instinct MI455X",
      art: "chip",
      datum: "2026-07-23",
      datumBelegt: true,
      quelle: {
        name: "AMD Newsroom: AAI 2026: AMD Launches AMD Instinct MI400 Series GPUs for Frontier AI, HPC",
        url: "https://newsroom.amd.com/news/aai-2026-mi400-instinct-update/"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): AMD (Gründung 01.05.1969, Sitz Santa Clara)",
        url: "https://en.wikipedia.org/wiki/AMD"
      },
      {
        name: "AMD Newsroom, 23.07.2026: AAI 2026: AMD Launches AMD Helios Rackscale Solution for Frontier AI",
        url: "https://newsroom.amd.com/news/aai-2026-helios-update/"
      },
      {
        name: "AMD Newsroom, 12.11.2026: AMD Advances the Instinct MI400 Series for AI",
        url: "https://newsroom.amd.com/news/amd-advances-instinct-mi400-series-ai-scientific-computing/"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "broadcom",
    name: "Broadcom",
    kurz: "Broadcom",
    gruppe: "chips",
    land: "US",
    sitz: "Palo Alto",
    gruendung: 1961,
    web: "https://www.broadcom.com/solutions/ai-solutions/ai-infrastructure",
    logo: "broadcom.png",
    produkt: "",
    status: "unveraendert",
    portraet: {
      de: "Broadcom entwickelt im Kundenauftrag maßgeschneiderte KI-Beschleuniger (XPUs), etwa für Meta und OpenAI, sowie Netzwerkchips wie Tomahawk und Jericho, die die Rechner in KI-Rechenzentren miteinander verbinden.",
      en: "Broadcom designs custom AI accelerators (XPUs) for customers such as Meta and OpenAI, and networking chips such as Tomahawk and Jericho that connect the machines inside AI data centers.",
      tr: "Broadcom, Meta ve OpenAI gibi müşteriler için özel yapay zekâ hızlandırıcıları (XPU) ve yapay zekâ veri merkezlerindeki makineleri birbirine bağlayan Tomahawk ve Jericho gibi ağ çipleri geliştirir."
    },
    spitzenmodell: {
      name: "Tomahawk 6",
      art: "chip",
      datum: "2025-06-03",
      datumBelegt: true,
      quelle: {
        name: "Broadcom Investor Relations: Broadcom Ships Tomahawk 6: World's First 102.4 Tbps Switch",
        url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-ships-tomahawk-6-worlds-first-1024-tbps-switch"
      }
    },
    quellen: [
      {
        name: "Wikipedia (EN): Broadcom (Broadcom Inc., Gründung 1961 als HP Associates, Sitz Palo Alto)",
        url: "https://en.wikipedia.org/wiki/Broadcom"
      },
      {
        name: "Broadcom, 12.03.2026: Broadcom Now Shipping World's First 102.4 Tbps Switch in Production Volume (Ortsangabe Palo Alto)",
        url: "https://www.broadcom.com/company/news/product-releases/64031"
      },
      {
        name: "Broadcom: Tomahawk 6 / BCM78910 Series (Produktseite)",
        url: "https://www.broadcom.com/products/ethernet-connectivity/switching/strataxgs/bcm78910-series"
      }
    ],
    offen: [
      "gruendung",
      "spitzenmodell.datum"
    ],
    geprueftAm: "2026-11-17"
  },
  {
    id: "cerebras",
    name: "Cerebras",
    kurz: "Cerebras",
    gruppe: "chips",
    land: "US",
    sitz: "Sunnyvale",
    gruendung: 2015,
    web: "https://www.cerebras.ai",
    logo: "cerebras.png",
    produkt: "",
    status: "unveraendert",
    portraet: {
      de: "Cerebras baut KI-Rechner auf Basis von Prozessoren in Wafer-Größe und betreibt damit einen eigenen Cloud-Dienst für schnelle Inferenz. Seit Mai 2026 ist das Unternehmen an der Nasdaq notiert.",
      en: "Cerebras builds AI computers based on wafer-scale processors and runs its own cloud service for fast inference on them. The company has been listed on Nasdaq since May 2026.",
      tr: "Cerebras, yonga plakası boyutundaki işlemcilere dayanan yapay zekâ bilgisayarları üretir ve bunlarla hızlı çıkarım için kendi bulut hizmetini işletir. Şirket Mayıs 2026'dan beri Nasdaq'ta işlem görüyor."
    },
    spitzenmodell: {
      name: "CS-4 (WSE-3 Turbo)",
      art: "chip",
      datum: "2026-08-18",
      datumBelegt: true,
      quelle: {
        name: "Cerebras, Pressemitteilung: Cerebras Unveils CS-4",
        url: "https://www.cerebras.ai/press-release/cerebras-unveils-cs-4-up-to-30-times-faster-than-gpu-based-solutions-3347356"
      }
    },
    quellen: [
      {
        name: "Cerebras, Unternehmensseite (Gründung 2015, Adresse Sunnyvale)",
        url: "https://www.cerebras.ai/company"
      },
      {
        name: "TechCrunch, Börsengang an der Nasdaq am 14.05.2026",
        url: "https://techcrunch.com/2026/05/14/cerebras-raises-5-5b-kicking-off-2026s-ipo-season-with-a-bang"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "coreweave",
    name: "CoreWeave",
    kurz: "CoreWeave",
    gruppe: "chips",
    land: "US",
    sitz: "Livingston",
    gruendung: 2017,
    web: "https://www.coreweave.com",
    logo: "coreweave.png",
    produkt: "",
    status: "unveraendert",
    portraet: {
      de: "CoreWeave betreibt Rechenzentren mit Grafikprozessoren und vermietet deren Leistung als Cloud-Dienst für Training und Betrieb von KI-Modellen. Das Unternehmen ist seit März 2025 an der Nasdaq notiert.",
      en: "CoreWeave operates data centres equipped with GPUs and rents out their capacity as a cloud service for training and running AI models. The company has been listed on Nasdaq since March 2025.",
      tr: "CoreWeave, grafik işlemcilerle donatılmış veri merkezleri işletir ve bu kapasiteyi yapay zekâ modellerinin eğitimi ve çalıştırılması için bulut hizmeti olarak kiralar. Şirket Mart 2025'ten beri Nasdaq'ta işlem görüyor."
    },
    spitzenmodell: {
      name: "Vera Rubin NVL72 (CoreWeave Cloud)",
      art: "rechenzentrum",
      datum: "2026-09-30",
      datumBelegt: true,
      quelle: {
        name: "CoreWeave, Pressemitteilung: CoreWeave Delivers NVIDIA Vera Rubin NVL72 Performance at Production Scale",
        url: "https://coreweave.com/news/coreweave-delivers-nvidia-vera-rubin-nvl72-performance-at-production-scale-starting-with-cognition"
      }
    },
    quellen: [
      {
        name: "CoreWeave, About us (gegründet 2017, Adresse Livingston, New Jersey)",
        url: "https://www.coreweave.com/about-us"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  }
];
