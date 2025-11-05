"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-28 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">
          Welcome to our website. Your privacy is important to us. This Privacy
          Policy explains how we handle your information when you use our
          website and services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We do not collect or store any personal data in a database. When you
          book an appointment, it is done through WhatsApp or phone call only.
          During this process, we may collect some basic details such as your
          name, contact number, and preferred appointment date/time — only to
          help us schedule your consultation.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          The information shared by you is used solely for communication
          purposes — such as confirming appointments or responding to your
          queries. We do not sell, rent, or share your information with any
          third party.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          3. Data Retention
        </h2>
        <p className="text-gray-600 mb-4">
          Since we do not store data in a database, your details are not kept
          permanently. Any information shared during a WhatsApp conversation or
          call remains within that private channel and is not used for any other
          purpose.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          4. Cookies & Tracking
        </h2>
        <p className="text-gray-600 mb-4">
          Our website does not use cookies or any kind of tracking technologies
          to collect user data.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          5. Third-Party Services
        </h2>
        <p className="text-gray-600 mb-4">
          We may include links to external platforms (such as WhatsApp or Google
          Maps) for your convenience. Please note that we are not responsible
          for the privacy practices or content of these external websites.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          6. Your Consent
        </h2>
        <p className="text-gray-600 mb-4">
          By using our website or contacting us through WhatsApp or call, you
          consent to the collection and limited use of your information as
          described in this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          7. Updates to This Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page with the updated date.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          8. Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about this Privacy Policy or how we handle
          your information, please contact us at:
        </p>
        <p className="text-gray-700 font-medium">
          📞 Phone: +917499931560<br />
          💬 WhatsApp: +917499931560<br />
          🌐 Website: matradrishtimedicare.in
        </p>

        <p className="text-sm text-gray-500 mt-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
