import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import SignIn from "../src/pages/Signup";
import StudentHomeDashboard from "./Parents/home";
import Community from "./Parents/Community_Forum";
import Learning_Resources from "./Parents/Learning_Resources";
import Child_Progress from "./Parents/Child_Progress";
import Workshops from "./Parents/Workdhops";
import Landing from "./Landing";

function App() {
  const handleNavigation = (page, params) => {
    console.log(`Navigating to page: ${page}`);
    console.log("With parameters:", params);
    // In a real app, you would use your routing library here, e.g.:
    // history.push(`/${page}/${params.articleId}`);
    alert(`Pretending to navigate to the article: ${params.articleId}`);
  };
  return (
    <div className="font-[poppins]">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/parentshome" element={<StudentHomeDashboard />} />
        <Route path="/parentshome/comminuty" element={<Community />} />
        <Route
          path="/parentshome/leasrning_resources"
          element={<Learning_Resources navigateTo={handleNavigation} />}
        />
        <Route path="/parentshome/workshops" element={<Workshops />} />
        <Route path="/parenthome/child_progress" element={<Child_Progress />} />
      </Routes>
    </div>
  );
}

export default App;
