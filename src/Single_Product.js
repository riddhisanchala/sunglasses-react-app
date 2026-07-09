import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Single_Product.css";

const SingleProduct = () => {
    const navigate = useNavigate();

    // GET PRODUCT
    const product = JSON.parse(localStorage.getItem("singleProduct"));

    // STATES
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    // =========================
    // CHECK WISHLIST (FIXED DEPENDENCY)
    // =========================
    useEffect(() => {
        if (!product?.id) return;

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) return;

        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        const alreadyExists = wishlist.find(
            (item) => item.userId === currentUser.id && item.id === product.id
        );

        if (alreadyExists) {
            setIsWishlisted(true);
        } else {
            setIsWishlisted(false);
        }
    }, [product?.id]); // ✅ Stable primitive check

    // PRODUCT NOT FOUND
    if (!product) {
        return (
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                Product Not Found
            </h1>
        );
    }

    // WISHLIST FUNCTION
    const handleWishlist = () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            alert("Please Login");
            return;
        }

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        if (isWishlisted) {
            wishlist = wishlist.filter(
                (item) => !(item.userId === currentUser.id && item.id === product.id)
            );
            setIsWishlisted(false);
        } else {
            wishlist.push({
                ...product,
                userId: currentUser.id
            });
            setIsWishlisted(true);
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };

    // ADD TO CART
    const handleAddToCart = () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            alert("Please Login");
            return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cart.find(
            (item) => item.userId === currentUser.id && item.id === product.id
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

        localStorage.setItem("cart", JSON.stringify(cart));
        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);

        }, 1500);
    };

    return (
        <>
            <Header />
            {/*  */}
            <div className="explore-top" style={{ padding: "10px 30px" }}>
                <p>
                    <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</span>
                    <span>/</span>
                    <span> Single Product Explore</span>

                </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {showMessage && (
                <div className="cart-message">
                    <div className="message-icon">✔</div>
                    <div>
                        <h3>Added to Cart</h3>
                        <p>{product.name} has been added to your cart.</p>
                    </div>
                    {/* ✅ FIXED INLINE EVENT HANDLER */}
                    <button
                        className="close-btn"
                        onClick={() => setShowMessage(false)}
                    >
                        ×
                    </button>
                </div>
            )}

            {/* PRODUCT SECTION */}
            <div className="single-product-page">
                <div className="left-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="right-info">
                    <div className="product-title">
                        <h1>{product.name}</h1>
                        <button className="wish_btn" onClick={handleWishlist}>
                            {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
                        </button>
                    </div>

                    <h2>₹{product.price}</h2>
                    <del>₹{product.oldPrice}</del>
                    <p>Rating: ⭐ {product.rating}</p>
                    <p>Shape: {product.shape}</p>

                    <button className="cart_btn" onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default SingleProduct;