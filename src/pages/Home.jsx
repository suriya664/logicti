import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import SectionDivider from '../components/SectionDivider';
import '../styles/main.css';

const Home = () => {
  return (
    <div className="page-home">
      <HeroSection />
      <SectionDivider />
      
      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose TrackPulse?</h2>
            <p className="section-subtitle">
              Excellence in every detail, precision in every delivery
            </p>
          </div>
          
          <div className="features-showcase">
            <div className="feature-showcase-item">
              <div className="feature-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Advanced Technology" 
                  className="feature-image"
                />
              </div>
              <h3 className="feature-title">Advanced Technology</h3>
              <p className="feature-text">
                Cutting-edge logistics technology powered by AI and machine learning 
                for predictive analytics and optimized routing.
              </p>
            </div>
            
            <div className="feature-showcase-item">
              <div className="feature-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Global Network" 
                  className="feature-image"
                />
              </div>
              <h3 className="feature-title">Global Network</h3>
              <p className="feature-text">
                Extensive worldwide network ensuring seamless international shipping 
                and delivery across 150+ countries.
              </p>
            </div>
            
            <div className="feature-showcase-item">
              <div className="feature-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Expert Team" 
                  className="feature-image"
                />
              </div>
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-text">
                Dedicated professionals with decades of combined experience in 
                logistics, supply chain, and international trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
      <Services />
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Trusted by industry leaders worldwide
            </p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                  alt="Client" 
                  className="testimonial-image"
                />
              </div>
              <p className="testimonial-text">
                "TrackPulse has revolutionized our supply chain operations. 
                Their precision and reliability."
              </p>
              <h4 className="testimonial-author">John Smith</h4>
              <p className="testimonial-role">CEO, Global Industries</p>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                  alt="Client" 
                  className="testimonial-image"
                />
              </div>
              <p className="testimonial-text">
                "The level of service and attention to detail is exceptional. 
                TrackPulse is our trusted logistics partner."
              </p>
              <h4 className="testimonial-author">Sarah Johnson</h4>
              <p className="testimonial-role">Operations Director, TechCorp</p>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Client" 
                  className="testimonial-image"
                />
              </div>
              <p className="testimonial-text">
                "Outstanding performance and reliability. TrackPulse consistently delivers 
                on every promise."
              </p>
              <h4 className="testimonial-author">Michael Chen</h4>
              <p className="testimonial-role">Supply Chain Manager, RetailPlus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

