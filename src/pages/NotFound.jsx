import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const NotFound = () => {
  return (
    <div className="page-not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Page Not Found</h2>
          <p className="not-found-text">
            The page you're looking for has been moved or doesn't exist.
          </p>
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

