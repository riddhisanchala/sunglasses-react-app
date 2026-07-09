import React from "react";
import "./perfectfit.css";
import { useNavigate } from "react-router-dom"
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";

const Perfectfit = () => {
  const navigate = useNavigate();
  const handleExplore = (item) => {

    localStorage.setItem(
      "selectedBrand",
      JSON.stringify({
        brand: item.brand,
      })
    );

    navigate("/Product_Explore");
  };
  return (
    <section className="perfectfit">

      <div className="heading">
        <div className="line"></div>
        <h2>FIND THE PERFECT FIT</h2>
        <div className="line"></div>
      </div>

      <div className="layout">

        <div className="left1" onClick={() => handleExplore({ brand: "Eyeclic" })}>
          <img src={p1} alt="" />
        </div>

        <div className="top-right">
          <img src={p2} alt="" />
        </div>

        <div className="bottom-row">
          <div className="small-card">
            <img src={p3} alt="" />
          </div>

          <div className="small-card">
            <img src={p4} alt="" />
          </div>
        </div>

        <div className="right1">
          <img src={p5} alt="" />
        </div>

      </div>

    </section>
  );
};

export default Perfectfit;