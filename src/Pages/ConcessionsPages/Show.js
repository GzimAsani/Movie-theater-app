import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./Show.css";

function Show() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchtitle, setSearchTitle] = useState("");

  useEffect(() => {
    const movieData = async () => {
      setLoading(true);
      await fetch("https://hidden-lowlands-43310.herokuapp.com/movies")
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
        });

      setLoading(false);
    };

    movieData();
  }, []);

  return (
    <div className="nowshowing">
      <input
        className="show-searchBar"
        type="text"
        placeholder="Search Movie"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className="nowshowing_movies">
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          movies
            .filter((value) => {
              if (!value.title) {
                return false;
              }
              if (!searchtitle || searchtitle === "") {
                return true;
              }
              return value.title.toLowerCase().includes(
                searchtitle.toLowerCase()
              );
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
