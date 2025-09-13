"use client"
import { motion } from 'framer-motion';

const TopHeaderBar = () => {
  return (
    <div className="z-50 hidden md:block bg-gradient-to-r from-pink-600 to-purple-600 text-white sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Left Side - Contact Information */}
          <div className="flex items-center space-x-6">
            {/* Phone Number */}
            <motion.a
              href="tel:+918007442266"
              className="flex items-center text-sm hover:text-pink-200 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+917499931560</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:matradrishtimedicare9@gmail.com"
              className="flex items-center text-sm hover:text-pink-200 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>matradrishtimedicare9@gmail.com</span>
            </motion.a>
          </div>

          {/* Right Side - Ask a Question Button */}
          <motion.button
            className="bg-white text-pink-600 hover:bg-pink-50 font-medium py-1.5 px-4 rounded-full text-sm transition-colors flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Ask a Question
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderBar;