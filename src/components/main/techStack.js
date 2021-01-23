import React from "react";
import { rhythm } from "../../utils/typography";
import Title from "../common/title";

import Chip from "@material-ui/core/Chip";
import {
  FaReact,
  FaPython,
  FaSass,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiRedux,
  SiWebpack,
  SiGatsby,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiInfluxdb,
  SiJest,
  SiEslint,
  SiLinux,
  SiGit,
  SiDocker,
  SiGnubash,
  SiPostman,
  SiHeroku,
  SiArduino,
  SiAmazonaws,
  SiRaspberrypi,
  SiNetlify,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import { css } from "@emotion/react";

export default function Chips() {
  const skills = [
    {
      type: "Languages",
      chips: [
        { label: "JavaScript", icon: <IoLogoJavascript /> },
        { label: "Python", icon: <FaPython /> },
      ],
    },
    {
      type: "Front-end",
      chips: [
        { label: "React", icon: <FaReact /> },
        { label: "Gatsby", icon: <SiGatsby /> },
        { label: "Redux", icon: <SiRedux /> },
        { label: "Html 5", icon: <AiFillHtml5 /> },
        { label: "css 3", icon: <IoLogoCss3 /> },
        { label: "Sass", icon: <FaSass /> },
        { label: "Webpack", icon: <SiWebpack /> },
      ],
    },
    {
      type: "Back-end",
      chips: [
        { label: "Node", icon: <FaNodeJs /> },
        { label: "Express" },
        { label: "MongoDB", icon: <SiMongodb /> },
        { label: "PostgreSQL", icon: <SiPostgresql /> },
        { label: "InfluxDB", icon: <SiInfluxdb /> },
        { label: "MySQL", icon: <GrMysql /> },
        { label: "GraphQL", icon: <SiGraphql /> },
        { label: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      type: "Testing",
      chips: [
        { label: "EsLint", icon: <SiEslint /> },
        { label: "Jest", icon: <SiJest /> },
        { label: "Mocha" },
      ],
    },
    {
      type: "Deployment",
      chips: [
        { label: "Heroku", icon: <SiHeroku /> },
        { label: "Amazon AWS", icon: <SiAmazonaws /> },
        { label: "Netlify", icon: <SiNetlify /> },
      ],
    },
    {
      type: "Tinkering",
      chips: [
        { label: "Arduino", icon: <SiArduino /> },
        { label: "Raspberry pi", icon: <SiRaspberrypi /> },
      ],
    },
    {
      type: "Other",
      chips: [
        { label: "Linux", icon: <SiLinux /> },
        { label: "Git", icon: <SiGit /> },
        { label: "Docker", icon: <SiDocker /> },
        { label: "Bash", icon: <SiGnubash /> },
        { label: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  const skillTableContent = skills.map((item, index) => (
    <div
      key={index}
      css={css`
        display: flex;
        margin: ${rhythm(0.5)} 0;
        align-items: center;
      `}
    >
      <div css={css``}>
        <h4
          css={css`
            width: 100px;
            margin-bottom: 0;
          `}
        >
          {item.type}
        </h4>
      </div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          max-width: 400px;
        `}
      >
        {item.chips.map((chip, index) => (
          <Chip
            size="small"
            key={index}
            label={chip.label}
            avatar={chip.icon}
            css={css`
              margin: 2px;
            `}
          />
        ))}
      </div>
    </div>
  ));

  return (
    <div
      css={css`
        margin: 0 20px;
        margin-top: ${rhythm(1)};
      `}
      id="stack"
    >
      <Title marginBottom={0.5}>Tech stack</Title>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            max-width: 650px;
          `}
        >
          {skillTableContent}
        </div>
      </div>
    </div>
  );
}
