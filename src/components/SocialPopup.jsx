import React, { useEffect, useState, useCallback } from 'react';

/**
 * Map of social platform keys to display names
 */
const SOCIAL_NAME = {
  twitter: 'X',
  github: 'GitHub',
  discord: 'Discord',
};

/**
 * SocialPopup component - Displays coming soon modal for social features
 */
export default function SocialPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('social');

  /**
   * Handle opening the popup
   * @param {CustomEvent} event
   */
  const handleOpen = useCallback((event) => {
    setSource(SOCIAL_NAME[event?.detail?.source] ?? 'Social');
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  /**
   * Close the popup
   */
  const closePopup = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    window.addEventListener('openSocialPopup', handleOpen);

    return () => {
      window.removeEventListener('openSocialPopup', handleOpen);
      document.body.style.overflow = '';
    };
  }, [handleOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closePopup]);

  if (!isOpen) return null;

  return (
    <div
      className="waitlist-modal active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="social-popup-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div className="waitlist-modal-content">
        <button
          className="modal-close"
          type="button"
          onClick={closePopup}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="modal-header">
          <h2 id="social-popup-heading">Building Something Great</h2>
          <p>Stay tuned for updates and new social features.</p>
        </div>
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: '20px',
            }}
          >
            We&apos;re polishing the {source} experience right now. Follow us for launch announcements and the next wave of AI marketplace updates.
          </p>
          <button
            className="btn-primary btn-lg"
            type="button"
            onClick={closePopup}
            style={{ width: '100%' }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
