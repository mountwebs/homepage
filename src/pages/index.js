import React from "react";
import Layout from "../components/layout/layout";
import Hello from "../components/main/hello";
import AboutMe from "../components/main/aboutMe";

const Home = () => {
  return (
    <Layout>
      <Hello />
      <AboutMe />
    </Layout>
  );
};

export default Home;
