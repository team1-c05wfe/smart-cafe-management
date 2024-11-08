import { Routes, Route, Navigate } from "react-router-dom";
import {Login} from "./component/Login";
import {Register} from "./component/Register";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
