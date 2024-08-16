import { Metadata } from "next";
import Home from "./(pages)/LandingPage/Home";
import Layout from "./components/Layout";
export const metadata: Metadata = {
  title: "Home",
  description: "This is the home page of Victor Patrick's porfolio page",
  alternates: {
    canonical: "/",
  },
};
export default function Page() {
  return (
    <Layout ignoreLinks>
      <Home />
    </Layout>
  );
}
