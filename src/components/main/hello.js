import React from "react";
import { css } from "@emotion/react";
import selfie from "../../assets/images/selfie.jpg";
import { rhythm } from "../../utils/typography";
import Media from "react-media";

import videoWide from "../../assets/videos/background-wide.mp4";
import videoHigh from "../../assets/videos/background-high.mp4";

const helloCss = css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${rhythm(2)};
`;

const imageCss = css`
  width: 200px;
  height: 275px;
  object-fit: cover;
  object-position: 0 25%;
  border-radius: 10%;
  margin: ${rhythm(1)} 10px 0 20px;
`;

const textContainerCss = css`
  max-width: 300px;
  margin: ${rhythm(1)} 10px 0 10px;
  text-align: center;
`;

const h1Css = css`
  margin: 0;
`;

const Hello = () => {
  return (
    <div css={helloCss} id="hello">
      <Media
        queries={{
          wide: "(max-width: 550px)",
        }}
      >
        {matches => (
          <>
            {matches.wide ? (
              <video
                autoPlay
                loop
                muted
                css={css`
                  position: absolute;
                  z-index: -1;
                  max-width: 1200px;
                  object-fit: cover;
                  width: 100%;
                  height: 495px;

                  @media only screen and (min-width: 550px) {
                    height: 370px;
                  }
                `}
              >
                <source src={videoHigh} type="video/mp4" />
              </video>
            ) : (
              <video
                autoPlay
                loop
                muted
                css={css`
                  position: absolute;
                  z-index: -1;
                  max-width: 1200px;
                  object-fit: cover;
                  width: 100%;
                  height: 485px;
                  margin-top: 20px;

                  @media only screen and (min-width: 550px) {
                    margin-top: 20px;
                    height: 365px;
                  }
                `}
              >
                <source src={videoWide} type="video/mp4" />
              </video>
            )}
          </>
        )}
      </Media>

      <img src={selfie} css={imageCss} alt="Stian Klasbu" />
      <div css={textContainerCss}>
        <h1 css={h1Css}>
          <u>Hi, I'm Stian</u> Developer, Maker & Writer.
        </h1>
      </div>
    </div>
  );
};

export default Hello;
