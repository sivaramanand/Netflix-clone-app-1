import React from "react";
import "./BackGroundImage.css";
import { useNavigate } from "react-router-dom";
const BackgroundImage = (props) => {
  const navigate = useNavigate();
  return (
    <div className="backgroundcontainer">
      <img className="images"
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
        alt="No internet connection"
      ></img>

    </div>
  );
};

export default BackgroundImage;
