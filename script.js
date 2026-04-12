// ============================================
// Bravo.Ai — Production Interactive Script
// ============================================

// ── Modal Stack (LOW-006 fix) ──────────────
// Centralized Escape key handler — only closes topmost modal
const _modalStack = [];
function _pushModal(closeFn) { _modalStack.push(closeFn); }
function _popModal(closeFn) {
  const idx = _modalStack.indexOf(closeFn);
  if (idx !== -1) _modalStack.splice(idx, 1);
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && _modalStack.length) {
    _modalStack[_modalStack.length - 1]();
  }
});

// ── Header Scroll ──────────────────────────
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.pageYOffset > 60);
  }, { passive: true });
}

// ── Parallax Orbs (disabled for performance) ─
function initParallax() {
  // Disabled: orbs now use CSS-only animation for better performance
}

// ── Scroll Reveal ──────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  els.forEach(el => observer.observe(el));
}

// ── Ripple Effect ──────────────────────────
function initRippleEffect() {
  document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripple.style.cssText = `
        position:absolute;background:rgba(255,255,255,0.2);border-radius:50%;
        transform:scale(0);animation:ripple 0.55s linear;pointer-events:none;
        left:${x}px;top:${y}px;width:100px;height:100px;
        margin-left:-50px;margin-top:-50px;`;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ── Stat Counters ──────────────────────────
function initCounters() {
  const stats = document.querySelectorAll('.stat-value[data-target], .ring-number[data-target]');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const originalText = el.textContent;
      const suffix = originalText.replace(/\d/g, '').replace(/^0/, '');

      let current = 0;
      const step = Math.ceil(target / 60);
      const duration = 1400;
      const interval = duration / (target / step);

      const tick = () => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current < target) setTimeout(tick, interval);
      };

      setTimeout(tick, 250);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  stats.forEach(s => observer.observe(s));
}

// ── Mobile Navigation ──────────────────────
function initMobileNav() {
  const hamburger = document.getElementById('navHamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;

  let isOpen = false;

  const openMenu = () => {
    isOpen = true;
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('active');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    isOpen = false;
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('active');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    isOpen ? closeMenu() : openMenu();
  });

  // Close on nav link click
  mobileNav.querySelectorAll('a, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });
}

// ── Clean URL Navigation ───────────────────
function initCleanNavigation() {
  const currentPath = window.location.pathname;
  if (currentPath.includes('.html')) {
    window.history.replaceState({}, '', currentPath.replace('.html', ''));
  }

  // Smooth scroll for data-scroll links (no URL hash change)
  document.addEventListener('click', (e) => {
    const scrollLink = e.target.closest('[data-scroll]');
    if (scrollLink) {
      e.preventDefault();
      const targetId = scrollLink.getAttribute('data-scroll');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === 'javascript:void(0)') return;

    if (href === 'index.html' || href.includes('index.html')) {
      e.preventDefault();
      window.history.replaceState({}, '', '/');
      window.location.href = '/';
      return;
    }

    if (href.endsWith('.html')) {
      e.preventDefault();
      const fileName = href.split('/').pop().replace('.html', '');
      window.history.replaceState({}, '', '/' + fileName);
      window.location.href = href;
    }
  }, true);
}

// ── Waitlist Modal ─────────────────────────
function initWaitlistModal() {
  const modal      = document.getElementById('waitlistModal');
  const modalClose = document.getElementById('modalClose');
  const form       = document.getElementById('waitlistForm');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.querySelector('input')?.focus();
    _pushModal(closeModal);
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    _popModal(closeModal);
  };

  // Trigger: data-action="join-waitlist"
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="join-waitlist"]');
    if (btn) {
      e.preventDefault();
      openModal();
    }
  });

  // Browse → scroll to agents
  ['heroBrowse', 'ctaBrowse'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  // Escape handled by centralized _modalStack (LOW-006 fix)

  // Form submit — sends to /api/waitlist (Resend emails)
  if (form) {
    let lastSubmitTime = 0;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Rate limiting: 3-second cooldown
      const now = Date.now();
      if (now - lastSubmitTime < 3000) return;

      const name     = form.querySelector('input[type="text"]')?.value.trim();
      const email    = form.querySelector('input[type="email"]')?.value.trim();
      const interest = form.querySelector('select')?.value;
      if (!name || !email || !interest) return;

      // Email format validation
      if (!emailRegex.test(email)) {
        form.querySelector('input[type="email"]')?.focus();
        return;
      }

      lastSubmitTime = now;

      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting\u2026';

      try {
        const res = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, interest })
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error || 'Something went wrong');
        }

        // Success
        form.style.display = 'none';
        const success = document.getElementById('successMessage');
        if (success) success.classList.add('show');

        setTimeout(() => {
          form.style.display = '';
          if (success) success.classList.remove('show');
          form.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = '\u2713 Secure My Spot';
          closeModal();
        }, 3200);

      } catch (err) {
        console.error('Waitlist submission failed:', err);
        submitBtn.disabled = false;
        submitBtn.textContent = 'Try Again';
        submitBtn.style.background = '#ef4444';
        setTimeout(() => {
          submitBtn.textContent = '\u2713 Secure My Spot';
          submitBtn.style.background = '';
        }, 2500);
      }
    });
  }
}

// ── Coming Soon / Feature Info Modal ───────
function initComingSoonModal() {
  const modal   = document.getElementById('comingSoonModal');
  const closeBtn = document.getElementById('comingSoonClose');
  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    _pushModal(closeModal);
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    _popModal(closeModal);
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  // Escape handled by centralized _modalStack (LOW-006 fix)

  // Social links trigger Coming Soon
  document.addEventListener('click', (e) => {
    const social = e.target.closest('[data-social]');
    if (social) {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    }
  });
}

// ── Active Nav Link Highlight ──────────────
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.primary-nav > a[data-scroll]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('data-scroll') === id
            ? 'var(--cyan)'
            : '';
        });
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => observer.observe(s));
}

// ── Smooth Hover on Value Cards ────────────
function initCardTilt() {
  document.querySelectorAll('.value-card, .agent-card, .resource-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── Magnetic Button Hover ─────────────────
function initMagneticButtons() {
  document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ── Initialize ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initParallax();
  initScrollReveal();
  initRippleEffect();
  initCounters();
  initMobileNav();
  initCleanNavigation();
  initWaitlistModal();
  initComingSoonModal();
  initActiveNavHighlight();
  initCardTilt();
  initMagneticButtons();

  console.log('%cBravo.Ai ✓ Initialized', 'color:#00e5ff;font-family:monospace;font-weight:700;');
});
