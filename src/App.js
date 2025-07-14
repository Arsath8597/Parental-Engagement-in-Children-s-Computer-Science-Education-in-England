import "./App.css";
import Button from "../src/components/button";
import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import SignIn from "../src/pages/Signup";
import StudentHome from "../src/Student/Landing";
import StudentHomeDashboard from "../src/Student/home";
import Parents from "./Student/parents";
import Event from "./Student/Event";
import Feedback from "./Student/Feedback";
import Material from "./Student/Material";

function App() {
  return (
    <div className="font-[poppins]">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/studnethome" element={<StudentHomeDashboard />} />
        <Route path="/studnethome/parents" element={<Parents />} />
        <Route path="/studnethome/event" element={<Event />} />
        <Route path="/studnethome/material" element={<Material />} />
        <Route path="/studnethome/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
