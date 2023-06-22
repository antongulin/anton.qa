import React from "react";
import { data } from "../data/projects.js";

const Projects = () => {
  const project = data;
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-[#f2f3f5] bg-[#0a172f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-white">
            Projects
          </p>
          <p className="py-3">
            Presenting my recent projects and code. Check out more on my{" "}
            <a
              className="text-[#66CCFF] hover:text-[#f2f3f5]"
              href="https://github.com/antonrosh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {project.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>

                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
