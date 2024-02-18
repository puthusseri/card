import React, { useState } from 'react';
import './Sidebar.css'


import { useTheme } from '../../ThemeContext';
import SidebarItem from './SidebarItem';

const Sidebar = ({ items, handleClick, sidebarVisible }) => {
  
  const { theme } = useTheme();
  console.log("theme: ", theme);
  return (
    
    <div className={`SidebarWrapper ${sidebarVisible ? 'visible' : 'hidden'} ${useTheme}`}>
      {items.map((item, index) => (
        <div key={index}>
          <SidebarItem item={item} onClick={handleClick} sidebarVisible={sidebarVisible}/>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
