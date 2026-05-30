
  /* ── NAV SCROLL ─────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── HAMBURGER ──────────────────────────────────── */
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  /* ── THEME TOGGLE ───────────────────────────────── */
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.querySelector('i').className = document.body.classList.contains('light')
      ? 'fa fa-moon' : 'fa fa-sun';
  });

  /* ── SCROLL REVEAL ──────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  /* ── ANIMATED SKILL BARS ────────────────────────── */
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fills = e.target.querySelectorAll('.bar-fill');
        fills.forEach(f => { f.style.width = f.dataset.pct + '%'; });
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('#skills').forEach(el => barObserver.observe(el));

  /* ── ACTIVE NAV LINK ────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.style.color = '');
        const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (link) link.style.color = 'var(--sky)';
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => sectionObserver.observe(s));
