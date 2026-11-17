// Texte der Oberfläche in Deutsch, Englisch und Türkisch.
// Jeder Eintrag braucht alle drei Sprachen; werkzeuge/pruefen.js kontrolliert das.
window.KI_TEXTE = {
  "marke.unterzeile": { de: "Leitstand", en: "Control room", tr: "Kontrol merkezi" },
  "marke.projekt": { de: "Ein Projekt von MikaTec", en: "A project by MikaTec", tr: "Bir MikaTec projesi" },

  "nav.seitennavigation": { de: "Seitennavigation", en: "Site navigation", tr: "Site gezintisi" },
  "nav.bereiche": { de: "Bereiche", en: "Sections", tr: "Bölümler" },
  "nav.sprung": { de: "Zum Inhalt springen", en: "Skip to content", tr: "İçeriğe geç" },

  "kopf.sprache": { de: "Sprache", en: "Language", tr: "Dil" },
  "kopf.klangAn": { de: "Klang an", en: "Sound on", tr: "Ses açık" },
  "kopf.klangAus": { de: "Klang aus", en: "Sound off", tr: "Ses kapalı" },
  "kopf.bewegungAn": { de: "Bewegung an", en: "Motion on", tr: "Hareket açık" },
  "kopf.bewegungAus": { de: "Bewegung aus", en: "Motion off", tr: "Hareket kapalı" },

  "tafel.module": { de: "Module", en: "Modules", tr: "Modüller" },
  "tafel.bausteine": { de: "Bausteine", en: "Building blocks", tr: "Yapı taşları" },

  "stand.geplant": { de: "Geplant", en: "Planned", tr: "Planlandı" },
  "stand.fertig": { de: "Fertig", en: "Ready", tr: "Hazır" },
  "stand.von": { de: "von", en: "of", tr: "/" },


  "fuss.version": { de: "Seitenversion", en: "Site version", tr: "Site sürümü" },
  "fuss.verweise": { de: "Rechtliches und Kontakt", en: "Legal and contact", tr: "Yasal bilgiler ve iletişim" },
  "fuss.datenschutz": { de: "Datenschutz", en: "Privacy", tr: "Gizlilik" },
  "fuss.impressum": { de: "Impressum", en: "Legal notice", tr: "Künye" },
  "fuss.kontakt": { de: "Kontakt", en: "Contact", tr: "İletişim" },
  "fuss.feedback": { de: "Feedback", en: "Feedback", tr: "Geri bildirim" },
  "fuss.spenden": { de: "Spenden", en: "Donate", tr: "Bağış" },

  "start.suche": { de: "Suche", en: "Search", tr: "Ara" },
  "start.suchfeld": { de: "Anbieter, Modell oder Land", en: "Provider, model or country", tr: "Sağlayıcı, model veya ülke" },
  "start.stand": { de: "Datenstand", en: "Data as of", tr: "Veri tarihi" },
  "start.plan": { de: "Schichtenplan", en: "Layer plan", tr: "Katman planı" },
  "start.auswahl": { de: "Auswahl", en: "Selection", tr: "Seçim" },
  "start.alle": { de: "Alle", en: "All", tr: "Tümü" },
  "start.leitungenZeigen": { de: "Leitungen anzeigen", en: "Show connections", tr: "Bağlantıları göster" },
  "start.gewaehlt": { de: "Gewählt", en: "Selected", tr: "Seçili" },
  "start.treffer": { de: "Treffer", en: "Matches", tr: "Eşleşme" },
  "start.leitungen": { de: "Leitungen", en: "Connections", tr: "Bağlantılar" },
  "start.zelle": { de: "Zelle", en: "Cell", tr: "Hücre" },
  "start.anbieterKurz": { de: "Anb.", en: "prov.", tr: "sağl." },
  "start.planHinweis": {
    de: "V2 = zwei Leitungen an der Zelle · Pfeiltasten wechseln die Zelle",
    en: "V2 = two connections at the cell · arrow keys change the cell",
    tr: "V2 = hücrede iki bağlantı · ok tuşları hücreyi değiştirir"
  },
  "start.lage": { de: "Lage", en: "Status", tr: "Durum" },
  "start.keineLeitung": { de: "Keine belegte Verbindung in den Daten.", en: "No documented connection in the data.", tr: "Verilerde belgelenmiş bağlantı yok." },
  "start.nachGruppe": { de: "Anbieter nach Gruppe", en: "Providers by group", tr: "Gruba göre sağlayıcılar" },
  "start.nachLand": { de: "Anbieter nach Land", en: "Providers by country", tr: "Ülkeye göre sağlayıcılar" },
  "start.ungesichert": { de: "Quelle nicht direkt geprüft", en: "Source not checked directly", tr: "Kaynak doğrudan kontrol edilmedi" },
  "start.datumUnsicher": { de: "Datum aus Sekundärquelle", en: "Date from a secondary source", tr: "Tarih ikincil kaynaktan" },
  "start.offen": { de: "Nicht bestätigt", en: "Unconfirmed", tr: "Doğrulanmadı" },

  "zahl.anbieter": { de: "Anbieter", en: "Providers", tr: "Sağlayıcı" },
  "zahl.gruppen": { de: "Gruppen", en: "Groups", tr: "Grup" },
  "zahl.leitungen": { de: "Leitungen", en: "Connections", tr: "Bağlantı" },
  "zahl.laender": { de: "Länder", en: "Countries", tr: "Ülke" },
  "zahl.modelle": { de: "Modelle", en: "Models", tr: "Model" },

  "feld.gruppe": { de: "Gruppe", en: "Group", tr: "Grup" },
  "feld.land": { de: "Land", en: "Country", tr: "Ülke" },
  "feld.sitz": { de: "Sitz", en: "Headquarters", tr: "Merkez" },
  "feld.gruendung": { de: "Gründung", en: "Founded", tr: "Kuruluş" },
  "feld.produkt": { de: "Produkt", en: "Product", tr: "Ürün" },
  "feld.spitzenmodell": { de: "Spitzenmodell", en: "Top model", tr: "En üst model" },
  "feld.modellDatum": { de: "Datum des Spitzenmodells", en: "Date of the top model", tr: "En üst modelin tarihi" },
  "feld.modellArt": { de: "Art des Spitzenmodells", en: "Type of the top model", tr: "En üst modelin türü" },
  "feld.modellQuelle": { de: "Quelle des Spitzenmodells", en: "Source of the top model", tr: "En üst modelin kaynağı" },
  "feld.website": { de: "Website", en: "Website", tr: "Web sitesi" },
  "feld.quelle": { de: "Quelle", en: "Source", tr: "Kaynak" },
  "feld.status": { de: "Status", en: "Status", tr: "Durum" },

  "tab.von": { de: "Von", en: "From", tr: "Kimden" },
  "tab.art": { de: "Art", en: "Type", tr: "Tür" },
  "tab.nach": { de: "Nach", en: "To", tr: "Kime" },
  "tab.angabe": { de: "Angabe", en: "Detail", tr: "Bilgi" },

  "beziehung.geld": { de: "Geld", en: "Money", tr: "Para" },
  "beziehung.rechner": { de: "Rechenleistung", en: "Computing power", tr: "İşlem gücü" },
  "beziehung.uebernahme": { de: "Übernahme", en: "Acquisition", tr: "Satın alma" },

  "art.text": { de: "Text", en: "Text", tr: "Metin" },
  "art.multi": { de: "Multimodal", en: "Multimodal", tr: "Çok kipli" },
  "art.bild": { de: "Bild", en: "Image", tr: "Görüntü" },
  "art.video": { de: "Video", en: "Video", tr: "Video" },
  "art.audio": { de: "Audio", en: "Audio", tr: "Ses" },
  "art.chip": { de: "Chip", en: "Chip", tr: "Çip" },
  "art.rechenzentrum": { de: "Rechenzentrum", en: "Data centre", tr: "Veri merkezi" },
  "art.pdf": { de: "PDF", en: "PDF", tr: "PDF" },

  "verz.titel": { de: "Verzeichnis", en: "Directory", tr: "Dizin" },
  "verz.keinTreffer": { de: "Kein Anbieter passt zur Suche.", en: "No provider matches the search.", tr: "Aramayla eşleşen sağlayıcı yok." },

  "profil.titel": { de: "Profil", en: "Profile", tr: "Profil" },
  "profil.oeffnen": { de: "Profil öffnen", en: "Open profile", tr: "Profili aç" },
  "profil.imPlan": { de: "Im Schichtenplan zeigen", en: "Show in the layer plan", tr: "Katman planında göster" },
  "profil.stammdaten": { de: "Stammdaten", en: "Key facts", tr: "Temel bilgiler" },
  "profil.geprueft": { de: "Geprüft am", en: "Checked on", tr: "Kontrol tarihi" },
  "profil.modelle": { de: "Modelle", en: "Models", tr: "Modeller" },
  "profil.verbindungen": { de: "Verbindungen", en: "Connections", tr: "Bağlantılar" },
  "profil.quellen": { de: "Quellen", en: "Sources", tr: "Kaynaklar" },
  "profil.keineModelle": {
    de: "models.dev führt für diesen Anbieter keine eigenen Modelle. Preise fehlen deshalb.",
    en: "models.dev lists no models of its own for this provider, so prices are missing.",
    tr: "models.dev bu sağlayıcı için kendi modellerini listelemiyor; bu nedenle fiyatlar eksik."
  },
  "profil.modellHinweis": { de: "Laut models.dev, abgerufen am", en: "According to models.dev, retrieved on", tr: "models.dev'e göre, alınma tarihi" },
  "profil.modellGrenze": {
    de: "Genannt ist der Grundtarif in US-Dollar je 1 Mio. Token. Staffeln, Tageszeiten und befristete Preise stehen nur auf der Preisseite des Anbieters.",
    en: "Shown is the base rate in US dollars per 1 million tokens. Tiers, time-of-day rates and temporary prices appear only on the provider's pricing page.",
    tr: "Gösterilen, 1 milyon token başına ABD doları cinsinden temel tarifedir. Kademeler, günün saatine göre tarifeler ve geçici fiyatlar yalnızca sağlayıcının fiyat sayfasında yer alır."
  },

  "status.unveraendert": { de: "Unverändert", en: "Unchanged", tr: "Değişmedi" },
  "status.umbenannt": { de: "Umbenannt", en: "Renamed", tr: "Adı değişti" },
  "status.uebernommen": { de: "Übernommen", en: "Acquired", tr: "Satın alındı" },
  "status.fusioniert": { de: "Fusioniert", en: "Merged", tr: "Birleşti" },
  "status.eingestellt": { de: "Eingestellt", en: "Discontinued", tr: "Kapandı" },

  "mod.modell": { de: "Modell", en: "Model", tr: "Model" },
  "mod.datum": { de: "Datum", en: "Date", tr: "Tarih" },
  "mod.kontext": { de: "Kontext", en: "Context", tr: "Bağlam" },
  "mod.maxAusgabe": { de: "Max. Ausgabe", en: "Max. output", tr: "Azami çıktı" },
  "mod.preisEin": { de: "Preis Eingabe", en: "Input price", tr: "Girdi fiyatı" },
  "mod.preisAus": { de: "Preis Ausgabe", en: "Output price", tr: "Çıktı fiyatı" },
  "mod.arten": { de: "Ein- und Ausgabe", en: "Input and output", tr: "Girdi ve çıktı" },
  "mod.merkmale": { de: "Merkmale", en: "Features", tr: "Özellikler" },
  "mod.denken": { de: "Denken", en: "Reasoning", tr: "Akıl yürütme" },
  "mod.werkzeuge": { de: "Werkzeuge", en: "Tools", tr: "Araçlar" },
  "mod.offeneGewichte": { de: "Offene Gewichte", en: "Open weights", tr: "Açık ağırlıklar" },
  "mod.deprecated": { de: "Abgekündigt", en: "Deprecated", tr: "Kullanımdan kalkıyor" },
  "mod.beta": { de: "Beta", en: "Beta", tr: "Beta" },

  "kat.titel": { de: "Katalog", en: "Catalogue", tr: "Katalog" },
  "kat.suchfeld": { de: "Modell oder Anbieter", en: "Model or provider", tr: "Model veya sağlayıcı" },
  "kat.anbieter": { de: "Anbieter", en: "Provider", tr: "Sağlayıcı" },
  "kat.alleAnbieter": { de: "Alle Anbieter", en: "All providers", tr: "Tüm sağlayıcılar" },
  "kat.art": { de: "Ausgabe", en: "Output", tr: "Çıktı" },
  "kat.alleArten": { de: "Alle Ausgabearten", en: "All output types", tr: "Tüm çıktı türleri" },
  "kat.aktuell": { de: "Nur aktuelle", en: "Current only", tr: "Yalnızca güncel" },
  "kat.offen": { de: "Nur offene Gewichte", en: "Open weights only", tr: "Yalnızca açık ağırlıklar" },
  "kat.vergleichen": { de: "Vergleich", en: "Compare", tr: "Karşılaştır" },
  "kat.keinTreffer": { de: "Kein Modell passt zu den Filtern.", en: "No model matches the filters.", tr: "Filtrelerle eşleşen model yok." },

  "vgl.titel": { de: "Direktvergleich", en: "Side-by-side comparison", tr: "Yan yana karşılaştırma" },
  "vgl.leer": {
    de: "Wähle im Katalog bis zu vier Modelle über das Kästchen in der ersten Spalte.",
    en: "Pick up to four models in the catalogue using the box in the first column.",
    tr: "Katalogda ilk sütundaki kutuyla en fazla dört model seç."
  },
  "vgl.entfernen": { de: "Aus dem Vergleich nehmen", en: "Remove from comparison", tr: "Karşılaştırmadan çıkar" },
  "vgl.wissen": { de: "Wissensstand", en: "Knowledge cutoff", tr: "Bilgi tarihi" },
  "vgl.cacheLesen": { de: "Preis Cache lesen", en: "Cache read price", tr: "Önbellek okuma fiyatı" },
  "vgl.cacheSchreiben": { de: "Preis Cache schreiben", en: "Cache write price", tr: "Önbellek yazma fiyatı" },
  "vgl.eingabe": { de: "Eingabearten", en: "Input types", tr: "Girdi türleri" },
  "vgl.ausgabe": { de: "Ausgabearten", en: "Output types", tr: "Çıktı türleri" },
  "vgl.ja": { de: "Ja", en: "Yes", tr: "Evet" },
  "vgl.nein": { de: "Nein", en: "No", tr: "Hayır" },
  "vgl.aktuell": { de: "Aktuell", en: "Current", tr: "Güncel" },
  "vgl.bestwert": {
    de: "Grün ist der beste Wert im Vergleich: der größte bei Kontext und Ausgabe, der kleinste bei den Preisen.",
    en: "Green marks the best value in the comparison: the largest for context and output, the smallest for prices.",
    tr: "Yeşil, karşılaştırmadaki en iyi değeri gösterir: bağlam ve çıktıda en büyük, fiyatlarda en küçük."
  },

  "dia.titel": { de: "Preis und Kontext", en: "Price and context", tr: "Fiyat ve bağlam" },
  "dia.x": { de: "Preis Ausgabe in US-Dollar je 1 Mio. Token", en: "Output price in US dollars per 1 million tokens", tr: "1 milyon token başına ABD doları cinsinden çıktı fiyatı" },
  "dia.y": { de: "Senkrecht: Kontextfenster in Token", en: "Vertical: context window in tokens", tr: "Dikey: token cinsinden bağlam penceresi" },
  "dia.hinweis": {
    de: "Jeder Punkt ist ein Modell. Beide Achsen sind in Zehnerschritten geteilt: gleiche Abstände bedeuten gleiche Vielfache. Ein Klick auf einen Punkt nimmt das Modell in den Vergleich.",
    en: "Each point is a model. Both axes are divided in powers of ten: equal distances mean equal multiples. Clicking a point adds the model to the comparison.",
    tr: "Her nokta bir modeldir. Her iki eksen onun katlarıyla bölünmüştür: eşit aralıklar eşit katlar anlamına gelir. Bir noktaya tıklamak modeli karşılaştırmaya ekler."
  },
  "dia.ohne": {
    de: "Modelle ohne Preis oder ohne Kontextangabe fehlen im Diagramm.",
    en: "Models without a price or a context figure are missing from the chart.",
    tr: "Fiyatı veya bağlam bilgisi olmayan modeller grafikte yer almaz."
  },

  "zeit.titel": { de: "Zeitachse", en: "Timeline", tr: "Zaman çizelgesi" },
  "zeit.hinweis": {
    de: "Veröffentlichungen der letzten zwölf Monate, eine Zeile je Anbieter. Die Filter des Katalogs gelten auch hier.",
    en: "Releases of the last twelve months, one row per provider. The catalogue filters apply here as well.",
    tr: "Son on iki ayın yayınları, her sağlayıcı için bir satır. Katalog filtreleri burada da geçerlidir."
  },

  "tech.reiter": { de: "Schaubild wählen", en: "Choose a diagram", tr: "Şema seç" },

  "tok.eingabe": { de: "Dein Text", en: "Your text", tr: "Metnin" },
  "tok.beispiel": { de: "Beispiel", en: "Example", tr: "Örnek" },
  "tok.probe": {
    de: "Künstliche Intelligenz zerlegt jeden Text in kleine Bausteine. Das Wort Donaudampfschifffahrt braucht dabei deutlich mehr Token als das Wort Haus.",
    en: "Artificial intelligence splits every text into small pieces. The word internationalization needs far more tokens than the word house.",
    tr: "Yapay zekâ her metni küçük parçalara ayırır. Çekoslovakyalılaştıramadıklarımızdan kelimesi, ev kelimesinden çok daha fazla token gerektirir."
  },
  "tok.zerlegt": { de: "Zerlegt in Token", en: "Split into tokens", tr: "Token'lara ayrılmış" },
  "tok.zeichen": { de: "Zeichen", en: "Characters", tr: "Karakter" },
  "tok.woerter": { de: "Wörter", en: "Words", tr: "Kelime" },
  "tok.token": { de: "Token (Näherung)", en: "Tokens (approx.)", tr: "Token (yaklaşık)" },
  "tok.jeToken": { de: "Zeichen je Token", en: "Characters per token", tr: "Token başına karakter" },
  "tok.rechner": { de: "Was kostet das?", en: "What does it cost?", tr: "Maliyeti ne?" },
  "tok.modell": { de: "Modell", en: "Model", tr: "Model" },
  "tok.kosten": { de: "Diese Eingabe kostet etwa", en: "This input costs about", tr: "Bu girdinin yaklaşık maliyeti" },
  "tok.tausend": { de: "1.000 solcher Eingaben kosten etwa", en: "1,000 such inputs cost about", tr: "Böyle 1.000 girdinin yaklaşık maliyeti" },
  "tok.anteil": { de: "Anteil am Kontextfenster", en: "Share of the context window", tr: "Bağlam penceresindeki payı" },
  "tok.passt": { de: "So oft passt der Text ins Kontextfenster", en: "Times the text fits into the context window", tr: "Metin bağlam penceresine kaç kez sığar" },
  "tok.preisquelle": { de: "Preis laut models.dev, Grundtarif für die Eingabe.", en: "Price according to models.dev, base rate for input.", tr: "Fiyat models.dev'e göre, girdi için temel tarife." },
  "tok.was": { de: "Was ist ein Token?", en: "What is a token?", tr: "Token nedir?" },
  "tok.wasText": {
    de: "Ein Sprachmodell liest keine Buchstaben und keine ganzen Wörter, sondern Token: häufige Wörter sind ein Token, seltene oder lange Wörter werden in mehrere Stücke geteilt. Auch Leerzeichen und Satzzeichen zählen mit.",
    en: "A language model reads neither letters nor whole words but tokens: common words are one token, rare or long words are split into several pieces. Spaces and punctuation count as well.",
    tr: "Bir dil modeli harfleri ya da tam kelimeleri değil, token'ları okur: sık kullanılan kelimeler tek token'dır, nadir veya uzun kelimeler birkaç parçaya bölünür. Boşluklar ve noktalama işaretleri de sayılır."
  },
  "tok.warum": { de: "Warum das zählt", en: "Why it matters", tr: "Neden önemli" },
  "tok.warumText": {
    de: "Abgerechnet wird je Token, und das Kontextfenster eines Modells ist in Token begrenzt. Deutsche und türkische Texte brauchen meist mehr Token als englische, weil die Wörter länger sind.",
    en: "Billing is per token, and a model's context window is limited in tokens. German and Turkish texts usually need more tokens than English ones because the words are longer.",
    tr: "Ücretlendirme token başına yapılır ve bir modelin bağlam penceresi token sayısıyla sınırlıdır. Almanca ve Türkçe metinler, kelimeler daha uzun olduğu için genellikle İngilizce metinlerden daha fazla token gerektirir."
  },
  "tok.grenze": { de: "Grenze dieser Darstellung", en: "Limits of this view", tr: "Bu gösterimin sınırı" },
  "tok.grenzeText": {
    de: "Die Zerlegung hier ist eine Näherung nach einfachen Regeln. Echte Modelle nutzen einen gelernten Wortschatz mit zehntausenden Stücken, und jeder Anbieter zerlegt etwas anders. Die Zahlen zeigen die Größenordnung, nicht den genauen Wert.",
    en: "The split shown here is an approximation based on simple rules. Real models use a learned vocabulary of tens of thousands of pieces, and every provider splits text slightly differently. The figures show the order of magnitude, not the exact value.",
    tr: "Buradaki ayırma, basit kurallara dayanan bir yaklaşımdır. Gerçek modeller on binlerce parçadan oluşan öğrenilmiş bir söz dağarcığı kullanır ve her sağlayıcı metni biraz farklı ayırır. Rakamlar kesin değeri değil, büyüklük sırasını gösterir."
  },

  "ktx.einstellen": { de: "Einstellen", en: "Settings", tr: "Ayarlar" },
  "ktx.bild": { de: "Das Fenster", en: "The window", tr: "Pencere" },
  "ktx.modell": { de: "Modell", en: "Model", tr: "Model" },
  "ktx.system": { de: "Systemanweisung", en: "System prompt", tr: "Sistem talimatı" },
  "ktx.dokumente": { de: "Dokumente", en: "Documents", tr: "Belgeler" },
  "ktx.verlauf": { de: "Gesprächsverlauf", en: "Conversation history", tr: "Sohbet geçmişi" },
  "ktx.antwort": { de: "Platz für die Antwort", en: "Room for the answer", tr: "Yanıt için yer" },
  "ktx.token": { de: "Token", en: "tokens", tr: "token" },
  "ktx.seiten": { de: "Seiten", en: "pages", tr: "sayfa" },
  "ktx.nachrichten": { de: "Nachrichten", en: "messages", tr: "mesaj" },
  "ktx.fenster": { de: "Fenster", en: "Window", tr: "Pencere" },
  "ktx.belegt": { de: "Belegt", en: "Used", tr: "Dolu" },
  "ktx.frei": { de: "Frei", en: "Free", tr: "Boş" },
  "ktx.anteil": { de: "Anteil", en: "Share", tr: "Oran" },
  "ktx.kuerzen": { de: "Ältesten Verlauf automatisch kürzen", en: "Trim the oldest history automatically", tr: "En eski geçmişi otomatik kısalt" },
  "ktx.passt": { de: "Die Anfrage passt ins Fenster.", en: "The request fits into the window.", tr: "İstek pencereye sığıyor." },
  "ktx.voll": { de: "Das Fenster ist voll.", en: "The window is full.", tr: "Pencere dolu." },
  "ktx.zuviel": {
    de: "Token passen nicht hinein. Die Schnittstelle lehnt eine solche Anfrage ab.",
    en: "tokens do not fit. The API rejects such a request.",
    tr: "token sığmıyor. API böyle bir isteği reddeder."
  },
  "ktx.gekuerzt": {
    de: "älteste Nachrichten wurden weggelassen, damit die Anfrage passt. Das Modell kennt sie nicht mehr.",
    en: "oldest messages were dropped so that the request fits. The model no longer knows them.",
    tr: "en eski mesaj, isteğin sığması için çıkarıldı. Model artık bunları bilmiyor."
  },
  "ktx.kosten": { de: "Diese eine Anfrage kostet etwa", en: "This single request costs about", tr: "Bu tek isteğin yaklaşık maliyeti" },
  "ktx.annahme": {
    de: "Annahmen: Eine Seite Text hat etwa 650 Token, eine Nachricht im Verlauf etwa 300 Token.",
    en: "Assumptions: a page of text has about 650 tokens, a message in the history about 300 tokens.",
    tr: "Varsayımlar: Bir sayfa metin yaklaşık 650 token, geçmişteki bir mesaj yaklaşık 300 token'dır."
  },
  "ktx.was": { de: "Was ist das Kontextfenster?", en: "What is the context window?", tr: "Bağlam penceresi nedir?" },
  "ktx.wasText": {
    de: "Das Kontextfenster ist die Menge an Token, die ein Modell bei einer Anfrage auf einmal verarbeiten kann. Hinein muss alles: die Systemanweisung, mitgegebene Dokumente, der bisherige Verlauf und die Antwort, die das Modell erst noch schreibt.",
    en: "The context window is the number of tokens a model can process in a single request. Everything has to fit: the system prompt, attached documents, the conversation so far and the answer the model has yet to write.",
    tr: "Bağlam penceresi, bir modelin tek bir istekte işleyebildiği token miktarıdır. Her şey buna sığmalıdır: sistem talimatı, eklenen belgeler, o ana kadarki konuşma ve modelin henüz yazacağı yanıt."
  },
  "ktx.warum": { de: "Warum es voll wird", en: "Why it fills up", tr: "Neden dolar" },
  "ktx.warumText": {
    de: "Ein Modell merkt sich nichts von selbst. Bei jeder neuen Nachricht wird der gesamte bisherige Verlauf erneut mitgeschickt und auch erneut bezahlt. Je länger ein Gespräch dauert, desto größer und teurer wird deshalb jede einzelne Anfrage.",
    en: "A model remembers nothing by itself. With every new message the entire conversation so far is sent again and paid for again. The longer a conversation lasts, the larger and more expensive each single request becomes.",
    tr: "Bir model kendiliğinden hiçbir şeyi hatırlamaz. Her yeni mesajda o ana kadarki konuşmanın tamamı yeniden gönderilir ve yeniden ücretlendirilir. Konuşma uzadıkça her bir istek büyür ve pahalılaşır."
  },
  "ktx.grenzeText": {
    de: "Die Größen von Seite und Nachricht sind Annahmen; echte Texte weichen ab. Gerechnet wird mit dem Grundtarif. Manche Anbieter verlangen für sehr lange Eingaben mehr oder begrenzen die Eingabe eigens. Wie eine Anwendung kürzt, entscheidet sie selbst: Manche lassen alte Nachrichten weg, andere fassen sie zusammen.",
    en: "The sizes of page and message are assumptions; real texts differ. The calculation uses the base rate. Some providers charge more for very long inputs or limit the input separately. How an application trims is its own decision: some drop old messages, others summarise them.",
    tr: "Sayfa ve mesaj boyutları varsayımdır; gerçek metinler farklılık gösterir. Hesaplama temel tarifeyle yapılır. Bazı sağlayıcılar çok uzun girdiler için daha fazla ücret alır veya girdiyi ayrıca sınırlar. Bir uygulamanın nasıl kısalttığı kendi kararıdır: bazıları eski mesajları çıkarır, bazıları özetler."
  },

  "att.beispiel": { de: "Beispielsatz", en: "Example sentence", tr: "Örnek cümle" },
  "att.klick": {
    de: "Wähle das Satzende und klicke rechts ein Wort an.",
    en: "Choose the ending of the sentence and click a word on the right.",
    tr: "Cümlenin sonunu seç ve sağda bir kelimeye tıkla."
  },
  "att.bild": { de: "Worauf ein Wort achtet", en: "What a word attends to", tr: "Bir kelime neye dikkat eder" },
  "att.achtet": { de: "achtet auf", en: "attends to", tr: "şunlara dikkat eder" },
  "att.gewichte": { de: "Gewichte des gewählten Wortes", en: "Weights of the selected word", tr: "Seçilen kelimenin ağırlıkları" },
  "att.hinweis": {
    de: "Veranschaulichung: Die Gewichte sind von Hand gesetzt, nicht aus einem Modell gemessen.",
    en: "Illustration: the weights are set by hand, not measured from a model.",
    tr: "Örnekleme: Ağırlıklar elle belirlenmiştir, bir modelden ölçülmemiştir."
  },
  "att.was": { de: "Was ist Attention?", en: "What is attention?", tr: "ATTENTION nedir?" },
  "att.wasText": {
    de: "Attention heißt Aufmerksamkeit. Für jedes Wort berechnet das Modell, wie stark es auf jedes andere Wort im Text achten soll. So fließt Bedeutung von einem Wort zum anderen: Ein Fürwort erfährt, worauf es sich bezieht, ein Verb, wer handelt.",
    en: "For every word the model computes how strongly it should attend to every other word in the text. This is how meaning flows from one word to another: a pronoun learns what it refers to, a verb learns who is acting.",
    tr: "Attention, dikkat demektir. Model her kelime için, metindeki diğer her kelimeye ne kadar dikkat etmesi gerektiğini hesaplar. Anlam böylece bir kelimeden diğerine akar: bir zamir neye işaret ettiğini, bir fiil kimin eylemde bulunduğunu öğrenir."
  },
  "att.warum": { de: "Was das Beispiel zeigt", en: "What the example shows", tr: "Örnek neyi gösteriyor" },
  "att.warumText": {
    de: "In beiden Sätzen steht dasselbe Fürwort. Im ersten Satz bezieht es sich auf die Katze, im zweiten auf die Maus. Der Unterschied steckt allein im letzten Eigenschaftswort. Attention ist der Mechanismus, mit dem ein Modell solche Bezüge herstellt.",
    en: "Both sentences contain the same pronoun. In the first it refers to the cat, in the second to the mouse. The only difference is the final adjective. Attention is the mechanism a model uses to establish such references.",
    tr: "Her iki cümlede de aynı zamir var. İlk cümlede kediye, ikincisinde fareye işaret eder. Fark yalnızca sondaki sıfattadır. Attention, bir modelin bu tür bağlantıları kurduğu mekanizmadır."
  },
  "att.grenzeText": {
    de: "Die Gewichte hier sind von Hand gesetzt und zeigen nur das Prinzip. Ein echtes Modell arbeitet mit Token statt Wörtern und rechnet in vielen Schichten mit jeweils vielen Aufmerksamkeitsköpfen gleichzeitig; jeder Kopf achtet auf etwas anderes. Welche Gewichte ein bestimmtes Modell bei diesem Satz bildet, zeigt diese Seite nicht.",
    en: "The weights here are set by hand and show only the principle. A real model works with tokens rather than words and computes many layers, each with many attention heads at once; every head attends to something different. This page does not show which weights a particular model forms for this sentence.",
    tr: "Buradaki ağırlıklar elle belirlenmiştir ve yalnızca ilkeyi gösterir. Gerçek bir model kelimelerle değil token'larla çalışır ve her biri aynı anda birçok dikkat başlığı içeren çok sayıda katmanda hesap yapar; her başlık başka bir şeye dikkat eder. Belirli bir modelin bu cümlede hangi ağırlıkları oluşturduğunu bu sayfa göstermez."
  },

  "agt.seiten": { de: "Seiten Text", en: "Pages of text", tr: "Sayfa metin" },
  "agt.schritt": { de: "Nächster Schritt", en: "Next step", tr: "Sonraki adım" },
  "agt.abspielen": { de: "Alles abspielen", en: "Play all", tr: "Tümünü oynat" },
  "agt.neu": { de: "Von vorn", en: "Start over", tr: "Baştan" },
  "agt.kreislauf": { de: "Die Schleife", en: "The loop", tr: "Döngü" },
  "agt.protokoll": { de: "Ablauf", en: "Sequence", tr: "Akış" },
  "agt.zaehler": { de: "Schritt", en: "Step", tr: "Adım" },
  "agt.station1": { de: "Aufgabe", en: "Task", tr: "Görev" },
  "agt.station2": { de: "Modell überlegt", en: "Model reasons", tr: "Model düşünür" },
  "agt.station3": { de: "Werkzeug wird aufgerufen", en: "Tool is called", tr: "Araç çağrılır" },
  "agt.station4": { de: "Ergebnis kommt zurück", en: "Result comes back", tr: "Sonuç geri gelir" },
  "agt.rolleNutzer": { de: "Aufgabe", en: "Task", tr: "Görev" },
  "agt.rolleModell": { de: "Modell", en: "Model", tr: "Model" },
  "agt.rolleAufruf": { de: "Modell ruft Werkzeug auf", en: "Model calls a tool", tr: "Model aracı çağırır" },
  "agt.rolleWerkzeug": { de: "Werkzeug antwortet", en: "Tool responds", tr: "Araç yanıt verir" },
  "agt.aufgabe": { de: "Was kostet es, {seiten} Seiten Text an {modell} zu schicken?", en: "What does it cost to send {seiten} pages of text to {modell}?", tr: "{modell} modeline {seiten} sayfa metin göndermek ne kadar tutar?" },
  "agt.denken1": { de: "Den aktuellen Preis kenne ich nicht auswendig. Ich schlage ihn nach.", en: "I do not know the current price by heart. I will look it up.", tr: "Güncel fiyatı ezbere bilmiyorum. Bakacağım." },
  "agt.denken2": { de: "{seiten} Seiten sind etwa {token} Token. Das Rechnen überlasse ich dem Rechenwerkzeug.", en: "{seiten} pages are about {token} tokens. I leave the arithmetic to the calculator tool.", tr: "{seiten} sayfa yaklaşık {token} token eder. Hesabı hesaplama aracına bırakıyorum." },
  "agt.antwort": { de: "Das kostet etwa {kosten} US-Dollar, gerechnet mit dem Grundtarif für die Eingabe.", en: "That costs about {kosten} US dollars, calculated with the base rate for input.", tr: "Bu, girdi için temel tarifeyle hesaplandığında yaklaşık {kosten} ABD doları tutar." },
  "agt.was": { de: "Was ist ein Agent?", en: "What is an agent?", tr: "Ajan nedir?" },
  "agt.wasText": {
    de: "Ein Agent ist ein Modell in einer Schleife: Es überlegt, ruft ein Werkzeug auf, liest das Ergebnis und überlegt erneut, bis die Aufgabe gelöst ist. Statt nur zu antworten, kann es so nachschlagen, rechnen oder Dateien bearbeiten.",
    en: "An agent is a model in a loop: it reasons, calls a tool, reads the result and reasons again until the task is solved. Instead of merely answering, it can look things up, calculate or edit files.",
    tr: "Ajan, döngü içinde çalışan bir modeldir: düşünür, bir araç çağırır, sonucu okur ve görev çözülene kadar yeniden düşünür. Yalnızca yanıt vermek yerine araştırabilir, hesap yapabilir veya dosyaları düzenleyebilir."
  },
  "agt.werkzeuge": { de: "Was ist ein Werkzeug?", en: "What is a tool?", tr: "Araç nedir?" },
  "agt.werkzeugeText": {
    de: "Ein Werkzeug ist eine Funktion, die die Anwendung dem Modell beschreibt: Name, Zweck und Eingaben. Das Modell führt nichts selbst aus. Es schreibt nur, welches Werkzeug es mit welchen Eingaben braucht; die Anwendung führt es aus und gibt das Ergebnis zurück.",
    en: "A tool is a function the application describes to the model: name, purpose and inputs. The model executes nothing itself. It only writes which tool it needs with which inputs; the application runs it and returns the result.",
    tr: "Araç, uygulamanın modele tanımladığı bir işlevdir: adı, amacı ve girdileri. Model hiçbir şeyi kendisi çalıştırmaz. Yalnızca hangi araca hangi girdilerle ihtiyaç duyduğunu yazar; uygulama aracı çalıştırır ve sonucu geri verir."
  },
  "agt.grenzeText": {
    de: "Der Ablauf hier ist ein fester Beispielfall; Preis und Ergebnis stammen aus den Preisdaten dieser Seite. Ein echtes Modell entscheidet selbst, welche Schritte es geht, und kann sich dabei irren. Jeder Schritt schickt den bisherigen Verlauf erneut mit und kostet Token.",
    en: "The sequence here is a fixed example; price and result come from this site's price data. A real model decides for itself which steps to take and can get them wrong. Every step sends the conversation so far again and costs tokens.",
    tr: "Buradaki akış sabit bir örnektir; fiyat ve sonuç bu sitenin fiyat verilerinden gelir. Gerçek bir model hangi adımları atacağına kendisi karar verir ve yanılabilir. Her adım o ana kadarki konuşmayı yeniden gönderir ve token harcar."
  },

  "rag.frage": { de: "Deine Frage", en: "Your question", tr: "Sorun" },
  "rag.frage1": { de: "Wer entwickelt die Claude-Modelle?", en: "Who develops the Claude models?", tr: "Claude modellerini kim geliştiriyor?" },
  "rag.frage2": { de: "Welche Firma baut Chips für Rechenzentren?", en: "Which company builds chips for data centres?", tr: "Veri merkezleri için çipleri hangi şirket üretiyor?" },
  "rag.frage3": { de: "Wer erzeugt Musik?", en: "Who generates music?", tr: "Kim müzik üretiyor?" },
  "rag.sammlung": {
    de: "Durchsucht wird eine kleine Sammlung: die {zahl} Kurzporträts der Anbieter dieser Seite.",
    en: "The search covers a small collection: the {zahl} short portraits of the providers on this site.",
    tr: "Küçük bir derlem taranır: bu sitedeki sağlayıcıların {zahl} kısa tanıtımı."
  },
  "rag.treffer": { de: "Gefundene Stellen", en: "Passages found", tr: "Bulunan bölümler" },
  "rag.nichts": {
    de: "Keine passende Stelle gefunden. Ohne Fundstelle hätte das Modell nur sein eigenes Wissen.",
    en: "No matching passage found. Without one, the model would have only its own knowledge.",
    tr: "Uygun bölüm bulunamadı. Bölüm olmadan model yalnızca kendi bilgisine sahip olurdu."
  },
  "rag.sicht": { de: "Was das Modell zu sehen bekommt", en: "What the model gets to see", tr: "Modelin gördüğü" },
  "rag.anweisung": {
    de: "Beantworte die Frage nur mit den folgenden Quellen. Nenne die Nummer der Quelle.",
    en: "Answer the question using only the following sources. Cite the number of the source.",
    tr: "Soruyu yalnızca aşağıdaki kaynaklarla yanıtla. Kaynağın numarasını belirt."
  },
  "rag.quellenZeile": { de: "Quellen:", en: "Sources:", tr: "Kaynaklar:" },
  "rag.frageZeile": { de: "Frage:", en: "Question:", tr: "Soru:" },
  "rag.laenge": {
    de: "Länge dieser Anfrage: etwa {token} Token, grob gerechnet mit vier Zeichen je Token.",
    en: "Length of this request: about {token} tokens, roughly calculated at four characters per token.",
    tr: "Bu isteğin uzunluğu: yaklaşık {token} token, token başına dört karakterle kabaca hesaplandı."
  },
  "rag.was": { de: "Was ist RAG?", en: "What is RAG?", tr: "RAG nedir?" },
  "rag.wasText": {
    de: "RAG steht für Retrieval-Augmented Generation: erst nachschlagen, dann antworten. Die Anwendung sucht zur Frage passende Stellen in einer eigenen Sammlung und gibt sie dem Modell zusammen mit der Frage. Das Modell antwortet dann aus diesen Stellen statt aus dem Gedächtnis.",
    en: "RAG stands for retrieval-augmented generation: look it up first, then answer. The application searches its own collection for passages that match the question and hands them to the model together with the question. The model then answers from these passages rather than from memory.",
    tr: "RAG, Retrieval-Augmented Generation'ın kısaltmasıdır: önce bak, sonra yanıtla. Uygulama, soruya uygun bölümleri kendi derleminde arar ve bunları soruyla birlikte modele verir. Model de belleğinden değil, bu bölümlerden yanıt verir."
  },
  "rag.warum": { de: "Wozu das gut ist", en: "What it is good for", tr: "Ne işe yarar" },
  "rag.warumText": {
    de: "So kann ein Modell über Dinge Auskunft geben, die es nie gelernt hat: neue Ereignisse, eigene Dokumente, Firmendaten. Die Antwort lässt sich an den Quellen prüfen, und statt der ganzen Sammlung kommen nur wenige Stellen ins Kontextfenster.",
    en: "This lets a model answer questions about things it never learned: recent events, your own documents, company data. The answer can be checked against the sources, and only a few passages enter the context window instead of the whole collection.",
    tr: "Böylece bir model hiç öğrenmediği konularda bilgi verebilir: yeni olaylar, kendi belgelerin, şirket verileri. Yanıt kaynaklarla denetlenebilir ve bağlam penceresine tüm derlem yerine yalnızca birkaç bölüm girer."
  },
  "rag.grenzeText": {
    de: "Die Suche hier läuft wirklich in deinem Browser, vergleicht aber nur Wörter. Echte Systeme suchen meist nach Bedeutung, mit Embeddings, und finden auch Stellen ohne gleiche Wörter. Die Antwort des Modells zeigt diese Seite nicht, weil hier kein Modell läuft.",
    en: "The search here really runs in your browser, but it only compares words. Real systems usually search by meaning, using embeddings, and also find passages that share no words with the question. This page does not show the model's answer because no model runs here.",
    tr: "Buradaki arama gerçekten tarayıcında çalışır, ancak yalnızca kelimeleri karşılaştırır. Gerçek sistemler çoğunlukla embedding'lerle anlama göre arar ve ortak kelime içermeyen bölümleri de bulur. Burada model çalışmadığı için bu sayfa modelin yanıtını göstermez."
  },

  "mcp.wahl": { de: "Server wählen", en: "Choose a server", tr: "Sunucu seç" },
  "mcp.dateien": { de: "Dateien", en: "Files", tr: "Dosyalar" },
  "mcp.kalender": { de: "Kalender", en: "Calendar", tr: "Takvim" },
  "mcp.datenbank": { de: "Datenbank", en: "Database", tr: "Veritabanı" },
  "mcp.bild": { de: "Wer mit wem spricht", en: "Who talks to whom", tr: "Kim kiminle konuşuyor" },
  "mcp.nachrichten": { de: "Nachrichten", en: "Messages", tr: "Mesajlar" },
  "mcp.kasten1": { de: "Modell", en: "Model", tr: "Model" },
  "mcp.kasten2": { de: "Anwendung", en: "Application", tr: "Uygulama" },
  "mcp.kasten3": { de: "MCP-Server", en: "MCP server", tr: "MCP sunucusu" },
  "mcp.kasten4": { de: "Datenquelle", en: "Data source", tr: "Veri kaynağı" },
  "mcp.schritt1": { de: "Die Anwendung baut die Verbindung auf.", en: "The application opens the connection.", tr: "Uygulama bağlantıyı kurar." },
  "mcp.schritt2": { de: "Der Server stellt sich vor und sagt, was er kann.", en: "The server introduces itself and states what it can do.", tr: "Sunucu kendini tanıtır ve neler yapabildiğini bildirir." },
  "mcp.schritt3": { de: "Die Anwendung fragt nach den Werkzeugen.", en: "The application asks for the tools.", tr: "Uygulama araçları sorar." },
  "mcp.schritt4": { de: "Der Server nennt seine Werkzeuge mit Beschreibung.", en: "The server lists its tools with descriptions.", tr: "Sunucu araçlarını açıklamalarıyla sıralar." },
  "mcp.schritt5": { de: "Das Modell kennt jetzt die Werkzeuge und wählt eines.", en: "The model now knows the tools and picks one.", tr: "Model artık araçları biliyor ve birini seçiyor." },
  "mcp.schritt6": { de: "Die Anwendung ruft das Werkzeug beim Server auf.", en: "The application calls the tool on the server.", tr: "Uygulama aracı sunucuda çağırır." },
  "mcp.schritt7": { de: "Der Server arbeitet mit der Datenquelle.", en: "The server works with the data source.", tr: "Sunucu veri kaynağıyla çalışır." },
  "mcp.schritt8": { de: "Der Server gibt das Ergebnis zurück.", en: "The server returns the result.", tr: "Sunucu sonucu geri verir." },
  "mcp.schritt9": { de: "Die Anwendung reicht das Ergebnis an das Modell weiter.", en: "The application passes the result on to the model.", tr: "Uygulama sonucu modele iletir." },
  "mcp.was": { de: "Was ist MCP?", en: "What is MCP?", tr: "MCP nedir?" },
  "mcp.wasText": {
    de: "MCP steht für Model Context Protocol. Das ist ein offener Standard, den Anthropic im November 2024 veröffentlicht hat. Er legt fest, wie eine KI-Anwendung mit Werkzeugen und Datenquellen spricht: in kurzen Nachrichten nach festen Regeln.",
    en: "MCP stands for Model Context Protocol. It is an open standard published by Anthropic in November 2024. It defines how an AI application talks to tools and data sources: in short messages following fixed rules.",
    tr: "MCP, Model Context Protocol'ün kısaltmasıdır. Anthropic'in Kasım 2024'te yayımladığı açık bir standarttır. Bir yapay zekâ uygulamasının araçlarla ve veri kaynaklarıyla nasıl konuşacağını belirler: sabit kurallara uyan kısa mesajlarla."
  },
  "mcp.warum": { de: "Wozu ein Standard?", en: "Why a standard?", tr: "Neden bir standart?" },
  "mcp.warumText": {
    de: "Ohne Standard braucht jede Anwendung für jedes Werkzeug eine eigene Anbindung. Mit MCP wird ein Werkzeug einmal als Server gebaut und passt zu jeder Anwendung, die MCP spricht. Das ist wie ein Stecker, der in jede Steckdose passt.",
    en: "Without a standard, every application needs its own connection for every tool. With MCP a tool is built once as a server and fits every application that speaks MCP. It is like a plug that fits every socket.",
    tr: "Standart olmadan her uygulama her araç için ayrı bir bağlantıya ihtiyaç duyar. MCP ile bir araç bir kez sunucu olarak kurulur ve MCP konuşan her uygulamaya uyar. Her prize uyan bir fiş gibidir."
  },
  "mcp.grenzeText": {
    de: "Die drei Server hier sind erfundene Beispiele, und die Nachrichten sind gekürzt. Echte Nachrichten tragen mehr Felder, etwa die Version des Protokolls. Ein Server kann außer Werkzeugen auch Daten zum Lesen und fertige Vorlagen für Anweisungen anbieten.",
    en: "The three servers here are invented examples and the messages are shortened. Real messages carry more fields, such as the protocol version. Besides tools, a server can also offer data to read and ready-made prompt templates.",
    tr: "Buradaki üç sunucu uydurma örneklerdir ve mesajlar kısaltılmıştır. Gerçek mesajlar protokol sürümü gibi daha fazla alan taşır. Bir sunucu, araçların yanı sıra okunacak veriler ve hazır talimat şablonları da sunabilir."
  },

  "dif.motiv": { de: "Beschreibung", en: "Description", tr: "Açıklama" },
  "dif.motivA": { de: "Eine Sonne über Hügeln", en: "A sun above hills", tr: "Tepelerin üzerinde bir güneş" },
  "dif.motivB": { de: "Ein Haus bei Nacht", en: "A house at night", tr: "Gece bir ev" },
  "dif.entrauschen": { de: "Entrauschen abspielen", en: "Play denoising", tr: "Gürültü gidermeyi oynat" },
  "dif.verrauschen": { de: "Verrauschen abspielen", en: "Play noising", tr: "Gürültü eklemeyi oynat" },
  "dif.rauschen": { de: "Rauschanteil", en: "Share of noise", tr: "Gürültü oranı" },
  "dif.bild": { de: "Vom Rauschen zum Bild", en: "From noise to image", tr: "Gürültüden görüntüye" },
  "dif.hinweis": {
    de: "Veranschaulichung: Hier wird ein fertig gezeichnetes Bild mit Rauschen gemischt. Ein echtes Modell kennt das Bild nicht.",
    en: "Illustration: a finished drawing is blended with noise here. A real model does not know the image.",
    tr: "Örnekleme: Burada hazır çizilmiş bir görüntü gürültüyle karıştırılır. Gerçek bir model görüntüyü bilmez."
  },
  "dif.was": { de: "Was ist Diffusion?", en: "What is diffusion?", tr: "Difüzyon nedir?" },
  "dif.wasText": {
    de: "Ein Diffusionsmodell lernt, Rauschen aus Bildern zu entfernen. Beim Training werden Bilder schrittweise verrauscht, und das Modell übt, jeden Schritt rückgängig zu machen. Zum Erzeugen beginnt es mit reinem Rauschen und entfernt es Schritt für Schritt, bis ein Bild übrig bleibt.",
    en: "A diffusion model learns to remove noise from images. During training, images are noised step by step and the model practises undoing each step. To generate, it starts from pure noise and removes it step by step until an image remains.",
    tr: "Bir difüzyon modeli, görüntülerden gürültüyü gidermeyi öğrenir. Eğitim sırasında görüntülere adım adım gürültü eklenir ve model her adımı geri almayı çalışır. Üretirken saf gürültüyle başlar ve bir görüntü kalana dek gürültüyü adım adım giderir."
  },
  "dif.warum": { de: "Welche Rolle der Text spielt", en: "What role the text plays", tr: "Metnin rolü nedir" },
  "dif.warumText": {
    de: "Die Beschreibung lenkt jeden Schritt: Sie bestimmt, in welche Richtung das Modell das Rauschen entfernt. Aus demselben Rauschen entsteht deshalb je nach Beschreibung ein anderes Bild. Wechsle oben die Beschreibung und sieh es dir an.",
    en: "The description steers every step: it determines in which direction the model removes the noise. The same noise therefore turns into a different image depending on the description. Switch the description above and see for yourself.",
    tr: "Açıklama her adımı yönlendirir: modelin gürültüyü hangi yönde gidereceğini belirler. Bu yüzden aynı gürültüden, açıklamaya göre farklı bir görüntü ortaya çıkar. Yukarıdan açıklamayı değiştir ve kendin gör."
  },
  "dif.grenzeText": {
    de: "Die Bilder hier sind einfache gezeichnete Formen, und gemischt wird nur zwischen Rauschen und fertigem Bild. Ein echtes Modell kennt das Ziel nicht, rechnet meist in einer verkleinerten Darstellung des Bildes und braucht dafür ein großes neuronales Netz.",
    en: "The images here are simple drawn shapes, and the blending is only between noise and a finished image. A real model does not know the target, usually works on a compressed representation of the image and needs a large neural network for it.",
    tr: "Buradaki görüntüler basit çizilmiş şekillerdir ve yalnızca gürültü ile hazır görüntü arasında karıştırma yapılır. Gerçek bir model hedefi bilmez, çoğunlukla görüntünün küçültülmüş bir gösterimi üzerinde çalışır ve bunun için büyük bir sinir ağına ihtiyaç duyar."
  },

  "emb.bild": { de: "Karte der Bedeutungen", en: "Map of meanings", tr: "Anlam haritası" },
  "emb.zahlen": { de: "als Zahlen:", en: "as numbers:", tr: "sayı olarak:" },
  "emb.nachbarn": { de: "Nächste Nachbarn", en: "Nearest neighbours", tr: "En yakın komşular" },
  "emb.abstand": {
    de: "Klicke rechts ein Wort an. Die Zahl hinter jedem Nachbarn ist der Abstand auf der Karte: je kleiner, desto ähnlicher.",
    en: "Click a word on the right. The number after each neighbour is the distance on the map: the smaller, the more similar.",
    tr: "Sağda bir kelimeye tıkla. Her komşunun yanındaki sayı haritadaki uzaklıktır: ne kadar küçükse o kadar benzer."
  },
  "emb.hinweis": {
    de: "Veranschaulichung: Die Lage der Wörter ist von Hand gesetzt. Echte Embeddings haben hunderte bis tausende Zahlen je Wort, nicht zwei.",
    en: "Illustration: the positions of the words are set by hand. Real embeddings have hundreds to thousands of numbers per word, not two.",
    tr: "Örnekleme: Kelimelerin konumu elle belirlenmiştir. Gerçek embedding'lerde kelime başına iki değil, yüzlerce ila binlerce sayı bulunur."
  },
  "emb.was": { de: "Was sind Embeddings?", en: "What are embeddings?", tr: "EMBEDDING nedir?" },
  "emb.wasText": {
    de: "Ein Embedding übersetzt ein Wort oder einen Text in eine Liste von Zahlen. Die Zahlen sind so gewählt, dass Ähnliches nah beieinander liegt: Hund und Katze liegen dicht zusammen, Hund und Brot weit auseinander. So kann ein Computer mit Bedeutung rechnen.",
    en: "An embedding translates a word or a text into a list of numbers. The numbers are chosen so that similar things lie close together: dog and cat are close, dog and bread far apart. This lets a computer calculate with meaning.",
    tr: "Embedding, bir kelimeyi veya metni bir sayı listesine çevirir. Sayılar, benzer şeyler birbirine yakın olacak biçimde seçilir: köpek ile kedi yakındır, köpek ile ekmek uzaktır. Böylece bilgisayar anlamla hesap yapabilir."
  },
  "emb.warum": { de: "Wozu das gut ist", en: "What it is good for", tr: "Ne işe yarar" },
  "emb.warumText": {
    de: "Mit Embeddings findet eine Suche auch Stellen, die andere Wörter benutzen, aber dasselbe meinen. Darauf baut RAG auf. Das rote Wort zeigt eine Schwierigkeit: Es liegt zwischen Tieren und Technik, weil es beides bedeuten kann.",
    en: "With embeddings a search also finds passages that use different words but mean the same. RAG builds on this. The red word shows a difficulty: it lies between animals and technology because it can mean both.",
    tr: "Embedding'lerle bir arama, farklı kelimeler kullanan ama aynı anlama gelen bölümleri de bulur. RAG buna dayanır. Kırmızı kelime bir güçlüğü gösterir: iki anlama da gelebildiği için hayvanlarla teknoloji arasında durur."
  },
  "emb.grenzeText": {
    de: "Die Lage der Wörter ist von Hand gesetzt und hat nur zwei Zahlen je Wort. Echte Embeddings haben hunderte bis tausende Zahlen und werden aus sehr vielen Texten gelernt. Moderne Modelle berechnen sie außerdem für das Wort im Zusammenhang; dasselbe Wort liegt dann im Satz über Computer anders als im Satz über Katzen.",
    en: "The positions of the words are set by hand and have only two numbers per word. Real embeddings have hundreds to thousands of numbers and are learned from a very large amount of text. Modern models also compute them for the word in context; the same word then lies elsewhere in a sentence about computers than in one about cats.",
    tr: "Kelimelerin konumu elle belirlenmiştir ve kelime başına yalnızca iki sayı vardır. Gerçek embedding'ler yüzlerce ila binlerce sayıdan oluşur ve çok büyük miktarda metinden öğrenilir. Modern modeller bunları ayrıca kelimenin bağlamına göre hesaplar; aynı kelime bilgisayarla ilgili bir cümlede, kedilerle ilgili bir cümledekinden farklı bir yerde durur."
  },

  "lim.abo": { de: "Abo wählen", en: "Choose a plan", tr: "Abonelik seç" },
  "lim.nutzen": { de: "Nutzen", en: "Use", tr: "Kullan" },
  "lim.frage": { de: "Kurze Frage", en: "Short question", tr: "Kısa soru" },
  "lim.aufgabe": { de: "Normale Aufgabe", en: "Normal task", tr: "Normal görev" },
  "lim.auftrag": { de: "Großer Auftrag mit Helfern", en: "Large job with helper agents", tr: "Yardımcı ajanlarla büyük iş" },
  "lim.zeit": { de: "Zeit vergehen lassen", en: "Let time pass", tr: "Zamanı ilerlet" },
  "lim.fuenf": { de: "5 Stunden später", en: "5 hours later", tr: "5 saat sonra" },
  "lim.woche": { de: "Neue Woche", en: "New week", tr: "Yeni hafta" },
  "lim.bild": { de: "Zwei Behälter, ein Hahn", en: "Two containers, one tap", tr: "İki kap, bir musluk" },
  "lim.becher": { de: "Becher · 5 Stunden", en: "Cup · 5 hours", tr: "Bardak · 5 saat" },
  "lim.fass": { de: "Fass · Woche", en: "Barrel · week", tr: "Fıçı · hafta" },
  "lim.keinBecher": { de: "Kein 5-Stunden-Limit bei diesem Abo", en: "No five-hour limit on this plan", tr: "Bu abonelikte 5 saatlik sınır yok" },
  "lim.einheiten": { de: "Einheiten", en: "units", tr: "birim" },
  "lim.fenster": { de: "5-Stunden-Fenster Nr.", en: "Five-hour window no.", tr: "5 saatlik pencere no." },
  "lim.bereit": { de: "Bereit. Beide Behälter sind leer.", en: "Ready. Both containers are empty.", tr: "Hazır. İki kap da boş." },
  "lim.laeuft": { de: "Die Anfrage läuft. Dieselbe Menge ist in beide Behälter geflossen.", en: "The request runs. The same amount has flowed into both containers.", tr: "İstek çalışıyor. Aynı miktar iki kaba da aktı." },
  "lim.becherVoll": {
    de: "Becher voll: Pause, bis das 5-Stunden-Fenster endet. Dass im Fass noch Platz ist, hilft nicht.",
    en: "Cup full: pause until the five-hour window ends. Room left in the barrel does not help.",
    tr: "Bardak dolu: 5 saatlik pencere bitene kadar ara. Fıçıda yer olması işe yaramaz."
  },
  "lim.fassVoll": {
    de: "Fass voll: Pause bis zum festen Wochentermin. Ein leerer Becher hilft jetzt nicht.",
    en: "Barrel full: pause until the fixed weekly reset. An empty cup does not help now.",
    tr: "Fıçı dolu: sabit haftalık sıfırlamaya kadar ara. Boş bir bardak şimdi işe yaramaz."
  },
  "lim.geleert": { de: "Fünf Stunden sind vorbei: Der Becher ist leer, das Fass bleibt, wie es war.", en: "Five hours have passed: the cup is empty, the barrel stays as it was.", tr: "Beş saat geçti: bardak boş, fıçı olduğu gibi kaldı." },
  "lim.neueWoche": { de: "Neue Woche: Beide Behälter sind leer.", en: "New week: both containers are empty.", tr: "Yeni hafta: iki kap da boş." },
  "lim.annahme": {
    de: "Eine Einheit ist ein voller Becher des Pro-Abos. Annahme dieser Darstellung: Das Fass des Pro-Abos fasst zehn Einheiten. Offiziell sind nur die Verhältnisse zwischen den Abos von Anthropic, nicht die Größen der Behälter.",
    en: "One unit is a full cup of the Pro plan. Assumption of this view: the barrel of the Pro plan holds ten units. Only the ratios between Anthropic's plans are official, not the sizes of the containers.",
    tr: "Bir birim, Pro aboneliğinin dolu bir bardağıdır. Bu gösterimin varsayımı: Pro aboneliğinin fıçısı on birim alır. Resmî olan yalnızca Anthropic aboneliklerinin birbirine oranıdır, kapların büyüklüğü değil."
  },
  "lim.was": { de: "Zwei Grenzen, eine Regel", en: "Two limits, one rule", tr: "İki sınır, tek kural" },
  "lim.wasText": {
    de: "Viele Abos haben zwei Grenzen zugleich: ein Fenster von fünf Stunden und ein Wochenlimit. Jede Anfrage zählt in beide. Ist eine der beiden Grenzen erreicht, ist Pause, auch wenn die andere noch Platz hat. Als Bild: ein kleiner Becher, der alle fünf Stunden geleert wird, und ein großes Fass, das einmal in der Woche geleert wird. Aus demselben Hahn läuft das Wasser in beide.",
    en: "Many plans have two limits at once: a five-hour window and a weekly limit. Every request counts toward both. Once either limit is reached there is a pause, even if the other still has room. As a picture: a small cup that is emptied every five hours and a large barrel that is emptied once a week. Water from the same tap runs into both.",
    tr: "Birçok abonelikte aynı anda iki sınır vardır: beş saatlik bir pencere ve haftalık bir sınır. Her istek ikisine de sayılır. İkisinden biri dolduğunda, diğerinde yer olsa bile ara verilir. Bir benzetmeyle: beş saatte bir boşaltılan küçük bir bardak ve haftada bir boşaltılan büyük bir fıçı. Aynı musluktan akan su ikisine birden dolar."
  },
  "lim.menge": { de: "Gemessen wird Menge, nicht Zeit", en: "Amount is measured, not time", tr: "Süre değil, miktar ölçülür" },
  "lim.mengeText": {
    de: "Gezählt werden nicht Minuten, sondern Token: wie viel Text das Modell lesen und schreiben muss. Lange Gespräche, große Dateien, stärkere Modelle, tieferes Nachdenken und Helfer-Agenten verbrauchen mehr. Zehn Minuten mit Agenten können mehr verbrauchen als eine Stunde mit kurzen Fragen.",
    en: "What is counted is not minutes but tokens: how much text the model has to read and write. Long conversations, large files, stronger models, deeper reasoning and helper agents use more. Ten minutes with agents can use more than an hour of short questions.",
    tr: "Sayılan dakikalar değil, token'lardır: modelin ne kadar metin okuyup yazması gerektiği. Uzun konuşmalar, büyük dosyalar, daha güçlü modeller, daha derin düşünme ve yardımcı ajanlar daha çok tüketir. Ajanlarla geçen on dakika, kısa sorularla geçen bir saatten fazlasını tüketebilir."
  },
  "lim.plaene": { de: "Abos und ihre Grenzen", en: "Plans and their limits", tr: "Abonelikler ve sınırları" },
  "lim.spAbo": { de: "Abo", en: "Plan", tr: "Abonelik" },
  "lim.spPreis": { de: "Preis je Monat", en: "Price per month", tr: "Aylık fiyat" },
  "lim.spFenster": { de: "Je 5 Stunden", en: "Per 5 hours", tr: "5 saatte" },
  "lim.spWoche": { de: "Je Woche", en: "Per week", tr: "Haftada" },
  "lim.spHinweis": { de: "Hinweis", en: "Note", tr: "Not" },
  "lim.unbestaetigt": { de: "nicht bestätigt", en: "not confirmed", tr: "doğrulanmadı" },
  "lim.geprueft": {
    de: "Preise in US-Dollar je Monat bei monatlicher Zahlung, laut den Seiten der Anbieter. Geprüft am",
    en: "Prices in US dollars per month with monthly billing, according to the providers' pages. Checked on",
    tr: "Fiyatlar ABD doları cinsinden, aylık ödemeyle, sağlayıcıların sayfalarına göre. Kontrol tarihi:"
  },
  "lim.vergleich": { de: "Zwei Anbieter, zwei Aufteilungen", en: "Two providers, two ways to split", tr: "İki sağlayıcı, iki farklı düzen" },
  "lim.spFrage": { de: "Frage", en: "Question", tr: "Soru" },
  "lim.grenzeText": {
    de: "Die Mengen der Knöpfe und die Größe des Fasses sind ausgedacht; sie zeigen das Verhalten, nicht die echten Größen. Die Anbieter ändern Preise und Grenzen häufig und behalten sich weitere Grenzen vor. Für das eigene Konto gilt die Anzeige des Anbieters.",
    en: "The amounts behind the buttons and the size of the barrel are invented; they show the behaviour, not the real sizes. Providers change prices and limits often and reserve the right to apply further limits. For your own account, the provider's usage display is what counts.",
    tr: "Düğmelerin miktarları ve fıçının büyüklüğü uydurmadır; gerçek büyüklükleri değil, davranışı gösterir. Sağlayıcılar fiyatları ve sınırları sık sık değiştirir ve başka sınırlar koyma hakkını saklı tutar. Kendi hesabın için sağlayıcının kullanım göstergesi geçerlidir."
  },
  "lim.quellen": { de: "Quellen", en: "Sources", tr: "Kaynaklar" },

  "abr.ein": { de: "Gelesene Token im Monat", en: "Tokens read per month", tr: "Ayda okunan token" },
  "abr.aus": { de: "Geschriebene Token im Monat", en: "Tokens written per month", tr: "Ayda yazılan token" },
  "abr.mio": { de: "Mio.", en: "million", tr: "milyon" },
  "abr.bild": { de: "Dieselbe Menge über die API", en: "The same amount through the API", tr: "Aynı miktar API üzerinden" },
  "abr.balkenAbo": { de: "Abo, fester Preis", en: "Subscription, fixed price", tr: "Abonelik, sabit fiyat" },
  "abr.balkenApi": { de: "API, nach Verbrauch", en: "API, by consumption", tr: "API, tüketime göre" },
  "abr.zAbo": { de: "Abo (USD)", en: "Plan (USD)", tr: "Abonelik (USD)" },
  "abr.zApi": { de: "API (USD)", en: "API (USD)", tr: "API (USD)" },
  "abr.zUnterschied": { de: "Unterschied", en: "Difference", tr: "Fark" },
  "abr.zGleich": { de: "Gleichstand", en: "Break-even", tr: "Başabaş" },
  "abr.meldungLeer": { de: "Keine Menge eingestellt.", en: "No amount set.", tr: "Miktar ayarlanmadı." },
  "abr.meldungTeurer": { de: "Über die API wäre diese Menge teurer als das Abo.", en: "Through the API this amount would cost more than the subscription.", tr: "Bu miktar API üzerinden abonelikten pahalı olurdu." },
  "abr.meldungGuenstiger": { de: "Über die API wäre diese Menge günstiger als das Abo.", en: "Through the API this amount would cost less than the subscription.", tr: "Bu miktar API üzerinden abonelikten ucuz olurdu." },
  "abr.hinweis": {
    de: "Beträge in US-Dollar je Monat, Gleichstand in Millionen Token. Die Rechnung vergleicht nur Preise. Ob ein Abo diese Menge zulässt, veröffentlichen die Anbieter nicht. „Gleichstand“ ist die Menge, bei der die API bei diesem Verhältnis von Lesen und Schreiben so viel kostet wie das Abo.",
    en: "Amounts in US dollars per month, break-even in millions of tokens. The calculation compares prices only. Providers do not publish whether a subscription allows this amount. “Break-even” is the amount at which, with this ratio of reading to writing, the API costs as much as the subscription.",
    tr: "Tutarlar aylık ABD doları, başabaş ise milyon token cinsindendir. Hesap yalnızca fiyatları karşılaştırır. Bir aboneliğin bu miktara izin verip vermediğini sağlayıcılar yayımlamaz. “Başabaş”, bu okuma-yazma oranında API'nin abonelik kadar tuttuğu miktardır."
  },
  "abr.was": { de: "Zwei Töpfe", en: "Two separate budgets", tr: "İki ayrı bütçe" },
  "abr.wasText": {
    de: "Ein Abo und die API sind getrennte Angebote mit getrennter Rechnung. Das Abo kostet einen festen Betrag im Monat und erlaubt Nutzung bis zu einer Grenze. Bei der API gibt es keinen Festpreis: Jedes Token wird gezählt und nach Verbrauch bezahlt, wie Wasser über einen Zähler. Ein Abo enthält in der Regel kein Guthaben für die API; Ausnahmen nennt der Anbieter.",
    en: "A subscription and the API are separate offers with separate bills. The subscription costs a fixed amount per month and allows use up to a limit. The API has no fixed price: every token is counted and paid for by consumption, like water through a meter. A subscription usually includes no credit for the API; the provider states any exceptions.",
    tr: "Abonelik ile API, faturaları ayrı olan ayrı tekliflerdir. Abonelik ayda sabit bir tutar tutar ve bir sınıra kadar kullanıma izin verir. API'de sabit fiyat yoktur: her token sayılır ve sayaçtan geçen su gibi tüketime göre ödenir. Abonelik genellikle API için kredi içermez; istisnaları sağlayıcı belirtir."
  },
  "abr.bruecke": { de: "Die Brücke: Zusatzguthaben", en: "The bridge: credits", tr: "Köprü: ek kredi" },
  "abr.brueckeText": {
    de: "Ist die Grenze des Abos erreicht, ist Pause. Wer Zusatzguthaben einschaltet (bei Anthropic „Usage Credits“, bei OpenAI „Credits“), arbeitet weiter und zahlt die Mehrnutzung nach Verbrauch. Bei Anthropic gelten dafür die API-Preise, und eine selbst gesetzte Monatsgrenze deckelt die Ausgaben.",
    en: "Once the subscription's limit is reached there is a pause. Those who enable credits (“usage credits” at Anthropic, “credits” at OpenAI) carry on and pay for the additional use by consumption. At Anthropic the API rates apply to it, and a monthly cap you set yourself limits the spending.",
    tr: "Aboneliğin sınırına ulaşıldığında ara verilir. Ek krediyi açanlar (Anthropic'te “Usage Credits”, OpenAI'de “Credits”) çalışmayı sürdürür ve ek kullanımı tüketime göre öder. Anthropic'te bunun için API fiyatları geçerlidir ve kendi belirlediğin aylık sınır harcamayı kısıtlar."
  },
  "abr.falle": { de: "Eine häufige Falle", en: "A common trap", tr: "Sık düşülen bir tuzak" },
  "abr.falleText": {
    de: "Programmierhilfen wie Claude Code oder Codex können mit dem Abo oder mit einem API-Schlüssel laufen. Wird ein API-Schlüssel benutzt, rechnet der Anbieter nach Verbrauch über die API ab, nicht über das Abo.",
    en: "Coding assistants such as Claude Code or Codex can run on the subscription or on an API key. If an API key is used, the provider bills by consumption through the API, not through the subscription.",
    tr: "Claude Code veya Codex gibi kodlama yardımcıları abonelikle ya da bir API anahtarıyla çalışabilir. API anahtarı kullanılırsa sağlayıcı ücreti abonelikten değil, tüketime göre API üzerinden alır."
  },
  "abr.ablauf": { de: "So läuft ein Monat ab", en: "How a month plays out", tr: "Bir ay nasıl geçer" },
  "abr.s1": { de: "Abo arbeitet", en: "Subscription at work", tr: "Abonelik çalışır" },
  "abr.s1Text": { de: "Die Nutzung zählt in die Grenzen des Abos. Es entstehen keine Zusatzkosten.", en: "Usage counts toward the subscription's limits. There are no extra costs.", tr: "Kullanım, aboneliğin sınırlarına sayılır. Ek maliyet oluşmaz." },
  "abr.s2": { de: "Grenze erreicht", en: "Limit reached", tr: "Sınıra ulaşıldı" },
  "abr.s2Text": { de: "Das 5-Stunden-Fenster oder das Wochenlimit ist voll. Ohne Zusatzguthaben ist jetzt Pause.", en: "The five-hour window or the weekly limit is full. Without credits there is now a pause.", tr: "5 saatlik pencere veya haftalık sınır doldu. Ek kredi yoksa şimdi ara verilir." },
  "abr.s3": { de: "Zusatzguthaben zahlt", en: "Credits pay", tr: "Ek kredi öder" },
  "abr.s3Text": { de: "Mit eingeschaltetem Zusatzguthaben geht es weiter. Abgerechnet wird nach Verbrauch, getrennt vom Abo.", en: "With credits enabled, work continues. Billing is by consumption, separate from the subscription.", tr: "Ek kredi açıksa çalışma sürer. Ücret, abonelikten ayrı olarak tüketime göre alınır." },
  "abr.s4": { de: "Zurück ins Abo", en: "Back to the subscription", tr: "Aboneliğe dönüş" },
  "abr.s4Text": { de: "Wird die Grenze zurückgesetzt, läuft die Nutzung wieder über das Abo.", en: "Once the limit resets, usage runs through the subscription again.", tr: "Sınır sıfırlanınca kullanım yeniden abonelik üzerinden yürür." },
  "abr.vergleich": { de: "Abo und API im Vergleich", en: "Subscription and API compared", tr: "Abonelik ve API karşılaştırması" },
  "abr.spAbo": { de: "Abo", en: "Subscription", tr: "Abonelik" },
  "abr.spApi": { de: "API", en: "API", tr: "API" },
  "abr.f1": { de: "Was zahle ich?", en: "What do I pay?", tr: "Ne ödüyorum?" },
  "abr.f1Abo": { de: "Einen festen Betrag im Monat", en: "A fixed amount per month", tr: "Ayda sabit bir tutar" },
  "abr.f1Api": { de: "Jedes Token, nach Verbrauch", en: "Every token, by consumption", tr: "Her token için, tüketime göre" },
  "abr.f2": { de: "Welche Grenzen gibt es?", en: "Which limits are there?", tr: "Hangi sınırlar var?" },
  "abr.f2Abo": { de: "Nutzungsgrenzen je 5 Stunden und je Woche, je nach Abo", en: "Usage limits per 5 hours and per week, depending on the plan", tr: "Aboneliğe göre 5 saatlik ve haftalık kullanım sınırları" },
  "abr.f2Api": { de: "Keine Wochengrenze; Tempogrenzen je Minute und eine Ausgabengrenze im Monat", en: "No weekly limit; rate limits per minute and a monthly spend limit", tr: "Haftalık sınır yok; dakikalık hız sınırları ve aylık harcama sınırı" },
  "abr.f3": { de: "Was passiert an der Grenze?", en: "What happens at the limit?", tr: "Sınırda ne olur?" },
  "abr.f3Abo": { de: "Pause oder Zusatzguthaben", en: "A pause, or credits", tr: "Ara verilir ya da ek kredi" },
  "abr.f3Api": { de: "Die Anfrage wird abgelehnt, bis wieder Platz ist", en: "The request is rejected until there is room again", tr: "Yeniden yer açılana kadar istek reddedilir" },
  "abr.f4": { de: "Wofür ist es gedacht?", en: "What is it meant for?", tr: "Ne için tasarlandı?" },
  "abr.f4Abo": { de: "Arbeiten in den Programmen des Anbieters: Chat, Desktop-App, Programmierhilfe", en: "Working in the provider's applications: chat, desktop app, coding assistant", tr: "Sağlayıcının uygulamalarında çalışmak: sohbet, masaüstü uygulaması, kodlama yardımcısı" },
  "abr.f4Api": { de: "Eigene Programme, die ein Modell einbauen", en: "Your own programs that build in a model", tr: "Bir modeli içine alan kendi programların" },
  "abr.grenzeText": {
    de: "Die Rechnung nutzt den Grundtarif der Modelle laut models.dev und rechnet ohne Rabatte, Cache und Steuern. Preise und Regeln ändern sich; maßgeblich sind die Seiten der Anbieter.",
    en: "The calculation uses the models' base rates according to models.dev and leaves out discounts, caching and taxes. Prices and rules change; the providers' pages are authoritative.",
    tr: "Hesap, models.dev'e göre modellerin temel tarifesini kullanır; indirimler, önbellek ve vergiler hesaba katılmaz. Fiyatlar ve kurallar değişir; esas olan sağlayıcıların sayfalarıdır."
  },

  "api.bauen": { de: "Anfrage zusammenstellen", en: "Build a request", tr: "İstek oluştur" },
  "api.beispiel": { de: "Erkläre in zwei Sätzen, was ein Token ist.", en: "Explain in two sentences what a token is.", tr: "Token'ın ne olduğunu iki cümleyle açıkla." },
  "api.max": { de: "Obergrenze der Antwort (max_tokens)", en: "Cap on the answer (max_tokens)", tr: "Yanıt üst sınırı (max_tokens)" },
  "api.anfrage": { de: "Die Anfrage", en: "The request", tr: "İstek" },
  "api.antwort": { de: "Die Antwort (Aufbau)", en: "The response (structure)", tr: "Yanıt (yapı)" },
  "api.platzhalter": { de: "DEIN_SCHLÜSSEL", en: "YOUR_KEY", tr: "ANAHTARIN" },
  "api.antwortText": { de: "Hier steht die Antwort des Modells.", en: "The model's answer appears here.", tr: "Modelin yanıtı burada yer alır." },
  "api.zEin": { de: "Eingabe, geschätzt", en: "Input, estimated", tr: "Girdi, tahmini" },
  "api.zAus": { de: "Ausgabe, höchstens", en: "Output, at most", tr: "Çıktı, en çok" },
  "api.zKosten": { de: "Kosten höchstens (USD)", en: "Cost at most (USD)", tr: "En çok maliyet (USD)" },
  "api.schaetzung": {
    de: "Die Eingabe ist grob mit vier Zeichen je Token geschätzt. Die echte Zahl steht in der Antwort unter „usage“; danach wird abgerechnet.",
    en: "The input is roughly estimated at four characters per token. The real number is in the response under “usage”; billing is based on it.",
    tr: "Girdi, token başına dört karakterle kabaca tahmin edilmiştir. Gerçek sayı yanıtta “usage” altında yer alır; ücret buna göre hesaplanır."
  },
  "api.was": { de: "Was ist eine API?", en: "What is an API?", tr: "API nedir?" },
  "api.wasText": {
    de: "API steht für Application Programming Interface, auf Deutsch Programmierschnittstelle. Über sie ruft ein eigenes Programm ein Modell auf: Es schickt eine Anfrage an die Adresse des Anbieters und bekommt die Antwort als Daten zurück. Ein Chatfenster gibt es dabei nicht.",
    en: "API stands for application programming interface. Through it, your own program calls a model: it sends a request to the provider's address and receives the answer as data. There is no chat window involved.",
    tr: "API, Application Programming Interface'in kısaltmasıdır; Türkçesi uygulama programlama arayüzü. Kendi programın bu yolla bir modeli çağırır: sağlayıcının adresine bir istek gönderir ve yanıtı veri olarak geri alır. Arada bir sohbet penceresi yoktur."
  },
  "api.schluessel": { de: "Der Schlüssel", en: "The key", tr: "Anahtar" },
  "api.schluesselText": {
    de: "Der API-Schlüssel weist das Programm beim Anbieter aus, wie ein Passwort für das Konto. Wer ihn kennt, kann auf Kosten des Kontos Anfragen stellen. Er gehört deshalb nie in den Code einer Website, in ein öffentliches Repository oder in einen Chat.",
    en: "The API key identifies the program to the provider, like a password for the account. Anyone who knows it can send requests at the account's expense. It therefore never belongs in a website's code, in a public repository or in a chat.",
    tr: "API anahtarı, programı sağlayıcıya tanıtır; hesabın parolası gibidir. Onu bilen herkes hesabın parasıyla istek gönderebilir. Bu yüzden asla bir web sitesinin koduna, herkese açık bir depoya veya bir sohbete yazılmamalıdır."
  },
  "api.schritte": { de: "Vier Schritte", en: "Four steps", tr: "Dört adım" },
  "api.s1": { de: "Schlüssel anlegen", en: "Create a key", tr: "Anahtar oluştur" },
  "api.s1Text": { de: "Im Entwicklerbereich des Anbieters ein Konto einrichten, eine Zahlungsart oder Guthaben hinterlegen und einen Schlüssel erzeugen.", en: "Set up an account in the provider's developer area, add a payment method or credit, and generate a key.", tr: "Sağlayıcının geliştirici alanında hesap aç, ödeme yöntemi veya kredi ekle ve bir anahtar üret." },
  "api.s2": { de: "Anfrage senden", en: "Send the request", tr: "İsteği gönder" },
  "api.s2Text": { de: "Das Programm schickt das gewünschte Modell, die Obergrenze der Antwort und die Nachrichten.", en: "The program sends the chosen model, the cap on the answer and the messages.", tr: "Program, seçilen modeli, yanıtın üst sınırını ve mesajları gönderir." },
  "api.s3": { de: "Antwort lesen", en: "Read the response", tr: "Yanıtı oku" },
  "api.s3Text": { de: "Zurück kommen der Text und der Verbrauch: gelesene und geschriebene Token.", en: "What comes back is the text and the consumption: tokens read and written.", tr: "Geri gelen, metin ve tüketimdir: okunan ve yazılan token." },
  "api.s4": { de: "Abrechnung", en: "Billing", tr: "Faturalama" },
  "api.s4Text": { de: "Verbrauch mal Preis des Modells, getrennt nach Eingabe und Ausgabe. Bezahlt wird der tatsächliche Verbrauch.", en: "Consumption times the model's price, separately for input and output. You pay for actual consumption.", tr: "Tüketim çarpı modelin fiyatı; girdi ve çıktı ayrı hesaplanır. Gerçek tüketim ödenir." },
  "api.grenzen": { de: "Die Grenzen der API", en: "The limits of the API", tr: "API'nin sınırları" },
  "api.grenzenText": {
    de: "Eine Wochengrenze wie beim Abo gibt es nicht. Stattdessen gelten Tempogrenzen: Bei Anthropic sind das Anfragen je Minute, gelesene Token je Minute und geschriebene Token je Minute, dazu eine Ausgabengrenze im Monat. Wer darüber liegt, bekommt den Fehler 429 und muss warten. Die Grenzen steigen mit der Nutzungsstufe des Kontos.",
    en: "There is no weekly limit as with a subscription. Instead, rate limits apply: at Anthropic these are requests per minute, input tokens per minute and output tokens per minute, plus a monthly spend limit. Anyone above them receives error 429 and has to wait. The limits rise with the account's usage tier.",
    tr: "Abonelikteki gibi haftalık bir sınır yoktur. Bunun yerine hız sınırları geçerlidir: Anthropic'te bunlar dakika başına istek, dakika başına okunan token ve dakika başına yazılan token'dır; ayrıca aylık bir harcama sınırı vardır. Bunları aşan 429 hatasını alır ve beklemek zorundadır. Sınırlar, hesabın kullanım kademesiyle birlikte yükselir."
  },
  "api.sparen": { de: "Günstiger rechnen", en: "Paying less", tr: "Daha ucuza getirmek" },
  "api.sparenText": {
    de: "Zwei Wege senken die Kosten. Prompt Caching: Ein wiederholter Anfang der Eingabe wird zwischengespeichert; bei Anthropic kostet das Ablegen das 1,25-Fache und jedes erneute Lesen ein Zehntel des Eingabepreises, bei Opus 5.5 und Sonnet 5.5 ein Zwanzigstel. Batch: Wer nicht sofort eine Antwort braucht, schickt Anfragen gesammelt und zahlt bei Anthropic die Hälfte. Beides lässt sich verbinden.",
    en: "Two ways lower the cost. Prompt caching: a repeated beginning of the input is stored temporarily; at Anthropic, storing costs 1.25 times and each further read one tenth of the input price, one twentieth on Opus 5.5 and Sonnet 5.5. Batch: those who do not need an answer right away send requests together and pay half at Anthropic. The two can be combined.",
    tr: "Maliyeti iki yol düşürür. Prompt caching: girdinin yinelenen başlangıcı geçici olarak saklanır; Anthropic'te saklama girdi fiyatının 1,25 katı, her yeniden okuma ise onda biri tutar; Opus 5.5 ve Sonnet 5.5'te yirmide biri. Batch: yanıtı hemen gerekmeyenler istekleri toplu gönderir ve Anthropic'te yarısını öder. İkisi birlikte kullanılabilir."
  },
  "api.grenzeText": {
    de: "Die Anfrage zeigt das Format von Anthropic; andere Anbieter bauen ihre Anfragen ähnlich auf, mit anderen Adressen und Feldnamen. Diese Seite sendet nichts: Die Anfrage wird nur angezeigt. Die Zahl der Eingabe-Token ist geschätzt, die Antwort zeigt nur den Aufbau.",
    en: "The request shows Anthropic's format; other providers structure their requests similarly, with different addresses and field names. This page sends nothing: the request is only displayed. The number of input tokens is estimated, and the response shows the structure only.",
    tr: "İstek, Anthropic'in biçimini gösterir; diğer sağlayıcılar isteklerini benzer biçimde, farklı adresler ve alan adlarıyla kurar. Bu sayfa hiçbir şey göndermez: istek yalnızca görüntülenir. Girdi token sayısı tahminidir, yanıt ise yalnızca yapıyı gösterir."
  },

  "kos.aufgabe": { de: "Aufgabe wählen", en: "Choose a task", tr: "Görev seç" },
  "kos.kurz": { de: "Kurze Frage", en: "Short question", tr: "Kısa soru" },
  "kos.dokument": { de: "Langes Dokument zusammenfassen", en: "Summarise a long document", tr: "Uzun bir belgeyi özetle" },
  "kos.sitzung": { de: "Programmier-Sitzung mit Agent", en: "Coding session with an agent", tr: "Ajanla kodlama oturumu" },
  "kos.annahme": {
    de: "Die Zahlen hinter den Aufgaben sind Eingabe- und Ausgabe-Token. Es sind Annahmen zur Orientierung; trag darunter eigene Werte ein.",
    en: "The numbers after the tasks are input and output tokens. They are assumptions for orientation; enter your own values below.",
    tr: "Görevlerin yanındaki sayılar girdi ve çıktı token'larıdır. Yol gösterici varsayımlardır; aşağıya kendi değerlerini gir."
  },
  "kos.ein": { de: "Eingabe-Token", en: "Input tokens", tr: "Girdi token'ı" },
  "kos.aus": { de: "Ausgabe-Token", en: "Output tokens", tr: "Çıktı token'ı" },
  "kos.mal": { de: "Wiederholungen", en: "Repetitions", tr: "Tekrar sayısı" },
  "kos.cache": { de: "Anteil der Eingabe aus dem Cache", en: "Share of input from the cache", tr: "Girdinin önbellekten gelen payı" },
  "kos.alle": { de: "Alle Anbieter", en: "All providers", tr: "Tüm sağlayıcılar" },
  "kos.liste": { de: "Kosten je Modell", en: "Cost per model", tr: "Modele göre maliyet" },
  "kos.zGuenstig": { de: "Günstigstes", en: "Cheapest", tr: "En ucuz" },
  "kos.zTeuer": { de: "Teuerstes", en: "Most expensive", tr: "En pahalı" },
  "kos.zSpanne": { de: "Spanne", en: "Range", tr: "Aralık" },
  "kos.zModelle": { de: "Modelle", en: "Models", tr: "Model" },
  "kos.spRang": { de: "Nr.", en: "No.", tr: "No." },
  "kos.spModell": { de: "Modell", en: "Model", tr: "Model" },
  "kos.spEin": { de: "Eingabe je Mio.", en: "Input per million", tr: "Milyon başına girdi" },
  "kos.spAus": { de: "Ausgabe je Mio.", en: "Output per million", tr: "Milyon başına çıktı" },
  "kos.spKosten": { de: "Kosten (USD)", en: "Cost (USD)", tr: "Maliyet (USD)" },
  "kos.spFaktor": { de: "Faktor", en: "Factor", tr: "Kat" },
  "kos.preisquelle": { de: "Preise in US-Dollar je 1 Mio. Token laut models.dev, Grundtarif.", en: "Prices in US dollars per 1 million tokens according to models.dev, base rate.", tr: "Fiyatlar models.dev'e göre, 1 milyon token başına ABD doları, temel tarife." },
  "kos.wie": { de: "So wird gerechnet", en: "How it is calculated", tr: "Nasıl hesaplanır" },
  "kos.wieText": {
    de: "Kosten = Eingabe-Token × Eingabepreis + Ausgabe-Token × Ausgabepreis, geteilt durch eine Million und mal der Zahl der Wiederholungen. Für den Anteil der Eingabe aus dem Cache gilt der günstigere Cache-Preis, soweit er für das Modell bekannt ist, sonst der normale Eingabepreis. „Faktor“ sagt, wie viel mehr ein Modell kostet als das günstigste der Liste.",
    en: "Cost = input tokens × input price + output tokens × output price, divided by one million and multiplied by the number of repetitions. For the share of input from the cache, the cheaper cache price applies where it is known for the model, otherwise the normal input price. “Factor” says how much more a model costs than the cheapest in the list.",
    tr: "Maliyet = girdi token'ı × girdi fiyatı + çıktı token'ı × çıktı fiyatı; bir milyona bölünür ve tekrar sayısıyla çarpılır. Girdinin önbellekten gelen payı için, model için biliniyorsa daha ucuz önbellek fiyatı, bilinmiyorsa normal girdi fiyatı geçerlidir. “Kat”, bir modelin listedeki en ucuz modele göre kaç kat tuttuğunu gösterir."
  },
  "kos.warum": { de: "Warum Ausgabe teurer ist", en: "Why output costs more", tr: "Çıktı neden daha pahalı" },
  "kos.warumText": {
    de: "Geschriebene Token kosten bei fast allen Modellen ein Mehrfaches der gelesenen. Eine Aufgabe mit viel Eingabe und kurzer Antwort ist deshalb oft billiger, als ihre Größe vermuten lässt; lange Antworten und langes Nachdenken treiben die Kosten.",
    en: "With almost all models, written tokens cost several times as much as read ones. A task with a lot of input and a short answer is therefore often cheaper than its size suggests; long answers and long reasoning drive the cost.",
    tr: "Neredeyse tüm modellerde yazılan token, okunanın birkaç katı tutar. Bu yüzden girdisi çok, yanıtı kısa bir görev çoğu zaman büyüklüğünün düşündürdüğünden ucuzdur; uzun yanıtlar ve uzun düşünme maliyeti artırır."
  },
  "kos.grenzeText": {
    de: "Gerechnet wird mit dem Grundtarif laut models.dev. Aufschläge für sehr lange Eingaben, Rabatte für gesammelte Anfragen und Steuern fehlen. Die Token-Zahl ist für alle Modelle gleich gesetzt, obwohl Modelle denselben Text unterschiedlich zerlegen. Der Preis sagt nichts über die Qualität der Antwort.",
    en: "The calculation uses the base rate according to models.dev. Surcharges for very long inputs, discounts for batched requests and taxes are missing. The token count is set the same for all models, although models split the same text differently. The price says nothing about the quality of the answer.",
    tr: "Hesap, models.dev'e göre temel tarifeyle yapılır. Çok uzun girdiler için ek ücretler, toplu istek indirimleri ve vergiler yoktur. Modeller aynı metni farklı böldüğü halde token sayısı tüm modeller için aynı alınmıştır. Fiyat, yanıtın kalitesi hakkında bir şey söylemez."
  },

  "glo.suche": { de: "Begriff suchen", en: "Search for a term", tr: "Terim ara" },
  "glo.zahl": { de: "Begriffe", en: "terms", tr: "terim" },
  "glo.nichts": { de: "Kein Begriff gefunden.", en: "No term found.", tr: "Terim bulunamadı." },
  "glo.siehe": { de: "Mehr dazu", en: "More on this", tr: "Devamı" },

  "fin.keineBeratung": { de: "Keine Anlageberatung.", en: "No investment advice.", tr: "Yatırım tavsiyesi değildir." },
  "fin.keineBeratungText": {
    de: "Diese Seite nennt Tatsachen mit Quelle und Datum. Sie empfiehlt weder Kauf noch Verkauf und nennt keine Kursziele. Angaben ohne Gewähr.",
    en: "This page states facts with source and date. It recommends neither buying nor selling and gives no price targets. No guarantee is given for the information.",
    tr: "Bu sayfa olguları kaynak ve tarihle verir. Alım ya da satım önermez, fiyat hedefi belirtmez. Bilgilerin doğruluğu garanti edilmez."
  },
  "fin.geprueft": { de: "Geprüft am", en: "Checked on", tr: "Kontrol tarihi:" },
  "fin.ohneDatum": { de: "ohne Datum", en: "undated", tr: "tarihsiz" },
  "fin.presse": { de: "Pressebericht", en: "press report", tr: "basın haberi" },
  "fin.mrd": { de: "Mrd.", en: "bn", tr: "milyar" },
  "fin.anbieter": { de: "Anbieter", en: "Provider", tr: "Sağlayıcı" },
  "fin.datum": { de: "Datum", en: "Date", tr: "Tarih" },
  "fin.einzelheiten": { de: "Einzelheiten", en: "Details", tr: "Ayrıntılar" },
  "fin.alphabet": { de: "Die Zahlen für Google sind die des Mutterkonzerns Alphabet.", en: "The figures for Google are those of its parent company Alphabet.", tr: "Google için verilen rakamlar ana şirket Alphabet'e aittir." },
  "fin.zeichen": { de: "≤ heißt „bis zu“, > „mehr als“, ≈ „rund“.", en: "≤ means “up to”, > “more than”, ≈ “about”.", tr: "≤ “en çok”, > “daha fazla”, ≈ “yaklaşık” demektir." },

  "boe.liste": { de: "Anbieter wählen", en: "Choose a provider", tr: "Sağlayıcı seç" },
  "boe.achse": { de: "Erster Handelstag", en: "First day of trading", tr: "İlk işlem günü" },
  "boe.stand": { de: "Stand", en: "As of", tr: "Durum" },
  "boe.notiert": { de: "Notiert", en: "Listed", tr: "Borsada" },
  "boe.mutter": { de: "Über den Mutterkonzern", en: "Via the parent company", tr: "Ana şirket üzerinden" },
  "boe.laeuft": { de: "Börsengang läuft", en: "IPO under way", tr: "Halka arz sürüyor" },
  "boe.eingereicht": { de: "Eingereicht", en: "Filed", tr: "Başvuru yapıldı" },
  "boe.erwartet": { de: "erwartet", en: "expected", tr: "bekleniyor" },
  "boe.spStatus": { de: "Status", en: "Status", tr: "Durum" },
  "boe.platz": { de: "Börse und Kürzel", en: "Exchange and ticker", tr: "Borsa ve kod" },
  "boe.handel": { de: "Erster Handelstag", en: "First day of trading", tr: "İlk işlem günü" },
  "boe.handelErwartet": { de: "Erwarteter erster Handelstag", en: "Expected first day of trading", tr: "Beklenen ilk işlem günü" },
  "boe.eingereichtAm": { de: "Eingereicht am", en: "Filed on", tr: "Başvuru tarihi" },
  "boe.preis": { de: "Ausgabepreis je Aktie", en: "Offer price per share", tr: "Hisse başına arz fiyatı" },
  "boe.spanne": { de: "Preisspanne je Aktie", en: "Price range per share", tr: "Hisse başına fiyat aralığı" },
  "boe.aktien": { de: "Angebotene Aktien", en: "Shares offered", tr: "Arz edilen hisse" },
  "boe.tabelle": { de: "Alle Einträge", en: "All entries", tr: "Tüm kayıtlar" },
  "boe.was": { de: "Was ist ein Börsengang?", en: "What is an IPO?", tr: "Halka arz nedir?" },
  "boe.wasText": {
    de: "Bei einem Börsengang (englisch IPO, Initial Public Offering) verkauft ein Unternehmen zum ersten Mal Aktien an der Börse. Danach kann jeder die Aktie handeln, und das Unternehmen muss regelmäßig Zahlen veröffentlichen. Vorher gehört es wenigen Geldgebern und nennt Zahlen nur, wenn es will.",
    en: "In an IPO (initial public offering), a company sells shares on a stock exchange for the first time. After that anyone can trade the share, and the company has to publish figures regularly. Before that it belongs to a few investors and discloses figures only when it chooses to.",
    tr: "Halka arzda (İngilizce IPO, Initial Public Offering) bir şirket hisselerini ilk kez borsada satar. Bundan sonra hisseyi herkes alıp satabilir ve şirket düzenli olarak rakam yayımlamak zorundadır. Öncesinde şirket az sayıda yatırımcıya aittir ve rakamları yalnızca isterse açıklar."
  },
  "boe.schritte": { de: "Vom Antrag zum Handel", en: "From filing to trading", tr: "Başvurudan işleme" },
  "boe.s1": { de: "Einreichen", en: "Filing", tr: "Başvuru" },
  "boe.s1Text": { de: "Das Unternehmen reicht seinen Prospekt bei der Börsenaufsicht ein, in den USA zunächst oft vertraulich.", en: "The company files its prospectus with the securities regulator, in the US often confidentially at first.", tr: "Şirket izahnamesini sermaye piyasası kurumuna sunar; ABD'de başlangıçta çoğu zaman gizli olarak." },
  "boe.s2": { de: "Preisspanne", en: "Price range", tr: "Fiyat aralığı" },
  "boe.s2Text": { de: "Der öffentliche Prospekt nennt eine Spanne, in der die Aktie angeboten wird.", en: "The public prospectus states a range within which the share is offered.", tr: "Kamuya açık izahname, hissenin sunulacağı bir aralık belirtir." },
  "boe.s3": { de: "Preisfestsetzung", en: "Pricing", tr: "Fiyat belirleme" },
  "boe.s3Text": { de: "Kurz vor dem Handel legen Unternehmen und Banken den Ausgabepreis fest.", en: "Shortly before trading, the company and its banks set the offer price.", tr: "İşlemden kısa süre önce şirket ve bankalar arz fiyatını belirler." },
  "boe.s4": { de: "Erster Handelstag", en: "First day of trading", tr: "İlk işlem günü" },
  "boe.s4Text": { de: "Die Aktie wird an der Börse gehandelt; ab jetzt bildet der Markt den Preis.", en: "The share trades on the exchange; from now on the market sets the price.", tr: "Hisse borsada işlem görür; bundan sonra fiyatı piyasa belirler." },
  "boe.lange": { de: "Seit Langem an der Börse", en: "Long listed", tr: "Uzun süredir borsada" },
  "boe.langeText": {
    de: "Konzerne wie Alphabet (Google), Amazon, Apple, Meta, Microsoft, NVIDIA, AMD, Broadcom, IBM, Alibaba, Baidu, Tencent und Xiaomi sind seit vielen Jahren börsennotiert und stehen hier nicht einzeln. Zahlen aus ihren Berichten stehen unter „Bewertungen“ und „Rechenzentren“.",
    en: "Groups such as Alphabet (Google), Amazon, Apple, Meta, Microsoft, NVIDIA, AMD, Broadcom, IBM, Alibaba, Baidu, Tencent and Xiaomi have been listed for many years and are not shown individually here. Figures from their reports are under “Valuations” and “Data centres”.",
    tr: "Alphabet (Google), Amazon, Apple, Meta, Microsoft, NVIDIA, AMD, Broadcom, IBM, Alibaba, Baidu, Tencent ve Xiaomi gibi şirketler yıllardır borsada işlem görür ve burada tek tek yer almaz. Raporlarındaki rakamlar “Değerlemeler” ve “Veri merkezleri” bölümlerindedir."
  },
  "boe.grenzeText": {
    de: "Die Liste nennt nur Anbieter dieser Website, deren Börsenstatus hier mit Quelle belegt ist; sie ist nicht vollständig. Kurse zeigt die Seite bewusst nicht. Angekündigte Termine können sich verschieben.",
    en: "The list names only providers on this website whose listing status is documented here with a source; it is not complete. The page deliberately shows no share prices. Announced dates can shift.",
    tr: "Liste, yalnızca borsa durumu burada kaynakla belgelenen bu sitedeki sağlayıcıları içerir; eksiksiz değildir. Sayfa bilerek hisse fiyatı göstermez. Açıklanan tarihler değişebilir."
  },

  "bew.ordnen": { de: "Ordnen nach", en: "Sort by", tr: "Sıralama" },
  "bew.nachWert": { de: "Bewertung", en: "Valuation", tr: "Değerleme" },
  "bew.nachDatum": { de: "Datum", en: "Date", tr: "Tarih" },
  "bew.bild": { de: "Bewertungen im Vergleich", en: "Valuations compared", tr: "Değerlemelerin karşılaştırması" },
  "bew.balkenHinweis": {
    de: "Balken nur für Angaben in US-Dollar; der Euro-Wert ist nicht umgerechnet. Die Werte stammen von verschiedenen Tagen und aus verschiedenen Anlässen. Der Wert bei SpaceXSI gilt für den ganzen SpaceX-Konzern, nicht für die KI-Sparte.",
    en: "Bars only for figures in US dollars; the euro value is not converted. The values come from different days and different occasions. The value for SpaceXSI applies to the whole SpaceX group, not to the AI division.",
    tr: "Çubuklar yalnızca ABD doları cinsinden veriler içindir; avro değeri çevrilmemiştir. Değerler farklı günlere ve farklı vesilelere aittir. SpaceXSI değeri yapay zekâ bölümü için değil, tüm SpaceX grubu için geçerlidir."
  },
  "bew.runden": { de: "Runden und Börsengänge", en: "Rounds and IPOs", tr: "Turlar ve halka arzlar" },
  "bew.spArt": { de: "Anlass", en: "Occasion", tr: "Vesile" },
  "bew.spBetrag": { de: "Eingenommen", en: "Raised", tr: "Toplanan" },
  "bew.spBewertung": { de: "Bewertung", en: "Valuation", tr: "Değerleme" },
  "bew.keine": { de: "nicht genannt", en: "not stated", tr: "belirtilmedi" },
  "bew.kennzahlen": { de: "Zahlen aus den Berichten", en: "Figures from the reports", tr: "Raporlardan rakamlar" },
  "bew.spGroesse": { de: "Größe", en: "Measure", tr: "Ölçüt" },
  "bew.spZeitraum": { de: "Zeitraum", en: "Period", tr: "Dönem" },
  "bew.spWert": { de: "Wert", en: "Value", tr: "Değer" },
  "bew.was": { de: "Was heißt Bewertung?", en: "What does valuation mean?", tr: "Değerleme ne demek?" },
  "bew.wasText": {
    de: "Die Bewertung ist der Preis, den Geldgeber bei einer Runde für das ganze Unternehmen ansetzen: Preis je Anteil mal Zahl aller Anteile. „Post-money“ heißt: einschließlich des frisch eingenommenen Geldes. Eine Bewertung ist kein Kontostand und kein Umsatz; sie gilt für den Tag der Runde.",
    en: "The valuation is the price investors put on the whole company in a round: price per share times the number of all shares. “Post-money” means including the money just raised. A valuation is neither an account balance nor revenue; it applies to the day of the round.",
    tr: "Değerleme, yatırımcıların bir turda şirketin tamamına biçtiği fiyattır: pay başına fiyat çarpı tüm payların sayısı. “Post-money”, yeni toplanan parayı da içerdiği anlamına gelir. Değerleme ne hesap bakiyesi ne de gelirdir; turun yapıldığı gün için geçerlidir."
  },
  "bew.begriffe": { de: "Umsatz, Verlust, Auftragsbestand", en: "Revenue, loss, backlog", tr: "Gelir, zarar, sipariş bakiyesi" },
  "bew.begriffeText": {
    de: "Umsatz ist, was ein Unternehmen in einem Zeitraum einnimmt. Verlust entsteht, wenn die Aufwendungen höher sind; ein Teil davon kann reine Buchung sein, ohne dass Geld abfließt. Der Auftragsbestand ist der Wert fest vereinbarter, noch nicht erbrachter Leistungen.",
    en: "Revenue is what a company takes in over a period. A loss arises when expenses are higher; part of it can be a pure accounting entry with no cash leaving. The backlog is the value of firmly agreed services not yet delivered.",
    tr: "Gelir, bir şirketin belirli bir dönemde elde ettiği tutardır. Giderler daha yüksek olduğunda zarar oluşur; bunun bir bölümü, para çıkışı olmadan yalnızca muhasebe kaydı olabilir. Sipariş bakiyesi, kesin olarak anlaşılmış ama henüz yerine getirilmemiş hizmetlerin değeridir."
  },
  "bew.grenzeText": {
    de: "Bewertungen aus verschiedenen Runden sind nur eingeschränkt vergleichbar: Sie stammen von verschiedenen Tagen und folgen verschiedenen Regeln. Die Zahlen von OpenAI stammen aus der Presse, nicht aus einer eigenen Mitteilung. Der Stand des Börsengangs von Anthropic ändert sich in diesen Tagen.",
    en: "Valuations from different rounds can be compared only to a limited extent: they come from different days and follow different rules. The OpenAI figures come from the press, not from an announcement of its own. The status of Anthropic's IPO is changing these days.",
    tr: "Farklı turlardaki değerlemeler ancak sınırlı ölçüde karşılaştırılabilir: farklı günlere aittir ve farklı kurallara dayanır. OpenAI rakamları kendi duyurusundan değil, basından gelir. Anthropic'in halka arzının durumu bu günlerde değişmektedir."
  },

  "kz.umsatz": { de: "Umsatz", en: "Revenue", tr: "Gelir" },
  "kz.verlust": { de: "Nettoverlust", en: "Net loss", tr: "Net zarar" },
  "kz.auftragsbestand": { de: "Auftragsbestand", en: "Revenue backlog", tr: "Sipariş bakiyesi" },
  "kz.rechenzentren": { de: "Umsatz Rechenzentren", en: "Data centre revenue", tr: "Veri merkezi geliri" },
  "kz.cloud": { de: "Umsatz Cloud-Sparte", en: "Cloud revenue", tr: "Bulut geliri" },
  "kz.capex": { de: "Investitionsausgaben", en: "Capital expenditures", tr: "Yatırım harcamaları" },
  "kz.capexJahr": { de: "Investitionsausgaben, Ausblick", en: "Capital expenditures, outlook", tr: "Yatırım harcamaları, öngörü" },
  "kz.leistung": { de: "Vertraglich gesicherte Leistung", en: "Contracted power", tr: "Sözleşmeli güç" },

  "gel.bild": { de: "Wer gibt wem Geld?", en: "Who funds whom?", tr: "Kim kime para veriyor?" },
  "gel.ecke": { de: "Geldgeber ↓ · Empfänger →", en: "Investor ↓ · Recipient →", tr: "Yatırımcı ↓ · Alan →" },
  "gel.auswahl": { de: "Auswahl", en: "Selection", tr: "Seçim" },
  "gel.keine": { de: "Wähle ein Feld im Raster.", en: "Choose a field in the grid.", tr: "Tablodan bir alan seç." },
  "gel.lesen": { de: "So liest du das Raster", en: "How to read the grid", tr: "Tablo nasıl okunur" },
  "gel.lesenText": {
    de: "Links stehen die Geldgeber, oben die Empfänger. Ein gefülltes Feld ist eine belegte Beteiligung oder Übernahme, ein Feld nur mit Rand eine Angabe, deren Quelle sich nicht direkt abrufen ließ. Ein Klick zeigt Datum und Quelle.",
    en: "Investors are on the left, recipients at the top. A filled field is a documented stake or acquisition; a field with only a border is a statement whose source could not be retrieved directly. A click shows date and source.",
    tr: "Solda yatırımcılar, üstte alanlar yer alır. Dolu bir alan belgelenmiş bir pay ya da satın almadır; yalnızca çerçevesi olan alan ise kaynağına doğrudan erişilemeyen bir bilgidir. Tıklayınca tarih ve kaynak görünür."
  },
  "gel.doppelt": { de: "Geldgeber und Lieferant zugleich", en: "Investor and supplier at once", tr: "Hem yatırımcı hem tedarikçi" },
  "gel.doppeltText": {
    de: "Mehrere Geldgeber sind selbst Lieferanten der Branche: NVIDIA, AMD und Broadcom bauen Chips, Amazon, Google und Microsoft betreiben Rechenzentren. Bei Anthropic sind Amazon, Google und Broadcom zugleich Geldgeber und Lieferant von Rechenleistung; das steht unter „Rechenzentren“.",
    en: "Several investors are themselves suppliers to the industry: NVIDIA, AMD and Broadcom build chips; Amazon, Google and Microsoft run data centres. For Anthropic, Amazon, Google and Broadcom are both investors and suppliers of computing power; see “Data centres”.",
    tr: "Birçok yatırımcı aynı zamanda sektörün tedarikçisidir: NVIDIA, AMD ve Broadcom çip üretir; Amazon, Google ve Microsoft veri merkezi işletir. Anthropic için Amazon, Google ve Broadcom hem yatırımcı hem de işlem gücü tedarikçisidir; bu, “Veri merkezleri” bölümünde yer alır."
  },
  "gel.tabelle": { de: "Alle Beteiligungen und Übernahmen", en: "All stakes and acquisitions", tr: "Tüm paylar ve satın almalar" },
  "gel.runden": { de: "Geldgeber der Runden", en: "Investors in the rounds", tr: "Turların yatırımcıları" },
  "gel.spRunde": { de: "Runde", en: "Round", tr: "Tur" },
  "gel.spGeldgeber": { de: "Geldgeber laut Quelle", en: "Investors according to the source", tr: "Kaynağa göre yatırımcılar" },
  "gel.grenzeText": {
    de: "Das Raster zeigt nur Beziehungen zwischen Anbietern dieser Website. Geldgeber außerhalb davon, etwa Fonds oder Chiphersteller wie Micron und TSMC, stehen in der Tabelle der Runden. Die Liste ist nicht vollständig, und Beträge einzelner Geldgeber sind meist nicht veröffentlicht.",
    en: "The grid shows only relationships between providers on this website. Investors outside it, such as funds or chipmakers like Micron and TSMC, are in the table of rounds. The list is not complete, and the amounts of individual investors are mostly not published.",
    tr: "Tablo yalnızca bu sitedeki sağlayıcılar arasındaki ilişkileri gösterir. Bunun dışındaki yatırımcılar, örneğin fonlar veya Micron ve TSMC gibi çip üreticileri, turlar tablosunda yer alır. Liste eksiksiz değildir ve tek tek yatırımcıların tutarları çoğunlukla yayımlanmamıştır."
  },

  "rz.wahl": { de: "Zeitraum wählen", en: "Choose a period", tr: "Dönem seç" },
  "rz.jahr": { de: "Ausblick 2026", en: "Outlook 2026", tr: "2026 öngörüsü" },
  "rz.quartal": { de: "3. Quartal 2026", en: "Q3 2026", tr: "2026 3. çeyrek" },
  "rz.bild": { de: "Investitionsausgaben", en: "Capital expenditures", tr: "Yatırım harcamaları" },
  "rz.zFirmen": { de: "Firmen", en: "Companies", tr: "Şirket" },
  "rz.zVon": { de: "Summe von (Mrd. USD)", en: "Total from (bn USD)", tr: "Toplam, alt (milyar USD)" },
  "rz.zBis": { de: "Summe bis (Mrd. USD)", en: "Total up to (bn USD)", tr: "Toplam, üst (milyar USD)" },
  "rz.hinweis": {
    de: "Die Summe addiert nur die hier genannten Firmen. Für Microsoft ließ sich kein Wert an der Quelle bestätigen.",
    en: "The total adds up only the companies named here. For Microsoft no value could be confirmed at the source.",
    tr: "Toplam yalnızca burada adı geçen şirketleri içerir. Microsoft için kaynakta doğrulanabilen bir değer bulunamadı."
  },
  "rz.vertraege": { de: "Verträge über Rechenleistung", en: "Contracts for computing power", tr: "İşlem gücü sözleşmeleri" },
  "rz.weitere": { de: "Weitere Zahlen", en: "Further figures", tr: "Diğer rakamlar" },
  "rz.was": { de: "Was sind Investitionsausgaben?", en: "What are capital expenditures?", tr: "Yatırım harcamaları nedir?" },
  "rz.wasText": {
    de: "Investitionsausgaben (englisch Capex, capital expenditures) sind Geld für langlebige Güter. Bei KI-Firmen sind das vor allem Rechenzentren: Gebäude, Chips, Server, Stromanschlüsse und Kühlung. Die Ausgaben fallen heute an, die Einnahmen daraus kommen erst über Jahre.",
    en: "Capital expenditures (capex) are money spent on long-lived assets. For AI companies these are above all data centres: buildings, chips, servers, power connections and cooling. The spending happens today; the income from it arrives only over years.",
    tr: "Yatırım harcamaları (İngilizce capex, capital expenditures), uzun ömürlü varlıklara harcanan paradır. Yapay zekâ şirketlerinde bunlar en başta veri merkezleridir: binalar, çipler, sunucular, elektrik bağlantıları ve soğutma. Harcama bugün yapılır; bundan gelen gelir ise ancak yıllar içinde ortaya çıkar."
  },
  "rz.gw": { de: "Was ist ein Gigawatt?", en: "What is a gigawatt?", tr: "Gigavat nedir?" },
  "rz.gwText": {
    de: "Gigawatt (GW) ist eine Einheit für elektrische Leistung; ein Gigawatt sind 1.000 Megawatt. Rechenzentren werden nach der Leistung bemessen, die sie aufnehmen können, weil Strom und Kühlung bestimmen, wie viele Chips dort laufen. Zur Einordnung: Ein großer Kraftwerksblock liefert etwa ein Gigawatt.",
    en: "The gigawatt (GW) is a unit of electrical power; one gigawatt is 1,000 megawatts. Data centres are measured by the power they can draw, because electricity and cooling determine how many chips can run there. For scale: a large power plant unit delivers about one gigawatt.",
    tr: "Gigavat (GW) bir elektrik gücü birimidir; bir gigavat 1.000 megavattır. Veri merkezleri çekebildikleri güce göre ölçülür, çünkü orada kaç çipin çalışacağını elektrik ve soğutma belirler. Karşılaştırma için: büyük bir santral ünitesi yaklaşık bir gigavat üretir."
  },
  "rz.grenzeText": {
    de: "Die Firmen grenzen Investitionsausgaben nicht gleich ab; Meta etwa zählt die Tilgung von Finanzierungsleasing mit. Ein Ausblick ist eine Ankündigung, keine Abrechnung. Nicht alle Ausgaben fließen in KI. Vertragsangaben wie „bis zu 5 Gigawatt“ nennen eine Obergrenze, keinen Zeitplan.",
    en: "Companies do not define capital expenditures in the same way; Meta, for example, includes principal payments on finance leases. An outlook is an announcement, not a final account. Not all spending goes into AI. Contract statements such as “up to 5 gigawatts” name an upper limit, not a schedule.",
    tr: "Şirketler yatırım harcamalarını aynı biçimde tanımlamaz; örneğin Meta, finansal kiralama anapara ödemelerini de sayar. Öngörü bir duyurudur, kesin hesap değildir. Harcamaların tümü yapay zekâya gitmez. “5 gigavata kadar” gibi sözleşme ifadeleri bir üst sınır belirtir, takvim değil."
  },

  "na.modell": { de: "Modell", en: "Model", tr: "Model" },
  "na.geld": { de: "Geld", en: "Money", tr: "Para" },
  "na.rechner": { de: "Rechenleistung", en: "Computing power", tr: "İşlem gücü" },
  "na.uebernahme": { de: "Übernahme", en: "Acquisition", tr: "Satın alma" },
  "na.boerse": { de: "Börse", en: "Stock market", tr: "Borsa" },
  "neu.modell": { de: "{modell} veröffentlicht", en: "{modell} released", tr: "{modell} yayımlandı" },
  "neu.handel": { de: "Erster Handelstag an der {platz} ({kuerzel})", en: "First day of trading on {platz} ({kuerzel})", tr: "{platz} borsasında ilk işlem günü ({kuerzel})" },
  "neu.handelMutter": { de: "Erster Handelstag des Mutterkonzerns an der {platz} ({kuerzel})", en: "First day of trading of the parent company on {platz} ({kuerzel})", tr: "Ana şirketin {platz} borsasında ilk işlem günü ({kuerzel})" },
  "neu.eingereicht": { de: "Börsengang vertraulich eingereicht", en: "IPO filed confidentially", tr: "Halka arz için gizli başvuru yapıldı" },
  "neu.offen": { de: "Datum oder Quelle ließen sich nicht direkt beim Anbieter prüfen.", en: "Date or source could not be checked directly with the provider.", tr: "Tarih veya kaynak doğrudan sağlayıcıdan kontrol edilemedi." },
  "neu.herkunft": {
    de: "Die Meldungen entstehen aus den Daten dieser Website: Spitzenmodelle der Anbieter, Beziehungen, Finanzierungsrunden und Börsengänge. Jede trägt Datum und Quelle.",
    en: "The news items are generated from this website's data: the providers' flagship models, relationships, funding rounds and IPOs. Each carries a date and a source.",
    tr: "Haberler bu sitenin verilerinden oluşur: sağlayıcıların amiral gemisi modelleri, ilişkiler, yatırım turları ve halka arzlar. Her biri tarih ve kaynak taşır."
  },

  "zt.spanne": { de: "Zeitraum", en: "Period", tr: "Dönem" },
  "zt.drei": { de: "3 Monate", en: "3 months", tr: "3 ay" },
  "zt.jahr": { de: "12 Monate", en: "12 months", tr: "12 ay" },
  "zt.alles": { de: "Alles", en: "Everything", tr: "Tümü" },
  "zt.auswahl": { de: "Gewählte Meldung", en: "Selected item", tr: "Seçilen haber" },
  "zt.lesen": { de: "So liest du die Achse", en: "How to read the timeline", tr: "Eksen nasıl okunur" },
  "zt.lesenText": {
    de: "Jede Marke ist eine Meldung, geordnet nach Art und Tag. Mehrere Meldungen am selben Tag stehen übereinander. Eine leere Marke heißt: Datum oder Quelle ließen sich nicht direkt beim Anbieter prüfen. Ein Klick zeigt die Meldung mit ihrer Quelle.",
    en: "Each mark is a news item, arranged by type and day. Several items on the same day are stacked. An empty mark means: date or source could not be checked directly with the provider. A click shows the item with its source.",
    tr: "Her işaret, türe ve güne göre dizilmiş bir haberdir. Aynı güne ait haberler üst üste durur. Boş işaret, tarihin veya kaynağın doğrudan sağlayıcıdan kontrol edilemediği anlamına gelir. Tıklayınca haber kaynağıyla birlikte görünür."
  },
  "zt.grenzeText": {
    de: "Die Achse zeigt nur, was in den Daten dieser Website steht: je Anbieter das jüngste Spitzenmodell, nicht jede Veröffentlichung. Sie ist kein vollständiger Nachrichtenüberblick.",
    en: "The timeline shows only what is in this website's data: for each provider the latest flagship model, not every release. It is not a complete news overview.",
    tr: "Eksen yalnızca bu sitenin verilerinde yer alanları gösterir: her sağlayıcı için en yeni amiral gemisi model, her yayın değil. Eksiksiz bir haber özeti değildir."
  },

  "mel.alle": { de: "Alle", en: "All", tr: "Tümü" },
  "mel.suche": { de: "Meldung suchen", en: "Search news items", tr: "Haber ara" },
  "mel.zahl": { de: "Meldungen", en: "items", tr: "haber" },
  "mel.nichts": { de: "Keine Meldung gefunden.", en: "No item found.", tr: "Haber bulunamadı." },
  "mel.spArt": { de: "Art", en: "Type", tr: "Tür" },
  "mel.spMeldung": { de: "Meldung", en: "Item", tr: "Haber" },

  "pro.liste": { de: "Was sich an der Website geändert hat", en: "What has changed on the website", tr: "Sitede neler değişti" },
  "pro.spVersion": { de: "Version", en: "Version", tr: "Sürüm" },
  "pro.spAenderung": { de: "Änderung", en: "Change", tr: "Değişiklik" },
  "pro.was": { de: "Was die Version bedeutet", en: "What the version means", tr: "Sürüm ne anlama gelir" },
  "pro.wasText": {
    de: "Die Seitenversion steht unten auf jeder Seite. Sie steigt, wenn sich Aufbau oder Funktionen der Website ändern. Die Daten ändern sich öfter als die Seite; wann welche Angabe zuletzt geprüft wurde, steht unter Methodik.",
    en: "The site version is shown at the bottom of every page. It rises when the structure or functions of the website change. The data changes more often than the site; when each figure was last checked is under Method.",
    tr: "Site sürümü her sayfanın altında yer alır. Sitenin yapısı veya işlevleri değiştiğinde artar. Veriler siteden daha sık değişir; hangi bilginin en son ne zaman kontrol edildiği Yöntem bölümündedir."
  },
  "pro.zurMethodik": { de: "Zum Datenstand", en: "To the data status", tr: "Veri durumuna git" },

  "her.wahl": { de: "Datenart wählen", en: "Choose a type of data", tr: "Veri türü seç" },
  "her.zUmfang": { de: "Umfang", en: "Scope", tr: "Kapsam" },
  "her.zStand": { de: "Geprüft am", en: "Checked on", tr: "Kontrol tarihi" },
  "her.zRhythmus": { de: "Prüfrhythmus", en: "Check interval", tr: "Kontrol sıklığı" },
  "her.quelle": { de: "Woher die Angaben stammen", en: "Where the figures come from", tr: "Bilgiler nereden geliyor" },
  "her.pflege": { de: "Wie sie gepflegt werden", en: "How they are maintained", tr: "Nasıl güncelleniyor" },
  "her.lizenz": { de: "Lizenz", en: "Licence", tr: "Lisans" },
  "her.zurSeite": { de: "Zur Seite mit diesen Angaben", en: "To the page with these figures", tr: "Bu bilgilerin bulunduğu sayfaya git" },
  "her.tabelle": { de: "Alle Datenarten", en: "All types of data", tr: "Tüm veri türleri" },
  "her.spArt": { de: "Datenart", en: "Type of data", tr: "Veri türü" },

  "rh.woche": { de: "wöchentlich", en: "weekly", tr: "haftalık" },
  "rh.monat": { de: "monatlich", en: "monthly", tr: "aylık" },
  "rh.anlass": { de: "bei Anlass", en: "when something happens", tr: "gelişme olduğunda" },
  "rh.bedarf": { de: "bei Bedarf", en: "as needed", tr: "gerektiğinde" },

  "std.zeigen": { de: "Anzeigen", en: "Show", tr: "Göster" },
  "std.nurOffen": { de: "Nur mit offenen Angaben", en: "Only with open details", tr: "Yalnızca açık bilgisi olanlar" },
  "std.ueberblick": { de: "Überblick", en: "Overview", tr: "Genel bakış" },
  "std.zGeprueft": { de: "Anbieter", en: "Providers", tr: "Sağlayıcı" },
  "std.zOffen": { de: "Mit Offenem", en: "With open items", tr: "Açık bilgili" },
  "std.zBelegt": { de: "Datum belegt", en: "Date documented", tr: "Tarih belgeli" },
  "std.zBeziehungen": { de: "Beziehungen", en: "Relationships", tr: "İlişki" },
  "std.zahlenText": {
    de: "Die vier Zahlen: geprüfte Anbieter, Anbieter mit mindestens einer offenen Angabe, Spitzenmodelle, deren Datum der Anbieter selbst nennt, und Beziehungen, deren Quelle sich direkt abrufen ließ.",
    en: "The four numbers: providers checked, providers with at least one open detail, flagship models whose date the provider itself states, and relationships whose source could be retrieved directly.",
    tr: "Dört sayı: kontrol edilen sağlayıcılar, en az bir açık bilgisi olan sağlayıcılar, tarihini sağlayıcının kendisinin belirttiği amiral gemisi modeller ve kaynağına doğrudan erişilebilen ilişkiler."
  },
  "std.arten": { de: "Stand je Datenart", en: "Status per type of data", tr: "Veri türüne göre durum" },
  "std.anbieter": { de: "Stand je Anbieter", en: "Status per provider", tr: "Sağlayıcıya göre durum" },
  "std.spModell": { de: "Spitzenmodell", en: "Flagship model", tr: "Amiral gemisi model" },
  "std.spDatum": { de: "Datum des Modells", en: "Date of the model", tr: "Modelin tarihi" },
  "std.spOffen": { de: "Offene Angaben", en: "Open details", tr: "Açık bilgiler" },
  "std.unbelegt": { de: "nicht vom Anbieter", en: "not from the provider", tr: "sağlayıcıdan değil" },
  "std.keine": { de: "keine", en: "none", tr: "yok" },
  "std.was": { de: "Was heißt „geprüft am“?", en: "What does “checked on” mean?", tr: "“Kontrol tarihi” ne demek?" },
  "std.wasText": {
    de: "An diesem Tag wurden die Angaben eines Eintrags mit seinen Quellen verglichen. Das Datum sagt nicht, dass sich seither nichts geändert hat.",
    en: "On that day the details of an entry were compared with its sources. The date does not say that nothing has changed since.",
    tr: "O gün bir kaydın bilgileri kaynaklarıyla karşılaştırılmıştır. Tarih, o günden beri hiçbir şeyin değişmediği anlamına gelmez."
  },
  "std.offen": { de: "Was heißt „offen“?", en: "What does “open” mean?", tr: "“Açık” ne demek?" },
  "std.offenText": {
    de: "Eine Angabe ist offen, wenn sie sich an keiner verlässlichen Quelle bestätigen ließ. Sie steht dann ausdrücklich so da, statt geschätzt zu werden.",
    en: "A detail is open when it could not be confirmed at any reliable source. It is then stated as such rather than being estimated.",
    tr: "Bir bilgi, güvenilir bir kaynakta doğrulanamadığında açıktır. Bu durumda tahmin edilmez, açıkça böyle belirtilir."
  },

  "pfl.plan": { de: "Vorgesehener Prüfrhythmus", en: "Intended check interval", tr: "Öngörülen kontrol sıklığı" },
  "pfl.spRhythmus": { de: "Rhythmus", en: "Interval", tr: "Sıklık" },
  "pfl.wie": { de: "So wird gepflegt", en: "How maintenance works", tr: "Güncelleme nasıl yapılır" },
  "pfl.wieText": {
    de: "Die Website wird von Hand gepflegt. Wer eine Angabe ändert, liest sie an der Quelle nach, trägt Quelle und Datum ein und lässt danach ein Prüfprogramm laufen. Erst dann wird veröffentlicht.",
    en: "The website is maintained by hand. Whoever changes a figure reads it at the source, enters source and date, and then runs a checking program. Only then is it published.",
    tr: "Site elle güncellenir. Bir bilgiyi değiştiren kişi onu kaynağından okur, kaynağı ve tarihi girer, ardından bir denetim programı çalıştırır. Ancak bundan sonra yayımlanır."
  },
  "pfl.programme": { de: "Drei Prüfprogramme", en: "Three checking programs", tr: "Üç denetim programı" },
  "pfl.programmeText": {
    de: "Drei kleine Programme helfen bei der Pflege. Das erste prüft, ob jeder Text in drei Sprachen vorliegt und ob Quelle und Datum vorhanden sind. Das zweite ruft die Webadressen der Anbieterdaten ab und meldet tote Verweise. Das dritte gleicht die Modell-Liste mit models.dev ab.",
    en: "Three small programs help with maintenance. The first checks whether every text exists in three languages and whether source and date are present. The second fetches the web addresses in the provider data and reports dead links. The third compares the model list with models.dev.",
    tr: "Güncellemeye üç küçük program yardımcı olur. Birincisi her metnin üç dilde bulunup bulunmadığını ve kaynak ile tarihin mevcut olup olmadığını denetler. İkincisi sağlayıcı verilerindeki web adreslerini açar ve ölü bağlantıları bildirir. Üçüncüsü model listesini models.dev ile karşılaştırır."
  },
  "pfl.fehler": { de: "Fehler melden", en: "Report an error", tr: "Hata bildir" },
  "pfl.fehlerText": {
    de: "Eine Angabe ist falsch oder veraltet? Ein Hinweis über „Feedback“ unten auf jeder Seite genügt, am besten mit einer Quelle.",
    en: "A figure is wrong or out of date? A note via “Feedback” at the bottom of every page is enough, ideally with a source.",
    tr: "Bir bilgi yanlış mı ya da eski mi? Her sayfanın altındaki “Geri bildirim” bağlantısından, tercihen bir kaynakla birlikte bildirmen yeterlidir."
  },
  "pfl.schritte": { de: "Der Weg einer Änderung", en: "The path of a change", tr: "Bir değişikliğin yolu" },
  "pfl.s1": { de: "Nachlesen", en: "Read", tr: "Oku" },
  "pfl.s1Text": { de: "Die Angabe an ihrer Quelle lesen, möglichst beim Anbieter selbst.", en: "Read the figure at its source, if possible with the provider itself.", tr: "Bilgiyi kaynağından, mümkünse doğrudan sağlayıcıdan oku." },
  "pfl.s2": { de: "Eintragen", en: "Enter", tr: "Gir" },
  "pfl.s2Text": { de: "Wert, Quelle und Prüfdatum in die Datendatei schreiben, Texte in drei Sprachen.", en: "Write value, source and check date into the data file, texts in three languages.", tr: "Değeri, kaynağı ve kontrol tarihini veri dosyasına yaz; metinleri üç dilde." },
  "pfl.s3": { de: "Prüfen", en: "Check", tr: "Denetle" },
  "pfl.s3Text": { de: "Das Prüfprogramm kontrolliert, dass nichts fehlt und jede Angabe ihre Quelle hat.", en: "The checking program verifies that nothing is missing and every figure has its source.", tr: "Denetim programı hiçbir şeyin eksik olmadığını ve her bilginin kaynağının bulunduğunu doğrular." },
  "pfl.s4": { de: "Veröffentlichen", en: "Publish", tr: "Yayımla" },
  "pfl.s4Text": { de: "Die neue Fassung geht online; größere Änderungen stehen im Änderungsprotokoll.", en: "The new version goes online; larger changes are recorded in the change log.", tr: "Yeni sürüm yayına girer; büyük değişiklikler değişiklik günlüğünde yer alır." },

  "gre.einleitung": {
    de: "Diese Website ist ein Nachschlagewerk mit geprüften, aber begrenzten Angaben. Hier steht, was sie nicht leistet.",
    en: "This website is a reference with checked but limited information. This is what it does not provide.",
    tr: "Bu site, kontrol edilmiş ama sınırlı bilgiler içeren bir başvuru kaynağıdır. Burada sunmadıkları yer alır."
  },

  "ds.tafel": { de: "Datenschutzhinweise", en: "Privacy notice", tr: "Gizlilik bildirimi" },
  "ds.stand": { de: "Stand:", en: "Last updated:", tr: "Güncelleme:" },
  "ds.kurz": { de: "Kurz gesagt:", en: "In short:", tr: "Kısaca:" },
  "ds.inhalt": { de: "Inhalt", en: "Contents", tr: "İçindekiler" },
  "ds.vorlage": { de: "Maßgeblich ist die deutsche Fassung.", en: "The German version is authoritative.", tr: "Almanca metin esas alınır." },

  "band.titel": { de: "Meldungen", en: "News", tr: "Haberler" },
  "band.alle": { de: "Alle Meldungen", en: "All news", tr: "Tüm haberler" }
};
