import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { FaChevronDown } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import { MdOutlineMovieFilter } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import "./Show.css";
const genres = [
  "Action",
  "Horror",
  "Sci-Fi",
  "Drama",
  "Thriller",
  "Fantasy",
  "Romance",
  "Comedy",
];
function Show() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchtitle, setSearchTitle] = useState("");
  const [filteredMovies, setFilteredMovie] = useState([]);
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const handleGenre = (e) => {
    setGenre(e.target.value);
    const filterMoviesByGenre = filteredMovies.filter((movie) =>
      movie.genre.includes(e.target.value)
    );
    if (filterMoviesByGenre.length > 0) {
      setMovies(filterMoviesByGenre);
    } else {
      setMovies(filteredMovies);
    }
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    const filterMoviesByDate = filteredMovies.filter(
      (movie) =>
        new Date(movie.releasedate).toISOString().substring(0, 10) ===
        e.target.value
    );
    if (filterMoviesByDate.length > 0) {
      setMovies(filterMoviesByDate);
    } else {
      setMovies(filteredMovies);
    }
  };

  useEffect(() => {
    const movieData = async () => {
      setLoading(true);
      await fetch("https://hidden-lowlands-43310.herokuapp.com/api/movies")
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setFilteredMovie(data);
        });

      setLoading(false);
    };

    movieData();
  }, []);

  return (
    <div className="nowshowing">
      <div className="nowshowing-form">
        <div className="nowshowing-form-select">
          <AiFillCalendar className="nowshowing-customIcon" />
          <select value={date} onChange={handleDate}>
            <option value="" selected disabled>
              {" "}
              Select Date
            </option>
            <option value="2022-05-24">May 24, 2022</option>
            <option value="2022-08-03">August 3, 2022</option>
            <option value="2022-08-19">August 19, 2022</option>
            <option value="2022-08-26">August 26, 2022</option>
            <option value="2022-08-30">August 30, 2022</option>
          </select>
          <FaChevronDown className="select-icon" />
        </div>
        <div className="nowshowing-search">
        <input
          className="nowshowing-searchBar"
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
        <div className="nowshowing-form-select">
          <MdOutlineMovieFilter className="nowshowing-customIcon" />
          <select onChange={handleGenre} value={genre}>
            <option value="" selected disabled>
              Select a Genre
            </option>
            {genres.map((genre, i) => (
              <option key={i} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <FaChevronDown className="select-icon" />
        </div>
      </div>
      
      <div className="nowshowing_movies">
        {loading ? (
          <ClipLoader color={" #ff8e3c"} loading={loading} size={50} />
        ) : (
          movies
            .filter((value) => {
              if (!value.title) {
                return false;
              }
              if (!searchtitle || searchtitle === "") {
                return true;
              }
              return value.title
                .toLowerCase()
                .includes(searchtitle.toLowerCase());
            })
            .map((movie) => (
              <Movie
                key={movie.movieid}
                id={movie.movieid}
                name={movie.title}
                image={movie.movieimg}
                date={movie.releasedate}
                language={movie.movielanguage}
                overview={movie.description}
                img={movie.movieimg}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default Show;
