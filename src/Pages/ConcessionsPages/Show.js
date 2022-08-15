import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import "./Show.css"


function Show() {
    const API_KEY = "b93a64480573ce5248c28b200d79d029";
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        const movieData = async () => {
            await fetch(
              `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
            ).then((response) => response.json()).then((data) => setMovies(data.results));
        }
        movieData();
    },[])
    console.log("",movies)


   return (
    <div className='nowshowing'>
        <h1></h1>
        <div className='nowshowing_movies'>
            {movies.map((movie, i) => (
                <Movie
                key={movie.id}
                name={movie.original_title || movie.title || movie.name} 
                image={movie.poster_path}
                date={movie.release_date}
                language={movie.original_language}
                overview={movie.overview}
                img={movie.backdrop_path}
            />
            ))}
        </div>
    </div>
   )
}

export default Show
