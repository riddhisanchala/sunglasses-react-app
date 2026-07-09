import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";

const Wishlist = () => {

  const navigate = useNavigate();

  // CURRENT USER
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  // WISHLIST STATE
  const [wishlist, setWishlist] = useState([]);

  // LOAD USER WISHLIST
  useEffect(() => {

    if (!currentUser) return;

    const allWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    // ONLY CURRENT USER DATA
    const userWishlist = allWishlist.filter(
      (item) => item.userId === currentUser.id
    );

    setWishlist(userWishlist);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // REMOVE FROM WISHLIST
  const removeWishlist = (id) => {

    let allWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    // REMOVE ONLY CURRENT USER PRODUCT
    allWishlist = allWishlist.filter(
      (item) =>
        !(
          item.userId === currentUser.id &&
          item.id === id
        )
    );

    // UPDATE LOCAL STORAGE
    localStorage.setItem(
      "wishlist",
      JSON.stringify(allWishlist)
    );

    // UPDATE STATE
    // UPDATE HEADER BADGE
    window.dispatchEvent(new Event("storage"));

  };

  // ADD TO CART
  const handleAddToCart = (product) => {

    if (!currentUser) {

      alert("Please Login");

      return;
    }

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    // CHECK SAME USER + SAME PRODUCT
    const existingProduct = cart.find(
      (item) =>
        item.userId === currentUser.id &&
        item.id === product.id
    );

    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      cart.push({
        ...product,
        userId: currentUser.id,
        quantity: 1
      });

    }

    // SAVE CART
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    // TRIGGER HEADER UPDATE
    window.dispatchEvent(new Event("storage"));

    // SHOW MESSAGE
    setShowMessage(true);

    setTimeout(() => {

      setShowMessage(false);

    }, 2000);
  };
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <Header />
      {/*  */}
      <div className="lenses-top" style={{ padding: "10px 30px" }}>

        <p >
          <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</span>
          <span>/ Wishlist</span>

        </p>

      </div>
      {/*  */}
      {
        showMessage && (

          <div className="cart-message">

            <div className="message-icon">
              ✔
            </div>

            <div>

              <h3>
                Added To Cart
              </h3>

              <p>
                Product added successfully
              </p>

            </div>

            <button
              className="close-btn"
              onClick={() => setShowMessage(false)}
            >
              ×
            </button>

          </div>

        )
      }
      {/*  */}

      <div className="wishlist-page">

        <h1 className="wishlist-title">
          My Wishlist
        </h1>

        {
          wishlist.length === 0 ? (

            <h2 className="empty-text">
              Wishlist is Empty
            </h2>

          ) : (

            <div className="wishlist-grid">

              {
                wishlist.map((item) => (

                  <div
                    className="wishlist-card"
                    key={item.id}
                  >

                    {/* IMAGE */}

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    {/* PRODUCT NAME */}

                    <h2>
                      {item.name}
                    </h2>

                    {/* PRICE */}

                    <div className="price-box">

                      <p className="new-price">
                        ₹{item.price}
                      </p>

                      <del className="old-price">
                        ₹{item.oldPrice}
                      </del>

                    </div>

                    {/* RATING */}

                    <p className="rating">
                      ⭐ {item.rating}
                    </p>

                    {/* BUTTONS */}

                    <div className="wishlist-btns">

                      <button
                        className="cart-btn"
                        onClick={() =>
                          handleAddToCart(item)
                        }
                      >
                        Add To Cart
                      </button>

                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeWishlist(item.id)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>

      <Footer />
    </>
  );
};

export default Wishlist;