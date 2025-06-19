import React from "react";
import "../components/nav.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="h-18 flex justify-center gap-5 py-4 bg-gray-100 shadow-md">
      <div className="navBar">
        {/* <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Home</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Medicine</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Contact</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">About Us</button> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Medicines</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
