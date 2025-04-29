import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Skills</span>
      </motion.h1>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend */}
        <motion.div
          className="skill-card bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center text-blue-600 text-4xl mb-2">
            <FaReact />
          </div>
          <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Frontend Development
          </motion.h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "90%" }}
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-gray-600">HTML, CSS, JavaScript, React, Tailwind CSS</p>
        </motion.div>

        {/* Backend */}
        <motion.div
          className="skill-card bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center text-green-600 text-4xl mb-2">
            <FaNodeJs />
          </div>
          <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Backend Development
          </motion.h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "80%" }}
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-gray-600">Node.js, Express, MongoDB, SQL</p>
        </motion.div>

        {/* Version Control */}
        <motion.div
          className="skill-card bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex justify-center text-orange-500 text-4xl mb-2">
            <FaGitAlt />
          </div>
          <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Version Control
          </motion.h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "85%" }}
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-gray-600">Git, GitHub, GitLab</p>
        </motion.div>

        {/* UI/UX Design */}
        <motion.div
          className="skill-card bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex justify-center text-pink-500 text-4xl mb-2">
            <FaFigma />
          </div>
          <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4">
            UI/UX Design
          </motion.h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "65%" }}
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-gray-600">Figma, Sketch</p>
        </motion.div>

        {/* Databases */}
        <motion.div
          className="skill-card bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex justify-center text-purple-600 text-4xl mb-2">
            <FaDatabase />
          </div>
          <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Databases
          </motion.h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "70%" }}
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-gray-600">MongoDB, MySQL, PostgreSQL</p>
        </motion.div>

        {/* Other Skills */}
        <motion.div
          className="skill-card bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex justify-center text-gray-600 text-4xl mb-2">
            <FaTools />
          </div>
          <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Other Skills
          </motion.h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "60%" }}
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-gray-600">Problem Solving, API Integration</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
