import { useState, useEffect, useCallback } from "react";
import "./ImageSlider.css";

const images = [
  "/images/lib1.png",
  "/images/lib2.png", 
  "/images/lib3.png",
  "/images/lib4.png",
  // "/images/lib5.jpg",
  // "/images/lib6.jpg",
  // "/images/lib7.jpg",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));

  // Preload all images on component mount
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Preload adjacent images for smooth transitions - FIXED VERSION
  useEffect(() => {
    const preloadAdjacent = () => {
      const prev = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      const next = currentIndex < images.length - 1 ? currentIndex + 1 : 0;

      // Use functional update to avoid dependency on loadedImages
      setLoadedImages(prevLoaded => {
        const newLoaded = new Set(prevLoaded);
        newLoaded.add(prev);
        newLoaded.add(currentIndex);
        newLoaded.add(next);
        
        // Only update if the set actually changed
        if (newLoaded.size === prevLoaded.size && 
            [...newLoaded].every(item => prevLoaded.has(item))) {
          return prevLoaded; // No change, return same reference
        }
        return newLoaded;
      });
    };

    preloadAdjacent();
  }, [currentIndex]); // REMOVED loadedImages from dependency array

  // Optimized transform calculation
  const getSliderTransform = () => {
    if (!transitionEnabled && currentIndex === 0) {
      return `translateX(-${images.length * 100}%)`;
    }
    if (!transitionEnabled && currentIndex === images.length - 1) {
      return `translateX(100%)`;
    }
    return `translateX(-${currentIndex * 100}%)`;
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setTransitionEnabled(true);
  };

  // Debounced navigation to prevent rapid clicks
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (currentIndex < images.length - 1) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(currentIndex + 1);
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }, 400);
    }

    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(-1);
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(images.length - 1);
      }, 400);
    }

    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="image-slider-container">
      <div 
        className={`slider-wrapper ${transitionEnabled ? 'transition-enabled' : ''}`}
        style={{ transform: getSliderTransform() }}
      >
        {/* Duplicate last image at the beginning for smooth infinite scroll */}
        <img 
          src={images[images.length - 1]} 
          alt={`Library ${images.length}`}
          className="slider-image duplicate"
        />

        {/* Main images */}
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Library ${index + 1}`}
            className="slider-image"
            loading={loadedImages.has(index) ? "eager" : "lazy"}
          />
        ))}

        {/* Duplicate first image at the end for smooth infinite scroll */}
        <img 
          src={images[0]} 
          alt="Library 1"
          className="slider-image duplicate"
        />
      </div>

      {/* Navigation buttons */}
      <button 
        className="slider-btn left"
        onClick={prevSlide}
        disabled={isTransitioning}
        aria-label="Previous image"
      >
        <span>❮</span>
      </button>

      <button 
        className="slider-btn right"
        onClick={nextSlide}
        disabled={isTransitioning}
        aria-label="Next image"
      >
        <span>❯</span>
      </button>

      {/* Dot indicators */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
