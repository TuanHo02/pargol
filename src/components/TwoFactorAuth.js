import React, { useEffect, useState } from 'react';

const TwoFactorAuth = ({ setView, currentUser }) => {
  const [enabled, setEnabled] = useState(currentUser.twoFactorAuth);

  useEffect(() => {
    setEnabled(currentUser.twoFactorAuth);
  }, [currentUser]);

  const handleToggle = () => {
    setEnabled(!enabled);
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const accountIndex = accounts.findIndex(acc => acc.email === currentUser.email);

    if (accountIndex > -1) {
      accounts[accountIndex].twoFactorAuth = !enabled; // Toggle 2FA
      localStorage.setItem('accounts', JSON.stringify(accounts));
    }
    console.log(`Two-Factor Authentication is now ${enabled ? 'disabled' : 'enabled'}`);
  };

  return (
    <div>
      <h2>Two-Factor Authentication</h2>
      <button onClick={handleToggle}>
        {enabled ? 'Disable' : 'Enable'} Two-Factor Authentication
      </button>
      <button onClick={() => setView('main')}>Back to Main</button>
    </div>
  );
};

export default TwoFactorAuth;
