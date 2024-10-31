// HomePage.js
import React, { useState } from 'react';
import UserActivityLogs from './components/UserActivityLogs';
import AdminConfig from './components/AdminConfig';
import './App.css';

const HomePage = ({ onLogout }) => {
  const [mainView, setMainView] = useState('user-activity-logs');

  const renderMainView = () => {
    const mainViews = {
      'user-activity-logs': <UserActivityLogs />,
      'admin-config': <AdminConfig />,
    };
    return mainViews[mainView] || mainViews['user-activity-logs'];
  };

  return (
    <div className="app-container">
      <header className="navigation">
        <button onClick={() => setMainView('user-activity-logs')}>View User Activity Logs</button>
        <button onClick={() => setMainView('admin-config')}>Admin Config</button>
        <button onClick={onLogout}>Log Out</button>
      </header>
      <h1 className="headline">Welcome to Your Application</h1>
      <div className="view-container">{renderMainView()}</div>
    </div>
  );
};

export default HomePage;
