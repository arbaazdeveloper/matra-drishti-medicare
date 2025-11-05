"use client"
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const DoctorsListPage = () => {
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

  // Doctors data
  const doctors = [
    {
      name: "DR. AMITA GUPTA",
      title: "Gynecologist & Infertility Specialist",
      description: "Dr. Amita Gupta, MBBS, DGO (K.G.M.C), and Diploma in Urogynecology (Germany), is a highly experienced gynecologist specializing in infertility management, hysteroscopy, and laparoscopic procedures. With over 27 years of expertise, she has successfully treated numerous complex cases and provided compassionate care to women at every stage of life. She has also served as a Senior Consultant for Women's Health at Fatima Hospital, Lucknow, where she earned a reputation for excellence in maternal and reproductive healthcare.",
      image: "https://res.cloudinary.com/dxknbk2hd/image/upload/v1757836599/matra-drishti-medicare/dr.amit_r5zjci.jpg",
      specialties: ["Infertility Treatment", "Hysteroscopy", "Laparoscopic Gynecology", "Women's Health"],
      experience: "27+ Years",
      color: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-600",
      profile: '/doctors/dr-amita-gupta'
    },
    {
      name: "DR. Rajesh Gupta",
      title: "Senior Eye Surgeon",
      description: "Dr. Rajesh Gupta, MBBS, DOMS, FCLI, is a highly experienced ophthalmologist and the founder of Matra Drishti Medicare. With over 30 years of dedicated service, he has successfully performed more than 10,000 eye surgeries. Having previously served as an Eye Surgeon at Sitapur Eye Hospital and as a Fellow at S.N.C Chitrakoot, Dr. Gupta brings unparalleled expertise in cataract, refractive, and other advanced ophthalmic procedures. He is committed to providing world-class eye care with precision and compassion.",
      image: "https://res.cloudinary.com/dxknbk2hd/image/upload/v1757836599/matra-drishti-medicare/dr.rajes_k3hyaa.jpg",
      specialties: ["Cataract Surgery", "Refractive Surgery", "Advanced Ophthalmic Procedures", "Comprehensive Eye Care"],
      experience: "30+ Years",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      profile: '/doctors/dr-rajesh-gupta'
    },
    {
      name: "Dr. Bhadauria",
      title: "Senior Cardiologist",
      description:
        "Dr. Bhadauria, MBBS, DIPCARD, is a highly distinguished cardiologist with over 30 years of dedicated medical service. He has previously served as a Senior Cardiologist at Balrampur Hospital, where he earned immense respect for his expertise in managing complex cardiac cases. His compassionate approach, combined with decades of experience, makes him one of the most trusted names in heart care.",
      image: "https://res.cloudinary.com/dxknbk2hd/image/upload/v1762327384/matra-drishti-medicare/icon-7797704_640_cwnxku.png",
      specialties: ["Cardiology", "Heart Disease Management", "Hypertension", "Preventive Cardiology"],
      experience: "30+ Years",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      profile: "/doctors/dr-bhadauria"
    }

  ];

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
            Our Medical Team
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

      {/* Filters/Search Bar */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-medium">All Specialties</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Gynecology</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Pregnancy Care</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">IVF</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Surgery</button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.name}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {doctor.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-pink-600 font-medium mb-4">{doctor.title}</p>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{doctor.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, index) => (
                        <span key={index} className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <motion.button
                      className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Appointment
                    </motion.button>
                    <Link href={doctor.profile}>

                      <motion.button
                        className="border w-full border-pink-500 text-pink-600 hover:bg-pink-50 font-medium py-2.5 px-4 rounded-lg transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Profile
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair-font">Can't Find the Right Doctor?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team is here to help you find the right specialist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={'/contact'}>

              <motion.button
                className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Helpdesk
              </motion.button>
            </Link>

            <motion.a
              href='tel:7499931560'
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Callback
            </motion.a>
          </div>
        </div>
      </section>

      <style jsx global>{`
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        .playfair-font {
          font-family: 'Playfair Display', serif;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default DoctorsListPage;