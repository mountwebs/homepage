import React from "react";
import { css } from "@emotion/react";
import { rhythm } from "../../utils/typography";
import Title from "../common/title";

const articleCss = css`
  max-width: 500px;
  margin: 0 20px;
  margin-top: ${rhythm(1)};
`;

const AboutMe = () => {
  return (
    <article css={articleCss} id="aboutMe">
      <Title marginBottom={1}>About me</Title>
      <p>
        I am a full-stack web developer based in Oslo, with a passion for
        creating and writing about technology.
      </p>
      <p>
        Last year I finished my master thesis in Science and technology studies.
        Coding and tech-tinkering has always been some of my main interests and
        hobbies, and after thinking and writing about tech in more abstract
        terms, I decided to take a big step and turn a passion into a new career
        path and becoming a developer. Last summer I applied to the accelerated
        career program at{" "}
        <a href="https://salt.dev/">
          School of applied technology {"<"}/salt{">"}
        </a>
        . And I got in! In December I completed the program together with 30
        students, selected from 1500 applicants.
      </p>
      <p>
        In my spare time I love to create things - whether that is to create an
        IoT solution for my smart home, create music with some friends, create
        generative drawings with code, or create apps.
      </p>
      <p>
        On this page you will find my projects and tech stack. Also take a look
        at my <a href="/blog/">blog</a> where I plan to write more about my
        current projects and thoughts on tehcnology.
      </p>
    </article>
  );
};

export default AboutMe;
