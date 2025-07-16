import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-cyan-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-white/80">
                  CodeParent HQ, Trincomalee Campus,
                  <br />
                  Eastern Province, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-cyan-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-white/80">+94 77 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-cyan-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-white/80">support@codeparent.org</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-gray-800 p-6 rounded-2xl shadow-md space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent (this is a sample form).");
            }}
          >
            <div>
              <label className="block mb-1 text-white/80">Your Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Your Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-white/80">Your Message</label>
              <textarea
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
