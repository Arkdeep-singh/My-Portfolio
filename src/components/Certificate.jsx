import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Certificates = () => {
  const certificates = [
    {
      title: "NIIT Course Certificate Server side JavaScript with Node.js and Express.js",  
      description:
        "I successfully completed the “Server-side JavaScript with Node.js” course offered by NIIT through Coursera on May 13, 2024. This course enhanced my backend development skills by providing hands-on experience in building scalable server-side applications using Node.js. Key topics included setting up Node.js environments, working with Express.js, creating RESTful APIs, handling asynchronous operations, and understanding basic deployment practices.",
      tags: ["Completion", "Course", "Achievement"],
      link: "https://drive.google.com/file/d/1eV0GIG6j3yin4xNmW4uJcJYCzY8Lleeh/view",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      description:
        "Completed a comprehensive course on data structures and algorithms using C and C++. Gained proficiency in implementing various data structures, algorithmic techniques, and problem-solving strategies. This course enhanced my programming skills and prepared me for technical interviews. ", 
      tags: ["Achievement", "Excellence", "Recognition"],
      link: "https://drive.google.com/file/d/1tgwOBZDxchDBMITUpkpUiCy_9scQKCOH/view",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "The World of Computer Networking",
      description:
        "Completed an in-depth course on networking concepts including protocols, OSI layers, and real-world applications.",
      tags: ["Udemy", "Online Learning", "Skill Development"],
      link: "https://drive.google.com/file/d/1MpXLSjROLmMNxphvjKGf1mVtX6RmDzVW/view?usp=drivesdk",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "Fundamentals of Machine Learning",
      description:
        "Explored essential ML concepts including supervised and unsupervised learning, and implemented real-world projects.",
      tags: ["Learning", "ML", "Coursera"],
      link: "https://drive.google.com/file/d/your-certificate-id/view?usp=drivesdk",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleChange = (delta) => {
    setDirection(delta);
    setCurrent((prev) => (prev + delta + certificates.length) % certificates.length);
  };

  const getTagStyle = (tag) => {
    switch (tag) {
      case "Completion":
        return "bg-green-100 text-green-800 border border-green-200";
      case "Course":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      case "Achievement":
        return "bg-purple-100 text-purple-800 border border-purple-200";
      case "Excellence":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  const slideVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
      scale: 0.95,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Title */}
      <div className="container mx-auto px-6 mb-12 text-left">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "0px 0px -25% 0px" }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certificates
          </span>
        </motion.h1>
        <motion.div
          className="h-1 bg-gradient-to-r from-green-600 to-transparent max-w-xs"
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

      {/* Certificate Card Slider */}
      <div className="relative container mx-auto px-6 flex items-center justify-center min-h-[450px]">
        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center z-20 pl-2 sm:pl-4">
          <button
            onClick={() => handleChange(-1)}
            className="bg-white shadow-md rounded-full p-2 sm:p-3 hover:scale-110 transition focus:outline-none"
          >
            <IoIosArrowBack size={20} className="sm:size-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-20 pr-2 sm:pr-4">
          <button
            onClick={() => handleChange(1)}
            className="bg-white shadow-md rounded-full p-2 sm:p-3 hover:scale-110 transition focus:outline-none"
          >
            <IoIosArrowForward size={20} className="sm:size-6" />
          </button>
        </div>

        {/* Animated Card */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full sm:max-w-xl z-10"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-opacity-10 rounded-2xl shadow-inner">
                  <FaCertificate
                    className={`text-5xl ${certificates[current].iconColor}`}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {certificates[current].title}
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {certificates[current].description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {certificates[current].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTagStyle(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={certificates[current].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 font-medium text-white ${certificates[current].buttonColor} rounded-lg transition hover:scale-105`}
              >
                View Certificate
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
