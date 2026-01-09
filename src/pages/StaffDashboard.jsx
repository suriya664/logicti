import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import '../styles/dashboard.css';

const StaffDashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const todayTasks = [
    { id: 'TRK-101', address: '123 Main St, New York', time: '09:00 AM', status: 'Pending', priority: 'high' },
    { id: 'TRK-102', address: '456 Oak Ave, Brooklyn', time: '10:30 AM', status: 'In Progress', priority: 'medium' },
    { id: 'TRK-103', address: '789 Pine Rd, Queens', time: '02:00 PM', status: 'Pending', priority: 'low' },
    { id: 'TRK-104', address: '321 Elm St, Manhattan', time: '04:00 PM', status: 'Pending', priority: 'high' },
  ];

  const assignedDeliveries = [
    { id: 'TRK-201', customer: 'John Smith', location: 'Downtown', status: 'In Transit', progress: 65 },
    { id: 'TRK-202', customer: 'Sarah Johnson', location: 'Uptown', status: 'Out for Delivery', progress: 90 },
    { id: 'TRK-203', customer: 'Mike Chen', location: 'Midtown', status: 'Picked Up', progress: 30 },
  ];

  const pickupRequests = [
    { id: 'PICK-001', address: '456 Business Park', time: '08:00 AM', status: 'New' },
    { id: 'PICK-002', address: '789 Industrial Way', time: '11:00 AM', status: 'Scheduled' },
    { id: 'PICK-003', address: '123 Warehouse Blvd', time: '03:00 PM', status: 'New' },
  ];

  return (
    <DashboardLayout userType="staff">
      <div className="dashboard-page">
        <div className="page-header">
          <h1 className="page-title">Staff Dashboard</h1>
          <p className="page-subtitle">Manage your deliveries and tasks</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card stat-blue">
            <div className="stat-icon">📦</div>
            <div className="stat-content">
              <h3 className="stat-title">Assigned Deliveries</h3>
              <div className="stat-value">{assignedDeliveries.length}</div>
              <div className="stat-change positive">Active deliveries</div>
            </div>
          </div>
          <div className="stat-card stat-orange">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3 className="stat-title">Today Tasks</h3>
              <div className="stat-value">{todayTasks.length}</div>
              <div className="stat-change positive">Scheduled today</div>
            </div>
          </div>
          <div className="stat-card stat-green">
            <div className="stat-icon">📥</div>
            <div className="stat-content">
              <h3 className="stat-title">Pickup Requests</h3>
              <div className="stat-value">{pickupRequests.length}</div>
              <div className="stat-change positive">New requests</div>
            </div>
          </div>
          <div className="stat-card stat-purple">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h3 className="stat-title">On-Time Rate</h3>
              <div className="stat-value">98.5%</div>
              <div className="stat-change positive">Excellent</div>
            </div>
          </div>
        </div>

        {/* Today Tasks */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Today's Tasks</h2>
            <span className="task-count">{todayTasks.length} tasks</span>
          </div>
          <div className="tasks-list">
            {todayTasks.map((task) => (
              <div key={task.id} className={`task-item priority-${task.priority}`}>
                <div className="task-info">
                  <div className="task-id">{task.id}</div>
                  <div className="task-details">
                    <p className="task-address">{task.address}</p>
                    <span className="task-time">{task.time}</span>
                  </div>
                </div>
                <div className="task-actions">
                  <span className={`status-badge status-${task.status.toLowerCase().replace(' ', '-')}`}>
                    {task.status}
                  </span>
                  <button className="task-btn">Start</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assigned Deliveries & Pickup Requests */}
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <h2 className="card-title">Assigned Deliveries</h2>
            </div>
            <div className="deliveries-list">
              {assignedDeliveries.map((delivery) => (
                <div key={delivery.id} className="delivery-item">
                  <div className="delivery-header">
                    <span className="delivery-id">{delivery.id}</span>
                    <span className={`status-badge status-${delivery.status.toLowerCase().replace(' ', '-')}`}>
                      {delivery.status}
                    </span>
                  </div>
                  <p className="delivery-customer">{delivery.customer}</p>
                  <p className="delivery-location">📍 {delivery.location}</p>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${delivery.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-text">{delivery.progress}% Complete</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <h2 className="card-title">Pickup Requests</h2>
            </div>
            <div className="pickups-list">
              {pickupRequests.map((pickup) => (
                <div key={pickup.id} className="pickup-item">
                  <div className="pickup-header">
                    <span className="pickup-id">{pickup.id}</span>
                    <span className={`status-badge status-${pickup.status.toLowerCase()}`}>
                      {pickup.status}
                    </span>
                  </div>
                  <p className="pickup-address">📍 {pickup.address}</p>
                  <p className="pickup-time">⏰ {pickup.time}</p>
                  <button className="pickup-btn">Accept</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Update Status Panel */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Update Shipment Status</h2>
          </div>
          <div className="status-update-panel">
            <div className="form-group">
              <label>Select Shipment</label>
              <select className="form-select">
                <option>Select a shipment...</option>
                {assignedDeliveries.map((delivery) => (
                  <option key={delivery.id} value={delivery.id}>{delivery.id} - {delivery.customer}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Update Status</label>
              <select 
                className="form-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">Select status...</option>
                <option value="picked-up">Picked Up</option>
                <option value="in-transit">In Transit</option>
                <option value="out-for-delivery">Out for Delivery</option>
                <option value="delivered">Delivered</option>
                <option value="exception">Exception</option>
              </select>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" className="form-input" placeholder="Enter current location" />
            </div>
            <div className="form-group">
              <label>Notes</label>
              <textarea className="form-textarea" placeholder="Add any notes..." rows="3"></textarea>
            </div>
            <button className="btn-primary">Update Status</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffDashboard;

