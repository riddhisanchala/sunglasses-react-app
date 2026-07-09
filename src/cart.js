import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
    const navigate = useNavigate(); 

    // STEP STATE

    const [step, setStep] = useState(1);

    // CART

    const [cartItems, setCartItems] = useState([]);

    // SHIPPING FORM

    const [shippingData, setShippingData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });

    // PAYMENT FORM

    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: ""
    });

    // CURRENT USER

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    // LOAD USER CART

    useEffect(() => {

        if (!currentUser) return;

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const userCart = cart.filter(
            (item) => item.userId === currentUser.id
        );

        setCartItems(userCart);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TOTAL PRICE

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    // QUANTITY INCREASE

    const increaseQty = (id) => {

        let updatedCart = [...cartItems];

        updatedCart = updatedCart.map((item) => {

            if (item.id === id) {

                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }

            return item;
        });

        setCartItems(updatedCart);

        updateLocalStorage(updatedCart);
    };

    // QUANTITY DECREASE

    const decreaseQty = (id) => {

        let updatedCart = [...cartItems];

        updatedCart = updatedCart.map((item) => {

            if (
                item.id === id &&
                item.quantity > 1
            ) {

                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }

            return item;
        });

        setCartItems(updatedCart);

        updateLocalStorage(updatedCart);
    };

    // REMOVE PRODUCT

    const removeItem = (id) => {

        const updatedCart = cartItems.filter(
            (item) => item.id !== id
        );

        setCartItems(updatedCart);

        updateLocalStorage(updatedCart);
    };

    // UPDATE LOCAL STORAGE

    const updateLocalStorage = (updatedUserCart) => {

        let fullCart =
            JSON.parse(localStorage.getItem("cart")) || [];

        // REMOVE CURRENT USER CART

        fullCart = fullCart.filter(
            (item) => item.userId !== currentUser.id
        );

        // ADD UPDATED USER CART

        fullCart.push(...updatedUserCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(fullCart)
        );
    };

    // SHIPPING VALIDATION

    const handleShippingContinue = () => {

        if (
            !shippingData.firstName ||
            !shippingData.lastName ||
            !shippingData.email ||
            !shippingData.phone ||
            !shippingData.address ||
            !shippingData.city ||
            !shippingData.state ||
            !shippingData.pincode
        ) {

            alert("Please Fill All Fields");

            return;
        }

        setStep(3);
    };

    // PAYMENT VALIDATION

    const handlePayment = () => {

        if (
            !paymentData.cardNumber ||
            !paymentData.cardName ||
            !paymentData.expiry ||
            !paymentData.cvv
        ) {

            alert("Please Fill Payment Details");

            return;
        }

        // CLEAR USER CART

        let fullCart =
            JSON.parse(localStorage.getItem("cart")) || [];

        fullCart = fullCart.filter(
            (item) => item.userId !== currentUser.id
        );

        localStorage.setItem(
            "cart",
            JSON.stringify(fullCart)
        );

        setCartItems([]);

        setStep(4);
    };

    return (
        <>
            <Header />
            {/*  */}
            <div className="lenses-top" style={{padding:"10px 30px"}}>

                   <p >
                        <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</span>
                        <span>/ Cart</span>
                         
                    </p>

                </div>
            {/*  */}

            <div className="cart-page">

                {/* STEP BAR */}

                <div className="checkout-steps">

                    <div className={`step-item ${step >= 1 ? "active" : ""}`}>

                        <div className="step-circle">
                            1
                        </div>

                        <span>
                            Review Cart
                        </span>

                    </div>

                    <div className={`step-line ${step >= 1 ? "active" : ""}`}></div>

                    <div className={`step-item ${step >= 2 ? "active" : ""}`}>

                        <div className="step-circle">
                            2
                        </div>

                        <span>
                            Shipping Details
                        </span>

                    </div>

                    <div className={`step-line ${step >= 2 ? "active" : ""}`}></div>

                    <div className={`step-item ${step >= 3 ? "active" : ""}`}>

                        <div className="step-circle">
                            3
                        </div>

                        <span>
                            Payment & Place Order
                        </span>

                    </div>

                    <div className={`step-line ${step >= 3 ? "active" : ""}`}></div>

                    <div className={`step-item ${step >= 4 ? "active" : ""}`}>

                        <div className="step-circle">
                            4
                        </div>

                        <span>
                            Order Summary
                        </span>

                    </div>

                </div>

                {/* STEP 1 CART */}

                {
                    step === 1 && (

                        <div className="cart-container">

                            <div className="cart-left">

                                {
                                    cartItems.length === 0 ? (

                                        <h2>
                                            Cart is Empty
                                        </h2>

                                    ) : (

                                        cartItems.map((item) => (

                                            <div
                                                className="cart-item"
                                                key={item.id}
                                            >
                                                <div className="cart-image">
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                    />
                                                </div>


                                                <div className="cart-info">
                                                    <div>
                                                        <h3>
                                                            {item.name}
                                                        </h3>

                                                        <h2>
                                                            ₹{item.price}
                                                        </h2>
                                                    </div>

                                                    <div className="qty-box">

                                                        <button
                                                            onClick={() =>
                                                                decreaseQty(item.id)
                                                            }
                                                        >
                                                            -
                                                        </button>

                                                        <span>
                                                            {item.quantity}
                                                        </span>

                                                        <button
                                                            onClick={() =>
                                                                increaseQty(item.id)
                                                            }
                                                        >
                                                            +
                                                        </button>

                                                    </div>

                                                    <button
                                                        className="remove-btn"
                                                        onClick={() =>
                                                            removeItem(item.id)
                                                        }
                                                    >
                                                        Remove
                                                    </button>

                                                </div>

                                            </div>

                                        ))
                                    )
                                }

                            </div>

                            <div className="cart-right">

                                <h2>
                                    Order Summary
                                </h2>

                                <div className="summary-row">

                                    <span>
                                        Subtotal
                                    </span>

                                    <span>
                                        ₹{subtotal}
                                    </span>

                                </div>

                                <div className="summary-row">

                                    <span>
                                        Delivery
                                    </span>

                                    <span>
                                        FREE
                                    </span>

                                </div>

                                <hr />

                                <div className="summary-row total">

                                    <span>
                                        Total
                                    </span>

                                    <span>
                                        ₹{subtotal}
                                    </span>

                                </div>

                                <button
                                    className="continue-btn"
                                    onClick={() => setStep(2)}
                                >
                                    Continue
                                </button>

                            </div>

                        </div>

                    )
                }

                {/* STEP 2 SHIPPING */}

                {
                    step === 2 && (

                        <div className="form-box">

                            <h1>
                                Shipping Details
                            </h1>

                            <div className="input-row">

                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={shippingData.firstName}
                                    onChange={(e) =>
                                        setShippingData({
                                            ...shippingData,
                                            firstName: e.target.value
                                        })
                                    }
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={shippingData.lastName}
                                    onChange={(e) =>
                                        setShippingData({
                                            ...shippingData,
                                            lastName: e.target.value
                                        })
                                    }
                                    required
                                />

                            </div>

                            <div className="input-row">

                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={shippingData.email}
                                    onChange={(e) =>
                                        setShippingData({
                                            ...shippingData,
                                            email: e.target.value
                                        })
                                    }
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Phone"
                                    value={shippingData.phone}
                                    onChange={(e) =>
                                        setShippingData({
                                            ...shippingData,
                                            phone: e.target.value
                                        })
                                    }
                                    required
                                />

                            </div>

                            <input
                                type="text"
                                placeholder="Address"
                                value={shippingData.address}
                                onChange={(e) =>
                                    setShippingData({
                                        ...shippingData,
                                        address: e.target.value
                                    })
                                }
                                required
                            />

                            <div className="input-row">

                                <input
                                    type="text"
                                    placeholder="City"
                                    value={shippingData.city}
                                    onChange={(e) =>
                                        setShippingData({
                                            ...shippingData,
                                            city: e.target.value
                                        })
                                    }
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="State"
                                    value={shippingData.state}
                                    onChange={(e) =>
                                        setShippingData({
                                            ...shippingData,
                                            state: e.target.value
                                        })
                                    }
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Pincode"
                                    value={shippingData.pincode}
                                    onChange={(e) =>
                                        setShippingData({
                                            ...shippingData,
                                            pincode: e.target.value
                                        })
                                    }
                                    required
                                />

                            </div>

                            <div className="btns">

                                <button
                                    onClick={() => setStep(1)}
                                >
                                    Back
                                </button>

                                <button
                                    onClick={handleShippingContinue}
                                >
                                    Continue
                                </button>

                            </div>

                        </div>

                    )
                }

                {/* STEP 3 PAYMENT */}

                {
                    step === 3 && (

                        <div className="form-box">

                            <h1>
                                Payment Details
                            </h1>

                            <input
                                type="text"
                                placeholder="Card Number"
                                value={paymentData.cardNumber}
                                onChange={(e) =>
                                    setPaymentData({
                                        ...paymentData,
                                        cardNumber: e.target.value
                                    })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Card Holder Name"
                                value={paymentData.cardName}
                                onChange={(e) =>
                                    setPaymentData({
                                        ...paymentData,
                                        cardName: e.target.value
                                    })
                                }
                                required
                            />

                            <div className="input-row">

                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    value={paymentData.expiry}
                                    onChange={(e) =>
                                        setPaymentData({
                                            ...paymentData,
                                            expiry: e.target.value
                                        })
                                    }
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="CVV"
                                    value={paymentData.cvv}
                                    onChange={(e) =>
                                        setPaymentData({
                                            ...paymentData,
                                            cvv: e.target.value
                                        })
                                    }
                                    required
                                />

                            </div>

                            <div className="btns">

                                <button
                                    onClick={() => setStep(2)}
                                >
                                    Back
                                </button>

                                <button
                                    onClick={handlePayment}
                                >
                                    Pay Now
                                </button>

                            </div>

                        </div>

                    )
                }

                {/* STEP 4 SUCCESS */}

                {
                    step === 4 && (

                        <div className="success-box">

                            <h1>
                                Order Successful
                            </h1>

                            <p>
                                Thank You For Shopping
                            </p>

                        </div>

                    )
                }

            </div>

            <Footer />
        </>
    );
};

export default Cart;