import React, { useState } from "react";
import Svg from "../Svg";
import {
  BsThreeDots,
  BsApple,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <header>
      <nav>
        <div>
          <div className="logo-container">
            <Svg />
          </div>
          <div className="toggle-bar-btn">
            <BsThreeDots
              className="cursor-pointer"
              onClick={() => setIsToggled(!isToggled)}
            />

            {isToggled && (
              <div className="toggled-nav-container">
                <ul>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Career</li>
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Contact Us</li>
                </ul>

                <ul>
                  <li>
                    <BsFacebook className="text-blue-600" />
                  </li>
                  <li>
                    <BsInstagram className="text-pink-600" />
                  </li>
                  <li>
                    <BsTwitter className="text-sky-600" />
                  </li>
                  <li>
                    <BsYoutube className="text-red-600" />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
          <Link to="/" className="change-language-btn cursor-pointer">
            <RiExchangeFundsLine style={{ fontSize: "2vmax" }} />
            <span>Change Language</span>
          </Link>
          <div className="login-btn">
            <Link to="/download" className="btn">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="header-Info-container">
        <h1>
          Passionate about Fashion, Beauty, Gadgets, Movies, Cooking & Travel?
        </h1>
        <h1 className="mt-7 mb-6">Download the App.</h1>

        <div className="header-btn-container">
          <Link to="/download" className="btn flex justify-center items-center">
            <TbDownload className="mr-3" /> Download (1.7MB)
          </Link>

          <a
            href="https://play.google.com/store/apps/details?id=app.trell&referrer=utm_source%3Dtrell.co%26utm_medium%3DWeb%26utm_campaign%3DWebsite"
            className="btn-2"
          >
            <FaGooglePlay />
            <span>
              <p>Get It On</p>
              <p>Google Play</p>
            </span>
          </a>

          <a
            href="https://apps.apple.com/us/app/trell-food-and-travel-diary-blog-or-collections/id1241794239"
            className="btn-2"
          >
            <BsApple />
            <span>
              <p>Download On</p>
              <p>App Store</p>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
