// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import ImageChooser from './Component/ImageChooser';
import TrackBankLoan from './Component/TrackBankLoan';
import UserDetails from './Component/useDetail';

const App = () => {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/SignUp" element={<SignUp/>}/>
              <Route exact path="/choose" element={<ImageChooser/>}/>
              <Route exact path="/TrackBankLoan" element={<TrackBankLoan/>}/>
              <Route exact path="/UserDetails" element={<UserDetails/>}/>

          </Routes>
      </Router>
    </>
  );
};

export default App;
