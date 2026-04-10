// Social platform constants
export const SOCIAL_PLATFORMS = {
  TWITTER: 'Twitter',
  GITHUB: 'GitHub',
  DISCORD: 'Discord',
} as const;

export type SocialPlatform = typeof SOCIAL_PLATFORMS[keyof typeof SOCIAL_PLATFORMS];

// Event type constants
export const EVENT_TYPES = {
  OPEN_WAITLIST: 'openWaitlistModal',
  OPEN_SOCIAL: 'openSocialPopup',
} as const;

/**
 * Initialize scroll reveal animations
 */
let revealObserver: IntersectionObserver | null = null;

export function initScrollReveal() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver?.observe(el));
}

/**
 * Initialize button click ripple effects with proper cleanup
 */
let rippleCleanup: (() => void) | null = null;

function initButtonInteractions() {
  // Remove existing listener if any
  if (rippleCleanup) {
    rippleCleanup();
  }

  const handleClick = (e: MouseEvent) => {
    const btn = (e.target as HTMLElement).closest('button');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
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

    setTimeout(() => ripple.remove(), 600);
  };

  document.addEventListener('click', handleClick);

  // Return cleanup function
  rippleCleanup = () => {
    document.removeEventListener('click', handleClick);
  };
}

/**
 * Handle "Join Waitlist" button clicks to open modal (using data-action attribute)
 */
let waitlistCleanup: (() => void) | null = null;

function initWaitlistButtonHandler() {
  // Remove existing listener if any
  if (waitlistCleanup) {
    waitlistCleanup();
  }

  const handleClick = (e: MouseEvent) => {
    const btn = (e.target as HTMLElement).closest('button[data-action="open-waitlist"]');
    if (!btn) return;

    e.preventDefault();
    window.dispatchEvent(new CustomEvent(EVENT_TYPES.OPEN_WAITLIST));
  };

  document.addEventListener('click', handleClick, true);

  // Return cleanup function
  waitlistCleanup = () => {
    document.removeEventListener('click', handleClick, true);
  };
}

/**
 * Initialize all interactions (scroll reveal, buttons, waitlist)
 */
export function initInteractions() {
  initScrollReveal();
  initButtonInteractions();
  initWaitlistButtonHandler();
}

// Export cleanup function for app unmount
export function cleanupInteractions() {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }
  if (rippleCleanup) {
    rippleCleanup();
    rippleCleanup = null;
  }
  if (waitlistCleanup) {
    waitlistCleanup();
    waitlistCleanup = null;
  }
}
