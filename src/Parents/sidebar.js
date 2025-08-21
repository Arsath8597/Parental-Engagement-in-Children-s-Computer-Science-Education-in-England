import React, { useState, useEffect } from "react";
import { IoMdContact } from "react-icons/io";
import { IoHome, IoMenu } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { RiParentLine } from "react-icons/ri";
import { MdEvent, MdFeedback } from "react-icons/md";
import { SiMaterialformkdocs } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1068);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1068);
      if (window.innerWidth >= 1068) setIsOpen(true);
      else setIsOpen(false);
    };

    handleResize(); // run on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <IoHome size={20} />, Link: "/parentshome" },
    {
      name: "Learning Resources",
      icon: <RiParentLine size={20} />,
      Link: "/parentshome/leasrning_resources",
    },
    {
      name: "Workshops",
      icon: <MdEvent size={20} />,
      Link: "/parentshome/workshops",
    },
    {
      name: "Community Forum",
      icon: <SiMaterialformkdocs size={20} />,
      Link: "/parentshome/comminuty",
    },
    {
      name: "My Child's Progress",
      icon: <MdFeedback size={20} />,
      Link: "/parenthome/child_progress",
    },
  ];

  return (
    <>
      {/* Hamburger Toggle - Mobile only */}
      {!isDesktop && (
        <div className="fixed top-4 left-4 z-50">
          <button
            className="text-white bg-[#6B50CF] p-2 rounded-full shadow"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMenu size={24} />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen || isDesktop ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-60 bg-[#131c37] shadow-xl px-4 py-6 z-40 flex flex-col justify-between
          ${isDesktop ? "block" : isOpen ? "block" : "hidden"}`}
      >
        {/* User Info */}
        <div>
          <div className="flex items-center gap-3 text-white mb-6">
            <div className="bg-[#6B50CF] p-2 rounded-full">
              <IoMdContact size={24} />
            </div>
            <h1 className="font-semibold text-lg">Mohamed Arsath</h1>
          </div>
          <hr className="border-gray-700 mb-6" />

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.Link}>
                <div className="flex items-center gap-4 px-4 py-2 rounded-lg text-white hover:bg-[#6B50CF] cursor-pointer transition">
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
      </motion.div>
    </>
  );
};

export default Sidebar;
