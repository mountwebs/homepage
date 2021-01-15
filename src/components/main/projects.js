import React from "react";
import { css } from "@emotion/react";
import { FaReact, FaPython } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { MdWeb } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const titleContainer = css`
  width: 100%;
  text-align: center;
`;

const Projects = () => {
  return (
    <div id="projects">
      <div css={titleContainer}>
        {" "}
        <h2>Projects</h2>
      </div>

      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2021"
          iconStyle={{
            background: "rgb(247, 247, 247)",
            color: "rgb(90,48,139)",
          }}
          icon={<GrGatsbyjs />}
        >
          <h3 className="vertical-timeline-element-title">Homepage</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Portfolio and blog
          </h4>
          <p>
            The page you are on. Created with Gatsby. The blog uses markdown
            files via graphql.
          </p>
          <p>https://github.com/mountwebs/homepage</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2020"
          iconStyle={{
            background: "rgb(247, 247, 247)",
            color: "black",
          }}
          icon={<MdWeb />}
        >
          <h3 className="vertical-timeline-element-title">PhysIO</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Prototype full-stack web application
          </h4>
          <p>
            Frontend: React & Redux
            <br />
            Backend: REST API with NodeJS, Express, Pasport, Mongoose & MongoDB
          </p>
          <p>
            App to help physiotherapists and their clients (making and
            scheduling exercises etc.) Created with my mob at Salt at a 2-week
            sprint.
          </p>
          <a href="https://github.com/MaciejGL/final-project-frontend">
            Frontend
          </a>
          <br />
          <a href="https://github.com/MaciejGL/final-project-backend">
            Backend
          </a>
          <br />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2020"
          iconStyle={{
            background: "rgb(247, 247, 247)",
            color: "rgb(95, 212, 247)",
          }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Blomstre</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Full-stack prototype web application
          </h4>
          <p>
            Frontend: React & Redux
            <br />
            Backend: REST API with NodeJS, Express, Mongoose & MongoDB
          </p>
          <p>
            A prototype for a personal planttracker, showing you if your plants
            are happy or not.
          </p>
          <p>
            Inially made on a one day sprint and was a part of the Salt bootcamp
            in Stockholm fall 2020. It is now upgraded with Redux and Mongoose.
          </p>
          <a href="https://github.com/mountwebs/blomstre-planttracker">
            Github
          </a>
          <br />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021"
          iconStyle={{
            background: "rgb(247, 247, 247)",
            color: "black",
          }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">Timeglass</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mac-os status bar app.
          </h4>
          <p>
            A simple, unobtrusive menu bar timer for macOS. Rather than showing
            exact time in minutes and seconds, it visually represents time with
            a minimalistic hour glass icon in the menu bar.
          </p>
          <a href="https://github.com/mountwebs/timeglass">Github</a>
          <br />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
