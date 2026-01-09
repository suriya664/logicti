import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import '../styles/dashboard.css';

const AdminDashboard = () => {
  const stats = [
    { 
      title: 'Total Shipments', 
      value: '2,547', 
      change: '+12.5%', 
      icon: '📦',
      color: 'blue'
    },
    { 
      title: 'In Transit', 
      value: '342', 
      change: '+8.2%', 
      icon: '🚚',
      color: 'orange'
    },
    { 
      title: 'Delivered', 
      value: '2,105', 
      change: '+15.3%', 
      icon: '✅',
      color: 'green'
    },
    { 
      title: 'Pending', 
      value: '100', 
      change: '-5.1%', 
      icon: '⏳',
      color: 'red'
    },
  ];

  const recentOrders = [
    { id: 'TRK-001', customer: 'John Smith', status: 'In Transit', date: '2024-01-15', amount: '$245' },
    { id: 'TRK-002', customer: 'Sarah Johnson', status: 'Delivered', date: '2024-01-14', amount: '$189' },
    { id: 'TRK-003', customer: 'Mike Chen', status: 'Pending', date: '2024-01-15', amount: '$320' },
    { id: 'TRK-004', customer: 'Emily Davis', status: 'In Transit', date: '2024-01-13', amount: '$156' },
    { id: 'TRK-005', customer: 'David Wilson', status: 'Delivered', date: '2024-01-12', amount: '$278' },
  ];

  return (
    <DashboardLayout userType="admin">
      <div className="dashboard-page">
        <div className="page-header">
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Overview of your logistics operations</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card stat-${stat.color}`}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-title">{stat.title}</h3>
                <div className="stat-value">{stat.value}</div>
                <div className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                  {stat.change} from last month
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Revenue Analytics</h2>
            <select className="period-select">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="chart-container">
            <div className="chart-placeholder">
              <div className="chart-bars">
                {[65, 80, 75, 90, 85, 95, 88].map((height, i) => (
                  <div key={i} className="chart-bar" style={{ height: `${height}%` }}></div>
                ))}
              </div>
              <div className="chart-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders & Notifications */}
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <h2 className="card-title">Recent Orders</h2>
              <Link to="/admin/shipments" className="view-all-link">View All</Link>
            </div>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="order-id">{order.id}</td>
                      <td>{order.customer}</td>
                      <td>
                        <span className={`status-badge status-${order.status.toLowerCase().replace(' ', '-')}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>{order.date}</td>
                      <td className="amount">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <h2 className="card-title">Notifications</h2>
              <span className="notification-count">5</span>
            </div>
            <div className="notifications-list">
              <div className="notification-item unread">
                <div className="notification-icon">🚨</div>
                <div className="notification-content">
                  <p className="notification-text">New pickup request from ABC Corp</p>
                  <span className="notification-time">2 minutes ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon">✅</div>
                <div className="notification-content">
                  <p className="notification-text">Shipment TRK-001 delivered successfully</p>
                  <span className="notification-time">1 hour ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon">⚠️</div>
                <div className="notification-content">
                  <p className="notification-text">Vehicle #VH-123 requires maintenance</p>
                  <span className="notification-time">3 hours ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon">📦</div>
                <div className="notification-content">
                  <p className="notification-text">50 new orders received today</p>
                  <span className="notification-time">5 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Quick Actions</h2>
          </div>
          <div className="quick-actions">
            <button className="action-btn">
              <span className="action-icon">➕</span>
              <span>Add New Shipment</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">👨‍✈️</span>
              <span>Manage Drivers</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">🚚</span>
              <span>Manage Vehicles</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;

