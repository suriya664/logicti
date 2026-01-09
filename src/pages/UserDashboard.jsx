import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const UserDashboard = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const myOrders = [
    { 
      id: 'TRK-301', 
      date: '2024-01-10', 
      status: 'Delivered', 
      items: 3, 
      amount: '$245.00',
      tracking: 'TRK-301'
    },
    { 
      id: 'TRK-302', 
      date: '2024-01-12', 
      status: 'In Transit', 
      items: 1, 
      amount: '$89.00',
      tracking: 'TRK-302'
    },
    { 
      id: 'TRK-303', 
      date: '2024-01-14', 
      status: 'Processing', 
      items: 2, 
      amount: '$156.00',
      tracking: 'TRK-303'
    },
  ];

  const timelineSteps = [
    { status: 'Order Placed', date: '2024-01-10', time: '10:30 AM', completed: true },
    { status: 'Processing', date: '2024-01-10', time: '02:15 PM', completed: true },
    { status: 'Shipped', date: '2024-01-11', time: '09:00 AM', completed: true },
    { status: 'In Transit', date: '2024-01-12', time: '11:30 AM', completed: true },
    { status: 'Out for Delivery', date: '2024-01-13', time: '08:00 AM', completed: true },
    { status: 'Delivered', date: '2024-01-13', time: '03:45 PM', completed: true },
  ];

  return (
    <DashboardLayout userType="user">
      <div className="dashboard-page">
        <div className="page-header">
          <h1 className="page-title">My Dashboard</h1>
          <p className="page-subtitle">Track your orders and shipments</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card stat-blue">
            <div className="stat-icon">📦</div>
            <div className="stat-content">
              <h3 className="stat-title">Total Orders</h3>
              <div className="stat-value">{myOrders.length}</div>
              <div className="stat-change positive">All time orders</div>
            </div>
          </div>
          <div className="stat-card stat-green">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3 className="stat-title">Delivered</h3>
              <div className="stat-value">{myOrders.filter(o => o.status === 'Delivered').length}</div>
              <div className="stat-change positive">Successfully delivered</div>
            </div>
          </div>
          <div className="stat-card stat-orange">
            <div className="stat-icon">🚚</div>
            <div className="stat-content">
              <h3 className="stat-title">In Transit</h3>
              <div className="stat-value">{myOrders.filter(o => o.status === 'In Transit').length}</div>
              <div className="stat-change positive">On the way</div>
            </div>
          </div>
          <div className="stat-card stat-purple">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3 className="stat-title">Total Spent</h3>
              <div className="stat-value">$490</div>
              <div className="stat-change positive">This month</div>
            </div>
          </div>
        </div>

        {/* Track Parcel */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Track Your Parcel</h2>
          </div>
          <div className="track-panel">
            <div className="track-input-group">
              <input
                type="text"
                className="track-input"
                placeholder="Enter tracking number (e.g., TRK-301)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <Link 
                to={`/track?number=${trackingNumber}`}
                className="btn-primary"
              >
                Track Now
              </Link>
            </div>
          </div>
        </div>

        {/* My Orders & Delivery Timeline */}
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <h2 className="card-title">My Orders</h2>
              <Link to="/user/orders" className="view-all-link">View All</Link>
            </div>
            <div className="orders-list">
              {myOrders.map((order) => (
                <div key={order.id} className="order-item">
                  <div className="order-header">
                    <div>
                      <span className="order-id">{order.id}</span>
                      <span className="order-date">Ordered on {order.date}</span>
                    </div>
                    <span className={`status-badge status-${order.status.toLowerCase().replace(' ', '-')}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <span className="order-items">{order.items} item(s)</span>
                    <span className="order-amount">{order.amount}</span>
                  </div>
                  <div className="order-actions">
                    <Link to={`/track?number=${order.tracking}`} className="order-link">
                      Track Order
                    </Link>
                    <button className="order-link">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <h2 className="card-title">Delivery Status Timeline</h2>
            </div>
            <div className="timeline">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`timeline-item ${step.completed ? 'completed' : ''}`}>
                  <div className="timeline-marker">
                    {step.completed ? '✓' : '○'}
                  </div>
                  <div className="timeline-content">
                    <h4 className="timeline-status">{step.status}</h4>
                    <p className="timeline-date">{step.date} at {step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Quick Actions</h2>
          </div>
          <div className="quick-actions">
            <Link to="/services" className="action-btn">
              <span className="action-icon">➕</span>
              <span>Create New Order</span>
            </Link>
            <Link to="/track" className="action-btn">
              <span className="action-icon">📍</span>
              <span>Track Shipment</span>
            </Link>
            <Link to="/contact" className="action-btn">
              <span className="action-icon">💬</span>
              <span>Contact Support</span>
            </Link>
            <Link to="/user/profile" className="action-btn">
              <span className="action-icon">👤</span>
              <span>Edit Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;

