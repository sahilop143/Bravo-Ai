'use client';

import React from 'react';

export default function FeatureStrip() {
  const features = [
    {
      title: 'Instant Deploy',
      description: 'Publish any AI agent in minutes with zero friction',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
        </svg>
      ),
    },
    {
      title: 'Composable Skills',
      description: 'Stack and chain skills to build complex pipelines',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
    },
    {
      title: 'Community Vetted',
      description: 'Ratings, reviews, and usage data you can trust',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="feature-strip">
      <div className="container">
        <div className="feature-strip-inner">
          {features.map((feature, index) => (
            <div key={index} className="strip-item">
              <div className="strip-icon">{feature.icon}</div>
              <div className="strip-text">
                <strong>{feature.title}</strong>
                <span>{feature.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
