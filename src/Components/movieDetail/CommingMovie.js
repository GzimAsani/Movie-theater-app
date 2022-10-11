import React from "react";
import Categories from "./Categories";
import "./CommingMovies.css";

const CommingMovie = () => {
  return (
    <div>
      <h2 className="text">COOMING SOON...</h2>
      <div className="kontainer">
        <div className="coming">
          <div className="comingmovies">
            {Categories.map((cat) => {
              return (
                <div
                  className="banner bord"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${cat.image}")`,
                    backgroundPosition: "center center",
                  }}
                >
                  <div className="middle">
                    <h2 className="movie_title">{cat.title}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingMovie;
