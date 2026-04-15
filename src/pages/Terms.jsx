import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms({ scrolled, mobileMenu }) {
  return (
    <>
      <BackgroundAnimation />
      <Header scrolled={scrolled} mobileMenu={mobileMenu} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <div className="legal-wrap">
          <div className="legal-crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-muted)' }}>Terms of Service</span>
          </div>

          <div className="legal-content">
            <h1>Terms of Service</h1>
            <p className="last-updated">Last updated: April 12, 2026</p>

            <h2>1. Agreement to Terms</h2>
            <p>By accessing and using the Bravo.Ai website and services, you accept and agree to be bound by and comply with these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>

            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily access and use Bravo.Ai's platform for personal, non-commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials without express written consent</li>
              <li>Use the materials for any commercial purpose or public display without authorization</li>
              <li>Attempt to decompile or reverse engineer any software on the platform</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror the materials on any other server</li>
            </ul>

            <div className="legal-divider"></div>

            <h2>3. Platform Rules</h2>
            <p>When using Bravo.Ai, you agree to:</p>
            <ul>
              <li>Publish only AI tools and content that you have the right to distribute</li>
              <li>Not engage in deceptive, harmful, or illegal activities through the platform</li>
              <li>Respect the intellectual property rights of other creators</li>
              <li>Maintain accurate and complete information in your account</li>
            </ul>

            <h2>4. Disclaimer</h2>
            <p>The materials on Bravo.Ai's website are provided on an "as is" basis. Bravo.Ai makes no warranties, expressed or implied, and hereby disclaims all other warranties including implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>

            <h2>5. Limitations</h2>
            <p>In no event shall Bravo.Ai or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Bravo.Ai's platform.</p>

            <h2>6. Accuracy of Materials</h2>
            <p>The materials appearing on Bravo.Ai's platform could include technical, typographical, or other errors. Bravo.Ai does not warrant that any of the materials are accurate, complete, or current. We may update materials at any time without notice.</p>

            <h2>7. Modifications</h2>
            <p>Bravo.Ai may revise these terms of service at any time without prior notice. By continuing to use this platform after revisions are made, you agree to be bound by the then-current version of these terms.</p>

            <h2>8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the competent courts of the applicable jurisdiction.</p>

            <h2>9. Contact</h2>
            <p>For questions about these Terms of Service, please contact us at <a href="mailto:legal@bravo.ai">legal@bravo.ai</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
