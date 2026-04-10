'use client';

import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Browse thousands of AI agents and skills built by top creators worldwide.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Deploy',
      description: 'One-click integration into your workflow. No complex setup required.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Scale',
      description: 'Monitor performance, iterate fast, and scale your AI operations effortlessly.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="showcase-header">
          <p className="eyebrow">How It Works</p>
          <h2>Three Steps to AI Superpowers</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className={`step-card reveal-delay-${index + 1}`}>
              <div className="card-shimmer" aria-hidden="true"></div>
              <div className="step-number-badge">{step.number}</div>
              <div className="step-icon-wrap">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
