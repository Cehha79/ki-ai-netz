// Methodik: woher jede Art von Angabe stammt, wie sie gepflegt wird und wo die Website ihre
// Grenzen hat. Von Hand gepflegt. Umfang und Prüfdatum je Datenart berechnet die Seite aus den
// Datendateien selbst; hier stehen nur die Beschreibungen.
// rhythmus: "woche", "monat", "anlass" (wenn etwas geschieht) oder "bedarf".
window.KI_DATENARTEN = [
  {
    id: "anbieter", rhythmus: "monat", seite: "anbieter.html",
    name: { de: "Anbieter", en: "Providers", tr: "Sağlayıcılar" },
    einheit: { de: "Anbieter", en: "providers", tr: "sağlayıcı" },
    quelle: { de: "Websites und Dokumentation der Anbieter; für Sitz und Gründungsjahr auch Wikipedia.", en: "The providers' websites and documentation; for headquarters and founding year also Wikipedia.", tr: "Sağlayıcıların web siteleri ve belgeleri; merkez ve kuruluş yılı için ayrıca Wikipedia." },
    pflege: { de: "Von Hand. Jeder Eintrag nennt seine Quellen und sein Prüfdatum. Was sich nicht bestätigen ließ, ist als offen gekennzeichnet.", en: "By hand. Every entry names its sources and its check date. Whatever could not be confirmed is marked as open.", tr: "Elle. Her kayıt kaynaklarını ve kontrol tarihini belirtir. Doğrulanamayan bilgiler açık olarak işaretlenir." }
  },
  {
    id: "spitzenmodelle", rhythmus: "woche", seite: "index.html",
    name: { de: "Spitzenmodelle", en: "Flagship models", tr: "Amiral gemisi modeller" },
    einheit: { de: "Modelle mit Datum", en: "models with a date", tr: "tarihli model" },
    quelle: { de: "Ankündigungen, Änderungsprotokolle und Modellseiten der Anbieter.", en: "The providers' announcements, change logs and model pages.", tr: "Sağlayıcıların duyuruları, değişiklik günlükleri ve model sayfaları." },
    pflege: { de: "Von Hand. Stammt das Datum nicht vom Anbieter selbst, ist es gekennzeichnet.", en: "By hand. If the date does not come from the provider itself, it is marked.", tr: "Elle. Tarih doğrudan sağlayıcıdan gelmiyorsa işaretlenir." }
  },
  {
    id: "modelle", rhythmus: "woche", seite: "modelle.html",
    name: { de: "Modelle und Preise", en: "Models and prices", tr: "Modeller ve fiyatlar" },
    einheit: { de: "Modelle", en: "models", tr: "model" },
    quelle: { de: "models.dev, eine offene Sammlung unter MIT-Lizenz. Preise in US-Dollar je 1 Mio. Token, Grundtarif.", en: "models.dev, an open collection under the MIT licence. Prices in US dollars per 1 million tokens, base rate.", tr: "models.dev, MIT lisanslı açık bir derlem. Fiyatlar 1 milyon token başına ABD doları, temel tarife." },
    pflege: { de: "Mit einem Skript abgerufen. Es meldet neue und entfallene Modelle und geänderte Preise. models.dev kann den Anbietern hinterherhinken.", en: "Retrieved with a script. It reports new and removed models and changed prices. models.dev can lag behind the providers.", tr: "Bir betikle alınır. Betik yeni ve kaldırılan modelleri ve değişen fiyatları bildirir. models.dev sağlayıcıların gerisinde kalabilir." }
  },
  {
    id: "beziehungen", rhythmus: "anlass", seite: "index.html",
    name: { de: "Beziehungen", en: "Relationships", tr: "İlişkiler" },
    einheit: { de: "Beziehungen", en: "relationships", tr: "ilişki" },
    quelle: { de: "Mitteilungen der Firmen und Presseberichte.", en: "Company announcements and press reports.", tr: "Şirket duyuruları ve basın haberleri." },
    pflege: { de: "Von Hand. Jede Beziehung hat Datum und Quelle. Ließ sich die Quelle nicht direkt abrufen, ist das vermerkt.", en: "By hand. Every relationship has a date and a source. If the source could not be retrieved directly, that is noted.", tr: "Elle. Her ilişkinin tarihi ve kaynağı vardır. Kaynağa doğrudan erişilemediyse bu belirtilir." }
  },
  {
    id: "abos", rhythmus: "monat", seite: "wissen.html#limits",
    name: { de: "Abos und Limits", en: "Plans and limits", tr: "Abonelikler ve limitler" },
    einheit: { de: "Abos", en: "plans", tr: "abonelik" },
    quelle: { de: "Preis- und Hilfeseiten der Anbieter.", en: "The providers' pricing and help pages.", tr: "Sağlayıcıların fiyat ve yardım sayfaları." },
    pflege: { de: "Von Hand. Preise, die sich nicht bestätigen ließen, stehen als „nicht bestätigt“ da.", en: "By hand. Prices that could not be confirmed are shown as “not confirmed”.", tr: "Elle. Doğrulanamayan fiyatlar “doğrulanmadı” olarak gösterilir." }
  },
  {
    id: "finanzen", rhythmus: "monat", seite: "finanzen.html",
    name: { de: "Finanzen", en: "Finance", tr: "Finans" },
    einheit: { de: "Quellen", en: "sources", tr: "kaynak" },
    quelle: { de: "Mitteilungen und Pflichtberichte der Firmen, Unterlagen der US-Börsenaufsicht, Presseberichte.", en: "Company announcements and mandatory reports, filings with the US securities regulator, press reports.", tr: "Şirket duyuruları ve zorunlu raporlar, ABD sermaye piyasası kurumuna sunulan belgeler, basın haberleri." },
    pflege: { de: "Von Hand. Jede Zahl ist an ihrer Quelle nachgelesen; Presseberichte sind als solche gekennzeichnet. Keine Kurse.", en: "By hand. Every figure has been read at its source; press reports are marked as such. No share prices.", tr: "Elle. Her rakam kaynağından okunmuştur; basın haberleri ayrıca işaretlenir. Hisse fiyatı yoktur." }
  },
  {
    id: "glossar", rhythmus: "bedarf", seite: "wissen.html#glossar",
    name: { de: "Glossar", en: "Glossary", tr: "Sözlük" },
    einheit: { de: "Begriffe", en: "terms", tr: "terim" },
    quelle: { de: "Eigene Texte dieser Website.", en: "This website's own texts.", tr: "Bu sitenin kendi metinleri." },
    pflege: { de: "Von Hand, wenn ein neuer Begriff gebraucht wird.", en: "By hand, when a new term is needed.", tr: "Elle, yeni bir terim gerektiğinde." }
  },
  {
    id: "logos", rhythmus: "anlass", seite: "anbieter.html",
    name: { de: "Logos", en: "Logos", tr: "Logolar" },
    einheit: { de: "Zeichen", en: "marks", tr: "işaret" },
    quelle: { de: "Offizielle Websites und offizielle Auftritte der Anbieter.", en: "The providers' official websites and official presences.", tr: "Sağlayıcıların resmî web siteleri ve resmî hesapları." },
    pflege: { de: "Lokal gespeicherte Originaldateien; nichts ist nachgezeichnet. Die Rechte an den Zeichen liegen bei den Anbietern.", en: "Locally stored original files; nothing has been redrawn. The rights to the marks belong to the providers.", tr: "Yerel olarak saklanan özgün dosyalar; hiçbiri yeniden çizilmemiştir. İşaretlerin hakları sağlayıcılara aittir." }
  },
  {
    id: "schaubilder", rhythmus: "bedarf", seite: "technik.html",
    name: { de: "Schaubilder zur Technik", en: "Technology diagrams", tr: "Teknoloji şemaları" },
    einheit: { de: "Schaubilder", en: "diagrams", tr: "şema" },
    quelle: { de: "Eigene Darstellungen dieser Website.", en: "This website's own illustrations.", tr: "Bu sitenin kendi gösterimleri." },
    pflege: { de: "Was nicht gemessen oder berechnet ist, steht als Näherung oder Veranschaulichung auf der Seite.", en: "Whatever is not measured or calculated is labelled on the page as an approximation or illustration.", tr: "Ölçülmemiş ya da hesaplanmamış olanlar sayfada yaklaşım veya örnekleme olarak belirtilir." }
  }
];

window.KI_GRENZEN = [
  {
    titel: { de: "Nicht vollständig", en: "Not complete", tr: "Eksiksiz değil" },
    text: { de: "Die Website zeigt eine Auswahl von Anbietern. Es gibt weit mehr Firmen und Modelle, als hier stehen.", en: "The website shows a selection of providers. There are far more companies and models than appear here.", tr: "Site, sağlayıcılardan bir seçki gösterir. Burada yer alanlardan çok daha fazla şirket ve model vardır." }
  },
  {
    titel: { de: "Nicht in Echtzeit", en: "Not in real time", tr: "Gerçek zamanlı değil" },
    text: { de: "Jede Angabe gilt für ihr Prüfdatum. Die Website holt beim Öffnen keine Angaben aus dem Netz; zwischen zwei Prüfungen kann sich etwas geändert haben.", en: "Every figure applies to its check date. The website does not fetch any figures from the net when opened; something may have changed between two checks.", tr: "Her bilgi kendi kontrol tarihi için geçerlidir. Site açılırken ağdan bilgi çekmez; iki kontrol arasında bir şeyler değişmiş olabilir." }
  },
  {
    titel: { de: "Preise sind Grundtarife", en: "Prices are base rates", tr: "Fiyatlar temel tarifedir" },
    text: { de: "Modellpreise stammen von models.dev und sind Grundtarife. Rabatte, Aufschläge und Steuern fehlen, und models.dev kann den Anbietern hinterherhinken.", en: "Model prices come from models.dev and are base rates. Discounts, surcharges and taxes are missing, and models.dev can lag behind the providers.", tr: "Model fiyatları models.dev'den gelir ve temel tarifedir. İndirimler, ek ücretler ve vergiler yoktur; models.dev sağlayıcıların gerisinde kalabilir." }
  },
  {
    titel: { de: "Keine Rangliste", en: "No ranking", tr: "Sıralama yok" },
    text: { de: "Die Website bewertet nicht, welches Modell besser ist. Reihenfolgen folgen Datum, Preis oder Alphabet, nicht der Qualität.", en: "The website does not judge which model is better. Orderings follow date, price or alphabet, not quality.", tr: "Site hangi modelin daha iyi olduğunu değerlendirmez. Sıralamalar kaliteye değil; tarihe, fiyata veya alfabeye göredir." }
  },
  {
    titel: { de: "Veranschaulichungen", en: "Illustrations", tr: "Örneklemeler" },
    text: { de: "Mehrere Schaubilder zur Technik sind Näherungen oder Veranschaulichungen. Das steht jeweils dabei.", en: "Several technology diagrams are approximations or illustrations. Each one says so.", tr: "Teknoloji şemalarının birkaçı yaklaşım veya örneklemedir. Bu, her birinin yanında belirtilir." }
  },
  {
    titel: { de: "Keine Anlageberatung", en: "No investment advice", tr: "Yatırım tavsiyesi değil" },
    text: { de: "Der Bereich Finanzen nennt Tatsachen mit Quelle und Datum. Er empfiehlt nichts und zeigt keine Kurse.", en: "The Finance section states facts with source and date. It recommends nothing and shows no share prices.", tr: "Finans bölümü olguları kaynak ve tarihle verir. Hiçbir şey önermez ve hisse fiyatı göstermez." }
  },
  {
    titel: { de: "Drei Sprachen, eine Vorlage", en: "Three languages, one original", tr: "Üç dil, tek asıl metin" },
    text: { de: "Der deutsche Text ist die Vorlage; Englisch und Türkisch sind Übersetzungen. Bei Abweichungen gilt der deutsche Text.", en: "The German text is the original; English and Turkish are translations. Where they differ, the German text applies.", tr: "Asıl metin Almancadır; İngilizce ve Türkçe çevirilerdir. Farklılık olursa Almanca metin geçerlidir." }
  },
  {
    titel: { de: "Fehler sind möglich", en: "Errors are possible", tr: "Hatalar olabilir" },
    text: { de: "Trotz Prüfung können Angaben falsch oder veraltet sein. Hinweise sind willkommen, über „Feedback“ unten auf jeder Seite.", en: "Despite checking, figures can be wrong or out of date. Corrections are welcome, via “Feedback” at the bottom of every page.", tr: "Kontrole rağmen bilgiler yanlış veya eski olabilir. Uyarılar memnuniyetle karşılanır; her sayfanın altındaki “Geri bildirim” bağlantısından iletilebilir." }
  }
];
