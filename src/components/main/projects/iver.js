import React from "react";
import * as logos from "../../common/logos";
import MyButton from "../../common/myButton";
import TechChipList from "../../common/techChipList";
import { SiGithub } from "react-icons/si";
import iverScreen from "../../../assets/images/screencapture-iver.png";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { css } from "@emotion/react";
import { rhythm } from "../../../utils/typography";

const HomePage = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Current"
      contentStyle={{ boxShadow: "0 -3px 0 var(--dev)" }}
      iconStyle={{
        background: "rgb(247, 247, 247)",
      }}
      icon={logos.react}
    >
      <h3 className="vertical-timeline-element-title">Iver</h3>
      <h4 className="vertical-timeline-element-subtitle">Prototype webapp</h4>
      <img
        src={iverScreen}
        css={css`
          margin: ${rhythm(0.5)} 10px 0 0;
        `}
        alt="Screenshot of blomstre-app"
      />
      <TechChipList
        style={{ marginTop: "5px" }}
        name="Front-end: "
        list={["React", "Styled Components"]}
      />
      <TechChipList
        name={"Back-end:"}
        list={["REST API", "Node", "Express", "MongoDB"]}
      />

      <p>
        Prototype webapp for enabeling citizens to give direct feedback to their
        local government. Coded together with{" "}
        <a href="https://carloschavez.cc/">Carlos Chavez</a>. On assignment from{" "}
        <a href="https://www.travers.as/">Travers AS.</a>
      </p>
      <p>
        <MyButton href={"https://cranky-beaver-55477a.netlify.app/"}>
          <SiGithub
            style={{
              height: 20,
              width: 20,
              marginRight: 7,
            }}
          />
          Demo
        </MyButton>
        <MyButton href={"https://github.com/mountwebs/iver"}>
          <SiGithub
            style={{
              height: 20,
              width: 20,
              marginRight: 7,
            }}
          />
          Code
        </MyButton>
      </p>
    </VerticalTimelineElement>
  );
};

export default HomePage;
