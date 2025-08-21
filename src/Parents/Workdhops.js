import React from "react";
import Sidebar from "./sidebar";

// --- ICONS (as SVG components) ---
// You would reuse the icons from the main App file.
// For this standalone example, I'll redefine the ones we need.

const CalendarIcon = () => (
  <svg
    className="w-5 h-5 mr-2 inline-block text-slate-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-5 h-5 mr-2 inline-block text-slate-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-5 h-5 mr-2 inline-block text-slate-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// --- Reusable Glassmorphism Card Component ---
const GlassCard = ({ children, className = "" }) => (
  <div
    className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-lg ${className}`}
  >
    {children}
  </div>
);

// --- MOCK DATA for Workshops ---
// In a real app, this would come from a database/API.
const workshopsData = {
  featured: {
    id: 1,
    title: "Introduction to Scratch for Parents & Kids",
    date: "Saturday, 23rd August 2025",
    time: "10:00 AM - 11:30 AM",
    location: "Online via Zoom",
    description:
      "Join our most popular workshop! We will guide you and your child through creating your very first animation and game using Scratch. No prior experience needed. This is the perfect first step into the world of creative coding.",
    level: "Beginner",
    status: "upcoming",
    image: "https://placehold.co/600x400/7e22ce/ffffff?text=Scratch+Workshop",
  },
  upcoming: [
    {
      id: 2,
      title: "Build a Website with HTML & CSS",
      date: "Saturday, 6th September 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Online via Zoom",
      description:
        "Ready to move beyond blocks? Learn the basic building blocks of the web and create your own simple webpage from scratch.",
      level: "Intermediate",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Unplugged Coding: The Human Robot",
      date: "Wednesday, 17th September 2025",
      time: "4:30 PM - 5:30 PM",
      location: "Crawley Community Centre",
      description:
        "Discover the core concepts of algorithms without a computer! A fun, interactive in-person session for families.",
      level: "Beginner",
      status: "upcoming",
    },
  ],
  past: [
    {
      id: 4,
      title: "Micro:bit Magic: Making a Digital Pet",
      date: "Saturday, 19th July 2025",
      time: "10:00 AM - 11:30 AM",
      location: "Online via Zoom",
      description:
        "A look back at our fun session where families programmed a micro:bit to create their own flashing, interactive digital pet.",
      level: "Beginner",
      status: "past",
    },
    {
      id: 5,
      title: "Game Design Principles",
      date: "Saturday, 5th July 2025",
      time: "2:00 PM - 3:00 PM",
      location: "Online via Zoom",
      description:
        "We explored what makes a game fun and how to plan your own game, from characters to objectives.",
      level: "All Levels",
      status: "past",
    },
  ],
};

// --- The Main Workshops Page Component ---
export default function WorkshopsPage() {
  const { featured, upcoming, past } = workshopsData;

  return (
    <div className="p-8 lg:pl-64 text-white font-sans bg-slate-950 min-h-screen">
      <Sidebar />
      <h1 className="text-4xl font-bold text-white mb-2">Workshops</h1>
      <p className="text-slate-400 mb-8">
        Join our live online and in-person sessions to learn new skills
        together.
      </p>

      {/* Featured Workshop Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 border-b-2 border-slate-700 pb-2">
          Featured Workshop
        </h2>
        <GlassCard className="p-0 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-8 flex flex-col">
            <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
              {featured.level}
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              {featured.title}
            </h3>
            <div className="text-slate-300 space-y-2 mb-4">
              <p>
                <CalendarIcon /> {featured.date}
              </p>
              <p>
                <ClockIcon /> {featured.time}
              </p>
              <p>
                <LocationIcon /> {featured.location}
              </p>
            </div>
            <p className="text-slate-300 flex-grow mb-6">
              {featured.description}
            </p>
            <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-lg">
              Register Now
            </button>
          </div>
        </GlassCard>
      </div>

      {/* Upcoming Workshops Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 border-b-2 border-slate-700 pb-2">
          Upcoming Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcoming.map((workshop) => (
            <GlassCard key={workshop.id} className="p-6 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">
                  {workshop.title}
                </h3>
                <span className="bg-slate-700 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {workshop.level}
                </span>
              </div>
              <div className="text-slate-400 text-sm space-y-1 mb-4">
                <p>
                  <CalendarIcon /> {workshop.date}
                </p>
                <p>
                  <ClockIcon /> {workshop.time}
                </p>
                <p>
                  <LocationIcon /> {workshop.location}
                </p>
              </div>
              <p className="text-slate-300 flex-grow mb-4">
                {workshop.description}
              </p>
              <button className="mt-auto w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Past Workshops Section */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-4 border-b-2 border-slate-700 pb-2">
          Past Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {past.map((workshop) => (
            <GlassCard
              key={workshop.id}
              className="p-6 flex flex-col opacity-70"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">
                  {workshop.title}
                </h3>
                <span className="bg-slate-700 text-slate-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {workshop.level}
                </span>
              </div>
              <div className="text-slate-400 text-sm space-y-1 mb-4">
                <p>
                  <CalendarIcon /> {workshop.date}
                </p>
              </div>
              <p className="text-slate-300 flex-grow mb-4">
                {workshop.description}
              </p>
              <button className="mt-auto w-full bg-slate-600 text-white font-bold py-2 px-4 rounded-lg cursor-not-allowed">
                View Recording (Coming Soon)
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
