import React from "react";
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
  SiFigma,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const icons = {
  FaReact,
  FaPython,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  IoLogoJavascript,
  IoLogoCss3,
  AiFillHtml5,
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
  GrMysql,
  SiFigma,
};

const TechChip = ({ tech }) => {
  const iconName = Object.keys(icons).find(item => {
    const regex = new RegExp(tech, "i");
    return regex.test(item);
  });

  const iconComponent = iconName ? React.createElement(icons[iconName]) : null;

  return (
    <Chip
      size="small"
      label={tech}
      avatar={iconComponent}
      style={{ margin: "2px" }}
    />
  );
};

export default TechChip;
