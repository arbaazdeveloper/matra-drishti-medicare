"use client"
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const HospitalAboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants :Variants = {
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

  // Services data
  const services = [
    "Eye examination with advanced machines.",
    "Treatment and surgery for all types of eye diseases.",
    "Treatment and surgery for squint (crossed eyes), pterygium, and eyelid disorders.",
    "Cataract check-up, treatment, and surgery.",
    "Stitchless cataract surgery (Phaco, SICS methods).",
    "Normal delivery and cesarean delivery.",
    "Safe abortion, related counseling, and assistance.",
    "Infertility diagnosis and treatment.",
    "All types of laparoscopic surgeries available (uterus, gallbladder, intestines, etc.).",
    "Uterus cancer screening and vaccination through Colposcopy.",
    "Stitchless and scarless uterus surgery (NDVH).",
    "Treatment and surgery facilities for all gynecological and obstetric diseases.",
    "Kidney and gallbladder surgery facilities.",
    "Vaccination for children and adults.",
    "Admission facility, pathology, and pharmacy.",
    "Phototherapy treatment.",
    "Treatment and admission facilities for all general medical diseases."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 playfair-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Matra Drishti Medicare Hospital
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hospital in Jankipuram Extension Lucknow
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>
      </section>

      {/* Hospital Image & Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 playfair-font">Our Story</h2>
              <div className="w-24 h-1 bg-pink-500 mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hospital established in 2011 by Dr. Rajesh Gupta and Dr. Amita Gupta with a vision to serve in the health sector. 
                Our services include Gynecology, Ophthalmology, Cardiology, DNB, and General Surgeries, ensuring comprehensive care for patients.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We specialize in Gynecological surgeries, Ophthalmic surgeries, Cardiology OPD, and various other medical services 
                to provide complete healthcare solutions to our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-pink-600">12+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">5000+</div>
                  <div className="text-gray-600">Patients Treated</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-teal-600">100+</div>
                  <div className="text-gray-600">Surgeries Monthly</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="h-80 w-full relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80"
                    alt="Matra Drishti Medicare Hospital"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 playfair-font">Our Founders</h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Meet the visionary doctors who established Matra Drishti Medicare Hospital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-400 p-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Rajesh Gupta</h3>
              <p className="text-pink-600 mb-4">Opthalmologist , Eye Surgeon</p>
              <p className="text-gray-700">
                With over 18 years of experience, Dr. Rajesh Gupta specializes in Eye care treatments 
                and Surgeries .
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-400 p-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Amita Gupta</h3>
              <p className="text-pink-600 mb-4">Gynecologist & Pregnancy Specialist</p>
              <p className="text-gray-700">
                Dr. Amita Gupta is an experienced Obstetrician and Gynecologist with years in women's healthcare, 
                specializing in obstetrics, gynecology, and gynecological endoscopy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 playfair-font">Our Services</h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Comprehensive healthcare services provided with expertise and compassion
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-start"
                variants={itemVariants}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair-font">Experience Quality Healthcare</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit Matra Drishti Medicare Hospital for comprehensive medical care from experienced specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book an Appointment
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>

      <style jsx global>{`
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        .playfair-font {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
};

export default HospitalAboutPage;