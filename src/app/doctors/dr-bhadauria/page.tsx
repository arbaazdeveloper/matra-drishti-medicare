import React from 'react'
import DrBhadauriaPage from './Information'
import { Metadata } from "next";

export const metadata = {
  title: "Dr. Bhadauria – Senior Cardiologist | Matra Drishti Medicare",
  description:
    "Consult with Dr. Bhadauria, MBBS, DIPCARD, a senior cardiologist with 30+ years of experience at Matra Drishti Medicare. Expert in cardiac care, hypertension, and heart disease management.",
  keywords: [
    "Dr Bhadauria",
    "Cardiologist in Lucknow",
    "Heart specialist Lucknow",
    "Matra Drishti Medicare cardiologist",
    "Cardiac consultation",
    "Heart checkup",
    "Hypertension doctor",
    "Heart disease treatment",
  ],
  alternates: {
    canonical: "https://matradrishtimedicare.com/doctors/dr-bhadauria",
  },
  openGraph: {
    title: "Dr. Bhadauria – Senior Cardiologist | Matra Drishti Medicare",
    description:
      "Dr. Bhadauria, MBBS, DIPCARD, offers expert cardiac consultancy and heart care services at Matra Drishti Medicare.",
    url: "https://matradrishtimedicare.com/doctors/dr-bhadauria",
    type: "profile",
    images: [
      {
        url: "https://res.cloudinary.com/dxknbk2hd/image/upload/v1762327384/matra-drishti-medicare/icon-7797704_640_cwnxku.png",
        width: 800,
        height: 600,
        alt: "Dr. Bhadauria - Senior Cardiologist",
      },
    ],
  },
};

const Drbhadauria = () => {
  return (
    <>
    <DrBhadauriaPage/>
    </>
  )
}

export default Drbhadauria