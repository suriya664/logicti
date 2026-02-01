import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const DashboardLayout = ({ children, userType = 'user', pageTitle, pageSubtitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  // Get page title based on current route
  const getPageTitle = () => {
    if (pageTitle) return { title: pageTitle, subtitle: pageSubtitle };
    
    const pathTitles = {
      '/admin/dashboard': { title: 'Admin Dashboard', subtitle: 'Overview of your logistics operations' },
      '/staff/dashboard': { title: 'Staff Dashboard', subtitle: 'Manage your deliveries and tasks' },
      '/user/dashboard': { title: 'User Dashboard', subtitle: 'Track your orders and shipments' },
    };
    
    return pathTitles[location.pathname] || { title: 'Dashboard', subtitle: '' };
  };

  const { title: currentPageTitle, subtitle: currentPageSubtitle } = getPageTitle();

  const adminMenuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/shipments', label: 'Shipments', icon: '📦' },
    { path: '/admin/drivers', label: 'Drivers', icon: '👨‍✈️' },
    { path: '/admin/vehicles', label: 'Vehicles', icon: '🚚' },
    { path: '/admin/analytics', label: 'Analytics', icon: '📈' },
    { path: '/admin/notifications', label: 'Notifications', icon: '🔔' },
    { path: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ];

  const staffMenuItems = [
    { path: '/staff/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/staff/deliveries', label: 'My Deliveries', icon: '📦' },
    { path: '/staff/tasks', label: 'Today Tasks', icon: '✅' },
    { path: '/staff/pickups', label: 'Pickup Requests', icon: '📥' },
    { path: '/staff/status', label: 'Update Status', icon: '🔄' },
  ];

  const userMenuItems = [
    { path: '/user/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/user/orders', label: 'My Orders', icon: '📦' },
    { path: '/user/track', label: 'Track Parcel', icon: '📍' },
    { path: '/user/profile', label: 'Profile', icon: '👤' },
    { path: '/user/settings', label: 'Settings', icon: '⚙️' },
  ];

  const menuItems = userType === 'admin' ? adminMenuItems : 
                    userType === 'staff' ? staffMenuItems : userMenuItems;

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            <span className="logo-text">TrackPulse</span>
          </Link>
          <button 
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-nav-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-nav-item logout-btn" onClick={handleLogout}>
            <span className="nav-icon">⚡</span>
            <span className="nav-label">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Top Header */}
        <header className="dashboard-header">
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Page Heading */}
          <div className="page-heading">
            <h1 className="page-title">{currentPageTitle}</h1>
            {currentPageSubtitle && <p className="page-subtitle">{currentPageSubtitle}</p>}
          </div>

          <div className="header-search">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
          </div>

          <div className="header-actions">
            <button className="header-icon-btn" aria-label="Notifications">
              🔔
            </button>
            <div className="user-profile">
              <div className="profile-avatar">
                {userType === 'admin' ? '👨‍💼' : userType === 'staff' ? '👨‍🔧' : '👤'}
              </div>
              <div className="profile-info">
                <span className="profile-name">
                  {userType === 'admin' ? 'Admin' : userType === 'staff' ? 'Staff' : 'User'}
                </span>
                <span className="profile-role">
                  {userType === 'admin' ? 'Administrator' : userType === 'staff' ? 'Delivery Staff' : 'Customer'}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;

