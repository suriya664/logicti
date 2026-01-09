import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/main.css';

const StaffLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Staff Login - TrackPulse';
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Mock authentication - in real app, validate credentials
      if (formData.email && formData.password) {
        // Store auth token and user type
        localStorage.setItem('authToken', 'mock-token');
        localStorage.setItem('userType', 'staff');
        navigate('/staff/dashboard');
      } else {
        setError('Please enter both email and password');
      }
    }, 1500);
  };

  return (
    <div className="page-auth page-login">
      <div className="auth-container">
        <div className="auth-card">
          <Link to="/" className="auth-logo">
            <span className="logo-text">TrackPulse</span>
          </Link>
          <div className="auth-header">
            <h1 className="auth-title">Staff Login</h1>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="auth-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="staff@trackpulse.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="auth-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <span className="auth-link-text" style={{ cursor: 'pointer' }} onClick={() => alert('Password reset feature coming soon!')}>
                Forgot password?
              </span>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-auth"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login as Staff'}
            </button>
          </form>

          <div className="auth-footer">
            <p className="auth-footer-text">
              Need different access?{' '}
              <Link to="/login/admin" className="auth-link-text">Admin Login</Link>
              {' | '}
              <Link to="/login/user" className="auth-link-text">User Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;

