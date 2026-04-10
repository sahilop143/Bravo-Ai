'use client';

import React from 'react';
import styles from './Showcase.module.css';

export default function Showcase() {
  const values = [
    {
      title: 'Open Platform',
      description: 'No gatekeeping. Transparent review process. Anyone can publish AI agents and skills. Community-driven quality standards.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      title: 'Creator First',
      description: 'Direct audience connection. Full control over your AI tools. Simple revenue sharing model.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4"></circle>
          <path d="M6 20c0-3 2-4 6-4s6 1 6 4"></path>
        </svg>
      ),
    },
    {
      title: 'User Trust',
      description: 'Verified creators. Quality assurance. Transparent metrics. Safe, reliable AI tools you can depend on.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section id="agents" className={styles.showcase}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Core Mission</p>
          <h2>Built on Trust, Powered by Community</h2>
        </div>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
