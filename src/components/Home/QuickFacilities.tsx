"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const QuickFacilities = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('facilities-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const facilities = [
    {
      title: 'Expert Doctors',
      description: 'Skilled professionals delivering top-quality care.',
      icon: '👨‍⚕️',
      color: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Emergency Care',
      description: 'Fast, reliable treatment when you need it most.',
      icon: '🚑',
      color: 'bg-red-100',
      textColor: 'text-red-600'
    },
    {
      title: '24/7 Full Support',
      description: 'Always here for appointments and emergencies.',
      icon: '⏰',
      color: 'bg-teal-100',
      textColor: 'text-teal-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="facilities-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Facilities</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive healthcare services for all your needs</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
             
              whileHover={{ scale: 1.03 }}
            >
              <div className={`w-16 h-16 ${facility.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{facility.icon}</span>
              </div>
              <h3 className={`text-xl font-semibold text-center mb-3 ${facility.textColor}`}>
                {facility.title}
              </h3>
              <p className="text-gray-600 text-center">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            View All Facilities
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickFacilities;