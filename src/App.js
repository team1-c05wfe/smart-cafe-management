import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/partial/Header';
import { Home } from './pages/client/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
