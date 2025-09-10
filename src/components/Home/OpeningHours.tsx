import { motion, Variants } from 'framer-motion';

const OpeningHours = () => {
  // Animation variants
  const containerVariants :Variants= {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants :Variants= {
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

  // Hospital hours data
  const hospitalHours = [
    { day: 'Monday', time: '9:00 AM to 5:00 PM', icon: '🏥' },
    { day: 'Tuesday', time: '9:00 AM to 5:00 PM', icon: '🏥' },
    { day: 'Wednesday', time: '9:00 AM to 5:00 PM', icon: '🏥' },
    { day: 'Thursday', time: '9:00 AM to 5:00 PM', icon: '🏥' },
    { day: 'Friday', time: '9:00 AM to 5:00 PM', icon: '🏥' },
    { day: 'Saturday', time: '10:00 AM to 2:00 PM', icon: '🏥' },
    { day: 'Sunday', time: 'Emergency Only', icon: '🏥' }
  ];

  // Clinic hours data
  const clinicHours = [
    { day: 'Monday', time: '4:00 PM to 8:30 PM', icon: '👩‍⚕️' },
    { day: 'Tuesday', time: '4:00 PM to 8:30 PM', icon: '👩‍⚕️' },
    { day: 'Wednesday', time: '4:00 PM to 8:30 PM', icon: '👩‍⚕️' },
    { day: 'Thursday', time: '4:00 PM to 8:30 PM', icon: '👩‍⚕️' },
    { day: 'Friday', time: '4:00 PM to 8:30 PM', icon: '👩‍⚕️' },
    { day: 'Saturday', time: '4:00 PM to 8:30 PM', icon: '👩‍⚕️' },
    { day: 'Sunday', time: '4:00 PM to 8:30 PM', icon: '👩‍⚕️' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Opening Hours</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These are the timings for Matra Drishti Medicare  Clinic and Hospital. 
            Matra Drishti Medicare is also available at other locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Hospital Hours */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-blue-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Hospital Hours
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {hospitalHours.map((day, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    variants={itemVariants}
                  >
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-3">{day.icon}</span>
                      <span className="font-medium text-gray-700">{day.day}</span>
                    </div>
                    <span className={`font-semibold ${day.time === 'Emergency Only' ? 'text-red-500' : 'text-gray-800'}`}>
                      {day.time}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Emergency services available 24/7 at hospital location
                </p>
              </div>
            </div>
          </motion.div>

          {/* Clinic Hours */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-purple-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Clinic Hours
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {clinicHours.map((day, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    variants={itemVariants}
                  >
                    <div className="flex items-center">
                      <span className="text-purple-500 mr-3">{day.icon}</span>
                      <span className="font-medium text-gray-700">{day.day}</span>
                    </div>
                    <span className="font-semibold text-gray-800">{day.time}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-700">
                  To know about other location timings, please refer to the book appointment page or contact us directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
{/* 
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            For appointments at other locations or emergency services, please contact us
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book an Appointment
            </motion.button>
            <motion.button 
              className="bg-white border-2 border-teal-500 text-teal-500 hover:bg-teal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default OpeningHours;