import React from 'react';

/**
 * BackgroundAnimation component - Animated background effects
 * Rendered behind all content with z-index: 0
 */
export default function BackgroundAnimation() {
  return (
    <div className="bg-animation" aria-hidden="true">
      <div className="grid-overlay"></div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
    </div>
  );
}
