// import React, { useEffect, useState } from 'react'
// import Movie from './MovieTwo';
// import MovieTwo from './MovieTwo';
// import "./MovieTwo.css"

// function Show() {
//     const API_KEY = "b93a64480573ce5248c28b200d79d029";
//     const [loading, setLoading] = useState(false);
//     const [movies,setMovies] = useState([])
//     const [searchTitle, setSearchTitle] = useState("");


//       useEffect(()=>{   
//         const movieData = async () => {
//             setLoading(true);
//            await fetch(
//               `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
//             ).then((response) => response.json()).then((data) => setMovies(data.results));

//             setLoading(false)
//         }
//          movieData();
         
//     },[])

    
//   const onDelete = async (id) => {
//     await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`, {
//       method: "DELETE",
//     })
//       .then((res) => {
//         if (res.status !== 200) {
//           return;
//         } else {
//           setMovies(
//             movies.filter((user) => {
//               return user.id !== id;
//             })
//           );
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//     return (
//     <div className='nowshowing'>
//     <input
//         className='show-searchBar'
//         type="text"
//         placeholder="Search Movie"
//         onChange={(e) => setSearchTitle(e.target.value)}
//       />
//       <div className='nowshowing_movies'>
  
//       {loading ? (
//         <h4>Loading ...</h4> 
//       ) : (
//         movies
//         .filter((value) => {
//             if (!value.title) {
//               return false
//             }
//             if (!searchTitle || searchTitle === "") {
//               return true;
//             }
//             return value.title.toLowerCase().includes(searchTitle.toLowerCase())
//           })
//           .map((movie) =>
//           <MovieTwo
//           key={movie.id}
//           name={movie.original_title || movie.title || movie.name} 
//           image={movie.poster_path}
//           date={movie.release_date}
//           language={movie.original_language}
//           overview={movie.overview}
//           img={movie.backdrop_path}
//           onDelete={onDelete}
//           />
//       )
//       )}
//       </div> 
//     </div>
//    )
// }

// export default Show
import React, { useEffect, useState } from 'react'
import "./MovieTwo.css"

function Show() {
const [selectedImages, setSelectedImages] = useState([]);
console.log('lsdsd',selectedImages)

const onSelectFile = (event) => {
  const selectedFiles = event.target.files;
  const selectedFilesArray = Array.from(selectedFiles);

  const imagesArray = selectedFilesArray.map((file) => {
    return URL.createObjectURL(file);
  });

  setSelectedImages((previousImages) => previousImages.concat(imagesArray));

  event.target.value = "";
};

function deleteHandler(image) {
  setSelectedImages(selectedImages.filter((e) => e !== image));
  URL.revokeObjectURL(image);
} 

return (
  <section className='dashboard-section'>
    <label>
      + Add Movies
      <br />
      <input
        type="file"
        name='file'
        onChange={onSelectFile}
        accept="image/png , image/jpeg, image/webp"
      
      />
      
    </label>
    <br />

    <div className="images">
      {selectedImages &&
        selectedImages.map((image) => {
          return (
            <div key={image} className="image">
              <img src={image}  />
              <h1>Movie Name</h1>
              <button className='button-section' onClick={() => deleteHandler(image)}>
                 Delete Movie
              </button>
            </div>
          );
        })}
    </div>
  </section>
);
};
export default Show

