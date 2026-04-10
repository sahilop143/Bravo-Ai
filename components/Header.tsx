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
        <Link href="/" className="brand">
          <span className="brand-text">
            Bravo<span className="brand-sub">.Ai</span>
          </span>
        </Link>
        <nav className="primary-nav">
          <Link href="/#agents">Agents</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#pricing">Pricing</Link>
        </nav>
        <div className="header-actions">
          <button className="btn-ghost">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
}
