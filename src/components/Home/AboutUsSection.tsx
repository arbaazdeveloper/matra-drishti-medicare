import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  // Animation variants
  const containerVariants: Variants = {
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

  // Features data
  const features = [
    {
      title: "Patient-Centered Care",
      description: "We prioritize your comfort and well-being with personalized treatment plans.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment for accurate diagnostics and effective treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Expert Team",
      description: "Highly qualified medical professionals with years of experience in women's health.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink-600 font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 playfair-font">Comprehensive Women's Healthcare</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              {/* Replace with actual hospital image */}
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center rounded-2xl">
                <Image alt='hospital' className='w-full h-full' width={100} height={100} src={'https://lh3.googleusercontent.com/p/AF1QipMi-JQrzu1aHc_qy9OsDJO5FL3HwkSgnvqlWJBb=s1360-w1360-h1020-rw'} />
                {/* <div className="text-center text-white p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Modern Healthcare Facility</h3>
                  <p className="opacity-90">State-of-the-art equipment and comfortable environment</p>
                </div> */}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Welcome to Our Hospital
            </motion.h3>
            <motion.p
              className="text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
           Matra Drishti Medicare, Lucknow was established in 1998 with a vision to provide advanced healthcare with compassion and care. With a bed capacity of 45 and a dedicated team of 15 skilled staff members, the hospital is committed to delivering quality treatment across multiple specialties.
            </motion.p>
            <motion.p
              className="text-gray-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
 Our services include Gynecology, Ophthalmology, Cardiology, DNB, and General Surgeries, ensuring comprehensive care for patients. We specialize in Gynecological surgeries, Ophthalmic surgeries, Cardiology OPD, and a wide range of General Surgeries, supported by modern facilities and expert doctors. At Matra Drishti Medicare, we strive to combine advanced medical technology with patient-centric care, making us a trusted healthcare destination in Lucknow.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Eye examination with advanced machines.</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Infertility diagnosis and treatment.</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Uterus cancer screening and vaccination through Colposcopy.</span>
              </div>
            </motion.div>
            <Link href={'/care'}>

              <motion.button
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Our Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className={feature.color}>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">30+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
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

export default AboutSection;