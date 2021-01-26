import React from "react";
import { css } from "@emotion/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../../assets/images/drawingMachine", false, /.jpg/)
);

const imageCss = css`
  max-height: 400px;
  width: auto;
  margin: 0 auto;
`;

const contentArray = [
  {
    path: "drawing_machine.jpg",
    alt: "Drawing machine",
  },
  {
    path: "waves.jpg",
    alt: "Waves",
  },
  {
    path: "girl.jpg",
    alt: "Girl drawing",
  },
  {
    path: "castle.jpg",
    alt: "Castle",
  },
  {
    path: "stars.jpg",
    alt: "Stars",
  },
];

const content = contentArray.map((item, index) => (
  <div key={index}>
    <img css={imageCss} src={images[item.path]} alt={item.alt} />
    {"text" in item && (
      <div
        css={css`
          padding-top: 10px;
          display: flex;
          justify-content: center;
        `}
      >
        <span>{item.text}</span>
      </div>
    )}
  </div>
));

const DrawingCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

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

export default DrawingCarousel;
