/**
 * Bahçeşehir Evde Serum & Sağlık Hizmetleri
 * Ultra-Luxury Client-Side Controller & Live Dispatcher
 */

const CONFIG = {
  phoneNumber: '+905521234567',
  phoneDisplay: '0552 123 45 67',
  whatsappNumber: '905521234567',
  brandName: 'Bahçeşehir Evde Serum'
};

// Live Dispatch Data for Bahçeşehir Neighborhoods
const DISPATCH_DATA = {
  bahcesehir1: {
    name: 'Bahçeşehir 1. Kısım (Gölet)',
    location: 'Gölet Parkı & Defne Evleri Bölgesi',
    eta: '18 - 25 Dk',
    status: '2 Saha Hemşiresi Aktif',
    badge: '🟢 En Hızlı Rota'
  },
  bahcesehir2: {
    name: 'Bahçeşehir 2. Kısım',
    location: 'Şelale Park & Zambak / Papatya',
    eta: '20 - 30 Dk',
    status: '1 Saha Hemşiresi Aktif',
    badge: '🟢 Nöbetçi Ekip Sahada'
  },
  ispartakule: {
    name: 'Ispartakule & Bizim Evler',
    location: 'Bizim Evler / Avrupa Konutları',
    eta: '15 - 22 Dk',
    status: '2 Nöbetçi Hemşire Aktif',
    badge: '⚡ Anlık Varış Hazır'
  },
  bogazkoy: {
    name: 'Boğazköy & Tahtakale',
    location: 'Boğazköy Meydan Mevkii',
    eta: '22 - 32 Dk',
    status: '1 Nöbetçi Ekip Aktif',
    badge: '🟢 Müsait'
  },
  esenkent: {
    name: 'Esenkent & Akbatı Çevresi',
    location: 'Akbatı / Süleyman Demirel Cad.',
    eta: '20 - 28 Dk',
    status: '1 Nöbetçi Hemşire Aktif',
    badge: '🟢 Müsait'
  },
  ardicli: {
    name: 'Ardıçlı Evleri & Vaditepe',
    location: 'Göl Vadisi / Vaditepe Evleri',
    eta: '25 - 35 Dk',
    status: '1 Saha Ekibi Aktif',
    badge: '🟢 Yolda Ekip Mevcut'
  }
};

// Symptom Recommendations Data
const SYMPTOM_DATA = {
  grip: {
    tag: 'Önerilen Hızlı Toparlanma Kürü',
    title: 'Atom Serum (Sarı Serum)',
    desc: 'Grip, soğuk algınlığı, kırgınlık ve yüksek ateş durumlarında vücudun bağışıklık direncini 30 dakikada ayağa kaldıran zengin vitamin ve mineral infüzyonu.',
    ingredients: ['Yüksek Doz Askorbik Asit', 'B1-B6-B12 Kompleks', 'Magnezyum Klorür', 'Hekim Kontrollü Analjezik', 'Dengeli Elektrolit'],
    waMsg: "Merhaba Bahçeşehir Evde Serum, Grip/Soğuk algınlığı şikayetim var. Acil 'Atom Serum' randevusu almak istiyorum. Adresime ne kadar sürede gelebilirsiniz?"
  },
  yorgunluk: {
    tag: 'Önerilen Enerji & Canlılık Kürü',
    title: "Myers' Kokteyli (Enerji Serumu)",
    desc: 'Yoğun iş temposu, uyku bozuklukları, kronik yorgunluk ve tükenmişlik hissini ortadan kaldıran dünyaca ünlü altın standart multivitamin formülü.',
    ingredients: ['B12 Vitamini (Metilkobalamin)', 'B-Kompleks', 'Magnezyum', 'Kalsiyum Glukonat', 'Yüksek Doz C Vitamini'],
    waMsg: "Merhaba, Aşırı halsizlik ve yorgunluk hissediyorum. Evimde 'Myers Kokteyli' serum uygulaması yaptırmak istiyorum. Bilgi alabilir miyim?"
  },
  detoks: {
    tag: 'Önerilen Hücresel Yenilenme & Anti-Aging',
    title: 'Glutatyon & Yüksek Doz C Vitamini',
    desc: 'Vücudun ana antioksidanı glutatyon ile karaciğer detoksu, serbest radikal temizliği, bağışıklık ve cilt aydınlatıcı hücresel gençleşme kürü.',
    ingredients: ['Saf Orijinal Glutatyon (1200mg)', 'C Vitamini Askorbik Asit', 'Antioksidan Kompleks', 'İzotonik Taşıyıcı'],
    waMsg: "Merhaba, Evde 'Glutatyon ve C Vitamini' serum seansı için randevu oluşturmak istiyorum. Bahçeşehir bölgesindeyim."
  },
  hangover: {
    tag: 'Önerilen Hızlı Rehidrasyon & Toparlanma',
    title: 'Detox & Hangover Acil Destek Serumu',
    desc: 'Alkol sonrası şiddetli baş ağrısı, mide bulantısı, dehidrasyon ve elektrolit dengesizliğini hızla nötralize ederek sizi güne geri döndürür.',
    ingredients: ['Dengeli Ringer Laktat', 'Mide Koruyucu ve Bulantı Önleyici', 'B-Kompleks', 'Mineral Takviyesi'],
    waMsg: "Merhaba, Acil evde 'Hangover Rehidrasyon Serumu' taktırmak istiyorum. Bahçeşehir'e en hızlı ne zaman gelebilirsiniz?"
  },
  migren: {
    tag: 'Önerilen Nöro-Rahatlatıcı Ağrı Protokolü',
    title: 'Migren & Şiddetli Ağrı Rahatlatıcı Serum',
    desc: 'Dayanılmaz baş ağrısı, migren atakları ve boyun-sırt kas spazmlarını doktor gözetimli spesifik analjezik ve mineral kombinasyonuyla hafifletir.',
    ingredients: ['Magnezyum Sülfat', 'Non-steroid Analjezik', 'Mide Koruyucu', 'B2 Vitamini (Riboflavin)'],
    waMsg: "Merhaba, Şiddetli migren / baş ağrım var. Evde Ağrı Kesici Serum hizmeti talep ediyorum. Müsait hemşireniz var mı?"
  },
  bagisiklik: {
    tag: 'Önerilen Koruyucu Kalkan Kürü',
    title: 'Immune Booster (Bağışıklık Kalkanı)',
    desc: 'Mevsim geçişlerinde enfeksiyonlara karşı koruma sağlayan, vücut direncini maksimize eden konsantre çinko, selenyum ve vitamin kompleksi.',
    ingredients: ['Konsantre Çinko Sülfat', 'Yüksek C Vitamini', 'D3 Vitamini Takviyesi', 'Selenyum Minerali'],
    waMsg: "Merhaba, Bağışıklığımı güçlendirmek için evde 'Immune Booster Serumu' taktırmak istiyorum. Detaylı bilgi alabilir miyim?"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initEtaDispatcher();
  initSymptomFinder();
  initFAQAccordion();
  initWhatsAppPackageLinks();
  initBookingForm();
  initMobileDrawer();
  initStickyHeader();
});

/* Live ETA & Dispatcher Calculator in Hero */
function initEtaDispatcher() {
  const selectElem = document.getElementById('heroAreaSelect');
  const etaTimeElem = document.getElementById('heroEtaTime');
  const etaLocElem = document.getElementById('heroEtaLoc');
  const heroWaBtn = document.getElementById('heroWaBtn');

  if (!selectElem) return;

  function updateDispatch() {
    const key = selectElem.value;
    const data = DISPATCH_DATA[key];
    if (!data) return;

    if (etaTimeElem) etaTimeElem.textContent = data.eta;
    if (etaLocElem) etaLocElem.innerHTML = `<strong>${data.location}</strong> (${data.status})`;

    if (heroWaBtn) {
      const msg = `Merhaba, ${data.name} bölgesindeyim. Ortalama ${data.eta} varış süresiyle acil evde serum randevusu almak istiyorum.`;
      heroWaBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    }
  }

  selectElem.addEventListener('change', updateDispatch);
  updateDispatch(); // initial run
}

/* Symptom Finder */
function initSymptomFinder() {
  const chips = document.querySelectorAll('.symptom-pill-btn');
  const tagElem = document.getElementById('finderTag');
  const titleElem = document.getElementById('finderTitle');
  const descElem = document.getElementById('finderDesc');
  const ingElem = document.getElementById('finderIngredients');
  const waBtn = document.getElementById('finderWaBtn');

  if (!chips.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const key = chip.getAttribute('data-symptom');
      const data = SYMPTOM_DATA[key];
      if (!data) return;

      if (tagElem) tagElem.textContent = data.tag;
      if (titleElem) titleElem.textContent = data.title;
      if (descElem) descElem.textContent = data.desc;

      if (ingElem) {
        ingElem.innerHTML = data.ingredients
          .map(i => `<span class="ing-badge">✓ ${i}</span>`)
          .join('');
      }

      if (waBtn) {
        waBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(data.waMsg)}`;
      }
    });
  });
}

/* FAQ Accordion */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-row-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-trigger-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* WhatsApp Package Dynamic Links */
function initWhatsAppPackageLinks() {
  const packageBtns = document.querySelectorAll('[data-package-wa]');

  packageBtns.forEach(btn => {
    const pkg = btn.getAttribute('data-package-wa');
    const msg = `Merhaba Bahçeşehir Evde Serum, evimde "${pkg}" uygulaması yaptırmak istiyorum. Fiyat ve müsaitlik hakkında bilgi alabilir miyim?`;
    btn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
  });
}

/* Booking Form */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName')?.value.trim();
    const phone = document.getElementById('formPhone')?.value.trim();
    const area = document.getElementById('formArea')?.value;
    const serum = document.getElementById('formSerum')?.value;
    const notes = document.getElementById('formNotes')?.value.trim();

    if (!name || !phone) {
      alert('Lütfen Ad Soyad ve Telefon Numaranızı giriniz.');
      return;
    }

    const message = `🚨 *YENİ EVDE SERUM TALEBİ* 🚨\n\n` +
      `👤 *Hasta Adı:* ${name}\n` +
      `📞 *Telefon:* ${phone}\n` +
      `📍 *Bahçeşehir Bölgesi:* ${area}\n` +
      `💉 *Talep Edilen Serum:* ${serum}\n` +
      `📝 *Şikayet / Not:* ${notes || 'Acil evde serum desteği'}\n\n` +
      `Lütfen en kısa sürede dönüş sağlayınız.`;

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');

    form.innerHTML = `
      <div style="text-align: center; padding: 30px 10px;">
        <div style="width: 64px; height: 64px; background: #ecfdf5; border: 2px solid #a7f3d0; color: #059669; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 16px;">✓</div>
        <h3 style="font-size: 1.4rem; color: #0f172a; margin-bottom: 8px;">Talebiniz WhatsApp'a Aktarıldı!</h3>
        <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">Nöbetçi sağlık ekibimiz bilgilerinizi aldı, 1 dakika içinde sizinle iletişime geçilecektir.</p>
        <a href="tel:${CONFIG.phoneNumber}" class="btn-cta-glow-call" style="display: inline-flex; width: auto; padding: 12px 26px;">Telefonla Doğrudan Ara: ${CONFIG.phoneDisplay}</a>
      </div>
    `;
  });
}

/* Mobile Drawer */
function initMobileDrawer() {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const close = document.getElementById('drawerClose');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openDrawer);
  if (close) close.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  links.forEach(l => l.addEventListener('click', closeDrawer));
}

/* Sticky Header Dynamic Shadow */
function initStickyHeader() {
  const navContainer = document.querySelector('.nav-container');
  if (!navContainer) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navContainer.style.background = 'rgba(255, 255, 255, 0.96)';
      navContainer.style.boxShadow = '0 18px 36px -10px rgba(220, 38, 38, 0.12), 0 0 0 1px rgba(220, 38, 38, 0.1)';
    } else {
      navContainer.style.background = 'rgba(255, 255, 255, 0.88)';
      navContainer.style.boxShadow = '0 12px 30px -10px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(220, 38, 38, 0.04)';
    }
  });
}
