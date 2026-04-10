'use client';

import React, { useState, useEffect, useRef } from 'react';

function useCountUp(target: number, suffix: string = '', duration: number = 2000) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return { value, ref, suffix };
}

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('T');
  const [typingDone, setTypingDone] = useState(false);
  const fullText = 'The Open Marketplace for AI Agents and Skills';

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const stat1 = useCountUp(10, 'K+');
  const stat2 = useCountUp(500, '+');
  const stat3 = useCountUp(99, '.9%');

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Building the Future of AI</span>
            </div>

            <h1 className="hero-title">{displayedText}<span className={`hero-cursor ${typingDone ? 'blink' : ''}`}>|</span></h1>

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

            <div className="hero-stats">
              <div className="stat" ref={stat1.ref}>
                <span className="stat-value">{stat1.value}{stat1.suffix}</span>
                <span className="stat-label">AI Agents</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat" ref={stat2.ref}>
                <span className="stat-value">{stat2.value}{stat2.suffix}</span>
                <span className="stat-label">Creators</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat" ref={stat3.ref}>
                <span className="stat-value">{stat3.value}{stat3.suffix}</span>
                <span className="stat-label">Uptime</span>
              </div>
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