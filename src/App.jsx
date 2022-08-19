import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Component/LandingPage/LandingPage.jsx";
import HomePage from "./Component/HomePage/HomePage.jsx";
import DownloadPage from "./Component/DownloadPage/DownloadPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/watch" element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </>
  );
};

export default App;
