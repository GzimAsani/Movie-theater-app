import React from "react";
import Body from "../Pages/ConcessionsPages/Body";
import Header from "../Pages/ConcessionsPages/Header";
import Show from "../Pages/ConcessionsPages/Show";
import { Route, Link, Routes } from "react-router-dom";

function Movies() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}></Route>
      </Routes>

      <Header />
      <Show />
    </div>
  );
}

export default Movies;
