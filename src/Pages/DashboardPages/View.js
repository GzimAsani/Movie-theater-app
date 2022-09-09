import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import "./View.css"

export const View = ({movies,deleteMovie}) => {
    
    return movies.map(movie=>(
        <div className='card'>
            
            <ul key={movie.isbn}>
               <div className='container'>
                <ul>
                
                <h3>{movie.title}</h3>
                <h5>{movie.genre}</h5>
                <p>{movie.description}</p>
                <p>{movie.duration}</p>
                <p>{movie.date}</p>
                <p>{movie.language}</p>
                </ul>
                 </div>
                <br></br>        
            </ul>   
           
                   <div>
          <p className='delete-btn' onClick={()=>deleteMovie(movie.isbn)}>Delete
                    <Icon icon={trash}/>
                </p> </div>
        </div> 
      

))
}