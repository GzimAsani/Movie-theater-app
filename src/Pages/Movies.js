import React from "react";
import Body from "../Pages/ConcessionsPages/Body";
import { Route, Link, Routes } from "react-router-dom";

function Movies() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}></Route>
      </Routes> 
    </div>
  );
}

export default Movies;
