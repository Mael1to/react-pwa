import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import './App.css' // ou "./index.css" si tu préfères

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
