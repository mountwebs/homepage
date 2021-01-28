import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout/layout";
import Hello from "../components/main/hello";
import AboutMe from "../components/main/aboutMe";
import Projects from "../components/main/projects";
import TechStack from "../components/main/techStack";


const wrapOuterCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const wrapInnerCss = css`
  display: flex;
  flex-grow: 1;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Home = () => {


  return (
    <Layout>
      <Hello />
      <div css={wrapOuterCss}>
        <div css={wrapInnerCss}>
          <AboutMe />
          <TechStack />
        </div>
      </div>
      <Projects />
    </Layout>
  );
};

export default Home;
