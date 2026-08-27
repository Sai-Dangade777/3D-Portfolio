import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import hexawareLogo from "../../Hexaware Technologies.webp";
import iitAcademyLogo from "../../iitacademy.webp";
import safeYourWebLogo from "../../SafeYourWeb Infosec Pvt Ltd.webp";

const CompanyLogo = ({ item }) => (
  <div className={`company-logo ${item.logoSrc ? "bg-white" : item.accent}`}>
    {item.logoSrc ? (
      <img src={item.logoSrc} alt={`${item.company} logo`} className="max-h-10 max-w-14 object-contain" />
    ) : (
      <BriefcaseBusiness aria-hidden="true" className="h-7 w-7" strokeWidth={1.8} />
    )}
  </div>
);

const experiences = [
  {
    company: "Hexaware Technologies",
    role: "Associate Software Engineer",
    duration: "Oct 2025 — Present",
    location: "Navi Mumbai, India",
    logoSrc: hexawareLogo,
    accent: "bg-blue-100 text-blue-700",
    details: [
      "Analyzed structured and semi-structured data from enterprise AI evaluation workflows, identifying trends, inconsistencies, anomalies, and quality issues to support data-driven improvements.",
      "Wrote and executed SQL queries to extract, filter, join, aggregate, and validate data, supporting analysis of evaluation results and operational datasets.",
      "Performed ETL and data preparation activities, transforming and validating raw data into structured datasets for analysis, reporting, and visualization.",
      "Used Excel for data cleaning, validation, analysis, reconciliation, and reporting, identifying patterns and investigating data-quality issues across structured datasets.",
      "Evaluated LLM-generated outputs across structured test scenarios and designed/refined prompts based on analytical findings, improving the consistency, relevance, and quality of evaluation outcomes."
    ]
  },
  {
    company: "SafeYourWeb Infosec Pvt Ltd",
    role: "Software Engineer Intern",
    duration: "Apr 2025 — Jul 2025",
    location: "Remote",
    logoSrc: safeYourWebLogo,
    accent: "bg-amber-100 text-amber-700",
    details: [
      "Analyzed and prepared candidate and certification data in Excel through data cleaning, filtering and summarization for Power BI reporting.",
      "Integrated REST APIs and the Razorpay payment gateway, supporting end-to-end user flows from signup through payment and ensuring reliable interaction between frontend and backend services.",
      "Developed Power BI dashboards and visualizations using multiple chart types to analyze structured data and present insights through interactive reports."
    ]
  },
  {
    company: "IIT Academy",
    role: "Frontend Developer (Intern)",
    duration: "Feb 2025 — Apr 2025",
    location: "Remote",
    logoSrc: iitAcademyLogo,
    accent: "bg-emerald-100 text-emerald-700",
    details: [
      "Engineered dynamic college listing pages for Engineering & MBBS courses, boosting student engagement by 20%.",
      "Optimized data integration for 10+ colleges, improving accessibility for prospective students.",
      "Created category-wise career pages, simplifying navigation and decision-making for students."
    ]
  }
];

const Experience = () => {
  return (
    <section className="max-container">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((item) => (
          <div
            key={item.company}
            className="experience-card flex items-start gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <CompanyLogo item={item} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <span className="shrink-0 text-sm text-gray-600 sm:ml-6 sm:text-right">{item.duration}</span>
              </div>
              <div className="mb-4 mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                <span className="font-medium text-slate-700">{item.company}</span>
                <span>{item.location}</span>
              </div>
              <ul className="ml-5 list-disc text-base text-gray-800">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
