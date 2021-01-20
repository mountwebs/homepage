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
  require.context("../../assets/images/physIO", false, /.png/)
);

const imageCss = css`
  max-height: 400px;
  width: auto;
  margin: 0 auto;
`;

const contentArray = [
  {
    path: "pro-dashboard.png",
    alt: "Pro Dashboard",
    text: "Dashboard for physiotherapist",
  },
  {
    path: "pro-client.png",
    alt: "Pro - client page",
    text: "Client page for physiotherapist",
  },
  {
    path: "pro-createsession.png",
    alt: "Pro - create session",
    text: "Create session page for physiotherapist",
  },

  {
    path: "client-dashboard.png",
    alt: "Client dashboard",
    text: "Dashboard for client",
  },
  {
    path: "client-session.png",
    alt: "Client session",
    text: "Session for client",
  },
  { path: "login.png", alt: "Login", text: "Login" },
  { path: "about.png", alt: "About page", text: "About page" },
  { path: "homepage.png", alt: "Homepage", text: "Home" },
  { path: "signup.png", alt: "Signup", text: "Signup" },
];

const content = contentArray.map(item => (
  <div>
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

const PhysIOCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
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

export default PhysIOCarousel;
