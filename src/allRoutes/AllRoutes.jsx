import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NavBar from "../components/NavBar";
import Medicines from "../pages/Medicines";

const AllRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Medicines />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
