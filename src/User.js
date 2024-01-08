import React, { useState, useEffect } from 'react';
import './User.css'; // Make sure to import your CSS file
import { setGlobalSound } from './soundUtils';





const User = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference in local storage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Update class on the body based on dark mode state
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);

    // Save preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const requestNotificationPermission = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          // Permission granted, you can now display notifications
          new Notification('Notifications Enabled', {
            body: 'You will now receive notifications.'
          });
        }
      });
    } else {
      // Notifications are already enabled
      new Notification('Notifications Already Enabled', {
        body: 'You are already receiving notifications.'
      });
    }
  };

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setGlobalSound(file);
  };

  return (
    <div className={`user ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="options-box">
        <h3 className="title">User Options</h3>

        <div className="dl-toggle">
          <h6>Dark Mode Toggle</h6>
          <button onClick={toggleDarkMode} className={`dark-button ${isDarkMode ? 'dark' : 'light'}`}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className='notifs'>
          <h6>Enable Notifications?</h6>
          {/* Change class based on isDarkMode */}
          <button onClick={requestNotificationPermission} className={`notification-button ${isDarkMode ? 'dark' : 'light'}`}>
            Enable Notifications
          </button>
        </div>

        <div className="sounds">
            <h6>Noitifcation Sound</h6> 
            <form className="sound-form">
            <input type="file" accept="audio/*" onChange={handleFileChange} />
            </form>
            <button>
            Enable Sound
          </button>
        </div>

      </div>
    </div>
  );
};

export default User;