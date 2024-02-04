import React, { useState } from 'react';
import './Sidebar.css'

import SidebarItem from './SidebarItem';

const Sidebar = ({ items, handleClick, sidebarVisible }) => {
  return (
    <div className={`SidebarWrapper ${sidebarVisible ? 'visible' : 'hidden'}`}>
      {items.map((item, index) => (
        <div key={index}>
          <SidebarItem item={item} onClick={handleClick} sidebarVisible={sidebarVisible}/>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
