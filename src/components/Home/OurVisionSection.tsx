import { motion,Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const OurVisionSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('vision-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const visionPoints = [
    {
      icon: "👁️",
      title: "Exceptional Patient Care",
      description: "To provide compassionate, personalized healthcare that puts patients at the center of everything we do."
    },
    {
      icon: "🌍",
      title: "Community Health",
      description: "To improve the health and wellbeing of our community through outreach programs and preventive care initiatives."
    },
    {
      icon: "⚕️",
      title: "Medical Excellence",
      description: "To maintain the highest standards of medical excellence through continuous learning and innovation."
    },
    {
      icon: "🔬",
      title: "Innovation & Research",
      description: "To advance medical knowledge through research and embrace cutting-edge technologies for better patient outcomes."
    }
  ];

  return (
    <section id="vision-section" className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-500 font-semibold">Our Guiding Principles</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Our Vision for Healthcare</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision Statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To be the leading healthcare institution that transforms medical care through innovation, 
                  compassion, and excellence. We envision a community where everyone has access to 
                  exceptional healthcare services that enhance quality of life and promote wellbeing.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To provide comprehensive, patient-centered healthcare that meets the highest standards 
                  of quality and safety. We are committed to serving our community with compassion, 
                  integrity, and innovation while advancing medical knowledge through research and education.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision Points */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 text-lg mb-6">
            Join us in our mission to transform healthcare and make a difference in our community.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md mr-4">
            Support Our Mission
          </button>
          <button className="bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            Learn About Our Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVisionSection;