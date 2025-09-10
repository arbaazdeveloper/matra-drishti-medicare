import { motion , Variants} from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const QuickFacilitiesSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('maternity-ward');
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
  const containerVariants : Variants= {
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

  const imageVariants :Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      text: "Private rooms with homely ambiance"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      text: "24/7 security and privacy ensured"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      text: "Dedicated nursing staff and midwives"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "Advanced monitoring for mother and baby"
    }
  ];

  return (
    <section id="maternity-ward" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Private Maternity Ward at Care Link Hospital"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-6 rounded-2xl shadow-lg"
            >
              <span className="block text-2xl font-bold">Luxury</span>
              <span className="block text-sm">Maternity Suites</span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-pink-500 font-semibold">Premium Facility</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Private Maternity Ward
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8">
              Experience the journey of motherhood in our exclusive private maternity ward, 
              designed for comfort, privacy, and the highest standard of care for you and your newborn.
            </motion.p>

            {/* Features List */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-pink-100 p-2 rounded-full mr-4">
                    <div className="text-pink-500">
                      {feature.icon}
                    </div>
                  </div>
                  <p className="text-gray-700">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
                Explore More Facilities
              </button>
              <button className="bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickFacilitiesSection;