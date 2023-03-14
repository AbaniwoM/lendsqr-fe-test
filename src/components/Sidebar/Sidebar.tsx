import React from 'react';
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SavingsIcon from '@mui/icons-material/Savings';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sideContainer">
       <div className="switch">
          <div className="sidebar-icon"><BusinessCenterIcon /></div>
          <h4>Switch Organization </h4>
          <div className="sidebar-icon"><KeyboardArrowDownIcon /></div>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><HomeIcon /></div>
          <h4>Dashboard</h4>
       </div>
       <h5>CUSTOMERS</h5>
       <div className="sidebar-item" onClick={() => navigate("/users")}>
          <div className="sidebar-icon"><GroupIcon /></div>
          <h4>Users</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><GroupsIcon /></div>
          <h4>Guarantors</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><CreditScoreIcon /></div>
          <h4>Loans</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><HandshakeIcon /></div>
          <h4>Decision Models</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><SavingsIcon /></div>
          <h4>Savings</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Loan Requests</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><PersonIcon /></div>
          <h4>Whitelist</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><PersonIcon /></div>
          <h4>Karma</h4>
       </div>
       <h5>BUSINESSES</h5>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Organization</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Loan Products</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Savings Products</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Fees and Charges</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Transactions</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Services</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Service Account</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Settlements</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Reports</h4>
       </div>
       <h5>SETTINGS</h5>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Preferences</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Fees and Pricing</h4>
       </div>
       <div className="sidebar-item">
          <div className="sidebar-icon"><RequestQuoteIcon /></div>
          <h4>Audit Logs</h4>
       </div>
    </div>
  )
}

export default Sidebar