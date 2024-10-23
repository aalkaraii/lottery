import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-pink-50 flex items-center justify-center h-screen">
      <div className="max-w-lg bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Alaka Rai</h1>
          <p className="text-gray-500">Web Developer & Student</p>
        </div>
        {/* Butterfly image decoration */}
        <div className="flex justify-center mb-6">
          <img
            src="https://st4.depositphotos.com/1359043/30812/i/450/depositphotos_308121756-stock-photo-color-butterfly-isolated-on-white.jpg"
            alt="Butterfly"
            className="w-12 h-12"
          />
        </div>
        {/* About section */}
        <p className="text-gray-600 mb-4">
          Hi, I’m Alka! I’m a fourth-year computer engineering student at KEC.I
          create beautiful, functional websites with a touch of elegance. I love
          design, coding, and crafting experiences that are both pretty and
          practical.
        </p>
        {/* Button to Contact */}
        <a
          href="/"
          className="inline-block bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-700 transition duration-300"
        >
          Contact Me
        </a>
        {/* Butterfly footer decoration */}
        <div className="flex justify-center mt-6">
          <img
            src="https://st4.depositphotos.com/1359043/30812/i/450/depositphotos_308121756-stock-photo-color-butterfly-isolated-on-white.jpg"
            alt="Butterfly"
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
