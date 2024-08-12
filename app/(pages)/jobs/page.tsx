import React from "react";
import Layout from "@/app/components/Layout";
import JobCard from "@/app/common/Cards/JobCard";
import { jobs } from "@/src/data";

const Page = () => {
  return (
    <Layout>
      <div className="md:grid lg:grid-cols-3 my-10 gap-8">
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
