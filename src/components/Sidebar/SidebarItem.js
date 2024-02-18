import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../ThemeContext';
const SidebarItem = ({ item, onClick, sidebarVisible }) => {
  const { theme } = useTheme();
  return (
    <div>

    <div 
      className={`sidebar-item ${sidebarVisible ? 'visible' : 'hidden'} ${theme}`}
      onClick={() => onClick(item.name)}
      style={{ /* Add your CSS here */ }}
      >
      <FontAwesomeIcon icon={item.icon} style={{ marginRight: '10px' }} />
      <span className={`sidebar-item-text-${sidebarVisible ? 'visible' : 'hidden'}`} style={{ marginLeft: '10px' }}>{item.name}</span>

      </div>
    </div>
  );
};

export default SidebarItem