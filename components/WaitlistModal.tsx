'use client';

import React, { useEffect, useState } from 'react';

// Validation patterns
const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^[a-zA-Z\s'-]{2,50}$/,
};

// Validation functions
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });

  const handleOpenModal = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setIsOpen(false);
    setShowSuccess(false);
    setFormData({ name: '', email: '', interest: '' });
    setErrors({});
  }, []);

  React.useEffect(() => {
    window.addEventListener('openWaitlistModal', handleOpenModal);
    return () => {
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
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => { const newErrors = { ...prev }; delete newErrors[name]; return newErrors; });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Name must be 2-50 characters, letters only';
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate interest
    if (!formData.interest) {
      newErrors.interest = 'Please select your primary interest';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // All validations passed
    setShowSuccess(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  return (
    <>
      {/* Modal */}
      <div className={`waitlist-modal ${isOpen ? 'active' : ''}`} onClick={handleBackdropClick}>
        <div className="waitlist-modal-content" onClick={e => e.stopPropagation()}>
          <button type="button" className="modal-close" aria-label="Close waitlist form" onClick={handleButtonClick}>×</button>

          {/* Techy corner accents */}
          <div className="modal-corner-tl"></div>
          <div className="modal-corner-br"></div>

          {!showSuccess ? (
            <>
              <div className="modal-header">
                <h2>Join the Waitlist</h2>
                <p>
                  Be among the first to access Bravo.Ai marketplace
                </p>
              </div>

              {/* Animated grid background */}
              <div className="modal-grid-bg"></div>

              <form onSubmit={handleSubmit} className="waitlist-form">
                <div className="form-group">
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

                <div className="form-group">
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

                <div className="form-group">
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
            <div className="success-message show">
              <div className="success-icon">
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
    </>
  );
}
