import React from "react";
import { css } from "@emotion/react";
import { rhythm } from "../../../utils/typography";
import { SiArduino } from "react-icons/si";
import DrawingCarousel from "./drawingCarousel";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const DrawingMachine = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ boxShadow: "0 -3px 0 var(--maker)" }}
      date="July 2020"
      iconStyle={{
        background: "rgb(247, 247, 247)",
        color: "rgb(65, 150, 156)",
      }}
      icon={<SiArduino />}
    >
      <h3 className="vertical-timeline-element-title">Drawing machine</h3>
      <h4 className="vertical-timeline-element-subtitle">
        3d printed 2d machine.
      </h4>
      <div
        css={css`
          padding: ${rhythm(1)} 0;
        `}
      >
        <DrawingCarousel />
      </div>
      <p>
        A homemade drawing machine with 3d printed parts. Powerd by arduino.
      </p>
    </VerticalTimelineElement>
  );
};

export default DrawingMachine;
