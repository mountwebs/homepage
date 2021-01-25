import React from "react";
import * as logos from "../../common/logos";
import MyButton from "../../common/myButton";
import TechChipList from "../../common/techChipList";
import { SiGithub } from "react-icons/si";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const HomePage = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="January 2021"
      contentStyle={{ boxShadow: "0 -3px 0 var(--dev)" }}
      iconStyle={{
        background: "rgb(247, 247, 247)",
      }}
      icon={logos.gatsby}
    >
      <h3 className="vertical-timeline-element-title">Portfolio and blog</h3>
      <TechChipList
        list={["Gatsby", "React", "GraphQL", "Python"]}
        style={{ marginTop: "5px" }}
      />

      <p>
        The page you are on. It is created with Gatsby (with React and GraphQL).
        The blog uses markdown files via graphql.
      </p>
      <p>The colorful video on top is written in Pyton in Processing. </p>
      <p>
        <MyButton href={"https://github.com/mountwebs/homepage"}>
          <SiGithub
            style={{
              height: 20,
              width: 20,
              marginRight: 7,
            }}
          />
          Project Code
        </MyButton>
        <MyButton href={"https://github.com/mountwebs/generative-drawings"}>
          <SiGithub
            style={{
              height: 20,
              width: 20,
              marginRight: 7,
            }}
          />
          Animation Code
        </MyButton>
      </p>
    </VerticalTimelineElement>
  );
};

export default HomePage;
