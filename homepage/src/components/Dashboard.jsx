import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const user = location.state?.user; // Access the user data from state

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <h1 className="text-4xl text-[#00df9a] font-bold mb-6">Welcome, {user?.username}!</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <p className="text-gray-400 mb-4">You have successfully logged in.</p>
        <div className="flex justify-center">
          <button className="mx-2 p-2 bg-[#00df9a] text-gray-900 font-bold rounded-lg">
            View Profile
          </button>
          <button className="mx-2 p-2 bg-[#00df9a] text-gray-900 font-bold rounded-lg">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
