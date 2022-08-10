import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./app.css"
import HomePage from "./Pages/HomePage";
import MovieDetail from './Components/movieDetail/MovieDetail';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="movieDetail" element ={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;