import React from 'react';

const Logout = ({ setView }) => {
  const handleLogout = () => {
    console.log('Logging out...');
    setView('login'); // Redirect to login after logout
  };

  return (
    <div>
      <h2>Log Out</h2>
      <button onClick={handleLogout}>Confirm Logout</button>
    </div>
  );
};

export default Logout;
