import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Mobile Container */}
      <div className="max-w-md w-full flex flex-col items-center text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mt-10"
        >
          Welcome to News 24/7
        </motion.h1>

        {/* Hero Image */}
        <motion.img
          src="https://e7.pngegg.com/pngimages/678/286/png-clipart-news-24-24-7-service-television-channel-news-broadcasting-others-television-blue.png"
          alt="News"
          className="w-4/5 my-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Features Section */}
        <motion.div
          className="mt-6 text-lg max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="mb-2 font-semibold">Key Features:</p>
          <ul className="list-disc list-inside text-gray-300 text-left">
            <li>Real-time Updates</li>
            <li>Customizable News Feed</li>
            <li>Trending & Breaking News</li>
          </ul>
        </motion.div>

        {/* Get Started Button */}
        <motion.button
          onClick={() => navigate("/dashboard")}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started 🚀
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
