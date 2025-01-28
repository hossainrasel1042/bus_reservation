import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router';

import Home from './assets/Pages/Home';
import Login from './assets/Pages/Login';
import Register from './assets/Pages/Register';
import Overview from './assets/Pages/Overview';
import MyBookings from './assets/Pages/MyBookings';
import Booking from './assets/Pages/Booking';
import Setting from './assets/Pages/Setting';
import User from './assets/Pages/User'; // Import the new UserDashboard component
import ForgotPassword from './assets/Pages/ForgotPassword';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component for root path */}
        <Route path="/user" element={<User/>}> {/* UserDashboard as parent for /user routes */}
          <Route path="overview" element={<Overview />} />
          <Route path="booking" element={<Booking />} />
          <Route path="mybooking" element={<MyBookings />} />
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword/>} />

      </Routes>
  );
};

export default App;