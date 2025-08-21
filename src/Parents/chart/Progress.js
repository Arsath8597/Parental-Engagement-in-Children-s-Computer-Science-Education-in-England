import React, { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import CourseImg from "../../Images/—Pngtree—blue color splash texture backgound_5808134.png"; // Use your own image path

const ProgressCard = ({ percentage = 75, courseTitle = "Tutorials" }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < percentage) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return percentage;
        }
      });
    }, 20);
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="w-full max-w-[400px] h-[200px]  bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl hover:scale-[1.03] transition-transform duration-300 flex items-center gap-4">
      {/* Image section */}
      <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg border border-white/20">
        <img
          src={CourseImg}
          alt="course"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text + Progress */}
      <div className="flex-1 text-white">
        <div className="flex items-center gap-2 mb-2">
          <FaBookOpen size={20} className="text-cyan-300" />
          <h2 className="text-lg font-semibold">{courseTitle}</h2>
        </div>

        <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-sm text-right mt-1">{progress}% completed</p>
      </div>
    </div>
  );
};

export default ProgressCard;
