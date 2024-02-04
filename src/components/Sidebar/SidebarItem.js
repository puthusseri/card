import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarItem = ({ item, onClick, sidebarVisible }) => {
  return (
    <div 
      className={`sidebar-item ${sidebarVisible ? 'visible' : 'hidden'}`}
      onClick={() => onClick(item.name)}
      style={{ /* Add your CSS here */ }}
    >
      <FontAwesomeIcon icon={item.icon} style={{ marginRight: '10px' }} />
      <span className={`sidebar-item-text-${sidebarVisible ? 'visible' : 'hidden'}`} style={{ marginLeft: '10px' }}>{item.name}</span>

    </div>
  );
};

export default SidebarItem