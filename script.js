document.addEventListener('DOMContentLoaded', function () {

  // ===== TRANSLATIONS =====
  var translations = {
    my: {
      nav_home: 'Beranda',
      nav_services: 'Servis',
      nav_why: 'Kenapa Kami',
      nav_pricing: 'Pakej',
      nav_testimonials: 'Testimoni',
      nav_book: 'Tempah Sekarang',
      hero_badge: '#1 Servis Pembersihan Dipercayai',
      hero_title: 'Rumah Bersih,<br><span class="gradient-text">Hidup Tenang.</span>',
      hero_desc: 'Kami menyediakan servis pembersihan profesional untuk rumah, pejabat dan premis komersial. Biarkan kami uruskan kebersihan, anda fokus pada yang penting.',
      hero_btn_packages: 'Lihat Pakej Kami',
      hero_btn_whatsapp: 'WhatsApp Kami',
      stat_customers: 'Pelanggan Gembira',
      stat_years: 'Tahun Pengalaman',
      stat_satisfaction: 'Kepuasan Dijamin',
      float_guaranteed: '100% Dijamin',
      float_punctual: 'Tepat Waktu',
      svc_tag: 'Servis Kami',
      svc_title: 'Solusi Pembersihan <span class="gradient-text">Lengkap</span>',
      svc_desc: 'Kami menawarkan pelbagai servis pembersihan untuk memenuhi setiap keperluan anda',
      svc1_title: 'Pembersihan Rumah',
      svc1_desc: 'Pembersihan menyeluruh untuk setiap sudut rumah anda \u2014 dapur, bilik tidur, bilik mandi dan ruang tamu.',
      svc1_f1: 'Sapu & mop lantai',
      svc1_f2: 'Cuci bilik mandi',
      svc1_f3: 'Lap habuk & kemas',
      svc2_title: 'Pembersihan Pejabat',
      svc2_desc: 'Persekitaran kerja yang bersih meningkatkan produktiviti. Kami jaga kebersihan pejabat anda.',
      svc2_f1: 'Pembersihan harian/mingguan',
      svc2_f2: 'Sanitasi permukaan',
      svc2_f3: 'Pengurusan sampah',
      svc3_title: 'Cuci Sofa & Karpet',
      svc3_desc: 'Deep cleaning untuk sofa, karpet dan perabot lembut anda menggunakan peralatan profesional.',
      svc3_f1: 'Deep extraction cleaning',
      svc3_f2: 'Nyahkan kotoran degil',
      svc3_f3: 'Wangian segar',
      svc4_title: 'Servis Aircond',
      svc4_desc: 'Cuci aircond untuk udara lebih segar dan penjimatan elektrik yang lebih baik.',
      svc5_desc: 'Pembersihan selepas renovasi \u2014 buang habuk, simen dan sisa pembinaan dengan teliti.',
      svc5_f1: 'Buang sisa binaan',
      svc5_f2: 'Polish lantai',
      svc5_f3: 'Cuci tingkap & frame',
      svc6_title: 'Kawalan Serangga',
      svc6_desc: 'Rawatan pest control untuk menghalau nyamuk, semut, lipas dan anai-anai dari rumah anda.',
      svc6_f2: 'Rawatan anai-anai',
      svc6_f3: 'Pencegahan serangga',
      why_tag: 'Kenapa Pilih Kami',
      why_title: 'Kami Bukan Sekadar <span class="gradient-text">Membersih</span>',
      why_desc: 'Kami memberikan pengalaman pembersihan yang luar biasa dengan standard tertinggi. Setiap pekerja kami terlatih dan menggunakan produk berkualiti.',
      why_f1_title: 'Pekerja Terlatih & Berdaftar',
      why_f1_desc: 'Semua pekerja kami melalui latihan ketat dan pemeriksaan latar belakang.',
      why_f2_title: 'Produk Mesra Alam',
      why_f2_desc: 'Kami menggunakan produk pembersihan yang selamat untuk keluarga dan haiwan peliharaan.',
      why_f3_title: 'Harga Berpatutan',
      why_f3_desc: 'Tiada caj tersembunyi. Harga telus dan kompetitif di pasaran.',
      why_f4_title: 'Jaminan Kepuasan',
      why_f4_desc: 'Tidak berpuas hati? Kami akan datang semula dan bersihkan tanpa caj tambahan.',
      vis_projects: 'Projek Siap',
      vis_workers: 'Pekerja Terlatih',
      vis_rating: 'Rating Purata',
      price_tag: 'Pakej Harga',
      price_title: 'Pilih Pakej <span class="gradient-text">Terbaik</span> Untuk Anda',
      price_desc: 'Pakej fleksibel yang sesuai untuk setiap bajet dan keperluan',
      pkg1_name: 'Asas',
      pkg1_desc: 'Sesuai untuk pembersihan ringan',
      per_session: '/sesi',
      pkg1_f1: 'Sapu & mop semua lantai',
      pkg1_f2: 'Lap habuk perabot',
      pkg1_f3: 'Cuci bilik mandi (1)',
      pkg1_f4: 'Kemas dapur asas',
      pkg1_f6: 'Cuci tingkap',
      btn_choose: 'Pilih Pakej',
      most_popular: 'Paling Popular',
      pkg2_desc: 'Pilihan terbaik untuk kebanyakan rumah',
      pkg2_f1: 'Semua dalam Pakej Asas',
      pkg2_f2: 'Deep cleaning dapur',
      pkg2_f3: 'Cuci semua bilik mandi',
      pkg2_f4: 'Cuci tingkap dalam',
      pkg2_f5: 'Vacuum karpet & sofa',
      pkg2_f6: 'Cuci aircond',
      pkg3_desc: 'Pembersihan menyeluruh sepenuhnya',
      pkg3_f1: 'Semua dalam Pakej Standard',
      pkg3_f2: 'Chemical wash aircond (2 unit)',
      pkg3_f3: 'Cuci tingkap luar',
      pkg3_f4: 'Deep clean sofa & karpet',
      pkg3_f5: 'Sanitasi keseluruhan',
      pkg3_f6: 'Jaminan 7 hari',
      test_tag: 'Testimoni',
      test_title: 'Apa Kata <span class="gradient-text">Pelanggan Kami</span>',
      test_desc: 'Ribuan pelanggan berpuas hati dengan servis kami',
      test1_text: '"Rumah saya macam baru selepas SparkleClean datang bersihkan. Memang sangat teliti dan profesional. Tak perlu risau lagi!"',
      test1_role: 'Ibu Rumah Tangga, Kuala Lumpur',
      test2_text: '"Kami guna servis SparkleClean untuk pejabat setiap minggu. Pekerja mereka rajin, amanah dan sentiasa tepat masa. Highly recommended!"',
      test2_role: 'Pengurus Pejabat, Petaling Jaya',
      test3_text: '"Lepas renovation rumah, habuk merata-rata. SparkleClean buat kerja post-reno cleaning yang sangat berkualiti. Memang berbaloi!"',
      test3_role: 'Pemilik Rumah, Shah Alam',
      book_tag: 'Tempahan',
      book_title: 'Buat <span class="gradient-text">Tempahan</span> Sekarang',
      book_desc: 'Isi borang di bawah dan kami akan hubungi anda dalam masa 30 minit',
      book_how: 'Cara Tempahan',
      step1_title: 'Isi Borang',
      step1_desc: 'Lengkapkan maklumat anda dan pilih servis yang dikehendaki.',
      step2_title: 'Pengesahan',
      step2_desc: 'Kami akan hubungi anda melalui WhatsApp untuk sahkan tempahan.',
      step3_title: 'Servis Dijalankan',
      step3_desc: 'Pasukan kami akan tiba pada tarikh dan masa yang dijanjikan.',
      book_or_wa: 'Atau terus WhatsApp:',
      form_name: 'Nama Penuh',
      form_name_ph: 'Contoh: Ahmad bin Ali',
      form_phone: 'No. Telefon',
      form_phone_ph: 'Contoh: 011-6988 7631',
      form_email: 'Email (Pilihan)',
      form_email_ph: 'Contoh: nama@email.com',
      form_service: 'Jenis Servis',
      form_service_ph: '-- Pilih Servis --',
      opt_house: 'Pembersihan Rumah',
      opt_office: 'Pembersihan Pejabat',
      opt_sofa: 'Cuci Sofa & Karpet',
      opt_aircond: 'Servis Aircond',
      opt_postreno: 'Post-Renovation Cleaning',
      opt_pest: 'Kawalan Serangga',
      form_date: 'Tarikh Pilihan',
      form_time: 'Masa Pilihan',
      form_time_ph: '-- Pilih Masa --',
      form_address: 'Alamat',
      form_address_ph: 'Alamat penuh untuk servis',
      form_notes: 'Catatan Tambahan',
      form_notes_ph: 'Sebarang permintaan khas atau maklumat tambahan',
      form_submit: 'Hantar Tempahan via WhatsApp',
      form_safe: 'Maklumat anda selamat dan tidak akan dikongsi.',
      cta_title: 'Sedia Untuk Rumah <span class="gradient-text-light">Lebih Bersih?</span>',
      cta_desc: 'Hubungi kami sekarang untuk dapatkan sebut harga percuma. Tiada komitmen!',
      cta_wa: 'WhatsApp Sekarang',
      trust1: 'Sebut harga percuma',
      trust2: 'Tiada caj tersembunyi',
      trust3: 'Respon dalam 30 minit',
      footer_about: 'Servis pembersihan profesional yang dipercayai oleh ribuan pelanggan di seluruh Malaysia.',
      footer_quick: 'Pautan Pantas',
      footer_pricing: 'Pakej Harga',
      footer_contact_link: 'Hubungi Kami',
      footer_hours: 'Isnin - Sabtu, 8am - 6pm',
      footer_copy: '\u00a9 2024 SparkleClean. Hak Cipta Terpelihara.'
    },
    en: {
      nav_home: 'Home',
      nav_services: 'Services',
      nav_why: 'Why Us',
      nav_pricing: 'Packages',
      nav_testimonials: 'Testimonials',
      nav_book: 'Book Now',
      hero_badge: '#1 Trusted Cleaning Service',
      hero_title: 'Clean Home,<br><span class="gradient-text">Peaceful Life.</span>',
      hero_desc: 'We provide professional cleaning services for homes, offices and commercial premises. Let us handle the cleaning while you focus on what matters.',
      hero_btn_packages: 'View Our Packages',
      hero_btn_whatsapp: 'WhatsApp Us',
      stat_customers: 'Happy Customers',
      stat_years: 'Years Experience',
      stat_satisfaction: 'Satisfaction Guaranteed',
      float_guaranteed: '100% Guaranteed',
      float_punctual: 'Punctual',
      svc_tag: 'Our Services',
      svc_title: 'Complete Cleaning <span class="gradient-text">Solutions</span>',
      svc_desc: 'We offer a wide range of cleaning services to meet all your needs',
      svc1_title: 'House Cleaning',
      svc1_desc: 'Thorough cleaning for every corner of your home \u2014 kitchen, bedrooms, bathrooms and living areas.',
      svc1_f1: 'Sweep & mop floors',
      svc1_f2: 'Bathroom cleaning',
      svc1_f3: 'Dust & tidy up',
      svc2_title: 'Office Cleaning',
      svc2_desc: 'A clean working environment boosts productivity. We take care of your office cleanliness.',
      svc2_f1: 'Daily/weekly cleaning',
      svc2_f2: 'Surface sanitization',
      svc2_f3: 'Waste management',
      svc3_title: 'Sofa & Carpet Cleaning',
      svc3_desc: 'Deep cleaning for your sofas, carpets and upholstered furniture using professional equipment.',
      svc3_f1: 'Deep extraction cleaning',
      svc3_f2: 'Remove stubborn stains',
      svc3_f3: 'Fresh fragrance',
      svc4_title: 'Aircond Service',
      svc4_desc: 'Aircond cleaning for fresher air and better electricity savings.',
      svc5_desc: 'Post-renovation cleaning \u2014 remove dust, cement and construction debris thoroughly.',
      svc5_f1: 'Remove construction waste',
      svc5_f2: 'Floor polishing',
      svc5_f3: 'Window & frame cleaning',
      svc6_title: 'Pest Control',
      svc6_desc: 'Pest control treatment to repel mosquitoes, ants, cockroaches and termites from your home.',
      svc6_f2: 'Termite treatment',
      svc6_f3: 'Pest prevention',
      why_tag: 'Why Choose Us',
      why_title: 'We Don\'t Just <span class="gradient-text">Clean</span>',
      why_desc: 'We deliver an extraordinary cleaning experience with the highest standards. Every worker is trained and uses quality products.',
      why_f1_title: 'Trained & Registered Workers',
      why_f1_desc: 'All our workers undergo rigorous training and background checks.',
      why_f2_title: 'Eco-Friendly Products',
      why_f2_desc: 'We use cleaning products that are safe for your family and pets.',
      why_f3_title: 'Affordable Prices',
      why_f3_desc: 'No hidden charges. Transparent and competitive pricing.',
      why_f4_title: 'Satisfaction Guaranteed',
      why_f4_desc: 'Not satisfied? We\'ll come back and clean again at no extra charge.',
      vis_projects: 'Projects Completed',
      vis_workers: 'Trained Workers',
      vis_rating: 'Average Rating',
      price_tag: 'Pricing Packages',
      price_title: 'Choose The <span class="gradient-text">Best</span> Package For You',
      price_desc: 'Flexible packages suited for every budget and need',
      pkg1_name: 'Basic',
      pkg1_desc: 'Suitable for light cleaning',
      per_session: '/session',
      pkg1_f1: 'Sweep & mop all floors',
      pkg1_f2: 'Dust furniture',
      pkg1_f3: 'Clean bathroom (1)',
      pkg1_f4: 'Basic kitchen tidying',
      pkg1_f6: 'Window cleaning',
      btn_choose: 'Choose Package',
      most_popular: 'Most Popular',
      pkg2_desc: 'Best choice for most homes',
      pkg2_f1: 'Everything in Basic Package',
      pkg2_f2: 'Deep cleaning kitchen',
      pkg2_f3: 'Clean all bathrooms',
      pkg2_f4: 'Interior window cleaning',
      pkg2_f5: 'Vacuum carpets & sofas',
      pkg2_f6: 'Aircond cleaning',
      pkg3_desc: 'Complete thorough cleaning',
      pkg3_f1: 'Everything in Standard Package',
      pkg3_f2: 'Chemical wash aircond (2 units)',
      pkg3_f3: 'Exterior window cleaning',
      pkg3_f4: 'Deep clean sofa & carpet',
      pkg3_f5: 'Full sanitization',
      pkg3_f6: '7-day guarantee',
      test_tag: 'Testimonials',
      test_title: 'What Our <span class="gradient-text">Customers Say</span>',
      test_desc: 'Thousands of satisfied customers trust our services',
      test1_text: '"My house looks brand new after SparkleClean came to clean it. Very thorough and professional. No more worries!"',
      test1_role: 'Housewife, Kuala Lumpur',
      test2_text: '"We use SparkleClean for our office every week. Their workers are hardworking, trustworthy and always on time. Highly recommended!"',
      test2_role: 'Office Manager, Petaling Jaya',
      test3_text: '"After our house renovation, dust was everywhere. SparkleClean did an amazing post-reno cleaning job. Totally worth it!"',
      test3_role: 'Homeowner, Shah Alam',
      book_tag: 'Booking',
      book_title: 'Make Your <span class="gradient-text">Booking</span> Now',
      book_desc: 'Fill in the form below and we will contact you within 30 minutes',
      book_how: 'How To Book',
      step1_title: 'Fill The Form',
      step1_desc: 'Complete your details and select the desired service.',
      step2_title: 'Confirmation',
      step2_desc: 'We will contact you via WhatsApp to confirm the booking.',
      step3_title: 'Service Day',
      step3_desc: 'Our team will arrive at the promised date and time.',
      book_or_wa: 'Or WhatsApp directly:',
      form_name: 'Full Name',
      form_name_ph: 'Example: Ahmad bin Ali',
      form_phone: 'Phone No.',
      form_phone_ph: 'Example: 011-6988 7631',
      form_email: 'Email (Optional)',
      form_email_ph: 'Example: name@email.com',
      form_service: 'Service Type',
      form_service_ph: '-- Select Service --',
      opt_house: 'House Cleaning',
      opt_office: 'Office Cleaning',
      opt_sofa: 'Sofa & Carpet Cleaning',
      opt_aircond: 'Aircond Service',
      opt_postreno: 'Post-Renovation Cleaning',
      opt_pest: 'Pest Control',
      form_date: 'Preferred Date',
      form_time: 'Preferred Time',
      form_time_ph: '-- Select Time --',
      form_address: 'Address',
      form_address_ph: 'Full address for service',
      form_notes: 'Additional Notes',
      form_notes_ph: 'Any special requests or additional information',
      form_submit: 'Submit Booking via WhatsApp',
      form_safe: 'Your information is safe and will not be shared.',
      cta_title: 'Ready For A <span class="gradient-text-light">Cleaner Home?</span>',
      cta_desc: 'Contact us now for a free quote. No commitment!',
      cta_wa: 'WhatsApp Now',
      trust1: 'Free quotation',
      trust2: 'No hidden charges',
      trust3: 'Response within 30 minutes',
      footer_about: 'Professional cleaning service trusted by thousands of customers across Malaysia.',
      footer_quick: 'Quick Links',
      footer_pricing: 'Pricing',
      footer_contact_link: 'Contact Us',
      footer_hours: 'Monday - Saturday, 8am - 6pm',
      footer_copy: '\u00a9 2024 SparkleClean. All Rights Reserved.'
    }
  };

  var currentLang = 'my';

  function setLanguage(lang) {
    currentLang = lang;
    var t = translations[lang];
    document.documentElement.lang = lang === 'my' ? 'ms' : 'en';

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // Update innerHTML (elements with rich HTML like spans)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update toggle button
    var langLabel = document.getElementById('langLabel');
    var langFlag = document.querySelector('.lang-flag');
    if (lang === 'my') {
      langLabel.textContent = 'EN';
      langFlag.textContent = '\ud83c\uddec\ud83c\udde7';
    } else {
      langLabel.textContent = 'MY';
      langFlag.textContent = '\ud83c\uddf2\ud83c\uddfe';
    }

    // Save preference
    try { localStorage.setItem('sparkle_lang', lang); } catch (e) {}
  }

  // Language toggle button
  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLanguage(currentLang === 'my' ? 'en' : 'my');
    });
  }

  // Load saved language
  try {
    var saved = localStorage.getItem('sparkle_lang');
    if (saved === 'en') {
      setLanguage('en');
    }
  } catch (e) {}

  // ===== Navbar Scroll Effect =====
  var navbar = document.getElementById('navbar');
  var backToTop = document.getElementById('backToTop');

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // ===== Mobile Nav Toggle =====
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  document.addEventListener('click', function (e) {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });

  // ===== Back to Top =====
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== Counter Animation =====
  function animateCounters() {
    var counters = document.querySelectorAll('.stat-num');
    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'));
      var current = 0;
      var increment = target / 80;
      var duration = 2000;
      var stepTime = duration / 80;

      function updateCounter() {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current).toLocaleString();
          setTimeout(updateCounter, stepTime);
        } else {
          counter.textContent = target.toLocaleString();
        }
      }

      updateCounter();
    });
  }

  // ===== Scroll Reveal Animation =====
  var animatedElements = document.querySelectorAll(
    '.service-card, .pricing-card, .testimonial-card, .feature-item, .visual-card'
  );

  animatedElements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  var countersAnimated = false;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });

  // Counter observer
  var statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(statsSection);
  }

  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== Active Nav Link on Scroll =====
  var sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');
      var navLink = document.querySelector('.nav-links a[href="#' + sectionId + '"]');
      if (navLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLink.style.opacity = '1';
          navLink.style.fontWeight = '700';
        } else {
          navLink.style.opacity = '';
          navLink.style.fontWeight = '';
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // ===== Pakej Buttons — Scroll to Form & Pre-fill =====
  document.querySelectorAll('.pakej-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var harga = this.getAttribute('data-harga');
      var catatanField = document.getElementById('catatan');
      if (catatanField && harga) {
        catatanField.value = harga;
      }
      var formSection = document.getElementById('tempahan');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function () {
          var namaField = document.getElementById('nama');
          if (namaField) namaField.focus();
        }, 800);
      }
    });
  });

  // ===== Booking Form — Send to WhatsApp =====
  var bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    var tarikhInput = document.getElementById('tarikh');
    if (tarikhInput) {
      var today = new Date().toISOString().split('T')[0];
      tarikhInput.setAttribute('min', today);
    }

    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nama = document.getElementById('nama').value.trim();
      var telefon = document.getElementById('telefon').value.trim();
      var email = document.getElementById('email').value.trim();
      var servis = document.getElementById('servis-pilihan').value;
      var tarikh = document.getElementById('tarikh').value;
      var masa = document.getElementById('masa').value;
      var alamat = document.getElementById('alamat').value.trim();
      var catatan = document.getElementById('catatan').value.trim();

      var tarikhFormatted = '';
      if (tarikh) {
        var d = new Date(tarikh);
        var days = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
        var months = ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogos', 'Sep', 'Okt', 'Nov', 'Dis'];
        tarikhFormatted = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
      }

      var message = '\ud83e\uddf9 *TEMPAHAN BARU \u2014 SparkleClean*\n\n';
      message += '\ud83d\udc64 *Nama:* ' + nama + '\n';
      message += '\ud83d\udcf1 *Telefon:* ' + telefon + '\n';
      if (email) message += '\ud83d\udce7 *Email:* ' + email + '\n';
      message += '\ud83e\uddfd *Servis:* ' + servis + '\n';
      message += '\ud83d\udcc5 *Tarikh:* ' + tarikhFormatted + '\n';
      message += '\ud83d\udd50 *Masa:* ' + masa + '\n';
      message += '\ud83d\udccd *Alamat:* ' + alamat + '\n';
      if (catatan) message += '\ud83d\udcdd *Catatan:* ' + catatan + '\n';
      message += '\n_Dihantar melalui laman web SparkleClean_';

      var waURL = 'https://wa.me/601169887631?text=' + encodeURIComponent(message);
      window.open(waURL, '_blank');
    });
  }
});
