// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./componnents/Layout.js"
import Home from "./pages/Home.js"
import DashboardPage from './pages/Dasboard.js'
import Login from './pages/Login.js';
import ProtectedRoute from './componnents/ProtectedRoute.js';
const App = () => {
  const [isAuth, setAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
