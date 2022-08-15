import React from "react";
import HomePage from "./Pages/HomePage";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/NavBar";
import Dashboard from "./Pages/Dashboard";
import Concessions from "./Pages/Concessions";
import Footer from "./Components/footer/Footer";
import MovieDetail from "./Components/movieDetail/MovieDetail";
import BookScreen from "./Pages/ConcessionsPages/BookScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Conccesions" element={<Concessions />} />
          <Route path="/movieDetail" element={<MovieDetail />} />
          <Route path="/BookScreen" element={<BookScreen />} />
        </Routes>
      </Navbar>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
