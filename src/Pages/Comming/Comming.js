import React from "react";
import CommingMovie from "../../Components/movieDetail/CommingMovie";
import Navbar from "../../Components/navbar/NavBar";
import Header from "../ConcessionsPages/Header";

function Booking() {
  return (
    <Navbar>
      <Header />
      <div className="Booking-contanier">
        <CommingMovie />
      </div>
    </Navbar>
  );
}
export default Booking;
