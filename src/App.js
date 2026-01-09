import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TrackShipment from './pages/TrackShipment';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import StaffLogin from './pages/StaffLogin';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import StaffDashboard from './pages/StaffDashboard';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';
import './styles/main.css';
import './styles/responsive.css';

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || 
                          location.pathname.startsWith('/login/') ||
                          location.pathname === '/register' ||
                          location.pathname.startsWith('/admin') ||
                          location.pathname.startsWith('/staff') ||
                          location.pathname.startsWith('/user');

  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/track" element={<TrackShipment />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/login/staff" element={<StaffLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
          <Route path="/staff/*" element={<StaffDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/*" element={<UserDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
