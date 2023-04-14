import React from "react";
import {
  FaGithub,
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { DiMongodb, DiSqllite} from "react-icons/di";
const Skills = () => {
  return (
    <div name="skills" className="w-full  bg-[#0a192f] text-gray-300">
      <div data-aos="fade-right" data-aos-delay="200" className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-32">
        <div >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600 ">
            Skills
          </p>
          <p className="py-4">
            * These are the technologies I've worked with *
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-orange-600 mb-6">
            <FaHtml5 className="w-full" />
            <p className="my-4"> HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-blue-600 mb-6">
            <FaCss3Alt className="w-full" /> <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-yellow-500 mb-6">
            <FaJs className="w-full" /> <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-sky-700 mb-6">
            <FaReact className="w-full animate-spin" /> <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray-500 mb-6">
            <FaGithub className="w-full" /> <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-green-600 mb-6">
            <FaNode className="w-full" /> <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-green-500 mb-6">
            <DiMongodb className="w-full" /> <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-yellow-200 mb-6">
            <FaAws className="w-full" /> <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray-200 mb-6">
            <DiSqllite className="w-full" /> <p className="my-4">sql</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up-left" data-aos-delay="200" className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600 ">
            Languges
          </p>
          <p className="py-4">
            * These are the Languges that I can understand *
          </p>
        </div>

        <div   className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16]  duration-500 text-orange-600 hover:bg-cyan-600 hover:text-gray-200">
            
            <p className="my-4"> ENGLISH</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  duration-500 text-blue-600  hover:bg-cyan-600 hover:text-gray-200">
             <p className="my-4">MARATHI</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  duration-500 text-yellow-500 hover:bg-cyan-600 hover:text-gray-200">
             <p className="my-4">HINDI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
