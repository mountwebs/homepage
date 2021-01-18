import React from "react";
import { css } from "@emotion/react";
import { rhythm } from "../../utils/typography";

const containerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${rhythm(1.5)};
`;

const articleCss = css`
  max-width: 500px;
  text-align: center;
  margin: 0 10px;
`;

const AboutMe = () => {
  return (
    <div css={containerCss}>
      <article css={articleCss} id="aboutMe">
        <h2>About me</h2>
        <p>
          I am a 32 year old developer based in Oslo, with a passion for
          creating and writing about technology.
        </p>
        <p>
          Last year I finished my master thesis in Science and technology
          studies with a top grade. I have always had coding and tech-tinkering
          as a interest and hobby, and after thinking and writing about tech in
          more abstract terms, I decided to take a big step and turn a passion
          into a new career path and becoming a full-stack web developer. I have
          recently finished an accelerated career program at{" "}
          <a href="https://salt.dev/">
            School of applied technology {"<"}/salt{">"}
          </a>
          , and I am now employed at Salt as a consultant.
        </p>
        <p>
          In my spare time I love to create things - whether that is to create
          an IoT solution for my smart home, create music with some friends,
          create generative art with code, or create an app.
        </p>
      </article>
    </div>
  );
};

export default AboutMe;
