import React, { useState } from "react";
import SideBar from "./sidebar";
import Data1 from "./Content/Resource";
// --- ICONS (as SVG components) ---
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

// --- PAGE COMPONENTS ---

// Learning Resources Component
const LearningResources = ({ navigateTo }) => {
  const resources = [
    {
      id: "computational-thinking",
      title: "What is Computational Thinking?",
      description:
        "Learn the four key steps to solving problems like a computer scientist.",
      category: "Getting Started",
    },
    {
      id: "algorithms-intro",
      title: "Algorithms Aren't Scary",
      description:
        "A simple introduction to what algorithms are and how we use them every day.",
      category: "Getting Started",
    },
    {
      id: "talking-about-coding",
      title: "How to Talk to Your Child About Coding",
      description:
        "Tips and conversation starters to engage with your child about technology.",
      category: "Getting Started",
    },
    {
      id: "unplugged-activities",
      title: "Unplugged Activities",
      description:
        "Fun, hands-on activities that teach computing concepts without a screen.",
      category: "Hands-On Projects",
    },
    {
      id: "scratch-projects",
      title: "Beginner Scratch Projects",
      description:
        "Step-by-step guides to create your first games and animations in Scratch.",
      category: "Hands-On Projects",
    },
    {
      id: "online-safety",
      title: "Online Safety Checklist",
      description:
        "A practical checklist for parents to ensure a safe online environment.",
      category: "Digital Safety",
    },
  ];

  return (
    <div className="p-8 lg:pl-64">
      <SideBar />
      <h1 className="text-4xl font-bold text-white mb-2">Learning Resources</h1>
      <p className="text-slate-400 mb-8">
        A curated collection of guides, projects, and tips to help you support
        your child's journey.
      </p>

      <div className="mb-8">
        <input
          type="search"
          placeholder="Search for resources..."
          className="w-full p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <GlassCard className="p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://placehold.co/200x150/1e293b/94a3b8?text=KS2+Guide"
          className="rounded-lg w-full md:w-1/3 object-cover"
          alt="KS2 Curriculum Guide"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">
            Decoding the KS2 Computing Curriculum
          </h2>
          <p className="text-slate-300 mb-4">
            Our essential guide for parents. Understand what your child is
            learning in school and how you can best support them at home.
          </p>
          <button
            onClick={() =>
              navigateTo("article", { articleId: "ks2-curriculum" })
            }
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read The Guide
          </button>
        </div>
      </GlassCard>

      <div>
        {["Getting Started", "Hands-On Projects", "Digital Safety"].map(
          (category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-slate-700 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter((r) => r.category === category)
                  .map((resource) => (
                    <GlassCard key={resource.id} className="p-6 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-slate-300 flex-grow mb-4">
                        {resource.description}
                      </p>
                      <button
                        onClick={() =>
                          navigateTo("article", { articleId: resource.id })
                        }
                        className="mt-auto bg-slate-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors"
                      >
                        View Resource
                      </button>
                    </GlassCard>
                  ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

// Article Page Component
const ArticlePage = ({ navigateTo, articleId }) => {
  const article = Data1[articleId];

  if (!article) {
    return (
      <div className="p-8 text-white">
        <h1 className="text-4xl font-bold">Article not found</h1>
        <button
          onClick={() => navigateTo("learningResources")}
          className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Resources
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 text-slate-300">
      <button
        onClick={() => navigateTo("learningResources")}
        className="mb-8 inline-flex items-center bg-slate-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors"
      >
        <ArrowLeftIcon />
        Back to Resources
      </button>
      <GlassCard className="p-8">
        <h1 className="text-4xl font-bold text-white mb-6">{article.title}</h1>
        <div
          className="prose prose-invert max-w-none text-slate-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </GlassCard>
    </div>
  );
};

// --- Placeholder Components for other pages ---
const PlaceholderPage = ({ title }) => (
  <div className="p-8 text-white">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <GlassCard className="p-8">
      <p className="text-2xl text-slate-300">
        This page is under construction. Check back soon!
      </p>
    </GlassCard>
  </div>
);

// --- Main App Component ---
// This component manages the navigation state and renders the correct page.
export default function App() {
  const [pageState, setPageState] = useState({
    current: "learningResources",
    props: {},
  });

  // Navigation function passed to child components
  const navigateTo = (page, props = {}) => {
    setPageState({ current: page, props: props });
  };

  // Render the correct page based on the current state
  const renderPage = () => {
    switch (pageState.current) {
      case "learningResources":
        return <LearningResources navigateTo={navigateTo} />;
      case "workshops":
        return <PlaceholderPage title="Workshops" />;
      case "communityForum":
        return <PlaceholderPage title="Community Forum" />;
      case "myChildsProgress":
        return <PlaceholderPage title="My Child's Progress" />;
      case "article":
        return (
          <ArticlePage
            navigateTo={navigateTo}
            articleId={pageState.props.articleId}
          />
        );
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen flex font-sans">
      <main className="flex-grow overflow-auto">{renderPage()}</main>
    </div>
  );
}
