import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTools, FaBriefcase, FaInfoCircle } from "react-icons/fa";
import closeIcon from "../assets/close.svg";
import menuIcon from "../assets/menu.svg";
import logo from "../assets/TMOF.jpg";
import Footer from "../components/Footer";

const Navbar = () => {
  const [toggle, setToggle] = useState(false); // Mobile menu toggle

  return (
    <nav className="w-full fixed top-0 z-50 bg-primary shadow-md">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <span className="text-white font-bold text-xl">TMOF</span>
        </Link>

        {/* Menu Button */}
        <button
          className="sm:hidden block text-white"
          onClick={() => setToggle(!toggle)}
        >
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-8 text-white text-lg">
          {navLinks.map((nav) => (
            <li key={nav.id} className="flex items-center">
              <Link
                to={nav.path}
                className="hover:text-red-600 flex items-center gap-2"
                onClick={() => setToggle(false)}
              >
                <span style={{ color: nav.color }}>{nav.icon}</span>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sliding Menu for Mobile */}
        <div
          className={`fixed top-0 left-0 h-screen w-[70%] bg-orange-600 z-50 flex flex-col transform ${
            toggle ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Header with Logo and Close Button */}
          <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
              <span className="text-white font-bold text-xl">TMOF</span>
            </div>

            {/* Close Button */}
            <button onClick={() => setToggle(false)}>
              <img src={closeIcon} alt="close" className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex-1 mt-10 space-y-6 pl-6 text-white text-lg">
            {navLinks.map((nav) => (
              <li key={nav.id} className="flex items-center">
                <Link
                  to={nav.path}
                  className="hover:text-black flex items-center gap-2"
                  onClick={() => setToggle(false)}
                >
                  <span style={{ color: nav.color }}>{nav.icon}</span>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer at the Bottom */}
          <div className="pb-4">
            <Footer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Navigation links with colored icons
const navLinks = [
  { id: "hero", title: "Home", path: "/", icon: <FaHome />, color: "#1877F2" }, // Blue
  { id: "services", title: "Our Service", path: "/services", icon: <FaTools />, color: "#F39C12" }, // Orange
  { id: "work", title: "Our Work", path: "/work", icon: <FaBriefcase />, color: "#2ECC71" }, // Green
  { id: "about", title: "About Us", path: "/about", icon: <FaInfoCircle />, color: "#bd048b" }, // Red
];
