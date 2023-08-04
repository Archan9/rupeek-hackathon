// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Component/Login';
import ImageChooser from './Component/ImageChooser';
import Dashboard from './Component/Dashboard';
import TrackBankLoan from './Component/TrackBankLoan';
import UserDetails from './Component/useDetail';
import './App.css';
import Profile from './Component/Profile';

const App = () => {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/choose" element={<ImageChooser/>}/>
              <Route exact path="/profile" element={<Dashboard/>}/>
              <Route exact path="/dashboard" element={<Profile/>}/>
              <Route exact path="/TrackBankLoan" element={<TrackBankLoan/>}/>
              <Route exact path="/UserDetails" element={<UserDetails/>}/>
          </Routes>
      </Router>
    </>
  );
};

export default App;
