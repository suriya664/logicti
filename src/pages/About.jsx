import React from 'react';
import SectionDivider from '../components/SectionDivider';
import '../styles/main.css';

const About = () => {
  return (
    <div className="page-about">
      <div className="page-header">
        <h1 className="page-title">About TrackPulse</h1>
        <p className="page-subtitle">Engineering Excellence in Logistics</p>
      </div>

      <div className="container">
        <SectionDivider />
        
        <div className="about-content">
          <div className="about-image-section">
            <img 
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="TrackPulse Logistics Team" 
              className="about-main-image"
            />
          </div>

          <div className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="about-text">
              At TrackPulse Logistics, we redefine the standards of industrial logistics. 
              Our mission is to deliver precision-engineered solutions that combine 
              cutting-edge technology with uncompromising reliability. We understand 
              that in the world of logistics, every second counts, every detail matters, 
              and every shipment is a promise.
            </p>
          </div>

          <div className="about-image-grid">
            <div className="about-image-item">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Warehouse" 
                className="about-grid-image"
              />
              <h3 className="about-image-title">State-of-the-Art Facilities</h3>
            </div>
            <div className="about-image-item">
              <img 
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
                alt="Global Shipping" 
                className="about-grid-image"
              />
              <h3 className="about-image-title">Global Reach</h3>
            </div>
            <div className="about-image-item">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Technology" 
                className="about-grid-image"
              />
              <h3 className="about-image-title">Advanced Technology</h3>
            </div>
          </div>

          <div className="about-section">
            <h2 className="section-title">Industrial Excellence</h2>
            <p className="about-text">
              Built on a foundation of industrial sophistication, TrackPulse operates 
              with the precision of a well-oiled machine. Our network spans continents, 
              our technology integrates seamlessly, and our commitment to excellence 
              never wavers. We serve enterprises that demand nothing less than perfection.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">Ultra-Premium Service</h2>
            <p className="about-text">
              What sets us apart is our unwavering dedication to ultra-premium service. 
              Every interaction, every shipment, every solution is crafted with meticulous 
              attention to detail. We don't just move packages—we orchestrate seamless 
              logistics experiences that elevate your business operations.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">Our Story</h2>
            <p className="about-text">
              Founded with a vision to transform the logistics industry, TrackPulse Logistics 
              emerged from a simple yet powerful idea: logistics should be seamless, transparent, 
              and reliable. What started as a small operation has grown into a global network 
              trusted by thousands of businesses worldwide. Our journey is marked by innovation, 
              dedication, and an unrelenting commitment to exceeding expectations.
            </p>
            <p className="about-text">
              Today, we stand as a testament to what's possible when precision meets passion. 
              Every milestone we've achieved, every partnership we've forged, and every challenge 
              we've overcome has strengthened our resolve to deliver excellence in every aspect 
              of logistics operations.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3 className="value-title">Integrity</h3>
                <p className="value-text">
                  We conduct business with the highest ethical standards, ensuring transparency 
                  and honesty in every transaction and interaction.
                </p>
              </div>
              <div className="value-item">
                <h3 className="value-title">Innovation</h3>
                <p className="value-text">
                  We continuously invest in cutting-edge technology and processes to stay ahead 
                  of industry trends and deliver superior solutions.
                </p>
              </div>
              <div className="value-item">
                <h3 className="value-title">Excellence</h3>
                <p className="value-text">
                  We strive for perfection in every detail, setting new benchmarks for quality 
                  and service in the logistics industry.
                </p>
              </div>
              <div className="value-item">
                <h3 className="value-title">Customer-Centric</h3>
                <p className="value-text">
                  Our clients are at the heart of everything we do. We listen, adapt, and deliver 
                  solutions tailored to their unique needs.
                </p>
              </div>
              <div className="value-item">
                <h3 className="value-title">Reliability</h3>
                <p className="value-text">
                  You can count on us to deliver on our promises. We build trust through consistent 
                  performance and dependable service that never wavers.
                </p>
              </div>
              <div className="value-item">
                <h3 className="value-title">Sustainability</h3>
                <p className="value-text">
                  We're committed to sustainable logistics practices that protect our environment 
                  while delivering efficient, eco-friendly solutions for future generations.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2 className="section-title">Our Commitment</h2>
            <p className="about-text">
              At TrackPulse Logistics, we don't just promise excellence—we deliver it consistently. 
              Our commitment extends beyond logistics to building lasting partnerships that drive 
              mutual success. We understand that your business depends on reliable logistics, and 
              we take that responsibility seriously.
            </p>
            <p className="about-text">
              Whether you're a startup shipping your first order or an enterprise managing complex 
              global supply chains, we're here to ensure your logistics operations run smoothly, 
              efficiently, and cost-effectively. Your success is our success, and we're committed 
              to being your trusted logistics partner every step of the way.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Shipments Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

