import React, { useEffect, useState } from "react";
import TopNav from "../Components/TopNav";
import "./Netflix.css";
import AvengersIcon from "../Assets/avengers_Title_icon.jpg";
import { useNavigate } from "react-router-dom";
import { getGenres, fetchMovies } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Card";
import Slider from "../Components/SlideContainer";
const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const movies = useSelector((state)=> state.netflix.movies)
  const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
        if(generesLoaded){
          dispatch(fetchMovies({type: "all"}))
        }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies)
console.log(movies, "++movies")
  return (
    <>
      <TopNav isScrolled={isScrolled} />

      <div className="hero">
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          style={{
            height: "70vh",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(40%)",
          }}
          alt="logo"
        />
        <div
          className="contianer"
          style={{ position: "absolute", bottom: "1rem" }}
        >
          <div className="title">
            <div
              className="imagediv"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={AvengersIcon}
                style={{
                  height: "8rem",
                  width: "12rem",
                  paddingBottom: "1rem",
                }}
                alt="logo"
              ></img>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="buttons">
            <button
              onClick={() => navigate("/player")}
              className="playBtn"
              style={{
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "background-color": "red",
                color: "white",
                gap: "1rem",
                padding: "0.9rem",
                "padding-left": "1.5rem",
                "padding-right": "1.5rem",
                "padding-top": "0.6rem",
                "padding-bottom": "0.6rem",
                border: "none",
                cursor: "pointer",
                "border-radius": "0.5rem",
                "font-weight": "bolder",
                "font-size": "1.05rem",
              }}
            >
              Play
            </button>
            <button
              className="moreBtn"
              style={{
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "background-color": "red",
                color: "white",
                gap: "1rem",
                padding: "0.9rem",
                "padding-left": "1.5rem",
                "padding-right": "1.5rem",
                "padding-top": "0.6rem",
                "padding-bottom": "0.6rem",
                border: "none",
                cursor: "pointer",
                "border-radius": "0.5rem",
                "font-weight": "bolder",
                "font-size": "1.05rem",
              }}
            >
              More
            </button>
          </div>
        </div>
      </div>

      {/* <Card /> */}
      <Slider movies={movies} />
    </>
  );
};

export default Netflix;
