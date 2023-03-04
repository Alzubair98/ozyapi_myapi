import React from "react";
import "./services.css";
import Carousel from "react-elastic-carousel";
import carouseldata from "./FCarsouelData";
import ReactPlayer from "react-player";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Services = () => {
  return (
    <div className="services">
      <div className="s-firstcursul">
        <div className="s-text">
          <hr className="s-firsthr" />
          <span>HOT PROPERTIES FOR SALE IN TURKEY</span>
          <hr className="s-secondhr" />
        </div>

        <Carousel breakPoints={breakPoints}>
          {carouseldata.map((item) => {
            return (
              <div key={item.key} className="c-content">
                <img src={item.image} alt="image" className="c-image" />
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

        <Carousel breakPoints={breakPoints}>
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
        <Carousel breakPoints={breakPoints}>
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
      {/* chose a location */}
      {/* <div className="s-fourth">
        <div className="s-text">
          <hr className="s-firsthr" />
          <span>CHOOSE YOUR FAVORITE LOCATION IN TURKEY</span>
          <hr className="s-secondhr" />
        </div>
        <div className="s-locations-cont">
          <div className="row">
            <div className="col-8 s-image-hodler">
              <img src="/img1.jpg" alt="image" className="img-grid-test" />
              <h1>text</h1>
            </div>
            <div className="col-4 ps-0 s-image-hodler">
              <img src="/img1.jpg" alt="image" className="img-grid-test2" />
              <h1>text</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-4 s-image-hodler">
              <img src="/img1.jpg" alt="image" className="img-grid-test" />
              <h1>text</h1>
            </div>
            <div className="col-8 ps-2 s-image-hodler">
              <img src="/img1.jpg" alt="image" className="img-grid-test2" />
              <h1>text</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 s-image-hodler">
              <a href="www.google.com">
                <img src="/img1.jpg" alt="image" className="img-grid-test" />
                <h1>text</h1>
              </a>
            </div>
            <div className="col-6 ps-1 s-image-hodler">
              <img src="/img1.jpg" alt="image" className="img-grid-test2" />
              <h1>text</h1>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
