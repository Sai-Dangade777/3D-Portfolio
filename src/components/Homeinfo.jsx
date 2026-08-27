import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='home-intro-card mx-auto w-fit max-w-[92vw] -translate-y-10 rounded-lg px-5 py-3 text-center text-sm leading-relaxed text-white sm:max-w-xl sm:-translate-y-14 sm:px-6 sm:text-base sm:leading-snug'>
                Hi, I'm
                <span className='font-semibold mx-2 text-white'>Sai</span>

                <br />
                Data Analyst turning complex data into clear business insights
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Crafting compelling digital experiences<br />that resonate, captivate, and elevate brand identity.
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Explore my portfolio of innovative projects,<br /> each telling a unique story of creativity and expertise.
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my work
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dedicated professional? <br /> I'm just a message away,
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Get In touch!
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;
