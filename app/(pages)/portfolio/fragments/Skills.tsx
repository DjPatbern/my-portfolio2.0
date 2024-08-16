import { skills } from "@/src/data";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="flex justify-center items-center flex-col  my-10">
      <p className="underline font-bold mb-5">MY STACKS & SKILLS:</p>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div
            className="flex justify-center items-center gap-2 flex-col"
            key={index}
          >
            <Image
              src={skill.img}
              width={30}
              height={30}
              alt="social icon"
              className="rounded-full"
            />
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
