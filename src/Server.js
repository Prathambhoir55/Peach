import React from 'react';
import App from './App'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
// import '../fonts/CormorantGaramond-Medium.ttf'

import { Routes, Route } from 'react-router-dom'
function Server() {
  return (
      <>
        <Routes>
            <Route path='/signup'element={<SignUp/>}></Route>
            <Route path='/' element={<SignIn/>}></Route>
            <Route path='/home' element={<App/>}></Route>

        </Routes>
      </>
  );
}

export default Server;
