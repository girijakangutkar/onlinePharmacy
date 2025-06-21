import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { auth } from "../utils/firebaseConfig";
import { AuthContextType } from "../context/AuthContext";
import CartItems from "../utils/CartItems";

const NavBar = () => {
  const { user } = useContext(AuthContextType);
  const navigate = useNavigate();
  return (
    <nav className="flex fixed top-0 w-full z-1000 justify-between gap-5 py-4 bg-white shadow-md pl-5 pr-5">
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            `p-1 m-3 transition duration-300 border-b-2 ${
              isActive ? "border-b-green-500" : "border-transparent"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-1 m-3 transition duration-300 border-b-2 ${
              isActive ? "border-b-green-500" : "border-transparent"
            }`
          }
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-1 m-3 transition duration-300 border-b-2 ${
              isActive ? "border-b-green-500" : "border-transparent"
            }`
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-1 m-3 transition duration-300 border-b-2 ${
              isActive ? "border-b-green-500" : "border-transparent"
            }`
          }
          to="/medicines"
        >
          Medicines
        </NavLink>
      </div>
      <div className="flex flex-row justify-between w-[7%]">
        <div className="flex flex-col justify-center justify-content-center align-center self-center content-center items-center">
          {user && (
            <button className="relative">
              <FaCartShopping size={20} onClick={() => navigate("/cart")} />
              <CartItems />
            </button>
          )}
        </div>
        <div>
          {user ? (
            <div className="flex flex-row">
              <button
                onClick={() => auth.signOut()}
                className="bg-red-500 text-white p-1.5 rounded shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button className="bg-green-500 text-white p-1.5 rounded shadow-md">
                <NavLink to="/login">Login</NavLink>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
