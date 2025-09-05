

"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/components/Home/Banner';
import QuickFacilities from '@/components/Home/QuickFacilities';
import AboutUsSection from '@/components/Home/AboutUsSection';
import OurVisionSection from '@/components/Home/OurVisionSection';
import OurDoctorsSection from '@/components/Home/OurDoctorsSection';
import QuickFacilitiesSection from '@/components/Home/QuickFacilitiesSection';
import TestimonialsSection from '@/components/Home/TestimonialSection';
import ContactSection from '@/components/Home/ContactSection';

// Define types for our data

export const runtime = "edge";


export default function Home() {
  
  return (
    <>
      <Banner/>
      <QuickFacilities/>
      <AboutUsSection/>
      <OurVisionSection/>
      <OurDoctorsSection/>
      <QuickFacilitiesSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </>
  );
}