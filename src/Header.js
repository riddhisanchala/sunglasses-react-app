// Header.jsx
import React from "react";
import {
  Phone,
  Search,
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";
import './Header.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  // const navigate = useNavigate();
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  // LOAD CART & WISHLIST COUNT

  useEffect(() => {

    const updateCounts = () => {



      if (!currentUser) {

        setCartCount(0);
        setWishlistCount(0);

        return;
      }

      // CART
      const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

      const userCart = cart.filter(
        (item) => item.userId === currentUser.id
      );

      setCartCount(userCart.length);

      // WISHLIST
      const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

      const userWishlist = wishlist.filter(
        (item) => item.userId === currentUser.id
      );

      setWishlistCount(userWishlist.length);
    };

    updateCounts();

    window.addEventListener(
      "storage",
      updateCounts
    );

    return () => {

      window.removeEventListener(
        "storage",
        updateCounts
      );

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="header">
        {/* TOP HEADER */}
        <div className="top-header">
          {/* LOGO */}
          <div className="logo">
            <div className="glass-icon">
              <span></span>
              <span></span>
            </div>
            <h1>eyeclic</h1>
          </div>

          {/* PHONE */}
          <div className="phone">
            <Phone size={20} />
            <span>91040 33560</span>
          </div>

          {/* SEARCH */}
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="What are you looking for?"
            />
          </div>

          {/* RIGHT MENU */}
          <div className="right-menu">
            <div className="signin">
              <User size={20} />
              <span onClick={() => setOpenModal(true)}>Sign In & Sign Up</span>
            </div>

            <div className="icon-box" onClick={() => navigate("/wishlist")}>

              <div className="icon-wrapper">

                <Heart size={22} />

                {
                  wishlistCount > 0 && (
                    <span className="badge">
                      {wishlistCount}
                    </span>
                  )
                }

              </div>

              <span>Wishlist</span>

            </div>

            <div className="icon-box" onClick={() => navigate("/cart")}>

              <div className="icon-wrapper">

                <ShoppingBag size={22} />

                {
                  cartCount > 0 && (
                    <span className="badge">
                      {cartCount}
                    </span>
                  )
                }

              </div>

              <span>Cart</span>

            </div>
          </div>
        </div>

        {/* NAVBAR */}
        {/* NAVBAR */}
        <div
          className="nav-wrapper"
        >
          <nav className="navbar">
            <div className="nav-item">
              <a href="/">EYEGLASSES</a>

              <div className="mega-menu">
                <div className="menu-column">
                  <h3>Gender</h3>
                  <p>Men</p>
                  <p>Women</p>
                  <p>Kids</p>
                  <p>Unisex</p>
                </div>

                <div className="menu-column">
                  <h3>Frame Type</h3>
                  <p>Full Rim</p>
                  <p>Half Rim</p>
                  <p>Rimless</p>
                </div>

                <div className="menu-column">
                  <h3>Frame Shape</h3>
                  <p>Aviator</p>
                  <p>Cat-Eye</p>
                  <p>Clubmaster</p>
                  <p>Geometric</p>
                  <p>Round</p>
                  <p>Square</p>
                </div>

                <div className="menu-column">
                  <h3>Brands</h3>
                  <p>Ray-Ban</p>
                  <p>Calvin Klein</p>
                  <p>Police</p>
                  <p>Tommy Hilfiger</p>
                  <p>Vogue</p>
                </div>
              </div>
            </div>
            {/* SUNGLASSES */}
            <div className="nav-item">
              <a href="/">SUNGLASSES</a>

              <div className="mega-menu">
                <div className="menu-column">
                  <h3>Gender</h3>
                  <p>Men</p>
                  <p>Women</p>
                  <p>Kids</p>
                  <p>Unisex</p>
                </div>

                <div className="menu-column">
                  <h3>Frame Type</h3>
                  <p>Full Rim</p>
                  <p>Half Rim</p>
                  <p>Rimless</p>
                </div>

                <div className="menu-column">
                  <h3>Frame Shape</h3>
                  <p>Aviator</p>
                  <p>Cat-Eye</p>
                  <p>Clubmaster</p>
                  <p>Geometric</p>
                  <p>Round</p>
                  <p>Square</p>
                </div>

                <div className="menu-column">
                  <h3>Brands</h3>
                  <p>Ray-Ban</p>
                  <p>Calvin Klein</p>
                  <p>Police</p>
                  <p>Tommy Hilfiger</p>
                  <p>Vogue</p>
                </div>
              </div>
            </div>
            {/* READING GLASSES */}
            <div className="nav-item">
              <a href="/">READING GLASSES</a>

              <div className="mega-menu">
                <div className="menu-column">
                  <h3>Gender</h3>
                  <p>Men</p>
                  <p>Women</p>
                  <p>Kids</p>
                  <p>Unisex</p>
                </div>

                <div className="menu-column">
                  <h3>Frame Type</h3>
                  <p>Full Rim</p>
                  <p>Half Rim</p>
                  <p>Rimless</p>
                </div>

                <div className="menu-column">
                  <h3>Frame Shape</h3>
                  <p>Aviator</p>
                  <p>Cat-Eye</p>
                  <p>Clubmaster</p>
                  <p>Geometric</p>
                  <p>Round</p>
                  <p>Square</p>
                </div>

                <div className="menu-column">
                  <h3>Brands</h3>
                  <p>Ray-Ban</p>
                  <p>Calvin Klein</p>
                  <p>Police</p>
                  <p>Tommy Hilfiger</p>
                  <p>Vogue</p>
                </div>
              </div>
            </div>
            {/* SCREEN GLASSES */}
            <div className="nav-item">
              <a href="/">SCREEN GLASSES</a>

              <div className="mega-menu">
                <div className="menu-column">
                  <h3>Gender</h3>
                  <p>Men</p>
                  <p>Women</p>
                  <p>Kids</p>
                  <p>Unisex</p>
                </div>

                <div className="menu-column">
                  <h3>Frame Type</h3>
                  <p>Full Rim</p>
                  <p>Half Rim</p>
                  <p>Rimless</p>
                </div>

                <div className="menu-column">
                  <h3>Frame Shape</h3>
                  <p>Aviator</p>
                  <p>Cat-Eye</p>
                  <p>Clubmaster</p>
                  <p>Geometric</p>
                  <p>Round</p>
                  <p>Square</p>
                </div>

                <div className="menu-column">
                  <h3>Brands</h3>
                  <p>Ray-Ban</p>
                  <p>Calvin Klein</p>
                  <p>Police</p>
                  <p>Tommy Hilfiger</p>
                  <p>Vogue</p>
                </div>
              </div>
            </div>
            {/* CONTACT */}
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => navigate("/lenses")}
            >
              CONTACT LENSES
            </button>

            <button
              type="button"
              className="nav-link-btn"
              onClick={() => navigate("/accessories")}
            >
              ACCESSORIES
            </button>
          </nav>
        </div>
      </header>
      <AuthModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default Header;