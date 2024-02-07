// layout/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
      <main className="main-content">{children}</main>
  );
};

export default Layout;