import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a172f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white ">Hello there,</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#f2f3f5]">
          Hi, I'm Anton! 👋
        </h1>
        <h2 className="text-1xl sm:text-2xl font-bold text-[#8892b0]">
          With over 7 years of SDET experience, I'm now expanding my skill set
          into Full Stack Development.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I've built robust automation frameworks, managed CI/CD processes with
          Docker and Kubernetes, and improved product quality. I'm excited to
          apply these skills in Full Stack Development, ready for new challenges
          and opportunities.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={750}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-[#8892b0] hover:text-[#0a172f] hover:bg-white">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
