/**
 * Smoothly scroll to a section by ID without showing hash in URL
 * If on a different page, navigate home and restore the target scroll on load
 */
export const scrollToSection = (sectionId: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  // If target element not found and not on home page, navigate home
  if (window.location.pathname !== '/') {
    window.location.replace('/');
  }
};

