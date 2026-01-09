import React from 'react';
import TrackingForm from '../components/TrackingForm';
import SectionDivider from '../components/SectionDivider';
import '../styles/main.css';

const TrackShipment = () => {
  return (
    <div className="page-track">
      <div className="page-header">
        <h1 className="page-title">Track Your Shipment</h1>
        <p className="page-subtitle">Real-Time Tracking and Updates</p>
      </div>

      <div className="container">
        <SectionDivider />

        <div className="track-content">
          <div className="track-info">
            <h2 className="track-info-title">Track with Precision</h2>
            <p className="track-info-text">
              Enter your tracking number below to get real-time updates on your shipment. 
              Our advanced tracking system provides detailed information about your package's 
              journey from pickup to delivery.
            </p>
            <div className="track-features">
              <div className="track-feature">
                <span className="feature-icon">📍</span>
                <span>Real-Time Location</span>
              </div>
              <div className="track-feature">
                <span className="feature-icon">⏱️</span>
                <span>Estimated Delivery</span>
              </div>
              <div className="track-feature">
                <span className="feature-icon">📱</span>
                <span>SMS & Email Alerts</span>
              </div>
              <div className="track-feature">
                <span className="feature-icon">🔔</span>
                <span>Status Updates</span>
              </div>
            </div>
          </div>

          <div className="track-form-wrapper">
            <TrackingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackShipment;

