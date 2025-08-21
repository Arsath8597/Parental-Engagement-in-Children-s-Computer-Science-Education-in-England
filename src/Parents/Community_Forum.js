import React, { useState } from "react";
import Sidebar from "./sidebar";

// --- ICONS (as SVG components) ---
const ChatIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM9 9a1 1 0 100-2 1 1 0 000 2zm2 0a1 1 0 100-2 1 1 0 000 2zm2 0a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const UserIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const ClockIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const PlusIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const ArrowLeftIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
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

// --- MOCK DATA for Forum ---
const forumData = [
  {
    id: 1,
    title: "My child is struggling with loops in Scratch. Any tips?",
    author: "Sarah P.",
    authorAvatar: "https://placehold.co/40x40/34d399/ffffff?text=SP",
    lastActivity: "2 hours ago",
    lastCommenter: "Mark J.",
    replies: 5,
    posts: [
      {
        id: 1,
        author: "Sarah P.",
        authorAvatar: "https://placehold.co/40x40/34d399/ffffff?text=SP",
        time: "8 hours ago",
        content:
          "Hi everyone, my 8-year-old is finding the concept of loops really tricky in Scratch. She understands sequences fine, but gets frustrated with repeat blocks. Has anyone found a good way to explain this or have any fun project ideas that might help it click? Thanks!",
      },
      {
        id: 2,
        author: "Mark J.",
        authorAvatar: "https://placehold.co/40x40/7e22ce/ffffff?text=MJ",
        time: "2 hours ago",
        content:
          "We had the same issue! What worked for us was an 'unplugged' activity. We drew a square on a piece of paper and I had my son write out the instructions: 'Move forward, turn right, move forward, turn right...'. Then I asked him if he saw a pattern he was repeating. That helped him see a loop is just a shortcut for a repeated pattern. Hope that helps!",
      },
      {
        id: 3,
        author: "Admin",
        authorAvatar: "https://placehold.co/40x40/f87171/ffffff?text=A",
        time: "1 hour ago",
        content:
          "That's a great tip, Mark! There's also a good guide on 'Unplugged Activities' in our Learning Resources section that covers this.",
      },
    ],
  },
  {
    id: 2,
    title: "Show and Tell: Our first game!",
    author: "David L.",
    authorAvatar: "https://placehold.co/40x40/60a5fa/ffffff?text=DL",
    lastActivity: "1 day ago",
    lastCommenter: "Jane D.",
    replies: 3,
    posts: [
      {
        id: 1,
        author: "David L.",
        authorAvatar: "https://placehold.co/40x40/60a5fa/ffffff?text=DL",
        time: "1 day ago",
        content:
          "My daughter and I just finished the 'Maze Game' tutorial and we're so proud! She designed all the characters herself. Just wanted to share our success!",
      },
    ],
  },
  {
    id: 3,
    title: "Is Python too advanced for a 9-year-old?",
    author: "Emily R.",
    authorAvatar: "https://placehold.co/40x40/facc15/ffffff?text=ER",
    lastActivity: "3 days ago",
    lastCommenter: "Sarah P.",
    replies: 8,
    posts: [
      {
        id: 1,
        author: "Emily R.",
        authorAvatar: "https://placehold.co/40x40/facc15/ffffff?text=ER",
        time: "3 days ago",
        content:
          "My son is getting a bit bored with Scratch and has asked about 'real' coding like Python. Is he too young? Where would be a good place to start?",
      },
    ],
  },
];

// --- Forum Components ---

// Displays a list of all threads
const ForumIndex = ({ threads, onSelectThread, onNewDiscussion }) => (
  <GlassCard className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-white">Discussions</h2>
      <button
        onClick={onNewDiscussion}
        className="flex items-center bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <PlusIcon />
        Start New Discussion
      </button>
    </div>
    <ul className="space-y-2">
      {threads.map((thread) => (
        <li
          key={thread.id}
          onClick={() => onSelectThread(thread.id)}
          className="flex items-center p-4 bg-slate-900/50 rounded-lg hover:bg-slate-700/50 cursor-pointer transition-colors"
        >
          <img
            src={thread.authorAvatar}
            alt={thread.author}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex-grow">
            <h3 className="font-bold text-white">{thread.title}</h3>
            <p className="text-sm text-slate-400">
              Started by{" "}
              <span className="font-semibold text-slate-300">
                {thread.author}
              </span>
            </p>
          </div>
          <div className="text-center w-24 hidden md:block">
            <p className="font-bold text-white text-lg">{thread.replies}</p>
            <p className="text-xs text-slate-400">Replies</p>
          </div>
          <div className="text-right w-40 hidden sm:block">
            <p className="text-sm text-slate-300">{thread.lastActivity}</p>
            <p className="text-xs text-slate-400">by {thread.lastCommenter}</p>
          </div>
        </li>
      ))}
    </ul>
  </GlassCard>
);

// Displays a single thread with all its posts
const ThreadView = ({ thread, onBack }) => (
  <div>
    <button
      onClick={onBack}
      className="mb-6 inline-flex items-center bg-slate-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors"
    >
      <ArrowLeftIcon />
      Back to All Discussions
    </button>
    <GlassCard className="p-6">
      <h2 className="text-3xl font-bold text-white mb-6">{thread.title}</h2>
      <div className="space-y-6">
        {thread.posts.map((post, index) => (
          <div
            key={post.id}
            className={`flex gap-4 ${
              index > 0 ? "pl-4 border-l-2 border-slate-700" : ""
            }`}
          >
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-10 h-10 rounded-full flex-shrink-0 mt-1"
            />
            <div className="flex-grow">
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-white">{post.author}</p>
                <p className="text-xs text-slate-400">{post.time}</p>
              </div>
              <div className="mt-2 text-slate-300 prose prose-invert max-w-none">
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
    <GlassCard className="p-6 mt-6">
      <h3 className="text-xl font-bold text-white mb-4">Leave a Reply</h3>
      <textarea
        className="w-full p-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        placeholder="Write your reply here..."
      ></textarea>
      <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Post Reply
      </button>
    </GlassCard>
  </div>
);

// --- The Main CommunityForumPage Component ---
export default function CommunityForumPage() {
  const [view, setView] = useState("index"); // 'index' or 'thread'
  const [currentThreadId, setCurrentThreadId] = useState(null);

  const handleSelectThread = (threadId) => {
    setCurrentThreadId(threadId);
    setView("thread");
  };

  const handleBackToIndex = () => {
    setView("index");
    setCurrentThreadId(null);
  };

  const handleNewDiscussion = () => {
    // In a real app, this would likely open a modal or navigate to a new page
    alert("This would open a form to create a new discussion.");
  };

  const thread = currentThreadId
    ? forumData.find((t) => t.id === currentThreadId)
    : null;

  return (
    <div className="p-8 lg:pl-64 text-white font-sans bg-slate-950 min-h-screen">
      <Sidebar />
      <h1 className="text-4xl font-bold text-white mb-2">Community Forum</h1>
      <p className="text-slate-400 mb-8">
        Ask questions, share your successes, and connect with other parents.
      </p>

      {view === "index" && (
        <ForumIndex
          threads={forumData}
          onSelectThread={handleSelectThread}
          onNewDiscussion={handleNewDiscussion}
        />
      )}

      {view === "thread" && thread && (
        <ThreadView thread={thread} onBack={handleBackToIndex} />
      )}
    </div>
  );
}
