'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { scrollToSection } from '@/lib/scrollToSection';
import styles from './Header.module.css';

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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandText}>
            Bravo<span className={styles.brandSub}>.Ai</span>
          </span>
        </Link>
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('agents')} className="nav-link">Agents</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
        </nav>
        <div className={styles.actions}>
          <button className="btn-ghost">Sign In</button>
          <button className="btn-primary" data-action="open-waitlist">Join Waitlist</button>
        </div>
      </div>
    </header>
  );
}
