import React from "react";
import { motion } from "framer-motion";
import {
  FaCrown,
  FaMedal,
  FaLaptopCode,
} from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "Hack-A-Throne 2024 by AIESEC",
      description: "Reached the final round of Hack-A-Throne 2024, organized by AIESEC.",
      tags: ["Hackathon", "AIESEC", "Finalist"],
      link: "#",
      icon: <FaCrown className="inline-block mr-2 text-yellow-600" />,
    },
    {
      title: "ABHIBYAKTI 2K20 – Essay Competition",
      description: "Runner-up (2nd Position) in an essay writing competition at IIMT Group of Colleges.",
      tags: ["Essay Writing", "Creativity", "Competition"],
      link: "#",
      icon: <FaMedal className="inline-block mr-2 text-red-500" />,
    },
    {
      title: "Code-A-Haunt Hackathon – LPU",
      description: "Secured 5th rank in the Code-A-Haunt Hackathon held at Lovely Professional University.",
      tags: ["Hackathon", "Coding", "Problem Solving"],
      link: "#",
      icon: <FaLaptopCode className="inline-block mr-2 text-blue-600" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Achievements</span>
      </motion.h1>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {achievement.icon}
              {achievement.title}
            </motion.h2>
            <p className="text-gray-600 mb-4">{achievement.description}</p>
            <div className="flex justify-center flex-wrap gap-2 mb-4">
              {achievement.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-600 text-sm py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.a
              href={achievement.link}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              View More
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
