'use client';

import React from 'react';
import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="pricing" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.shell}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Early Access · Free</p>
            <h2 className={styles.title}>Join the AI Marketplace</h2>
            <p className={styles.desc}>
              Phase 1 is free for all users. Creators and users building the future of AI together.
            </p>
            <div className={styles.actions}>
              <button className={styles.btnPrimary}>Join Waitlist</button>
              <Link href="/creator-guide" className={styles.btnGhost}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
