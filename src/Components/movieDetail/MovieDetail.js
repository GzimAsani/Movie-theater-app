import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import { BiMovie } from "react-icons/bi";

import "./movieDetail.css";
import MovieSchedule from "./ScheduleList";

function MovieDetail() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleMovie = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://hidden-lowlands-43310.herokuapp.com/${id}/movies`
        );

        const movieData = await res.json();
        setMovie(movieData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleMovie();
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="movieDetail-contanier">
      <img src={movie.posterimg} />
      <div className="movie">
        <h1>{movie.title}</h1>
        <h4>{movie.description}</h4>
        <div className="movie-text">
          <p>
            <span className="movie-span">Release Date </span> -{" "}
            {movie.releasedate}
          </p>
          <p>
            <span className="movie-span">Duration of the film</span> -{" "}
            {movie.duration}min
          </p>
          <p>
            <span className="movie-span">State</span> - {movie.country}
          </p>
          <p>
            <span className="movie-span">Genre</span> - {movie.genre}
          </p>
        </div>
        <div className="line"></div>
        <MovieSchedule />
        <div className="movie-footer">
          <BiMovie className="movie-footer-icon" />
          <h1>Online Shopping Reservation</h1>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
