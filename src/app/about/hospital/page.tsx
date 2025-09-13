import React from 'react'
import HospitalAboutPage from './Innformation'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Matra Dristi Medicare Hospital | Best Facilities Hospital in Jankipuram Extension, Lucknow",
  description:
    "Matra Dristi Medicare Hospital in Jankipuram Extension, Lucknow offers advanced healthcare services including gynecology, ophthalmology, cardiology, infertility treatments, and general surgeries with modern facilities and experienced doctors.",
  keywords: [
    "best hospital in Jankipuram Lucknow",
    "hospital in Jankipuram Extension Lucknow",
    "Matra Dristi Medicare Hospital Lucknow",
    "gynecology hospital Lucknow",
    "eye care hospital Lucknow",
    "cardiology OPD Lucknow",
    "general surgery hospital Lucknow"
  ],
  openGraph: {
    title: "Matra Dristi Medicare Hospital | Jankipuram Extension Lucknow",
    description:
      "Trusted hospital in Jankipuram Extension, Lucknow with specialties in gynecology, ophthalmology, cardiology, infertility treatments, and general surgeries.",
    url: "https://yourwebsite.com/hospital",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-hospital.jpg",
        width: 1200,
        height: 630,
        alt: "Matra Dristi Medicare Hospital Jankipuram Lucknow"
      }
    ]
  }
};


const Hospital = () => {
  return (
    <>
    <HospitalAboutPage/>
    </>
  )
}

export default Hospital