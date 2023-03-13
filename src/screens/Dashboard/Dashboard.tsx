import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="users">
      </div>
    </div>
  )
}

export default Dashboard;