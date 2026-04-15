/**
 * Interaction utilities for managing modals and UI behaviors
 */

let cleanupFns = [];

function registerCleanup(fn) {
  cleanupFns.push(fn);
}

/**
 * Centralized modal stack for managing multiple modals
 * Ensures Escape key closes only the topmost modal
 */
const modalStack = [];

/**
 * Push a close function onto the modal stack
 * @param {Function} closeFn - Function to close the modal
 */
export function pushModal(closeFn) {
  modalStack.push(closeFn);
}

/**
 * Pop a close function from the modal stack
 * @param {Function} closeFn - Function to close the modal
 */
export function popModal(closeFn) {
  const idx = modalStack.indexOf(closeFn);
  if (idx !== -1) modalStack.splice(idx, 1);
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  registerCleanup(() => window.removeEventListener('scroll', handleScroll));
}

function initParallax() {
  const orbs = document.querySelectorAll('.glow-orb');
  if (!orbs.length) return;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    orbs.forEach((orb, index) => {
      const speed = 0.08 + index * 0.04;
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  registerCleanup(() => window.removeEventListener('scroll', handleScroll));
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => observer.observe(el));
  registerCleanup(() => observer.disconnect());
}

function initRippleEffect() {
  const handleClick = (event) => {
    const btn = event.target.closest('.btn-primary, .btn-ghost');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const ripple = document.createElement('span');

    ripple.style.cssText = `
      position: absolute;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.55s linear;
      pointer-events: none;
      left: ${x}px;
      top: ${y}px;
      width: 100px;
      height: 100px;
      margin-left: -50px;
      margin-top: -50px;
    `;

    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);

    window.setTimeout(() => ripple.remove(), 600);
  };

  document.addEventListener('click', handleClick);
  registerCleanup(() => document.removeEventListener('click', handleClick));
}

function initTypingEffect() {
  const title = document.querySelector('.hero-title');
  if (!title) return;

  const rawHtml = title.innerHTML;
  const normalizedHtml = rawHtml.replace(/<br\s*\/?>/gi, '\n');
  const lines = normalizedHtml.split('\n').map((line) => line.replace(/<[^>]+>/g, '').trim()).filter(Boolean);

  if (lines.length < 2) {
    const text = title.textContent || '';
    title.textContent = '';
    title.style.paddingRight = '6px';

    let i = 0;
    const type = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i++);
        window.setTimeout(type, 28);
      } else {
        title.style.paddingRight = '0';
      }
    };

    window.setTimeout(type, 500);
    return;
  }

  const line1 = lines[0];
  const line2 = lines[1];
  title.innerHTML = '';

  const span1 = document.createElement('span');
  const br = document.createElement('br');
  const span2 = document.createElement('span');

  title.appendChild(span1);
  title.appendChild(br);
  title.appendChild(span2);

  let i = 0;

  const typeAll = (text, element, callback) => {
    if (i < text.length) {
      element.textContent += text.charAt(i++);
      window.setTimeout(() => typeAll(text, element, callback), 28);
    } else {
      i = 0;
      if (callback) {
        window.setTimeout(callback, 60);
      }
    }
  };

  window.setTimeout(() => {
    typeAll(line1, span1, () => {
      typeAll(line2, span2, null);
    });
  }, 400);
}

function initCounters() {
  const stats = document.querySelectorAll('.stat-value');
  if (!stats.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const raw = el.textContent?.trim() || '';
        const target = parseInt(raw.replace(/\D/g, ''), 10);
        if (isNaN(target)) return;

        let current = 0;
        const duration = 2000;
        const step = target / (duration / 16);

        const counter = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = `${target}+`;
            clearInterval(counter);
            observer.unobserve(el);
          } else {
            el.textContent = `${Math.floor(current)}+`;
          }
        }, 16);
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observer.observe(stat));
  registerCleanup(() => observer.disconnect());
}

function initCleanNavigation() {
  const navLinks = document.querySelectorAll('.primary-nav a, .mobile-nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, '', href);
        }
      }
    });
  });
}

function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.primary-nav a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--cyan)' : '';
          });
        }
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
  registerCleanup(() => observer.disconnect());
}

function initWaitlistButtonHandler() {
  const handleClick = (event) => {
    const button = event.target.closest('[data-action="open-waitlist"]');
    if (!button) return;

    event.preventDefault();
    window.dispatchEvent(new CustomEvent('openWaitlistModal'));
  };

  document.addEventListener('click', handleClick);
  registerCleanup(() => document.removeEventListener('click', handleClick));
}

/**
 * Initialize global interaction handlers
 */
export function initInteractions() {
  cleanupInteractions();
  initHeaderScroll();
  initParallax();
  initScrollReveal();
  initRippleEffect();
  initTypingEffect();
  initCounters();
  initCleanNavigation();
  initActiveNavHighlight();
  initWaitlistButtonHandler();

  // Centralized Escape key handler for modals
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && modalStack.length) {
      modalStack[modalStack.length - 1]();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  registerCleanup(() => document.removeEventListener('keydown', handleKeyDown));
}

/**
 * Cleanup global interaction handlers
 */
export function cleanupInteractions() {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
  modalStack.length = 0;
}
