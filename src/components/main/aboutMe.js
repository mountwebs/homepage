import React from "react";
import { css } from "@emotion/react";
import { rhythm } from "../../utils/typography";

const containerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${rhythm(1)};
`;

const articleCss = css`
  max-width: 500px;
  text-align: center;
`;

const AboutMe = () => {
  return (
    <div css={containerCss}>
      <article css={articleCss}>
        <h2>About me</h2>
        <p>
          Praesent elementum facilisis leo vel fringilla est ullamcorper. Ut
          porttitor leo a diam sollicitudin. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam. In metus vulputate eu scelerisque
          felis imperdiet proin fermentum leo. Platea dictumst quisque sagittis
          purus sit amet volutpat consequat. Magna eget est lorem ipsum dolor
          sit. Auctor elit sed vulputate mi sit amet mauris commodo quis.
          Volutpat diam ut venenatis tellus. Nibh ipsum consequat nisl vel
          pretium lectus quam id leo. Turpis massa sed elementum tempus egestas
          sed sed risus. Elementum nisi quis eleifend quam.
        </p>
        <p>
          Eu consequat ac felis donec et odio. At risus viverra adipiscing at in
          tellus integer feugiat scelerisque. Amet venenatis urna cursus eget
          nunc. Sit amet risus nullam eget felis eget nunc.
        </p>
      </article>
    </div>
  );
};

export default AboutMe;
