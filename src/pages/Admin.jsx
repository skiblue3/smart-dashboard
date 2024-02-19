import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserForm from '../components/admin/UserForm';

const Admin = ({ user }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {

        const response = await axios.get(process.env.REACT_APP_BACKEND_URL + 'api/user/getAllUsers', {
          headers: {
            Authorization: `Bearer ${user.token}` // Include the user's token for authentication
          }
        });

        setUsers(response.data.filter((d) => d.username !== user.username));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Call the async function
    fetchUsers();
  }, [user]);

  const handleDeleteUser = async (userId) => {
    // Show a confirmation dialog before proceeding
    const confirmed = window.confirm('Are you sure you want to delete this user?');

    if (!confirmed) {
      return; // User canceled the deletion
    }

    try {
      // Send a DELETE request to the backend to delete the user
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}api/user/delete/${userId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      // Update the users list after successful deletion
      setUsers((prevUsers) => prevUsers.filter((u) => u._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  if (!user || user.role !== 'admin') {
    return <div>No Permission to Access this page</div>;
  }

  const handleUserCreated = (newUser) => {
    // Update the users list after a new user is created
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-2">User List</h1>
      {users.length > 0 ? (
        <table className="table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{u.username}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.role}</td>
                <td className="px-4 py-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteUser(u._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users available.</p>
      )}
      {/* User creation form */}
      <UserForm user={user} onUserCreated={handleUserCreated} />
    </div>
  );
};

export default Admin;
