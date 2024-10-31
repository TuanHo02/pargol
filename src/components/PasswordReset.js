// src/components/PasswordReset.js
import React from 'react';

const PasswordReset = () => {
  const handlePasswordReset = () => {
    // Logic to send password reset link
    alert('Password reset link sent to email.');
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <button onClick={handlePasswordReset}>Send Password Reset Link</button>
    </div>
  );
};

export default PasswordReset;
