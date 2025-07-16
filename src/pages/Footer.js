import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white ">
      <hr />
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo + Intro */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">CodeParent</h2>
          <p className="text-white/70">
            Empowering families to support computer science education at the KS2
            level and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Goals
            </li>
            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Privacy
            </li>
            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Contact
            </li>
            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              About Us
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">Contact</h3>
          <p className="text-white/70 mb-4">Email: support@codeparent.org</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="text-center border-t border-gray-700 py-4 text-sm text-white/60">
        &copy; {new Date().getFullYear()} CodeParent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
