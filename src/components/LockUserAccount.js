// src/components/LockUserAccount.js
import React from 'react';

const LockUserAccount = () => {
  const handleLockAccount = () => {
    // Logic to lock account
    alert('User account locked after multiple failed attempts.');
  };

  return (
    <div>
      <h2>Lock User Account</h2>
      <button onClick={handleLockAccount}>Lock Account</button>
    </div>
  );
};

export default LockUserAccount;
