import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

const PhysIOCarousel = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} style={{ height: "200px" }}>
      <div>
        <img src={images["about.png"]} />
      </div>
      <div>
        <img src={images["client-dashboard.png"]} />
      </div>
      <div>
        <img src={images["client-session.png"]} />
      </div>
      <div>
        <img src={images["login.png"]} />
      </div>
      <div>
        <img src={images["pro-client.png"]} />
      </div>
      <div>
        <img src={images["pro-createsession.png"]} />
      </div>
      <div>
        <img src={images["pro-dashboard.png"]} />
      </div>
      <div>
        <img src={images["signup.png"]} />
      </div>
    </Carousel>
  );
};

export default PhysIOCarousel;
