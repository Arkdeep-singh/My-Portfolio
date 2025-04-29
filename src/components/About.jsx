import React from "react";
import {asset} from '../assets/index/'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-blue-600">Me</span>
      </motion.h1>

      {/* About Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text */}
        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-700 mb-4">
          Greetings, I am <span className="text-blue-600 font-semibold">Pawan</span>, a passionate and results-driven full-stack developer specializing in both front-end and back-end development. I am committed to building high-quality, scalable web applications that deliver meaningful impact and exceptional user experiences.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            With a focus on clean, maintainable code, I strive to use the best technologies for each project and work
            collaboratively to achieve great results. I am always eager to learn new things and enhance my skill set.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            In addition to coding, I love exploring design principles, UI/UX, and diving into the creative aspects of
            application development.
          </p>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="image-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={asset.profile}
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
          />
        </motion.div>
      </div>

      {/* Skills List */}
      <motion.div
        className="skills-section mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
      </motion.div>
    </section>
  );
};

export default About;
