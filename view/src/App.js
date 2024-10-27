
import { Route, Routes } from "react-router-dom";

import React from 'react';

import Header from "./components/Header";
import SignUp from "./SignUp";
import Register from "./Register";
import Email from "./components/Email";
import Code from "./components/Code";
import UserHome from "./UserHome";
import ResetPass from "./components/resetPass";
import RequireAuth from "./RequireAuth";
import FAQ from "./FAQ";
import Profile from "./profile";
import UserReservations from "./UserReservations";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email" element={<Email />} />
        <Route path="/code" element={<Code />} />
        <Route path="/" element={<UserHome />} />
        <Route path="/resetPass" element={<ResetPass />} />
        <Route path="/faq" element={<FAQ />} />
        {/* need account */}
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/userRese" element={<UserReservations />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;