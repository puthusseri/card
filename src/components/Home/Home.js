import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import { faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';

function Home() {
  const [activeComponent, setActiveComponent] = useState('Contact');
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleClick = (itemName) => {
    setActiveComponent(itemName);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const items = [
    { name: 'Contact', icon: faHome, component: <Contact /> },
    { name: 'Profile', icon: faUser, component: <Profile /> },
  ];

  return (
    <div className='home'>
      <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
        <div className={`toggle-button-container ${sidebarVisible ? 'visible' : 'hidden'}`} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
        </div>
        <Sidebar items={items} handleClick={handleClick} sidebarVisible={sidebarVisible} />
      </div>
      <div className='mainPage'>
        {items.find((item) => item.name === activeComponent)?.component}
      </div>
    </div>
  );
}

export default Home;
