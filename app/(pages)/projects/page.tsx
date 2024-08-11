import React from "react";
import Layout from "@/app/components/Layout";
import { projects } from "@/src/data";
import ProjectCard from "@/app/common/Cards/ProjectCard";

const Page = () => {
  return (
    <Layout>
      <div className="md:grid lg:grid-cols-3 my-10 gap-8">
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
