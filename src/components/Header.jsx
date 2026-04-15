import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Header component with navigation and mobile menu
 * @param {Object} props
 * @param {boolean} props.scrolled - Whether the page has been scrolled
 * @param {Object} props.mobileMenu - Mobile menu state and handlers
 */
export default function Header({ scrolled, mobileMenu }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const homeHref = isHome ? '#home' : '/';
  const buildSectionHref = (sectionId) => (isHome ? `#${sectionId}` : `/#${sectionId}`);

  const headerClass = `site-header${scrolled ? ' scrolled' : ''}`;
  const mobileNavClass = `mobile-nav${mobileMenu.isOpen ? ' active' : ''}`;

  return (
    <header className={headerClass}>
      <div className="container nav-shell">
        <a href={homeHref} className="brand" onClick={mobileMenu.close}>
          <span className="brand-text">Bravo<span className="brand-sub">.Ai</span></span>
        </a>

        <nav className="primary-nav" aria-label="Main navigation">
          <a href={buildSectionHref('agents')} onClick={mobileMenu.close}>Agents</a>
          <a href={buildSectionHref('skills')} onClick={mobileMenu.close}>Skills</a>
          <a href={buildSectionHref('pricing')} onClick={mobileMenu.close}>Pricing</a>
        </nav>

        <div className="desktop-actions">
          <button className="btn-ghost" type="button">Sign In</button>
          <button className="btn-primary" type="button" data-action="open-waitlist">
            Get Started
          </button>
        </div>

        <button
          className={`nav-hamburger${mobileMenu.isOpen ? ' active' : ''}`}
          type="button"
          aria-label={mobileMenu.isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenu.isOpen}
          aria-controls="mobile-nav"
          onClick={mobileMenu.toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={mobileNavClass}
        aria-hidden={!mobileMenu.isOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <a href={buildSectionHref('agents')} className="mobile-nav-link" onClick={mobileMenu.close}>Agents</a>
        <a href={buildSectionHref('skills')} className="mobile-nav-link" onClick={mobileMenu.close}>Skills</a>
        <a href={buildSectionHref('pricing')} className="mobile-nav-link" onClick={mobileMenu.close}>Pricing</a>
        <div className="mobile-nav-actions">
          <button className="btn-ghost btn-lg" type="button" data-action="open-waitlist" onClick={mobileMenu.close}>
            Join Waitlist
          </button>
          <button className="btn-primary btn-lg" type="button" data-action="open-waitlist" onClick={mobileMenu.close}>
            Get Started →
          </button>
        </div>
      </div>
    </header>
  );
}
