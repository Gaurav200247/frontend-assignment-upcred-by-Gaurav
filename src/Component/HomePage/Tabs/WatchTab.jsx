import React from "react";
import { watch_tab_data } from "../../../data";
import { AiFillEye } from "react-icons/ai";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import "./watchTab.css";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";

const WatchTab = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ backgroundColor: "rgb(247, 247, 247)", paddingTop: "2vmax" }}
      className="flex flex-col justify-between items-center"
    >
      <div className="watch-container">
        {watch_tab_data.map((item, index) => {
          return (
            <div
              key={index}
              className="watch-card"
              onClick={() => {
                dispatch({ type: "OpenWatchModal", payload: index });
              }}
            >
              <div className="card-header">
                <span>
                  <AiFillEye className="mr-3" /> {item.views}
                </span>
                <span>
                  <MdOutlineSlowMotionVideo />
                </span>
              </div>

              <div className="card-main">
                <video
                  loop={true}
                  muted
                  onMouseOver={(event) => event.target.play()}
                  onMouseOut={(event) => event.target.pause()}
                >
                  <source src={item.src} />
                </video>
              </div>

              <div className="card-footer">
                <p>{item.title}</p>

                <span>
                  <img src={item.avatar} alt={item.name} />
                  <p>{item.name}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <Loading />
    </div>
  );
};

export default WatchTab;
