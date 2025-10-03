import React from 'react'
import ContactPage from './Information'

export const metadata = {
  title: 'Contact Us | Matra Drishti Medicare',
  description:
    'Get in touch with Matra Drishti Medicare for appointments, inquiries, or emergency assistance. Call us, visit our location, or fill out our contact form to reach our team.',
  keywords: [
    'contact Matra Drishti Medicare',
    'hospital contact',
    'clinic phone number',
    'hospital location',
    'book appointment',
    'emergency hospital contact',
  ],
  openGraph: {
    title: 'Contact Us | Matra Drishti Medicare',
    description:
      'Reach out to Matra Drishti Medicare for appointments and healthcare assistance. Our team is here to help you 24/7.',
    url: 'https://www.matradrishtimedicare.in/contact',
    siteName: 'Matra Drishti Medicare',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Matra Drishti Medicare' }],
};
  

const Contact = () => {
  return (
    <ContactPage/>
  )
}

export default Contact