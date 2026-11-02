import { useState, useEffect, useRef } from "react";
import "./Slider.css";

function Slider() {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const stopRef = useRef(false);

  function nextImage() {
    setIndex((index + 1) % slides.length);
  }

  function prevImage() {
    setIndex((index - 1 + slides.length) % slides.length);
  }

  function handlePrevClick() {
    stopRef.current = true;
    clearInterval(timerRef.current);
    prevImage();
  }

  function handleNextClick() {
    stopRef.current = true;
    clearInterval(timerRef.current);
    nextImage();
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/slides`)
      .then((reponse) => reponse.json())
      .then((data) => setSlides(data.member));
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  if (slides.length === 0) return null;

  const actuelSlide = slides[index];

  return (
    <div className="slider">
      <button className="btn-prev" onClick={handlePrevClick}>
        ←
      </button>
      <img
        src={`${import.meta.env.VITE_API_URL}${actuelSlide.image}`}
        alt={actuelSlide.alt}
      />
      <button className="btn-next" onClick={handleNextClick}>
        →
      </button>
    </div>
  );
}

export default Slider;
