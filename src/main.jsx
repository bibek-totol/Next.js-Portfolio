import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import "./index.css";
import ProfileDetails1 from "./ProfileDetails1.jsx";
import ProfileDetails2 from "./ProfileDetails2.jsx";
import ProfileDetails3 from "./ProfileDetails3.jsx";
import ProfileDetails4 from "./ProfileDetails4.jsx";
import ProfileDetails5 from "./ProfileDetails5.jsx";
 import ProfileDetails6 from "./ProfileDetails6.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details1" element={<ProfileDetails1 />} />
      <Route path="/details2" element={<ProfileDetails2 />} />
      <Route path="/details3" element={<ProfileDetails3 />} />
      <Route path="/details4" element={<ProfileDetails4 />} />
      <Route path="/details5" element={<ProfileDetails5 />} />
      <Route path="/details6" element={<ProfileDetails6 />} />


    </Routes>
  </BrowserRouter>
);
