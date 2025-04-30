import React from "react";
import { asset } from "../assets/index/";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Subtle background animation */}
      <motion.div
        className="absolute w-64 h-64 bg-blue-100 rounded-full top-1/4 -left-20 blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Content - Left Side */}
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -25% 0px", once: false }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Heading with Animated Line */}
          <div className="mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-left"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-blue-600">Me</span>
            </motion.h1>

            <motion.div
              className="h-1 bg-gradient-to-r from-blue-500 to-transparent"
              variants={lineVariants}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Animated Paragraphs */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold">
              Innovative problem-solver
            </span>{" "}
            with expertise in full-stack development. I architect digital
            solutions that blend technical excellence with user-centric design,
            transforming complex challenges into intuitive experiences.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Proficient in modern tech stacks, I engineer scalable applications
            while maintaining clean code standards. My development philosophy
            emphasizes{" "}
            <span className="text-blue-600">performance optimization</span> and{" "}
            <span className="text-blue-600">maintainable architecture</span>,
            ensuring long-term project success.
          </motion.p>
        </motion.div>

        {/* Image Section - Right Side */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
          viewport={{ margin: "0px 0px -25% 0px", once: false }}
        >
          <div className="relative w-[420px] h-[420px]">
            <img
              src={asset.profile}
              alt="Abhishek Profile"
              className="rounded-full w-full h-full object-cover shadow-2xl border-8 border-white/90 relative z-10"
            />

            {/* Subtle Wave Animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-200/30"
              animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeOut",
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-300/20"
              animate={{ scale: [1, 1.6], opacity: [0.3, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeOut",
                repeatType: "loop",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Typewriter Effect Footer */}
      <motion.div
        className="text-center mt-16 text-xl text-gray-600 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Typewriter
          words={[
            "Full-Stack Architecture",
            "Cloud-Native Solutions",
            "UI/UX Optimization",
            "System Design",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </motion.div>
    </section>
  );
};

export default About;
