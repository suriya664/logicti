import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/main.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      {isMenuOpen && (
        <div 
          className="nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">TrackPulse</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/home2" 
            className={`nav-link ${isActive('/home2') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home 2
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/track" 
            className={`nav-link ${isActive('/track') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Track Shipment
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          {/* Dashboard Links */}
          <Link 
            to="/login/admin" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Admin
          </Link>
          <Link 
            to="/login/staff" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Staff
          </Link>
          <Link 
            to="/login/user" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            User
          </Link>
          
          {/* Mobile/Tablet Auth Items */}
          <div className="nav-auth-mobile">
            <div className="nav-theme-toggle-mobile">
              <ThemeToggle />
            </div>
            <Link 
              to="/login" 
              className="nav-link nav-auth-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="nav-link nav-auth-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </nav>

        <div className="header-auth">
          <ThemeToggle />
          <Link to="/login" className="auth-link login-link">Login</Link>
          <Link to="/register" className="auth-link register-link">Register</Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

