import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./SignUp";
import Register from "./Register";
import Email from "./Email";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </div>
  );
}

export default App;
