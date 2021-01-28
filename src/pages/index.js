import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout/layout";
import Hello from "../components/main/hello";
import AboutMe from "../components/main/aboutMe";
import Projects from "../components/main/projects";
import TechStack from "../components/main/techStack";
import { Helmet } from "react-helmet";
import screenshot from "../assets/images/Screenshot.jpg";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stians portfolio and blog</title>
        <link rel="canonical" href="https://stiangk.netlify.app/" />
        <meta property="og:title" content="Stian Klasbus portfolio and blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stiangk.netlify.app/" />
        <meta property="og:image" content={screenshot} />
      </Helmet>
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
