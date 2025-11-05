"use client";

import Image from "next/image";
import Link from "next/link";

export default function DrBhadauriaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Doctor Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start p-8 gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-200 shadow-md">
            <Image
              src="https://res.cloudinary.com/dxknbk2hd/image/upload/v1762327384/matra-drishti-medicare/icon-7797704_640_cwnxku.png"
              alt="Dr. Bhadauria"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Dr. Bhadauria
            </h1>
            <p className="text-purple-600 font-medium text-lg">
              Senior Cardiologist
            </p>
            <p className="text-gray-600 mt-2">
              MBBS, DIPCARD — Former Senior Cardiologist at Balrampur Hospital
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Dr. Bhadauria is a highly experienced cardiologist with over{" "}
              <strong>30+ years</strong> of excellence in the field of cardiac
              care. He is renowned for his compassionate approach, accurate
              diagnosis, and advanced cardiac consultancy. Patients trust him
              for his deep understanding of heart-related conditions and his
              dedication to improving heart health through modern treatment and
              preventive care.
            </p>
         <p className="text-gray-600 mt-2">
  For expert cardiac consultation, please{" "}
  <Link href="/contact" className="text-pink-500 hover:text-pink-600 font-medium">
    contact Matra Drishti Medicare
  </Link>
  .
</p>


            <div className="mt-6">
              <Link
                href="/appointment"
                target="_blank"
                className="inline-block bg-purple-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-purple-700 transition-all"
              >
                Book Appointment via WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-purple-50 border-t border-purple-100 py-8 px-8 md:px-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Areas of Expertise
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2">
              ❤️ Comprehensive Cardiac Consultancy
            </li>
            <li className="flex items-center gap-2">
              💉 Hypertension & Cholesterol Management
            </li>
            <li className="flex items-center gap-2">
              🩺 ECG & Echocardiography Interpretation
            </li>
            <li className="flex items-center gap-2">
              ⚕️ Post-Operative Cardiac Care
            </li>
            <li className="flex items-center gap-2">
              💊 Lifestyle & Preventive Heart Care Guidance
            </li>
          </ul>
        </div>

        {/* Availability Section */}
        <div className="p-8 md:px-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Consultation Availability
          </h2>
          <p className="text-gray-700 mb-2">
            🕐 <strong>Days:</strong> Monday – Saturday
          </p>
          <p className="text-gray-700 mb-2">
            🕓 <strong>Timings:</strong> 9:00AM to 10:30 PM & 5:00 PM TO 9:00 PM
          </p>
          <p className="text-gray-700 mb-6">
            📍 <strong>Location:</strong> Matra Drishti Medicare – Cardiology Department
          </p>

          <Link
            href="tel:+917499931560"
            className="inline-block border border-purple-600 text-purple-600 font-medium px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all"
          >
            Call for Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
