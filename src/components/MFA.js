import React from 'react';

const MFA = ({ setView }) => {
  return (
    <div>
      <h2>Multi-Factor Authentication</h2>
      <p>Multi-Factor Authentication (MFA) is currently enabled.</p>
      <button onClick={() => setView('login')}>Back to Login</button>
    </div>
  );
};

export default MFA;
