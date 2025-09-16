"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';

const Navbaar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  };

  const navItems = [
    { name: 'LEARN', href: '/learn' },
    { name: 'CARE', href: '/care' },
    { name: 'DOCTOR', href: '/doctors' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'ABOUT', href: '/about' },
    { name: 'BLOG', href: '/blogs' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const sidebarVariants :Variants= {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav className={`fixed w-full max-w-screen z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link className='cursor-pointer' href={'/'}>
            
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-purple-800 playfair-font">Matra Drishti Medicare</h1>
            </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-purple-700 hover:text-pink-500 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-pink-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Info & Button - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* <div className="flex items-center bg-white rounded-full pl-4 pr-2 py-1 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-purple-700 text-sm">8007442266</span>
              </div> */}
              <Link href='/appointment' className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="text-purple-700 hover:text-pink-500 focus:outline-none p-2 rounded-lg bg-white shadow-sm"
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 h-full w-full bg-white z-50 md:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-5 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-purple-800">Matra Drishti Medicare</h2>
                </div>
                <motion.button
                  onClick={toggleMenu}
                  className="text-purple-700 hover:text-pink-500 p-2 rounded-full bg-white shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="space-y-6">
                  {navItems.map((item, index) => (
                    <Link href={item.href} key={item.name}>
      
                    <motion.span
                     
  
                      className="block text-purple-700 hover:text-pink-500 font-medium text-xl py-3 border-b border-gray-100"
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                      onClick={toggleMenu}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info & Button */}
              <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-purple-700">matradristimedicare@rediffmail.com</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-purple-700">+917499931560</span>
                  </div>
                  <Link href={'/appointment'}>
                  
                  <motion.button 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleMenu}
                  >
                    Book Appointment
                  </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .playfair-font {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </>
  );
};

export default Navbaar;