import React from 'react';

/**
 * Hero section component - Main landing content
 */
export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="container hero-container">
        <div className="hero-content">

          <div className="hero-badge" role="status">
            <span className="badge-dot" aria-hidden="true"></span>
            <span>Building the Future of AI</span>
          </div>

          <h1 className="hero-title">
            The Open Marketplace<br />
            <span className="highlight">for AI Agents and Skills</span>
          </h1>

          <p className="hero-lead">
            Where creators publish and users discover trusted AI tools. Open platform. Creator-first. Fair ecosystem for the AI-powered future.
          </p>

          <div className="hero-cta">
            <button className="btn-primary btn-lg" type="button" data-action="open-waitlist">
              Explore Marketplace
            </button>
            <button className="btn-ghost btn-lg" type="button" data-action="open-waitlist">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
