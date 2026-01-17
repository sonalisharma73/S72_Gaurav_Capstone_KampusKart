import { Link } from 'react-router-dom';

/**
 * 404 Not Found Page
 * Displays when user navigates to non-existent route
 */
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon">
          <span className="error-code">404</span>
          <span className="error-emoji">🔍</span>
        </div>
        
        <h1 className="not-found-title">Page Not Found</h1>
        
        <p className="not-found-description">
          Oops! The page you're looking for seems to have gone missing. 
          Just like a lost item on campus!
        </p>
        
        <div className="not-found-suggestions">
          <h3>What you can do:</h3>
          <ul>
            <li>Check the URL for typos</li>
            <li>Go back to the previous page</li>
            <li>Visit our homepage</li>
            <li>Browse lost & found items</li>
          </ul>
        </div>
        
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            🏠 Go Home
          </Link>
          <Link to="/items" className="btn btn-secondary">
            📦 Browse Items
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline"
          >
            ← Go Back
          </button>
        </div>
        
        <div className="not-found-help">
          <p>
            Still can't find what you're looking for? 
            <Link to="/items/create" className="help-link">
              Report it as lost
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;