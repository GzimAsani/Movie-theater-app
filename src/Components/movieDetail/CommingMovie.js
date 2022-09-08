import React from "react";
import Categories from "./Categories";
import { useState } from "react";
import "./CommingMovies.css"





const CommingMovie = () => {

  const [data, setData]  = useState(Categories)
  return (
    <>
      <div className="container-fluid mx-2">
        <h2>Comming soon..</h2>
        <div className="row mt-5 mx-2">
          
          <div className="col-md-9">
            <div className="row w-200">
              {data.map((values)=> {
                return(
                  <>
                  
                  
                      <div className="col-md-4">
                <div className="card">
                  <img
                    className="image-card "
                    src={values.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{values.title}</h5>
                    <p className="card-price">Price: 211/-</p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the 
                    </p>
                    <p>2023...</p>
                    <a href="#" className="button ">
                      Details
                    </a>
                  </div>
                </div>
              </div>
                  </>
                )

              })}
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommingMovie;
