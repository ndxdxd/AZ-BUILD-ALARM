import React, { useState, useEffect } from 'react';

const AutoRefresh = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(true);
      window.location.reload();
    }, 50000); // Refresh every 50 seconds for testing

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loaded ? (
        <div>
        </div>
      ) : null}
    </div>
  );
};

export default AutoRefresh;