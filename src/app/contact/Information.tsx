"use client"
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('hospital');

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

  // Location data
  const locations = {
    hospital: {
      name: "Matra Drishti Medicare Hospital",
      type: "Hospital",
      address: "8/265, Sector 8, Jankipuram Extension, Lucknow, Uttar Pradesh 226031",
      phone: "+9174999 31560",
      email: "matradristimedicare@rediffmail.com",
      hours: "24/7 Emergency Services",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4779.653565776115!2d80.9350303764796!3d26.936752276632824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d4c651d269%3A0x30e558a353e1b9ff!2sMatra%20Drishti%20Medicare!5e1!3m2!1sen!2sin!4v1757672034097!5m2!1sen!2sin",
      features: [
        "24/7 Emergency Care",
        "Advanced Operation Theaters",
        "Maternity Ward",
        "ICU Facilities",
        "Pharmacy",
        "Ambulance Services"
      ]
    },
    clinic: {
      name: "Matra Dristi Medicare Clinic",
      type: "Clinic",
      address: "Shop no 14 -15, Ramanand Market, Sitapur Rd, adjacent Ahibaranpur power house, Sector CS, Triveni Nagar, Lucknow, Uttar Pradesh 226021",
      phone: "+9174999 31560",
      email: "matradristimedicare@rediffmail.com",
      hours: "Monday to Sunday: 4:00 PM to 8:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4781.759636551906!2d80.93142827647827!3d26.88702547666254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999570c9dba58bd%3A0xe5a5e172366e29ce!2sMatra%20Drishti%20Medicare!5e1!3m2!1sen!2sin!4v1757672097593!5m2!1sen!2sin",
      features: [
        "Gynecology Consultations",
        "Pregnancy Care",
        "Ultrasound Services",
        "Well-Woman Exams",
        "Fertility Counseling",
        "Minimally Invasive Procedures"
      ]
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: ["+9174999 31560"],
      description: "Speak directly with our staff"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: ["matradristimedicare@rediffmail.com"],
      description: "Send us an email anytime"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: ["8/265, Sector 8, Jankipuram Extension, Lucknow, Uttar Pradesh 226031"],
      description: "Find our locations on map"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Opening Hours",
      details: ["Hospital: 24/7", "Clinic: 1AM - 1:30PM"],
      description: "We're here when you need us"
    }
  ];

  const currentLocation = locations[activeTab as keyof typeof locations];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 playfair-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Get in touch with us for appointments, inquiries, or emergency services. We're here to help you.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-pink-500 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{method.title}</h3>
                <div className="space-y-1 mb-3">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-700">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Location Tabs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('hospital')}
                className={`flex-1 py-4 px-6 text-center font-semibold ${activeTab === 'hospital' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Hospital Location
              </button>
              <button
                onClick={() => setActiveTab('clinic')}
                className={`flex-1 py-4 px-6 text-center font-semibold ${activeTab === 'clinic' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Clinic Location
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Location Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentLocation.name}</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-700">{currentLocation.address}</p>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${currentLocation.phone}`} className="text-gray-700 hover:text-pink-600">{currentLocation.phone}</a>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${currentLocation.email}`} className="text-gray-700 hover:text-pink-600">{currentLocation.email}</a>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-700">{currentLocation.hours}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Facilities & Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentLocation.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.a 
                  href='tel:+917499931560'
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call for Appointment
                  </motion.a>
                </motion.div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden shadow-lg h-96"
                >
                  <iframe
                    src={currentLocation.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <motion.div 
            className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4">Emergency Medical Care</h2>
            <p className="text-xl mb-6">For urgent medical issues, please come directly to our hospital emergency department</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="tel:+917499931560"
                className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg text-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Emergency Helpline: +9174999 31560
              </motion.a>
              <p className="text-white/90">Available 24/7</p>
            </div>
          </motion.div>
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

export default ContactPage;