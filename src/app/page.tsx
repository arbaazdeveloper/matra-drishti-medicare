

"use client"
import React from 'react';
import Banner from '@/components/Home/Banner';
import QuickFacilities from '@/components/Home/QuickFacilities';
import AboutUsSection from '@/components/Home/AboutUsSection';
import OurVisionSection from '@/components/Home/OurVisionSection';
import OurDoctorsSection from '@/components/Home/OurDoctorsSection';
import QuickFacilitiesSection from '@/components/Home/QuickFacilitiesSection';
import TestimonialsSection from '@/components/Home/TestimonialSection';
import ContactSection from '@/components/Home/ContactSection';
import OpeningHours from '@/components/Home/OpeningHours';
import DoctorsIntroduction from '@/components/Home/DoctorsIntro';
import CareServices from '@/components/Home/CareServices';

// Define types for our data

export const runtime = "edge";


export default function Home() {
  
  return (
    <>
      <Banner/>
      <CareServices/>
      <OpeningHours/>
      <DoctorsIntroduction/>
      {/* <QuickFacilities/> */}
      <AboutUsSection/>
      {/* <OurVisionSection/>
      <OurDoctorsSection/> */}
      <QuickFacilitiesSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </>
  );
}