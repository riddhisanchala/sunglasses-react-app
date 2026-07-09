import { useState } from "react";
import "./BrandCarousel.css";

const brands = [
  {
    name: "Goldstar Eyewear",
    logo: (
      <div className="logo-goldstar">
        <div className="top-row">
          <svg width="22" height="18" viewBox="0 0 28 18" fill="none">
            <path
              d="M2 9 C2 5.5 4.5 3 8 3 C10 3 11.5 4 12.5 5.5 C13.5 4 15 3 17 3
                 C20.5 3 22 5.5 22 9 C22 12.5 19.5 15 17 15 C14.5 15 12.5 13 12.5 13
                 C12.5 13 10.5 15 8 15 C4.5 15 2 12.5 2 9Z"
              stroke="#4a1b5e"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="brand-name">Goldstar</span>
        </div>
        <span className="sub">EYEWEAR</span>
      </div>
    ),
  },
  {
    name: "Transmit",
    logo: (
      <div className="logo-transmit">
        <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
          <path
            d="M6 4 L14 18 L22 4"
            stroke="#c0392b"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
          />
          <path d="M10 4 L18 4" stroke="#c0392b" strokeWidth="2" />
        </svg>
        <span className="brand-name">TRANSMIT</span>
      </div>
    ),
  },
  {
    name: "kidos",
    logo: (
      <span className="logo-kidos">
        <span className="k">k</span>
        <span className="i">i</span>
        <span className="d">d</span>
        <span className="o">o</span>
        <span className="s">s</span>
      </span>
    ),
  },
  {
    name: "ZigZag by Escape",
    logo: (
      <div className="logo-zigzag">
        <div className="top-row">
          <span className="zig">ZIG</span>
          <span className="bolt">⚡</span>
          <span className="zag">ZAG</span>
        </div>
        <span className="sub">by ESCAPE</span>
      </div>
    ),
  },
  {
    name: "Bausch & Lomb",
    logo: (
      <div className="logo-bausch">
        <div className="triangle-wrap">
          <div className="tri-dark" />
          <div className="tri-light" />
        </div>
        <span className="brand-name">Bausch &amp; Lomb</span>
      </div>
    ),
  },
  {
    name: "eyeclic",
    logo: (
      <div className="logo-eyeclic">
        <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
          <rect x="1" y="1" width="10" height="12" rx="6" stroke="#1a2a6c" strokeWidth="1.8" fill="none" />
          <rect x="15" y="1" width="10" height="12" rx="6" stroke="#1a2a6c" strokeWidth="1.8" fill="none" />
          <path d="M11 7 L15 7" stroke="#1a2a6c" strokeWidth="1.8" />
        </svg>
        <span className="brand-name">eyeclic</span>
      </div>
    ),
  },
];

const VISIBLE = 5;

export default function BrandCarousel() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => (s - 1 + brands.length) % brands.length);
  const next = () => setStart((s) => (s + 1) % brands.length);

  const visible = Array.from(
    { length: VISIBLE },
    (_, i) => brands[(start + i) % brands.length]
  );

  return (
    <div className="carousel-wrapper">
      <button className="nav-btn" onClick={prev} aria-label="Previous">
        &#8592;
      </button>

      <div className="cards-track">
        {visible.map((brand, i) => (
          <div className="brand-card" key={i} aria-label={brand.name}>
            {brand.logo}
          </div>
        ))}
      </div>

      <button className="nav-btn" onClick={next} aria-label="Next">
        &#8594;
      </button>
    </div>
  );
}
