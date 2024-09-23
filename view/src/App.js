
import { Route, Routes } from "react-router-dom";

import React from 'react';

import Header from "./components/Header";
import SignUp from "./SignUp";
import Register from "./Register";
import Email from "./components/Email";
import Code from "./components/Code";
import UserHome from "./UserHome";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email" element={<Email />} />
        <Route path="/code" element={<Code />} />
        <Route path="/userHome" element={<UserHome/>}/>
      </Routes>
    </div>
  );
}

export default App;
