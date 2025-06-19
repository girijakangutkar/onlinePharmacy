import React from "react";
import "../components/nav.css"; 

const NavBar = () => {
  return (
  
    <nav class='h-18 flex justify-center gap-5 py-4 bg-gray-100 shadow-md'>
      <div className = 'navBar' >
        
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Home</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Medicine</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">Contact</button>
        <button class="px-4 py-4 hover:bg-green-500 hover:text-white  rounded transition duration-300">About Us</button>
      </div>
    </nav>
  );
};

export default NavBar;
