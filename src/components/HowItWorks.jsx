import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Browse & Discover',
    description: 'Explore thousands of AI agents and skills across every category — from writing to coding to automation.',
  },
  {
    number: '02',
    title: 'Deploy Instantly',
    description: 'One-click deployment. No infrastructure required. Connect to your workflow in seconds via API or UI.',
  },
  {
    number: '03',
    title: 'Build & Publish',
    description: 'Creators share their AI tools with a growing audience and help shape an open, fair ecosystem.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="showcase-header reveal">
          <p className="eyebrow">Simple Process</p>
          <h2>Up and Running in Minutes</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step.number} className={`step-item reveal reveal-delay-${index + 1}`}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
