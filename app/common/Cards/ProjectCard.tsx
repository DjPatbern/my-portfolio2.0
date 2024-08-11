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
  return (
    <div
      className={`${borderColor} p-4 my-10 md:my-0 border-b  lg:min-h-[248px]`}
    >
      <div className="flex gap-2">
        <Image
          src={project.img}
          width={150}
          height={150}
          alt="project name"
          className="rounded-md"
        />
        <div>
          <p className={`${garamond.className}  font-bold `}>{project.title}</p>
          <div className="text-[10px] text-ts-accent-grey-600">
            {project.stacks}
          </div>
          <div className="text-[8px] text-ts-grey">{project.year}</div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-[10px]">{project.description}</p>
        <div className="flex gap-5 mt-2 text-xs underline text-ts-red">
          <Link href={project.url} target="_blank">
            Demo
          </Link>
          {project.code && (
            <Link href={project.code} target="_blank">
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
