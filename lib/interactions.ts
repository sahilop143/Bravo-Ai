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
 * Initialize all interactions (waitlist button handler)
 */
export function initInteractions() {
  initWaitlistButtonHandler();
}

// Export cleanup function for app unmount
export function cleanupInteractions() {
  if (waitlistCleanup) {
    waitlistCleanup();
    waitlistCleanup = null;
  }
}
