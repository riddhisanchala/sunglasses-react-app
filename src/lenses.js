import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./lenses.css";
import image1 from './assets/contact_lense_one.png';
import image2 from './assets/contact_lense_two.png';


const Lenses = () => {

    const navigate = useNavigate();

    // CURRENT USER
    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    // PRODUCTS
    const [products] = useState([
        {
            id: 1,
            name: "Bausch & Lomb iConnect 6 Lens Monthly",
            price: 608,
            oldPrice: 750,
            rating: 4.4,
            image: image1
        },

        {
            id: 2,
            name: "Bausch & Lomb iConnect 3 Lens Monthly",
            price: 364,
            oldPrice: 500,
            rating: 4.4,
            image: image1
        },

        {
            id: 3,
            name: "Bausch & Lomb Optima 38 Yearly",
            price: 1049,
            oldPrice: 1218,
            rating: 4.4,
            image: image2
        }
    ]);

    // WISHLIST STATE
    const [wishlist, setWishlist] = useState([]);

    // LOAD WISHLIST
    useEffect(() => {

        const allWishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        setWishlist(allWishlist);

    }, []);

    // CHECK WISHLIST
    const isWishlisted = (id) => {

        if (!currentUser) return false;

        return wishlist.some(
            (item) =>
                item.userId === currentUser.id &&
                item.id === id
        );
    };

    // HANDLE WISHLIST
    const handleWishlist = (product) => {

        if (!currentUser) {

            alert("Please Login");

            return;
        }

        let allWishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        const alreadyExists = allWishlist.find(
            (item) =>
                item.userId === currentUser.id &&
                item.id === product.id
        );

        if (alreadyExists) {

            allWishlist = allWishlist.filter(
                (item) =>
                    !(
                        item.userId === currentUser.id &&
                        item.id === product.id
                    )
            );

        } else {

            allWishlist.push({
                ...product,
                userId: currentUser.id
            });

        }

        localStorage.setItem(
            "wishlist",
            JSON.stringify(allWishlist)
        );

        setWishlist(allWishlist);
    };

    // ADD TO CART
    // const handleAddToCart = (product) => {

    //     if (!currentUser) {

    //         alert("Please Login");

    //         return;
    //     }

    //     let cart =
    //         JSON.parse(localStorage.getItem("cart")) || [];

    //     const existingProduct = cart.find(
    //         (item) =>
    //             item.userId === currentUser.id &&
    //             item.id === product.id
    //     );

    //     if (existingProduct) {

    //         existingProduct.quantity += 1;

    //     } else {

    //         cart.push({
    //             ...product,
    //             userId: currentUser.id,
    //             quantity: 1
    //         });

    //     }

    //     localStorage.setItem(
    //         "cart",
    //         JSON.stringify(cart)
    //     );

    //     alert("Added To Cart");

    //     navigate("/cart");
    // };
    const handleProductClick = (product) => {

        localStorage.setItem(
            "singleProduct",
            JSON.stringify(product)
        );

        navigate("/Single_Product");

    };

    return (
        <>
            <Header />

            <div className="lenses-page">

                {/* TOP BAR */}

                <div className="lenses-top" style={{padding:"10px 30px"}}>

                   <p >
                        <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</span>
                        <span>/ Accessories</span>
                         
                    </p>

                </div>

                {/* FILTER BAR */}

                <div className="filter-bar">

                    <span>
                        {products.length} products found
                    </span>

                    <select>
                        <option>
                            Default
                        </option>

                        <option>
                            Price Low To High
                        </option>

                        <option>
                            Price High To Low
                        </option>
                    </select>

                </div>

                {/* PRODUCTS */}

                <div className="lenses-grid">

                    {
                        products.map((item) => (

                            <div
                                className="lens-card"
                                key={item.id}
                                onClick={() => handleProductClick(item)}
                            >

                                {/* WISHLIST */}

                                <button
                                    className="wishlist-btn"
                                    onClick={() =>
                                        handleWishlist(item)
                                    }
                                >
                                    {
                                        isWishlisted(item.id) ? (
                                            <FaHeart color="red" />
                                        ) : (
                                            <FaRegHeart />
                                        )
                                    }
                                </button>

                                {/* IMAGE */}

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                {/* RATING */}

                                <div className="rating-box">

                                    ⭐ {item.rating}

                                </div>

                                {/* NAME */}

                                <h2>
                                    {item.name}
                                </h2>

                                {/* PRICE */}

                                <div className="price-box">

                                    <span className="new-price">
                                        ₹{item.price}
                                    </span>

                                    <del>
                                        ₹{item.oldPrice}
                                    </del>

                                </div>

                                {/* BUTTON */}

                                {/* <button
                                    className="cart-btn"
                                    onClick={() =>
                                        handleAddToCart(item)
                                    }
                                >
                                    Add To Cart
                                </button> */}

                            </div>

                        ))
                    }

                </div>

                {/* BOTTOM TEXT */}

                <div className="bottom-text">

                    <p>
                        You've reached the end of the products
                    </p>

                    <span>
                        Showing all {products.length} products
                    </span>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default Lenses;