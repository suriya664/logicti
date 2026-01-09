import React from 'react';
import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider';
import '../styles/main.css';

const Home2 = () => {
  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero-section-alt">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Industrial logistics" 
            className="hero-bg-image"
          />
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Logistics Excellence</span>
            <span className="title-line shimmer">Redefined</span>
          </h1>
          <p className="hero-subtext">
            Streamlined. Efficient. Reliable.
          </p>
          <div className="hero-cta">
            <Link to="/services" className="btn btn-primary">
              Discover Solutions
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10M+</div>
              <div className="stat-label">Packages Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.8%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              Simple, streamlined process for maximum efficiency
            </p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Request Quote</h3>
              <p className="step-description">
                Submit your shipping requirements and receive a customized quote within hours.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Schedule Pickup</h3>
              <p className="step-description">
                Choose your preferred pickup time and location. We handle the rest seamlessly.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Track & Monitor</h3>
              <p className="step-description">
                Real-time tracking updates keep you informed every step of the journey.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Fast Delivery</h3>
              <p className="step-description">
                Your package arrives safely and on time, exactly as promised.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tailored Solutions</h2>
            <p className="section-subtitle">
              Custom logistics solutions for every business need
            </p>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">🚚</div>
              <h3 className="solution-title">E-Commerce Fulfillment</h3>
              <p className="solution-description">
                Complete fulfillment solutions designed for online retailers. Scale your business with confidence.
              </p>
              <ul className="solution-features">
                <li>Order Management System</li>
                <li>Inventory Tracking</li>
                <li>Returns Processing</li>
              </ul>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">📦</div>
              <h3 className="solution-title">B2B Logistics</h3>
              <p className="solution-description">
                Enterprise-grade logistics for businesses. Streamlined processes for maximum efficiency.
              </p>
              <ul className="solution-features">
                <li>Bulk Shipping</li>
                <li>Dedicated Account Manager</li>
                <li>Custom Reporting</li>
              </ul>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">🌐</div>
              <h3 className="solution-title">International Trade</h3>
              <p className="solution-description">
                Navigate global markets with ease. Expert customs handling and documentation support.
              </p>
              <ul className="solution-features">
                <li>Customs Clearance</li>
                <li>Trade Compliance</li>
                <li>Multi-Currency Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Logistics?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers who trust TrackPulse for their shipping needs.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
              <Link to="/track" className="btn btn-secondary">
                Track Your Shipment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;

