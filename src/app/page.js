"use client";
import CustonNavBar from "@/component/NavBar/page";
import React, { useRef, useState } from "react";
import Skills from "./skills/page";
import ProjectsPage from "./projects/page";
import ContactUs from "./contactus/page";
import ConnectWithUs from "./connect/page";
import ParticlesBackground from "@/component/TsParticle/page";

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Define refs for each section
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const connectRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`font-bold ${
        isDarkMode ? "bg-slate-600 text-pink-300" : "bg-pink-50"
      } relative`}
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <CustonNavBar
          scrollToSkills={() => scrollToSection(skillsRef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToContact={() => scrollToSection(contactRef)}
          scrollToConnect={() => scrollToSection(connectRef)}
          toggleDarkMode={toggleDarkMode} // Pass toggle function to navbar
        />
      </div>
      <div className="flex items-center justify-center h-screen">
        {/* Main content */}
        <div
          className={`max-w-lg shadow-lg rounded-lg p-8 text-center ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Alaka Rai</h1>
          <p className="text-gray-500">Web Developer & Student</p>
          <div className="flex justify-center mt-6">
            <img
              src="https://st4.depositphotos.com/1359043/30812/i/450/depositphotos_308121756-stock-photo-color-butterfly-isolated-on-white.jpg"
              alt="Butterfly"
              className="w-12 h-12"
            />
          </div>
          <p className="text-gray-600 mb-4">
            Hi, I’m Alka! I’m a fourth-year computer engineering student at
            KEC.I create beautiful, functional websites with a touch of
            elegance. I love design, coding, and crafting experiences that are
            both pretty and practical.
          </p>
          <a
            className="inline-block bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-700 transition duration-300"
            onClick={() => scrollToSection(contactRef)} // Ensure this calls the scroll function
          >
            Contact Me
          </a>

          <div className="flex justify-center mt-6">
            <img
              src="https://st4.depositphotos.com/1359043/30812/i/450/depositphotos_308121756-stock-photo-color-butterfly-isolated-on-white.jpg"
              alt="Butterfly"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>

      {/* Other sections */}
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <ProjectsPage />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <div ref={connectRef}>
        <ConnectWithUs />
      </div>
    </div>
  );
};

export default Portfolio;
