import React from "react";
import Layout from "@/app/components/Layout";
import Profile from "./fragments/Profile";
import Contact from "./fragments/Contact";
import Skills from "./fragments/Skills";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is the portfolio page of Victor Patrick',
  alternates: {
    canonical: '/portfolio',
  },
};

const Page = () => {
  return (
    <Layout>
      <div className="my-10">
        <Profile />
        <Contact />
        <Skills />
      </div>
    </Layout>
  );
};

export default Page;
