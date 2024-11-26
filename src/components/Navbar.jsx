import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import closeIcon from "../assets/close.svg"; // Replace with your close icon path
import menuIcon from "../assets/menu.svg"; // Replace with your menu icon path
import logo from "../assets/TMOF.jpg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScroll = useRef(0);
  const location = useLocation();

  // Show the navbar only on the home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return; // Prevent visibility toggling on non-home pages

      const currentScroll = window.pageYOffset;

      // Show menu if at the top of the screen
      if (currentScroll === 0) {
        setIsVisible(true);
      } else if (currentScroll > lastScroll.current && currentScroll > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  if (!isHomePage) {
    return null; // Do not render navbar if not on home page
  }

  return (
    <nav
      className={`w-full fixed top-0 z-50 bg-primary shadow-md ${
        isVisible ? "block" : "hidden"
      }`}
    >
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
          onClick={() => setToggle(true)}
        >
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-8 text-white text-lg">
          {navLinks.map((nav) => (
            <li key={nav.id} className="flex items-center">
              <Link
                to={`#${nav.id}`}
                className="hover:text-red-600 flex items-center gap-2"
                onClick={() => setToggle(false)}
              >
                {nav.icon} {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sliding Menu for Mobile */}
        <div
          className={`fixed top-0 left-0 h-screen w-[70%] bg-orange-600 z-50 transform ${
            toggle ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
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
          <ul className="mt-10 space-y-6 pl-6 text-white text-lg">
            {navLinks.map((nav) => (
              <li key={nav.id} className="flex items-center">
                <Link
                  to={`#${nav.id}`}
                  className="hover:text-black flex items-center gap-2"
                  onClick={() => setToggle(false)}
                >
                  {nav.icon} {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
