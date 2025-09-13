import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const phoneNumber = "+917499931560"; // Replace with your actual number
  const message = "I Want to book an Appoint DR.Amita Gupta";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;



  const handleClick = () => {
    window.open(whatsappURL, '_blank');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
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

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col overflow-hidden">
      {/* Hero Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center py-6">
          {/* Left Content */}
          <motion.div
            className="text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-purple-900 mb-6 playfair-font leading-tight"
              variants={itemVariants}
            >
              Your Health, Our Priority – Hospital & Clinic Care in Lucknow
            </motion.h1>

            <motion.h2
              className="text-xl text-purple-700 mb-8 max-w-md mx-auto md:mx-0"
              variants={itemVariants}
            >
              Matra Drishti Medicare provides trusted healthcare, advanced treatments, and patient-first medical services in Lucknow
            </motion.h2>

              <span className='text-xl playfair-font text-purple-800'>By</span>
            <div className='flex justify-between'>
              <div>
                <motion.div
                  className="mb-10"
                  variants={itemVariants}
                >
                  <h2 className="text-xl font-semibold text-purple-800 mb-2">Dr. Amita Gupta</h2>
                  <p className="text-xs text-pink-600 ">MBBS,DGO (K.G.M.C),Diploma in Urogynaecology (Germany) Specialist in infertilty/Hysteroscopy & Laproscopy</p>
                </motion.div>
              </div>
              {/* <span className='text-xl playfair-font text-purple-800'>&</span> */}
              <div>

                <motion.div
                  className="mb-10"
                  variants={itemVariants}
                >
                  <h2 className="text-xl font-semibold text-purple-800 mb-2">Dr. Rajesh Gupta</h2>
                  <p className="text-xs text-pink-600 ">MBBS , DOMS,FCLI,Ex Eye surgeon (Sitapur Eye Hospital) , Fellow S.N.C Chitrakoot (Senior Eye surgeon)</p>
                </motion.div>
              </div>

            </div>
             <div className='flex justify-center md:flex-start  items-center gap-1'>
              <motion.button 
                className="bg-pink-500 hover:bg-pink-600 text-white text-xs md:text-sm font-semibold py-2 px-4 md:py-4 md:px-8  rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                >
                Book an Appointment
              </motion.button>
              {/* <motion.button 
                className="border-2 border-pink-500 text-pink-600 w-full hover:bg-pink-50 font-semibold text-xs md:text-sm  text-sm py-2 px-4 md:py-4 md:px-8  rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
          
              >
                View Doctor Profile
              </motion.button> */}
              </div>
            {/* <div className='flex gap-1'>

            <div>

           
            <motion.div 
              className="mb-10"
              variants={itemVariants}
              >
              <h2 className="text-xl font-semibold text-purple-800 mb-2">Dr. Amita Gupta</h2>
              <p className="text-sm text-pink-600">Gynecologist & Pregnancy Specialist</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
              >
                <div className='flex flex-col justify-center items-center gap-1'>
              <motion.button 
                className="bg-pink-500 hover:bg-pink-600 text-white text-xs md:text-sm font-semibold py-2 px-4 md:py-4 md:px-8  rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                >
                Book an Appointment
              </motion.button>
              <motion.button 
                className="border-2 border-pink-500 text-pink-600 w-full hover:bg-pink-50 font-semibold text-xs md:text-sm  text-sm py-2 px-4 md:py-4 md:px-8  rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
          
              >
                View Doctor Profile
              </motion.button>
              </div>
            </motion.div>
             </div>
               <div>

           
            <motion.div 
              className="mb-10"
              variants={itemVariants}
              >
              <h2 className="text-xl font-semibold text-purple-800 mb-2">Dr. Amita Gupta</h2>
              <p className="text-sm text-pink-600">Gynecologist & Pregnancy Specialist</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
              >
                <div className='flex flex-col justify-center items-center gap-1'>

             <motion.button 
                className="bg-pink-500 hover:bg-pink-600 text-white text-xs md:text-sm font-semibold py-2 px-4 md:py-4 md:px-8  rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                >
                Book an Appointment
              </motion.button>
              <motion.button 
                className="border-2 border-pink-500 text-pink-600 w-full hover:bg-pink-50 font-semibold text-xs md:text-sm  text-sm py-2 px-4 md:py-4 md:px-8  rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
          
              >
                View Doctor Profile
              </motion.button>
                </div>
            </motion.div>
             </div>
            </div> */}
          </motion.div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            <div className="relative h-80 md:h-96 lg:h-[500px] w-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl shadow-2xl transform rotate-3"
                animate={{ rotate: 3 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl shadow-xl -rotate-2"
                animate={{ rotate: -2 }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center p-8 shadow-lg">
                <div className="text-center">
                  <motion.div
                    className="mb-6"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-md md:text-2xl font-bold text-purple-900 mb-4">Comprehensive Women's Healthcare</h3>
                  <p className="text-purple-700 mb-6 text-sm md:text-md">Expert care for every stage of a woman's life journey</p>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="bg-pink-50 p-1 md:p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-xs md:text-sm mt-1">Pregnancy Care</p>
                    </motion.div>
                    <motion.div
                      className="bg-purple-50 p-2 md:p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-xs md:text-sm mt-1">Eye Care</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Info */}
      <motion.div
        className="bg-white py-6 border-t border-purple-100"
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center visible md:hidden">
          <div className="flex items-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-purple-700">helpdesk@matradristi.com</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-purple-700">7499931560</span>
          </div>
          <motion.button
            className="text-pink-500 hover:text-pink-600 font-medium flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            Ask a Question
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        .playfair-font {
          font-family: 'Playfair Display', serif;
        }
        body {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Banner;