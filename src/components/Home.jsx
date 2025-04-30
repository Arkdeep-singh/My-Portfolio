import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Home = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Dynamic Geometric Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating Triangles */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute w-[400px] -top-20 -left-20 opacity-10 text-blue-100"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M48.6,-70.3C62.2,-61.3,72,-47.1,78.7,-30.6C85.3,-14.1,88.8,4.7,84.1,19.9C79.4,35.1,66.6,46.8,53.1,58.3C39.6,69.8,25.4,81.2,8.3,87.2C-8.8,93.2,-28.8,93.8,-44.6,84.9C-60.4,76,-72,57.5,-77.7,39.3C-83.3,21,-83,2.9,-77.2,-11.5C-71.4,-25.9,-60.1,-37.6,-47.5,-46.7C-34.9,-55.7,-21,-62.1,-3.7,-60.4C13.6,-58.6,27.2,-48.7,48.6,-70.3Z"
          />
        </motion.svg>

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 bg-grid-blue-100/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Floating Particles System */}
      <div className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full"
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
          />
        ))}
      </div>

      <main className="relative z-20 container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20% 0px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/50 backdrop-blur-sm rounded-full border border-blue-100 text-blue-600 text-sm"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", delay: 0.4 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Creative
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Bridging imagination with implementation through elegant code and
              intuitive design. Transforming complex challenges into seamless
              digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection("about")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Explore Portfolio</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>

              <div className="flex gap-5">
                {[
                  {
                    icon: FiGithub,
                    color: "text-gray-600",
                    link: "https://github.com/Abhishek6725",
                  },
                  {
                    icon: FiLinkedin,
                    color: "text-blue-600",
                    link: "https://www.linkedin.com/in/abhishek6725/",
                  },
                  {
                    icon: FiMail,
                    color: "text-cyan-600",
                    link: "mailto:abhishek777661@gmail.com",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white transition-colors ${item.color}`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Code Terminal */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <div className="font-mono text-sm space-y-4">
                <div className="flex gap-4 text-gray-500">
                  <span className="text-purple-600">const</span>
                  <span className="text-blue-600">developer</span>
                  <span>=</span>
                  <span className="text-cyan-600">{"{"}</span>
                </div>
                <div className="ml-8">
                  <p className="text-gray-700">
                    <span className="text-blue-600">name:</span>{" "}
                    <span className="text-green-600">"Abhishek"</span>,
                  </p>
                  <p className="text-gray-700">
                    <span className="text-blue-600">stack:</span>{" "}
                    <span className="text-yellow-600">
                      ["React", "Node", "AI"]
                    </span>
                    ,
                  </p>
                  <p className="text-gray-700">
                    <span className="text-blue-600">passion:</span>{" "}
                    <span className="text-pink-600">
                      "Building Future Tech"
                    </span>
                  </p>
                </div>
                <div className="text-gray-500">{"}"};</div>
              </div>

              {/* Animated Cursor */}
              <motion.div
                className="absolute bottom-8 right-8 w-3 h-6 bg-blue-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </main>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-blue-300 rounded-full relative"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-blue-400 absolute top-2 left-1/2 -translate-x-1/2 rounded-full" />
        </motion.div>
        <span className="text-sm text-blue-600 font-light tracking-wide">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
};

export default Home;
