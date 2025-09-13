import React from 'react'
import DoctorProfilePage from './Information'
import { Metadata } from 'next'

 export const metadata: Metadata = {
  title: "Best Gynecologist in Lucknow | Dr. Amita Gupta - Infertility & Laparoscopy Specialist",
  description:
    "Dr. Amita Gupta, MBBS, DGO (K.G.M.C), Diploma in Urogynecology (Germany), is one of the best gynecologists in Lucknow. With 15+ years of experience, she specializes in infertility treatment, hysteroscopy, laparoscopic gynecology, and comprehensive women’s health care.",
  keywords: [
    "Best Gynecologist in Lucknow",
    "Dr. Amita Gupta Lucknow",
    "Infertility Specialist Lucknow",
    "Laparoscopic Gynecology Lucknow",
    "Hysteroscopy Specialist Lucknow",
    "Women's Health Doctor Lucknow",
  ],
  openGraph: {
    title: "Best Gynecologist in Lucknow | Dr. Amita Gupta",
    description:
      "Consult Dr. Amita Gupta, senior gynecologist and infertility specialist in Lucknow with 15+ years of expertise in obstetrics, hysteroscopy, and laparoscopic gynecology.",
    url: "https://yourhospitaldomain.com/doctors/dr-amita-gupta", // replace with actual URL
    type: "profile",
    images: [
      {
        url: "/doctor-1.jpg", // replace with actual image path
        width: 800,
        height: 600,
        alt: "Dr. Amita Gupta - Best Gynecologist in Lucknow",
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