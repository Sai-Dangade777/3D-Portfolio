import React from 'react'
import { skills, service, socialLinks } from '../constants';
import CTA from '../components/CTA';
import AnalyticsIcon from '../components/AnalyticsIcon';
const About = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        Data <span className='blue-gradient_text font-semibold drop-shadow'>Analytics</span> & Business Intelligence
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I transform raw and complex data into useful insights through SQL, Power BI, Excel, data preparation, visualization, and AI/LLM evaluation. My software-development background helps me work comfortably across data, applications, and business requirements.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-10 flex flex-col gap-8'>
          {[...new Set(skills.map((skill) => skill.type))].map((type) => (
            <div key={type}>
              <h4 className='font-poppins text-lg font-semibold text-slate-700'>{type}</h4>
              <div className='mt-4 flex flex-wrap gap-4'>
                {skills.filter((skill) => skill.type === type).map((skill) => (
                  <div className={`skill-card ${skill.featured ? 'skill-card-featured' : ''}`} key={skill.name}>
                    <div className='skill-icon-wrapper'>
                      {skill.imageUrl ? (
                        <img
                          src={skill.imageUrl}
                          alt=""
                          className='h-8 w-8 object-contain'
                        />
                      ) : (
                        <AnalyticsIcon name={skill.icon} className='h-8 w-8 text-blue-500' />
                      )}
                    </div>
                    <span className={`font-poppins leading-tight ${skill.featured ? 'font-semibold text-slate-800' : 'text-sm text-slate-600'}`}>
                        {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <h1 className='head-text'>
        <span className='blue-gradient_text font-semibold drop-shadow'>Services </span>I Offer
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Practical analytics and business intelligence support for turning operational data into clear analysis, reporting, and decisions.
        </p>
      </div>
      
      <div className='service-grid mt-6'>
        {service.map((service, index) => (
          <div key={index} className='service-card'>
            <div className='service-icon-wrapper'>
              <AnalyticsIcon name={service.icon} className='h-7 w-7 text-blue-500' />
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>{service.name}</h3>
              <p className='mt-2 text-sm leading-6 text-slate-500'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200 mt-10' />

      <CTA />
      <div className='mt-10 flex gap-4'>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-blue-500 transition duration-300'
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className='w-6 h-6'
            />
          </a>
        ))}
      </div>
    </section>
  )
}

export default About