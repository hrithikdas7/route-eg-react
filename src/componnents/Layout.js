// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'
const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
