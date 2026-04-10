'use client';

import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="pricing" className="section-cta">
      <div className="container">
        <div className="cta-shell">
          <div className="cta-content">
            <p className="cta-eyebrow">Early Access · Free</p>
            <h2 className="cta-title">Join the AI Marketplace</h2>
            <p className="cta-desc">
              Phase 1 is free for all users. Creators and users building the future of AI together.
            </p>
            <div className="cta-actions">
              <button className="btn-primary btn-lg" data-action="open-waitlist">Join Waitlist</button>
              <Link href="/creator-guide" className="btn-ghost btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
