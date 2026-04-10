'use client';

import React from 'react';

export default function BackgroundAnimation() {
  return (
    <div className="bg-animation">
      <div className="grid-overlay"></div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>
      <div className="scan-line"></div>
      {/* Grain texture for premium depth */}
      <svg className="grain-overlay" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}