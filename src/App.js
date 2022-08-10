import React from "react";
import HomePage from "./Pages/HomePage";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/NavBar";
import Dashboard from "./pages/Dashboard";
import Concessions from "./pages/Concessions";
import Footer from "./Components/footer/Footer";
import MovieDetail from "./Components/movieDetail/MovieDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Conccesions" element={<Concessions />} />
          <Route path="/movieDetail" element={<MovieDetail />} />
        </Routes>
      </Navbar>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
