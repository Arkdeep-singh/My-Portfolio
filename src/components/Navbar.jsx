import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-4">
      {/* Background Gradient behind Navbar */}
      <div className="absolute inset-x-0 top-0 h-[160px] bg-gradient-to-br from-blue-50 via-white to-blue-100 blur-3xl opacity-70"></div>

      <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md w-full max-w-6xl"
        >
          <ul className="flex justify-center space-x-10 text-gray-800 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 transition duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#achievements" className="hover:text-blue-600 transition duration-300">
                Achievements
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-blue-600 transition duration-300">
                Certificates
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}

export default Navbar;
