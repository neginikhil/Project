import React, { useState } from 'react';
import { FaHome, FaRegFileAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('ApplicationOverview');
  const applications = [
    {
      id: 1,
      name: 'Application 1',
      appliedAt: '2022-01-01 10:00:00',
      status: 'Pending',
      progress: 30,
    },
    {
      id: 2,
      name: 'Application 2',
      appliedAt: '2022-01-05 14:30:00',
      status: 'In Review',
      progress: 60,
    },
    {
      id: 3,
      name: 'Application 3',
      appliedAt: '2022-01-10 16:45:00',
      status: 'Approved',
      progress: 100,
    },
  ];

  const getApplicationStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'red';
      case 'In Review':
        return 'yellow';
      case 'Approved':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <div className="font-serif bg-white min-h-screen flex flex-col text-white">
      <nav className="bg-green-600 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Application Tracker</h1>
        </div>
      </nav>

      <div className="flex flex-grow">
        <aside className="w-64 bg-green-400 p-6 hidden md:block">
          <ul className="space-y-6">
            <li>
              <button
                onClick={() => setActiveSection('ApplicationOverview')}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  activeSection === 'ApplicationOverview'
                    ? 'border-green-600 text-black bg-white'
                    : 'border-white text-white hover:text-black hover:bg-green-200'
                }`}
              >
                <FaHome className="text-lg" />
                My Applications
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('ApplicationTracker')}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  activeSection === 'ApplicationTracker'
                    ? 'border-green-600 text-black bg-white'
                    : 'border-white text-white hover:text-black hover:bg-green-200'
                }`}
              >
                <FaRegFileAlt className="text-lg" />
                Track Application
              </button>
            </li>
          </ul>
        </aside>

        <main className="flex-grow p-6">
          {activeSection === 'ApplicationOverview' && (
            <div>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">
                My Applications
              </h2>
              <p className="mb-6">View all your submitted applications.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((application) => (
                  <div
                    key={application.id}
                    className="bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700"
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {application.name}
                    </h3>
                    <p className="text-gray-400">{application.appliedAt}</p>
                    <p
                      className={`text-${getApplicationStatusColor(
                        application.status
                      )}-500 font-semibold mb-4`}
                    >
                      {application.status}
                    </p>
                    <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
                      <div
                        className={`bg-${getApplicationStatusColor(
                          application.status
                        )}-500 h-2 rounded-full`}
                        style={{ width: `${application.progress}%` }}
                      ></div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeSection === 'ApplicationTracker' && (
            <div>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">
                Track Application
              </h2>
              <p className="mb-6">
                Track the status of your application across different stages.
              </p>
              {applications.map((application) => (
                <div
                  key={application.id}
                  className="bg-gray-800 shadow-lg p-6 rounded-lg mb-6 border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {application.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{application.appliedAt}</p>
                  <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
                    <div
                      className={`bg-${getApplicationStatusColor(
                        application.status
                      )}-500 h-2 rounded-full`}
                      style={{ width: `${application.progress}%` }}
                    ></div>
                  </div>
                  <p
                    className={`text-${getApplicationStatusColor(
                      application.status
                    )}-500 font-semibold`}
                  >
                    {application.status} - {application.progress}%
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
