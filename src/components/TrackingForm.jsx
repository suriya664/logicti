import React, { useState } from 'react';
import '../styles/main.css';

const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      setTrackingResult({
        status: 'In Transit',
        location: 'New York Distribution Center',
        estimatedDelivery: '2024-01-15',
        currentLocation: 'New York, NY',
        history: [
          { date: '2024-01-10', time: '14:30', status: 'Package picked up', location: 'Los Angeles, CA' },
          { date: '2024-01-11', time: '09:15', status: 'In transit', location: 'Phoenix, AZ' },
          { date: '2024-01-12', time: '16:45', status: 'Arrived at facility', location: 'New York, NY' }
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="tracking-form-container">
      <form className="tracking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tracking-number" className="form-label">
            Enter Tracking Number
          </label>
          <input
            type="text"
            id="tracking-number"
            className="form-input"
            placeholder="TRK-1234567890"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-track" disabled={isLoading}>
          {isLoading ? 'Tracking...' : 'Track Shipment'}
        </button>
      </form>

      {trackingResult && (
        <div className="tracking-result">
          <div className="tracking-status-card">
            <h3 className="tracking-status-title">Shipment Status</h3>
            <div className="status-badge status-in-transit">
              {trackingResult.status}
            </div>
            <div className="tracking-info">
              <p><strong>Current Location:</strong> {trackingResult.currentLocation}</p>
              <p><strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}</p>
            </div>
          </div>

          <div className="tracking-history">
            <h4 className="history-title">Tracking History</h4>
            <div className="history-timeline">
              {trackingResult.history.map((event, index) => (
                <div key={index} className="history-item">
                  <div className="history-dot"></div>
                  <div className="history-content">
                    <div className="history-date">{event.date} {event.time}</div>
                    <div className="history-status">{event.status}</div>
                    <div className="history-location">{event.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingForm;

