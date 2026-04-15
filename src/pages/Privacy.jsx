import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy({ scrolled, mobileMenu }) {
  return (
    <>
      <BackgroundAnimation />
      <Header scrolled={scrolled} mobileMenu={mobileMenu} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <div className="legal-wrap">
          <div className="legal-crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-muted)' }}>Privacy Policy</span>
          </div>

          <div className="legal-content">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: April 12, 2026</p>

            <h2>1. Introduction</h2>
            <p>Bravo.Ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other information you voluntarily provide</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and navigation patterns</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system</li>
              <li><strong>Cookies &amp; Tracking:</strong> We use cookies and similar technologies to enhance your experience. Our platform uses <strong>Vercel Analytics</strong> to understand usage patterns. We also load fonts from <strong>Google Fonts</strong>, which may collect your IP address per Google's privacy policy.</li>
            </ul>

            <div className="legal-divider"></div>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Communicate with you about our services and updates</li>
              <li>Personalize your platform experience</li>
              <li>Improve our website, platform, and services</li>
              <li>Analyze trends and gather demographic information</li>
              <li>Send promotional communications (with your explicit consent)</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>

            <h2>4. Data Sharing &amp; Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our platform, subject to confidentiality agreements. We may disclose information if required by law or to protect our rights.</p>

            <h2>5. Data Security</h2>
            <p>We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

            <h2>6. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. You may request deletion of your data at any time.</p>

            <h2>7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to access, correct, update, or delete your personal information. To exercise any of these rights, contact us at the address below.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting a notice on our website or sending you an email.</p>

            <h2>9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@bravo.ai">privacy@bravo.ai</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
