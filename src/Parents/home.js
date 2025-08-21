import React from "react";
import Sidebar from "./sidebar";
import { IoMdBookmarks } from "react-icons/io";
import CountUp from "react-countup";
import Profile from "./chart/Profile";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Prograss from "./chart/Progress";
import BarChart from "./chart/BarChart";
import PieChart from "./chart/PieChart";
import { motion } from "framer-motion";

const Home = () => {
  const cards = [
    {
      title: "Attendance",
      value: 80,
      suffix: "%",
      change: -5,
    },
    {
      title: "Events Attended",
      value: 12,
      change: 2,
    },
    {
      title: "Feedbacks Given",
      value: 7,
      change: 1,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-600 via-blue-900 to-indigo-900 text-white">
      <div className="fixed top-0 left-0 h-screen z-50">
        <Sidebar />
      </div>
      <div className="flex-1 ml-64  px-6 sm:px-10 py-6">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text">
          Arham Dashboard
        </h1>
        Cards
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => {
            const isPositive = card.change >= 0;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex items-center justify-between shadow-lg"
              >
                <div>
                  <h2 className="text-lg text-cyan-100 font-semibold">
                    {card.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2 text-xl">
                    <CountUp isCounting end={card.value} duration={2} />
                    {card.suffix && <span>{card.suffix}</span>}
                    <span
                      className={`text-sm font-medium flex items-center ${
                        isPositive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isPositive ? (
                        <FaArrowUp className="mr-1" />
                      ) : (
                        <FaArrowDown className="mr-1" />
                      )}
                      {Math.abs(card.change)}
                      {card.suffix || "%"}
                    </span>
                  </div>
                </div>
                <IoMdBookmarks size={36} className="text-white/80" />
              </motion.div>
            );
          })}
        </div>
        {/* Profile & Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Profile />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Prograss />
          </motion.div>
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BarChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PieChart />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
