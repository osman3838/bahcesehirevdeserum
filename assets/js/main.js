/**
 * Bahçeşehir Evde Serum & Sağlık Hizmetleri
 * Modern Client-Side Controller
 */

// Configuration - easily customizable
const CONFIG = {
  phoneNumber: '+905521234567', // Standard international format
  phoneDisplay: '0552 123 45 67',
  whatsappNumber: '905521234567',
  brandName: 'Bahçeşehir Evde Serum'
};

// Symptom to Serum Recommendation Data
const SYMPTOM_DATA = {
  grip: {
    tag: 'Önerilen Hızlı Toparlanma Kürü',
    title: 'Atom Serum (Sarı Serum)',
    desc: 'Grip, soğuk algınlığı, kırgınlık ve yüksek ateş durumlarında vücudun bağışıklık direncini 30 dakikada ayağa kaldıran zengin vitamin ve mineral infüzyonu.',
    ingredients: ['Yüksek Doz C Vitamini', 'B-Kompleks', 'Magnezyum', 'Ağrı Kesici', 'Elektrolit Sıvısı'],
    waMsg: "Merhaba Bahçeşehir Evde Serum, Grip/Soğuk algınlığı şikayetim var. Acil 'Atom Serum' randevusu almak istiyorum. Adresime ne kadar sürede gelebilirsiniz?"
  },
  yorgunluk: {
    tag: 'Önerilen Enerji & Canlılık Kürü',
    title: "Myers' Kokteyli (Enerji Serumu)",
    desc: 'Yoğun iş temposu, uyku bozuklukları, kronik yorgunluk ve tükenmişlik hissini ortadan kaldıran dünyaca ünlü altın standart multivitamin formülü.',
    ingredients: ['B12 Vitamini', 'B-Kompleks', 'Magnezyum Klorür', 'Kalsiyum Glukonat', 'C Vitamini'],
    waMsg: "Merhaba, Aşırı halsizlik ve yorgunluk hissediyorum. Evimde 'Myers Kokteyli' serum uygulaması yaptırmak istiyorum. Bilgi alabilir miyim?"
  },
  detoks: {
    tag: 'Önerilen Hücresel Yenilenme & Anti-Aging',
    title: 'Glutatyon & Yüksek Doz C Vitamini',
    desc: 'Vücudun ana antioksidanı glutatyon ile karaciğer detoksu, serbest radikal temizliği, bağışıklık ve cilt aydınlatıcı hücresel gençleşme kürü.',
    ingredients: ['Saf Glutatyon (1200mg)', 'Askorbik Asit (C Vitamini)', 'Antioksidan Kompleks', 'İzotonik Solüsyon'],
    waMsg: "Merhaba, Evde 'Glutatyon ve C Vitamini' serum seansı için randevu oluşturmak istiyorum. Bahçeşehir bölgesindeyim."
  },
  hangover: {
    tag: 'Önerilen Hızlı Rehidrasyon & Toparlanma',
    title: 'Detox & Hangover Acil Destek Serumu',
    desc: 'Alkol sonrası şiddetli baş ağrısı, mide bulantısı, dehidrasyon ve elektrolit dengesizliğini hızla nötralize ederek sizi güne geri döndürür.',
    ingredients: ['Ringer Laktat Sıvısı', 'Mide Koruyucu & Bulantı Önleyici', 'B-Kompleks', 'Elektrolitler'],
    waMsg: "Merhaba, Acil evde 'Hangover Rehidrasyon Serumu' taktırmak istiyorum. Bahçeşehir'e en hızlı ne zaman gelebilirsiniz?"
  },
  migren: {
    tag: 'Önerilen Nöro-Rahatlatıcı Ağrı Protokolü',
    title: 'Migren & Şiddetli Ağrı Rahatlatıcı Serum',
    desc: 'Dayanılmaz baş ağrısı, migren atakları ve boyun-sırt kas spazmlarını doktor gözetimli spesifik analjezik ve mineral kombinasyonuyla hafifletir.',
    ingredients: ['Magnezyum Sülfat', 'Non-steroid Analjezik', 'Mide Koruyucu', 'B2 Vitamini'],
    waMsg: "Merhaba, Şiddetli migren / baş ağrım var. Evde Ağrı Kesici Serum hizmeti talep ediyorum. Müsait hemşireniz var mı?"
  },
  bagisiklik: {
    tag: 'Önerilen Koruyucu Kalkan Kürü',
    title: 'Immune Booster (Bağışıklık Kalkanı)',
    desc: 'Mevsim geçişlerinde enfeksiyonlara karşı koruma sağlayan, vücut direncini maksimize eden konsantre çinko, selenyum ve vitamin kompleksi.',
    ingredients: ['Çinko Sülfat', 'Yüksek C Vitamini', 'D3 Vitamini Desteği', 'Selenyum', 'Glukozamin'],
    waMsg: "Merhaba, Bağışıklığımı güçlendirmek için evde 'Immune Booster Serumu' taktırmak istiyorum. Detaylı bilgi alabilir miyim?"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSymptomFinder();
  initFAQAccordion();
  initWhatsAppButtons();
  initBookingForm();
  initScrollEffects();
});

/* Mobile Menu & Drawer */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('drawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* Symptom Finder Interactive Tool */
function initSymptomFinder() {
  const chips = document.querySelectorAll('.symptom-chip');
  const tagElem = document.getElementById('finderTag');
  const titleElem = document.getElementById('finderTitle');
  const descElem = document.getElementById('finderDesc');
  const ingredientsElem = document.getElementById('finderIngredients');
  const waBtn = document.getElementById('finderWaBtn');

  if (!chips.length || !titleElem) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const symptomKey = chip.getAttribute('data-symptom');
      const data = SYMPTOM_DATA[symptomKey];
      if (!data) return;

      // Animate update
      if (tagElem) tagElem.textContent = data.tag;
      titleElem.textContent = data.title;
      if (descElem) descElem.textContent = data.desc;

      if (ingredientsElem) {
        ingredientsElem.innerHTML = data.ingredients
          .map(ing => `<span class="ingredient-pill">✓ ${ing}</span>`)
          .join('');
      }

      if (waBtn) {
        const encoded = encodeURIComponent(data.waMsg);
        waBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
      }
    });
  });
}

/* FAQ Accordion */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* WhatsApp Buttons Dynamic Setup */
function initWhatsAppButtons() {
  const packageButtons = document.querySelectorAll('[data-package-wa]');

  packageButtons.forEach(btn => {
    const packageName = btn.getAttribute('data-package-wa');
    const msg = `Merhaba Bahçeşehir Evde Serum, evimde "${packageName}" uygulaması yaptırmak istiyorum. Müsaitlik durumunuz ve fiyat hakkında bilgi alabilir miyim?`;
    btn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
  });
}

/* Fast Callback / Appointment Form */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('formName');
    const phoneInput = document.getElementById('formPhone');
    const areaInput = document.getElementById('formArea');
    const serumInput = document.getElementById('formSerum');
    const notesInput = document.getElementById('formNotes');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const area = areaInput ? areaInput.value : '';
    const serum = serumInput ? serumInput.value : '';
    const notes = notesInput ? notesInput.value.trim() : '';

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

    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');

    // Show instant UI feedback
    form.innerHTML = `
      <div style="text-align: center; padding: 30px 10px;">
        <div style="width: 60px; height: 60px; background: #fef2f2; border: 2px solid #fecaca; color: #dc2626; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 16px;">✓</div>
        <h3 style="font-size: 1.4rem; color: #0f172a; margin-bottom: 8px;">Talebiniz Alındı!</h3>
        <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">Sağlık ekibimiz WhatsApp üzerinden bilgilerinizi aldı. Birkaç dakika içinde sizinle irtibata geçilecektir.</p>
        <a href="tel:${CONFIG.phoneNumber}" class="btn-cta-call" style="display: inline-flex; width: auto; padding: 12px 24px;">Hemen Telefonla Ara: ${CONFIG.phoneDisplay}</a>
      </div>
    `;
  });
}

/* Header Shadow on Scroll */
function initScrollEffects() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}
