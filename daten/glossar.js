// Glossar: Fachbegriffe der KI-Welt, kurz erklärt, in drei Sprachen. Von Hand gepflegt.
// „siehe“ nennt die Seite dieser Website, die den Begriff zeigt oder vertieft.
window.KI_GLOSSAR = [
  {
    id: "token", siehe: "technik.html#token",
    begriff: { de: "Token", en: "token", tr: "token" },
    text: { de: "Textstück, oft ein Wortteil. In Token wird gemessen, was ein Modell liest und schreibt, und danach wird abgerechnet.", en: "A piece of text, often part of a word. Tokens measure what a model reads and writes, and billing is based on them.", tr: "Metin parçası, çoğu zaman bir kelimenin bölümü. Modelin okuduğu ve yazdığı token ile ölçülür ve buna göre ücretlendirilir." }
  },
  {
    id: "kontextfenster", siehe: "technik.html#kontext",
    begriff: { de: "Kontextfenster", en: "context window", tr: "bağlam penceresi" },
    text: { de: "Menge an Text, die ein Modell in einer Anfrage zugleich berücksichtigen kann, gemessen in Token.", en: "The amount of text a model can take into account at once in a request, measured in tokens.", tr: "Bir modelin tek bir istekte aynı anda dikkate alabildiği metin miktarı; token ile ölçülür." }
  },
  {
    id: "prompt",
    begriff: { de: "Prompt", en: "prompt", tr: "istem" },
    text: { de: "Die Eingabe an ein Modell: Frage, Anweisung und mitgegebenes Material.", en: "The input to a model: question, instruction and any material supplied with it.", tr: "Modele verilen girdi: soru, talimat ve birlikte verilen malzeme." }
  },
  {
    id: "systemanweisung",
    begriff: { de: "Systemanweisung", en: "system prompt", tr: "sistem talimatı" },
    text: { de: "Anweisung der Anwendung, die vor dem Gespräch steht und Rolle, Ton und Regeln festlegt.", en: "An instruction from the application that comes before the conversation and sets role, tone and rules.", tr: "Konuşmadan önce gelen ve rolü, üslubu ve kuralları belirleyen uygulama talimatı." }
  },
  {
    id: "sprachmodell",
    begriff: { de: "Sprachmodell (LLM)", en: "large language model (LLM)", tr: "büyük dil modeli (LLM)" },
    text: { de: "Programm, das aus sehr vielen Texten gelernt hat, zu einem Text das wahrscheinlichste nächste Token zu berechnen.", en: "A program that has learned from a very large amount of text to calculate the most likely next token for a given text.", tr: "Çok büyük miktarda metinden, bir metnin ardından gelmesi en olası token'ı hesaplamayı öğrenmiş program." }
  },
  {
    id: "training",
    begriff: { de: "Training", en: "training", tr: "eğitim" },
    text: { de: "Lernphase, in der ein Modell aus Daten seine Parameter einstellt. Sie liegt vor der Nutzung und endet mit dem Wissensstand.", en: "The learning phase in which a model adjusts its parameters from data. It comes before use and ends at the knowledge cutoff.", tr: "Modelin verilerden parametrelerini ayarladığı öğrenme aşaması. Kullanımdan önce gelir ve bilgi kesim tarihiyle biter." }
  },
  {
    id: "inferenz",
    begriff: { de: "Inferenz", en: "inference", tr: "çıkarım" },
    text: { de: "Die Nutzung eines fertig trainierten Modells: Es bekommt eine Eingabe und berechnet die Ausgabe.", en: "Using a fully trained model: it receives an input and calculates the output.", tr: "Eğitimi tamamlanmış bir modelin kullanımı: bir girdi alır ve çıktıyı hesaplar." }
  },
  {
    id: "parameter",
    begriff: { de: "Parameter", en: "parameters", tr: "parametreler" },
    text: { de: "Die Zahlen im Inneren eines Modells, die beim Training eingestellt werden. Große Modelle haben viele Milliarden davon.", en: "The numbers inside a model that are adjusted during training. Large models have many billions of them.", tr: "Bir modelin içinde, eğitim sırasında ayarlanan sayılar. Büyük modellerde bunlardan milyarlarca bulunur." }
  },
  {
    id: "wissensstand",
    begriff: { de: "Wissensstand", en: "knowledge cutoff", tr: "bilgi kesim tarihi" },
    text: { de: "Zeitpunkt, bis zu dem die Trainingsdaten eines Modells reichen. Späteres weiß es nur, wenn man es ihm mitgibt.", en: "The point in time up to which a model's training data extends. It knows later things only if they are supplied to it.", tr: "Bir modelin eğitim verilerinin uzandığı son tarih. Daha sonrasını yalnızca kendisine verilirse bilir." }
  },
  {
    id: "halluzination",
    begriff: { de: "Halluzination", en: "hallucination", tr: "halüsinasyon" },
    text: { de: "Eine Antwort, die überzeugend klingt, aber falsch oder erfunden ist.", en: "An answer that sounds convincing but is wrong or made up.", tr: "İkna edici görünen, ancak yanlış veya uydurma olan yanıt." }
  },
  {
    id: "attention", siehe: "technik.html#attention",
    begriff: { de: "Attention", en: "attention", tr: "dikkat" },
    text: { de: "Rechenschritt, mit dem ein Modell für jedes Wort gewichtet, welche anderen Wörter dafür wichtig sind.", en: "A computation step in which a model weighs, for every word, which other words matter for it.", tr: "Modelin her kelime için, başka hangi kelimelerin önemli olduğunu ağırlıklandırdığı hesaplama adımı." }
  },
  {
    id: "embedding", siehe: "technik.html#embeddings",
    begriff: { de: "Embedding", en: "embedding", tr: "embedding" },
    text: { de: "Liste von Zahlen, die die Bedeutung eines Textes abbildet. Ähnliche Texte haben ähnliche Zahlen.", en: "A list of numbers that represents the meaning of a text. Similar texts have similar numbers.", tr: "Bir metnin anlamını yansıtan sayı listesi. Benzer metinlerin sayıları da benzerdir." }
  },
  {
    id: "rag", siehe: "technik.html#rag",
    begriff: { de: "RAG", en: "RAG", tr: "RAG" },
    text: { de: "Retrieval-Augmented Generation: Die Anwendung sucht passende Stellen aus eigenen Dokumenten und gibt sie dem Modell mit der Frage mit.", en: "Retrieval-augmented generation: the application finds matching passages in its own documents and hands them to the model together with the question.", tr: "Retrieval-Augmented Generation: uygulama kendi belgelerinden uygun bölümleri bulur ve soruyla birlikte modele verir." }
  },
  {
    id: "agent", siehe: "technik.html#agenten",
    begriff: { de: "Agent", en: "agent", tr: "ajan" },
    text: { de: "Modell in einer Schleife: Es überlegt, ruft Werkzeuge auf, liest das Ergebnis und arbeitet weiter, bis die Aufgabe gelöst ist.", en: "A model in a loop: it reasons, calls tools, reads the result and carries on until the task is solved.", tr: "Döngü içinde çalışan model: düşünür, araç çağırır, sonucu okur ve görev çözülene kadar sürdürür." }
  },
  {
    id: "werkzeug", siehe: "technik.html#agenten",
    begriff: { de: "Werkzeug", en: "tool", tr: "araç" },
    text: { de: "Funktion, die eine Anwendung dem Modell anbietet, etwa suchen, rechnen oder Dateien lesen. Ausgeführt wird sie von der Anwendung.", en: "A function an application offers to the model, such as searching, calculating or reading files. The application executes it.", tr: "Uygulamanın modele sunduğu işlev; örneğin arama, hesaplama veya dosya okuma. İşlevi uygulama çalıştırır." }
  },
  {
    id: "mcp", siehe: "technik.html#mcp",
    begriff: { de: "MCP", en: "MCP", tr: "MCP" },
    text: { de: "Model Context Protocol: offener Standard, über den Anwendungen Modelle mit Werkzeugen und Datenquellen verbinden.", en: "Model Context Protocol: an open standard through which applications connect models to tools and data sources.", tr: "Model Context Protocol: uygulamaların modelleri araçlara ve veri kaynaklarına bağladığı açık standart." }
  },
  {
    id: "diffusion", siehe: "technik.html#diffusion",
    begriff: { de: "Diffusion", en: "diffusion", tr: "difüzyon" },
    text: { de: "Verfahren zur Bilderzeugung: Das Modell entfernt Schritt für Schritt Rauschen, bis ein Bild entsteht.", en: "A method for generating images: the model removes noise step by step until an image emerges.", tr: "Görüntü üretme yöntemi: model, bir görüntü ortaya çıkana kadar gürültüyü adım adım giderir." }
  },
  {
    id: "multimodal",
    begriff: { de: "Multimodal", en: "multimodal", tr: "çok kipli" },
    text: { de: "Ein Modell ist multimodal, wenn es außer Text auch Bilder, Ton oder Video verarbeiten oder erzeugen kann.", en: "A model is multimodal if, besides text, it can also process or generate images, audio or video.", tr: "Bir model, metnin yanı sıra görüntü, ses veya video da işleyebiliyor ya da üretebiliyorsa çok kiplidir." }
  },
  {
    id: "denktiefe",
    begriff: { de: "Denktiefe", en: "reasoning", tr: "akıl yürütme" },
    text: { de: "Zwischenschritte, in denen ein Modell vor der Antwort nachdenkt. Sie verbessern schwierige Antworten und kosten zusätzliche Token.", en: "Intermediate steps in which a model thinks before answering. They improve difficult answers and cost additional tokens.", tr: "Modelin yanıt vermeden önce düşündüğü ara adımlar. Zor yanıtları iyileştirir ve ek token harcar." }
  },
  {
    id: "offenegewichte",
    begriff: { de: "Offene Gewichte", en: "open weights", tr: "açık ağırlıklar" },
    text: { de: "Die Parameter des Modells sind veröffentlicht; man kann es auf eigenen Rechnern betreiben.", en: "The model's parameters are published; it can be run on your own machines.", tr: "Modelin parametreleri yayımlanmıştır; kendi bilgisayarlarında çalıştırılabilir." }
  },
  {
    id: "finetuning",
    begriff: { de: "Fine-Tuning", en: "fine-tuning", tr: "ince ayar" },
    text: { de: "Nachtrainieren eines fertigen Modells mit eigenen Beispielen für eine bestimmte Aufgabe.", en: "Further training of a finished model with your own examples for a specific task.", tr: "Hazır bir modelin, belirli bir görev için kendi örneklerinle yeniden eğitilmesi." }
  },
  {
    id: "benchmark",
    begriff: { de: "Benchmark", en: "benchmark", tr: "kıyaslama testi" },
    text: { de: "Feste Sammlung von Aufgaben, mit der Modelle verglichen werden. Ein Ergebnis gilt nur für diese Aufgaben.", en: "A fixed set of tasks used to compare models. A result applies only to those tasks.", tr: "Modellerin karşılaştırıldığı sabit görev derlemi. Bir sonuç yalnızca o görevler için geçerlidir." }
  },
  {
    id: "api", siehe: "wissen.html#api",
    begriff: { de: "API (Schnittstelle)", en: "API", tr: "API (arayüz)" },
    text: { de: "Zugang, über den eigene Programme ein Modell aufrufen. Abgerechnet wird nach Verbrauch.", en: "The access point through which your own programs call a model. Billing is by consumption.", tr: "Kendi programlarının bir modeli çağırdığı erişim noktası. Ücret, tüketime göre hesaplanır." }
  },
  {
    id: "apischluessel", siehe: "wissen.html#api",
    begriff: { de: "API-Schlüssel", en: "API key", tr: "API anahtarı" },
    text: { de: "Geheime Zeichenfolge, mit der sich ein Programm bei der API ausweist. Wer ihn kennt, kann auf Kosten des Kontos Anfragen stellen.", en: "A secret string with which a program identifies itself to the API. Anyone who knows it can send requests at the account's expense.", tr: "Programın API'ye kendini tanıttığı gizli karakter dizisi. Onu bilen herkes, hesabın parasıyla istek gönderebilir." }
  },
  {
    id: "tempogrenze", siehe: "wissen.html#api",
    begriff: { de: "Tempogrenze", en: "rate limit", tr: "hız sınırı" },
    text: { de: "Obergrenze der API für Anfragen und Token je Minute.", en: "The API's cap on requests and tokens per minute.", tr: "API'nin dakika başına istek ve token üst sınırı." }
  },
  {
    id: "abo", siehe: "wissen.html#limits",
    begriff: { de: "Abo", en: "subscription", tr: "abonelik" },
    text: { de: "Fester Monatspreis für die Nutzung in den Programmen eines Anbieters, mit Nutzungsgrenzen.", en: "A fixed monthly price for use within a provider's applications, with usage limits.", tr: "Bir sağlayıcının uygulamalarındaki kullanım için sabit aylık ücret; kullanım sınırları vardır." }
  },
  {
    id: "nutzungsgrenze", siehe: "wissen.html#limits",
    begriff: { de: "Nutzungsgrenze", en: "usage limit", tr: "kullanım sınırı" },
    text: { de: "Menge, die ein Abo in einem Zeitraum erlaubt, etwa je 5 Stunden oder je Woche.", en: "The amount a subscription allows within a period, for example per 5 hours or per week.", tr: "Bir aboneliğin belirli bir sürede izin verdiği miktar; örneğin 5 saatte veya haftada." }
  },
  {
    id: "zusatzguthaben", siehe: "wissen.html#abrechnung",
    begriff: { de: "Zusatzguthaben", en: "credits", tr: "ek kredi" },
    text: { de: "Bezahlte Mehrnutzung, wenn die Grenze eines Abos erreicht ist.", en: "Paid additional usage once a subscription's limit has been reached.", tr: "Aboneliğin sınırına ulaşıldığında ücretli ek kullanım." }
  },
  {
    id: "caching", siehe: "wissen.html#api",
    begriff: { de: "Prompt Caching", en: "prompt caching", tr: "istem önbellekleme" },
    text: { de: "Ein wiederholter Anfang der Eingabe wird zwischengespeichert; erneutes Lesen kostet nur einen Bruchteil.", en: "A repeated beginning of the input is stored temporarily; reading it again costs only a fraction.", tr: "Girdinin yinelenen başlangıcı geçici olarak saklanır; yeniden okunması yalnızca küçük bir bölümü kadar tutar." }
  },
  {
    id: "batch", siehe: "wissen.html#api",
    begriff: { de: "Batch", en: "batch", tr: "toplu işlem" },
    text: { de: "Viele Anfragen gesammelt und zeitversetzt verarbeiten lassen; bei Anthropic zum halben Preis.", en: "Having many requests processed together and with a delay; at half price with Anthropic.", tr: "Çok sayıda isteğin toplu ve gecikmeli işlenmesi; Anthropic'te yarı fiyatına." }
  },
  {
    id: "gpu",
    begriff: { de: "GPU", en: "GPU", tr: "GPU" },
    text: { de: "Grafikprozessor. Rechenchips dieser Art führen die vielen gleichzeitigen Rechnungen aus, die Training und Nutzung von Modellen brauchen.", en: "Graphics processing unit. Chips of this kind perform the many simultaneous calculations that training and running models require.", tr: "Grafik işlemcisi. Bu tür çipler, modellerin eğitimi ve kullanımı için gereken çok sayıda eşzamanlı hesaplamayı yapar." }
  },
  {
    id: "rechenzentrum",
    begriff: { de: "Rechenzentrum", en: "data centre", tr: "veri merkezi" },
    text: { de: "Gebäude mit sehr vielen Rechnern, Strom und Kühlung, in denen Modelle trainiert und betrieben werden.", en: "A building with a very large number of computers, power and cooling, in which models are trained and run.", tr: "Modellerin eğitildiği ve çalıştırıldığı; çok sayıda bilgisayar, elektrik ve soğutma barındıran bina." }
  }
];
