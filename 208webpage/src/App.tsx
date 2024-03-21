import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import ProfilePage from './pages/ProfliePage';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;