import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-pink-50 flex items-center justify-center h-screen">
      <div className="max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          Contact Us
        </h1>

        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-pink-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block text-pink-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label
            className="block text-pink-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Your Message"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </div>

        {/* Butterfly image decoration */}
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

export default ContactUs;
