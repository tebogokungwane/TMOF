import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles";
import { menu, close } from "../assets";
import logo from "../assets/TMOF.jpg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation(); // Get current location

  // Only render the Navbar if the user is on the home page
  if (location.pathname !== "/") {
    return null; // Do not render Navbar on other pages
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary shadow-md`}
      style={{
        zIndex: 999, // Ensures Navbar stays on top
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            TMOF &nbsp;
            <span className="sm:block hidden"> | FRIENDS OF YOUR PARCEL</span>
          </p>
        </Link>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li>
                <a
                  href="/"
                  className="text-white font-medium cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
