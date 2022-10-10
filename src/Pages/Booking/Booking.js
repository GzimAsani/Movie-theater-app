import React from "react";
import { BiMovie } from "react-icons/bi";
import MovieSchedule from "../../Components/movieDetail/ScheduleList";
import "./Booking.css";
import Navbar from "../../Components/navbar/NavBar";
import Header from "../ConcessionsPages/Header";

function Booking() {
  return (
    <Navbar>
      <Header />
      <div className="Booking-contanier">
        <MovieSchedule />
        <div className="movie-footer">
          <BiMovie className="movie-footer-icon" />
          <h1>Online Shopping Reservation</h1>
        </div>
      </div>
    </Navbar>
  );
}
export default Booking;
