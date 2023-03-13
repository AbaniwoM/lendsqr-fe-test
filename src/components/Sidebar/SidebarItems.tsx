import React from 'react';
import "./SidebarItems.scss";

interface SidebarItemsProps {
    img_src: string;
    text: string;
}

const SidebarItems = ({ img_src, text }: SidebarItemsProps) => {
  return (
    <div className="item-container">
        <img 
          src= {img_src} 
          alt= {text + "img"}
        />
        <div className="texts">{text}</div>
    </div>
  )
}

export default SidebarItems