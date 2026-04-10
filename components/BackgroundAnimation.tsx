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
    </div>
  );
}
