

import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">

      {/* =========================
          NAVBAR HEADER
      ========================== */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-1 sm:px-6 lg:px-8">

        {/* =========================
            LOGO
        ========================== */}
        <Link
          to="/"
          onClick={closeMenu}
          // className="logo-shine relative inline-flex h-[65px] w-[170px] items-center justify-center overflow-hidden rounded-md"
          className="logo-shine relative inline-flex h-[65px] w-[150px] items-center justify-start overflow-hidden rounded-md"
          aria-label="Dhanu Enterprises"
        >
          <img
            src="/logo.png"
            alt="Dhanu Enterprises"
            className="h-full w-full object-contain"
          />

          {/* Sharp shining line */}
          <span className="logo-shine-line pointer-events-none absolute inset-y-0 left-0" />
        </Link>


        {/* =========================
            DESKTOP MENU
        ========================== */}
        <div className="hidden items-center gap-9 md:flex">

          {/* HOME */}
          <Link
            to="/"
            className="navbar-link group relative text-lg font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500"
          >
            Home

            <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>


          {/* MATERIALS */}
          <Link
            to="/products"
            className="navbar-link group relative text-lg font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500"
          >
            Materials

            <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>


          {/* ABOUT */}
          <Link
            to="/about"
            className="navbar-link group relative text-lg font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500"
          >
            About

            <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>


          {/* CONTACT */}
          <Link
            to="/contact"
            className="navbar-link group relative text-lg font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500"
          >
            Contact

            <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>


          {/* =========================
              DESKTOP CALL BUTTON
          ========================== */}
          <a
            href="tel:+919362292407"
            className="group flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg active:translate-y-0"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />

            <span>Call Now</span>
          </a>
        </div>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-xl text-gray-800 transition-all duration-300 hover:bg-orange-50 hover:text-orange-500 active:scale-90 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="transition-all duration-300"
          />
        </button>
      </div>


      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`overflow-hidden border-t border-gray-200 bg-white shadow-md transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div
          className={`px-4 py-4 transition-all duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >

          {/* HOME */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center rounded-lg px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-orange-50 hover:text-orange-500"
          >
            <span>Home</span>
          </Link>


          {/* MATERIALS */}
          <Link
            to="/products"
            onClick={closeMenu}
            className="group flex items-center rounded-lg px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-orange-50 hover:text-orange-500"
          >
            <span>Materials</span>
          </Link>


          {/* ABOUT */}
          <Link
            to="/about"
            onClick={closeMenu}
            className="group flex items-center rounded-lg px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-orange-50 hover:text-orange-500"
          >
            <span>About</span>
          </Link>


          {/* CONTACT */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="group flex items-center rounded-lg px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-orange-50 hover:text-orange-500"
          >
            <span>Contact</span>
          </Link>


          {/* MOBILE CALL BUTTON */}
          <a
            href="tel:+919362292407"
            onClick={closeMenu}
            className="group mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg active:translate-y-0"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />

            <span>Call Now</span>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

