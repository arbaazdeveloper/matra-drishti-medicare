import Image from 'next/image';
import Link from 'next/link';

const ClinicPage = () => {
const services = [
  {
    title: "All Types of Eye Surgeries",
    description: "Comprehensive eye examination and advanced surgical treatments for all eye conditions.",
    icon: "👁️"
  },
  {
    title: "Refraction",
    description: "Accurate eye testing and prescription of lenses for vision correction.",
    icon: "🩺"
  },
  {
    title: "Infertility Treatment",
    description: "Diagnosis and management of infertility with advanced reproductive medicine.",
    icon: "👶"
  },
  {
    title: "Family Planning Advice & Treatment",
    description: "Counseling and medical services for safe and effective family planning.",
    icon: "👨‍👩‍👧"
  },
  {
    title: "Abortion (M.T.P.)",
    description: "Safe and confidential medical termination of pregnancy by qualified professionals.",
    icon: "⚕️"
  },
  {
    title: "Vaccination",
    description: "Immunization services for children, adults, and pregnant women.",
    icon: "💉"
  },
  {
    title: "Gynecological Treatment & Operations",
    description: "Treatment and surgeries for all gynecological and obstetric conditions.",
    icon: "👩‍⚕️"
  },
  {
    title: "Normal (Painless) Delivery",
    description: "Comfortable, safe, and painless normal delivery care for mothers.",
    icon: "🤰"
  },
  {
    title: "Caesarean Delivery",
    description: "Expert surgical care and postnatal recovery for cesarean births.",
    icon: "🏥"
  },
  {
    title: "Indoor Facilities",
    description: "Well-equipped inpatient wards with continuous monitoring and nursing support.",
    icon: "🛏️"
  }
];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Matra Drishti Medicare Clinic</h1>
          <p className="text-xl md:text-2xl mb-8">Comprehensive Patient's Healthcare with Compassion</p>
          <Link  href={'/appointment'} className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Clinic</h2>
              <p className="text-gray-600 text-lg mb-6">
                Welcome to Matra Drishti Medicare Clinic, where we provide exceptional 
                healthcare services for women of all ages. Our clinic is dedicated to 
                offering compassionate, personalized care in a comfortable and welcoming environment.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                With years of experience in gynecology and obstetrics,
                and our team of healthcare professionals are committed to ensuring the 
                highest standard of medical care for our patients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">30+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">5000+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/p/AF1QipMn2IoJZXEnPDR2xJS9hW2GjzWdHqw3GhWZOqbJ=s1360-w1360-h1020-rw"
                alt="Modern clinic interior"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive gynecological and obstetric services tailored to meet 
              the unique needs of every woman at every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                    <p className="text-gray-600">Shop no 14 -15, Ramanand Market, Sitapur Rd, adjacent Ahibaranpur<br />power house, Sector CS, Triveni Nagar, Lucknow, Uttar Pradesh 226021</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Clinic</h3>
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                <div className=" text-gray-500">
                      <iframe
                    src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4781.759636551906!2d80.93142827647827!3d26.88702547666254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999570c9dba58bd%3A0xe5a5e172366e29ce!2sMatra%20Drishti%20Medicare!5e1!3m2!1sen!2sin!4v1757672097593!5m2!1sen!2sin'}
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
                  href="https://share.google/C366HWv2HPUwQzs4b" 
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
    </div>
  );
};

export default ClinicPage;