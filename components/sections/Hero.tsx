'use client';

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('T');
  const fullText = 'The Open Marketplace for AI Agents and Skills';

  useEffect(() => {
    let index = 1;
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
              <button className="btn-primary btn-lg">Explore Marketplace</button>
              <button className="btn-ghost btn-lg" data-action="open-waitlist">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Join Waitlist
              </button>
            </div>

            <div className="scroll-indicator">
              <svg className="scroll-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
