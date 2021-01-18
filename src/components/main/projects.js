import React from "react";
import { css } from "@emotion/react";
import { FaReact, FaPython, FaGraduationCap } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiArduino } from "react-icons/si";
import { MdWeb } from "react-icons/md";
import { rhythm } from "../../utils/typography";
import drawingMachine from "../../assets/images/drawing_machine.jpg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const titleContainer = css`
  width: 100%;
  text-align: center;
  margin-top: ${rhythm(0.5)};
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
            // color: "rgb(90,48,139)",
          }}
          icon={<GrGatsbyjs />}
        >
          <h3 className="vertical-timeline-element-title">Homepage</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Portfolio and blog
          </h4>
          <p>
            The page you are on. Created with Gatsby (with React and GraphQL).
            The blog uses markdown files via graphql.
          </p>
          <p>
            <a href="https://github.com/mountwebs/homepage">Github</a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2021"
          iconStyle={{
            background: "rgb(247, 247, 247)",
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
          <p>
            <a href="https://github.com/MaciejGL/final-project-frontend">
              Frontend
            </a>
            <br />
            <a href="https://github.com/MaciejGL/final-project-backend">
              Backend
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2021"
          iconStyle={{
            background: "rgb(247, 247, 247)",
            // color: "rgb(95, 212, 247)",
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

          <p>
            <a href="https://github.com/mountwebs/blomstre-planttracker">
              Github
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2021"
          iconStyle={{
            background: "rgb(247, 247, 247)",
            color: "black",
          }}
          icon={<SiArduino />}
        >
          <h3 className="vertical-timeline-element-title">Drawing machine</h3>
          <h4 className="vertical-timeline-element-subtitle">
            3d printed 2d machine.
          </h4>
          <article
            css={css`
              display: flex;
              @media only screen and (max-width: 425px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              css={css`
                min-width: 120px;
              `}
            >
              <p>
                A homemade drawing machine with 3d printed parts. Powerd by
                arduino.
              </p>
              <p>
                Read more about it and see examples of what it can make{" "}
                <a href="/blog">in this not yet existing blog post</a>.
              </p>
            </div>
            <div
              css={css`
                max-width: 200px;
                margin-top: 1em;
                margin-left: 10px;
              `}
            >
              <img
                src={drawingMachine}
                css={css`
                  border-radius: 10px;
                `}
              />
            </div>
          </article>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2021"
          iconStyle={{
            background: "rgb(247, 247, 247)",
            color: "black",
          }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Master thesis</h3>
          <h4 className="vertical-timeline-element-subtitle">
            'Good privacy': Privacy by design - from political vision to
            IT-practice
          </h4>
          <p>
            My thesis was about privacy and I wrote about GDPR, EUs privacy law,
            and how that law was translated into practice and met by and
            implemented by developers. It was written in the academic field of
            Science and technology studies.
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
          <p>
            <a href="https://github.com/mountwebs/timeglass">Github</a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
