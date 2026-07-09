import React, { useState } from "react";
import "./AuthModal.css";

function AuthModal({ isOpen, onClose }) {

  // LOGIN / SIGNUP SWITCH
  const [isLogin, setIsLogin] = useState(true);

  // LOGIN METHOD
  const [loginMethod, setLoginMethod] = useState("otp");

  // INPUT STATES
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [showOtpBox, setShowOtpBox] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  // =========================
  // SEND OTP
  // =========================

  const handleSendOtp = () => {

    if (mobile.length !== 10) {

      alert("Enter Valid Mobile Number");

      return;
    }

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    // CHECK USER EXISTS
    const existingUser = users.find(
      (user) => user.mobile === mobile
    );

    // USER NOT REGISTERED
    if (!existingUser) {

      alert("Please Create Account First");

      return;
    }

    // GENERATE OTP
    const newOtp = Math.floor(
      1000 + Math.random() * 9000
    );

    setGeneratedOtp(newOtp.toString());

    setShowOtpBox(true);

    alert(`Your OTP is ${newOtp}`);
  };

  // =========================
  // VERIFY OTP
  // =========================

  const handleVerifyOtp = () => {

    if (otp !== generatedOtp) {

      alert("Invalid OTP");

      return;
    }

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.mobile === mobile
    );

    if (!existingUser) {

      alert("User Not Found");

      return;
    }

    // LOGIN USER
    localStorage.setItem(
      "currentUser",
      JSON.stringify(existingUser)
    );

    alert("Login Successful");

    onClose();
  };

  // =========================
  // EMAIL LOGIN
  // =========================

  const handleEmailLogin = () => {

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!existingUser) {

      alert("Invalid Email or Password");

      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(existingUser)
    );

    alert("Login Successful");

    onClose();
  };

  // =========================
  // SIGNUP
  // =========================

  const handleSignup = () => {

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find(
      (user) =>
        user.email === email ||
        user.mobile === mobile
    );

    if (alreadyExists) {

      alert("User Already Exists");

      return;
    }

    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      mobile,
      email,
      password
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Account Created Successfully");

    // RESET INPUTS
    setFirstName("");
    setLastName("");
    setMobile("");
    setEmail("");
    setPassword("");

    // GO TO LOGIN
    setIsLogin(true);
  };

  return (

    <div className="modal-overlay">

      <div className="modal-container">

        {/* CLOSE BUTTON */}

        <button
          type="button"
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        {/* IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt=""
          className="top-image"
        />

        {
          isLogin ? (

            // =========================
            // LOGIN SECTION
            // =========================

            <div className="form-section">

              <h1>Sign In</h1>

              {/* LOGIN METHOD BUTTONS */}

              <div className="switch-buttons">

                <button
                  type="button"
                  className={
                    loginMethod === "otp"
                      ? "active-btn"
                      : ""
                  }
                  onClick={() => {

                    setLoginMethod("otp");

                    setShowOtpBox(false);

                    setOtp("");
                  }}
                >
                  Mobile + OTP
                </button>

                <button
                  type="button"
                  className={
                    loginMethod === "email"
                      ? "active-btn"
                      : ""
                  }
                  onClick={() => {

                    setLoginMethod("email");

                    setShowOtpBox(false);

                    setOtp("");
                  }}
                >
                  Email + Password
                </button>

              </div>

              {/* OTP LOGIN */}

              {
                loginMethod === "otp" ? (

                  <>

                    <input
                      type="text"
                      placeholder="+91 Mobile Number*"
                      value={mobile}
                      onChange={(e) =>
                        setMobile(e.target.value)
                      }
                    />

                    {
                      !showOtpBox ? (

                        <button
                          type="button"
                          className="main-btn"
                          onClick={handleSendOtp}
                        >
                          Send OTP
                        </button>

                      ) : (

                        <>

                          <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) =>
                              setOtp(e.target.value)
                            }
                          />

                          <button
                            type="button"
                            className="main-btn"
                            onClick={handleVerifyOtp}
                          >
                            Verify OTP
                          </button>

                        </>

                      )
                    }

                  </>

                ) : (

                  // EMAIL LOGIN

                  <>

                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />

                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />

                    <button
                      type="button"
                      className="main-btn"
                      onClick={handleEmailLogin}
                    >
                      Sign In
                    </button>

                  </>

                )
              }

              {/* SWITCH TO SIGNUP */}

              <p className="bottom-text">

                Don't have an account?{" "}

                <span
                  onClick={() => {

                    setIsLogin(false);

                    setShowOtpBox(false);

                    setOtp("");
                  }}
                >
                  Create an Account
                </span>

              </p>

            </div>

          ) : (

            // =========================
            // SIGNUP SECTION
            // =========================

            <div className="form-section">

              <h1>Create an Account</h1>

              <input
                type="text"
                placeholder="First Name*"
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) =>
                  setLastName(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="+91 Mobile*"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value)
                }
              />

              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="main-btn"
                onClick={handleSignup}
              >
                Create Account
              </button>

              {/* SWITCH TO LOGIN */}

              <p className="bottom-text">

                Already have an account?{" "}

                <span
                  onClick={() => {

                    setIsLogin(true);

                    setShowOtpBox(false);

                    setOtp("");
                  }}
                >
                  Sign In
                </span>

              </p>

            </div>

          )
        }

      </div>

    </div>
  );
}

export default AuthModal;