import React, { useState } from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setFormType, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Inside LoginForm component
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
  
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json(); // Parse JSON
  
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(responseData));
        console.log('Login successful');
        Toastify({
          text: "Login successful!",
          backgroundColor: "#00df9a",
          className: "info",
          duration: 3000
        }).showToast();
        onLoginSuccess(responseData); // Pass user data to onLoginSuccess
      } else {
        console.error('Login failed with status:', response.status);
        Toastify({
          text: responseData.message || "Login failed! Check your credentials.",
          backgroundColor: "red",
          className: "error",
          duration: 3000
        }).showToast();
      }
    } catch (error) {
      console.error('Error:', error);
      Toastify({
        text: "An error occurred. Please try again later.",
        backgroundColor: "red",
        className: "error",
        duration: 3000
      }).showToast();
    }
  };
  

  

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-[#00df9a] font-bold text-center mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
          <input
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#00df9a] p-3 rounded-lg font-bold text-gray-900"
        >
          Login
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-400">Don't have an account? <button onClick={() => setFormType('signup')} className="text-[#00df9a] font-bold">Sign Up</button></p>
      </div>
    </div>
  );
};

export default LoginForm;
