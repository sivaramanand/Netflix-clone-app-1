import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Player.css"
const Player = () => {
  const navigate = useNavigate();
  return (
    <div className="playercontianer">
      <div className="player">
        <div className="backArrow">
          <BsArrowLeftShort className="arrow" onClick={() => navigate(-1)} />
        </div>
        <video src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4" autoPlay loop controls muted/>
      </div>
    </div>
  );
};

export default Player;
