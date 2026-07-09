// HeroSlider.jsx

import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

import slide1 from "./assets/1.png";
import slide2 from "./assets/2.png";
import slide3 from "./assets/3.png";
import slide4 from "./assets/4.png";
import slide5 from "./assets/5.png";
import slide6 from "./assets/tommy.png";



const slides = [
  {
    image: slide1,
    title: "TOMMY HILFIGER",
  },
  {
    image: slide2,
    title: "GUCCI",
  },
  {
    image: slide3,
    title: "CHANEL",
  },
  {
    image: slide4,
    title: "PRADA",
  },
  {
    image: slide5,
    title: "DIOR",
  },
  {
    image: slide6,
    title: "YSL",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <img
        src={slides[current].image}
        alt="slider"
        className="slider-image"
      />

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}

export default HeroSlider;