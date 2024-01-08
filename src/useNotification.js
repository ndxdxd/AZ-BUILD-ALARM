// useNotification.js
import { useEffect } from 'react';

const useNotification = () => {
  const checkForNotifications = () => {
    // Fetch the most recent insert from your backend
    fetch('/recentItem')
      .then(response => response.json())
      .then(recentItem => {
        // Process the recentItem and trigger a notification if needed
        if (recentItem !== null) {
          // Check and request notification permission if needed
          if (Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
              if (permission === 'granted') {
                // Call checkForNotifications again after permission is granted
                checkForNotifications();
              }
            });
          } else if (Notification.permission === 'granted') {
            // Example: Show a browser notification
            new Notification('New Entry', {
              body: `New entry added: ${JSON.stringify(recentItem)}`,
              icon: 'icon.png' // Replace with your icon URL
            });
          }
        }
      })
      .catch(error => {
        console.error('Error fetching recent item:', error);
      });
  };

  useEffect(() => {
    // Check for notifications on a specific interval
    const interval = setInterval(checkForNotifications, 50000); // Adjust the interval as needed
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
};

export default useNotification;