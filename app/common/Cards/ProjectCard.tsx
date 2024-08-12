"use client";
import { garamond } from "@/src/font";
import { useTheme } from "@/src/theme.context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }: any) => {
  const { darkMode } = useTheme();
  const borderColor = darkMode
    ? "border-ts-faded-light"
    : "border-ts-faded-dark";
  const Demobtn = darkMode
    ? "text-ts-faded-dark bg-ts-faded-light hover:text-ts-dark hover:bg-ts-light"
    : "hover:text-ts-light hover:bg-ts-dark text-ts-faded-light bg-ts-faded-dark";

  const Codebtn = darkMode
    ? "text-ts-faded-light border-ts-faded-light hover:text-ts-light hover:border-ts-light"
    : "hover:text-ts-dark hover:border-ts-dark text-ts-faded-dark border-ts-faded-dark";
  return (
    <div
      className={`${borderColor} p-4 my-10 md:my-0 border-b  lg:min-h-[248px]`}
    >
      <div className="flex gap-2">
        <Image
          src={project.img}
          width={150}
          height={150}
          alt={project.title}
          className="rounded-md"
        />
        <div>
          <p className={`${garamond.className}  font-bold `}>{project.title}</p>

          <div className="text-[8px] text-ts-grey">{project.year}</div>
        </div>
      </div>
      <div className="mt-5 flex gap-2 flex-col">
        <p className="text-[10px]">{project.description}</p>
        <div className="text-[10px] text-ts-accent-grey-600">
          {project.stacks}
        </div>
        <div className="flex gap-2 text-xs">
          <Link
            className={`${Demobtn} text-center py-1 px-2 rounded-lg`}
            href={project.url}
            target="_blank"
          >
            Demo
          </Link>
          {project.code && (
            <Link
              href={project.code}
              className={`${Codebtn} text-center border py-1 px-2 rounded-lg`}
              target="_blank"
            >
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
