import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NavBar from "../components/NavBar";
import Medicines from "../pages/Medicines";
import Vitamines from "../subPages/Vitamines";
import NotFound from "../subPages/NotFound";
import PersonalCare from "../subPages/PersonalCare";
import HealthCare from "../subPages/HealthCare";
import Diabetes from "../subPages/Diabetes";
import Aurved from "../subPages/Aurvedic";
import Contact from "../pages/Contact";
import Medicinal from "../subPages/Medicines";
import BabyCare from "../subPages/BabyCare";

const AllRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/vitamines" element={<Vitamines />} />
        <Route path="/PersonalCare" element={<PersonalCare />} />
        <Route path="/heathCare" element={<HealthCare />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/Medicinal" element={<Medicinal />} />
        <Route path="/aurved" element={<Aurved />} />
        <Route path="/babyCare" element={<BabyCare />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
