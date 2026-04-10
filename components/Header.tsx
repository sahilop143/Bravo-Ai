'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
          <a href="#agents">Agents</a>
          <a href="#skills">Skills</a>
          <a href="#pricing">Pricing</a>
          <div className={styles.actions}>
            <button className={styles.btnGhost}>Sign In</button>
            <button className={styles.btnPrimary}>Get Started</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
