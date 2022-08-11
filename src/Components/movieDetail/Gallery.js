import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { movieImages } from "../../data/images";
import "./Gallery.css";
const Gallery = () => {
  const [hasMoved, setHasMoved] = useState(false);

  const sliderRef = useRef();
  const handleClick = (control) => {
    setHasMoved(true);
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;

      const scrollToLeft =
        control === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({
        left: scrollToLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        <FaChevronLeft
          className="gallery-arrow-left"
          onClick={() => handleClick("left")}
        />
        <div className="gallery-container" ref={sliderRef}>
          {movieImages.map((image, index) => (
            <div className="gallery-item">
              <img key={index} src={image} alt="movie poster" />
            </div>
          ))}
        </div>
        <FaChevronRight
          className="gallery-arrow-right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};
export default Gallery;
