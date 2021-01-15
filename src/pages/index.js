import React from "react";
import Layout from "../components/layout/layout";
import Hello from "../components/main/hello";
import AboutMe from "../components/main/aboutMe";
import Projects from "../components/main/projects";

const Home = () => {
  return (
    <Layout>
      <Hello />
      <AboutMe />
      <Projects />
    </Layout>
  );
};

export default Home;
