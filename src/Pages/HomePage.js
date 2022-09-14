import React from "react";
import arrow from "./img/arrrow.png";
import "./homePage.css";
import { useNavigate } from "react-router-dom";
import Categories from "./ComingMovieData";
import { useState } from "react";

function Homepages() {
  const [data, setData]  = useState(Categories)
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/4/movieDetail");
  };

  return (
    <div>
      <div className="homepage">
        <h1 className="homepage-title">BEAST</h1>
        <p className="homepage-tekst">
          A father and his two teenage daughters find themselves hunted by a
          massive rogue lion intent on proving that the Savanna has but one apex
          predator.
        </p>
        <button onClick={handleNavigate} className="homepage-buton">
          BOOK TICKET NOW
        </button>
      </div>
      <div className="movie-list-container">
        <h1 className="movie-list-title">Coming soon</h1>
        <img className="galeria" src={arrow} alt="gallery" />
        <div className="movie-list-wrapper">
          <div className="movie-list">
          {data.map((values)=> {
                return(
                  <>
                    
                <div className="comingMovie-contanier">
                  <img
                    className="comingMovie-image"
                    src={values.image}
                    alt="Card image cap"
                  />
                   <div className="comingMovie-title">{values.title}</div>
                </div>
              
                  </>
                )

              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepages;
