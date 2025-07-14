import React from "react";
import Sidebar from "./sidebar";
import { IoMdBookmarks } from "react-icons/io";
import CountUp from "react-countup";
import Profile from "./chart/Profile";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Prograss from "../Student/chart/Progress";
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
    <div className="flex min-h-screen bg-gradient-to-br from-sky-600 via-blue-900 to-indigo-900">
      <Sidebar />
      <div className="flex-1 px-10 py-6 text-white">
        <h1 className="text-3xl font-semibold mb-6">Student Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const isPositive = card.change >= 0;

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 shadow-lg"
              >
                <div>
                  <h2 className="text-lg text-cyan-100 font-medium">
                    {card.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
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
              </div>
            );
          })}
        </div>
        <div className="lg:flex flex-col">
          <Profile />
          <Prograss />
        </div>
      </div>
    </div>
  );
};

export default Home;
