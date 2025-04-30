import React from "react";
import { asset } from "../assets/index/";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Background elements remain same */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
        {/* Text Content - Order changes on mobile */}
        <motion.div
          className="lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-20% 0px", once: false }}
          transition={{ staggerChildren: 0.2 }}
        >
          <div className="mb-8 md:mb-12">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>

            <motion.div
              className="h-1 bg-gradient-to-r from-blue-500 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6">
              <span className="font-semibold text-blue-600">
                Innovative problem-solver
              </span>{" "}
              with expertise in full-stack development. I architect digital
              solutions that blend technical excellence with user-centric
              design.
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
              Proficient in modern tech stacks, I engineer scalable applications
              while maintaining clean code standards. My development philosophy
              emphasizes{" "}
              <span className="text-blue-600">performance optimization</span>{" "}
              and{" "}
              <span className="text-blue-600">maintainable architecture</span>.
            </p>

            <motion.a
              href={asset.cv}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Section - Order changes on mobile */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative order-1 lg:order-2 mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
          viewport={{ margin: "-20% 0px", once: false }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]">
            {/* Profile Image */}
            <motion.img
              src={asset.profile}
              alt="Abhishek Profile"
              className="rounded-full w-full h-full object-cover shadow-2xl border-8 border-white/90 relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Floating Tech Badge - Mobile Positioning */}
            <motion.div
              className="absolute md:-right-20 -bottom-8 md:top-1/2 md:-translate-y-1/2 right-0 z-20 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-gray-200 w-[220px] md:w-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-sm md:text-lg font-medium text-gray-700">
                <Typewriter
                  words={[
                    "Web Development",
                    "Cloud Architecture",
                    "UI/UX Design",
                    "System Design",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </div>
            </motion.div>

            {/* Animated Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-200/30"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Particles - Reduced on mobile */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full hidden md:block"
                initial={{
                  x: Math.random() * 300 - 150,
                  y: Math.random() * 300 - 150,
                  scale: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
