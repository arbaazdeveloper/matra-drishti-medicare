"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const DoctorProfilePage = () => {
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

    const itemVariants = {
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

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pt-20">
            {/* Hero Section */}
            <section className="relative py-12 md:py-24 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-purple-600/80 z-0"></div>
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 playfair-font">Dr. Amita Gupta</h1>
                            <p className="text-xl md:text-2xl mb-6">Best Gynecologist in Lucknow</p>
                            <div className="flex items-center mb-6">
                                <div className="flex mr-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-white/90">4.9 (258 reviews)</span>
                            </div>
                            <motion.button
                                className="bg-white text-pink-600 hover:bg-gray-100  font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mr-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book an Appointment
                            </motion.button>
                            <motion.a
                            href='tel:+917499931560'
                                className="bg-transparent border-2 border-white text-white  hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Doctor
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                    <Image
                                        src="https://res.cloudinary.com/dxknbk2hd/image/upload/v1757836599/matra-drishti-medicare/dr.amit_r5zjci.jpg"
                                        alt="Dr. Amita Gupta"
                                        width={320}
                                        height={320}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm p-2 shadow-lg">
                                    15+ Years Experience
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 playfair-font">About Dr. Amita Gupta</h2>
                            <div className="w-24 h-1 bg-pink-500 mb-6"></div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Dr. Amita Gupta is one of the most trusted and renowned gynecologists in Lucknow, with years of dedicated experience in women’s healthcare. She specializes in managing complex gynecological conditions, high-risk pregnancies, and advanced laparoscopic surgeries. With her compassionate approach and deep medical expertise, Dr. Amita has helped countless women navigate different stages of their health journey with confidence and care.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Known for her patient-first philosophy, Dr. Amita Gupta believes in providing personalized treatment plans tailored to each patient’s unique needs. She combines modern medical practices with a warm, approachable demeanor, making her patients feel comfortable and supported. Whether it is preventive care, fertility concerns, or surgical procedures, Dr. Amita ensures the highest quality of treatment, making her one of the best gynecologists in Lucknow.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                    <div className="text-2xl font-bold text-pink-600">5000+</div>
                                    <div className="text-gray-600">Patients Treated</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                    <div className="text-2xl font-bold text-purple-600">98%</div>
                                    <div className="text-gray-600">Success Rate</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl p-8 text-white"
                        >
                            <h3 className="text-2xl font-bold mb-6 playfair-font">Specializations</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    High-Risk Pregnancy Management
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Minimally Invasive Gynecological Surgery
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Fertility Treatments
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Menopause Management
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    PCOS Treatment
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Dr. Amita Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 playfair-font">Why Choose Dr. Amita Gupta?</h2>
                        <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            Dr. Amita stands out as one of Lucknow's leading gynecologists for several compelling reasons
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Expertise & Experience",
                                description: "With over 15 years of specialized practice, Dr. Amita has managed thousands of cases with exceptional outcomes.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Compassionate Care",
                                description: "Known for her empathetic approach, Dr. Amita ensures every patient feels heard, understood, and cared for.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Advanced Technology",
                                description: "Utilizes state-of-the-art medical equipment and follows the latest treatment protocols for best results.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Personalized Approach",
                                description: "Tailors treatment plans to individual needs, considering each patient's unique circumstances and preferences.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Comprehensive Services",
                                description: "Offers a wide range of gynecological and obstetric services under one roof for convenience and continuity of care.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                )
                            },
                            {
                                title: "Positive Outcomes",
                                description: "Consistently achieves high success rates and patient satisfaction through meticulous care and expertise.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                )
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl shadow-md text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-pink-500 mb-4 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education & Experience Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 playfair-font">Education & Qualifications</h2>
                            <div className="w-24 h-1 bg-pink-500 mb-6"></div>

                            <div className="space-y-6">
                                {[
                                    {
                                        degree: "MBBS",
                                        institution: "King George's Medical College (K.G.M.C), Lucknow",
                                        year: "NA"
                                    },
                                    {
                                        degree: "Diploma in Urogynaecology",
                                        institution: "Germany",
                                        year: "NA"
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.degree}</h3>
                                        <p className="text-gray-700 mb-2">{item.institution}</p>
                                        <span className="text-pink-500 font-medium">{item.year}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 playfair-font">Professional Experience</h2>
                            <div className="w-24 h-1 bg-pink-500 mb-6"></div>

                            <div className="space-y-6">
                                {[
                                    {
                                        position: "Senior Consultant Gynecologist & Pregnancy Specialist",
                                        hospital: "Matra Dristi Medicare, Lucknow",
                                        duration: "2011 - Present"
                                    },
                                    {
                                        position: "Senior Consultant – Women’s Health",
                                        hospital: "Fatima Hospital, Lucknow",
                                        duration: "NA"
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.position}</h3>
                                        <p className="text-gray-700 mb-2">{item.hospital}</p>
                                        <span className="text-purple-500 font-medium">{item.duration}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Patient Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 playfair-font">Patient Testimonials</h2>
                        <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            Hear what Dr. Amita's patients have to say about their experience
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Priya Sharma",
                                review: "Dr. Amita is simply the best gynecologist in Lucknow. She guided me through my high-risk pregnancy with expertise and compassion. I couldn't have asked for a better doctor.",
                                rating: 5
                            },
                            {
                                name: "Anjali Singh",
                                review: "I've been visiting Dr. Amita for years. She takes the time to listen and explains everything clearly. Her surgical skills are exceptional - my laparoscopic procedure was smooth with quick recovery.",
                                rating: 5
                            },
                            {
                                name: "Ritu Verma",
                                review: "Dr. Amita's approach to PCOS treatment changed my life. After years of struggling, her personalized plan helped me manage my symptoms effectively. She's truly a caring and knowledgeable doctor.",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                                <p className="text-gray-800 font-semibold">- {testimonial.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair-font">Schedule Your Appointment Today</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Experience the exceptional care that has made Dr. Amita one of Lucknow's most trusted gynecologists
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href={'/appointment'}
                       
                        >
                        
                        <motion.button
                            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book an Appointment
                        </motion.button>
                        </Link>
                        <Link href={'/contact'}
                      
                        >
                        
                        <motion.button
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Clinic
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

export default DoctorProfilePage;