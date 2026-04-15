import React from 'react';

/**
 * @typedef {Object} Agent
 * @property {string} title - Agent title
 * @property {string} category - Agent category
 * @property {string} rating - Agent rating with star
 * @property {string} description - Agent description
 * @property {string[]} tags - Agent tags
 * @property {Object} avatarStyle - Avatar background style
 * @property {React.ReactNode} icon - Avatar icon element
 */

/** @type {Agent[]} */
const agents = [
  {
    title: 'ContentForge AI',
    category: 'Writing',
    rating: '★ 4.9',
    description: 'Generate blog posts, social media content, and marketing copy with context-aware AI that adapts to your brand voice.',
    tags: ['SEO', 'Marketing', 'Multi-language'],
    avatarStyle: { background: 'linear-gradient(135deg, var(--cyan), var(--violet))' },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'CodePilot Pro',
    category: 'Development',
    rating: '★ 4.8',
    description: 'Intelligent code completion, debugging assistance, and architecture suggestions for full-stack developers.',
    tags: ['JavaScript', 'Python', 'DevOps'],
    avatarStyle: { background: 'linear-gradient(135deg, #7c3aed, #f59e0b)' },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'TaskFlow Automator',
    category: 'Productivity',
    rating: '★ 4.7',
    description: 'Automate repetitive workflows, schedule meetings, manage emails, and integrate with 200+ productivity tools.',
    tags: ['Automation', 'Calendar', 'Email'],
    avatarStyle: { background: 'linear-gradient(135deg, #10b981, #06b6d4)' },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
];

/**
 * FeaturedAgents component - Displays featured AI tools
 */
export default function FeaturedAgents() {
  return (
    <section id="showcase" className="featured-agents" aria-labelledby="agents-heading">
      <div className="container">
        <div className="showcase-header reveal">
          <p className="eyebrow">Featured Tools</p>
          <h2 id="agents-heading">Discover What&apos;s Possible</h2>
        </div>

        <div className="agents-grid">
          {agents.map((agent, index) => (
            <article key={agent.title} className={`agent-card reveal reveal-delay-${index + 1}`}>
              <div className="agent-card-header">
                <div className="agent-avatar" style={agent.avatarStyle} aria-hidden="true">
                  {agent.icon}
                </div>
                <div className="agent-meta">
                  <span className="agent-category">{agent.category}</span>
                  <span className="agent-rating" aria-label={`Rating: ${agent.rating}`}>{agent.rating}</span>
                </div>
              </div>
              <h3>{agent.title}</h3>
              <p>{agent.description}</p>
              <div className="agent-tags" role="list" aria-label="Agent tags">
                {agent.tags.map((tag) => (
                  <span key={tag} className="agent-tag" role="listitem">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
