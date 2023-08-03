// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import ImageChooser from './Component/ImageChooser';

const App = () => {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/SignUp" element={<SignUp/>}/>
              <Route exact path="/choose" element={<ImageChooser/>}/>
          </Routes>
      </Router>
    </>
  );
};

export default App;
