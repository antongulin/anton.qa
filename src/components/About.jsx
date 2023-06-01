import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a172f] text-[#f2f3f5]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-3xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hello and welcome! Feel free to browse through the site.</p>
          </div>
          <div>
            <p className="text-[#8892b0]">
              With a solid foundation in programming languages such as
              TypeScript, Java, C#, and Python, I'm skilled in utilizing testing
              tools like Playwright and Selenium WebDriver. Furthermore, I'm
              experienced in working with testing frameworks such as TestNG,
              JUnit, NUnit, PyTest and others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
