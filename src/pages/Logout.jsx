import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Logout Page</h2>
        <p className="mb-4">Hello, {user?.username}! Are you sure you want to log out?</p>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
