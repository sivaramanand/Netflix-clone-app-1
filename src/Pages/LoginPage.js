import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../Utils/firebase-config";
import Alert from '@mui/material/Alert';
import BackgroundImage from "../Components/BackgroundImage";
import Header from "../Components/Header";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false); 

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      setShowError(false);
    } catch (error) {
      console.error(error);
      setShowError(true); 
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate("/");
      }
    });

    return unsubscribe; // Clean up subscription
  }, [navigate]);

  return (
    <div className="container">
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          {showError && (
            <Alert severity="error">Either you have entered wrong credentials or you have not yet signed up.</Alert>
          )}
          <div className="loginform">
            <div className="logintitle">
              <div className="logintitleh6">
                <h5 className="h6login">
                  (If you are using Jio as Internet Service Provider
                </h5>
                <h5 className="h6login">
                  Please Turn On VPN.
                </h5>
                <h5 className="h6login">
                  Jio Doesnt Support Movie Database API used in the Project)
                </h5>
                </div>

                <h1 className="h1login">LOGIN</h1>
            </div>

            <div
              className="logindetials"
              style={{
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                gap: "2.5rem",
              }}
            >
              <input
                className="logininput"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
              <input
                className="logininput"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
              <button className="loginbutton" onClick={handleSignIn}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
