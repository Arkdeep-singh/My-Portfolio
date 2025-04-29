import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. Built with love and
            React ❤️
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/naira-Abhishek-b2ba592ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NairaAbhishek"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
