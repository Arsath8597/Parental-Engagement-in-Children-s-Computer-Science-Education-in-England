import React from "react";
import ProfileImg from "../../Images/—Pngtree—blue color splash texture backgound_5808134.png";

const Profile = () => {
  return (
    <div className="w-full max-w-[400px] h-[200px]  bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 shadow-xl">
      <div className="flex-1">
        <p className="text-sm text-gray-300 mb-1">Welcome back,</p>
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text">
          Mark Johnson
        </h1>
      </div>
      <div className="flex-shrink-0">
        <img
          src={ProfileImg}
          alt="Profile background"
          className="w-24 h-24 object-cover rounded-full shadow-md"
        />
      </div>
    </div>
  );
};

export default Profile;
