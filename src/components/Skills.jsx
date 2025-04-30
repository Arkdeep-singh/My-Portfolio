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
  },
  {
    title: "Frameworks",
    icon: <FaReact />,
    skills: "Node.js, Express.js, Tailwind CSS, React.js",
    width: "90%",
  },
  {
    title: "Tools / Platforms",
    icon: <FaTools />,
    skills: "MySQL, MongoDB, Git, GitHub",
    width: "85%",
  },
  {
    title: "Coursework",
    icon: <FaBookOpen />,
    skills:
      "DSA, Operating System, DBMS, Computer Networking, Probability & Statistics",
    width: "80%",
  },
  {
    title: "Soft Skills",
    icon: <FaUserFriends />,
    skills: "Problem-Solving, Team Player, Project Management, Adaptability",
    width: "75%",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
    >
      {/* Simplified Animated Background */}
      <div className="absolute inset-0 bg-grid-slate-700/10" />

      {/* Optimized Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full backface-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random(),
          }}
        />
      ))}

      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-6 mb-16">
        <motion.div
          className="max-w-4xl ml-auto"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-right mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-l from-blue-400 to-transparent ml-auto max-w-xs"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      {/* Optimized Skills Grid */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 overflow-hidden backface-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Animate on entering view
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: false, margin: "0px 0px -25% 0px" }} // Trigger on re-entering
          >
            {/* Hover Effect Layer (CSS-powered) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Skill Content */}
            <div className="relative z-10">
              {/* Icon with Simplified Animation */}
              <div className="flex justify-center mb-4 text-4xl text-blue-400">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-4 text-slate-800">
                {skill.title}
              </h3>

              {/* Simplified Progress Indicator */}
              <div className="relative w-full mb-6">
                <div className="relative mx-auto w-28 h-28">
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
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      strokeDasharray="251"
                      viewport={{ once: true }}
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-blue-400">
                    {skill.width}
                  </span>
                </div>
              </div>

              {/* Skills Tags (CSS Animations Only) */}
              <div className="flex flex-wrap justify-center gap-2">
                {skill.skills.split(", ").map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 bg-slate-200/50 rounded-full border border-slate-300 text-slate-700 hover:bg-blue-100 transition-colors text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simplified Floating Element */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-400/10 backdrop-blur-sm rounded-xl backface-hidden"
        animate={{
          y: [-15, 15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </section>
  );
};
export default SkillsSection;
