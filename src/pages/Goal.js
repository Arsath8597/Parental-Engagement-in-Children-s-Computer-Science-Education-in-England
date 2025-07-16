import React from "react";
import { motion } from "framer-motion";
import GoalsImg from "../Images/STREAM-goals-alternative-to-SMART-goals.jpeg";

const Goal = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden px-6 py-16 bg-black/80 text-white">
      {/* Background Image */}
      <img
        src={GoalsImg}
        alt="Goals"
        className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
      />

      {/* Title */}
      <motion.h1
        className="text-center text-4xl md:text-5xl font-bold mb-12 text-cyan-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Goals
      </motion.h1>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Helping You Overcome the Challenges in Computer Science Education
          </h2>
          <p className="text-white/80">
            We’re here to help parents overcome the digital gap and actively
            participate in their child's computer science journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Read More
          </motion.button>
        </motion.div>

        {/* Right Side List */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ul className="space-y-4 list-disc pl-5 text-white/90">
            {[
              "Empower parents to support KS2 (ages 7–11) CS education.",
              "Provide KS2-aligned resources (e.g., Scratch tutorials, online safety guides).",
              "Offer interactive parent-child coding workshops.",
              "Foster a parent community for sharing tips and experiences.",
              "Track anonymized engagement (e.g., logins, resource usage) for MSc research.",
              "Ensure inclusivity with multilingual support (English, Polish, Urdu) and offline resources.",
              "Align with England’s National Curriculum for Computing.",
            ].map((goal, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {goal}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Goal;
