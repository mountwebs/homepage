import React from "react";
import * as logos from "../../common/logos";
import MyButton from "../../common/myButton";
import TechChipList from "../../common/techChipList";
import { SiGithub } from "react-icons/si";
import { css } from "@emotion/react";
import { rhythm } from "../../../utils/typography";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import spaImage from "../../../assets/images/spa.png";

const SpaGallery = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ boxShadow: "0 -3px 0 var(--dev)" }}
      date="November 2020"
      iconStyle={{
        background: "rgb(247, 247, 247)",
      }}
      icon={logos.js}
    >
      <h3 className="vertical-timeline-element-title">SPA gallery</h3>
      <img
        src={spaImage}
        css={css`
          margin: ${rhythm(0.5)} 10px 0 0;
        `}
        alt="Screenshot of spa-gallery-app"
      />
      <TechChipList
        list={["REST API", "Node", "Express"]}
        name={"Backend: "}
        style={{ marginTop: "10px" }}
      />
      <TechChipList
        list={["JavaScript"]}
        name={"Frontend: "}
        style={{ marginTop: "5px" }}
      />
      <p>
        A simple Single Page Application to search for photos. It is connected
        through the backend to unsplash API to fetch photos. The front-end is
        written in vanilla JS. It was made at Salt together with Barbara
        Zujewska and Maciej Głowacki.
      </p>
      <p>
        <MyButton href={"https://github.com/b-zuj/spa-gallery-backend"}>
          <SiGithub
            style={{
              height: 20,
              width: 20,
              marginRight: 7,
            }}
          />
          Backend Code
        </MyButton>
        <MyButton href={"https://github.com/b-zuj/spa-gallery-frontend"}>
          <SiGithub
            style={{
              height: 20,
              width: 20,
              marginRight: 7,
            }}
          />
          Frontend Code
        </MyButton>
        <MyButton href={"https://spa-gallery-frontend.netlify.app/"}>
          Demo
        </MyButton>
      </p>
    </VerticalTimelineElement>
  );
};

export default SpaGallery;
