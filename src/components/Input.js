import React from "react";

const Input = ({ placeholder, classname }) => {
  return (
    <div className="">
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ${classname}`}
      />
    </div>
  );
};

export default Input;
