import React from "react";
import "./WatchModalContainer.css";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { watch_tab_data } from "../../../data";
import { AiOutlineHeart } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const WatchModalContainer = () => {
  const dispatch = useDispatch();
  const { index } = useSelector((state) => state.Modal);

  return (
    <div className="WatchModalContainer">
      <div className="WatchModal">
        <div className="video-container">
          <div className="user-info">
            <img
              src={watch_tab_data[index].avatar}
              alt={watch_tab_data[index].name}
            />
            <p>{watch_tab_data[index].name}</p>
            <button className="btn ml-5">follow</button>
          </div>

          <video loop={true} autoPlay="autoplay" muted controls>
            <source src={watch_tab_data[index].src} />
          </video>
        </div>

        <div className="info-container">
          <div className="title" style={{ fontSize: "1.5vmax" }}>
            {watch_tab_data[index].title}
          </div>
          <div className="share cursor-pointer">
            <BsWhatsapp className="mr-4 text-green-600" /> Share
          </div>
          <div className="like justify-between cursor-pointer">
            <span className="flex items-center">
              <AiOutlineHeart className="mr-4 text-red-600" /> Like
            </span>{" "}
            <span>{new Date().valueOf()}</span>
          </div>
          <h1
            style={{
              padding: "1vmax",
              fontSize: "1.2vmax",
              fontWeight: "bold",
            }}
          >
            Suggested Trails
          </h1>
        </div>
      </div>

      <ImCross
        className="mt-7 ml-3 text-white cursor-pointer "
        onClick={() => {
          dispatch({ type: "CloseWatchModal" });
        }}
      />
    </div>
  );
};

export default WatchModalContainer;
