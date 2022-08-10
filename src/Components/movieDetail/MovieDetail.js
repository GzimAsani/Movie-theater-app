import React from 'react'
import img from '../../img/tenet.png'
import './movieDetail.css'

 function MovieDetail() {
  return (
    <div className='movieDetail-contanier'>
        <img src={img}/>
        <div className='movie'>
            <h1>Tenet</h1>
           
            <h4>A secret agent is given a single word as his weapon and sent to prevent the onset of World War III.<br/>
                He must travel through time and bend the laws of nature in order to be successful in his mission</h4>
      
         
            <div className='movie-text'>
            <p><span className='movie-span'>Starts</span> - 01.10.2020 </p>
            <p><span className='movie-span'>Duration of the film</span> - 150 min </p>
            <p><span className='movie-span'>State</span> - USA </p>
            <p><span className='movie-span'>Genre</span>-Action, Drama, Thriller</p>
            <p><span className='movie-span'>Actors </span>-Aaron Taylor-Johnson, Robert Pattinson, Kenneth Branagh, Elizabeth Debicki, John David Washington</p>
            </div> 
            
            <div className='line'></div>

            <h1>Gallery</h1>
        </div>
     </div>
  )
}
export default MovieDetail;