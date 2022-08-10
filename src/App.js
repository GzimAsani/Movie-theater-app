import React from 'react';
import HomePage from "./Pages/HomePage";
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Dashboard from './pages/Dashboard';
import Concessions from './pages/Concessions';
import Footer from "./Components/footer/Footer"


const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Conccesions" element={<Concessions />} />
          <Route path="/movieDetail" element ={<MovieDetail/>}/>
        </Routes>
      </Navbar>
      <Footer />
    </BrowserRouter>
  );
};

export default App;