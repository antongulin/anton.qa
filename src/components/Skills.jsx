import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";
import CSharp from "../assets/csharp.png";
import Selenium from "../assets/selenium.png";
import Playwright from "../assets/playwright.png";
import Docker from "../assets/docker.png";
import TypeScript from "../assets/typescript.png";
import Bootstrap from "../assets/bootstrap.png";
import MongoDB from "../assets/mongodb.png";
import ExpressJS from "../assets/expressjs.png";
import Tailwind from "../assets/tailwind.png";
import RestAssured from "../assets/restassured.png";
import MySQL from "../assets/mysql.png";
import Jenkins from "../assets/jenkins.png";
import AzureDevOps from "../assets/azuredevops.png";
import BITBUCKET from "../assets/bitbucket.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a172f] text-[#f2f3f5]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-white">
            Professional journey
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-2 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={Playwright}
              alt="Playwright Icon"
            />
            <p className="py-2 text-xs">PLAYWRIGHT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={Selenium}
              alt="Selenium Icon"
            />
            <p className="py-2 text-xs">SELENIUM</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={TypeScript}
              alt="TypeScript Icon"
            />
            <p className="py-2 text-xs">TYPESCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto py-2" src={Java} alt="Java Icon" />
            <p className="py-2 text-xs">JAVA</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto py-2" src={CSharp} alt="CSharp Icon" />
            <p className="py-2 text-xs">C#</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto py-2" src={Python} alt="Python Icon" />
            <p className="py-2 text-xs">PYTHON</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={RestAssured}
              alt="Rest Assured Icon"
            />
            <p className="py-2 text-xs">RESTASSURED</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto py-2" src={MySQL} alt="MySQL Icon" />
            <p className="py-2 text-xs">MySQL</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={Jenkins}
              alt="Jenkins Icon"
            />
            <p className="py-2 text-xs">JENKINS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={AzureDevOps}
              alt="Azure DevOps Icon"
            />
            <p className="py-2 text-xs">AZURE DEVOPS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto py-2" src={GitHub} alt="GitHub Icon" />
            <p className="py-2 text-xs">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto py-2" src={Docker} alt="Docker Icon" />
            <p className="py-2 text-xs">DOCKER</p>
          </div>
        </div>

        <div>
          <p className="text-3xl font-bold inline border-b-4 border-white">
            Currently advancing my knowledge in
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-2 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="py-2 text-xs">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={Bootstrap}
              alt="Bootstrap Icon"
            />
            <p className="py-2 text-xs">BOOTSTRAP</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={Tailwind}
              alt="Tailwind Icon"
            />
            <p className="py-2 text-xs">TAILWIND</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={ReactImg}
              alt="React Icon"
            />
            <p className="py-2 text-xs">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto py-2" src={Node} alt="Node Icon" />
            <p className="py-2 text-xs">NODE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={MongoDB}
              alt="MongoDB Icon"
            />
            <p className="py-2 text-xs">MONGODB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={ExpressJS}
              alt="ExpressJS Icon"
            />
            <p className="py-2 text-xs">EXPRESSJS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto py-2" src={AWS} alt="AWS Icon" />
            <p className="py-2 text-xs">AWS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto py-2"
              src={BITBUCKET}
              alt="Bitbucket Icon"
            />
            <p className="py-2 text-xs">BITBUCKET</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
