import React, { useState } from 'react';

const CreateAccount = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const existingAccount = accounts.find(account => account.email === email);

    if (existingAccount) {
      alert('Account with this email already exists!');
      return;
    }

    accounts.push({ email, password, twoFactorAuth });
    localStorage.setItem('accounts', JSON.stringify(accounts));
    setView('login');
  };

  return (
    <form onSubmit={handleCreateAccount}>
      <h2>Create Account</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <label>
        <input type="checkbox" checked={twoFactorAuth} onChange={() => setTwoFactorAuth(!twoFactorAuth)} />
        Enable Two-Factor Authentication
      </label>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccount;
