import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/Home/MainPage";
import Reservations from "./components/reservations/Reservations";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  );
}

export default App;
