import React, { useState } from "react";
import "./Movie.css";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Movie({ id, name, image, data, month, overview, language }) {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState();

  function checkif() {
    if (user) {
      navigate(`../../${id}/movieDetail`);
    } else {
      showModalHandler();
    }
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  let navigate = useNavigate();
  return (
    <div className="movie-contanier">
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${image}")`,
          backgroundPosition: "center center",
        }}
      >
        <h2 className="movie_title">{name}</h2>
        <button className="movie-button" onClick={checkif}>
          BOOK TICKET
        </button>
      </div>
      {showModal && <Modal text="Are you sure?" onClose={closeModalHandler} />}
    </div>
  );
}

export default Movie;
