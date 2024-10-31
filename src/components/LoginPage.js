// LoginPage.js
import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import MFA from './components/MFA';
import './App.css';

const LoginPage = ({ onLogin }) => {
  const [authView, setAuthView] = useState('login');

  const renderAuthView = () => {
    const authViews = {
      login: <Login onLogin={onLogin} setView={setAuthView} />,
      'sign-up': <SignUp setView={setAuthView} />,
      'reset-password': <ResetPassword setView={setAuthView} />,
      mfa: <MFA setView={setAuthView} />,
    };
    return authViews[authView] || authViews.login;
  };

  return (
    <div className="auth-container">
      <header className="auth-navigation">
        <button onClick={() => setAuthView('login')}>Login</button>
        <button onClick={() => setAuthView('sign-up')}>Sign Up</button>
        <button onClick={() => setAuthView('reset-password')}>Reset Password</button>
      </header>
      <h1 className="headline">Welcome to Authentication</h1>
      <div className="auth-view-container">{renderAuthView()}</div>
    </div>
  );
};

export default LoginPage;
