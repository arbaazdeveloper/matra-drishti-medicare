import { Metadata } from "next";
import DoctorsListPage from "./ListOfDoctors";

export const metadata: Metadata = {
  title: "Top Doctors in Lucknow | Matra Drishti Medicare",
  description:
    "Meet our team of highly experienced doctors at Matra Drishti Medicare, Lucknow. Specialists in Gynecology, Obstetrics, Cardiology, Ophthalmology, Infertility, Laparoscopy, and General Surgery. Trusted healthcare professionals with years of expertise.",
  keywords: [
    "best doctors in Lucknow",
    "gynecologist in Lucknow",
    "cardiologist in Lucknow",
    "ophthalmologist in Lucknow",
    "infertility specialist Lucknow",
    "laparoscopy doctor Lucknow",
    "Matra Drishti Medicare doctors"
  ],
  openGraph: {
    title: "Best Doctors in Lucknow | Matra Drishti Medicare",
    description:
      "Explore our team of expert doctors at Matra Drishti Medicare, Lucknow. Providing trusted healthcare in Gynecology, Cardiology, Ophthalmology, Infertility, and General Surgeries.",
    url: "https://www.matradrishtimedicare.in/doctors",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image-doctors.jpg",
        width: 1200,
        height: 630,
        alt: "Matra Drishti Medicare Doctors in Lucknow"
      }
    ]
  }
};


const DoctorsPage = () => {


  return (
    <>

      <DoctorsListPage />
    </>
  );
};

export default DoctorsPage;