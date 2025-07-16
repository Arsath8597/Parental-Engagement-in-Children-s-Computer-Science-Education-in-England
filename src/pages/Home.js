import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaLaptopCode,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";
import HomeImg from "../Images/classroomsave.jpg";

const Landing = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white px-6 py-14 overflow-y-auto">
      <div className="max-w-7xl mt-16 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text and Features */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl  sm:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Empowering Parents in{" "}
            <span className="text-cyan-300">Computer Science Education</span>
          </h1>

          <p className="text-white/90 text-lg mb-6">
            Unlock the potential of your child's future by engaging in their
            learning journey. Learn together, grow together.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <FaLaptopCode className="text-cyan-300 text-xl" />
              <span>
                Learn basic coding alongside your child in multiple languages
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaHandsHelping className="text-green-300 text-xl" />
              <span>Access fun and interactive learning resources</span>
            </li>
            <li className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-yellow-300 text-xl" />
              <span>Join free online/offline coding workshops</span>
            </li>
            <li className="flex items-center gap-3">
              <FaUsers className="text-pink-300 text-xl" />
              <span>Connect with other parents and share tips</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
            <motion.button
              className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={HomeImg}
            alt="Parent and child coding"
            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white/20 object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
