import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About CodeParent
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white/80 text-lg leading-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <strong>CodeParent</strong> is a community-driven platform designed to
          empower parents and guardians in supporting their children's computer
          science education, especially at the **KS2 level (ages 7–11)**.
          Whether you're completely new to tech or have some experience, we're
          here to guide you every step of the way.
        </motion.p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-cyan-400">Our Mission</h2>
            <p className="text-white/80">
              We aim to bridge the digital gap between children and their
              families by providing accessible learning tools, community
              support, and educational resources tailored to modern computing
              education.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-cyan-400">What We Offer</h2>
            <ul className="list-disc ml-5 text-white/80 space-y-2">
              <li>KS2-aligned coding tutorials (e.g., Scratch)</li>
              <li>Parent-child coding workshops</li>
              <li>Online safety guides</li>
              <li>Inclusive multilingual support (English, Polish, Urdu)</li>
              <li>Offline learning materials for remote access</li>
              <li>Progress tracking for MSc research</li>
            </ul>
          </motion.div>
        </div>

        {/* Join Message */}
        <motion.div
          className="mt-16 bg-cyan-600 text-white px-6 py-8 rounded-2xl text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2">Join Our Journey</h3>
          <p className="text-lg">
            Be part of a movement that empowers families and inspires future
            coders. Together, let's unlock the power of computing education.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
