import React from "react";
import Layout from "../components/layout/layout";
import Hello from "../components/main/hello";
import AboutMe from "../components/main/aboutMe";
import Projects from "../components/main/projects";

// const mainCss = css`display:`

const Home = () => {
  return (
    <Layout>
      <main>
        <Hello />
        <AboutMe />
        <Projects />
      </main>
    </Layout>
  );
};

export default Home;
