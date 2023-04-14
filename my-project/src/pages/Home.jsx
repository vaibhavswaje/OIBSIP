import React from 'react';
import { HiArrowNarrowRight} from 'react-icons/hi';
import { Link} from 'react-router-dom';
import About from '../components/About';

const Home = () => {
  return (
    <>
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-cyan-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-sky-50'>
          Vaibhav Waje
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer and B.E student in pune institute of computer technology Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 inline-flex items-center hover:bg-cyan-600 hover:border-cyan-600'>
          <Link to="/projects"> View Projects & work</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 animate-pulse z-0' />
            </span>
          </button>
          <button className='text-white group border-2 px-6 py-3 my-2 inline-flex m-0 md:mx-4  items-center hover:bg-cyan-600 hover:border-cyan-600'>
          <Link to="/skills"> Download Resume</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 animate-pulse z-0' />
            </span>
          </button>
        </div>
      </div>
    </div>
    <div className='h-screen'>
      <About />
    </div>
    
    
    </>
  );
};

export default Home;