// Datenschutzhinweise der Website in drei Sprachen. Von Hand gepflegt; der deutsche Text ist die
// Vorlage. Jeder Abschnitt besteht aus Teilen: "absatz" (Text), "liste" (Überschrift und Punkte)
// oder "verweise" (Name und Adresse). Texte stehen nie als HTML in den Daten.
window.KI_DATENSCHUTZ = {
  // Monat, in dem die Hinweise zuletzt geändert wurden.
  stand: "2026-11",
  kurz: {
    de: "Diese Website verwendet keine Cookies und keine Werbe- oder Profiling-Werkzeuge. Zur einfachen Reichweitenmessung läuft ein cookieloser Besucherzähler (GoatCounter), der keine personenbezogenen Profile bildet. Drei Einstellungen, Sprache, Klang und Bewegung, bleiben in Ihrem Browser gespeichert und werden nicht übertragen. Personenbezogene Daten fallen darüber hinaus nur an, wenn Sie uns aktiv per E-Mail kontaktieren.",
    en: "This website uses no cookies and no advertising or profiling tools. For basic traffic measurement it runs a cookieless visitor counter (GoatCounter) that builds no personal profiles. Three settings, language, sound and motion, are stored in your browser and are not transmitted. Beyond that, personal data is only processed if you actively contact us by e-mail.",
    tr: "Bu site çerez kullanmaz; reklam veya profil oluşturma aracı da kullanmaz. Basit erişim ölçümü için, kişisel profil oluşturmayan çerezsiz bir ziyaretçi sayacı (GoatCounter) çalışır. Üç ayar, dil, ses ve hareket, tarayıcınızda saklanır ve aktarılmaz. Bunun dışında kişisel veriler yalnızca bize e-postayla kendiniz ulaştığınızda işlenir."
  },
  abschnitte: [
    {
      titel: { de: "Verantwortlicher", en: "Controller", tr: "Veri sorumlusu" },
      teile: [
        { art: "absatz", text: {
          de: "Verantwortlich für diese Website ist MikaTec (Hasan Tepegöz). Anschrift, Kontakt und die vollständigen Pflichtangaben stehen im Impressum und in der ausführlichen Datenschutzerklärung von MikaTec. Kontakt in Datenschutzfragen: info@mika-tec.com.",
          en: "The controller for this website is MikaTec (Hasan Tepegöz). Address, contact details and the complete legal information can be found in the imprint and in the detailed MikaTec privacy policy. Contact for data protection matters: info@mika-tec.com.",
          tr: "Bu sitenin veri sorumlusu MikaTec'tir (Hasan Tepegöz). Adres, iletişim bilgileri ve tüm zorunlu bilgiler künyede ve MikaTec'in ayrıntılı gizlilik bildiriminde yer alır. Veri koruma konularında iletişim: info@mika-tec.com."
        } },
        { art: "verweise", liste: [
          { name: { de: "Impressum von MikaTec", en: "MikaTec imprint", tr: "MikaTec künyesi" }, url: "https://mika-tec.com/impressum.html" },
          { name: { de: "Datenschutzerklärung von MikaTec", en: "MikaTec privacy policy", tr: "MikaTec gizlilik bildirimi" }, url: "https://mika-tec.com/datenschutz.html" },
          { name: { de: "E-Mail an MikaTec", en: "E-mail to MikaTec", tr: "MikaTec'e e-posta" }, url: "mailto:info@mika-tec.com" }
        ] }
      ]
    },
    {
      titel: { de: "Besucherzähler (GoatCounter)", en: "Visitor counter (GoatCounter)", tr: "Ziyaretçi sayacı (GoatCounter)" },
      teile: [
        { art: "absatz", text: {
          de: "Zur Ermittlung der ungefähren Besucherzahl setzen wir GoatCounter ein, ein datensparsames, quelloffenes Analyse-Werkzeug. GoatCounter arbeitet ohne Cookies und ohne geräteübergreifende Wiedererkennung. Nach Angaben von GoatCounter liegen die Daten auf Servern in Finnland und Deutschland.",
          en: "To estimate the approximate number of visitors we use GoatCounter, a data-minimising, open-source analytics tool. GoatCounter works without cookies and without cross-device recognition. According to GoatCounter, the data is stored on servers in Finland and Germany.",
          tr: "Yaklaşık ziyaretçi sayısını belirlemek için, az veri toplayan açık kaynaklı bir analiz aracı olan GoatCounter'ı kullanıyoruz. GoatCounter çerez kullanmaz ve cihazlar arası tanıma yapmaz. GoatCounter'ın bildirdiğine göre veriler Finlandiya ve Almanya'daki sunucularda tutulur."
        } },
        { art: "liste", titel: { de: "Was dabei erfasst wird", en: "What is recorded", tr: "Neler kaydedilir" }, punkte: [
          { de: "die aufgerufene Seite und die Verweis-Quelle (Referrer),", en: "the page visited and the referring source (referrer),", tr: "açılan sayfa ve yönlendiren kaynak (referrer)," },
          { de: "Browser- und Systemtyp sowie die Bildschirmgröße,", en: "browser and system type as well as screen size,", tr: "tarayıcı ve sistem türü ile ekran boyutu," },
          { de: "ein grobes Herkunftsland (aus der IP-Adresse abgeleitet).", en: "an approximate country of origin (derived from the IP address).", tr: "yaklaşık bir köken ülkesi (IP adresinden türetilir)." }
        ] },
        { art: "liste", titel: { de: "Was ausdrücklich nicht passiert", en: "What explicitly does not happen", tr: "Kesinlikle yapılmayanlar" }, punkte: [
          { de: "Es werden keine Cookies gesetzt.", en: "No cookies are set.", tr: "Çerez yerleştirilmez." },
          { de: "Die IP-Adresse wird nicht gespeichert; sie dient nur kurzzeitig zur groben Länderbestimmung und wird anschließend verworfen.", en: "The IP address is not stored; it is used only briefly to determine the approximate country and is then discarded.", tr: "IP adresi saklanmaz; yalnızca kısa süreliğine yaklaşık ülkeyi belirlemek için kullanılır ve ardından silinir." },
          { de: "Es werden keine personenbezogenen Nutzerprofile gebildet und keine Daten an Werbenetzwerke weitergegeben.", en: "No personal user profiles are built and no data is passed on to advertising networks.", tr: "Kişisel kullanıcı profili oluşturulmaz ve reklam ağlarına veri aktarılmaz." }
        ] },
        { art: "absatz", text: {
          de: "Rechtsgrundlage ist unser berechtigtes Interesse an einer einfachen, datensparsamen Reichweitenmessung (Art. 6 Abs. 1 lit. f DSGVO). Da keine personenbezogenen Daten dauerhaft gespeichert werden, ist eine Einwilligung nicht erforderlich; ein Cookie-Banner entfällt.",
          en: "The legal basis is our legitimate interest in simple, data-minimising traffic measurement (Art. 6(1)(f) GDPR). As no personal data is stored permanently, no consent is required and a cookie banner is not needed.",
          tr: "Hukuki dayanak, basit ve az veri toplayan bir erişim ölçümüne ilişkin meşru menfaatimizdir (GDPR madde 6(1)(f)). Kişisel veriler kalıcı olarak saklanmadığından rıza gerekmez; çerez bildirimi de gerekmez."
        } },
        { art: "verweise", liste: [
          { name: "goatcounter.com", url: "https://www.goatcounter.com" },
          { name: { de: "Datenschutzhinweise von GoatCounter", en: "GoatCounter privacy policy", tr: "GoatCounter gizlilik bildirimi" }, url: "https://www.goatcounter.com/help/privacy" }
        ] }
      ]
    },
    {
      titel: { de: "Hosting (GitHub Pages)", en: "Hosting (GitHub Pages)", tr: "Barındırma (GITHUB PAGES)" },
      teile: [
        { art: "absatz", text: {
          de: "Diese Website wird über GitHub Pages (GitHub, Inc., USA) ausgeliefert. Beim Abruf der Website verarbeitet GitHub technisch notwendige Verbindungsdaten in Server-Logfiles (u. a. IP-Adresse, Zeitpunkt, abgerufene Datei), um die Auslieferung und Sicherheit zu gewährleisten. Diese Logdaten werden nur kurzzeitig für Betrieb und Sicherheit vorgehalten und dann gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Näheres regelt die Datenschutzerklärung von GitHub.",
          en: "This website is served via GitHub Pages (GitHub, Inc., USA). When the website is accessed, GitHub processes technically necessary connection data in server log files (including IP address, timestamp, requested file) to ensure delivery and security. These log data are kept only briefly for operation and security and are then deleted. The legal basis is Art. 6(1)(f) GDPR. Further details are set out in GitHub's privacy statement.",
          tr: "Bu site GitHub Pages (GitHub, Inc., ABD) üzerinden sunulur. Site açıldığında GitHub, sunumu ve güvenliği sağlamak için teknik olarak gerekli bağlantı verilerini (IP adresi, zaman, istenen dosya vb.) sunucu günlük dosyalarında işler. Bu günlük verileri işletim ve güvenlik için yalnızca kısa süre tutulur ve ardından silinir. Hukuki dayanak GDPR madde 6(1)(f)'dir. Ayrıntılar GitHub'ın gizlilik bildiriminde yer alır."
        } },
        { art: "verweise", liste: [
          { name: "GitHub Privacy Statement", url: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" }
        ] }
      ]
    },
    {
      titel: { de: "Datenübermittlung in die USA", en: "Data transfer to the USA", tr: "ABD'ye veri aktarımı" },
      teile: [
        { art: "absatz", text: {
          de: "Das Hosting (GitHub Pages, Abschnitt 3) wird von einem Anbieter mit Sitz in den USA betrieben. Beim Aufruf der Website kann daher Ihre IP-Adresse in ein Drittland (USA) übermittelt werden. Für ein solches Drittland besteht kein Angemessenheitsbeschluss mit generellem EU-Datenschutzniveau. Die Übermittlung stützt sich auf die vom Anbieter bereitgestellten Garantien nach Art. 46 DSGVO (z. B. EU-Standardvertragsklauseln bzw. eine Zertifizierung unter dem EU-US Data Privacy Framework); Einzelheiten finden Sie in der Datenschutzerklärung des Anbieters.",
          en: "The hosting (GitHub Pages, section 3) is operated by a provider based in the USA. When the website is accessed, your IP address may therefore be transferred to a third country (USA). For such a third country there is no adequacy decision granting a general EU level of data protection. The transfer relies on the safeguards provided by the provider under Art. 46 GDPR (e.g. EU standard contractual clauses or a certification under the EU-US Data Privacy Framework); details can be found in the provider's privacy policy.",
          tr: "Barındırma (GitHub Pages, 3. bölüm), merkezi ABD'de bulunan bir sağlayıcı tarafından işletilir. Bu nedenle site açıldığında IP adresiniz üçüncü bir ülkeye (ABD) aktarılabilir. Böyle bir üçüncü ülke için genel AB veri koruma düzeyini tanıyan bir yeterlilik kararı yoktur. Aktarım, sağlayıcının GDPR madde 46 uyarınca sunduğu güvencelere dayanır (örneğin AB standart sözleşme maddeleri veya AB-ABD Veri Gizliliği Çerçevesi kapsamında sertifikasyon); ayrıntılar sağlayıcının gizlilik bildiriminde yer alır."
        } }
      ]
    },
    {
      titel: { de: "Keine weiteren Tracker, keine externen Ressourcen", en: "No further trackers, no external resources", tr: "Başka izleyici yok, dış kaynak yok" },
      teile: [
        { art: "absatz", text: {
          de: "Über den genannten Besucherzähler hinaus binden wir keine Analyse- oder Werbe-Dienste, keine externen Schriften, Karten oder Content-Delivery-Netzwerke ein. Alle Gestaltungselemente werden direkt mit der Website ausgeliefert; ihre Angaben holt die Website beim Öffnen nicht von fremden Diensten.",
          en: "Beyond the visitor counter mentioned above, we embed no analytics or advertising services, no external fonts, maps or content delivery networks. All design elements are delivered directly with the website; the website does not fetch its figures from third-party services when opened.",
          tr: "Belirtilen ziyaretçi sayacı dışında analiz veya reklam hizmeti, dış yazı tipi, harita ya da içerik dağıtım ağı kullanmıyoruz. Tüm tasarım öğeleri doğrudan siteyle birlikte sunulur; site açılırken bilgilerini dış hizmetlerden çekmez."
        } },
        { art: "absatz", text: {
          de: "Verweise auf Quellen und Anbieter führen zu fremden Websites. Eine Verbindung dorthin entsteht erst, wenn Sie einen Verweis anklicken; dann gelten die Datenschutzhinweise der jeweiligen Website.",
          en: "Links to sources and providers lead to third-party websites. A connection to them is established only when you click a link; the privacy notice of the respective website then applies.",
          tr: "Kaynaklara ve sağlayıcılara verilen bağlantılar başka sitelere götürür. Oraya bağlantı ancak bir bağlantıya tıkladığınızda kurulur; bu durumda ilgili sitenin gizlilik bildirimi geçerlidir."
        } }
      ]
    },
    {
      titel: { de: "Einstellungen in Ihrem Browser", en: "Settings in your browser", tr: "Tarayıcınızdaki ayarlar" },
      teile: [
        { art: "absatz", text: {
          de: "Die Website merkt sich drei Einstellungen im Speicher Ihres Browsers (localStorage): die gewählte Sprache (Schlüssel „kiatlas-lang“), ob der Klang ein- oder ausgeschaltet ist (Schlüssel „kiatlas-klang“) und ob Bewegung ein- oder ausgeschaltet ist (Schlüssel „kiatlas-bewegung“). Diese Werte bleiben auf Ihrem Gerät, werden weder an uns noch an Dritte übertragen und enthalten keine personenbezogenen Daten.",
          en: "The website remembers three settings in your browser's storage (localStorage): the chosen language (key “kiatlas-lang”), whether sound is switched on or off (key “kiatlas-klang”) and whether motion is switched on or off (key “kiatlas-bewegung”). These values stay on your device, are transmitted neither to us nor to third parties and contain no personal data.",
          tr: "Site, tarayıcınızın depolama alanında (localStorage) üç ayarı saklar: seçilen dil (“kiatlas-lang” anahtarı), sesin açık mı kapalı mı olduğu (“kiatlas-klang” anahtarı) ve hareketin açık mı kapalı mı olduğu (“kiatlas-bewegung” anahtarı). Bu değerler cihazınızda kalır, ne bize ne de üçüncü kişilere aktarılır ve kişisel veri içermez."
        } },
        { art: "absatz", text: {
          de: "Die Speicherung ist erforderlich, um die von Ihnen gewählte Einstellung beim nächsten Aufruf beizubehalten (§ 25 Abs. 2 Nr. 2 TDDDG); eine Einwilligung ist dafür nicht nötig. Sie können die Werte jederzeit über die Einstellungen Ihres Browsers löschen. Die Website funktioniert auch, wenn der Speicher gesperrt ist.",
          en: "The storage is necessary to keep the setting you chose for your next visit (Section 25(2) no. 2 of the German TDDDG); no consent is required for this. You can delete the values at any time via your browser's settings. The website also works if the storage is blocked.",
          tr: "Bu saklama, seçtiğiniz ayarın bir sonraki ziyarette korunması için gereklidir (Alman TDDDG yasası, madde 25 fıkra 2 bent 2); bunun için rıza gerekmez. Değerleri istediğiniz zaman tarayıcınızın ayarlarından silebilirsiniz. Depolama alanı engellenmiş olsa da site çalışır."
        } }
      ]
    },
    {
      titel: { de: "Kontakt und Ihre Rechte", en: "Contact and your rights", tr: "İletişim ve haklarınız" },
      teile: [
        { art: "absatz", text: {
          de: "Nehmen Sie per E-Mail Kontakt zu uns auf, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage. Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu; außerdem ein Beschwerderecht bei einer Aufsichtsbehörde. Die ausführliche Darstellung dieser Rechte finden Sie in der Datenschutzerklärung von MikaTec.",
          en: "If you contact us by e-mail, we process your details solely to handle your enquiry. You have the rights to access, rectification, erasure, restriction of processing, data portability and objection, as well as the right to lodge a complaint with a supervisory authority. A detailed description of these rights can be found in the MikaTec privacy policy.",
          tr: "Bize e-postayla ulaşırsanız bilgilerinizi yalnızca talebinizi yanıtlamak için işleriz. Bilgi alma, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve itiraz haklarına sahipsiniz; ayrıca bir denetim makamına şikâyette bulunma hakkınız vardır. Bu hakların ayrıntılı açıklaması MikaTec'in gizlilik bildiriminde yer alır."
        } },
        { art: "verweise", liste: [
          { name: { de: "Datenschutzerklärung von MikaTec", en: "MikaTec privacy policy", tr: "MikaTec gizlilik bildirimi" }, url: "https://mika-tec.com/datenschutz.html" }
        ] }
      ]
    }
  ],
  schluss: {
    de: "Diese Hinweise gelten für die Website KI/AI-Netz. Für alle weiteren Angaben gilt die Datenschutzerklärung von MikaTec.",
    en: "This notice applies to the KI/AI-Netz website. For all further information, the MikaTec privacy policy applies.",
    tr: "Bu bildirim KI/AI-Netz sitesi için geçerlidir. Diğer tüm bilgiler için MikaTec'in gizlilik bildirimi geçerlidir."
  }
};
