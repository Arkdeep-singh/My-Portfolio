import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A fully functional eCommerce platform built using PHP, JavaScript, and MySQL. It features dynamic product listings, secure user authentication, shopping cart functionality, order processing, and an admin dashboard for inventory and order management. The platform offers a seamless and responsive user experience, allowing customers to browse products, add them to cart, and complete purchases with ease.",
    tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    link: "https://github.com/GovindKumar04/eCommerce-Platform",
    image:
      "http://unblast.com/wp-content/uploads/2020/04/E-Commerce-App-Template-1.jpg",
  },
  {
    title: "E-Learning Dashboard",
    description:
      "An interactive e-learning dashboard designed to manage and track 100+ courses efficiently. Built with Node.js, Express.js, and MongoDB, it includes real-time discussion features enabling instant student-instructor communication for 500+ users, reducing response delays by 40%. The interface is optimized with Tailwind CSS to improve usability, cutting navigation effort by 30% and boosting learner engagement by 60%.",
    tech: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/Abhishek6725/E-learning--BackendProject",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d2e21d165015155.640046fb9fc22.jpg",
  },
  {
    title: "Emergency Ambulance Booking Portal",
    description:
      "This real-time portal enables users to instantly locate and book the nearest available ambulance during emergencies. It includes GPS-based tracking, live status updates, driver dashboard, and secure booking with JWT-based authentication.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    link: "https://github.com/Abhishek6725/Health-Care-Website-Frontend-Project",
    image:
      "https://user-images.githubusercontent.com/95934322/211133418-cfeee594-a5b3-4e8f-ae28-6202dbf7e342.jpeg",
  },
  {
    title: "LMS_BoardInfinity_Project",
    description:
      "A Learning Management System (LMS) built using C++ that manages student records, course enrollments, and grading functionalities. Designed as a console-based application, it emphasizes object-oriented programming principles and file handling, offering a foundational tool for academic administration.",
    tech: ["C++"],
    link: "https://github.com/GovindKumar04/LMS_BoardInfinity_Project",
    image:
      "https://th.bing.com/th/id/OIP.4be_r1zdQ_dfrFFHPS_P2wHaET?rs=1&pid=ImgDetMain",
  },  
  {
    title: "Pong Game",
    description:
      "A retro-style Pong game built using Python’s Turtle module. It recreates the classic 2D game experience with responsive paddle control, scoring system, and game-over detection — a beginner-friendly project to demonstrate interactive UI design in Python.",
    tech: ["Python", "Turtle Module"],
    link: "https://github.com/GovindKumar04/pong-game",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.ZJteWv0dV0NDQFE5rXuDsAHaFj&pid=Api&P=0&h=180",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const constraintsRef = useRef(null);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) =>
      newDirection === "right"
        ? (prev + 1) % projects.length
        : (prev - 1 + projects.length) % projects.length
    );
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const projectVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction === "right" ? -200 : 200,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <section id="projects" className="py-24 bg-gray-50" ref={constraintsRef}>
      <div className="relative z-10 container mx-auto px-6 mb-16">
        <div className="max-w-4xl mr-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-left mb-4"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -25% 0px", once: false }}
          >
            My <span className="text-blue-600">Projects</span>
          </motion.h2>

          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 to-transparent mr-auto max-w-xs"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ margin: "0px 0px -25% 0px", once: false }}
          />
        </div>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={projectVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col md:flex-row items-center md:items-start gap-10"
          >
            <motion.img
              src={projects[index].image}
              alt={projects[index].title}
              className="w-full md:w-[45%] h-80 md:h-[26rem] object-cover rounded-3xl shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="bg-white w-full md:w-[55%] p-10 rounded-2xl shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-lg" />
                <span className="whitespace-nowrap">View on GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-10 mt-14">
          <motion.button
            onClick={() => navigate("left")}
            className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowLeft className="text-2xl text-gray-700" />
          </motion.button>
          <motion.button
            onClick={() => navigate("right")}
            className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowRight className="text-2xl text-gray-700" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
