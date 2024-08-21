import React, { useState } from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const SignupForm = ({ setFormType }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    try {
      const response = await fetch('YOUR_BACKEND_API_URL/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const userData = await response.json();
        console.log('Signup successful, user data:', userData);

        Toastify({
          text: "Signup successful!",
          backgroundColor: "#00df9a",
          className: "info",
          duration: 3000
        }).showToast();
      } else {
        console.error('Signup failed with status:', response.status);
        Toastify({
          text: "Signup failed! Please check your details.",
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
        <h2 className="text-2xl text-[#00df9a] font-bold text-center mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="username">Username</label>
          <input
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-400">Already have an account? <button onClick={() => setFormType('login')} className="text-[#00df9a] font-bold">Login</button></p>
      </div>
    </div>
  );
};

export default SignupForm;
