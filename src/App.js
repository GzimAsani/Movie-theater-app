import React from "react";
import HomePage from "./Pages/HomePage";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/NavBar";
import Dashboard from "./Pages/Dashboard";
import Movies from "./Pages/Movies";
import Footer from "./Components/footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import MovieDetail from "./Components/movieDetail/MovieDetail";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-contanier">
      <Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/MovieDetail" element={<MovieDetail/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Navbar>
      <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
