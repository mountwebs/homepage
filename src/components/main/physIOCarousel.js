import React from "react";
import { css } from "@emotion/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/images/physIO", false, /.png/)
);

const imageCss = css`
  max-height: 400px;
  width: auto;
  margin: 0 auto;
`;

const contentArray = [
  ["about.png"],
  ["client-dashboard.png"],
  ["client-session.png"],
  ["homepage.png"],
  ["login.png"],
  ["pro-client.png"],
  ["pro-createsession"],
  ["signup.png"],
];

const content = contentArray.map(item => (
  <div>
    <img css={imageCss} src={images[item[0]]} />
  </div>
));

const PhysIOCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  console.log(content);

  return (
    <Slider
      {...settings}
      css={css`
      .slick-prev:before,
    .slick-next:before {
      color: grey;

      .slick-slide {
        position: relative;
      }
      `}
    >
      {content}
    </Slider>
  );
};

{
  /* <div>
<div
  css={css`
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 5px;
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `}
>
  <div
    css={css`
      padding: 0 5px;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.3);
    `}
  >
    Text
  </div>
</div>
<img css={imageCss} src={images["about.png"]} />
</div>
<div>
<img css={imageCss} src={images["client-dashboard.png"]} />
<div
  css={css`
    padding: 10px 0;
    display: flex;
    justify-content: center;
  `}
>
  <span>Testing dette....</span>
</div>
</div>
<div>
<img css={imageCss} src={images["client-session.png"]} />
</div>
<div>
<img css={imageCss} src={images["login.png"]} />
</div>
<div>
<img css={imageCss} src={images["pro-client.png"]} />
</div>
<div>
<img css={imageCss} src={images["pro-createsession.png"]} />
</div>
<div>
<img css={imageCss} src={images["pro-dashboard.png"]} />
</div>
<div>
<img css={imageCss} src={images["signup.png"]} />
</div> */
}

export default PhysIOCarousel;
