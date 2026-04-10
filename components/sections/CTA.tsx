'use client';

import React from 'react';
import { scrollToSection } from '@/lib/scrollToSection';

export default function CTA() {
  return (
    <section id="pricing" className="section-cta">
      <div className="container">
        <div className="cta-shell">
          <div className="cta-border-glow" aria-hidden="true"></div>
          <div className="cta-content">
            <p className="cta-eyebrow">Early Access · Free</p>
            <h2 className="cta-title">Join the AI Marketplace</h2>
            <p className="cta-desc">
              Phase 1 is free for all users. Creators and users building the future of AI together.
            </p>
            <div className="cta-actions">
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
