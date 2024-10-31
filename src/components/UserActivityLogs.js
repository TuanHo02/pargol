import React from 'react';

const UserActivityLogs = ({ setView }) => {
  const activityLogs = [
    'User logged in',
    'User created an account',
    'User reset password',
    'User logged out',
  ];

  return (
    <div>
      <h2>User Activity Logs</h2>
      <ul>
        {activityLogs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
      <button onClick={() => setView('admin-config')}>Back to Admin Config</button>
    </div>
  );
};

export default UserActivityLogs;
