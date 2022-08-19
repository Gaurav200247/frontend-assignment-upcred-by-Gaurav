import React from "react";
import { Link } from "react-router-dom";
import Back_Video from "../../assests/Landing_Page_video.mp4";
import { langInfo } from "../../data";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landiing-page-container">
      <div className="landing-video-container">
        <video loop={true} autoPlay="autoplay" muted>
          <source src={Back_Video} />
        </video>
      </div>

      <h1>Choose the language you love watching videos in</h1>

      <div className="lang-btns-container">
        {langInfo.map((item, index) => {
          return (
            <Link
              to="/watch"
              key={index}
              className="lang-btn"
              style={{ background: item.backColor }}
            >
              <span>{item.name}</span>
              <img src={item.src} alt={item.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
