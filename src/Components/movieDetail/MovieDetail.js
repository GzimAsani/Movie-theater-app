import {useEffect,useState} from "react";
import img from "../../img/tenet.png";
import {useParams} from 'react-router-dom'
import Gallery from "./Gallery";
import { BiMovie } from "react-icons/bi";

import "./movieDetail.css";
import MovieSchedule from "./ScheduleList";

function MovieDetail() {

  const [movie,setMovie] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
   const fetchSingleMovie = async() => {
    setLoading(true);
    try{
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b93a64480573ce5248c28b200d79d029&language=en-US`);
      
      const movieData = await res.json();
      setMovie(movieData);
setLoading(false);

    }
    catch(err) {
      console.log(err);
  }
   }
   fetchSingleMovie();

  },[])

  return (
 
    (loading ? <h1>Loading</h1> : <div className="movieDetail-contanier">
    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
    <div className="movie">
      <h1>{movie.original_title}</h1>

      <h4>
        {movie.overview}
      </h4>

      <div className="movie-text">
        <p>
          <span className="movie-span">Starts</span> -{movie.release_date}
        </p>
        <p>
          <span className="movie-span">Duration of the film</span> - {movie.runtime}min
        </p>
        <p>
          <span className="movie-span">State</span> - USA{" "}
        </p>
        <p>
          <span className="movie-span">Genre</span>- {movie?.genres?.map(genre => (
           <span className="movie-genre" key={genre.id}>{genre.name},</span>
          ))}
        </p>
        <p>
          <span className="movie-span">Actors </span>-Aaron Taylor-Johnson,
          Robert Pattinson, Kenneth Branagh, Elizabeth Debicki, John David
          Washington
        </p>
      </div>

      <div className="line"></div>

      <h1>Gallery</h1>
      <Gallery />
      <MovieSchedule />
      <div className="movie-footer">
        <BiMovie className="movie-footer-icon" />
        <h1>Online Shopping Reservation</h1>
      </div>
    </div>
  </div>)
  );
}
export default MovieDetail;
