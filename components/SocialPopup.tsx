'use client';

import React, { useState, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';

// Allowed social media platforms (whitelist)
const ALLOWED_SOCIAL_NAMES = ['Twitter', 'GitHub', 'Discord'];

export default function SocialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [socialName, setSocialName] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleSocialClick = (e: CustomEvent) => {
      e.preventDefault();
      const name = e.detail;

      // Validate against whitelist
      if (!ALLOWED_SOCIAL_NAMES.includes(name)) {
        console.warn(`Invalid social name: ${name}`);
        return;
      }

      // Sanitize input (defense in depth)
      const sanitizedName = DOMPurify.sanitize(name, { 
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
      });

      setSocialName(sanitizedName);
      setIsVisible(true);

      // Clear any existing timeout before setting a new one
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Auto-close after 2.5 seconds
      timeoutRef.current = setTimeout(() => setIsVisible(false), 2500);
    };

    window.addEventListener('openSocialPopup', handleSocialClick as EventListener);
    return () => {
      // Clear timeout and remove listener on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('openSocialPopup', handleSocialClick as EventListener);
    };
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
