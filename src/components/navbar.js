import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarLogo from "../Images/Navbar Logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled
          ? "bg-transparent backdrop-blur-md shadow-lg text-blue-300"
          : "bg-transparent text-white"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={NavbarLogo}
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-xl font-bold">CodeParent</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center font-semibold text-base">
          <li className="hover:text-cyan-500 transition duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-cyan-500 transition duration-300 cursor-pointer">
            Goals
          </li>
          <li className="hover:text-cyan-500 transition duration-300 cursor-pointer">
            Privacy
          </li>
          <li className="hover:text-cyan-500 transition duration-300 cursor-pointer">
            Contact
          </li>
          <li className="hover:text-cyan-500 transition duration-300 cursor-pointer">
            About
          </li>

          {/* Sign In Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")} // Using navigate for button
            className="ml-4 bg-cyan-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-cyan-600 transition duration-300"
          >
            Sign In
          </motion.button>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 backdrop-blur-lg px-6 py-4 space-y-4">
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            <li className="hover:text-cyan-400 transition duration-300">
              Home
            </li>
            <li className="hover:text-cyan-400 transition duration-300">
              Goals
            </li>
            <li className="hover:text-cyan-400 transition duration-300">
              Privacy
            </li>
            <li className="hover:text-cyan-400 transition duration-300">
              Contact
            </li>
            <li className="hover:text-cyan-400 transition duration-300">
              About
            </li>
          </ul>

          <motionLink
            to="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 bg-cyan-500 text-white py-2 rounded-full shadow-md hover:bg-cyan-600 transition duration-300 text-center"
          >
            Sign In
          </motionLink>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
