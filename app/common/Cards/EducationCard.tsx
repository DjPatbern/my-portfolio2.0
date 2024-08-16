"use client"
import { garamond } from "@/src/font";
import { useTheme } from "@/src/theme.context";
import Image from "next/image";
import React from "react";

const EducationCard = ({ education }: any) => {
  const { darkMode } = useTheme();
  const borderColor = darkMode
    ? "border-ts-faded-light"
    : "border-ts-faded-dark";
  return (
    <div
      className={`${borderColor} p-4 my-10 md:my-0 border-b  lg:min-h-[148px]`}
    >
      <div className="flex gap-2">
        <Image
          src={education.img}
          width={40}
          height={40}
          alt={education.school}
          className="rounded-md"
        />
        <div>
          <p className={`${garamond.className}  font-bold `}>
            {education.school}
          </p>
          <div className="text-[10px] text-ts-accent-grey-600">
            {education.date}
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="text-xs flex gap-2">
          <span className="text-ts-accent-grey-600 font-semibold">Type:</span>
          <span>{education.type}</span>
        </div>
        <div className="text-xs flex gap-2">
          <span className="text-ts-accent-grey-600 font-semibold">Major:</span>
          <span>{education.major}</span>
        </div>
        <div className="text-xs flex gap-2">
          <span className="text-ts-accent-grey-600 font-semibold">Location:</span>
          <span>{education.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
