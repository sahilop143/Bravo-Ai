/**
 * Smoothly scroll to a section by ID without showing hash in URL
 * If on a different page, navigate home and restore the target scroll on load
 */
const PENDING_SCROLL_SECTION_KEY = 'bravo-ai:pending-scroll-section';

export const consumePendingScrollSection = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const sectionId = window.sessionStorage.getItem(PENDING_SCROLL_SECTION_KEY);

    if (!sectionId) {
      return null;
    }

    window.sessionStorage.removeItem(PENDING_SCROLL_SECTION_KEY);
    return sectionId;
  } catch {
    return null;
  }
};

export const scrollToSection = (sectionId: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  if (window.location.pathname === '/') {
    return;
  }

  try {
    window.sessionStorage.setItem(PENDING_SCROLL_SECTION_KEY, sectionId);
  } catch {
    // Ignore storage failures and fall back to the home navigation only.
  }

  window.location.replace('/');
};

