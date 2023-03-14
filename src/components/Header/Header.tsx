import React from 'react';
import Logo from '../Logo/Logo';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Header.scss";
import ProfileDropdown from './ProfileDropdown';
import Hamburger from './Hamburger';

const Header = () => {
    return (
    <div className="headerContainer">
        <div className="logo">
            <Logo />
        </div>
        <div className="search">
            <input placeholder="Search for anything" type="search" />
            <button>
                <SearchOutlinedIcon />
            </button>
        </div>
        <div className="details">
            <h4>Docs</h4>
            <NotificationsOutlinedIcon />
            <AccountCircleOutlinedIcon />
            <div className="userName">User</div>
            <div className="drop-down">
                <ProfileDropdown />
            </div>
        </div>
        <div className="hamburger">
            <Hamburger />
        </div>
    </div>
  )
}

export default Header;