import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "Approximation Algorithms and Linear Programming",
      description:
        "Successfully completed this course, gaining knowledge of algorithm optimization techniques and linear programming fundamentals.",
      tags: ["Completion", "Course", "Achievement"],
      link: "https://drive.google.com/file/d/1zuilmW466uumvlN-vT1jElBmF1lJRac-/view?usp=drivesdk",
      iconColor: "text-green-600",
    },
    {
      title: "Generative AI with Large Language Models",
      description:
        "Completed an advanced AI course, covering LLM architectures, prompt engineering, and practical implementation scenarios.",
      tags: ["Achievement", "Excellence", "Recognition"],
      link: "https://drive.google.com/file/d/1zx36opz-EaGAIopejuuWR7Mxt86F_IpL/view?usp=drivesdk",
      iconColor: "text-blue-600",
    },
    {
      title: "The World of Computer Networking",
      description:
        "Completed an in-depth course on networking concepts including protocols, OSI layers, and real-world applications.",
      tags: ["Udemy", "Online Learning", "Skill Development"],
      link: "https://drive.google.com/file/d/1MpXLSjROLmMNxphvjKGf1mVtX6RmDzVW/view?usp=drivesdk",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span className="text-blue-600">Certificates</span>
      </motion.h1>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">
              <FaCertificate className={`text-5xl ${cert.iconColor}`} />
            </div>

            {/* Title Animation */}
            <motion.h2
              className="text-xl font-semibold text-gray-800 mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {cert.title}
            </motion.h2>

            {/* Description Animation */}
            <motion.p
              className="text-gray-600 mb-5 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {cert.description}
            </motion.p>

            {/* Tags Animation */}
            <motion.div
              className="flex justify-center flex-wrap gap-2 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {cert.tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-xs font-medium py-1 px-3 rounded-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + idx * 0.2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Button Animation */}
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
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
