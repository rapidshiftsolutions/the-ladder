'use client';

import React from 'react';

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
  }

  render() {
    if (this.state.hasError) {
      // Custom error UI for racing theme
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-lg w-full text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-black text-white mb-4 font-anton tracking-wide uppercase">
              Racing Issue Detected
            </h2>
            
            <p className="text-white/80 mb-6 font-inter">
              We've encountered a technical issue. Our crew is working to get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 font-anton tracking-wide uppercase text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Restart Engine
              </button>
              
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 font-anton tracking-wide uppercase text-sm"
              >
                Return to Track
              </a>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-red-400 cursor-pointer font-semibold mb-2">
                  Developer Details
                </summary>
                <pre className="text-xs text-red-300 bg-red-900/20 p-3 rounded border overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
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