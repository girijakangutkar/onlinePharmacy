import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { auth } from "../utils/firebaseConfig";
import { AuthContextType } from "../context/AuthContext";
import CartItems from "../utils/CartItems";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const { user } = useContext(AuthContextType);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center fixed top-0 w-full z-1000 justify-between gap-5 py-4 bg-white shadow-md pl-5 pr-5">
      {/* <div> */}

      <div className="flex flex-row block lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <h1 className="m-2">LOGO</h1>
      </div>
      {/* </div> */}
      <div
        className={`${menuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto`}
      >
        <div className="flex flex-col md:flex-row xl:flex-row 2xl:flex-row justify-between text-start">
          <NavLink
            className={({ isActive }) =>
              `p-1 m-3 transition duration-300 border-b-2 ${
                isActive ? "border-b-green-500, " : "border-transparent"
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
          {/* <NavLink
            className={({ isActive }) =>
              `p-1 m-3 transition duration-300 border-b-2 ${
                isActive ? "border-b-green-500" : "border-transparent"
              }`
            }
            to="/medicines"
          >
            Medicines
          </NavLink> */}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-end self-center m-2">
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
                className="bg-red-500 text-white p-1 rounded shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button className="bg-green-500 text-white p-1 rounded shadow-md">
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
