import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Header */}
        <motion.h2
          className="text-3xl md:text-4xl text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect and Build Something Innovative!
        </motion.h2>

        {/* Quick Links */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#home"
            className="text-gray-300 hover:text-blue-600 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-600 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-600 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-600 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="text-gray-300 hover:text-blue-600 transition duration-300"
          >
            Achievements
          </a>
          <a
            href="#certificates"
            className="text-gray-300 hover:text-blue-600 transition duration-300"
          >
            Certificates
          </a>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mb-8 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300">+91 7984352345</p>
          <p className="text-gray-300">Abshiekkumar@gmail.com</p>
          <p className="text-gray-300">Phagwara, Punjab, INDIA</p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-6 text-3xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:text-3xl transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:text-3xl transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:text-3xl transition duration-300 transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          ©2025 Abhishek kumar all right reserved.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;