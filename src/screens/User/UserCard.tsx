import React from 'react';
import "./UserCard.scss";

interface UserCardProps {
    img: string;
    desc: string;
    count: number;
}

const UserCard = ({ img, desc, count}: UserCardProps) => {
  return (
    <div className="userCard" data-testid="userCard-1">
        <div className="userImg" data-testid="userImg-1">
           <img src={img} alt={"img"} />
        </div>
        <div className="userDesc" data-testid="userDesc-1">{desc}</div>
        <div className="userCount" data-testid="userCount-1">{count}</div>
    </div>
  )
}

export default UserCard;