import React from 'react';
import "./Logo.scss";
const Union = require("../Images/Union.png");
const LogoImg = require("../Images/lendsqr.png");

const Logo = () => {
  return (
    <div className="logo">
        <img src={Union} alt="union_icon" className="unionImg"/>
        <img src={LogoImg} alt="lendsqr_logo" className="logoImg"/>
    </div>
  )
}

export default Logo;