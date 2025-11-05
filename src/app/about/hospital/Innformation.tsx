"use client"
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

  const itemVariants: Variants = {
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
    "Treatment and admission facilities for all general medical diseases.",
    "Cardiac consultations",
    "Caesarean deliveries",
    "Kidney and gallbladder surgery facilities",
    "Intestinal, thyroid, gall bladder, and appendix surgeries",
    "Hydrocoele and hernia repair surgeries",
    "Open and laparoscopic surgeries",
    "Hysteroscopic surgeries",
    "Vaginal surgeries",
    'Pathology', 'Ultrasound'
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
                Hospital established in 1998 by Dr. Rajesh Gupta and Dr. Amita Gupta with a vision to serve in the health sector.
                Our services include Gynecology, Ophthalmology, Cardiology, DNB, and General Surgeries, ensuring comprehensive care for patients.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We specialize in Gynecological surgeries, Ophthalmic surgeries, Cardiology OPD, and various other medical services
                to provide complete healthcare solutions to our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-pink-600">25+</div>
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
                    src="https://lh3.googleusercontent.com/p/AF1QipMi-JQrzu1aHc_qy9OsDJO5FL3HwkSgnvqlWJBb=s1360-w1360-h1020-rw"
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
                With over 30+ years of experience, Dr. Rajesh Gupta specializes in Eye care treatments
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
         <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <p className="text-gray-600 text-lg mb-8">
                Get in touch with us for appointments, inquiries, or any questions 
                about our services. We're here to help you with all your healthcare needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">8/265, Sector 8, Jankipuram Extension<br /> Lucknow, Uttar Pradesh 226031</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+917499931560</p>
                  </div>
                </div>

              

             
              </div>

              <div className="mt-8">
                <a 
                  href="tel:+917499931560" 
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Hospital</h3>
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                <div className=" text-gray-500">
                      <iframe
                    src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4779.653565776115!2d80.9350303764796!3d26.936752276632824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d4c651d269%3A0x30e558a353e1b9ff!2sMatra%20Drishti%20Medicare!5e1!3m2!1sen!2sin!4v1757672034097!5m2!1sen!2sin'}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Map Integration</p>
                  <p className="text-sm mt-2">Replace with your actual map embed</p> */}
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="https://share.google/0NgLwUbALrLXQ5J8E" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair-font">Experience Quality Healthcare</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit Matra Drishti Medicare Hospital for comprehensive medical care from experienced specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={'/appointement'}>

              <motion.button
                className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book an Appointment
              </motion.button>
            </Link>
            <Link href={'/contact'}>

              <motion.button
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
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