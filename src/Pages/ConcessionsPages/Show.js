import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import "./Show.css"

function Show() {
    const API_KEY = "b93a64480573ce5248c28b200d79d029";
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([])
    const [searchTitle, setSearchTitle] = useState("");

      useEffect(()=>{   
        const movieData = async () => {
            setLoading(true);
           await fetch(
              `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
            ).then((response) => response.json()).then((data) => {
              setMovies(data.results);            });


            setLoading(false);
        }

        movieData();

    },[])

    return (
    <div className='nowshowing'>
    <input
        className='show-searchBar'
        type="text"
        placeholder="Search Movie"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className='nowshowing_movies'>
  
      {loading ? (
        <h4>Loading ...</h4> 
      ) : (
        movies
        .filter((value) => {
            if (!value.title) {
              return false
            }
            if (!searchTitle || searchTitle === "") {
              return true;
            }
            return value.title.toLowerCase().includes(searchTitle.toLowerCase())
          })
          .map((movie) =>
          <Movie
          key={movie.id}
          id={movie.id}
          name={movie.original_title || movie.title || movie.name} 
          image={movie.poster_path}
          date={movie.release_date}
          language={movie.original_language}
          overview={movie.overview}
          img={movie.backdrop_path}
          />
      )
      )}
      </div> 
    </div>
   )
}

export default Show
