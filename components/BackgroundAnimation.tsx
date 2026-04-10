'use client';

import React from 'react';
import styles from './BackgroundAnimation.module.css';

export default function BackgroundAnimation() {
  return (
    <div className={styles.container}>
      <div className={styles.gridOverlay}></div>
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>
      <div className={`${styles.orb} ${styles.orb3}`}></div>
      <div className={styles.scanLine}></div>
    </div>
  );
}
