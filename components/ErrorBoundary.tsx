import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // Fix: Replaced state initialization from a class field to the constructor.
  // This is to prevent issues with tooling that might not correctly interpret class fields,
  // leading to the error "Property 'props' does not exist". The constructor method is more robustly supported.
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-4">
            <div className="text-center max-w-md bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-red-200/50 dark:border-red-800/50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Oops, something went wrong.</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-4">An unexpected error occurred. Please try refreshing the page.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
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

export default ErrorBoundary;
