'use client';

import React, { useState, useEffect } from 'react';

export default function SocialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [socialName, setSocialName] = useState('');

  useEffect(() => {
    const handleSocialClick = (e: CustomEvent) => {
      e.preventDefault();
      setSocialName(e.detail);
      setIsVisible(true);

      // Auto-close after 2.5 seconds
      setTimeout(() => setIsVisible(false), 2500);
    };

    window.addEventListener('openSocialPopup', handleSocialClick as EventListener);
    return () => window.removeEventListener('openSocialPopup', handleSocialClick as EventListener);
  }, []);

  return isVisible ? (
    <div className="social-popup-overlay" onClick={() => setIsVisible(false)}>
      <div className="social-popup-content">
        <div className="social-popup-text">
          <span className="social-popup-label">{socialName}</span>
          <span className="social-popup-message">Coming soon</span>
        </div>
      </div>
    </div>
  ) : null;
}
