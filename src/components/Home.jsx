import React from "react";
import {asset} from "../assets/index"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      id="home"
      className="h-fit flex flex-col justify-between scroll-smooth"
    >
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Welcome to Pawan's Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl"
          >
            I am deeply passionate about designing and developing high-quality
            software solutions that drive innovation, enhance user experiences,
            and create meaningful impact across industries. I am committed to
            continuous learning and dedicated to leveraging technology to solve
            real-world problems and improve lives on a global scale.
          </motion.p>
          <motion.a
            href={asset.resume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-lg shadow-lg"
            download
          >
            Download Resume
          </motion.a>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
};

export default Home;
