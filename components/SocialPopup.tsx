'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function SocialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [socialName, setSocialName] = useState('');
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const clearCloseTimeout = () => {
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };

    const handleSocialClick = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      clearCloseTimeout();
      setSocialName(customEvent.detail);
      setIsVisible(true);
      closeTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
        closeTimeoutRef.current = null;
      }, 2500);
    };

    window.addEventListener('openSocialPopup', handleSocialClick as EventListener);
    return () => {
      clearCloseTimeout();
      window.removeEventListener('openSocialPopup', handleSocialClick as EventListener);
    };
  }, []);

  return isVisible ? (
    <div className="social-popup-overlay" onClick={() => setIsVisible(false)}>
      <div className="social-popup-content" onClick={(event) => event.stopPropagation()}>
        <div className="social-popup-text">
          <span className="social-popup-label">{socialName}</span>
          <span className="social-popup-message">Coming soon</span>
        </div>
      </div>
    </div>
  ) : null;
}
