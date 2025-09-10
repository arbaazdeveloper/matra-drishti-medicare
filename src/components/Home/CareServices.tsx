import { motion, Variants } from 'framer-motion';

const CareServices = () => {
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

  const itemVariants :Variants= {
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

  // Services data
  const services = [
    {
      title: "Women's Healthcare",
      description: "Comprehensive care for all stages of a woman's life, from adolescence through menopause.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "bg-pink-100",
      textColor: "text-pink-600"
    },
    {
      title: "Eye Care",
      description: "Specialized ophthalmology services for vision health and eye disease prevention.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "bg-purple-100",
      textColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink-600 font-semibold uppercase tracking-wider text-sm">Our Specialties</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 playfair-font">Comprehensive Care Services</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-3 mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Woman's health undergoes many changes throughout life. Our experienced team provides specialized care 
            tailored to your unique needs at every stage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className={`w-14 h-14 ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className={service.textColor}>{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-pink-500 hover:text-pink-600 font-medium text-sm flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        .playfair-font {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default CareServices;