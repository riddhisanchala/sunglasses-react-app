import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./acc.css";
import image1 from './assets/acc_one.png';
import image2 from './assets/acc_two.png';
import image3 from './assets/acc_three.png';
import image4 from './assets/acc_four.png';



const Accessories = () => {

    const navigate = useNavigate();

    // CURRENT USER
    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    // PRODUCTS
    const [products] = useState([
        {
            id: 4,
            name: "Bausch & Lomb Biotrue 300ml Contact Lens Solution",
            price: 599,
            oldPrice: 800,
            rating: 4.6,
            image: image1
        },
        {
            id: 5,
            name: "Bausch & Lomb Biotrue 60ml Contact Lens Solution",
            price: 190,
            oldPrice: 250,
            rating: 3.8,
            image: image2
        },
        {
            id: 6,
            name: "Eye Patch",
            price: 50,
            oldPrice: 100,
            rating: 4.6,
            image: image3
        },
        {
            id: 7,
            name: "Temple Tips",
            price: 50,
            oldPrice: 100,
            rating: 3.8,
            image: image4
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

                <div className="lenses-top"style={{padding:"10px 30px"}}>

                    <p>
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

export default Accessories;