import React, { useEffect } from 'react'
import "./MovieTwo.css"
import { useNavigate } from "react-router-dom"


function MovieTwo({key, name, image, data, month, overview, language, onDelete}) {
 
  
   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   let navigate = useNavigate();

   return (
    
    <div className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}")`,
        backgroundPosition: "center center",
      }}
    >
      <h2 className='movie_title'>{name}</h2>
    <div className='buttons'>
      <button className='edit-button'>
        EDIT
      </button>
      <button className='delete-button' onClick={onDelete}>
        DELETE
      </button>

  </div>
    </div>
  )
}

export default MovieTwo