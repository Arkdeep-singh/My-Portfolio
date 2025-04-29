import React from "react";
import { motion } from "framer-motion";
import {
  FaHamburger,
  FaDumbbell,
  FaAmbulance,
  FaGamepad,
  FaHome,
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Woofey - Online Food ordering website",
      description:
        "Devloped an online food delivery platform for ordering, tracking and payments",
      tech: ["React", "Tailwind CSS", "MongoDb", "Razorpay-Api"],
      link: "https://github.com/GovindKumar04/Woofey",
      icon: <FaHamburger className="inline-block mr-2 text-yellow-600" />,
    },
    {
      title: "Boost Pro - Fitness and Wellness Platform",
      description:
        "Built a fitness platform for booking workouts, tracking progress, and accesing health services",
      tech: ["Node.js", "MongoDB", "Html", "CSS", "JavaScript"],
      link: "https://github.com/GovindKumar04/BOOST-PRO-",
      icon: <FaDumbbell className="inline-block mr-2 text-green-600" />,
    },
    {
      title: "Emergency Ambulance Booking Portal",
      description: "A rael time ambulance booking portal for emrgencies.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      link: "https://github.com/GovindKumar04/Emergency_Ambulance_Booking_Portal",
      icon: <FaAmbulance className="inline-block mr-2 text-red-600" />,
    },
    {
      title: "Pong Game",
      description: "Devloped a classic pong game using python.",
      tech: ["Python", "Turtle Module"],
      link: "https://github.com/GovindKumar04/pong-game",
      icon: <FaGamepad className="inline-block mr-2 text-purple-600" />,
    },
    {
      title: "Home Harbor - A platform for daily needs",
      description: "Online service booking platform with any hustle to look offline.",
      tech: ["Html", "Node.js", "MongoDB", "JWT", "CSS"],
      link: "https://github.com/GovindKumar04/Home-Services-app",
      icon: <FaHome className="inline-block mr-2 text-blue-600" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h1>

      {/* Projects List */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            className="project-card bg-white shadow-lg rounded-lg p-6 text-center"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.icon}
              {project.title}
            </motion.h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-center space-x-2 mb-4 flex-wrap">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-600 text-sm py-1 px-3 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.a
              href={project.link}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              Go to Github Repo
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
