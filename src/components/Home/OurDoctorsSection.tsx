import { motion,Variants } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const OurDoctorsSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('doctors-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const doctors = [
    {
      name: "Dr. Rajesh Gupta",
      specialty: "Eye Surgeon",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Specialized in heart diseases and conditions with over 15 years of experience.",
      features: ["Heart Surgery", "Cardiac Care", "Emergency Cardiology"]
    },
    {
      name: "Dr. Amita Gupta",
      specialty: "Gynaecologist & Obstetrician",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Expert in bone and joint surgeries with a focus on minimally invasive techniques.",
      features: ["Gynaecologist", "Infertilty Expert"]
    }
  ];

  // Animation variants
  const containerVariants :Variants = {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="doctors-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-500 font-semibold">Our Medical Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Meet Our Specialist Doctors</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of specialist doctors is dedicated to providing expert care across a wide range of medical fields.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-80">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>
                  <p className="text-teal-300 font-medium">{doctor.specialty}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{doctor.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Specializes in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <button className="text-teal-500 hover:text-teal-600 font-medium flex items-center">
                    View Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 hover:bg-teal-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">Looking for a different specialist?</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            View All Doctors
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurDoctorsSection;