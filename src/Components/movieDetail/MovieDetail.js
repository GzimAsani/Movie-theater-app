import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import Navbar from "../navbar/NavBar";
import Header from "../../Pages/ConcessionsPages/Header";
import { AiFillHeart } from "react-icons/ai";

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
  }, [id]);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Navbar>
      <Header />
      <div className="movieDetail-contanier">
        <div
          className="banner1"
          style={{
            backgroundSize: "cover",
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5690651260504201) 0%, rgba(0,0,0,1) 100%),url("${movie.posterimg}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="details">
            <img className="banner ban" src={movie.movieimg} alt="" />
            <div>
              <h1 className="titulli1">{movie.title}</h1>
              <div className="rate">
                <div className="heart">
                  <AiFillHeart size={40} className="zemra" />
                  <h2>86%</h2>
                </div>
                <p>52.5K ratings...</p>
              </div>
              <div className="review">
                <h3>Add your rating & review</h3>
                <p>Your ratings matter</p>
                <button className="butoni1">Rate now</button>
              </div>
              <div className="details1">
                <button className="butoni1 butt">BOOK TICKET NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className="movie">
          <h1>ABOUT THE MOVIE</h1>
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
    </Navbar>
  );
}
export default MovieDetail;
