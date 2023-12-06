// AdminDashboard.js
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3001/api/admin-dashboard', {
        method: 'GET',
        credentials: 'include', // This is required to include the session cookie in the request
      });

      const data = await response.json();

      if (response.ok) {
        setUsers(data.users);
      } else {
        alert('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const AdminDashboard = () => {
    return (
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gym Progress</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default Dashboard;