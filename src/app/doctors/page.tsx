"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const DoctorsPage = () => {
  // Doctor data
  const doctors = [
    {
      id: 1,
      name: "Amita Gupta",
      specialty: "Gynecologist & Pregnancy Specialist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      qualifications: [
        "MBBS from B.J. Medical College, Pune University",
        "MS (Obstetrics and Gynecology) from King Edward Memorial Hospital, Mumbai",
        "Fellowship in Reproductive Medicine"
      ],
      socialLinks: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      },
      education: [
        { year: "2010-2014", degree: "MBBS", institution: "B.J. Medical College, Pune University" },
        { year: "2014-2017", degree: "MS (Obstetrics and Gynecology)", institution: "King Edward Memorial Hospital, Mumbai" },
        { year: "2017-2018", degree: "Fellowship in Reproductive Medicine", institution: "National Institute of Health" }
      ],
      experience: [
        { year: "2018-2019", position: "Resident Doctor", hospital: "Surya Mother and Child Care" },
        { year: "2019-2021", position: "Senior Gynecologist", hospital: "Deenanath Mangeshkar Hospital" },
        { year: "2021-Present", position: "Lead Consultant & Founder", hospital: "Matra Drishti Medicare" }
      ],
      contact: {
        phone: "+91 8007442266",
        email: "dr.varshali@matradrishtimedicare.com",
        address: "Jankipuram Lucknow"
      }
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Senior Gynecologist & IVF Specialist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
      qualifications: [
        "MBBS from All India Institute of Medical Sciences, Delhi",
        "MD (Gynecology) from Post Graduate Institute of Medical Education and Research, Chandigarh",
        "Fellowship in IVF and Reproductive Medicine"
      ],
      socialLinks: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      },
      education: [
        { year: "2008-2013", degree: "MBBS", institution: "AIIMS, Delhi" },
        { year: "2013-2016", degree: "MD (Gynecology)", institution: "PGIMER, Chandigarh" },
        { year: "2016-2017", degree: "Fellowship in IVF", institution: "International Fertility Centre" }
      ],
      experience: [
        { year: "2017-2019", position: "Consultant Gynecologist", hospital: "Apollo Hospitals, Delhi" },
        { year: "2019-2021", position: "IVF Specialist", hospital: "Fortis Hospital, Mumbai" },
        { year: "2021-Present", position: "Senior Consultant", hospital: "Matra Drishti Medicare" }
      ],
      contact: {
        phone: "+91 9007443366",
        email: "dr.rajesh@matradrishtimedicare.com",
        address: "123 Medical Plaza, Health District, Pune, Maharashtra 411001"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 playfair-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Expert Doctors
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Meet our team of experienced healthcare professionals dedicated to providing exceptional care.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>
      </section>

      {/* Doctors Profiles */}
      {doctors.map((doctor, index) => (
        <section key={doctor.id} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Doctor Profile Section */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
              {/* Left Side - Doctor Info */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 playfair-font">{doctor.name}</h2>
                <p className="text-xl text-pink-600 mb-6">{doctor.specialty}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Qualifications</h3>
                  <ul className="space-y-2">
                    {doctor.qualifications.map((qualification, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 01118 0z" />
                        </svg>
                        <span className="text-gray-700">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Social Links */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Connect with Dr. {doctor.name.split(' ')[1]}</h3>
                  <div className="flex space-x-4">
                    {Object.entries(doctor.socialLinks).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <motion.button 
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book Appointment
                </motion.button>
              </motion.div>
              
              {/* Right Side - Doctor Image */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <div className="h-96 w-full relative">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-full opacity-20"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
                </div>
              </motion.div>
            </div>
            
            {/* Education & Experience Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-8 playfair-font flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  Education
                </h3>
                
                <div className="space-y-6">
                  {doctor.education.map((edu, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-pink-100 text-pink-600 font-semibold py-1 px-3 rounded-full text-[0.50rem] text-nowrap md:text-sm mr-4">
                          {edu.year}
                        </div>
                        <div>
                          <h4 className="text-sm md:text-lg  font-semibold text-gray-800">{edu.degree}</h4>
                          <p className="text-gray-600 mt-1 text-sm md:text-lg">{edu.institution}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-8 playfair-font flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Experience
                </h3>
                
                <div className="space-y-6">
                  {doctor.experience.map((exp, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-600 font-semibold py-1 px-2 md:px-3 rounded-full text-[0.50rem] text-nowrap md:text-sm mr-4">
                          {exp.year}
                        </div>
                        <div>
                          <h4 className="text-sm md:text-lg font-semibold text-gray-800">{exp.position}</h4>
                          <p className="text-gray-600 mt-1 text-sm md:text-lg">{exp.hospital}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Contact Section */}
            <motion.div 
              className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-6 playfair-font">Contact Dr. {doctor.name.split(' ')[1]}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${doctor.contact.phone}`} className="hover:underline">{doctor.contact.phone}</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${doctor.contact.email}`} className="hover:underline">{doctor.contact.email}</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>{doctor.contact.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <motion.button 
                  className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        .playfair-font {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
};

export default DoctorsPage;