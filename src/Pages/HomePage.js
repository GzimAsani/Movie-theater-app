import React from "react";
import arrow from "./img/arrrow.png";
import "./homePage.css";
import { useNavigate } from "react-router-dom";

function Homepages() {
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
        <h1 className="movie-list-title">GALLERY</h1>
        <img className="galeria" src={arrow} alt="gallery" />
        <div className="movie-list-wrapper">
          <div className="movie-list">
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src="https://dx35vtwkllhj9.cloudfront.net/universalstudios/beast/images/gallery/image4.jpg"
                alt="gallery"
              />
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src="https://images.squarespace-cdn.com/content/v1/58aabe1e9f74561f4dc712dd/1660062967706-PPBEGM17PKI4AACUEDM8/beast-movie-review-2022-idris-elba.jpg?format=1500w"
                alt="gallery"
              />
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src="https://nypost.com/wp-content/uploads/sites/2/2022/08/beast_movie_review.jpg"
                alt="gallery"
              />
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src="https://www.independent.ie/entertainment/movies/movie-reviews/987fe/41937677.ece/AUTOCROP/w1240h700/IF%20beast_idris_elba"
                alt="gallery"
              />
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src="https://variety.com/wp-content/uploads/2022/08/MCDBEAS_UV008.jpg?w=681&h=383&crop=1"
                alt="gallery"
              />
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src="https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_289,w_463/awgryjs7mlwmgn78chtt"
                alt="gallery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepages;
