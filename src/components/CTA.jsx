import React from 'react';

export default function CTA() {
  return (
    <section id="pricing" className="section-cta">
      <div className="container">
        <div className="cta-shell reveal">
          <div className="cta-content">
            <p className="cta-eyebrow">Early Access · Free</p>
            <h2 className="cta-title">Join the AI Marketplace</h2>
            <p className="cta-desc">
              Phase 1 is free for all users. Creators and users building the future of AI together.
            </p>
            <div className="cta-actions">
              <button className="btn-primary btn-lg" type="button" data-action="open-waitlist">Join Waitlist</button>
              <a href="creator-guide.html" className="btn-ghost btn-lg">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
