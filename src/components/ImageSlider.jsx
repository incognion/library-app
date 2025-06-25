import { useState } from "react";
import "./ImageSlider.css";

const images = [
  "/images/lib1.jpg",
  "/images/lib2.jpg",
  "/images/lib3.jpg",
  "/images/lib4.jpg",
  "/images/lib5.jpg",
  "/images/lib6.jpg",
  "/images/lib7.jpg",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setTransitionEnabled(true);
  };

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(currentIndex + 1);
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }, 600);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(-1);
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(images.length - 1);
      }, 600);
    }
  };

  return (
    <div className="image-slider-container">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${(currentIndex + 1) * 100}%)`,
          transition: transitionEnabled ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        <img
          src={images[images.length - 1]}
          alt="Clone Last"
          className="slider-image"
        />
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Library ${index + 1}`}
            className="slider-image"
          />
        ))}
        <img src={images[0]} alt="Clone First" className="slider-image" />
      </div>

      <button className="slider-btn left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-btn right" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
