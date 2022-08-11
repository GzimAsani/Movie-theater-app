import "./scheduleList.css";
import { BiMovie } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { moviesSchedule } from "../../data/movieSchedules";
const MovieSchedule = () => {
  return (
    <section className="movie-schedule">
      <h1 className="movie-schedule-title">Time Schedule</h1>
      <div className="movie-schedule-container">
        <div className="movie-schedule-form">
          <div className="movie-schedule-form-select">
            <select>
              <option selected disabled>
                Please select a cinema
              </option>
              <option value="eagle-prishtina">Eagle Cinema Prishtina</option>
              <option value="eagle-gjilan">Eagle Cinema Gjilan</option>
              <option value="eagle peje">Eagle Cinema Peje</option>
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
