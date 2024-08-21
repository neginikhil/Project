
import React from 'react';

const Resources = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <h1 className="text-4xl text-[#00df9a] font-bold mb-6">Resources</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <p className="text-gray-400 mb-4">Here you can find various resources to help you with your projects.</p>
        <ul className="list-disc text-left text-gray-400">
          <li className="mb-2">Resource 1: Description</li>
          <li className="mb-2">Resource 2: Description</li>
          <li className="mb-2">Resource 3: Description</li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
