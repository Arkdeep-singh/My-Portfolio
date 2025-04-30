import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaTools,
  FaUserFriends,
  FaBookOpen,
  FaCode,
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

// Animation container for staggered inner animations
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: customDelay,
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  }),
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-100 overflow-hidden"
    >
      {/* Background Glow Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Skills</span>
      </motion.h2>

      {/* Skill Cards */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsData.map(({ title, icon, skills, width, delay }, index) => (
          <motion.div
            key={index}
            className="bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl p-8 hover:shadow-2xl transition duration-300 border border-gray-200 hover:scale-[1.03] hover:border-blue-400"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={delay}
          >
            <motion.div className="flex justify-center text-5xl mb-4" variants={childVariants}>
              {icon}
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-gray-800 text-center mb-4"
              variants={childVariants}
            >
              {title}
            </motion.h3>

            <motion.div className="w-full bg-gray-300/50 rounded-full h-3 mb-4" variants={childVariants}>
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full"
                style={{ width }}
                initial={{ width: 0 }}
                animate={{ width }}
                transition={{ duration: 1.2 }}
              />
            </motion.div>

            <motion.p
              className="text-gray-700 text-center leading-relaxed text-[1rem]"
              variants={childVariants}
            >
              {skills}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
