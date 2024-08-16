import React from "react";
import Layout from "@/app/components/Layout";
import { projects } from "@/src/data";
import ProjectCard from "@/app/common/Cards/ProjectCard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Projects',
  description: 'This page displays all great projects of Victor Patrick',
  alternates: {
    canonical: '/projects',
  },
};

const Page = () => {
  return (
    <Layout>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-8">
        {projects.map((project, index) => (
          <div key={index} >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
