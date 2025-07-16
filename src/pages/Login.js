import React from "react";
import Input from "../components/Input";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center w-full min-h-screen"
      style={{
        background: "linear-gradient(to right top, #cfd9df, #e2ebf0)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center text-[#6B50CF] mb-6">
          Parent Login
        </h1>

        <div className="space-y-4">
          <Input placeholder="Enter Email" />
          <Input placeholder="Enter Password" type="password" />
        </div>

        <div className="mt-6">
          <Button title="Login" />
        </div>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#6B50CF] font-semibold underline">
            Register here
          </Link>
        </p>

        <div className="mt-6">
          <p className="text-center text-gray-500 mb-2">Or login with</p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full"
            >
              <FaGoogle />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full"
            >
              <FaGithub />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
            >
              <FaLinkedin />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
