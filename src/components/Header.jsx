import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-text">Bravo<span className="brand-sub">.Ai</span></span>
        </a>

        <nav className="primary-nav">
          <a href="#agents" onClick={closeMenu}>Agents</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
        </nav>

        <div className="desktop-actions">
          <button className="btn-ghost" type="button">Sign In</button>
          <button className="btn-primary" type="button" data-action="open-waitlist">Get Started</button>
        </div>

        <button
          className={`nav-hamburger${menuOpen ? ' active' : ''}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-nav${menuOpen ? ' active' : ''}`} aria-hidden={!menuOpen}>
        <a href="#agents" className="mobile-nav-link" onClick={closeMenu}>Agents</a>
        <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a>
        <a href="#pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing</a>
        <div className="mobile-nav-actions">
          <button className="btn-ghost btn-lg" type="button" onClick={() => { window.dispatchEvent(new CustomEvent('openSocialPopup')); closeMenu(); }}>
            Join Waitlist
          </button>
          <button className="btn-primary btn-lg" type="button" data-action="open-waitlist" onClick={closeMenu}>
            Get Started →
          </button>
        </div>
      </div>
    </header>
  );
}
