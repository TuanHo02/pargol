/*
import React, { useState } from 'react';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import MFA from './components/MFA';
import Logout from './components/Logout';
import TwoFactorAuth from './components/TwoFactorAuth';
import UserActivityLogs from './components/UserActivityLogs';
import AdminConfig from './components/AdminConfig';
import UserNotification from './components/UserNotification';
import AdminDeactivation from './components/AdminDeactivation';
import BiometricAuth from './components/BiometricAuth';
import LockUserAccount from './components/LockUserAccount'; 
import MandatoryPasswordChange from './components/MandatoryPasswordChange'; 
import PasswordReset from './components/PasswordReset'; 
import './App.css';

const App = () => {
  const [view, setView] = useState('login');

  const renderView = () => {
    const views = {
      login: <Login setView={setView} />,
      'create-account': <CreateAccount setView={setView} />,
      'sign-up': <SignUp setView={setView} />,
      'reset-password': <ResetPassword setView={setView} />,
      mfa: <MFA setView={setView} />,
      logout: <Logout setView={setView} />,
      'two-factor-auth': <TwoFactorAuth setView={setView} />,
      'user-activity-logs': <UserActivityLogs setView={setView} />,
      'admin-config': <AdminConfig setView={setView} />,
      'user-notification': <UserNotification />,
      'admin-deactivation': <AdminDeactivation />,
      'biometric-auth': <BiometricAuth />,
      'lock-user-account': <LockUserAccount />, // Added Lock User Account
      'mandatory-password-change': <MandatoryPasswordChange />, // Added Password Change
      'password-reset': <PasswordReset />, // Added Password Reset
    };
    return views[view] || views.login; // Default to login
  };

  const handleNavigation = (targetView) => {
    setView(targetView);
  };

  return (
    <div className="app-container">
      <header className="navigation">
        <button onClick={() => handleNavigation('create-account')}>Create Account</button>
        <button onClick={() => handleNavigation('sign-up')}>Sign Up</button>
        <button onClick={() => handleNavigation('reset-password')}>Reset Password</button>
        <button onClick={() => handleNavigation('mfa')}>Multi-Factor Authentication</button>
        <button onClick={() => handleNavigation('logout')}>Log Out</button>
        <button onClick={() => handleNavigation('two-factor-auth')}>Enable Two-Factor Auth</button>
        <button onClick={() => handleNavigation('user-activity-logs')}>View User Activity Logs</button>
        <button onClick={() => handleNavigation('admin-config')}>Admin Config</button>
        <button onClick={() => handleNavigation('user-notification')}>User Notification</button>
        <button onClick={() => handleNavigation('admin-deactivation')}>Deactivate Authentication</button>
        <button onClick={() => handleNavigation('biometric-auth')}>Biometric Authentication</button>
        <button onClick={() => handleNavigation('lock-user-account')}>Lock User Account</button>
        <button onClick={() => handleNavigation('mandatory-password-change')}>Enforce Password Change</button> 
        <button onClick={() => handleNavigation('password-reset')}>Send Password Reset Link</button> 
      </header>
      <h1 className="headline">Welcome to Your Application</h1>
      <div className="view-container">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
*/

/*
// App.js
import React, { useState } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import './App.css';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <div className="app">
      {isAuthenticated ? (
        <HomePage setAuthenticated={setAuthenticated} />
      ) : (
        <LoginPage setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
};

export default App;
*/

// App.js
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import './App.css';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true); // User is now authenticated
  };

  const handleLogout = () => {
    setAuthenticated(false); // User is logged out
  };

  return (
    <div className="app">
      {isAuthenticated ? (
        <HomePage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
