
import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Login from "./components/login";
import Signup from "./components/signup";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
       
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/profile" element={<Profile/>}/>
        <Route path="/forgotpassowrd" element={<Forgotpassord/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
