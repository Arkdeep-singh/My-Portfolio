import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 200);
    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => setIsScrolling(false), 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-20 pb-12">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: showScrollButton && !isScrolling ? 1 : 0,
          y: showScrollButton && !isScrolling ? 0 : 100,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiArrowUp className="text-2xl text-white" />
      </motion.button>

      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -25% 0px" }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Abhishek Kumar
            </h3>
            <p className="text-gray-400">
              Full-stack developer passionate about creating impactful solutions
              and open-source contributions.
            </p>
            <div className="flex space-x-6 text-xl">
              <motion.a
                href="https://www.linkedin.com/in/abhishek6725/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/Abhishek6725"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Achievements",
                "Certificates",
                "Contact",
              ].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="hover:text-blue-400 transition-colors"
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#${link.toLowerCase()}`)
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Phagwara, Punjab, INDIA</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span>+91 6203638372</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span>abhishek777661@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-gray-700 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ margin: "0px 0px -25% 0px" }}
        >
          <p>
            © {new Date().getFullYear()} Abhishek Kumar. Crafted with ❤️ using
            React & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
