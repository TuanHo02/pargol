// src/components/AdminDeactivation.js
import React from 'react';

const AdminDeactivation = () => {
  const handleDeactivate = () => {
    // Logic for deactivating authentication
    alert('Authentication has been deactivated.');
  };

  return (
    <div>
      <h2>Admin Deactivation</h2>
      <button onClick={handleDeactivate}>Deactivate Authentication</button>
    </div>
  );
};

export default AdminDeactivation;
