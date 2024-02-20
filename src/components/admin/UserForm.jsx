import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ user, onUserCreated }) => {
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to create a new user
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/user/register`, newUser, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      // Reset the form and notify the parent component
      setNewUser({
        username: '',
        email: '',
        password: '',
        role: ''
      });

      // Notify the parent component that a new user has been created
      onUserCreated(response.data.newUser);

      // Hide the form after creating the user
      setShowForm(false);
    } catch (error) {
      console.error('Error creating user:', error);
      window.alert(error?.response?.data?.message)
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 hover:bg-blue-600 focus:outline-none"
      >
        Create User
      </button>

      {showForm && (
        <form onSubmit={handleCreateUser} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded">
          <h2 className="text-2xl font-semibold mb-4">Create User</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Username:</label>
            <input
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Role:</label>
            <input
              type="text"
              name="role"
              value={newUser.role}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Create User
          </button>
          <button
            type="button"
            className="bg-red-500 ml-2 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default UserForm;
