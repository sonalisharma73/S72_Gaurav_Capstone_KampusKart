import React from 'react';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
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
    // Log error details
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <div className="error-boundary-content">
            <div className="error-icon">
              <span className="error-emoji">💥</span>
            </div>
            
            <h1 className="error-title">Oops! Something went wrong</h1>
            
            <p className="error-description">
              We're sorry, but something unexpected happened. 
              Don't worry, your data is safe!
            </p>
            
            <div className="error-actions">
              <button 
                onClick={this.handleReload}
                className="btn btn-primary"
              >
                🔄 Reload Page
              </button>
              <button 
                onClick={this.handleGoHome}
                className="btn btn-secondary"
              >
                🏠 Go Home
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="error-details">
                <summary>Error Details (Development Only)</summary>
                <div className="error-stack">
                  <h4>Error:</h4>
                  <pre>{this.state.error && this.state.error.toString()}</pre>
                  
                  <h4>Component Stack:</h4>
                  <pre>{this.state.errorInfo.componentStack}</pre>
                </div>
              </details>
            )}
            
            <div className="error-help">
              <p>
                If this problem persists, please contact support or 
                try refreshing the page.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;