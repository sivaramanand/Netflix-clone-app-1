import React from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="headercontainer">
      <div className="logo">
        <img className="imageClass" src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png" alt="no internet connection"/>
      </div>
      <button className="button" onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </div>
  );
};

export default Header;
