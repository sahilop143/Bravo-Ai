let cleanupFns = [];

function registerCleanup(fn) {
  cleanupFns.push(fn);
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

  const html = title.innerHTML;
  const lines = html.split('<br>');

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

  const line1 = lines[0].replace(/<[^>]+>/g, '');
  const line2 = lines[1].replace(/<[^>]+>/g, '');
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
        const match = raw.match(/^(\d+)(\D*)$/);
        if (!match) return;

        const target = parseInt(match[1], 10);
        const suffix = match[2];
        let current = 0;
        const duration = 1200;
        const step = duration / target;
        const increment = Math.max(1, Math.ceil(target / 60));

        const tick = () => {
          current = Math.min(current + increment, target);
          el.textContent = `${current}${suffix}`;
          if (current < target) {
            window.setTimeout(tick, step);
          }
        };

        window.setTimeout(tick, 300);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observer.observe(stat));
  registerCleanup(() => observer.disconnect());
}

function initCleanNavigation() {
  const handleClick = (event) => {
    const element = event.target.closest('a[href]');
    if (!element) return;

    const href = element.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.replace('#', '');
      const targetEl = document.getElementById(targetId);
      window.history.replaceState({}, '', '/');
      if (targetEl) {
        window.setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  };

  document.addEventListener('click', handleClick, true);
  registerCleanup(() => document.removeEventListener('click', handleClick, true));
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

export function initInteractions() {
  cleanupInteractions();
  initHeaderScroll();
  initParallax();
  initScrollReveal();
  initRippleEffect();
  initTypingEffect();
  initCounters();
  initCleanNavigation();
  initWaitlistButtonHandler();
}

export function cleanupInteractions() {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
}
