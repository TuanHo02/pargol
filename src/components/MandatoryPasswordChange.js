// src/components/MandatoryPasswordChange.js
import React from 'react';

const MandatoryPasswordChange = () => {
  const handleChangePassword = () => {
    // Logic to enforce password change
    alert('Password change enforced due to security incident.');
  };

  return (
    <div>
      <h2>Mandatory Password Change</h2>
      <button onClick={handleChangePassword}>Enforce Password Change</button>
    </div>
  );
};

export default MandatoryPasswordChange;
