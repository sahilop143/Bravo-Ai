import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Email validation regex pattern
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Name validation regex pattern (letters, spaces, hyphens, apostrophes)
 */
const NAME_REGEX = /^[a-zA-Z\s'-]{2,50}$/;

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
const validateEmail = (email) => EMAIL_REGEX.test(email) && email.length <= 100;

/**
 * Validates name format and length
 * @param {string} name - Name to validate
 * @returns {boolean}
 */
const validateName = (name) => NAME_REGEX.test(name) && name.length >= 2 && name.length <= 50;

/**
 * WaitlistModal component - Modal form for joining waitlist
 */
export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
  
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const autoCloseRef = useRef(null);

  /**
   * Handle opening the modal
   */
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    // Focus first input after modal opens
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);
  }, []);

  /**
   * Handle closing the modal
   */
  const closeModal = useCallback(() => {
    if (autoCloseRef.current) {
      window.clearTimeout(autoCloseRef.current);
      autoCloseRef.current = null;
    }
    setIsOpen(false);
    setShowSuccess(false);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', interest: '' });
    setErrors({});
  }, []);

  // Set up event listener for opening modal
  useEffect(() => {
    window.addEventListener('openWaitlistModal', handleOpen);

    return () => {
      window.removeEventListener('openWaitlistModal', handleOpen);
      document.body.style.overflow = '';
      if (autoCloseRef.current) {
        window.clearTimeout(autoCloseRef.current);
      }
    };
  }, [handleOpen]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  /**
   * Handle backdrop click to close modal
   * @param {React.MouseEvent} event
   */
  const handleBackdropClick = useCallback((event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  }, [closeModal]);

  /**
   * Handle form input changes
   * @param {React.ChangeEvent} event
   */
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }, [errors]);

  /**
   * Handle form submission
   * @param {React.FormEvent} event
   */
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const newErrors = {};

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

    // If there are errors, show them and stop
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    // Submit the form
    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual API endpoint)
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Show success message
      setShowSuccess(true);
      
      // Auto-close after 3 seconds
      autoCloseRef.current = window.setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Waitlist submission failed:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, closeModal]);

  // Determine if we should show the form or success message
  const displayForm = !showSuccess;

  return (
    <div
      className={`waitlist-modal${isOpen ? ' active' : ''}`}
      id="waitlistModal"
      ref={modalRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-heading"
    >
      <div className="waitlist-modal-content">
        <button
          id="modalClose"
          className="modal-close"
          type="button"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="modal-header">
          <h2 id="waitlist-heading">Join the Waitlist</h2>
          <p>Be among the first to access the AI marketplace</p>
        </div>

        {displayForm ? (
          <form className="waitlist-form" id="waitlistForm" onSubmit={handleSubmit} noValidate>
            {errors.submit && (
              <div className="form-error" role="alert">
                {errors.submit}
              </div>
            )}
            
            <div className="form-group">
              <input
                ref={firstInputRef}
                type="text"
                className={`form-input${errors.name ? ' error' : ''}`}
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <p className="form-field-error" id="name-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                className={`form-input${errors.email ? ' error' : ''}`}
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <p className="form-field-error" id="email-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-group">
              <select
                className={`form-input${errors.interest ? ' error' : ''}`}
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                aria-invalid={!!errors.interest}
                aria-describedby={errors.interest ? 'interest-error' : undefined}
                required
              >
                <option value="" disabled>
                  I&apos;m interested in...
                </option>
                <option value="creator">Publishing AI Agents/Skills</option>
                <option value="user">Discovering AI Tools</option>
                <option value="both">Both</option>
              </select>
              {errors.interest && (
                <p className="form-field-error" id="interest-error" role="alert">
                  {errors.interest}
                </p>
              )}
            </div>

            <button
              className="btn-primary btn-lg"
              type="submit"
              style={{ width: '100%' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </button>

            <p className="form-note">
              We&apos;ll notify you when Phase 1 launches. No spam, just updates.
            </p>
          </form>
        ) : (
          <div className="success-message show" id="successMessage" role="status">
            <div className="success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>Welcome to the Waitlist!</h3>
            <p>Check your email for confirmation. We&apos;ll be in touch soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
