import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";

function MovieDetail() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleMovie = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://hidden-lowlands-43310.herokuapp.com/api/movies/${id}`
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
      <img alt="posteri" src={movie.posterimg} />
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
      </div>
    </div>
  );
}
export default MovieDetail;
