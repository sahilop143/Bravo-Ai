'use client';

import React from 'react';
import { scrollToSection } from '@/lib/scrollToSection';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="pricing" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.shell}>
          <div className="cta-border-glow" aria-hidden="true"></div>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Early Access &middot; Free</p>
            <h2 className={styles.title}>Join the AI Marketplace</h2>
            <p className={styles.desc}>
              Phase 1 is free for all users. Creators and users building the future of AI together.
            </p>
            <div className={styles.actions}>
              <button className="btn-primary btn-lg" data-action="open-waitlist">Join Waitlist</button>
              <button onClick={() => scrollToSection('agents')} className="btn-ghost btn-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
