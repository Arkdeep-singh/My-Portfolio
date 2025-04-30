import React from "react";
import { asset } from "../assets/index/";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute w-64 h-64 bg-blue-100 rounded-full top-20 -left-20 blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-purple-100 rounded-full bottom-20 -right-20 blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      {/* Header */}
      <motion.h1
        className="relative z-10 text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "0px 0px -25% 0px" }}
      >
        About <span className="text-blue-600">Me</span>
        <span className="block text-xl mt-4 text-gray-600 font-medium">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Tech Enthusiast",
              "Creative Problem Solver",
              "UI/UX Advocate",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </span>
      </motion.h1>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="order-last lg:order-first w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "0px 0px -25% 0px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]">
            <img
              src={asset.profile}
              alt="Abhishek Profile"
              className="rounded-full w-full h-full object-cover shadow-2xl border-8 border-white/90 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -25% 0px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              variants={textVariants}
            >
              <span className="text-blue-600 font-semibold">Hello!</span> I'm
              Abhishek, a passionate full-stack developer dedicated to crafting
              exceptional digital experiences. With a strong foundation in both
              front-end and back-end technologies, I specialize in building
              scalable applications that prioritize{" "}
              <span className="text-blue-600">user-centric design</span> and{" "}
              <span className="text-blue-600">optimal performance</span>.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              variants={textVariants}
            >
              My expertise spans the entire development lifecycle - from concept
              to deployment. I thrive in collaborative environments and take
              pride in writing{" "}
              <span className="text-blue-600">clean, maintainable code</span>{" "}
              that solves real-world problems. Currently expanding my skills in
              cloud technologies and advanced system design.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              variants={textVariants}
            >
              Beyond coding, I'm passionate about{" "}
              <span className="text-blue-600">UI/UX design principles</span> and
              understanding user behavior. When not developing, you'll find me
              exploring new tech trends or contributing to open-source projects.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
