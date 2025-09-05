import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

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

  // SVG Icons for each facility
  const DoctorIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 3.13C17.8604 3.3503 18.623 3.8507 19.1676 4.55231C19.7122 5.25392 20.0078 6.11683 20.0078 7.005C20.0078 7.89317 19.7122 8.75608 19.1676 9.45769C18.623 10.1593 17.8604 10.6597 17 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const EmergencyIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SupportIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15 8H9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8Z" fill="currentColor"/>
    </svg>
  );

  const facilities = [
    {
      title: 'Expert Doctors',
      description: 'Skilled professionals delivering top-quality care with years of experience.',
      icon: <DoctorIcon />,
      color: 'bg-blue-50',
      textColor: 'text-blue-600',
      hoverColor: 'bg-blue-100'
    },
    {
      title: 'Emergency Care',
      description: 'Fast, reliable treatment when you need it most with minimal wait times.',
      icon: <EmergencyIcon />,
      color: 'bg-red-50',
      textColor: 'text-red-600',
      hoverColor: 'bg-red-100'
    },
    {
      title: '24/7 Full Support',
      description: 'Always here for appointments and emergencies with round-the-clock service.',
      icon: <SupportIcon />,
      color: 'bg-teal-50',
      textColor: 'text-teal-600',
      hoverColor: 'bg-teal-100'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants : Variants= {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="facilities-section" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Premium Facilities</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art healthcare services designed for your comfort and well-being
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-teal-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 ${facility.color} group-hover:${facility.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-500`}>
                  <span className={`${facility.textColor} group-hover:text-teal-700 transition-colors duration-500`}>
                    {facility.icon}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold text-center mb-4 ${facility.textColor} group-hover:text-teal-700 transition-colors duration-500`}>
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {facility.description}
                </p>
                
                {/* Read more link */}
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-teal-600 group-hover:text-teal-800 font-medium transition-colors duration-500 cursor-pointer">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="relative group bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-500 shadow-md hover:shadow-lg overflow-hidden">
            <span className="relative z-10">Explore All Facilities</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-300 group-hover:animate-pulse"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickFacilities;