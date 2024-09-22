import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./SignUp";
import Register from "./Register";
import Email from "./Email";
import Code from "./components/Code";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email" element={<Email />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </div>
  );
}

export default App;
