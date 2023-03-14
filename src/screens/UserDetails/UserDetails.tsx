import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import DetailsTable from './DetailsTable';
import "./UserDetails.scss";

const UserDetails = () => {
  return (
    <div className="userDetailsContainer">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="userDetails">
        <DetailsTable />
      </div>
    </div>
  )
}

export default UserDetails;