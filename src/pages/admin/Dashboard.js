// AdminDashboard.js
import React from 'react';
import './Dashboard.css';

const users = [
  { id: 1, name: 'User 1', progress: '50%' },
  { id: 2, name: 'User 2', progress: '30%' },
  { id: 3, name: 'User 3', progress: '80%' },
  // Add more users as needed
];

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

export default AdminDashboard;