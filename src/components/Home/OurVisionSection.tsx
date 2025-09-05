import { motion, Variants } from 'framer-motion';
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

  // SVG Icons
  const PatientCareIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CommunityHealthIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const MedicalExcellenceIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.94 15.06C19.7272 16.3963 19.1215 17.6372 18.2004 18.6185C17.2793 19.5998 16.0868 20.2743 14.7798 20.5517C13.4728 20.829 12.1116 20.6961 10.8842 20.1711C9.65689 19.6461 8.62273 18.7551 7.92 17.62L5.29 13.08C5.01753 12.6053 4.52105 12.3109 3.98 12.3109C3.43895 12.3109 2.94247 12.6053 2.67 13.08L2.34 13.62C2.11893 14.0465 2.11893 14.5535 2.34 14.98L5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 5C16.6566 5.45869 17.2121 6.04422 17.63 6.72L21.33 12.28C21.5511 12.7065 21.5511 13.2135 21.33 13.64L20.94 14.31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.78 20.22L22.51 16.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.78 16.49L22.51 20.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const InnovationResearchIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.69 14.7C20.77 13.87 21.34 12.57 21.34 11.12C21.34 8.60999 19.67 7.09999 17.13 7.09999H14.29C13.95 7.09999 13.67 6.81999 13.67 6.47999V4.39C13.67 2.53 12.54 1.85999 10.93 2.91999L5.36 6.39999C4.54 6.92999 4 7.89999 4 8.83999V15.33C4 16.22 4.52 17.13 5.36 17.66L10.93 21.14C12.54 22.2 13.67 21.53 13.67 19.67V17.58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 11.5C16.5 13.1569 15.1569 14.5 13.5 14.5C11.8431 14.5 10.5 13.1569 10.5 11.5C10.5 9.84315 11.8431 8.5 13.5 8.5C15.1569 8.5 16.5 9.84315 16.5 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
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
      icon: <PatientCareIcon />,
      title: "Exceptional Patient Care",
      description: "To provide compassionate, personalized healthcare that puts patients at the center of everything we do.",
      color: "bg-blue-50",
      textColor: "text-blue-600",
      hoverColor: "bg-blue-100"
    },
    {
      icon: <CommunityHealthIcon />,
      title: "Community Health",
      description: "To improve the health and wellbeing of our community through outreach programs and preventive care initiatives.",
      color: "bg-teal-50",
      textColor: "text-teal-600",
      hoverColor: "bg-teal-100"
    },
    {
      icon: <MedicalExcellenceIcon />,
      title: "Medical Excellence",
      description: "To maintain the highest standards of medical excellence through continuous learning and innovation.",
      color: "bg-purple-50",
      textColor: "text-purple-600",
      hoverColor: "bg-purple-100"
    },
    {
      icon: <InnovationResearchIcon />,
      title: "Innovation & Research",
      description: "To advance medical knowledge through research and embrace cutting-edge technologies for better patient outcomes.",
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      hoverColor: "bg-indigo-100"
    }
  ];

  return (
    <section id="vision-section" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-teal-600 font-semibold tracking-wider uppercase">Our Guiding Principles</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">Our Vision for Healthcare</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision Statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="group relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500 transition-all duration-500 group-hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading healthcare institution that transforms medical care through innovation, 
                  compassion, and excellence. We envision a community where everyone has access to 
                  exceptional healthcare services that enhance quality of life and promote wellbeing.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-teal-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="group relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 transition-all duration-500 group-hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide comprehensive, patient-centered healthcare that meets the highest standards 
                  of quality and safety. We are committed to serving our community with compassion, 
                  integrity, and innovation while advancing medical knowledge through research and education.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
                className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-teal-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${point.color} group-hover:${point.hoverColor} rounded-xl flex items-center justify-center mb-4 transition-colors duration-500`}>
                    <span className={`${point.textColor} group-hover:text-teal-700 transition-colors duration-500`}>
                      {point.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors duration-500">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Join us in our mission to transform healthcare and make a meaningful difference in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="relative group bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-500 shadow-md hover:shadow-lg overflow-hidden">
              <span className="relative z-10">Support Our Mission</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="relative group bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-500 overflow-hidden">
              <span className="relative z-10">Learn About Our Programs</span>
              <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVisionSection;