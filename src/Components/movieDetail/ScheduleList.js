import "./scheduleList.css";
import { BiMovie } from "react-icons/bi";
import {useState} from 'react';
import { FaChevronDown } from "react-icons/fa";
import { moviesSchedule } from "../../data/movieSchedules";
const MovieSchedule = () => {
  const [selectValue,setSelectValue]= useState("");

const handleSelectValue = e => {
  setSelectValue(e.target.value);
}

  return (
    <section className="movie-schedule">
      <h1 className="movie-schedule-title">Time Schedule</h1>
      <div className="movie-schedule-container">
        <div className="movie-schedule-form">
          <div className="movie-schedule-form-select">
            <select  defaultValue="default" onChange={handleSelectValue}>
              <option value="default">Please select a day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>
          <h2>Eagles Cinema Prishtina</h2>
        </div>
        <div className="movie-schedule-info">
          {moviesSchedule.map((movie) => (
            <div key={movie.id} className="movie-schedule-item">
              <div className="movie-item-date">
                <h3>{movie.days}</h3>
                <p>{movie.date}</p>
              </div>
              <div className="movie-item-time">
                <h3>
                  {movie.time} <BiMovie className="movie-icon" />
                </h3>
                <p>{movie.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSchedule;
