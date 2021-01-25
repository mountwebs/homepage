import React from "react";
import { FaGraduationCap } from "react-icons/fa";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const MasterThesis = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ boxShadow: "0 -3px 0 var(--writer)" }}
      date="June 2020"
      iconStyle={{
        background: "rgb(247, 247, 247)",
        color: "black",
      }}
      icon={<FaGraduationCap />}
    >
      <h3 className="vertical-timeline-element-title">Master thesis</h3>
      <h4 className="vertical-timeline-element-subtitle">
        'Good privacy': Privacy by design - from political vision to IT-practice
      </h4>
      <p>
        My thesis was about privacy and I wrote about GDPR, EUs privacy law, and
        how that law was translated into practice and implemented by developers.
        It was written in the academic field of Science and technology studies.
        It was rewarded with a top grade.
      </p>
      <p>
        <a href="https://www.sv.uio.no/tik/english/">
          Centre for Technology, Innovation and Culture, University of Oslo
        </a>
      </p>
      <p>
        <a href="https://www.duo.uio.no/handle/10852/80171">
          Thesis (in Norwegian)
        </a>
      </p>
    </VerticalTimelineElement>
  );
};

export default MasterThesis;
