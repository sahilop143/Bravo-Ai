const postcss = require('postcss');
const fs = require('fs');

const componentClasses = [
  '.bg-animation', '.grid-overlay', '.glow-orb', '.scan-line', '.grain-overlay',
  '.site-header', '.nav-shell', '.primary-nav', '.header-actions', '.nav-link', '.brand', '.brand-text', '.brand-sub',
  '.site-footer', '.footer-content', '.footer-section', '.footer-desc', '.social-links', '.btn-social', '.footer-links', '.footer-bottom', '.footer-divider', '.footer-link-btn', '.footer-link-text',
  '.waitlist-modal', '.modal-close', '.modal-header', '.modal-grid-bg', '.waitlist-form', '.form-group', '.form-label', '.form-input', '.success-message', '.success-icon', '.modal-corner-tl', '.modal-corner-br', '.error-message', '.form-note',
  '.hero', '.hero-container', '.hero-content', '.hero-badge', '.hero-title', '.hero-lead', '.hero-cta', '.scroll-indicator', '.scroll-arrow', '.badge-dot', '.hero-stats',
  '.showcase', '.showcase-header', '.values-grid', '.value-card', '.value-icon', '.eyebrow', '.card-shimmer',
  '.feature-strip', '.feature-strip-inner', '.strip-item', '.strip-icon', '.strip-text',
  '.section-cta', '.cta-shell', '.cta-content', '.cta-eyebrow', '.cta-title', '.cta-desc', '.cta-actions', '.cta-border-glow'
];

const cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

const plugin = postcss.plugin('clean-globals', () => {
  return (root) => {
    root.walkRules(rule => {
      // Keep only selectors that DO NOT contain any of the component classes
      rule.selectors = rule.selectors.filter(selector => {
        // If the selector contains any component class, we filter it out (return false)
        const containsComponentClass = componentClasses.some(cls => {
          // Check if the selector has the class exact match (e.g. .hero, but not .heroic)
          const regex = new RegExp(`\\${cls}(?![\\w-])`);
          return regex.test(selector);
        });
        return !containsComponentClass;
      });

      // If the rule has no selectors left, remove the rule entirely
      if (rule.selectors.length === 0) {
        rule.remove();
      }
    });
  };
});

postcss([plugin])
  .process(css, { from: cssPath, to: cssPath })
  .then(result => {
    fs.writeFileSync(cssPath, result.css);
    console.log('globals.css cleaned successfully.');
  });
