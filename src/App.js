import React, { useContext } from "react";
import HomePage from "./Pages/HomePage";
import "./app.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Movies from "./Pages/Movies";
import Footer from "./Components/footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import MovieDetail from "./Components/movieDetail/MovieDetail";
import Booking from "./Pages/Booking/Booking";
import { AuthContext } from "./context/AuthContext";
import Profilpage from "./Pages/Profil/Profilpage";
import Home from "./Components/AdminpanelPages/home/Home";
import List from "./Components/AdminpanelPages/list/List";
import Single from "./Components/AdminpanelPages/single/Single";
import New from "./Components/AdminpanelPages/new/New";
import { productInputs, userInputs } from "./formSource";
import { movieColumns, userColumns } from "./datatablesource";

const App = ({ columns }) => {
  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/" />;
    } else if (!user.isadmin) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <div className="app-contanier">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Movies/*" element={<Movies />} />
          <Route
            path={`/:id/moviedetails`}
            element={user ? <MovieDetail /> : <Login />}
          />
          <Route path="/profile" element={user ? <Profilpage /> : <Login />} />
          <Route path="/SignUp" element={user ? <Movies /> : <SignUp />} />
          <Route path="/Login" element={user ? <Movies /> : <Login />} />
          <Route path="/admin">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userID"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="movies">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={movieColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":movieID"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={productInputs} title="ADD NEW MOVIE" />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
