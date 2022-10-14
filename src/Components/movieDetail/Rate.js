import { useState, useContext, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import "./rate.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
function Rate({ onClose }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [text, setText] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const stars = Array(5).fill(0);
  const { user } = useContext(AuthContext);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const gettext = (e) => {
    if (e.target.value.length == "0") {
      onClose();
    } else {
      setText(e.target.value);
    }
  };

  const close = () => {
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      fetch("https://hidden-lowlands-43310.herokuapp.com/api/ratings", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          comment: text,
          movieid: path,
          date: new Date(),
          stars: currentValue,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            onClose();
          } else {
            console.log("unable to add comment");
          }
        });
    }
  }, [isSubmit]);

  return (
    <div className="modali">
      <div className="container5">
        <h2> Movie Ratings</h2>
        <div className="stars5">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <textarea
          onChange={gettext}
          placeholder="What's your experience?"
          className="textarea"
        />
        <button onClick={close}>Submit</button>
      </div>
    </div>
  );
}

export default Rate;
