import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import brandlogo from "../assets/brand_logo.png";
import { FaCartPlus, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-svw h-16 bg-white flex items-center justify-between px-4 fixed top-0 z-10 shadow-md">
      {/* Brand Logo */}
      <NavLink to="/" className="h-10">
        <img
          src={brandlogo}
          alt="brand logo"
          className="hover:cursor-pointer h-full"
        />
      </NavLink>

      {/* Cart Icon and Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <NavLink to="/cart" className="mr-4">
          <FaCartPlus className="text-2xl text-red-500 hover:cursor-pointer hover:scale-110" />
        </NavLink>
        <FaBars
          className="text-2xl text-gray-800 hover:cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center md:gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-4 list-none text-center w-full md:w-auto">
          {["HOME", "PRODUCTS", "LOCATIONS", "ABOUT", "CONTACT"].map(
            (link, index) => (
              <li key={index}>
                <NavLink
                  to={`/${link === "HOME" ? "" : link.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 underline font-bold"
                      : "hover:text-red-500 hover:underline font-bold"
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {link}
                </NavLink>
              </li>
            )
          )}
          {/* Login and Sign-up Links for Mobile */}
          <li className="md:hidden">
            <NavLink
              to="/login"
              className="bg-red-500 hover:scale-110 text-white font-bold py-2 px-4 rounded block w-full text-center"
            >
              Login
            </NavLink>
          </li>
          <li className="md:hidden">
            <NavLink
              to="/signup"
              className="text-gray-800 font-bold py-2 px-4 rounded hover:border-2 hover:border-red-500 block w-full text-center"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Login and Cart Icons for Desktop */}
      <div className="hidden md:flex items-center gap-4 text-gray-800">
        <NavLink
          to="/login"
          className="bg-red-500 hover:scale-110 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="text-gray-800 font-bold py-2 px-4 rounded hover:border-2 hover:border-red-500"
        >
          Sign up
        </NavLink>
        <NavLink to="/cart">
          <FaCartPlus className="text-3xl text-red-500 hover:cursor-pointer hover:scale-110" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
