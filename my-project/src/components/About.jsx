import React from "react";
import avatr from "../assest/avatr.png";
export default function About() {
  return (
    <div className=" bg-[#0a192f] mb-32">
      <div
      data-aos="fade-right"
        name="skills"
        className="w-full h-screen text-gray-300 "
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  ">
          <div className="text-center">
            <p className="text-4xl font-bold inline border-b-4 text-cyan-600 border-cyan-600 ">
              profile
            </p>
            <p className="py-4">I'm hard working web develpoer</p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8 shadow-sm shadow-cyan-600 border-2 border-cyan-400 p-2 ">
            <div className="  mb-6  sm:text-left">
              <h2 className="text-xl m-1 text-cyan-600">About me</h2>
              <div className="text-sm ">
                Lorem ipsum dolor sit amet consecteturadipisicing elit.
                Eligendi, perspiciatis accusantium suscipit repudiandae qui ad
                exercitationem alias cumque ex, asperiores sunt cupiditate quis
                doloremquefacilis quae officiis officia iste dolorem.
              </div>
            </div>
            <div
              className="  rounded-full mb-6 no bg-no-repeat bg-center bg-cover sm:h-64 sm:w-64 w-24 h-24 border-cyan-400 border-2  text-center m-auto"
              style={{ backgroundImage: `url(${avatr})` }}
            ></div>
            <div className="  mb-6 sm:text-left">
              <div>
                <h2 className="text-xl text-cyan-400">Details</h2>
                <p className="text-sm ">
                  Name:
                  <br />
                  vaibhav waje <br />
                  Age:
                  <br /> 20 <br />
                  Location <br />
                  pmc,pune,maharastra,india
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
