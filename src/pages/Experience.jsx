import React from "react";

const Experience = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="flex flex-col gap-8">
        {/* IIT Academy Experience */}
  <div className="flex items-start gap-6 bg-white rounded-lg shadow p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <img src="/iitacademy.webp" alt="IIT Academy Logo" className="w-16 h-16 object-contain rounded" />
          <div>
            <h3 className="text-xl font-semibold">Frontend Developer (Intern)</h3>
            <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-2">
              <span>IIT Academy</span>
              <span>Feb 2025 — Apr 2025</span>
              <span>Remote</span>
            </div>
            <ul className="list-disc ml-5 text-base text-gray-800">
              <li>Engineered dynamic college listing pages for Engineering & MBBS courses, boosting student engagement by 20%.</li>
              <li>Optimized data integration for 10+ colleges, improving accessibility for prospective students.</li>
              <li>Created category-wise career pages, simplifying navigation and decision-making for students.</li>
            </ul>
          </div>
        </div>

        {/* SafeYourWeb Infosec Pvt Ltd Experience */}
  <div className="flex items-start gap-6 bg-white rounded-lg shadow p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <img src="/safeyourweb.png" alt="SafeYourWeb Logo" className="w-16 h-16 object-contain rounded" />
          <div>
            <h3 className="text-xl font-semibold">Frontend Developer (Intern)</h3>
            <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-2">
              <span>SafeYourWeb Infosec Pvt Ltd</span>
              <span>Apr 2025 — July 2025</span>
            </div>
            <ul className="list-disc ml-5 text-base text-gray-800">
              <li>Converted Figma designs into responsive React.js components, improving UI consistency by 30%.</li>
              <li>Integrated Razorpay payment gateway for course enrollment, enabling seamless user signup-to-payment flow.</li>
              <li> Enforced admin authentication using Redux Toolkit and secure API integration, reducing login errors by 40%.</li>
              <li>Collaborated cross-functionally with backend and QA teams using Agile principles.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
