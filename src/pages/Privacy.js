import React from "react";
import {
  FaLock,
  FaShieldAlt,
  FaUserSecret,
  FaGlobe,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Statement
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg text-white/90 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <strong>Effective July 20, 2025</strong> — At{" "}
          <span className="text-cyan-300">CodeParent</span>, we take your
          privacy seriously. Whether you're a parent, student, or teacher, we
          are committed to protecting your personal information.
        </motion.p>

        {/* Privacy Points */}
        <div className="grid gap-8 md:grid-cols-2 mt-12">
          {/* Point 1 */}
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaLock className="text-3xl text-cyan-400" />
            <div>
              <h3 className="text-xl font-semibold">Data Security</h3>
              <p className="text-white/80">
                We encrypt all data in transit and at rest. Your login details
                and personal info are securely stored using the latest security
                standards.
              </p>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaUserSecret className="text-3xl text-cyan-400" />
            <div>
              <h3 className="text-xl font-semibold">User Privacy</h3>
              <p className="text-white/80">
                We never share your data with third parties without your
                consent. Your privacy is respected at every level of our
                platform.
              </p>
            </div>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaGlobe className="text-3xl text-cyan-400" />
            <div>
              <h3 className="text-xl font-semibold">Global Compliance</h3>
              <p className="text-white/80">
                We comply with global data protection laws including GDPR. We
                are committed to ensuring lawful and transparent data handling.
              </p>
            </div>
          </motion.div>

          {/* Point 4 */}
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaBook className="text-3xl text-cyan-400" />
            <div>
              <h3 className="text-xl font-semibold">
                Educational Transparency
              </h3>
              <p className="text-white/80">
                All learning resources are open and accessible. We do not track
                learning behavior beyond anonymized research for system
                improvement.
              </p>
            </div>
          </motion.div>

          {/* Point 5 */}
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaShieldAlt className="text-3xl text-cyan-400" />
            <div>
              <h3 className="text-xl font-semibold">Child Protection</h3>
              <p className="text-white/80">
                As a family-focused platform, we ensure no personal data of
                children is collected without parental consent and visibility.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-white/70 mb-4">
            Want to learn more about how we handle your data?
          </p>
          <a
            href="#"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Read Full Privacy Policy
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
