'use client';

import React from 'react';
import styles from './BackgroundAnimation.module.css';

export default function BackgroundAnimation() {
  return (
    <div className={styles.container}>
      <div className={styles.gridOverlay}></div>
      <div className={`${styles.glowOrb} ${styles.orb1}`}></div>
      <div className={`${styles.glowOrb} ${styles.orb2}`}></div>
      <div className={`${styles.glowOrb} ${styles.orb3}`}></div>
      <div className={styles.scanLine}></div>
      {/* Grain texture for premium depth */}
      <svg className="grain-overlay" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /> 
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
