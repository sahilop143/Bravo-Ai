'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CreatorGuidePage() {
  return (
    <>
      <Header />
      <main className="creator-page">
        <section className="page-hero">
          <div className="container">
            <div className="page-header">
              <h1>Creator Guide</h1>
              <p className="page-subtitle">
                Build and publish AI agents on the world's most trusted marketplace
              </p>
            </div>
          </div>
        </section>

        <section className="creator-content">
          <div className="container">
            <div className="creator-grid">
              {/* Why Create */}
              <div className="creator-section">
                <h2>Why Become a Creator?</h2>
                <div className="creator-items">
                  <div className="creator-item">
                    <div className="item-icon">🚀</div>
                    <h3>Reach Global Audience</h3>
                    <p>
                      Publish your AI agents to millions of users worldwide. 
                      Build your audience and grow your business on our platform.
                    </p>
                  </div>
                  <div className="creator-item">
                    <div className="item-icon">💰</div>
                    <h3>Monetize Your Work</h3>
                    <p>
                      Earn revenue from subscriptions, usage fees, and premium 
                      features. Get paid for the value you create.
                    </p>
                  </div>
                  <div className="creator-item">
                    <div className="item-icon">🎯</div>
                    <h3>Fair & Transparent</h3>
                    <p>
                      Creator-first economics with fair revenue sharing. 
                      No hidden fees or surprise policy changes.
                    </p>
                  </div>
                  <div className="creator-item">
                    <div className="item-icon">🛠</div>
                    <h3>Full Control</h3>
                    <p>
                      Maintain complete control over your agents, pricing, 
                      and business model. You're in charge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Getting Started */}
              <div className="creator-section">
                <h2>Getting Started as a Creator</h2>
                <div className="creator-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <h3>Create Account</h3>
                    <p>Sign up and verify your creator account on Bravo.Ai</p>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <h3>Build Your Agent</h3>
                    <p>Create your AI agent using our SDK and development tools</p>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <h3>Test & Optimize</h3>
                    <p>Test thoroughly and optimize performance before publishing</p>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <h3>Publish & Grow</h3>
                    <p>Launch your agent and start reaching users immediately</p>
                  </div>
                </div>
              </div>

              {/* Development Tools */}
              <div className="creator-section">
                <h2>Development Tools</h2>
                <div className="creator-items">
                  <div className="creator-item">
                    <h3>SDK & Libraries</h3>
                    <p>
                      Comprehensive SDKs for Python, JavaScript, Go, and more. 
                      Build faster with pre-built components and utilities.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Local Testing</h3>
                    <p>
                      Test your agents locally with our development server. 
                      Debug and iterate quickly before deployment.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Monitoring & Logs</h3>
                    <p>
                      Real-time monitoring, detailed logs, and performance 
                      metrics to keep your agents running smoothly.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Version Control</h3>
                    <p>
                      Manage multiple versions of your agents. Deploy updates 
                      without downtime.
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="creator-section">
                <h2>Creator Best Practices</h2>
                <div className="creator-items">
                  <div className="creator-item">
                    <h3>Quality Standards</h3>
                    <p>
                      Maintain high quality standards. Test thoroughly, handle 
                      errors gracefully, and provide excellent user experience.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Documentation</h3>
                    <p>
                      Write clear documentation for your agents. Help users 
                      understand capabilities and configuration options.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Community Engagement</h3>
                    <p>
                      Engage with your users. Respond to feedback, fix issues 
                      quickly, and build a loyal community.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Innovation</h3>
                    <p>
                      Stay updated with latest AI advancements. Continuously 
                      improve and add new features to your agents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="creator-section">
                <h2>Creator Resources</h2>
                <div className="creator-items">
                  <div className="creator-item">
                    <h3>Example Projects</h3>
                    <p>
                      Browse open-source example agents to learn best practices 
                      and accelerate your development.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Community Forum</h3>
                    <p>
                      Connect with other creators. Share knowledge, ask questions, 
                      and collaborate on projects.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Creator Webinars</h3>
                    <p>
                      Join live webinars to learn about new features, best 
                      practices, and monetization strategies.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Marketing Support</h3>
                    <p>
                      Get your agent featured. We help promote top agents to 
                      maximize visibility and user acquisition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Monetization */}
              <div className="creator-section">
                <h2>Monetization Options</h2>
                <div className="creator-items">
                  <div className="creator-item">
                    <h3>Subscription Model</h3>
                    <p>
                      Charge users a recurring subscription for access to your 
                      agent. Predictable revenue stream.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Pay-Per-Use</h3>
                    <p>
                      Users pay based on their usage. Fair pricing that scales 
                      with customer needs.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Freemium</h3>
                    <p>
                      Offer free access to basic features. Unlock premium 
                      capabilities for paying users.
                    </p>
                  </div>
                  <div className="creator-item">
                    <h3>Sponsorships</h3>
                    <p>
                      Partner with brands for sponsorships. Collaborate with 
                      companies aligned with your agent's purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="creator-cta">
              <h2>Ready to Start Creating?</h2>
              <p>Join thousands of creators building the future of AI</p>
              <Link href="/#pricing" className="btn-primary btn-lg">Start Creating Today</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
