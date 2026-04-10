'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DocumentationPage() {
  return (
    <>
      <Header />
      <main className="documentation-page">
        <section className="page-hero">
          <div className="container">
            <div className="page-header">
              <h1>Documentation</h1>
              <p className="page-subtitle">
                Everything you need to know about Bravo.Ai
              </p>
            </div>
          </div>
        </section>

        <section className="doc-content">
          <div className="container">
            <div className="doc-grid">
              {/* Getting Started */}
              <div className="doc-section">
                <h2>Getting Started</h2>
                <div className="doc-items">
                  <div className="doc-item">
                    <h3>What is Bravo.Ai?</h3>
                    <p>
                      Bravo.Ai is an open marketplace for AI agents and skills. 
                      It's a platform where creators can publish their AI tools and 
                      users can discover trusted AI solutions for their needs.
                    </p>
                  </div>
                  <div className="doc-item">
                    <h3>Quick Start Guide</h3>
                    <p>
                      Get up and running in minutes. Sign up for an account, 
                      explore available agents and skills, or start creating 
                      your own AI tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Users */}
              <div className="doc-section">
                <h2>For Users</h2>
                <div className="doc-items">
                  <div className="doc-item">
                    <h3>Finding Agents & Skills</h3>
                    <p>
                      Browse our marketplace to discover AI agents and skills 
                      that match your needs. Filter by category, rating, and features.
                    </p>
                  </div>
                  <div className="doc-item">
                    <h3>Using Agents</h3>
                    <p>
                      Learn how to integrate AI agents into your workflows and 
                      maximize their potential with advanced configuration options.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Creators */}
              <div className="doc-section">
                <h2>For Creators</h2>
                <div className="doc-items">
                  <div className="doc-item">
                    <h3>Publishing Your First Agent</h3>
                    <p>
                      Step-by-step guide to publishing your AI agent on Bravo.Ai. 
                      Reach millions of users and grow your AI tool business.
                    </p>
                  </div>
                  <div className="doc-item">
                    <h3>Creator Dashboard</h3>
                    <p>
                      Manage your agents, track analytics, handle payments, 
                      and engage with users from your creator dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* API Documentation */}
              <div className="doc-section">
                <h2>API Reference</h2>
                <div className="doc-items">
                  <div className="doc-item">
                    <h3>REST API</h3>
                    <p>
                      Comprehensive REST API documentation for integrating 
                      Bravo.Ai into your applications and services.
                    </p>
                  </div>
                  <div className="doc-item">
                    <h3>Webhooks</h3>
                    <p>
                      Real-time event notifications using webhooks. Subscribe 
                      to updates about agents, users, and marketplace activity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="doc-section">
                <h2>Best Practices</h2>
                <div className="doc-items">
                  <div className="doc-item">
                    <h3>Performance Optimization</h3>
                    <p>
                      Tips and tricks for optimizing your AI agents for 
                      speed and efficiency. Reduce latency and improve user experience.
                    </p>
                  </div>
                  <div className="doc-item">
                    <h3>Security & Compliance</h3>
                    <p>
                      Security guidelines and compliance standards for creating 
                      secure, trustworthy AI tools on the Bravo.Ai platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="doc-section">
                <h2>Support</h2>
                <div className="doc-items">
                  <div className="doc-item">
                    <h3>Frequently Asked Questions</h3>
                    <p>
                      Common questions and answers about using Bravo.Ai, 
                      troubleshooting issues, and maximizing platform features.
                    </p>
                  </div>
                  <div className="doc-item">
                    <h3>Contact Us</h3>
                    <p>
                      Can't find what you're looking for? Contact our support 
                      team via email, chat, or join our community Discord.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
