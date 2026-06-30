// DC Black Cars — dcblackcars.com

document.addEventListener('DOMContentLoaded', function() {

  // ============ MOBILE MENU ============
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============ DROPDOWN NAV — click only, stays open ============
  const dropdownBtn = document.querySelector('.nav-dropdown-btn');
  const dropdownPanel = document.querySelector('.nav-dropdown-panel');

  if (dropdownBtn && dropdownPanel) {

    // Toggle on button click
    dropdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdownPanel.classList.toggle('open');
    });

    // CRITICAL: Stop clicks inside panel from closing it
    dropdownPanel.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    // Allow links inside dropdown to navigate normally
    dropdownPanel.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.stopPropagation();
        // Let the browser navigate — do not preventDefault
        dropdownPanel.classList.remove('open');
      });
    });

    // Close when clicking anywhere outside the nav
    document.addEventListener('click', function() {
      dropdownPanel.classList.remove('open');
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') dropdownPanel.classList.remove('open');
    });
  }

  // ============ NAV SCROLL EFFECT ============
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(201,168,76,0.2)'
        : '#222222';
    });
  }

  // ============ ACTIVE NAV LINK ============
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = '#C9A84C';
    }
  });

  // ============ SCROLL FADE IN ============
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(
    '.service-card, .fleet-card, .testimonial-card, .airport-card, .route-card, .fbo-card, .why-item'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, background 0.3s ease';
    observer.observe(el);
  });

});
