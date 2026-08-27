import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const introCardClass = "home-intro-card mx-auto w-fit max-w-[92vw] -translate-y-10 rounded-lg px-5 py-3 text-center text-sm leading-relaxed text-white sm:max-w-xl sm:-translate-y-14 sm:px-6 sm:text-base sm:leading-snug";
const introButtonClass = "mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-slate-50";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className={introCardClass}>
                Hi, I'm
                <span className='font-semibold mx-2 text-white'>Sai</span>

                <br />
                Data Analyst turning complex data into clear business insights
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className={introCardClass}>
                <p className='font-medium'>
                    Crafting compelling digital experiences<br />that resonate, captivate, and elevate brand identity.
                </p>

                <Link to='/about' className={introButtonClass}>
                    Learn more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className={introCardClass}>
                <p className='font-medium'>
                    Explore my portfolio of innovative projects,<br /> each telling a unique story of creativity and expertise.
                </p>

                <Link to='/projects' className={introButtonClass}>
                    Visit my work
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className={introCardClass}>
                <p className='font-medium'>
                    Need a project done or looking for a dedicated professional? <br /> I'm just a message away,
                </p>

                <Link to='/contact' className={introButtonClass}>
                    Get In touch!
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;
