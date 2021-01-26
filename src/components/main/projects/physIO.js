import React from "react";
import { css } from "@emotion/react";
import MyButton from "../../common/myButton";
import TechChipList from "../../common/techChipList";
import { SiGithub } from "react-icons/si";
import PhysIOCarousel from "./physIOCarousel";
import { MdWeb } from "react-icons/md";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const PhysIO = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ boxShadow: "0 -3px 0 var(--dev)" }}
      date="December 2020"
      iconStyle={{
        background: "rgb(247, 247, 247)",
      }}
      icon={<MdWeb />}
    >
      <h3 className="vertical-timeline-element-title">PhysIO</h3>
      <h4 className="vertical-timeline-element-subtitle">
        Prototype full-stack web application
      </h4>
      <div
        css={css`
          margin: 10px 0 30px;
        `}
      >
        <PhysIOCarousel />
      </div>
      <TechChipList
        name={"Back-end:"}
        list={[
          "REST API",
          "Node",
          "Express",
          "MongoDB",
          "Mongoose",
          "Passport",
        ]}
      />
      <TechChipList
        style={{ marginTop: "5px" }}
        name="Front-end: "
        list={["React", "Redux"]}
      />
      <p>
        App for physiotherapists and their clients. The app provides the
        physotherapist with an easier way to share exercises and sessions with
        their clients. It could be espeically helpful when it hard to meet face
        to face, such as during a pandemic. Created with my mob at Salt at a
        2-week sprint together with Barbara Zujewska and Maciej Głowacki.
      </p>
      <p>
        <MyButton
          href={"https://github.com/MaciejGL/final-project-frontend"}
          style={{ marginBottom: "10px" }}
        >
          <SiGithub
            style={{
              height: 20,
              width: 20,
              marginRight: 7,
            }}
          />
          Frontend Code
        </MyButton>
        <MyButton href={"https://github.com/MaciejGL/final-project-backend"}>
          <SiGithub
            style={{
              height: 20,
              width: 20,
              marginRight: 7,
            }}
          />
          Backend Code
        </MyButton>
        <MyButton href={"https://phys-io.netlify.app/"}>Demo</MyButton>
      </p>
    </VerticalTimelineElement>
  );
};

export default PhysIO;
