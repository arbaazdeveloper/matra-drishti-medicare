import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const DoctorsIntroduction = () => {
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

  // Doctors data
  const doctors = [
    {
      name: "DR. AMITA GUPTA",
      title: "Gynecologist & Infertility Specialist",
      description: "Dr. Amita Gupta, MBBS, DGO (K.G.M.C) FRM, and Diploma in Urogynecology (Germany), is a highly experienced gynecologist specializing in infertility management, hysteroscopy, and laparoscopic procedures. With over 27 years of expertise, she has successfully treated numerous complex cases and provided compassionate care to women at every stage of life. She has also served as a Senior Consultant for Women's Health at Fatima Hospital, Lucknow, where she earned a reputation for excellence in maternal and reproductive healthcare.",
      image: "https://res.cloudinary.com/dxknbk2hd/image/upload/v1757836599/matra-drishti-medicare/dr.amit_r5zjci.jpg", // Replace with actual image path
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
      image: "https://res.cloudinary.com/dxknbk2hd/image/upload/v1757836599/matra-drishti-medicare/dr.rajes_k3hyaa.jpg", // Replace with actual image path
      specialties: ["Cataract Surgery", "Refractive Surgery", "Advanced Ophthalmic Procedures", "Comprehensive Eye Care"],
      experience: "30+ Years",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      profile: '/doctors/dr-rajesh-gupta'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 playfair-font">Meet Our Expert Doctors</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto">
            Our team of experienced gynecologists is dedicated to providing exceptional care for women at every stage of life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg border ${doctor.borderColor} ${doctor.color}`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-white p-1 shadow-md border-2 border-white mb-4 md:mb-0 md:mr-6">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-purple-900">{doctor.name}</h3>
                    <p className={`font-semibold ${doctor.textColor} mb-2`}>{doctor.title}</p>
                    <div className="flex items-center justify-center md:justify-start text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{doctor.experience} of Experience</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{doctor.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-purple-800 mb-3">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm ${index === 0 ? 'bg-pink-100 text-pink-700' : 'bg-purple-100 text-purple-700'}`}>
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={'/appointment'}>

                    <motion.button
                      className={`flex-1 ${index === 0 ? 'bg-pink-500 hover:bg-pink-600' : 'bg-purple-500 hover:bg-purple-600'} text-white font-medium py-3 px-6 rounded-lg transition-colors`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book an Appointment
                    </motion.button>
                  </Link>
                  <Link href={doctor.profile}>

                    <motion.button
                      className="flex-1 border-2 border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 font-medium py-3 px-6 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Full Profile
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-purple-700 mb-6">
            Interested in meeting with our specialists? Schedule a consultation today.
          </p>

          <Link href={'/doctors'}>

            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Meet Our Entire Team
            </motion.button>
          </Link>
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

export default DoctorsIntroduction;