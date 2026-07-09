// HeroSlider2.jsx

import React, { useState } from "react";
import "./HeroSlider2.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import rectangle from "./assets/rectengle.png";
import oval from "./assets/oval.png";
import square from "./assets/square.png";
import wayfarer from "./assets/wayfarer.png";
import geometric from "./assets/geometric.png";
import round from "./assets/round.png";
import cat_eye from "./assets/cat-eye.png";

const products = [
  {
    id: 1,
    shape: "Rectangle",
    image: rectangle,
  },
  {
    id: 2,
    shape: "Oval",
    image: oval,
  },
  {
    id: 3,
    shape: "Square",
    image: square,
  },
  {
    id: 4,
    shape: "Wayfarer",
    image: wayfarer,
  },
  {
    id: 5,
    shape: "Geometric",
    image: geometric,
  },
  {
    id: 6,
    shape: "Round",
    image: round,
  },
  {
    id: 7,
    shape: "Cat-Eye",
    image: cat_eye,
  },
];

const HeroSlider2 = () => {
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === products.length - 4 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? products.length - 4 : prev - 1
    );
  };

  const handleExplore = (item) => {

    localStorage.setItem(
      "selectedShape",
      JSON.stringify({
        shape: item.shape,
      })
    );

    navigate("/Product_Explore");
  };

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h1>ELEVATE YOUR LOOK</h1>
        <p>Our hottest collections</p>
      </div>

      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={prevSlide}>
          <ChevronLeft />
        </button>

        <div className="slider-container">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${current * 25}%)`,
            }}
          >
            {products.map((item) => (
              <div className="slide-card" key={item.id}>
                <img src={item.image} alt={item.shape} />
                <h2>{item.shape}</h2>

                <button onClick={() => handleExplore(item)}>
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider2;