import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NavBar from "../components/NavBar";

const AllRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<p></p>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
