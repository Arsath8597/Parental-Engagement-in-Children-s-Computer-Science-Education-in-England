import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const Login = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #2D1B4D, #6B50CF)",
      }}
      className="flex items-center justify-center w-full min-h-screen"
    >
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center gap-3 mb-6"></div>

        <h1 className="text-2xl font-bold text-center text-[#6B50CF] mb-6">
          Sign In as Studnet
        </h1>

        <div className="space-y-4">
          <Input placeholder="Student Id" />
          <Input placeholder="First Name" />
          <Input placeholder="Secound Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </div>

        <div className="mt-6">
          <Button title="Sign In" />
        </div>

        <p className="text-center text-gray-600 mt-4">
          <>
            Already have an account?{" "}
            <Link to="/" className="text-[#6B50CF] font-semibold underline">
              Login here
            </Link>
          </>
        </p>

        <div className="mt-6">
          <p className="text-center text-gray-500 mb-2">Or sign Up with</p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition">
              <FaGoogle />
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition">
              <FaGithub />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition">
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
