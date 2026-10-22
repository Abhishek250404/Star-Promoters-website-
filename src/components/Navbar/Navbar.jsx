import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PhoneOutlined } from "@ant-design/icons";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/serivcepage" },
    { name: "Our Projects", path: "/projectpage" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactpage" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="STAR Promoters"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 font-medium lg:flex">
          {navLinks.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition ${
                  isActive
                    ? "text-red-600 after:absolute after:-bottom-2 after:left-0 after:h-0.75 after:w-full after:rounded-full after:bg-blue-500"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop Call */}
          <a
            href="tel:+918825767785"
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 lg:flex"
          >
            <PhoneOutlined />
            <span>+91 88257 67785</span>
          </a>

          {/* Mobile Call */}
          <a
            href="tel:+918825767785"
            className="rounded-full bg-blue-600 p-3 text-white lg:hidden"
          >
            <PhoneOutlined />
          </a>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-700 lg:hidden"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col py-3">
          {navLinks.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-gray-100 px-6 py-4 font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-red-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;