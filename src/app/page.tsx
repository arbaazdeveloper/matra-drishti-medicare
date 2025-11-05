"use client"
export const runtime = "edge";
import React from 'react';
import Banner from '@/components/Home/Banner';
import AboutUsSection from '@/components/Home/AboutUsSection';
import QuickFacilitiesSection from '@/components/Home/QuickFacilitiesSection';
import TestimonialsSection from '@/components/Home/TestimonialSection';
import ContactSection from '@/components/Home/ContactSection';
import OpeningHours from '@/components/Home/OpeningHours';
import DoctorsIntroduction from '@/components/Home/DoctorsIntro';
import CareServices from '@/components/Home/CareServices';

// Define types for our data




export default function Home() {

  return (
    <>
      <Banner />
      <CareServices />
      <OpeningHours />
      <DoctorsIntroduction />
      <AboutUsSection />
      <QuickFacilitiesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}