import React from "react";

const button = ({ classname, title }) => {
  return (
    <div>
      <button
        className={`bg-[#6b50cf] text-white px-4 py-2 rounded-lg ${classname}`}
      >
        {title}
      </button>
    </div>
  );
};

export default button;
