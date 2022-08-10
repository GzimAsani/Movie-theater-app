import React from 'react';
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Conccesions" element={<Concessions />} />
     
        </Routes>
      </Navbar>
      <Footer />
    </BrowserRouter>
  );
};

export default App;