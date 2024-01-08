import './App.css';
import System from "./System.js"
import About from "./About.js"
import User from "./User.js"
import 'bootstrap/dist/css/bootstrap.css'
import {Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { NavBarBootstrap } from './navbarBS.js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getGlobalSound } from './soundUtils';
/*The image src is currently temporary */
/*System logs page will be considered the home page with both the logs + status
  User Options will allow users to modify light/dark mode on the website?
  About us is self explanatory
*/
const playSound = () => {
  const selectedSound = getGlobalSound();

  if (selectedSound) {
    const audio = new Audio();
    audio.src = selectedSound; // Use the base64 string as source
    audio.play();
  }
};

function App() {
  let userInteracted = false;

document.addEventListener('click', () => {
  userInteracted = true;
  console.log('User interacted with the page.');
});
  const [recentEntry, setRecentEntry] = useState(null);
  let prev = 3;
  const savedPrev = localStorage.getItem('savedPrev');
  if (savedPrev){
    prev = savedPrev
  }

  
  const displayNotification = (lockStatus) => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          // Permission granted, you can now display notifications
          new Notification('ask', {
            body: 'You will now receive notifications.'
          });
        }
      });
    } else {
      playSound();
      


      // Notifications are already enabled
      let notificationMessage = '';

      // Determine the message based on lock status
      if (lockStatus === 0) {
        notificationMessage = 'Your lock has been opened';
      } else if (lockStatus === 1) {
        notificationMessage = 'Your lock has been closed';
      }

      if (notificationMessage !== '') {

        new Notification('Change in lock status!', {
          body: notificationMessage
        });
      }
    }
  };

  const fetchRecentEntry = async () => {
      try {
          const response = await axios.get('/api/alarmStatus/recentInsert'); // Endpoint to get recent entry
          setRecentEntry(response.data);
          
          console.log(response)
          // Process recent entry or trigger notification here
          const status = response.data.alarmStatus.lockedStatus

          console.log(status)
          
          if (status != prev){
            localStorage.setItem('savedPrev', JSON.stringify(status));
            prev = status
            displayNotification(status)
          }
        
          

          

      } catch (error) {
          console.error('Error fetching recent entry:', error);
      }
  };

  useEffect(() => {
      const interval = setInterval(() => {
          fetchRecentEntry();
      }, 5000); // Polling interval in milliseconds (e.g., every 5 seconds)

      return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  
  return (
    
    <BrowserRouter>
      
      <NavBarBootstrap/>
      <Routes>
        <Route path="/" element={<System />} />
        <Route path="/System" element ={<System />}/>
        <Route path="/About" element ={<About />}/>
        <Route path="/User" element ={<User />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;