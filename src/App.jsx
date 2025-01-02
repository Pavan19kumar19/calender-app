import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginTabs from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginTabs />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
    </Routes>
  </Router>
);

export default App;
