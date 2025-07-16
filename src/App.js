import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import SignIn from "../src/pages/Signup";
import StudentHomeDashboard from "./Parents/home";
import Parents from "./Parents/parents";
import Event from "./Parents/Event";
import Feedback from "./Parents/Feedback";
import Material from "./Parents/Material";
import Landing from "./Landing";

function App() {
  return (
    <div className="font-[poppins]">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
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
