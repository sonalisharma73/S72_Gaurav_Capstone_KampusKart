/**
 * Loading Spinner Component
 * Reusable loading indicator for async operations
 */
const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary', 
  text = 'Loading...',
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  };

  const colorClasses = {
    primary: 'spinner-primary',
    secondary: 'spinner-secondary',
    white: 'spinner-white'
  };

  const spinnerClass = `loading-spinner ${sizeClasses[size]} ${colorClasses[color]}`;
  
  const content = (
    <div className="spinner-content">
      <div className={spinnerClass}>
        <div className="spinner-circle"></div>
      </div>
      {text && <p className="spinner-text">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="loading-overlay">
        {content}
      </div>
    );
  }

  return (
    <div className="loading-container">
      {content}
    </div>
  );
};

export default LoadingSpinner;