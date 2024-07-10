// layout/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  // Determine if the current route is the Shagun page
  const isShagunPage = location.pathname === '/shagun';

  return (
    <main className={isShagunPage ? 'shagun-content' : 'main-content'}>
      {children}
    </main>
  );
};

export default Layout;