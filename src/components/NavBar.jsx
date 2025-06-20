import React from "react";
// import "../components/nav.css";
import { NavLink } from "react-router-dom";
import Medicines from "../pages/Medicines"; 
import About from "../pages/About";
import Home from "../pages/Home";
// import Contact from "../pages/Contact";



const NavBar = () => {
  return (
    <nav className="h-18 flex justify-center gap-5 py-4 bg-gray-100 shadow-md">
      <div className="navBar">
        {/* <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Home</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Medicine</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Contact</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">About Us</button> */}
        {/* <NavLink
          to="/messages"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300"
        >
          Messages
        </NavLink> */}
        <NavLink className="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300" to="/">Home</NavLink>
        <NavLink className="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300" to="/about">About Us</NavLink>
        <NavLink className="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300" to="/contact">Contact Us</NavLink>
        <NavLink className="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300" to="/medicines">Medicines</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
