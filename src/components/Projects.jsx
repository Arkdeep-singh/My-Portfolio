import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    title: "Woofey - Online Food ordering website",
    description:
      "Woofey is a full-fledged online food ordering platform that allows users to browse a variety of restaurants, customize orders, make secure payments via Razorpay, and track their deliveries in real-time. It supports user authentication and is built with a modular scalable backend.",
    tech: ["React", "Tailwind CSS", "MongoDB", "Razorpay API"],
    link: "https://github.com/GovindKumar04/Woofey",
    image: "path_to_woofey_image.jpg",
  },
  {
    title: "Boost Pro - Fitness and Wellness Platform",
    description:
      "Boost Pro is a fitness management platform offering users the ability to book workouts, access dietary plans, and track health metrics. It integrates multiple services including trainer booking, health records, and goal tracking through a responsive and user-friendly UI.",
    tech: ["Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/GovindKumar04/BOOST-PRO-",
    image: "path_to_boostpro_image.jpg",
  },
  {
    title: "Emergency Ambulance Booking Portal",
    description:
      "This real-time portal enables users to instantly locate and book the nearest available ambulance during emergencies. It includes GPS-based tracking, live status updates, driver dashboard, and secure booking with JWT-based authentication.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    link: "https://github.com/GovindKumar04/Emergency_Ambulance_Booking_Portal",
    image: "path_to_ambulance_image.jpg",
  },
  {
    title: "Pong Game",
    description:
      "A retro-style Pong game built using Python’s Turtle module. It recreates the classic 2D game experience with responsive paddle control, scoring system, and game-over detection — a beginner-friendly project to demonstrate interactive UI design in Python.",
    tech: ["Python", "Turtle Module"],
    link: "https://github.com/GovindKumar04/pong-game",
    image: "path_to_pong_image.jpg",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h1>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-10"
          >
            {/* Project Image Outside Card (Left Side) */}
            <img
              src={projects[index].image}
              alt={projects[index].title}
              className="w-full md:w-[45%] h-80 md:h-[26rem] object-cover rounded-3xl shadow-2xl"
            />

            {/* Project Details (Right Side) */}
            <div className="bg-white w-full md:w-[55%] p-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                {projects[index].title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {projects[index].description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {projects[index].tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={projects[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 px-5 py-3 rounded-lg text-base font-medium shadow-lg"
                animate={{
                  y: [0, -1, 0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaGithub />
                View on GitHub
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-10 mt-14">
          <button
            onClick={prevProject}
            className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full shadow-md transition"
          >
            <FaArrowLeft className="text-2xl text-gray-700" />
          </button>
          <button
            onClick={nextProject}
            className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full shadow-md transition"
          >
            <FaArrowRight className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
