import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};