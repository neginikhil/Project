import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';

const AppContent = () => {
  const [user, setUser] = useState(null);
  const [formType, setFormType] = useState('login');
  const navigate = useNavigate();

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    
    navigate('/user/dashboard');
  };

  const setShowForm = (type) => {
    setFormType(type);
    if (type === 'login') {
      navigate('/login');
    } else if (type === 'signup') {
      navigate('/signup');
    }
  };

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<><Hero /><Analytics /><Newsletter /><Cards /><Footer /></>} />
          <Route 
            path="/login" 
            element={<LoginForm setFormType={setFormType} onLoginSuccess={handleLoginSuccess} />} 
          />
          <Route 
            path="/signup" 
            element={<SignupForm setFormType={setFormType} />} 
          />
          <Route 
            path="/user/dashboard" 
            element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} 
          />
           <Route 
            path="/chatbot" 
            element={<Chatbot/>} 
          />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;