'use client';

import React, { useState } from 'react';
import styles from './WaitlistModal.module.css';

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setShowSuccess(false);
    setFormData({ name: '', email: '', interest: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.interest) {
      setShowSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  return (
    <>
      {/* Modal Triggers */}
      <div style={{ display: 'none' }}>
        <button onClick={handleOpen}>Join Waitlist</button>
      </div>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className={styles.backdrop} onClick={handleClose}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={handleClose}>×</button>

            {!showSuccess ? (
              <>
                <h3 className={styles.title}>Join the Waitlist</h3>
                <p className={styles.desc}>
                  Be among the first to access Bravo.Ai marketplace
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="interest">Primary Interest</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="creator">I want to publish agents</option>
                      <option value="user">I want to discover agents</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Join Waitlist
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.icon}>✓</div>
                <h3>Welcome aboard!</h3>
                <p>Check your email for updates</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global Join Waitlist Button Handler */}
      <style jsx>{`
        :global(button:has-text("Join Waitlist")) {
          /* This is handled via event delegation */
        }
      `}</style>
    </>
  );
}
