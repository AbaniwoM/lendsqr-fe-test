import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./User.scss";
import UserCard from './UserCard';
import UserTable from './UserTable';
const useImg = require("../../components/Images/boy.png");
const activeImg = require("../../components/Images/man.png");
const loanImg = require("../../components/Images/folder.png");
const saveImg = require("../../components/Images/coins.png");

const User = () => {
  return (
    <div className="userContainer">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="users">
        <h2>Users</h2>
        <div className="user-cards">
          <UserCard img={useImg} desc={"USERS"} count={2453} />
          <UserCard img={activeImg} desc={"ACTIVE USERS"} count={2453} />
          <UserCard img={loanImg} desc={"USERS WITH LOANS"} count={12453} />
          <UserCard img={saveImg} desc={"USERS WITH SAVINGS"} count={102453} />
        </div>
        <UserTable />
      </div>
    </div>
  )
}

export default User;