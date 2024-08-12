"use client";
import { garamond } from "@/src/font";
import { useTheme } from "@/src/theme.context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JobCard = ({ job }: any) => {
  const { darkMode } = useTheme();
  const borderColor = darkMode
    ? "border-ts-faded-light"
    : "border-ts-faded-dark";
  const Demobtn = darkMode
    ? "text-ts-faded-dark bg-ts-faded-light hover:text-ts-dark hover:bg-ts-light"
    : "hover:text-ts-light hover:bg-ts-dark text-ts-faded-light bg-ts-faded-dark";
  return (
    <div
      className={`${borderColor} p-4 my-10 md:my-0 border-b  lg:min-h-[148px]`}
    >
      <div className="flex gap-2">
        <Image
          src={job.img}
          width={40}
          height={40}
          alt={job.name}
          className="rounded-md"
        />
        <div>
          <p className={`${garamond.className}  font-bold `}>{job.name}</p>
          <div className="text-[10px] text-ts-accent-grey-600">
            {job.location}
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="text-xs flex gap-2">
          <span className="text-ts-accent-grey-600 font-semibold">Year:</span>
          <span>{job.year}</span>
        </div>
        <div className="text-xs flex gap-2">
          <span className="text-ts-accent-grey-600 font-semibold">Role:</span>
          <span>{job.role}</span>
        </div>
        <div className="text-xs flex gap-2">
          <span className="text-ts-accent-grey-600 font-semibold">Type:</span>
          <span>{job.type}</span>
        </div>
        <div className="mt-2 text-xs">
          <Link
            className={`${Demobtn} text-center py-1 px-2 rounded-lg`}
            href={job.site}
            target="_blank"
          >
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
