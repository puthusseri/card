import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import { faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';

function Home() {
  const [activeComponent, setActiveComponent] = useState('Profile');
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleClick = (itemName) => {
    setActiveComponent(itemName);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const items = [
    { name: 'Profile', icon: faUser, component: <Profile /> },
    { name: 'Contact', icon: faHome, component: <Contact /> },
    { name: 'Dummy Profile', icon: faHome, component: <Profile /> },
  ];

  return (
    <div className='home'>
      {/* Toggle Button - Always Visible */}
      <div className="toggle-button-container" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
      </div>
      
      {/* Sidebar */}
      <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
        <Sidebar items={items} handleClick={handleClick} sidebarVisible={sidebarVisible} />
      </div>
      
      {/* Main Content */}
      <div className='mainPage'>
        {items.find((item) => item.name === activeComponent)?.component}
      </div>
    </div>
  );
}

export default Home;
