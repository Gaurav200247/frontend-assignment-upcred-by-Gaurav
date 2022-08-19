import React from "react";
import Back_Video from "../../assests/download_page-video.mp4";
import "./DownloadPage.css";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { toast } from "react-toastify";

const DownloadPage = () => {
  return (
    <div className="downloadPage">
      <video loop={true} autoPlay="autoplay" muted>
        <source src={Back_Video} />
      </video>

      <div className="dp-info-container">
        <div className="head-block">
          <img src="/Logo.png" alt="logo" />
          <p>India's #1 Lifestyle App!</p>
        </div>

        <div className="main-block">
          <p>
            Passionate about Fashion, Beauty, Gadgets, Movies, Cooking & Travel?
          </p>
          <p>Download Trell App.</p>

          <div className="download-btns-container">
            <a
              href="https://play.google.com/store/apps/details?id=app.trell&referrer=utm_source%3Dtrell.co%26utm_medium%3DWeb%26utm_campaign%3DWebsite"
              className="btn-3"
            >
              <FaGooglePlay />
              <span>
                <p>Get It On</p>
                <p>Google Play</p>
              </span>
            </a>

            <a
              href="https://apps.apple.com/us/app/trell-food-and-travel-diary-blog-or-collections/id1241794239"
              className="btn-3"
            >
              <BsApple />
              <span>
                <p>Download On</p>
                <p>App Store</p>
              </span>
            </a>
          </div>
        </div>

        <div className="footer-block">
          <button
            className="btn btn flex justify-center items-center"
            onClick={() => {
              toast.success("Downloading APK........");
            }}
          >
            <TbDownload className="mr-3" /> Download (1.7MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
