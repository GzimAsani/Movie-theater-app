import React, { useState } from "react";
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
import { CartProvider } from "./ThemeContext";

const App = () => {
  const [route, setRoute] = useState("home");
  const [isSignedIn, setisSignedIn] = useState(false);
  const [name, setname] = useState("");
  const saveUsername = (username) => {
    const name = username;
    setname(name);
  };
  const onRouteChange = (route) => {
    if (route === "signout") {
      setisSignedIn(false);
    } else if (route === "home") {
      setisSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-contanier">
          <Header
            isSignedIn={isSignedIn}
            onRouteChange={onRouteChange}
            username={name}
          />
          {route === "home" || route === "signout" ? (
            <div>
              <Navbar>
                <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Movies/*" element={<Movies />} />
                  <Route path="/BookScreen" element={<BookScreen />} />
                  <Route path={`/:id/MovieDetail`} element={<MovieDetail />} />
                </Routes>
              </Navbar>
              <Footer />
            </div>
          ) : route === "login" ? (
            <Routes>
              <Route
                path="/Login"
                element={
                  <Login
                    onRouteChange={onRouteChange}
                    onSaveUserName={saveUsername}
                  />
                }
              />
            </Routes>
          ) : (
            <Routes>
              <Route
                path="/SignUp"
                element={<SignUp onRouteChange={onRouteChange} />}
              />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
