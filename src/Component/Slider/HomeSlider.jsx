import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.css";

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="home-slider">
      <div className="slide1 slide">
        <img src="./assets/images/slide/slide3.jpg" alt="logo" />
        <div className="slide-content">
          <h3 className="slide1-title">
            <span className="c1">Welcome </span>
            <span className="c2">to </span>
            <span className="c3">the </span>
            <span className="c4">wonderful </span>
            <span className="c5"> baby </span>
            <span className="c6">world </span>
          </h3>
        </div>
      </div>
      <div className="slide2 slide">
        <img src="./assets/images/slide/slide2.jpg" alt="logo" />
        <div className="slide-content">
          <h3>
            <span className="c6"> Shop </span>
            <span className="c3"> Now </span>
            <span className="c1"> with </span>
            <span className="c4">the </span>
            <span className="c5">best </span>
            <span className="c2">price</span>
          </h3>
          <Link to="/shop"><button className="main-btn">Start Now</button></Link>
        </div>
      </div>
    </Slider>
  );
}
export default HomeSlider;
