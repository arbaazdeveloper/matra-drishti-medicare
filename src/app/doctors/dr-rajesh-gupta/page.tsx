import React from 'react'
import DoctorProfilePage from './Information'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Best Eye Surgeon in Lucknow | Dr. Rajesh Gupta - Cataract & Ophthalmic Specialist",
  description:
    "Dr. Rajesh Gupta, MBBS, DOMS, FCLI, Fellow S.N.C Chitrakoot, is a senior eye surgeon in Lucknow with 15+ years of experience. Founder of Matra Dristi Medicare, he has successfully performed over 10,000 eye surgeries including cataract, refractive, and advanced ophthalmic procedures.",
  keywords: [
    "Best Eye Surgeon in Lucknow",
    "Dr. Rajesh Gupta Lucknow",
    "Cataract Surgeon Lucknow",
    "Ophthalmologist in Lucknow",
    "Eye Specialist Lucknow",
    "Matra Dristi Medicare Lucknow"
  ],
  openGraph: {
    title: "Best Eye Surgeon in Lucknow | Dr. Rajesh Gupta",
    description:
      "Consult Dr. Rajesh Gupta, senior eye surgeon and founder of Matra Dristi Medicare, Lucknow. With 15+ years of expertise and 10,000+ successful surgeries, he specializes in cataract, refractive, and advanced ophthalmic treatments.",
    url: "https://www.matradrishtimedicare.in/doctors/dr-rajesh-gupta", // replace with actual URL
    type: "profile",
    images: [
      {
        url: "/doctor-1.jpg", // replace with actual image path
        width: 800,
        height: 600,
        alt: "Dr. Rajesh Gupta - Best Eye Surgeon in Lucknow",
      },
    ],
  },
};


const dramitagupta = () => {
  return (
    <DoctorProfilePage/>
  )
}

export default dramitagupta