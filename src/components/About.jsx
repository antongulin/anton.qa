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
            <p>Hello and welcome!</p>
            <p>
              I invite you to browse through the site to get to know more about
              my projects and skills.
            </p>
          </div>
          <div>
            <p className="text-[#8892b0]">
              As a seasoned Software Development Engineer in Test (SDET), I have
              a solid foundation in a diverse set of programming languages
              including TypeScript, Java, C#, and Python. My expertise
              encompasses leveraging testing tools such as Playwright and
              Selenium WebDriver to their fullest potentials. Additionally, my
              experience spans a variety of testing frameworks like TestNG,
              JUnit, NUnit, and PyTest, among others. Through my journey in the
              tech industry, I have cultivated the ability to create robust
              testing strategies and deliver quality products. I'm eager to
              bring these skills to new challenges and opportunities. Feel free
              to explore my recent projects and don't hesitate to reach out if
              you have any questions or inquiries!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
