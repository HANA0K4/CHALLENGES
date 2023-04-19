import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from  './UserContext';

export const LoginPage = () => {
  const { user, login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/private');
  };

  return (
    <div>
      <h1>Login Page</h1>
      {user ? (
        <div>
          <p>You are logged in as {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};





















