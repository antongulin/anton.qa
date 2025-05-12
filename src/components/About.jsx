import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a172f] text-[#f2f3f5]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-2xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2sxl font-bold">
            <p>
              I invite you to browse through the site to get to know more about
              my projects and skills.
            </p>
          </div>
          <div>
            <p className="text-[#8892b0]">
              I'm a developer who specializes in Quality Assurance, bringing a programmer's mindset to the testing world. 
              With 9+ years of experience, I approach QA differently than traditional testers - I design clean architectures, 
              write maintainable code, and build testing systems with the same principles used in production development. 
              I've built and managed QA teams that operate with a developer-first mentality, creating automation 
              frameworks in TypeScript, Java, C#, and Python that stand up to the highest software engineering standards. 
              My expertise lies in applying true development practices to testing, implementing CI/CD pipelines, and 
              delivering quality through code. If you're looking for someone who bridges the gap between development 
              and QA, let's connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
