'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Bravo.Ai - Home">
          <span className="brand-text">
            Bravo<span className="brand-sub">.Ai</span>
          </span>
        </Link>
        <nav className="primary-nav" role="navigation" aria-label="Main navigation">
          <a href="#agents">Agents</a>
          <a href="#skills">Skills</a>
          <a href="#pricing">Pricing</a>
          <div className="header-actions">
            <button 
              className="btn-ghost"
              aria-label="Sign in to your account"
            >
              Sign In
            </button>
            <button 
              className="btn-primary"
              aria-label="Get started with Bravo.Ai"
            >
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
