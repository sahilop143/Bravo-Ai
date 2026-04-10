'use client';

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'The Open Marketplace for AI Agents and Skills';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Building the Future of AI</span>
          </div>

          <h1 className={styles.title}>{displayedText}</h1>

          <p className={styles.lead}>
            Where creators publish and users discover trusted AI tools. Open platform. Creator-first.
            Fair ecosystem for the AI-powered future.
          </p>

          <div className={styles.cta}>
            <button className={styles.btnPrimary}>Explore Marketplace</button>
            <button className={styles.btnGhost}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
