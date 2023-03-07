import React from "react";
import "./services.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import carouseldata from "./FCarsouelData";
import ReactPlayer from "react-player";

const Services = () => {
  const renderThumbs = () => null;
  return (
    <div className="services">
      <div className="s-firstcursul">
        <div className="s-text">
          <hr className="s-firsthr" />
          <span>HOT PROPERTIES FOR SALE IN TURKEY</span>
          <hr className="s-secondhr" />
        </div>

        <Carousel
          showThumbs={false}
          centerSlidePercentage={33.3}
          centerMode={true}
          showIndicators={false}
          renderThumbs={renderThumbs}
          infiniteLoop={true}
        >
          {carouseldata.map((item) => {
            return (
              <div key={item.key} className="c-content">
                <img src={item.image} alt="image-1" className="c-image" />
                <p>{item.description}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* second chapter */}
      <div className="s-secondcarousel">
        <div className="s-text">
          <hr className="s-firsthr" />
          <span>WATCH WHAT OUR CLIENTS SAY ABOUT US</span>
          <hr className="s-secondhr" />
        </div>

        <Carousel>
          <div className="s-video">
            <ReactPlayer url="" />
          </div>
          <div className="s-video">
            <ReactPlayer url="" />
          </div>
          <div className="s-video">
            <ReactPlayer url="" />
          </div>
          <div className="s-video">
            <ReactPlayer url="" />
          </div>
        </Carousel>
      </div>
      {/* third carousel */}
      <div className="s-thirdcarousel">
        <div className="s-text">
          <hr className="s-firsthr" />
          <span>LATEST VIDEOS FROM OUR YOUTUBE CHANNE</span>
          <hr className="s-secondhr" />
        </div>
        <Carousel showThumbs={false}>
          <div className="s-th-video">
            <ReactPlayer url="" />
          </div>

          <div className="s-th-video">
            <ReactPlayer url="" />
          </div>
          <div className="s-th-video">
            <ReactPlayer url="" />
          </div>
          <div className="s-th-video">
            <ReactPlayer url="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
