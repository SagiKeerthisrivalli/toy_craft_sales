import React from 'react';
import dashImage from './dash.png';
import './Home.css';

function Dashboard() {
  return (
    <div className="dashboard-fullscreen">
      <img src={dashImage} alt="Dashboard Graphic" className="dashboard-full-image" />
    </div>
  );
}

export default Dashboard;
