import React from "react";
import { read_tab_data_lower, read_tab_data_upper } from "../../../data";
import "./ReadTab.css";
import { AiFillEye } from "react-icons/ai";
import Loading from "../Loading/Loading";

const ReadTab = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(247, 247, 247)" }}
      className="flex flex-col justify-between items-center"
    >
      <div className="upper-tab">
        <div className="read-card">
          <div className="read-card-header">
            <AiFillEye /> {read_tab_data_upper[0].views}
          </div>

          <div className="read-card-main" style={{ height: "80vh" }}>
            <img
              src={read_tab_data_upper[0].src}
              alt={read_tab_data_upper[0].title}
            />
          </div>

          <div className="read-card-footer">
            <p style={{ fontSize: "2.7vmax" }}>
              {read_tab_data_upper[0].title}
            </p>
            <span>
              <img
                src={read_tab_data_upper[0].avatar}
                alt={read_tab_data_upper[0].name}
              />
              <p>{read_tab_data_upper[0].name}</p>
            </span>
          </div>
        </div>

        <div>
          {read_tab_data_upper.map((item, index) => {
            if (index === 0) {
              return null;
            } else {
              return (
                <div
                  className="read-card"
                  style={{ width: "100%", height: "39vh" }}
                  key={index}
                >
                  <div className="read-card-header">
                    <AiFillEye /> {item.views}
                  </div>

                  <div className="read-card-main">
                    <img src={item.src} alt={item.title} />
                  </div>

                  <div className="read-card-footer">
                    <p>{item.title}</p>
                    <span>
                      <img src={item.avatar} alt={item.name} />
                      <p>{item.name}</p>
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="main-tab">
        <div>
          {read_tab_data_lower.map((item, index) => {
            return (
              <div className="read-card" key={index}>
                <div className="read-card-header">
                  <AiFillEye /> {item.views}
                </div>

                <div className="read-card-main">
                  <img src={item.src} alt={item.title} />
                </div>

                <div className="read-card-footer">
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
      </div>

      <Loading />
    </div>
  );
};

export default ReadTab;
