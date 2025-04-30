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
    <section id="achievements" className="py-20 bg-gradient-to-br from-white via-gray-100 to-white">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span className="text-blue-600">Achievements</span>
      </motion.h1>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">
              {achievement.icon}
            </div>

            {/* Title Animation */}
            <motion.h2
              className="text-xl font-semibold text-gray-800 mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {achievement.title}
            </motion.h2>

            {/* Description Animation */}
            <motion.p
              className="text-gray-600 mb-5 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {achievement.description}
            </motion.p>

            {/* Tags Animation */}
            <motion.div
              className="flex justify-center flex-wrap gap-2 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {achievement.tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-xs font-medium py-1 px-3 rounded-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + idx * 0.2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Button Animation */}
            <motion.a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
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
