// Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    // These would typically come from your app's state, possibly using useState or useContext
    const workoutsCompleted = 10;
    const totalExerciseTime = 5; // in hours
    const currentWeight = 70; // in kg
  
    return (
      <div className="dashboard">
        <h2>User Dashboard</h2>
        <div className="dashboard-content">
          <p>Welcome to your dashboard!</p>
          <div className="metric">
            <h3>Workouts Completed</h3>
            <p>{workoutsCompleted}</p>
          </div>
          <div className="metric">
            <h3>Total Exercise Time</h3>
            <p>{totalExerciseTime} hours</p>
          </div>
          <div className="metric">
            <h3>Current Weight</h3>
            <p>{currentWeight} kg</p>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;