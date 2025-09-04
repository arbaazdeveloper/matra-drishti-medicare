import { motion,Variants } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const AboutUsSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-section');
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
  const containerVariants :Variants= {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants  :Variants= {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants  :Variants = {
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

  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "140+", label: "Specialist Doctors" },
    { value: "10k+", label: "Happy Patients" },
    { value: "24/7", label: "Emergency Services" }
  ];

  return (
    <section id="about-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Medical team at Matra Drishti Medicare Hospital"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
            
            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-teal-500 text-white p-6 rounded-2xl shadow-lg"
            >
              <span className="block text-4xl font-bold">25+</span>
              <span className="block text-sm">Years Experience</span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-teal-500 font-semibold">About Matra drishti Medicare</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Providing Quality Healthcare with Compassion
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-6">
              At Matra drishti Medicare, we believe that everyone deserves access to exceptional healthcare. 
              For over 25 years, we have been committed to delivering comprehensive medical 
              services with the highest standards of quality and compassion.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8">
              Our state-of-the-art facilities and team of experienced healthcare professionals 
              work together to ensure that our patients receive personalized care tailored to 
              their unique needs. We combine cutting-edge technology with a human touch to 
              provide the best possible outcomes.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-blue-50 rounded-lg"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(99, 179, 237, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-teal-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
                Learn More About Us
              </button>
              <button className="bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Meet Our Team
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;