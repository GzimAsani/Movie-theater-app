import React, { useContext } from "react";
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
import BookScreen from "./Pages/ConcessionsPages/BookScreen";
import Header from "./Pages/ConcessionsPages/Header";
import Booking from "./Pages/Booking/Booking";
import { AuthContext } from "./context/AuthContext";
import Profile from "./Pages/Profile/Profile";
import Comming from "./Pages/Comming/Comming";


const App = () => {
  const { user} = useContext(AuthContext);
  return (

    
    <BrowserRouter>
      <div className="app-contanier">
        <Navbar>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Comming" element={< Comming />} />
            <Route path="/Movies/*" element={<Movies />} />
            <Route path="/BookScreen" element={<BookScreen />} />
            <Route
              path={`/:id/MovieDetail`}
              element={user ? <MovieDetail /> : <Login />}
            />
            <Route path="/profile" element={user ? <Profile/> : <Login />}/>
            <Route path="/SignUp" element={user ? <Movies /> : <SignUp />} />
            <Route path="/Login" element={user ? <Movies /> : <Login />} />
          </Routes>
        </Navbar>
        <Footer />
      </div>
    </BrowserRouter>

  );
};

export default App;
