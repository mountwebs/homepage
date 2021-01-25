import React from "react";
import { css } from "@emotion/react";
import { rhythm } from "../../../utils/typography";
import * as logos from "../../common/logos";
import MyButton from "../../common/myButton";
import { SiGithub } from "react-icons/si";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timeglass from "../../../assets/images/menu_bar2.png";

const Timeglass = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ boxShadow: "0 -3px 0 var(--dev)" }}
      date="May 2020"
      iconStyle={{
        background: "rgb(247, 247, 247)",
      }}
      icon={logos.python}
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
        A simple, unobtrusive menu bar timer for macOS. Most timers show exact
        time in minutes and seconds, which can be distracting when focusing.
        This timer replaces that distractive element with a minimalistic hour
        glass animation in the menu bar.
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
  );
};

export default Timeglass;
