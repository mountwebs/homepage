import React from "react";
import { css } from "@emotion/react";
import { RiArticleLine } from "react-icons/ri";
import { rhythm } from "../../../utils/typography";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import teknovatoren from "../../../assets/images/teknovatoren.png";

const MasterThesis = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ boxShadow: "0 -3px 0 var(--writer)" }}
      date="March 2019"
      iconStyle={{
        background: "rgb(247, 247, 247)",
      }}
      icon={<RiArticleLine />}
    >
      <h3 className="vertical-timeline-element-title">
        Looking back, moving forward: retracing one of TIK’s intellectual roots
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Academic article</h4>
      <div
        css={css`
          max-width: 400px;
        `}
      >
        <img
          alt="Article"
          src={teknovatoren}
          css={css`
            border-radius: 10px;
            margin: ${rhythm(1)} 10px 0 0;
          `}
        />
      </div>

      <p>
        Article about Professor Francis Seiersted's academic work on technology
        and society, and how his contributions can be of inspiration today. The
        article was written together with my master thesis supervisor, Hilde
        Reinertsen. It was published in a special edition of Teknovatøren -
        student journal at the Centre for Technology, Innovation and Knowledge
        at the University of Oslo - celebrating the centres 20th anniversary.
      </p>
      <p>
        <a href="https://www.teknovatoren.no/issues/issue-17-interdisciplinarity-in-the-age-of-uncertainty/">
          PDF
        </a>
      </p>
    </VerticalTimelineElement>
  );
};

export default MasterThesis;
