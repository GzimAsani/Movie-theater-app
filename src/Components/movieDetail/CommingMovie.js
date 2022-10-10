import React from "react";
import Categories from "./Categories";
import "./CommingMovies.css";

const CommingMovie = () => {
  return (
    <>
      <div className="container-fluid mx-2">
        <h2 className="text">Comming soon..</h2>
        <div className="row mt-5 mx-2">
          <div className="col-md-9">
            <div className="row w-200">
              {Categories.map((values) => {
                return (
                  <>
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          className="image-card"
                          src={values.image}
                          alt="Card"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{values.title}</h5>
                          <p className="card-price">Price: 211/-</p>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommingMovie;
