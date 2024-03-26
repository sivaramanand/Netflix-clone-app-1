import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./TopNav.css";
import {onAuthStateChanged,signOut} from "firebase/auth"
import {firebaseAuth} from "../Utils/firebase-config"
const TopNav = ({ isScrolled }) => {
  const navlinks = [
    { names: "Home", links: "/" },

  ];
  const navigate=useNavigate();
  onAuthStateChanged(firebaseAuth,(currentUser)=>{if(!currentUser) navigate("/login")})
  return (
    <div className="navcontaier">
      <nav
        className={`${isScrolled ? "scrolled" : "notscroll"}`}
        style={{
          position: "sticky",
          top: "0",
          height: "6rem",
          width: "100%",
          "justify-content": "space-between",
          position: "fixed",
          "z-index": "2",
          padding: "0.4rem",
          "align-items": "center",
          transition: "0.3s ease-in",
        }}
      >
        <div
          className="leftside"
          style={{
            display: "flex",
            "align-items": "center",
            gap: "2rem",
            "margin-left": "5rem",
          }}
        >
          <div className="logo">
            <img
              style={{ width: "10rem", height: "2rem" }}
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
            ></img>
          </div>
          <ul className="links">
            {navlinks.map(({ names, links }) => {
              return (
                <li key={names}>
                  <Link to={links}>{names}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="rightside"
          style={{
            display: "flex",
            "align-items": "center",
            gap: "1rem",
            "margin-right": "4rem",
          }}
        >
          <button onClick={()=>signOut(firebaseAuth)}>
            <AiOutlineLogout></AiOutlineLogout>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
