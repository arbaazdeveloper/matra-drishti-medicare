import React from 'react'
import ClinicPage from './Information'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Matra  Drishti Medicare Clinic",
  description:
    "Matra Drishti Medicare Hospital in Triveni Nagar, Lucknow offers advanced healthcare services including eye care ,gynecology, ophthalmology, cardiology, infertility treatments, and general surgeries with modern facilities and experienced doctors.",
  keywords: [
    "dr amita gupta clinic",
    "dr rajesh gupta clinic",
    "best gynecology clinic",
    "best hospital in Jankipuram Lucknow",
    "clinic in Triveni Nagar Lucknow",
    "hospital in Jankipuram Extension Lucknow",
    "Matra  Drishti Medicare Hospital Lucknow",
    "gynecology hospital Lucknow",
    "eye care hospital Lucknow",
    "cardiology OPD Lucknow",
    "general surgery hospital Lucknow"
  ],
  openGraph: {
    title: "Matra  Drishti Medicare Clinic | Triveni Nagar Lucknow",
    description:
      "Trusted clinic in Triveni Nagar, Lucknow with specialties in gynecology, ophthalmology, cardiology, infertility treatments, and general surgeries.",
    url: "https://www.matradrishtimedicare.in/about/hospital",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/p/AF1QipMn2IoJZXEnPDR2xJS9hW2GjzWdHqw3GhWZOqbJ=s1360-w1360-h1020-rw",
        width: 1200,
        height: 630,
        alt: "Matra  Drishti Medicare Clinic"
      }
    ]
  }
};


const Clinic = () => {
    
  return (
    <>
    <ClinicPage/>
    </>
  )
}

export default Clinic