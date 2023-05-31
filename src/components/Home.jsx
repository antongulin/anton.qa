import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a172f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white ">Hello there,</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#f2f3f5]">
          I'm Anton! 👋
        </h1>
        <h2 className="text-1xl sm:text-3xl font-bold text-[#8892b0]">
          I'm a versatile SDET & QA Automation Lead with over 7 years of
          experience in the tech industry.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          My specialties include creating robust automation frameworks,
          orchestrating CI/CD processes with Docker and Kubernetes, and
          improving product quality. I'm ready to apply my extensive QA
          expertise to new challenges.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-[#8892b0] hover:text-[#0a172f] hover:bg-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              {" "}
              <FaArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
