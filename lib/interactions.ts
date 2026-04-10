export function initInteractions() {
  initScrollReveal();
  initButtonInteractions();
  initWaitlistButtonHandler();
}

/**
 * Initialize scroll reveal animations
 */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/**
 * Initialize button click effects
 */
function initButtonInteractions() {
  document.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('button');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = (e as MouseEvent).clientX - rect.left;
    const y = (e as MouseEvent).clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      background: rgba(255, 255, 255, 0.18);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.5s linear;
      pointer-events: none;
      left: ${x}px;
      top: ${y}px;
      width: 80px;
      height: 80px;
      margin-left: -40px;
      margin-top: -40px;
    `;

    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 550);
  });
}

/**
 * Handle "Join Waitlist" button clicks to open modal (using data-action attribute)
 */
function initWaitlistButtonHandler() {
  document.addEventListener(
    'click',
    (e) => {
      const btn = (e.target as HTMLElement).closest('button[data-action="open-waitlist"]');
      if (!btn) return;

      e.preventDefault();
      // Broadcast a single modal-open event and avoid recursive click chains.
      window.dispatchEvent(new CustomEvent('openWaitlistModal'));
    },
    true
  );
}
