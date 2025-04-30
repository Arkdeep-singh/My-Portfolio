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
    icon: <FaCode />,
    skills: "C++, C, Java, Python, JavaScript, PHP",
    width: "95%",
    delay: 0.2,
  },
  {
    title: "Frameworks",
    icon: <FaReact />,
    skills: "Node.js, Express.js, Tailwind CSS, React.js",
    width: "90%",
    delay: 0.4,
  },
  {
    title: "Tools / Platforms",
    icon: <FaTools />,
    skills: "MySQL, MongoDB, Git, GitHub",
    width: "85%",
    delay: 0.6,
  },
  {
    title: "Coursework",
    icon: <FaBookOpen />,
    skills:
      "DSA, Operating System, DBMS, Computer Networking, Probability & Statistics",
    width: "80%",
    delay: 0.8,
  },
  {
    title: "Soft Skills",
    icon: <FaUserFriends />,
    skills: "Problem-Solving, Team Player, Project Management, Adaptability",
    width: "75%",
    delay: 1.0,
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 bg-grid-slate-700/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{ willChange: "transform, opacity" }}
        />
      ))}

      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-6 mb-16">
        <motion.div
          className="max-w-4xl ml-auto"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-right mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-l from-blue-400 to-transparent ml-auto max-w-xs"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all border border-slate-200 overflow-hidden"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ margin: "0px 0px -25% 0px", once: false }}
            style={{ willChange: "transform, opacity" }}
          >
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 rounded-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            {/* Skill Content */}
            <div className="relative z-10">
              {/* Icon with Floating Animation */}
              <motion.div
                className="flex justify-center mb-6 text-5xl"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {React.cloneElement(skill.icon, {
                  className: "text-blue-400 drop-shadow-glow",
                })}
              </motion.div>

              {/* Title with Gradient Text */}
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-center mb-6">
                {skill.title}
              </h3>

              {/* Circular Progress Indicator */}
              <div className="relative w-full mb-8">
                <div className="relative mx-auto w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-slate-200"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <motion.circle
                      className="text-blue-400"
                      strokeWidth="8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      initial={{ strokeDashoffset: 251 }}
                      whileInView={{
                        strokeDashoffset:
                          251 * (1 - parseInt(skill.width) / 100),
                      }}
                      transition={{ duration: 1.5, type: "spring" }}
                      strokeDasharray="251"
                    />
                  </svg>
                  <motion.span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-blue-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {skill.width}
                  </motion.span>
                </div>
              </div>

              {/* Skills Tags with Hover Effects */}
              <div className="flex flex-wrap justify-center gap-3">
                {skill.skills.split(", ").map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="px-4 py-2 bg-slate-200/50 backdrop-blur-sm rounded-full border border-slate-300 text-slate-700 hover:text-white cursor-pointer transition-all relative overflow-hidden group"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-blue-400/10 backdrop-blur-sm rounded-xl rotate-45"
        animate={{
          y: [-20, 20, -20],
          rotate: [45, 135, 225, 315, 45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      />
    </section>
  );
};

export default SkillsSection;
