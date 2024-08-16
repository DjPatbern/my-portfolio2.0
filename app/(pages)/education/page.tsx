import CertificateCard from "@/app/common/Cards/CertificateCard";
import EducationCard from "@/app/common/Cards/EducationCard";
import Layout from "@/app/components/Layout";
import { certificates, education } from "@/src/data";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Education",
  description:
    "This page displays all great educational achievements of Victor Patrick",
  alternates: {
    canonical: "/education",
  },
};
const Page = () => {
  return (
    <Layout>
      <div className="my-10">
        <p className="underline font-bold text-center mb-2">MY EDUCATION</p>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {education.map((education, index) => (
            <div key={index}>
              <EducationCard education={education} />
            </div>
          ))}
        </div>
      </div>
      <p className="underline font-bold text-center mb-2">MY CERTIFICATES</p>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-8">
        {certificates.map((certificate, index) => (
          <div key={index}>
            <CertificateCard certificate={certificate} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
