import React from 'react'
import { projects, socialLinks } from '../constants'
import { arrow, github } from '../assets/icons'
import CTA from '../components/CTA';
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Data-driven projects focused on transforming raw data into actionable business insights through SQL, Power BI, data analysis, and interactive dashboards.
        </p>
      </div>
      <div className='project-grid my-20'>
        {projects.map((project) => (
          <article className='project-card' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={`${project.name} project icon`}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex h-full flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>

              {project.tags && (
                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.name}-${tag}`}
                      className='rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className='mt-auto pt-5 flex flex-col items-start gap-3 font-poppins'>
              {project.link && (
                <div className='flex items-center gap-2'>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </a>
                  <img
                    src={arrow}
                    alt="arrow"
                    className='w-4 h-4 object-contain'
                  />
                </div>
              )}
              {project.githubLink && (
                <div className='flex items-center gap-2'>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="font-semibold text-blue-600"
                  >
                    <img
                      src={github}
                      alt=""
                      className='mr-2 inline-block h-5 w-5 object-contain align-middle'
                    />
                    View on GitHub
                  </a>
                  <img
                    src={arrow}
                    alt=""
                    className='w-4 h-4 object-contain'
                  />
                </div>
              )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <hr className='border-slate-200'/>
      <CTA/>
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

export default Projects