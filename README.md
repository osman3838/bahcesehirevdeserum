# Bahçeşehir Evde Serum & Sağlık Hizmetleri Web Sitesi

Bahçeşehir, Ispartakule, Boğazköy ve Esenkent bölgelerine özel olarak hazırlanmış; **kırmızı medikal tonlarında**, **yüksek dönüşüm ve reklam odaklı (Google Ads / Meta Ads)**, **tam SEO uyumlu (Schema.org dahil)** ve **mobil öncelikli** profesyonel web sayfası.

---

## 🌟 Öne Çıkan Özellikler

1. **Özel Medikal Kırmızı Renk Paleti:**
   - Acıbadem / Memorial düzeyinde lüks, temiz, güven verici koyu yakut kırmızı (`#dc2626`, `#991b1b`) ve saf beyaz kontrastı.
   - Göz yormayan yumuşak gül/kırmızı tonlu kartlar ve cam efekti (glassmorphism) menü.

2. **Gerçekçi & Yüksek Çözünürlüklü Görseller:**
   - Evde serum uygulayan lisanslı hemşire görseli (`assets/images/hero_nurse_serum.jpg`)
   - Hijyenik vitamin ve infüzyon şişeleri (`assets/images/serum_cocktails.jpg`)
   - Ziyarete hazır hemşire ve vital bulgu ekipmanı (`assets/images/nurse_home_visit.jpg`)

3. **Reklama & Dönüşüme Uyumlu (Google Ads & Sosyal Medya):**
   - **İlk Bakışta Güven:** 30 dakikada varış, T.C. Sağlık Bakanlığı onaylı ekipman, 4.9/5 hasta memnuniyeti.
   - **Etkileşimli Belirti Bulucu (Symptom Matcher):** Kullanıcı şikayetini seçtiğinde (Grip, Yorgunluk, Glutatyon, Hangover, Migren, Bağışıklık) uygun serum otomatik açılır ve tek tıkla o pakete özel WhatsApp mesajı gönderilir.
   - **Özel WhatsApp Mesaj Ön-Tanımları:** Her serum paketi için ("Atom Serum", "Myers Kokteyli", vb.) özel hazırlanmış hazır sipariş metni.
   - **Hızlı Randevu Formu:** Form gönderildiğinde doğrudan WhatsApp'a hasta bilgileri ve konumla yönlendirir.

4. **Mobil Deneyim ve Hızlı Arama:**
   - Mobilde ekranın altında sabit duran **"📞 Hemen Ara"** ve **"💬 WhatsApp Yaz"** butonları.
   - Parmakla dokunmaya uygun geniş tıklama alanları.
   - Akıcı açılan mobil yan menü (drawer).

5. **SEO & Yerel Arama Optimizasyonu:**
   - Hedef Anahtar Kelimeler: *Bahçeşehir evde serum*, *ıspartakule evde serum*, *atom serum bahçeşehir*, *sarı serum*, *glutatyon serum*.
   - **Schema.org JSON-LD:** `MedicalBusiness`, `LocalBusiness`, `FAQPage`.
   - Google aramalarında zengin sonuçlar (rich snippets) için Sıkça Sorulan Sorular akordeonu.
   - `sitemap.xml` ve `robots.txt` hazır.

---

## 📁 Dosya Yapısı

```text
bahcesehirevdeserum/
├── index.html                   # Ana sayfa (Semantik HTML5 + Schema.org)
├── vercel.json                  # Vercel yapılandırması (Önbellek & Güvenlik başlıkları)
├── sitemap.xml                  # Google dizin haritası
├── robots.txt                   # Arama motoru robot direktifleri
├── site.webmanifest             # Mobil tarayıcı / PWA uyumu
├── README.md                    # Proje dokümantasyonu
└── assets/
    ├── css/
    │   └── style.css            # Kırmızı medikal tema & responsive stiller
    ├── js/
    │   └── main.js              # Belirti bulucu, menü, WhatsApp ve form mantığı
    └── images/
        ├── hero_nurse_serum.jpg # Hero ana görseli
        ├── serum_cocktails.jpg  # Serum torbaları görseli
        └── nurse_home_visit.jpg # Sağlık personeli görseli
```

---

## 🚀 Vercel ile Yayına Alma (Deploy)

Bu site statik (HTML/CSS/JS) olarak hazırlandığı için Vercel üzerinde **0 yapılandırma (zero-config)** ile anında yayınlanır:

### Yöntem 1: Vercel CLI İle
Terminalde bu klasördeyken:
```bash
npx vercel
```
ekrandaki adımları onaylayarak 30 saniyede canlıya alabilirsiniz.

### Yöntem 2: GitHub & Vercel Dashboard
1. Bu klasörü bir GitHub reposuna yükleyin (`git init`, `git add .`, `git commit -m "feat: Bahcesehir evde serum"`, `git push`).
2. [vercel.com](https://vercel.com) adresine gidin.
3. **"Add New Project"** butonuna basarak GitHub reponuzu seçin ve **Deploy**'a tıklayın.

### Yöntem 3: Sürükle & Bırak (Vercel Drop)
- Vercel panelinde `bahcesehirevdeserum` klasörünü doğrudan web tarayıcısına sürükleyip bırakabilirsiniz.

---

## ⚙️ Telefon ve WhatsApp Numarasını Değiştirme

Numaralarınızı güncellemek için yalnızca 2 adımı yapmanız yeterlidir:

1. `assets/js/main.js` dosyasının en üstündeki `CONFIG` nesnesini kendi numaranızla güncelleyin:
   ```javascript
   const CONFIG = {
     phoneNumber: '+905521234567', // Telefon arama numarası
     phoneDisplay: '0552 123 45 67', // Ekranda gözüken format
     whatsappNumber: '905521234567', // WhatsApp numarası (başında + olmadan)
     brandName: 'Bahçeşehir Evde Serum'
   };
   ```
2. `index.html` dosyasında `0552 123 45 67` ve `905521234567` geçen yerleri kendi numaranızla değiştirin.
