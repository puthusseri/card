import React from 'react';
import './Profile.css';
import { useTheme } from '../../ThemeContext';
function Profile() {
  const userProfile = {
    name: "Vyshak Puthusseri",
    jobTitle: "Member Technical Staff",
    companyName: "Zoho",
    bio: "A human, who loves solving uncertainty.",
    imageUrl: "https://avatars.githubusercontent.com/u/33171828?s=400&u=d952d6a538625f4292e6cc60e6958f2cd4999f0f&v=4",
    aboutMe : "I'm Vyshak, a developer from Kerala, India.",
  };
  const { theme } = useTheme();

  return (
    <div className="profile-container">
      <div className="profile-card">
      <div className="profile-image-container">
          <img src={userProfile.imageUrl} alt="Profile" />
          <div className={`circular-overlay ${theme === 'light' ? 'visible' : 'hidden'}`}></div>
        </div>
        <div className="profile-details">
          <div className="profile-info">
            <center>
              <h2>{userProfile.name}</h2>
              <h5>{userProfile.jobTitle}, {userProfile.companyName}</h5>
              <p>{userProfile.bio}</p>
            </center>
          </div>
          
        </div>
      </div>
      <div className="profile-aboutMe">
        <h3>Let me introduce myself</h3>
        <p>{userProfile.aboutMe}</p>
      </div>
    </div>
  );
}

export default Profile;
