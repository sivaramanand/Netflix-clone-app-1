import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../Utils/firebase-config";
import Header from "../Components/Header";
import BackgroundImage from "../Components/BackgroundImage";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className="contianer">
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <div className="logintitleh6">
              <h5 className="h5login">
                (If you are using Jio as Internet Service Provider. Please Turn
                On VPN.Jio Doesnt Support Movie Database API used in the
                Project)
              </h5>
            </div>
            <div className="headingflex">
              <h2 className="h2login">UNLIMITED MOVIES, TV SHOWS AND MORE</h2>
              <h5 className="h5login">WATCH ANYWHERE, CANCEL ANYTIME</h5>
              <h6 className="h6login">
                READY TO WATCH? ENTER YOUR EMAIL TO CREATE OR RESTART MEMBERSHIP
              </h6>
            </div>
          </div>
          <div className="signupform">
            {showPassword ? (
              <input
                className="signupinput"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ) : (
              <input
                className="signupinput"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword ? (
              <button
                className="signupbutton"
                onClick={() => setShowPassword(true)}
              >
                Get Started
              </button>
            ) : (
              <button className="signupbutton" onClick={handleSignIn}>
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
