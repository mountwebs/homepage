import React, { useState } from "react";
import { css } from "@emotion/react";
import { rhythm } from "../../utils/typography";
import Title from "../common/title";
import Selector from "./projects/selector";

import HomePage from "./projects/homepage";
import PhysIO from "./projects/physIO";
import Blomstre from "./projects/blomstre";
import SpaGallery from "./projects/spaGallery";
import DrawingMachine from "./projects/drawingMachine";
import MasterThesis from "./projects/masterThesis";
import Timeglass from "./projects/timeglass";
import TikArticle from "./projects/tikArticle";
import Iver from "./projects/iver";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  const [filterState, setfilterState] = useState({
    dev: true,
    maker: true,
    writer: true,
  });

  const handleFilterChange = event => {
    setfilterState({
      ...filterState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div
      css={css`
        margin-top: ${rhythm(1)};
      `}
      id="projects"
    >
      <Title marginBottom={0.5}>Projects</Title>
      <Selector
        filterState={filterState}
        handleFilterChange={handleFilterChange}
      />
      <VerticalTimeline animate={true}>
        {filterState.dev && (
          <>
            <Iver />
            <HomePage /> <PhysIO />
            <Blomstre />
            <SpaGallery />
          </>
        )}
        {filterState.maker && <DrawingMachine />}
        {filterState.writer && <MasterThesis />}
        {filterState.dev && <Timeglass />}
        {filterState.writer && <TikArticle />}
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
