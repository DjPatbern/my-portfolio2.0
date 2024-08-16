import React from "react";
import Layout from "@/app/components/Layout";
import JobCard from "@/app/common/Cards/JobCard";
import { jobs } from "@/src/data";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jobs",
  description:
    "This page displays all jobs and companies Victor Patrick have worked and works for",
  alternates: {
    canonical: "/jobs",
  },
};

const Page = () => {
  return (
    <Layout>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2  my-10 gap-8">
        {jobs.map((job, index) => (
          <div key={index}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
