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
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-shell">
        <div className="brand">
          <span className="brand-text">
            Bravo<span className="brand-sub">.Ai</span>
          </span>
        </div>
        <nav className="primary-nav">
          <a href="#agents">Agents</a>
          <a href="#skills">Skills</a>
          <a href="#pricing">Pricing</a>
          <div className="header-actions">
            <button className="btn-ghost">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
