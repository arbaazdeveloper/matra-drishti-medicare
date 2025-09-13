import React from 'react'
import AboutUsPage from './Information'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "About Us | Matra Dristi Medicare Lucknow",
  description:
    "Learn about Matra Dristi Medicare, a trusted hospital in Lucknow established in 2011 with 45 bed capacity and a dedicated team of 15+ staff. We specialize in Gynecology, Ophthalmology, Cardiology, General Surgeries, and advanced women’s healthcare.",
  keywords: [
    "about Matra Dristi Medicare",
    "hospital in Lucknow",
    "best healthcare Lucknow",
    "gynecology hospital Lucknow",
    "cardiology clinic Lucknow",
    "ophthalmology services Lucknow",
    "general surgery Lucknow"
  ],
  openGraph: {
    title: "About Matra Dristi Medicare | Trusted Hospital in Lucknow",
    description:
      "Matra Dristi Medicare was established in 2011 in Lucknow with 45 beds and a team of expert doctors. Specializing in Gynecology, Ophthalmology, Cardiology, and General Surgery.",
    url: "https://yourwebsite.com/about",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "Matra Dristi Medicare Hospital Lucknow"
      }
    ]
  }
};
const AbouPage = () => {


  return (
    <>
      <AboutUsPage />
    </>
  )
}

export default AbouPage