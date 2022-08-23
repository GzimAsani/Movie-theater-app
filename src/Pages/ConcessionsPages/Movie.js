import React from 'react'
import "./Movie.css"
import { useNavigate } from "react-router-dom"
import BookScreen from './BookScreen';

function Movie({id, name, image, data,month, overview, language}) {

   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   let navigate = useNavigate();
   return (
    <div className='movie-contanier'>
    <div className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}")`,
        backgroundPosition: "center center",
      }}
    >
      <h2 className='movie_title'>{name}</h2>


    
      <button className='movie-button' onClick={() => navigate(`../../${id}/movieDetail`)}>

        BOOK Ticket
      </button>

  
      </div>
    </div>
  )
}

export default Movie
