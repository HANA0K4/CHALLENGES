import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './challenge-12/LoginPage';
import { PrivateRoutes } from './challenge-12/PrivateRoutes';
import { UserProvider } from './challenge-12/UserProvider';
import { ProfilePage } from './challenge-12/ProfilePage';

export const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};