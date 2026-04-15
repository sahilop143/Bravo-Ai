import React from 'react';

/**
 * Error Boundary component to catch JavaScript errors in child components
 * and display a fallback UI instead of crashing the whole app
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg, #07080f)',
          color: 'var(--text, #f0f4ff)',
          padding: '2rem',
        }}>
          <div style={{ textAlign: 'center', maxWidth: '500px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ef4444' }}>
              Something went wrong
            </h2>
            <p style={{ color: 'var(--text-muted, rgba(240,244,255,0.55))', marginBottom: '1.5rem' }}>
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--cyan, #00e5ff)',
                color: '#07080f',
                border: 'none',
                borderRadius: 'var(--radius-sm, 8px)',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
