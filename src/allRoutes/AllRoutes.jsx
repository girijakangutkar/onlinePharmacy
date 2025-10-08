import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Medicines from "../pages/Medicines";
import Cart from "../pages/Cart";

import NavBar from "../components/NavBar";

import Login from "../auth/Login";
import Signup from "../auth/Signup";

import Vitamines from "../subPages/Vitamines";
import NotFound from "../subPages/NotFound";
import PersonalCare from "../subPages/PersonalCare";
import HealthCare from "../subPages/HealthCare";
import Diabetes from "../subPages/Diabetes";
import Aurved from "../subPages/Aurvedic";
import Medicinal from "../subPages/MedicineList";
import BabyCare from "../subPages/BabyCare";
import PainCare from "../subPages/PainCare";
import HealthBlogList from "../content/HealthBlogList";
import LabTest from "../content/LabTest";
import Offers from "../content/Offers";
import ConsultDoctor from "../content/ConsultDoctor";
import Plus from "../content/Plus";

const AllRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* main pages routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/cart" element={<Cart />} />

        {/* auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />

        {/* subpages routes */}
        <Route path="/vitamines" element={<Vitamines />} />
        <Route path="/PersonalCare" element={<PersonalCare />} />
        <Route path="/heathCare" element={<HealthCare />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/Medicinal" element={<Medicinal />} />
        <Route path="/aurved" element={<Aurved />} />
        <Route path="/babyCare" element={<BabyCare />} />
        <Route path="/PainCare" element={<PainCare />} />

        <Route path="/labTests" element={<LabTest />} />
        <Route path="/consultDoctor" element={<ConsultDoctor />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/HealthBlogs" element={<HealthBlogList />} />
        <Route path="/plus" element={<Plus />} />
        {/* not found routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
