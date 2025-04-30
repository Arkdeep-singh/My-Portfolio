import React from "react";
import { asset } from "../assets/index";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Decorative Background Circles */}
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full top-0 left-0 blur-3xl opacity-20 animate-pulse" />
      <div className="absolute w-96 h-96 bg-purple-300 rounded-full bottom-0 right-0 blur-3xl opacity-20 animate-pulse" />

      {/* Hero Section */}
      <main className="z-10 container mx-auto px-6 py-24 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          Welcome to <span className="text-blue-600">Abhishek's</span> Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed"
        >
          I’m passionate about building high-quality, impactful software solutions that enhance user experience, solve real-world problems, and drive meaningful innovation. With a growth mindset and curiosity for tech, I aim to contribute globally through development and creativity.
        </motion.p>

        <motion.a
          href={asset.resume}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full text-lg shadow-xl hover:shadow-2xl transition duration-300"
          download
        >
          Download Resume
        </motion.a>
      </main>
    </div>
  );
};

export default Home;
