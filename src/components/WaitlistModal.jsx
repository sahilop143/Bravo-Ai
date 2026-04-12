import React, { useEffect, useRef, useState } from 'react';

const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^[a-zA-Z\s'-]{2,50}$/,
};

const validateEmail = (email) => VALIDATION_PATTERNS.email.test(email) && email.length <= 100;
const validateName = (name) => VALIDATION_PATTERNS.name.test(name) && name.length >= 2 && name.length <= 50;

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
  const modalRef = useRef(null);
  const autoCloseRef = useRef(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setTimeout(() => {
        document.body.style.overflow = 'hidden';
      }, 0);
    };

    window.addEventListener('openWaitlistModal', handleOpen);

    return () => {
      window.removeEventListener('openWaitlistModal', handleOpen);
      document.body.style.overflow = '';
      if (autoCloseRef.current) {
        window.clearTimeout(autoCloseRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const closeModal = () => {
    if (autoCloseRef.current) {
      window.clearTimeout(autoCloseRef.current);
      autoCloseRef.current = null;
    }
    setIsOpen(false);
    setShowSuccess(false);
    setFormData({ name: '', email: '', interest: '' });
    setErrors({});
  };

  const handleBackdropClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

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

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setShowSuccess(true);
    autoCloseRef.current = window.setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const displayForm = !showSuccess;

  return (
    <div
      className={`waitlist-modal${isOpen ? ' active' : ''}`}
      id="waitlistModal"
      ref={modalRef}
      onClick={handleBackdropClick}
    >
      <div className="waitlist-modal-content">
        <button id="modalClose" className="modal-close" type="button" onClick={closeModal}>
          &times;
        </button>

        <div className="modal-header">
          <h2>Join the Waitlist</h2>
          <p>Be among the first to access the AI marketplace</p>
        </div>

        {displayForm ? (
          <form className="waitlist-form" id="waitlistForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                className="form-input"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  I'm interested in...
                </option>
                <option value="creator">Publishing AI Agents/Skills</option>
                <option value="user">Discovering AI Tools</option>
                <option value="both">Both</option>
              </select>
            </div>

            <button className="btn-primary btn-lg" type="submit" style={{ width: '100%' }}>
              Join Waitlist
            </button>

            <p className="form-note">We'll notify you when Phase 1 launches. No spam, just updates.</p>
          </form>
        ) : (
          <div className="success-message show" id="successMessage">
            <div className="success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>Welcome to the Waitlist!</h3>
            <p>Check your email for confirmation. We'll be in touch soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
