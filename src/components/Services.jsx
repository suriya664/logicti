import React from 'react';
import '../styles/main.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Express Delivery',
      description: 'Lightning-fast delivery solutions for time-sensitive shipments. Real-time tracking and guaranteed delivery windows.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['24/7 Tracking', 'Guaranteed Delivery', 'Priority Handling']
    },
    {
      id: 2,
      title: 'Warehouse Solutions',
      description: 'State-of-the-art storage facilities with advanced inventory management systems and climate control.',
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Climate Controlled', 'Security Systems', 'Inventory Management']
    },
    {
      id: 3,
      title: 'Global Shipping',
      description: 'Worldwide shipping network with customs clearance and international logistics expertise.',
      icon: '🌍',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      features: ['Customs Clearance', 'International Network', 'Documentation Support']
    },
    {
      id: 4,
      title: 'Supply Chain',
      description: 'End-to-end supply chain optimization with data analytics and predictive logistics.',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Analytics Dashboard', 'Predictive Logistics', 'End-to-End Solutions']
    },
    {
      id: 5,
      title: 'Cold Chain',
      description: 'Specialized temperature-controlled logistics for pharmaceuticals, food, and sensitive materials.',
      icon: '❄️',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Temperature Control', 'Compliance Certified', 'Specialized Handling']
    },
    {
      id: 6,
      title: 'E-Commerce Fulfillment',
      description: 'Complete fulfillment solutions for online retailers with same-day and next-day delivery options.',
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Same-Day Delivery', 'Order Management', 'Returns Processing']
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Comprehensive logistics solutions engineered for excellence
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
            >
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                  }}
                />
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

