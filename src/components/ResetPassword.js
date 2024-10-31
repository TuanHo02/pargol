import React, { useState } from 'react';

const ResetPassword = ({ setView }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log('Resetting password for:', email);
    setView('login'); // Redirect to login after resetting password
  };

  return (
    <form onSubmit={handleResetPassword}>
      <h2>Reset Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
