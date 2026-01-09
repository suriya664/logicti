import React from 'react';
import Services from '../components/Services';
import SectionDivider from '../components/SectionDivider';
import '../styles/main.css';

const ServicesPage = () => {
  return (
    <div className="page-services">
      <div className="page-header">
        <h1 className="page-title">Our Services</h1>
        <p className="page-subtitle">Comprehensive Logistics Solutions</p>
      </div>

      <SectionDivider />
      <Services />

      <div className="container">
        <div className="services-additional">
          <div className="additional-section">
            <div className="section-header">
              <h2 className="section-title">Why Choose TrackPulse?</h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to your needs
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-item-image">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Advanced Technology" 
                  />
                </div>
                <h3>Advanced Technology</h3>
                <p>State-of-the-art tracking and management systems powered by AI and machine learning.</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-image">
                  <img 
                    src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Global Network" 
                  />
                </div>
                <h3>Global Network</h3>
                <p>Extensive worldwide network ensuring seamless international shipping and delivery.</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-image">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Custom Solutions" 
                  />
                </div>
                <h3>Custom Solutions</h3>
                <p>Tailored logistics solutions designed to meet your specific business requirements.</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-image">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Expert Team" 
                  />
                </div>
                <h3>Expert Team</h3>
                <p>Dedicated professionals with decades of combined experience in logistics and supply chain.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

