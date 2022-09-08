import React,{useState, useEffect} from 'react'
import { View } from './View';
import "./Homepages.css"

/*const getDatafromLS=()=>{
  const data = localStorage.getItem('movies');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}*/

export const App = () => {
  const [movies, setMovies]=useState(/*getDatafromLS()*/);

  /*const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  
  const [duration, setDuration]=useState('');*/

  const [Title, setTitle]=useState('');
  const [genre, setGenre]=useState('');
  const [description, setDescription]=useState('');
  const [relasedate, setRelasedate]=useState('');
  const [country, setCountry] =useState('');
  const [duration, setDuration] = useState('');
  const [isbn, setIsbn]=useState('');


  const handleAddMovieSubmit=(e)=>{
    e.preventDefault();

    let movie={
      Title,
      genre,
      description,
      relasedate,
      country,
      duration,
      isbn,
    }
    setMovies([...movies,movie]);
    setTitle('');
    setGenre('');
    setDescription('');
    setRelasedate('');
    setCountry('');
    setDuration('');
    setIsbn('');
  }

  const deleteMovie=(isbn)=>{
    const filteredMovies=movies.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setMovies(filteredMovies);
  }

 /* useEffect(()=>{
    localStorage.setItem('movies',JSON.stringify(movies));
  },[movies]) */

  useEffect((e) => {
     
      fetch("https://hidden-lowlands-43310.herokuapp.com/movies", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Title: e.target.value ,
          genre: e.target.value,
          description: e.target.value,
          relasedate:  e.target.value,
          country:  e.target.value,
          duration:  e.target.value,
          isbn:  e.target.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
         console.log(data)
        });
    
  }, [movies]);
  return (
    <div className='wrapper'>
      <div className='main'>

        <div className='form-container'>
          <h1>Add new movie</h1>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddMovieSubmit}>
           
            <input type="text"  placeholder='Title' className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={Title}></input>
            <br></br>
            
            <input type="text" placeholder='Genre' className='form-control' required
            onChange={(e)=>setGenre(e.target.value)} value={genre}></input>
            <br></br>
            <input type="text" placeholder='Description' className='form-control' required
            onChange={(e)=>setDescription(e.target.value)} value={description}></input>
            <br></br>
            <input type="text" placeholder='Country' className='form-control' required
            onChange={(e)=>setCountry(e.target.value)} value={country}></input>
            <br></br>
            <input type="text" placeholder='duration' className='form-control' required
            onChange={(e)=>setDuration(e.target.value)} value={duration}></input>
            <br></br>
            <input type="text" placeholder='relasedate' className='form-control' required
            onChange={(e)=>setRelasedate(e.target.value)} value={relasedate}></input>
            <br></br>


            <input type="text" placeholder='Time' className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br>
            
            <input type="date" placeholder='Date'  className='form-control-date' required
            onChange={(e)=>setIsbn(e.target.value)} value="2018-07-22"
            min="2018-01-01" max="2018-12-31"></input>
            <br></br>
            <button type="submit" className='button'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {movies.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>MOVIE</th>
                  </tr>
                </thead>
                <tbody>
                  <View    movies={movies} deleteMovie={deleteMovie}/>
                </tbody>
              </table>
            </div>
            <button className='button-one'
            onClick={()=>setMovies([])}>Remove All</button>
          </>}
          {movies.length < 1 && <div>No books are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App  
