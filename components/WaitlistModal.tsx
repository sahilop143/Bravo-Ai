'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './WaitlistModal.module.css';

const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^[a-zA-Z\s'-]{2,50}$/,
};

const validateEmail = (email: string): boolean => {
  return VALIDATION_PATTERNS.email.test(email) && email.length <= 100;
};

const validateName = (name: string): boolean => {
  return VALIDATION_PATTERNS.name.test(name) && name.length >= 2 && name.length <= 50;
};

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const autoCloseTimeoutRef = useRef<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });

  const handleOpenModal = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    if (autoCloseTimeoutRef.current !== null) {
      window.clearTimeout(autoCloseTimeoutRef.current);
      autoCloseTimeoutRef.current = null;
    }

    setIsOpen(false);
    setShowSuccess(false);
    setFormData({ name: '', email: '', interest: '' });
    setErrors({});
  }, []);

  useEffect(() => {
    window.addEventListener('openWaitlistModal', handleOpenModal);

    return () => {
      if (autoCloseTimeoutRef.current !== null) {
        window.clearTimeout(autoCloseTimeoutRef.current);
      }

      window.removeEventListener('openWaitlistModal', handleOpenModal);
    };
  }, [handleOpenModal]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    closeModal();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Name must be 2-50 characters, letters only';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your primary interest';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowSuccess(true);

    if (autoCloseTimeoutRef.current !== null) {
      window.clearTimeout(autoCloseTimeoutRef.current);
    }

    autoCloseTimeoutRef.current = window.setTimeout(() => {
      closeModal();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.close}
          aria-label="Close waitlist form"
          onClick={handleButtonClick}
        >
          &times;
        </button>

        <div className="modal-corner-tl"></div>
        <div className="modal-corner-br"></div>

        {!showSuccess ? (
          <>
            <div className="modal-header">
              <h2 className={styles.title}>Join the Waitlist</h2>
              <p className={styles.desc}>Be among the first to access Bravo.Ai marketplace</p>
            </div>

            <div className="modal-grid-bg"></div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  maxLength={50}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <p id="name-error" className="error-message">{errors.name}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  maxLength={100}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="error-message">{errors.email}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="interest" className="form-label">Primary Interest</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`form-input ${errors.interest ? 'error' : ''}`}
                  required
                  aria-invalid={!!errors.interest}
                  aria-describedby={errors.interest ? 'interest-error' : undefined}
                >
                  <option value="">Select an option</option>
                  <option value="creator">I want to publish agents</option>
                  <option value="user">I want to discover agents</option>
                  <option value="both">Both</option>
                </select>
                {errors.interest && <p id="interest-error" className="error-message">{errors.interest}</p>}
              </div>

              <button type="submit" className="btn-primary btn-lg">
                Join Waitlist
              </button>
            </form>

            <p className="form-note">We respect your privacy. Unsubscribe at any time.</p>
          </>
        ) : (
          <div className={`${styles.successMessage} show`}>
            <div className={styles.icon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3>Welcome aboard!</h3>
            <p>Check your email for updates</p>
          </div>
        )}
      </div>
    </div>
  );
}
