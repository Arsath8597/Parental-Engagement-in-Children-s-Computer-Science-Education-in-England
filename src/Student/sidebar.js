import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { RiParentLine } from "react-icons/ri";
import { MdEvent, MdFeedback } from "react-icons/md";
import { SiMaterialformkdocs } from "react-icons/si";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // List of menu items with proper icons
  const menuItems = [
    { name: "Dashboard", icon: <IoHome size={20} />, Link: "/studnethome" },
    {
      name: "Parents",
      icon: <RiParentLine size={20} />,
      Link: "/studnethome/parents",
    },
    {
      name: "View Event",
      icon: <MdEvent size={20} />,
      Link: "/studnethome/event",
    },
    {
      name: "Materials",
      icon: <SiMaterialformkdocs size={20} />,
      Link: "/studnethome/material",
    },
    {
      name: "Give Feedback",
      icon: <MdFeedback size={20} />,
      Link: "/studnethome/feedback",
    },
  ];

  return (
    <div className="bg-[#131c37] w-60 h-screen shadow-xl flex flex-col justify-between py-6 px-4">
      {/* User Info */}
      <div>
        <div className="flex items-center gap-3 text-white mb-6">
          <div className="bg-[#6B50CF] p-2 rounded-full">
            <IoMdContact size={24} />
          </div>
          <h1 className="font-semibold text-lg">Mohamed Arsath</h1>
        </div>
        <hr className="border-gray-700 mb-6" />

        {/* Navigation Links */}
        <div className="flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <Link to={item.Link}>
              <div
                key={index}
                className="flex items-center gap-4 px-4 py-2 rounded-lg text-white hover:bg-[#6B50CF] cursor-pointer transition"
              >
                {item.icon}
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sign Out */}
      <div>
        <hr className="border-gray-700 mb-4" />
        <div className="flex items-center gap-3 text-white px-4 py-2 hover:bg-red-600 rounded-lg cursor-pointer transition">
          <FaSignOutAlt size={18} />
          <p className="text-sm font-medium">Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
