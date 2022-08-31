import React from 'react'
import { BiMovie } from "react-icons/bi";
import MovieSchedule from '../../Components/movieDetail/ScheduleList';
import "./Booking.css"


function Booking() {
  return (
    <div className='Booking-contanier'>
        <MovieSchedule/>
        <div className="movie-footer">
          <BiMovie className="movie-footer-icon" />
          <h1>Online Shopping Reservation</h1> 
         </div> 
    </div>
  )
}
export default Booking;