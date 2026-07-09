import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Checkout.css";

const Checkout = () => {

    const [step, setStep] = useState(1);

    return (
        <>
        <Header />

        <div className="checkout-page">

            {/* STEP BAR */}

            <div className="steps">

                <div className={step >= 1 ? "active-step" : ""}>
                    1 Review Cart
                </div>

                <div className={step >= 2 ? "active-step" : ""}>
                    2 Shipping
                </div>

                <div className={step >= 3 ? "active-step" : ""}>
                    3 Payment
                </div>

                <div className={step >= 4 ? "active-step" : ""}>
                    4 Summary
                </div>

            </div>

            {/* STEP 1 */}

            {
                step === 1 && (

                    <div className="box">

                        <h1>Review Cart</h1>

                        <p>
                            Review your selected products
                        </p>

                        <button
                            onClick={() => setStep(2)}
                        >
                            Continue
                        </button>

                    </div>

                )
            }

            {/* STEP 2 */}

            {
                step === 2 && (

                    <div className="box">

                        <h1>Shipping Details</h1>

                        <div className="input-row">

                            <input
                                type="text"
                                placeholder="First Name"
                            />

                            <input
                                type="text"
                                placeholder="Last Name"
                            />

                        </div>

                        <div className="input-row">

                            <input
                                type="email"
                                placeholder="Email"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                            />

                        </div>

                        <div className="btns">

                            <button
                                onClick={() => setStep(1)}
                            >
                                Previous
                            </button>

                            <button
                                onClick={() => setStep(3)}
                            >
                                Continue
                            </button>

                        </div>

                    </div>

                )
            }

            {/* STEP 3 */}

            {
                step === 3 && (

                    <div className="box">

                        <h1>Payment</h1>

                        <input
                            type="text"
                            placeholder="Card Number"
                        />

                        <input
                            type="text"
                            placeholder="Card Holder Name"
                        />

                        <div className="input-row">

                            <input
                                type="text"
                                placeholder="MM/YY"
                            />

                            <input
                                type="text"
                                placeholder="CVV"
                            />

                        </div>

                        <div className="btns">

                            <button
                                onClick={() => setStep(2)}
                            >
                                Previous
                            </button>

                            <button
                                onClick={() => setStep(4)}
                            >
                                Pay Now
                            </button>

                        </div>

                    </div>

                )
            }

            {/* STEP 4 */}

            {
                step === 4 && (

                    <div className="box success-box">

                        <h1>
                            Order Successful
                        </h1>

                        <p>
                            Thank you for your order
                        </p>

                    </div>

                )
            }

        </div>
        <Footer />
        </>
    );
};

export default Checkout;