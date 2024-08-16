"use client";
import { garamond } from "@/src/font";
import { useTheme } from "@/src/theme.context";
import Image from "next/image";
import React from "react";

const CertificateCard = ({ certificate }: any) => {
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
          src={certificate.img}
          width={150}
          height={150}
          alt={certificate.issueSchool}
          className="rounded-md"
        />
        <div>
          <p className={`${garamond.className}  font-bold `}>
            {certificate.issueSchool}
          </p>

          <div className="text-xs text-ts-grey">{certificate.issueDate}</div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="text-xs flex gap-2">
          <span className="text-ts-accent-grey-600 font-semibold">Title:</span>
          <span>{certificate.name}</span>
        </div>
        <div className="text-xs flex gap-2">
          <span className="text-ts-accent-grey-600 font-semibold">
            Issued By:
          </span>
          <span>{certificate.issueSchool}</span>
        </div>
        {certificate.credentialId && (
          <div className="text-xs flex gap-2">
            <span className="text-ts-accent-grey-600 font-semibold">
              Credential ID:
            </span>
            <span>{certificate.credentialId}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
