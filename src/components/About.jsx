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
              I've worked as an SDET, honing my skills in a range of languages
              like TypeScript, Java, C#, and Python. I've utilized tools such as
              Playwright and Selenium WebDriver, and have worked with various
              testing frameworks including TestNG, JUnit, NUnit, and PyTest. My
              focus has always been on creating effective testing strategies and
              delivering high-quality products. I'm excited to take on new
              challenges. If you have any questions or want to get in touch,
              don't hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
