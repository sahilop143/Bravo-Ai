/**
 * Smoothly scroll to a section by ID without showing hash in URL
 * If on a different page, navigate to home first then scroll
 */
export const scrollToSection = (sectionId: string) => {
  const scrollToElement = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Check if the target section exists on current page
  const targetExists = document.getElementById(sectionId);
  
  if (targetExists) {
    // We're on the same page with the section, scroll directly
    scrollToElement();
  } else {
    // Section doesn't exist on current page, navigate to home first
    // Use replace so no extra history entry is created
    window.location.replace('/');
    
    // After navigation completes, scroll to section
    // This will work because home page has all sections
    setTimeout(() => {
      scrollToElement();
    }, 100);
  }
};

