import CustonNavBar from "@/component/NavBar/page";
import React from "react";

const Skills = () => {
  return (
    <div className=" font-bold" id="skills">
      <div className="bg-pink-50 flex items-center justify-center h-screen">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-6">My Skills</h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* HTML */}
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                alt="HTML"
                className="w-16 h-16"
              />
              <p className="text-gray-700 mt-2">HTML</p>
            </div>
            {/* CSS */}
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                alt="CSS"
                className="w-16 h-16"
              />
              <p className="text-gray-700 mt-2">CSS</p>
            </div>
            {/* React.js */}
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                className="w-16 h-16"
              />
              <p className="text-gray-700 mt-2">React.js</p>
            </div>
            {/* JavaScript */}
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JavaScript"
                className="w-16 h-16"
              />
              <p className="text-gray-700 mt-2">JavaScript</p>
            </div>
            {/* Next.js */}
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                alt="Next.js"
                className="w-16 h-16"
              />
              <p className="text-gray-700 mt-2">Next.js</p>
            </div>
            {/* MongoDB */}
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                alt="MongoDB"
                className="w-16 h-16"
              />
              <p className="text-gray-700 mt-2">MongoDB</p>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS"
                className="w-16 h-16"
              />
              <p className="text-gray-700 mt-2">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
