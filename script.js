/* Honda Weststar Ampang - Script */

document.addEventListener('DOMContentLoaded', function () {

  // --- Dynamic Year ---
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Swiper: Model & Price Carousel ---
  new Swiper('.model-swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 20 }
    }
  });

  // --- Scroll Fade-In Animation ---
  var animatedEls = document.querySelectorAll(
    '.benefit-card, .gallery-item, .brochure-card, .video-card, .contact-box, .location-box'
  );

  animatedEls.forEach(function (el) {
    el.classList.add('fade-in');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  animatedEls.forEach(function (el) {
    observer.observe(el);
  });

  // --- Lightbox ---
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('.lightbox-content img') : null;
  var lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  var lightboxPrev = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
  var lightboxNext = lightbox ? lightbox.querySelector('.lightbox-next') : null;
  var galleryItems = document.querySelectorAll('[data-lightbox]');
  var currentIndex = 0;
  var galleryArray = Array.from(galleryItems);

  function openLightbox(index) {
    currentIndex = index;
    var href = galleryArray[currentIndex].getAttribute('href');
    lightboxImg.src = href;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryArray.length) % galleryArray.length;
    lightboxImg.src = galleryArray[currentIndex].getAttribute('href');
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryArray.length;
    lightboxImg.src = galleryArray[currentIndex].getAttribute('href');
  }

  galleryItems.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(index);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

});
