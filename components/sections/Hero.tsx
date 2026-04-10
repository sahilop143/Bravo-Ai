'use client';

import React, { useState, useEffect } from 'react';

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
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Building the Future of AI</span>
            </div>

            <h1 className="hero-title">{displayedText}</h1>

            <p className="hero-lead">
              Where creators publish and users discover trusted AI tools. Open platform. Creator-first.
              Fair ecosystem for the AI-powered future.
            </p>

            <div className="hero-cta">
              <button 
                className="btn-primary btn-lg"
                aria-label="Explore the AI marketplace"
              >
                Explore Marketplace
              </button>
              <button 
                className="btn-ghost btn-lg" 
                data-action="open-waitlist"
                aria-label="Join our waitlist to get early access"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Join Waitlist
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">10k+</div>
                <div className="stat-label">AI Agents</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-value">50k+</div>
                <div className="stat-label">Skills</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-value">100k+</div>
                <div className="stat-label">Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
