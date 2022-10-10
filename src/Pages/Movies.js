import React from "react";
import Body from "../Pages/ConcessionsPages/Body";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/navbar/NavBar";
import Header from "./ConcessionsPages/Header";

function Movies({ checkLogin }) {
  return (
    <div>
      <Navbar>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default Movies;
