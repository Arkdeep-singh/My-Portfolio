import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800"
        >
          Portfolio
        </motion.h1>
        <nav>
          <ul className="flex space-x-6 text-gray-600 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-500 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500 cursor-pointer">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="hover:text-blue-500 cursor-pointer"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className="hover:text-blue-500 cursor-pointer"
              >
                Certificates
              </a>
            </li>
            <li></li>
            <li>
              <a href="#contact" className="hover:text-blue-500 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
