import React from "react";
import * as logos from "../../common/logos";
import MyButton from "../../common/myButton";
import TechChipList from "../../common/techChipList";
import { SiGithub } from "react-icons/si";
import { css } from "@emotion/react";
import { rhythm } from "../../../utils/typography";

import blomstreScreen from "../../../assets/images/blomstre_screen.jpg";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Blomstre = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="November 2020"
      contentStyle={{ boxShadow: "0 -3px 0 var(--dev)" }}
      iconStyle={{
        background: "rgb(247, 247, 247)",
      }}
      icon={logos.react}
    >
      <h3 className="vertical-timeline-element-title">Blomstre</h3>
      <h4 className="vertical-timeline-element-subtitle">
        Full-stack prototype web application
      </h4>
      <img
        src={blomstreScreen}
        css={css`
          margin: ${rhythm(0.5)} 10px 0 0;
        `}
        alt="Screenshot of blomstre-app"
      />
      <TechChipList
        list={["REST API", "Node", "Express", "MongoDB", "Mongoose"]}
        name={"Backend: "}
      />
      <TechChipList
        list={["React", "Redux"]}
        name={"Frontend: "}
        style={{ marginTop: "5px" }}
      />
      <p>
        A prototype for a personal planttracker, showing you if your plants are
        happy or not.
      </p>
      <p>
        Inially made on a one day sprint and was a part of the Salt bootcamp in
        Stockholm fall 2020. It is now upgraded with Redux and Mongoose.
      </p>

      <p>
        <MyButton href={"https://github.com/mountwebs/blomstre-planttracker"}>
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

export default Blomstre;
