import CustonNavBar from "@/component/NavBar/page";
import React from "react";

const ConnectWithUs = () => {
  return (
    <div className=" font-bold">
      <CustonNavBar></CustonNavBar>
      <div className="bg-pink-50 flex items-center justify-center h-screen">
        <div className="max-w-lg bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-6">Find me on</h1>

          <p className="text-gray-600 mb-4">
            Let's get connected! Follow me on social media or reach out via
            email.
          </p>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>

            <a href="mailto:example@example.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
                alt="Email"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="https://st4.depositphotos.com/1359043/30812/i/450/depositphotos_308121756-stock-photo-color-butterfly-isolated-on-white.jpg"
              alt="Butterfly"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
