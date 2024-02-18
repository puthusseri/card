import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import { faHome, faUser, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import { useTheme } from '../../ThemeContext';
function Home() {
  const [activeComponent, setActiveComponent] = useState('Profile');
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const handleClick = (itemName) => {
    setActiveComponent(itemName);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleThemes = () => { // Function to toggle theme
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  const items = [
    { name: 'Profile', icon: faUser, component: <Profile /> },
    { name: 'Contact', icon: faHome, component: <Contact /> },
    { name: 'Dummy Profile', icon: faHome, component: <Profile /> },
  ];

  return (
    <div className={`home ${theme}`}>
      <div className="toggle-button-container" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
      </div>
      
      {/* Sidebar */}
      <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
        <Sidebar items={items} handleClick={handleClick} sidebarVisible={sidebarVisible} />
        <div className="theme-toggle-container" onClick={toggleThemes}> 
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="theme-icon" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className='mainPage'>
        {items.find((item) => item.name === activeComponent)?.component}
      </div>
    </div>
  );
}

export default Home;
