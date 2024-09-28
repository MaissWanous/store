
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
import PersistLogin from "./context/persistLogin";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email" element={<Email />} />
        <Route path="/code" element={<Code />} />
        {/* <Route element={<PersistLogin />}> */}
        <Route element={<RequireAuth />}>
          <Route path="/userHome" element={<UserHome />} />
        </Route>
        {/* </Route> */}
        <Route path="/resetPass" element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
