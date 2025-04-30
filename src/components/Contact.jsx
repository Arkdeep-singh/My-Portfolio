import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gradient-to-br from-white via-gray-100 to-white">
      {/* Header */}
      <motion.h1
        id="contact"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        viewport={{ once: true }}
      >
        Get In <span className="text-blue-600">Touch</span>
      </motion.h1>

      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Info Section */}
        <motion.div
          className="contact_section text-center mb-12 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Don't be shy! Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be a part of your vision. I look forward to hearing from you!
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="contact_section w-full max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden Input for Web3Forms API Key */}
            <input
              type="hidden"
              name="access_key"
              value="cd1175c4-c526-4153-8e14-49100a4d8523"
            />

            {/* Name Fields */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <motion.input
                type="text"
                name="First Name"
                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                placeholder="First Name"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                aria-label="First Name"
              />
              <motion.input
                type="text"
                name="Last Name"
                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                placeholder="Last Name"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                aria-label="Last Name"
              />
            </div>

            {/* Email & Subject Fields */}
            <div className="space-y-4">
              <motion.input
                type="email"
                name="Email"
                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                placeholder="Your Email"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                aria-label="Email"
              />
              <motion.input
                type="text"
                name="Subject"
                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                placeholder="Your Subject"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                aria-label="Subject"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-4">
              <motion.textarea
                name="Message"
                className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                placeholder="Your Message"
                rows="4"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                aria-label="Message"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg shadow-lg mt-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
