import React,{useState, useEffect} from 'react'
import { View } from './View';
import "./Homepages.css"

const getDatafromLS=()=>{
  const data = localStorage.getItem('movies');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {
  const [movies, setMovies]=useState(getDatafromLS());

  /*const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  
  const [duration, setDuration]=useState('');*/

  const [title, setTitle]=useState('');
  const [genre, setGenre]=useState('');
  const [description, setDescription]=useState('');
  const [date, setDate]=useState('');
  const [language, setLanguage] =useState('');
  const [duration, setDuration] = useState('');
  const [isbn, setIsbn]=useState('');
  const handleAddMovieSubmit=(e)=>{
    e.preventDefault();

    let movie={
      title,
      genre,
      description,
      date,
      language,
      duration,
      isbn,
    }
    setMovies([...movies,movie]);
    setTitle('');
    setGenre('');
    setDescription('');
    setDate('');
    setLanguage('');
    setDuration('');
    setIsbn('');
  }

  const deleteMovie=(isbn)=>{
    const filteredMovies=movies.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setMovies(filteredMovies);
  }

  useEffect(()=>{
    localStorage.setItem('movies',JSON.stringify(movies));
  },[movies])

  return (
    <div className='wrapper'>
      <div className='main'>

        <div className='form-container'>
          <h1>Add new movie</h1>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddMovieSubmit}>
           
            <input type="text"  placeholder='Title' className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            
            <input type="text" placeholder='Genre' className='form-control' required
            onChange={(e)=>setGenre(e.target.value)} value={genre}></input>
            <br></br>
            <input type="text" placeholder='Description' className='form-control' required
            onChange={(e)=>setDescription(e.target.value)} value={description}></input>
            <br></br>
            <input type="text" placeholder='Language' className='form-control' required
            onChange={(e)=>setLanguage(e.target.value)} value={language}></input>
            <br></br>
            <input type="text" placeholder='duration' className='form-control' required
            onChange={(e)=>setDuration(e.target.value)} value={duration}></input>
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
