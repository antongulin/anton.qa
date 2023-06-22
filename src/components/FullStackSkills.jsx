import React from "react";
import { fullStackSkills } from "../data/skills.js";

const FullStackSkills = () => {
  return (
    <div
      name="fullstack-skills"
      className="w-full h-screen bg-[#0a172f] text-[#f2f3f5]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-white">
            Actively learning Full Stack Development
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-2 text-center py-8">
          {fullStackSkills.map((skill) => (
            <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              key={skill.id}
            >
              <img
                className="w-14 mx-auto py-2"
                src={skill.image}
                alt={`${skill.name} Icon`}
              />
              <p className="py-2 text-xs">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullStackSkills;
