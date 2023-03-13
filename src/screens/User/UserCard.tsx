import React from 'react';
import "./UserCard.scss";

interface UserCardProps {
    img: string;
    desc: string;
    count: number;
}

const UserCard = ({ img, desc, count}: UserCardProps) => {
  return (
    <div className="userCard">
        <div className="userImg">
           <img src={img} alt={"img"} />
        </div>
        <div className="userDesc">{desc}</div>
        <div className="userCount">{count}</div>
    </div>
  )
}

export default UserCard;