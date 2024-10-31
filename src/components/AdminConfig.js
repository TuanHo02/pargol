import React from 'react';

const AdminConfig = ({ setView }) => {
  const handleConfig = () => {
    console.log('Configuring authentication policies...');
  };

  return (
    <div>
      <h2>Admin Configuration</h2>
      <button onClick={handleConfig}>Configure Authentication Policies</button>
      <button onClick={() => setView('login')}>Back to Login</button>
    </div>
  );
};

export default AdminConfig;
