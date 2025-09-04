import { motion,Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample testimonials data (will be replaced with Google Reviews API data)
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      text: "The care I received at Care Link was exceptional. The staff was compassionate and professional, and the facilities were top-notch. I highly recommend this hospital.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      text: "From emergency care to follow-up appointments, every experience has been excellent. The doctors take time to explain everything clearly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 4,
      date: "3 weeks ago",
      text: "The maternity ward was absolutely wonderful. Private, clean, and the nursing staff was incredibly supportive throughout my delivery.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      name: "James Wilson",
      rating: 5,
      date: "2 months ago",
      text: "After my surgery, the recovery care was exceptional. The physical therapy team helped me get back on my feet faster than I expected.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

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

  // Render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-500 font-semibold">Patient Experiences</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">What Our Patients Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Read genuine feedback from patients who have experienced our care firsthand.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews Integration Ready */}
        {/* <motion.div 
          className="text-center p-8 bg-white rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.282-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.282 4.736-2.559 4.892zm-6.441-7.98l4.917 2.338-4.917 2.346v-4.684z" fill="#4285F4"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Google Reviews Integration Ready</h3>
          <p className="text-gray-600 mb-6">
            This section is designed to seamlessly integrate with your Google Reviews API.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
            View All Reviews
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;