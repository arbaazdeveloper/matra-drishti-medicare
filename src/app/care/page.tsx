"use client"
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from "next/navigation";
import Image from 'next/image';

const CarePage = () => {
  const [activeTab, setActiveTab] = useState('gynecology');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
    const searchParams = useSearchParams();

    const search = searchParams.get("service");

    useEffect(()=>{
     
      if(search && search==='Eye Care'){
        setActiveTab('eyeCare')
      }
    },[])


  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Tab data with icons
  const tabs = [
    { 
      id: 'gynecology', 
      label: 'Gynecology',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      id: 'pregnancy', 
      label: 'Pregnancy Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    { 
      id: 'eyeCare', 
      label: 'Eye Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  // Gynecology services data
  const gynecologyServices = [
    {
      id: 'nutritional',
      title: 'Nutritional Problems & Routine Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>We provide comprehensive care for nutritional issues affecting women's health, along with routine gynecological checkups to maintain overall wellness.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Routine gynecological checkups</li>
            <li>Urinary disorders treatment</li>
            <li>Polycystic ovary Problems (PCOD) management</li>
            <li>Breast tissue health assessments</li>
          </ul>
        </div>
      )
    },
    {
      id: 'bartholins',
      title: 'Bartholins Cyst / Abscess',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>Bartholins cysts are usually presented as painless vaginal cysts on either side of the vulva. Cysts can get sporadically infected and result in discomfort.</p>
          <p>Sometimes they don't need treatment; only observation will suffice. At times, these need to be treated with medications or surgery, depending upon presentations. All services for treating Bartholins cysts are provided.</p>
        </div>
      )
    },
    {
      id: 'management',
      title: 'Management Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>Our comprehensive management care covers a wide range of gynecological conditions and procedures:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Puberty problems</li>
            <li>Vaginitis (white discharge) treatment</li>
            <li>Ovarian cysts management</li>
            <li>Fibroids treatment</li>
            <li>Hysterectomy (Uterus Removal)</li>
            <li>Intrauterine Procedures</li>
          </ul>
        </div>
      )
    }
  ];

  // Pregnancy services data
  const pregnancyServices = [
    {
      id: 'prenatal',
      title: 'Prenatal Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>Comprehensive prenatal care to ensure the health of both mother and baby throughout pregnancy.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Regular pregnancy check-ups and monitoring</li>
            <li>Ultrasound scans and fetal development tracking</li>
            <li>Nutritional guidance for expectant mothers</li>
            <li>High-risk pregnancy management</li>
            <li>Childbirth education and preparation classes</li>
          </ul>
        </div>
      )
    },
    {
      id: 'delivery',
      title: 'Delivery Services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>We provide a comfortable and safe environment for childbirth with various delivery options:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Natural childbirth with minimal intervention</li>
            <li>Cesarean section when medically necessary</li>
            <li>Water birth options</li>
            <li>Pain management techniques</li>
            <li>24/7 emergency delivery services</li>
          </ul>
        </div>
      )
    },
    {
      id: 'postnatal',
      title: 'Postnatal Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>Continued care for mothers after delivery to ensure a healthy recovery:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Post-delivery check-ups</li>
            <li>Breastfeeding support and guidance</li>
            <li>Postpartum depression screening and support</li>
            <li>Recovery and rehabilitation exercises</li>
            <li>Family planning and contraception counseling</li>
          </ul>
        </div>
      )
    }
  ];

  // Eye care services data
  const eyeCareServices = [
    {
      id: 'general',
      title: 'General Eye Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>Comprehensive eye care services for maintaining optimal vision health:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Routine eye examinations</li>
            <li>Vision testing and prescription glasses</li>
            <li>Contact lens fittings</li>
            <li>Dry eye treatment</li>
            <li>Computer vision syndrome management</li>
          </ul>
        </div>
      )
    },
    {
      id: 'specialized',
      title: 'Specialized Eye Treatments',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>Advanced treatments for various eye conditions:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cataract diagnosis and surgery</li>
            <li>Glaucoma screening and management</li>
            <li>Diabetic retinopathy treatment</li>
            <li>Macular degeneration management</li>
            <li>Laser vision correction consultations</li>
          </ul>
        </div>
      )
    },
    {
      id: 'pediatric',
      title: 'Pediatric Eye Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>Specialized eye care services for children:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Childhood vision screening</li>
            <li>Amblyopia (lazy eye) treatment</li>
            <li>Strabismus (crossed eyes) management</li>
            <li>Pediatric glasses and contact lenses</li>
            <li>Vision therapy</li>
          </ul>
        </div>
      )
    }
  ];

  const getServices = () => {
    switch (activeTab) {
      case 'gynecology':
        return gynecologyServices;
      case 'pregnancy':
        return pregnancyServices;
      case 'eyeCare':
        return eyeCareServices;
      default:
        return gynecologyServices;
    }
  };

  const getTabImage = () => {
    switch (activeTab) {
      case 'gynecology':
        return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
      case 'pregnancy':
        return "https://images.unsplash.com/photo-1517120026326-ad877d3f6e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80";
      case 'eyeCare':
        return "https://images.unsplash.com/photo-1577720643272-265f0936742e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
      default:
        return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-purple-600/80 z-0"></div>
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 playfair-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Comprehensive Care Solutions
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A woman undergoes many physical and mental changes throughout life. No matter what stage you're in, 
            we provide care, diagnosis, and education about changes happening to your body.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white shadow-sm  z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-pink-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Heading and Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 playfair-font">
                {activeTab === 'gynecology' && 'Gynecology Services'}
                {activeTab === 'pregnancy' && 'Pregnancy Care'}
                {activeTab === 'eyeCare' && 'Eye Care Services'}
              </h2>
              <div className="w-24 h-1 bg-pink-500 mb-6"></div>
              
              {activeTab === 'gynecology' && (
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our gynecological services aim to provide comprehensive and specialized care to maintain women's 
                  health and treat diseases. We treat the full spectrum of gynecological conditions with compassion 
                  and expertise.
                </p>
              )}
              
              {activeTab === 'pregnancy' && (
                <p className="text-gray-700 text-lg leading-relaxed">
                  From conception to delivery and beyond, our pregnancy care services support you through every 
                  step of your journey. We provide personalized care to ensure the health and well-being of both 
                  mother and baby.
                </p>
              )}
              
              {activeTab === 'eyeCare' && (
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our eye care services provide comprehensive vision health solutions for patients of all ages. 
                  From routine exams to specialized treatments, we're committed to protecting and enhancing your vision.
                </p>
              )}
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Why Choose Our Care?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Experienced specialists in each field
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    State-of-the-art facilities and equipment
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized treatment plans
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Compassionate and supportive care
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Image and Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Service Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 w-full relative">
                  <Image
                    src={getTabImage()}
                    alt={`${activeTab} services`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {activeTab === 'gynecology' && 'Comprehensive Women\'s Health'}
                      {activeTab === 'pregnancy' && 'Maternal Care Excellence'}
                      {activeTab === 'eyeCare' && 'Vision Care Specialists'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Accordion */}
              <div className="space-y-4">
                {getServices().map((service) => (
                  <motion.div 
                    key={service.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => toggleItem(service.id)}
                      className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-pink-500">{service.icon}</span>
                        <span className="font-semibold text-gray-800">{service.title}</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 text-pink-500 transition-transform duration-300 ${
                          openItems[service.id] ? 'transform rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openItems[service.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                            {service.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair-font">Ready to Discuss Your Care Needs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our specialists to discuss the best care options for your specific needs.
          </p>
          <motion.button 
            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book a Consultation
          </motion.button>
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

export default CarePage;