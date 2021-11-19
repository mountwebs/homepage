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
        automation and for creating functional and user friendly technical
        solutions.
      </p>
      <p>
        After I finished my master thesis in Science and Technology studies in
        the spring of 2021, I descided to take a big step and turn my passion
        for programming and technology into a new career path and becoming a
        developer. I applied to the accelerated career program at{" "}
        <a href="https://salt.dev/">
          School of applied technology {"<"}/salt{">"}
        </a>
        in Stockholm. I completed the program together with 30 students,
        selected from 1500 applicants.
      </p>
      <p>
        This year I have been working as a technical consultant at Eye-share, a
        Norwegian software company developing intelligent software for
        purchase-to-pay solutions for over 45 countries. I am currently working
        with customers to tailor the code to their spesific needs.
      </p>
      <p>
        In my spare time I love to create things - whether that is to create a
        arduino-project with 3d printed parts that can automate some aspect of
        my life, create a web app for fun, or make music with some friends.
      </p>
    </article>
  );
};

export default AboutMe;
