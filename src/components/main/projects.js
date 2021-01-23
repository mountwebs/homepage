import React from "react";
import { css } from "@emotion/react";
import { FaReact, FaPython, FaGraduationCap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrGatsbyjs } from "react-icons/gr";
import { SiArduino } from "react-icons/si";
import { MdWeb } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { rhythm } from "../../utils/typography";
import PhysIOCarousel from "./physIOCarousel";
import Title from "../common/title";
import MyButton from "../common/myButton";
import TechChipList from "../common/techChipList";
import { SiGithub } from "react-icons/si";

import drawingMachine from "../../assets/images/drawing_machine.jpg";
import blomstreScreen from "../../assets/images/blomstre_screen.jpg";
import timeglass from "../../assets/images/menu_bar2.png";
import teknovatoren from "../../assets/images/teknovatoren.png";
import spaImage from "../../assets/images/spa.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  return (
    <div
      css={css`
        margin-top: ${rhythm(1)};
      `}
      id="projects"
    >
      <Title marginBottom={0.5}>Projects</Title>
      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2021"
          iconStyle={{
            background: "rgb(247, 247, 247)",
          }}
          icon={<GrGatsbyjs />}
        >
          <h3 className="vertical-timeline-element-title">Homepage</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Portfolio and blog
          </h4>
          <TechChipList
            list={["Gatsby", "React", "GraphQL", "Python"]}
            style={{ marginTop: "5px" }}
          />

          <p>
            The page you are on. It is created with Gatsby (with React and
            GraphQL). The blog uses markdown files via graphql.
          </p>
          <p>
            The colorful video on top is written in in Pyton in Processing.{" "}
          </p>
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
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
            App to help physiotherapists and their clients (making and
            scheduling exercises etc.) Created with my mob at Salt at a 2-week
            sprint together with Barbara Zujewska and Maciej Głowacki.
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
            <MyButton
              href={"https://github.com/MaciejGL/final-project-backend"}
            >
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2020"
          iconStyle={{
            background: "rgb(247, 247, 247)",
          }}
          icon={<FaReact />}
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
            A prototype for a personal planttracker, showing you if your plants
            are happy or not.
          </p>
          <p>
            Inially made on a one day sprint and was a part of the Salt bootcamp
            in Stockholm fall 2020. It is now upgraded with Redux and Mongoose.
          </p>

          <p>
            <MyButton
              href={"https://github.com/mountwebs/blomstre-planttracker"}
            >
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2020"
          iconStyle={{
            background: "rgb(247, 247, 247)",
          }}
          icon={<IoLogoJavascript />}
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
            A simple Single Page Application to search for photos. It is
            connected through the backend to unsplash API to fetch photos. The
            front-end is written in vanilla JS. It was made at Salt together
            with Barbara Zujewska and Maciej Głowacki.
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2020"
          iconStyle={{
            background: "rgb(247, 247, 247)",
          }}
          icon={<SiArduino />}
        >
          <h3 className="vertical-timeline-element-title">Drawing machine</h3>
          <h4 className="vertical-timeline-element-subtitle">
            3d printed 2d machine.
          </h4>
          <div
            css={css`
              max-width: 300px;
            `}
          >
            <img
              src={drawingMachine}
              alt="Drawing machine"
              css={css`
                margin: ${rhythm(0.5)} 10px 0 0;
              `}
            />
          </div>

          <p>
            A homemade drawing machine with 3d printed parts. Powerd by arduino.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2020"
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
          date="May 2020"
          iconStyle={{
            background: "rgb(247, 247, 247)",
          }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">Timeglass</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mac-os status bar app.
          </h4>
          <img
            alt="Timeglass screenshot"
            src={timeglass}
            css={css`
              border-radius: 5px;
              margin: ${rhythm(1)} 10px 0 0;
            `}
          />
          <p>
            A simple, unobtrusive menu bar timer for macOS. Most timers show
            exact time in minutes and seconds, which can be distracting when
            focusing. This timer replaces that distractive element with a
            minimalistic hour glass animation in the menu bar.
          </p>
          <p>
            <MyButton href="https://github.com/mountwebs/timeglass">
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2019"
          iconStyle={{
            background: "rgb(247, 247, 247)",
          }}
          icon={<RiArticleLine />}
        >
          <h3 className="vertical-timeline-element-title">
            Looking back, moving forward: retracing one of TIK’s intellectual
            roots
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Academic article
          </h4>
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
            Article about Professor Francis Seiersted's academic work on
            technology and society, and how his contributions can be of
            inspiration today. The article was written together with my master
            thesis supervisor, Hilde Reinertsen. It was published in a special
            edition of Teknovatøren - student journal at the Centre for
            Technology, Innovation and Knowledge at the University of Oslo -
            celebrating the centres 20th anniversary.
          </p>
          <p>
            <a href="https://www.teknovatoren.no/issues/issue-17-interdisciplinarity-in-the-age-of-uncertainty/">
              PDF
            </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
