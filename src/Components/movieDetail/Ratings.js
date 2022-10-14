import React, { useEffect, useState } from "react";
import "./ratings.css";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function Ratings() {
  const [data, setData] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[1];

  useEffect(() => {
    fetch("https://hidden-lowlands-43310.herokuapp.com/api/ratings")
      .then((response) => response.json())
      .then((data) => {
        let result = data.filter((obj) => {
          return obj.movieid == path;
        });

        setData(result);
      });
  }, []);
  return (
    <div className="ratings">
      {data.map((element) => {
        return (
          <>
            <h2 className="emri">
              {element.username}
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="text-feedback"
                  value={element.stars}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box className="label" sx={{ ml: 2 }}>
                  {labels[element.stars]}
                </Box>
              </Box>
            </h2>
            <p className="komenti">{element.comment}</p>
            <p className="data">{element.date.substring(0, 10)}</p>
          </>
        );
      })}
    </div>
  );
}

export default Ratings;
