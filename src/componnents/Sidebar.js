// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Add some basic styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <NavLink to="/" exact="true" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Home
      </NavLink> */}
      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Dashboard
      </NavLink>
      <NavLink to="/other" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        other
      </NavLink>
    </div>
  );
};

export default Sidebar;
