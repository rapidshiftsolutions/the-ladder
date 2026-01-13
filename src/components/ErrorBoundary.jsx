'use client';

import React from 'react';
import Link from 'next/link';

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }
    
    this.setState({
      error,
      errorInfo
    });
    
    // In production, you might want to send to an error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error tracking service
      // logErrorToService(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Nonprofit-themed error UI for The Ladder
      return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)] flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center border border-[var(--color-border)]">
            {/* Icon */}
            <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-8 h-8 text-[var(--color-accent)]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" 
                />
              </svg>
            </div>
            
            {/* Heading */}
            <h2 
              className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Something Went Wrong
            </h2>
            
            {/* Message */}
            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              We're sorry, but something unexpected happened. 
              Don't worry – our team is here to help. 
              Please try refreshing the page or return to our homepage.
            </p>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="btn btn-primary inline-flex items-center justify-center"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  />
                </svg>
                Try Again
              </button>
              
              <Link
                href="/"
                className="btn btn-secondary inline-flex items-center justify-center"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                  />
                </svg>
                Go Home
              </Link>
            </div>
            
            {/* Contact info */}
            <p className="mt-6 text-sm text-[var(--color-text-muted)]">
              Need help? Call us at{' '}
              <a 
                href="tel:+12055221162" 
                className="text-[var(--color-primary)] hover:underline"
              >
                (205) 522-1162
              </a>
            </p>
            
            {/* Developer details (development only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-[var(--color-accent)] cursor-pointer font-semibold mb-2">
                  Developer Details
                </summary>
                <pre className="text-xs text-[var(--color-text-secondary)] bg-[var(--color-gray-100)] p-3 rounded border border-[var(--color-border)] overflow-auto max-h-48">
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
