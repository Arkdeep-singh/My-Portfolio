import React from "react";
import { asset } from "../assets/index/";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      {/* Header with Typing Effect */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-blue-600">Me</span>
        <span className="block text-xl mt-2 text-gray-500 font-medium">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Tech Enthusiast",
              "Creative Coder",
              "Problem Solver",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </span>
      </motion.h1>

      {/* About Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Text */}
        <div>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Hello! I’m <span className="text-blue-600 font-semibold">Abhishek</span>, a passionate and results-driven full-stack developer who crafts seamless web experiences from front to back. I specialize in building modern, scalable applications that prioritize both performance and user satisfaction.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            I thrive on writing clean, maintainable code and love collaborating with teams to solve real-world problems. With a strong foundation in core CS subjects and hands-on project experience, I'm always pushing to grow and evolve.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            Beyond code, I enjoy exploring UI/UX design principles, user psychology, and turning creative ideas into interactive interfaces.
          </motion.p>
        </div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={asset.profile}
              alt="Abhishek Profile"
              className="rounded-full w-[420px] h-[420px] object-cover shadow-2xl border-4 border-white group-hover:scale-105 transform transition duration-300"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-blue-500 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
