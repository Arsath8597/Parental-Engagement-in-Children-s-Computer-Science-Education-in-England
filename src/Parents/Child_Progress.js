import React from "react";
import Sidebar from "./sidebar";

// --- ICONS (as SVG components) ---
// In a real app, these would be in a shared file.

const ProjectIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);

const SkillIcon = () => (
  <svg
    className="w-8 h-8 text-green-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const TimeIcon = () => (
  <svg
    className="w-8 h-8 text-purple-400"
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

// --- Achievement Badge Icons ---
const FirstProjectBadge = () => (
  <svg
    className="w-12 h-12 text-yellow-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,18L7,15.08L8.63,16.8L12,14L15.37,16.8L17,15.08L12,18M12,11.5L6.5,9.25L12,4L17.5,9.25L12,11.5Z" />
  </svg>
);
const DebuggerBadge = () => (
  <svg
    className="w-12 h-12 text-red-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14,12H10V10H14M14.5,15.5A2.5,2.5 0 0,1 12,13A2.5,2.5 0 0,1 14.5,10.5A2.5,2.5 0 0,1 17,13A2.5,2.5 0 0,1 14.5,15.5M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
  </svg>
);
const CommunityBadge = () => (
  <svg
    className="w-12 h-12 text-teal-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.41,8.61 6.3,8.8 6.22,9C5.83,9 5.44,9 5,9.11V8M5,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,15.5A3.5,3.5 0 0,1 8.5,19A3.5,3.5 0 0,1 5,15.5M19,8V9.11C18.56,9 18.17,9 17.78,9C17.7,8.8 17.59,8.61 17.47,8.42C17.92,8.15 18.44,8 19,8M12,1.5A6.5,6.5 0 0,0 5.5,8A6.5,6.5 0 0,0 12,14.5A6.5,6.5 0 0,0 18.5,8A6.5,6.5 0 0,0 12,1.5M19,15.5A3.5,3.5 0 0,1 15.5,19A3.5,3.5 0 0,1 12,15.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 19,15.5Z" />
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

// --- MOCK DATA for Progress Page ---
const progressData = {
  childName: "Arham",
  keyMetrics: {
    projectsCompleted: 8,
    skillsMastered: 12,
    timeSpentHours: 25,
  },
  skills: [
    {
      category: "Computer Science",
      skills: [
        { name: "Algorithms", progress: 80 },
        { name: "Sequencing", progress: 100 },
        { name: "Loops (Repetition)", progress: 75 },
        { name: "Conditionals (Selection)", progress: 60 },
        { name: "Debugging", progress: 90 },
      ],
    },
    {
      category: "Information Technology",
      skills: [
        { name: "Effective Searching", progress: 85 },
        { name: "Digital Content Creation", progress: 70 },
        { name: "File Management", progress: 95 },
      ],
    },
    {
      category: "Digital Literacy",
      skills: [
        { name: "Online Safety", progress: 90 },
        { name: "Respectful Communication", progress: 80 },
        { name: "Identifying Risks", progress: 75 },
      ],
    },
  ],
  recentAchievements: [
    {
      id: 1,
      name: "First Project!",
      description: 'Completed the "Animate Your Name" tutorial.',
      date: "02 Aug 2025",
      icon: <FirstProjectBadge />,
    },
    {
      id: 2,
      name: "Bug Squasher",
      description: 'Fixed a bug in the "Virtual Pet" game.',
      date: "28 Jul 2025",
      icon: <DebuggerBadge />,
    },
    {
      id: 3,
      name: "Community Contributor",
      description: "Shared a project in the community forum.",
      date: "20 Jul 2025",
      icon: <CommunityBadge />,
    },
  ],
  completedProjects: [
    {
      id: 1,
      title: "Animated Name",
      image: "https://placehold.co/400x300/1e293b/94a3b8?text=Project+1",
      date: "02 Aug 2025",
    },
    {
      id: 2,
      title: "Virtual Pet",
      image: "https://placehold.co/400x300/1e293b/94a3b8?text=Project+2",
      date: "28 Jul 2025",
    },
    {
      id: 3,
      title: "Simple Maze Game",
      image: "https://placehold.co/400x300/1e293b/94a3b8?text=Project+3",
      date: "15 Jul 2025",
    },
    {
      id: 4,
      title: "Interactive Story",
      image: "https://placehold.co/400x300/1e293b/94a3b8?text=Project+4",
      date: "01 Jul 2025",
    },
  ],
};

// --- The Main MyChildsProgressPage Component ---
export default function MyChildsProgressPage() {
  const {
    childName,
    keyMetrics,
    skills,
    recentAchievements,
    completedProjects,
  } = progressData;

  return (
    <div className="p-8 lg:pl-64 text-white font-sans bg-slate-950 min-h-screen">
      <Sidebar />
      <h1 className="text-4xl font-bold text-white mb-2">
        {childName}'s Progress
      </h1>
      <p className="text-slate-400 mb-8">
        A summary of their learning journey, skills, and creative projects.
      </p>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <GlassCard className="p-6 flex items-center gap-4">
          <ProjectIcon />
          <div>
            <h3 className="text-slate-400 text-sm font-medium">
              Projects Completed
            </h3>
            <p className="text-4xl font-bold text-white">
              {keyMetrics.projectsCompleted}
            </p>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center gap-4">
          <SkillIcon />
          <div>
            <h3 className="text-slate-400 text-sm font-medium">
              Skills Mastered
            </h3>
            <p className="text-4xl font-bold text-white">
              {keyMetrics.skillsMastered}
            </p>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center gap-4">
          <TimeIcon />
          <div>
            <h3 className="text-slate-400 text-sm font-medium">
              Time Spent Learning
            </h3>
            <p className="text-4xl font-bold text-white">
              {keyMetrics.timeSpentHours}{" "}
              <span className="text-2xl text-slate-400">hrs</span>
            </p>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Skills & Achievements */}
        <div className="lg:col-span-2 space-y-8">
          {/* Skills Mastery Section */}
          <GlassCard className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Skills Mastery
            </h2>
            <div className="space-y-6">
              {skills.map((category) => (
                <div key={category.category}>
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-slate-400">
                            {skill.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2.5">
                          <div
                            className="bg-green-500 h-2.5 rounded-full"
                            style={{ width: `${skill.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Recent Achievements Section */}
          <GlassCard className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Recent Achievements
            </h2>
            <ul className="space-y-4">
              {recentAchievements.map((ach) => (
                <li
                  key={ach.id}
                  className="flex items-center gap-4 p-3 bg-slate-900/50 rounded-lg"
                >
                  {ach.icon}
                  <div className="flex-grow">
                    <h4 className="font-bold text-white">{ach.name}</h4>
                    <p className="text-sm text-slate-300">{ach.description}</p>
                  </div>
                  <span className="text-xs text-slate-400 flex-shrink-0">
                    {ach.date}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Right Column: Completed Projects */}
        <div className="lg:col-span-1">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Completed Projects
            </h2>
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
              {completedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-900/50 rounded-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-slate-400">
                      Completed: {project.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
