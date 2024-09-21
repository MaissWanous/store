
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import React from 'react';

import SignUp from "./SignUp";
import Register from "./Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
