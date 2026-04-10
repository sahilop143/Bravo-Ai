const fs = require('fs');
const path = require('path');

// 1. Header.tsx
let header = fs.readFileSync('components/Header.tsx', 'utf8');
if (!header.includes('import styles from')) {
  header = header.replace(`import { scrollToSection } from '@/lib/scrollToSection';`, `import { scrollToSection } from '@/lib/scrollToSection';\nimport styles from './Header.module.css';`);
  header = header.replace('className={`site-header ${isScrolled ? \'scrolled\' : \'\'}`}', 'className={`${styles.header} ${isScrolled ? styles.scrolled : \'\'}`}');
  header = header.replace('className="nav-shell"', 'className={styles.container}');
  header = header.replace('className="brand"', 'className={styles.brand}');
  header = header.replace('className="brand-text"', 'className={styles.brandText}');
  header = header.replace('className="brand-sub"', 'className={styles.brandSub}');
  header = header.replace('className="primary-nav"', 'className={styles.nav}');
  header = header.replace('className="header-actions"', 'className={styles.actions}');
  header = header.replace('className="btn-ghost"', 'className={styles.btnGhost}');
  header = header.replace('className="btn-primary"', 'className={styles.btnPrimary}');
  fs.writeFileSync('components/Header.tsx', header);
}

// 2. Footer.tsx
let footer = fs.readFileSync('components/Footer.tsx', 'utf8');
if (!footer.includes('import styles from')) {
  footer = footer.replace(`import SocialPopup from './SocialPopup';`, `import SocialPopup from './SocialPopup';\nimport styles from './Footer.module.css';`);
  footer = footer.replace('className="site-footer"', 'className={styles.footer}');
  footer = footer.replace('className="container"', 'className={styles.container}');
  footer = footer.replace('className="footer-content"', 'className={styles.content}');
  footer = footer.replace(/className="footer-section"/g, 'className={styles.section}');
  footer = footer.replace('className="brand"', 'className={styles.brand}');
  footer = footer.replace('className="brand-text"', 'className={styles.brandText}');
  footer = footer.replace('className="brand-sub"', 'className={styles.brandSub}');
  footer = footer.replace('className="footer-desc"', 'className={styles.desc}');
  footer = footer.replace('className="social-links"', 'className={styles.socialLinks}');
  footer = footer.replace(/className="btn-social"/g, 'className={styles.btnSocial}');
  footer = footer.replace(/className="footer-links"/g, 'className={styles.links}');
  footer = footer.replace('className="footer-bottom"', 'className={styles.bottom}');
  fs.writeFileSync('components/Footer.tsx', footer);
}

// 3. WaitlistModal.tsx
let waitlist = fs.readFileSync('components/WaitlistModal.tsx', 'utf8');
if (!waitlist.includes('import styles from')) {
  waitlist = waitlist.replace(`import React, { useEffect, useRef, useState } from 'react';`, `import React, { useEffect, useRef, useState } from 'react';\nimport styles from './WaitlistModal.module.css';`);
  waitlist = waitlist.replace('className={`waitlist-modal ${isOpen ? \'active\' : \'\'}`}', 'className={`${styles.backdrop} ${isOpen ? \'active\' : \'\'}`}');
  waitlist = waitlist.replace('className="waitlist-modal-content"', 'className={styles.modal}');
  waitlist = waitlist.replace('className="modal-close"', 'className={styles.close}');
  waitlist = waitlist.replace('<h2>Join the Waitlist</h2>', '<h2 className={styles.title}>Join the Waitlist</h2>');
  waitlist = waitlist.replace('<p>Be among the first to access Bravo.Ai marketplace</p>', '<p className={styles.desc}>Be among the first to access Bravo.Ai marketplace</p>');
  waitlist = waitlist.replace('className="waitlist-form"', 'className={styles.form}');
  waitlist = waitlist.replace(/className="form-group"/g, 'className={styles.formGroup}');
  waitlist = waitlist.replace('className="btn-primary btn-lg"', 'className={`${styles.submitBtn} btn-lg`}');
  waitlist = waitlist.replace('className="success-message show"', 'className={`${styles.successMessage} show`}');
  waitlist = waitlist.replace('className="success-icon"', 'className={styles.icon}');
  fs.writeFileSync('components/WaitlistModal.tsx', waitlist);
}

// 4. BackgroundAnimation.tsx
let bgAnim = fs.readFileSync('components/BackgroundAnimation.tsx', 'utf8');
if (!bgAnim.includes('import styles from')) {
  bgAnim = bgAnim.replace(`import React from 'react';`, `import React from 'react';\nimport styles from './BackgroundAnimation.module.css';`);
  bgAnim = bgAnim.replace('className="bg-animation"', 'className={styles.container}');
  bgAnim = bgAnim.replace('className="grid-overlay"', 'className={styles.gridOverlay}');
  bgAnim = bgAnim.replace('className="glow-orb orb-1"', 'className={`${styles.orb} ${styles.orb1}`}');
  bgAnim = bgAnim.replace('className="glow-orb orb-2"', 'className={`${styles.orb} ${styles.orb2}`}');
  bgAnim = bgAnim.replace('className="glow-orb orb-3"', 'className={`${styles.orb} ${styles.orb3}`}');
  bgAnim = bgAnim.replace('className="scan-line"', 'className={styles.scanLine}');
  fs.writeFileSync('components/BackgroundAnimation.tsx', bgAnim);
}

// 5. Hero.tsx
let hero = fs.readFileSync('components/sections/Hero.tsx', 'utf8');
if (!hero.includes('import styles from')) {
  hero = hero.replace(`import React, { useState, useEffect } from 'react';`, `import React, { useState, useEffect } from 'react';\nimport styles from './Hero.module.css';`);
  hero = hero.replace('className="hero"', 'className={styles.hero}');
  hero = hero.replace('className="container"', 'className={styles.container}');
  hero = hero.replace('className="hero-content"', 'className={styles.content}');
  hero = hero.replace('className="hero-badge"', 'className={styles.badge}');
  hero = hero.replace('className="badge-dot"', 'className={styles.badgeDot}');
  hero = hero.replace('className="hero-title"', 'className={styles.title}');
  hero = hero.replace('className="hero-lead"', 'className={styles.lead}');
  hero = hero.replace('className="hero-cta"', 'className={styles.cta}');
  hero = hero.replace('className="btn-primary btn-lg"', 'className={`${styles.btnPrimary} btn-lg`}');
  hero = hero.replace('className="btn-ghost btn-lg"', 'className={`${styles.btnGhost} btn-lg`}');
  fs.writeFileSync('components/sections/Hero.tsx', hero);
}

// 6. Showcase.tsx
let showcase = fs.readFileSync('components/sections/Showcase.tsx', 'utf8');
if (!showcase.includes('import styles from')) {
  showcase = showcase.replace(`import React from 'react';`, `import React from 'react';\nimport styles from './Showcase.module.css';`);
  showcase = showcase.replace('className="showcase"', 'className={styles.showcase}');
  showcase = showcase.replace('className="container"', 'className={styles.container}');
  showcase = showcase.replace('className="showcase-header"', 'className={styles.header}');
  showcase = showcase.replace('className="eyebrow"', 'className={styles.eyebrow}');
  showcase = showcase.replace('className="values-grid"', 'className={styles.grid}');
  showcase = showcase.replace(/className=\{`value-card reveal-delay-\$\{index \+ 1\}`\}/g, 'className={`${styles.card} reveal-delay-${index + 1}`}');
  showcase = showcase.replace('className="value-icon"', 'className={styles.icon}');
  fs.writeFileSync('components/sections/Showcase.tsx', showcase);
}

// 7. FeatureStrip.tsx
let featureStrip = fs.readFileSync('components/sections/FeatureStrip.tsx', 'utf8');
if (!featureStrip.includes('import styles from')) {
  featureStrip = featureStrip.replace(`import React from 'react';`, `import React from 'react';\nimport styles from './FeatureStrip.module.css';`);
  featureStrip = featureStrip.replace('className="feature-strip"', 'className={styles.strip}');
  featureStrip = featureStrip.replace('className="container"', 'className={styles.container}');
  featureStrip = featureStrip.replace('className="feature-strip-inner"', 'className={styles.inner}');
  featureStrip = featureStrip.replace('className="strip-item"', 'className={styles.item}');
  featureStrip = featureStrip.replace('className="strip-icon"', 'className={styles.icon}');
  featureStrip = featureStrip.replace('className="strip-text"', 'className={styles.text}');
  fs.writeFileSync('components/sections/FeatureStrip.tsx', featureStrip);
}

// 8. CTA.tsx
let cta = fs.readFileSync('components/sections/CTA.tsx', 'utf8');
if (!cta.includes('import styles from')) {
  cta = cta.replace(`import { scrollToSection } from '@/lib/scrollToSection';`, `import { scrollToSection } from '@/lib/scrollToSection';\nimport styles from './CTA.module.css';`);
  cta = cta.replace('className="section-cta"', 'className={styles.cta}');
  cta = cta.replace('className="container"', 'className={styles.container}');
  cta = cta.replace('className="cta-shell"', 'className={styles.shell}');
  cta = cta.replace('className="cta-content"', 'className={styles.content}');
  cta = cta.replace('className="cta-eyebrow"', 'className={styles.eyebrow}');
  cta = cta.replace('className="cta-title"', 'className={styles.title}');
  cta = cta.replace('className="cta-desc"', 'className={styles.desc}');
  cta = cta.replace('className="cta-actions"', 'className={styles.actions}');
  cta = cta.replace('className="btn-primary btn-lg"', 'className={`${styles.btnPrimary} btn-lg`}');
  cta = cta.replace('className="btn-ghost btn-lg"', 'className={`${styles.btnGhost} btn-lg`}');
  fs.writeFileSync('components/sections/CTA.tsx', cta);
}

console.log('Components updated.');
