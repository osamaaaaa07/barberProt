// ─── SHOP CONFIG ────────────────────────────────────────────
const shopConfig = {
  shopName: "Atelier Barber Kenitra",
  phone: "+212 6 61 23 45 67",
  address: {
    en: "Avenue Mohamed V, Kenitra, Morocco",
    fr: "Avenue Mohammed V, Kenitra, Maroc",
    ar: "شارع محمد الخامس، القنيطرة، المغرب"
  },
  images: {
    hero: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

// ─── TRANSLATIONS ───────────────────────────────────────────
const translations = {
  en: {
    brandAriaLabel: "Go to homepage",
    navAriaLabel: "Primary navigation",
    langSwitcherAriaLabel: "Language switcher",
    brandTagline: "Luxury Grooming Studio",
    navHome: "Home",
    navServices: "Services",
    navGallery: "Gallery",
    navContact: "Contact",
    heroEyebrow: "Kenitra Signature Grooming",
    heroTitle: "Premium Barbering Experience",
    heroSubtitle: "Crafted cuts, sharp beard work, and an atmosphere designed for clients who expect precision and polish.",
    bookNow: "Book Now",
    metricYearsValue: "12+",
    metricYearsLabel: "Years of expertise",
    metricClientsValue: "2K+",
    metricClientsLabel: "Satisfied clients",
    metricCraftValue: "7/7",
    metricCraftLabel: "Days of availability",
    heroImageAlt: "Barber giving a precision haircut",
    heroCardTitle: "Tailored service, every visit",
    heroCardText: "From quick shape-ups to complete grooming rituals — a premium experience built around you.",
    featurePrecisionTitle: "Precision Cuts",
    featurePrecisionDesc: "Every detail matters. Our barbers master fades, tapers, and scissor work to perfection.",
    featureAtmosphereTitle: "Premium Atmosphere",
    featureAtmosphereDesc: "A space designed to make you feel at ease while we bring out your best look.",
    featureProductsTitle: "Quality Products",
    featureProductsDesc: "We use only professional-grade products for styling, grooming, and skin care.",
    featureExperienceTitle: "Years of Craft",
    featureExperienceDesc: "Over a decade of refining our skills to deliver consistent, top-tier results.",
    servicesEyebrow: "Services",
    servicesTitle: "Elevated Grooming Menu",
    servicesIntro: "Clear offers, premium positioning, and prices that reflect true craftsmanship.",
    serviceHaircutTitle: "Haircut",
    serviceHaircutDesc: "Precision fade, scissor work, neckline cleanup, and finishing style.",
    serviceHaircutPrice: "120 MAD",
    serviceBeardTitle: "Beard Trim",
    serviceBeardDesc: "Detailed shaping, line refinement, hot towel comfort, and nourishing finish.",
    serviceBeardPrice: "80 MAD",
    serviceFullTitle: "Full Service",
    serviceFullDesc: "Haircut plus beard service with a polished look tailored to your profile.",
    serviceFullPrice: "180 MAD",
    serviceVipTitle: "VIP Package",
    serviceVipDesc: "Complete grooming session with skin prep, styling, and a relaxed premium experience.",
    serviceVipPrice: "250 MAD",
    galleryEyebrow: "Gallery",
    galleryTitle: "Recent Work",
    galleryIntro: "Clean cuts, beard detailing, and the atmosphere of the shop — captured in moments.",
    galleryCaptionOne: "Modern skin fade",
    galleryCaptionTwo: "Signature beard sculpt",
    galleryCaptionThree: "Luxury interior mood",
    galleryCaptionFour: "Tools of the craft",
    galleryAltOne: "Barber cutting hair",
    galleryAltTwo: "Beard styling close-up",
    galleryAltThree: "Luxury barbershop interior",
    galleryAltFour: "Barber tools on a counter",
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "What Our Clients Say",
    testimonialsIntro: "Real feedback from loyal clients who keep coming back.",
    testimonial1Text: "\"The best barbershop experience in Kenitra. The attention to detail is unmatched and the atmosphere is always on point.\"",
    testimonial1Author: "Youssef B.",
    testimonial1Role: "Regular client since 2019",
    testimonial2Text: "\"I've tried many barbers, but this team truly understands modern grooming. Every visit feels like a VIP experience.\"",
    testimonial2Author: "Karim M.",
    testimonial2Role: "Monthly member",
    testimonial3Text: "\"Professional service from start to finish. The beard work is exceptional and the products they use are top quality.\"",
    testimonial3Author: "Amine R.",
    testimonial3Role: "Regular client since 2021",
    contactEyebrow: "Contact",
    contactTitle: "Reserve Your Chair",
    openingHours: "Opening Hours",
    hoursTitle: "Daily Schedule",
    hoursValue: "10:00 AM – 9:00 PM",
    callUs: "Call Us",
    phoneHint: "Fast booking and direct availability confirmation.",
    visitUs: "Visit Us",
    addressHint: "Located in the heart of Kenitra.",
    footerText: "© 2026 Atelier Barber Kenitra. All rights reserved."
  },
  fr: {
    brandAriaLabel: "Aller a l'accueil",
    navAriaLabel: "Navigation principale",
    langSwitcherAriaLabel: "Selecteur de langue",
    brandTagline: "Studio de grooming haut de gamme",
    navHome: "Accueil",
    navServices: "Services",
    navGallery: "Galerie",
    navContact: "Contact",
    heroEyebrow: "Signature grooming à Kenitra",
    heroTitle: "Une expérience barber premium",
    heroSubtitle: "Des coupes maîtrisées, des barbes parfaitement structurées et une ambiance pensée pour une clientèle exigeante.",
    bookNow: "Prendre RDV",
    metricYearsValue: "12+",
    metricYearsLabel: "Ans d'expertise",
    metricClientsValue: "2K+",
    metricClientsLabel: "Clients satisfaits",
    metricCraftValue: "7/7",
    metricCraftLabel: "Jours d'ouverture",
    heroImageAlt: "Barbier réalisant une coupe de précision",
    heroCardTitle: "Un service sur mesure, chaque visite",
    heroCardText: "De la retouche rapide au rituel complet — une expérience premium centrée sur vous.",
    featurePrecisionTitle: "Coupes Précises",
    featurePrecisionDesc: "Chaque détail compte. Nos barbiers maîtrisent dégradés, effilages et travail aux ciseaux.",
    featureAtmosphereTitle: "Ambiance Premium",
    featureAtmosphereDesc: "Un espace conçu pour votre confort pendant qu'on révèle votre meilleur look.",
    featureProductsTitle: "Produits de Qualité",
    featureProductsDesc: "Nous utilisons uniquement des produits professionnels pour le coiffage et les soins.",
    featureExperienceTitle: "Années de Savoir-Faire",
    featureExperienceDesc: "Plus d'une décennie à perfectionner nos compétences pour des résultats constants.",
    servicesEyebrow: "Services",
    servicesTitle: "Carte de prestations premium",
    servicesIntro: "Des offres claires, un positionnement haut de gamme et des tarifs qui reflètent un vrai savoir-faire.",
    serviceHaircutTitle: "Coupe",
    serviceHaircutDesc: "Dégradé précis, travail aux ciseaux, contours nets et coiffage final.",
    serviceHaircutPrice: "120 MAD",
    serviceBeardTitle: "Taille de barbe",
    serviceBeardDesc: "Structuration détaillée, finitions nettes, serviette chaude et soin final.",
    serviceBeardPrice: "80 MAD",
    serviceFullTitle: "Service complet",
    serviceFullDesc: "Coupe plus barbe pour un résultat net et cohérent avec votre style.",
    serviceFullPrice: "180 MAD",
    serviceVipTitle: "Pack VIP",
    serviceVipDesc: "Session complète avec préparation de peau, coiffage et expérience premium.",
    serviceVipPrice: "250 MAD",
    galleryEyebrow: "Galerie",
    galleryTitle: "Réalisations récentes",
    galleryIntro: "Coupes nettes, travail de barbe et ambiance du salon — capturés en images.",
    galleryCaptionOne: "Skin fade moderne",
    galleryCaptionTwo: "Barbe signature",
    galleryCaptionThree: "Ambiance luxe du salon",
    galleryCaptionFour: "Les outils du métier",
    galleryAltOne: "Barbier en train de couper les cheveux",
    galleryAltTwo: "Gros plan sur la taille de barbe",
    galleryAltThree: "Intérieur d'un barber shop haut de gamme",
    galleryAltFour: "Outils de barbier sur un comptoir",
    testimonialsEyebrow: "Témoignages",
    testimonialsTitle: "Ce que disent nos clients",
    testimonialsIntro: "Des retours authentiques de clients fidèles.",
    testimonial1Text: "\"La meilleure expérience barbershop à Kenitra. L'attention aux détails est inégalée et l'ambiance est toujours au top.\"",
    testimonial1Author: "Youssef B.",
    testimonial1Role: "Client régulier depuis 2019",
    testimonial2Text: "\"J'ai essayé beaucoup de barbiers, mais cette équipe comprend vraiment le grooming moderne. Chaque visite est une expérience VIP.\"",
    testimonial2Author: "Karim M.",
    testimonial2Role: "Membre mensuel",
    testimonial3Text: "\"Service professionnel du début à la fin. Le travail de barbe est exceptionnel et les produits sont de grande qualité.\"",
    testimonial3Author: "Amine R.",
    testimonial3Role: "Client régulier depuis 2021",
    contactEyebrow: "Contact",
    contactTitle: "Réservez votre fauteuil",
    openingHours: "Horaires",
    hoursTitle: "Ouvert tous les jours",
    hoursValue: "10h00 – 21h00",
    callUs: "Appelez-nous",
    phoneHint: "Réservation rapide et confirmation immédiate.",
    visitUs: "Adresse",
    addressHint: "Situé au cœur de Kenitra.",
    footerText: "© 2026 Atelier Barber Kenitra. Tous droits réservés."
  },
  ar: {
    brandAriaLabel: "الانتقال إلى الصفحة الرئيسية",
    navAriaLabel: "التنقل الرئيسي",
    langSwitcherAriaLabel: "مبدل اللغة",
    brandTagline: "استوديو حلاقة فاخر",
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navGallery: "المعرض",
    navContact: "التواصل",
    heroEyebrow: "تجربة حلاقة مميزة في القنيطرة",
    heroTitle: "تجربة حلاقة احترافية راقية",
    heroSubtitle: "قصات دقيقة، عناية متقنة باللحية، وأجواء مصممة لعملاء يبحثون عن الجودة والاهتمام بالتفاصيل.",
    bookNow: "احجز الآن",
    metricYearsValue: "+12",
    metricYearsLabel: "سنة من الخبرة",
    metricClientsValue: "+2000",
    metricClientsLabel: "عميل راضٍ",
    metricCraftValue: "7/7",
    metricCraftLabel: "أيام العمل",
    heroImageAlt: "حلاق يقوم بقص شعر بدقة",
    heroCardTitle: "خدمة مصممة لكل زيارة",
    heroCardText: "من التعديلات السريعة إلى جلسات العناية الكاملة — تجربة فاخرة مبنية حولك.",
    featurePrecisionTitle: "قصات دقيقة",
    featurePrecisionDesc: "كل تفصيل مهم. حلاقونا يتقنون التدرجات والقص بالمقص بكل احترافية.",
    featureAtmosphereTitle: "أجواء فاخرة",
    featureAtmosphereDesc: "مساحة مصممة لراحتك بينما نظهر أفضل إطلالة لك.",
    featureProductsTitle: "منتجات عالية الجودة",
    featureProductsDesc: "نستخدم فقط منتجات احترافية للتصفيف والعناية بالبشرة.",
    featureExperienceTitle: "سنوات من الخبرة",
    featureExperienceDesc: "أكثر من عقد من صقل مهاراتنا لتقديم نتائج متسقة من الدرجة الأولى.",
    servicesEyebrow: "الخدمات",
    servicesTitle: "قائمة عناية راقية",
    servicesIntro: "خدمات واضحة، تموضع فاخر، وأسعار تعكس حِرفية حقيقية.",
    serviceHaircutTitle: "قص الشعر",
    serviceHaircutDesc: "تدرج دقيق، عمل بالمقص، تنظيف الأطراف، وتسريحة نهائية أنيقة.",
    serviceHaircutPrice: "120 درهم",
    serviceBeardTitle: "تهذيب اللحية",
    serviceBeardDesc: "تحديد متقن، رسم الخطوط، منشفة ساخنة، ولمسة نهائية مغذية.",
    serviceBeardPrice: "80 درهم",
    serviceFullTitle: "خدمة كاملة",
    serviceFullDesc: "قص شعر مع تهذيب اللحية بإطلالة متناسقة ومصممة حسب ملامحك.",
    serviceFullPrice: "180 درهم",
    serviceVipTitle: "الباقة الفاخرة",
    serviceVipDesc: "جلسة عناية متكاملة مع تحضير البشرة والتصفيف وتجربة مريحة راقية.",
    serviceVipPrice: "250 درهم",
    galleryEyebrow: "المعرض",
    galleryTitle: "أحدث الأعمال",
    galleryIntro: "قصات نظيفة، تفاصيل اللحية، وأجواء المحل — مُلتقطة في لحظات.",
    galleryCaptionOne: "تدرج عصري",
    galleryCaptionTwo: "تهذيب لحية احترافي",
    galleryCaptionThree: "أجواء داخلية فاخرة",
    galleryCaptionFour: "أدوات الحلاقة",
    galleryAltOne: "حلاق يقوم بقص الشعر",
    galleryAltTwo: "صورة مقربة لتهذيب اللحية",
    galleryAltThree: "داخل محل حلاقة فاخر",
    galleryAltFour: "أدوات حلاقة على الطاولة",
    testimonialsEyebrow: "آراء العملاء",
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonialsIntro: "تقييمات حقيقية من عملاء مخلصين يعودون دائماً.",
    testimonial1Text: "\"أفضل تجربة حلاقة في القنيطرة. الاهتمام بالتفاصيل لا مثيل له والأجواء دائماً ممتازة.\"",
    testimonial1Author: "يوسف ب.",
    testimonial1Role: "عميل دائم منذ 2019",
    testimonial2Text: "\"جربت حلاقين كثيرين، لكن هذا الفريق يفهم فعلاً الحلاقة العصرية. كل زيارة تجربة VIP.\"",
    testimonial2Author: "كريم م.",
    testimonial2Role: "عضو شهري",
    testimonial3Text: "\"خدمة احترافية من البداية للنهاية. العمل على اللحية استثنائي والمنتجات المستخدمة عالية الجودة.\"",
    testimonial3Author: "أمين ر.",
    testimonial3Role: "عميل دائم منذ 2021",
    contactEyebrow: "التواصل",
    contactTitle: "احجز مقعدك",
    openingHours: "أوقات العمل",
    hoursTitle: "الجدول اليومي",
    hoursValue: "10:00 صباحاً – 9:00 مساءً",
    callUs: "اتصل بنا",
    phoneHint: "حجز سريع وتأكيد مباشر للمواعيد.",
    visitUs: "زورونا",
    addressHint: "يقع في قلب القنيطرة.",
    footerText: "© 2026 أتيليه باربر القنيطرة. جميع الحقوق محفوظة."
  }
};

// ─── PAGE LOADER ────────────────────────────────────────────
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("page-loader").classList.add("loaded"), 400);
});

// ─── HEADER SCROLL EFFECT ───────────────────────────────────
const header = document.getElementById("site-header");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  lastScroll = window.scrollY;
}, { passive: true });

// ─── HAMBURGER MENU ─────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileOverlay = document.getElementById("mobile-overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileOverlay.classList.toggle("open");
  document.body.style.overflow = mobileOverlay.classList.contains("open") ? "hidden" : "";
});

document.querySelectorAll(".mobile-nav-link, .mobile-overlay .cta-btn").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileOverlay.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ─── ACTIVE NAV ON SCROLL ───────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a[data-nav]");

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.id;
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("data-nav") === id);
      });
    }
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });

// ─── SCROLL REVEAL ──────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ─── HERO PARTICLES ─────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const count = 35;

  function resize() {
    const hero = canvas.parentElement;
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: count }, createParticle);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  init();
  animate();
  window.addEventListener("resize", resize);
})();

// ─── LIGHTBOX ───────────────────────────────────────────────
function openLightbox(figure) {
  const img = figure.querySelector("img");
  if (!img) return;
  const lb = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = img.src;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

// ─── SVG FALLBACK ───────────────────────────────────────────
function escapeSvgText(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function createFallbackImage(title) {
  const safeTitle = escapeSvgText(title);
  const safeShopName = escapeSvgText(shopConfig.shopName);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#181818"/><stop offset="100%" stop-color="#0b0b0b"/>
      </linearGradient>
      <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c9a84c" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#8a6a10" stop-opacity="0.55"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="900" fill="url(#bg)"/>
    <circle cx="980" cy="160" r="220" fill="#c9a84c" opacity="0.09"/>
    <circle cx="260" cy="740" r="260" fill="#c9a84c" opacity="0.05"/>
    <rect x="42" y="42" width="1116" height="816" rx="34" fill="none" stroke="url(#line)" stroke-opacity="0.55"/>
    <text x="80" y="710" fill="#ffffff" font-family="Montserrat, sans-serif" font-size="68" font-weight="700">${safeTitle}</text>
    <text x="80" y="780" fill="#ffffff" fill-opacity="0.72" font-family="Montserrat, sans-serif" font-size="30">${safeShopName}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function applyImageSource(image, src, fallbackTitle) {
  if (!image) return;
  image.dataset.fallbackTitle = fallbackTitle;
  image.onerror = () => {
    image.onerror = null;
    image.dataset.fallback = "true";
    image.src = createFallbackImage(image.dataset.fallbackTitle || shopConfig.shopName);
  };
  if (image.dataset.originalSrc !== src) {
    image.dataset.originalSrc = src;
    image.dataset.fallback = "false";
    image.src = src;
  } else if (image.dataset.fallback === "true") {
    image.src = createFallbackImage(image.dataset.fallbackTitle || shopConfig.shopName);
  }
}

// ─── I18N ENGINE ────────────────────────────────────────────
function applyShopConfig(lang) {
  const currentAddress = shopConfig.address[lang] || shopConfig.address.en;
  document.title = shopConfig.shopName;
  document.getElementById("shop-name").textContent = shopConfig.shopName;
  document.getElementById("contact-phone").textContent = shopConfig.phone;
  document.getElementById("contact-address").textContent = currentAddress;

  const phoneLink = document.getElementById("phone-link");
  phoneLink.textContent = shopConfig.phone;
  phoneLink.href = `tel:${shopConfig.phone.replace(/\s+/g, "")}`;

  const whatsappFab = document.getElementById("whatsapp-fab");
  if (whatsappFab) {
    whatsappFab.href = `https://wa.me/${shopConfig.phone.replace(/[\s+]/g, "")}`;
  }
}

function applyImageConfig(lang) {
  const dictionary = translations[lang] || translations.en;
  const heroImage = document.getElementById("hero-image");
  applyImageSource(heroImage, shopConfig.images.hero, dictionary.heroImageAlt);

  const galleryAltKeys = ["galleryAltOne", "galleryAltTwo", "galleryAltThree", "galleryAltFour"];
  shopConfig.images.gallery.forEach((src, index) => {
    const image = document.getElementById(`gallery-image-${index}`);
    const fallbackTitle = dictionary[galleryAltKeys[index]] || shopConfig.shopName;
    applyImageSource(image, src, fallbackTitle);
  });
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) el.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    if (dictionary[key]) el.setAttribute("alt", dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dictionary[key]) el.setAttribute("aria-label", dictionary[key]);
  });

  document.querySelectorAll(".lang-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  applyShopConfig(lang);
  applyImageConfig(lang);
  localStorage.setItem("preferredLanguage", lang);
}

// ─── INIT ───────────────────────────────────────────────────
document.querySelectorAll(".lang-btn").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const initialLanguage = localStorage.getItem("preferredLanguage") || "fr";
setLanguage(initialLanguage);
updateActiveNav();
