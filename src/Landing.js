import React from "react";
import Home from "./pages/Home";
import Hero from "./pages/Goal";
import Navbar from "./components/navbar";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./pages/Footer";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Hero />
      <Privacy />
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
