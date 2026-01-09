import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const cursorTrailRef = useRef([]);

  useEffect(() => {
    // Cursor trail effect
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      document.body.appendChild(trail);

      cursorTrailRef.current.push(trail);

      setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
          cursorTrailRef.current = cursorTrailRef.current.filter(t => t !== trail);
        }, 300);
      }, 100);
    };

    // Optional: Ambient hum sound (commented out - add audio file later)
    // const ambientSound = new Audio('/sounds/ambient-hum.mp3');
    // ambientSound.loop = true;
    // ambientSound.volume = 0.1;
    // ambientSound.play();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // ambientSound.pause();
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Industrial logistics" 
          className="hero-bg-image"
        />
        {/* Placeholder for 3D interlocking metal rings */}
        <div className="hero-3d-placeholder">
          <div className="metal-ring ring-1"></div>
          <div className="metal-ring ring-2"></div>
          <div className="metal-ring ring-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Where Precision</span>
          <span className="title-line shimmer">Meets Performance</span>
        </h1>
        <p className="hero-subtext">
          Industrial. Sophisticated. Ultra-premium.
        </p>
        <div className="hero-cta">
          <Link to="/services" className="btn btn-primary">
            Explore Services
          </Link>
          <Link to="/track" className="btn btn-secondary">
            Track Shipment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

