import React, { useState } from 'react';
import './Carousel.css';
import Headshot from "../../assets/headshot.jpg";
import GitHubLogo from "../../assets/github.png";
import LinkedInLogo from "../../assets/linkedin.png";

const images = [
  Headshot, GitHubLogo, LinkedInLogo, Headshot, GitHubLogo, LinkedInLogo

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{
          transform: `rotateY(${currentIndex * -72}deg)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevImage}>
        ◀
      </button>
      <button className="carousel-button next" onClick={nextImage}>
        ▶
      </button>
    </div>
  );
};

export default Carousel;