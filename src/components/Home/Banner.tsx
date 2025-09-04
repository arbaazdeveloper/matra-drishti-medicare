"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Modern hospital facility"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
             Welcome to <span className="text-teal-400">Matra Drishti Medicare </span>Multispeciality Hospital, Lucknow 
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
            Compassionate care with advanced medical facilities. From expert doctors to quick appointments and 24x7 emergency services, we are here to hear and heal your health problems.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <p className="text-sm md:text-xl max-w-3xl mx-auto">
              Expert Care | Quick Appointments | Hassle-Free Healthcare | Trusted by Families in Lucknow
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Appointment
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Emergency Care
            </button>
          </motion.div>

         
        </div>
      </div>

      {/* Animated elements */}
      {!isMobile && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.2, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-1/4 left-10 text-white/20 text-8xl z-0"
          >
            ❤
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.2, x: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute bottom-1/4 right-10 text-white/20 text-8xl z-0"
          >
            ⚕
          </motion.div>
        </>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <p className="text-white text-sm mb-2">Scroll Down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;