import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header/Header.jsx";
import "./HomePage.css";
import ReadTab from "./Tabs/ReadTab";
import Svg from "./Svg.jsx";
import WatchTab from "./Tabs/WatchTab.jsx";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useSelector } from "react-redux/es/exports.js";
import WatchModalContainer from "./Modals/WatchModalContainer.jsx";

const HomePage = () => {
  const { WatchModal } = useSelector((state) => state.Modal);

  const [ActiveTab, setActiveTab] = useState("watch");
  const [Show, setShow] = useState(false);

  const ScrollHandler = () => {
    if (window.scrollY >= 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
    return () => {
      window.removeEventListener("scroll", ScrollHandler);
    };
  }, []);

  return (
    <div className="relative">
      <button className={`ScrollToTopBtn ${Show && "show-scroller"}`}>
        <AiOutlineArrowUp
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </button>
      <Header />
      <div className={`tabs-switch-container ${Show && "Stick"}`}>
        <div className={`tab-switch-blocks ${Show && "show"}`}>
          <Svg />
        </div>

        <ul>
          <li
            className={`tab-btn ${ActiveTab === "watch" && "active"}`}
            onClick={() => setActiveTab("watch")}
          >
            Watch
          </li>
          <li
            className={`tab-btn ${ActiveTab === "read" && "active"}`}
            onClick={() => setActiveTab("read")}
          >
            Read
          </li>
          <li className={`tab-btn ${ActiveTab === "shop" && "active"}`}>
            <a href="https://shop.trell.co/?utm_source=Trell%20Web&utm_medium=Watch&utm_content=Shop">
              Shop
            </a>
          </li>
        </ul>

        <div className={`tab-switch-blocks ${Show && "show"}`}>
          <button className="btn-3">
            <FaGooglePlay />
            <span>
              <p>Get It On</p>
              <p>Google Play</p>
            </span>
          </button>

          <button className="btn-3">
            <BsApple />
            <span>
              <p>Download On</p>
              <p>App Store</p>
            </span>
          </button>
        </div>
      </div>

      {ActiveTab === "watch" && <WatchTab />}
      {ActiveTab === "read" && <ReadTab />}

      {WatchModal && <WatchModalContainer />}
    </div>
  );
};

export default HomePage;
