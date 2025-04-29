import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCode, FaNetworkWired } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "Approximation Algorithms and Linear Programming",
      description: "This certificate signifies the successful completion of a course or program.",
      tags: ["Completion", "Course", "Achievement"],
      link: "https://drive.google.com/file/d/1zuilmW466uumvlN-vT1jElBmF1lJRac-/view?usp=drivesdk",
      icon: <FaCertificate className="inline-block mr-2 text-green-600" />,
    },
    {
      title: "Generative AI with Large Language Models",
      description: "This certificate acknowledges outstanding performance or accomplishment in a specific area.",
      tags: ["Achievement", "Excellence", "Recognition"],
      link: "https://drive.google.com/file/d/1zx36opz-EaGAIopejuuWR7Mxt86F_IpL/view?usp=drivesdk",
      icon: <FaCertificate className="inline-block mr-2 text-blue-600" />,
    },
    {
      title: "The world of computer networking",
      description: "This certificate confirms the completion of a Udemy course, indicating acquired skills and knowledge.",
      tags: ["Udemy", "Online Learning", "Skill Development"],
      link: "https://drive.google.com/file/d/1MpXLSjROLmMNxphvjKGf1mVtX6RmDzVW/view?usp=drivesdk",
      icon: <FaCertificate className="inline-block mr-2 text-purple-600" />,
    },
  ];
  

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Certificates</span>
      </motion.h1>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center"
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
              {cert.icon}
              {cert.title}
            </motion.h2>
            <p className="text-gray-600 mb-4">{cert.description}</p>
            <div className="flex justify-center flex-wrap gap-2 mb-4">
              {cert.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-600 text-sm py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.a
              href={cert.link}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              View Certificate
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
