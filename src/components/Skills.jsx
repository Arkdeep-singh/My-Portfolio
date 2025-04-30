import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaTools,
  FaBookOpen,
  FaUserFriends,
} from "react-icons/fa";

const skillsData = [
  {
    title: "Languages",
    icon: <FaCode className="text-indigo-500 drop-shadow-md" />,
    skills: "C++, C, Java, Python, JavaScript, PHP",
    width: "95%",
    delay: 0.2,
  },
  {
    title: "Frameworks",
    icon: <FaReact className="text-blue-500 drop-shadow-md" />,
    skills: "Node.js, Express.js, Tailwind CSS, React.js",
    width: "90%",
    delay: 0.4,
  },
  {
    title: "Tools / Platforms",
    icon: <FaTools className="text-yellow-500 drop-shadow-md" />,
    skills: "MySQL, MongoDB, Git, GitHub",
    width: "85%",
    delay: 0.6,
  },
  {
    title: "Coursework",
    icon: <FaBookOpen className="text-green-500 drop-shadow-md" />,
    skills:
      "DSA, Operating System, DBMS, Computer Networking, Probability & Statistics",
    width: "80%",
    delay: 0.8,
  },
  {
    title: "Soft Skills",
    icon: <FaUserFriends className="text-pink-500 drop-shadow-md" />,
    skills: "Problem-Solving, Team Player, Project Management, Adaptability",
    width: "75%",
    delay: 1.0,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "0px 0px -25% 0px" }}
      >
        My <span className="text-blue-600">Skills</span>
      </motion.h2>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -25% 0px" }}
          >
            <motion.div
              className="flex justify-center mb-6 text-5xl text-blue-600"
              variants={itemVariants}
            >
              {React.cloneElement(skill.icon, { className: "drop-shadow-sm" })}
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-gray-800 text-center mb-6"
              variants={itemVariants}
            >
              {skill.title}
            </motion.h3>

            <motion.div
              className="flex justify-center mb-6"
              variants={itemVariants}
            >
              <div className="relative w-full h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="absolute h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.width }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  viewport={{ once: false }}
                />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-2"
              variants={itemVariants}
            >
              {skill.skills.split(", ").map((item, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: idx * 0.1 }}
                  viewport={{ once: false }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
