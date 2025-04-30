import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaMedal, FaLaptopCode } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "Golden Badges on HackerRank",
      description:
        "Earned a Golden Badge in Java and C++ on HackerRank for consistent problem-solving and skill demonstration.",
      tags: ["Coding", "Java", "C++"],
      icon: <FaLaptopCode className="text-yellow-600 text-4xl" />,
      color: "from-yellow-400/20 to-yellow-600/10",
    },
    {
      title: "Top 50% s1 Rank - University",
      description:
        "Achieved a Top 50% Student Leader (s1) rank across the university based on overall academic and extracurricular performance.",
      tags: ["Academic", "Leadership", "University"],
      icon: <FaMedal className="text-blue-600 text-4xl" />,
      color: "from-blue-400/20 to-blue-600/10",
    },
    {
      title: "U-19 District Cricket Champion",
      description:
        "Winner of the Under-19 District Regional Cricket Tournament held in Bihar, showcasing leadership and sportsmanship.",
      tags: ["Cricket", "Sports", "Winner"],
      icon: <FaCrown className="text-green-600 text-4xl" />,
      color: "from-green-400/20 to-green-600/10",
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
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case "Hackathon":
        return "bg-yellow-100 text-yellow-800";
      case "Essay Writing":
        return "bg-red-100 text-red-800";
      case "Coding":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Title with Right-Aligned Text and Animated Line */}
      <div className="relative z-10 container mx-auto px-6 mb-16">
        <div className="max-w-4xl ml-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-right mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ margin: "0px 0px -25% 0px" }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h1>

          <motion.div
            className="h-1 bg-gradient-to-l from-yellow-500 to-transparent ml-auto max-w-xs"
            variants={{
              hidden: { width: 0 },
              visible: { width: "100%" },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ margin: "0px 0px -25% 0px" }}
          />
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${achievement.color} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -25% 0px" }}
          >
            <motion.div
              className="mb-6 flex justify-center"
              variants={itemVariants}
            >
              <div className="p-4 bg-white/90 rounded-full shadow-lg">
                <motion.div
                  className={
                    achievement.color.includes("yellow")
                      ? "text-yellow-500"
                      : achievement.color.includes("red")
                      ? "text-red-500"
                      : "text-blue-500"
                  }
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {achievement.icon}
                </motion.div>
              </div>
            </motion.div>

            <motion.h2
              className="text-xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              {achievement.title}
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {achievement.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {achievement.tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(
                    tag
                  )}`}
                  variants={itemVariants}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Added a subtle decorative element instead of the button */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              variants={itemVariants}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;