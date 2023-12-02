import React, { useEffect } from 'react';

function Success() {
  useEffect(() => {
    // Clean up the confetti effect after 3 seconds
    const timer = setTimeout(() => {
      // Perform any necessary cleanup here
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Success!</h1>
      <h1>Artwork has been Purchased</h1>
    </div>
  );
}

export default Success;
