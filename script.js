document.addEventListener('DOMContentLoaded', function () {

  // ===== Navbar Scroll Effect =====
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

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
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

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

  // ===== Booking Form — Send to WhatsApp =====
  var bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    // Set minimum date to today
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

      // Format date nicely
      var tarikhFormatted = '';
      if (tarikh) {
        var d = new Date(tarikh);
        var days = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
        var months = ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogos', 'Sep', 'Okt', 'Nov', 'Dis'];
        tarikhFormatted = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
      }

      var message = '🧹 *TEMPAHAN BARU — SparkleClean*\n\n';
      message += '👤 *Nama:* ' + nama + '\n';
      message += '📱 *Telefon:* ' + telefon + '\n';
      if (email) message += '📧 *Email:* ' + email + '\n';
      message += '🧽 *Servis:* ' + servis + '\n';
      message += '📅 *Tarikh:* ' + tarikhFormatted + '\n';
      message += '🕐 *Masa:* ' + masa + '\n';
      message += '📍 *Alamat:* ' + alamat + '\n';
      if (catatan) message += '📝 *Catatan:* ' + catatan + '\n';
      message += '\n_Dihantar melalui laman web SparkleClean_';

      var waURL = 'https://wa.me/601169887631?text=' + encodeURIComponent(message);
      window.open(waURL, '_blank');
    });
  }
});
