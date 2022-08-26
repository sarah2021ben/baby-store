import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeSlider from "../../Component/Slider/HomeSlider";
import reviews from "../../Data/Review";
import Slider from "react-slick";

import "./Home.css";

function Home(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="slider-container">
        <HomeSlider />
      </div>

      <Container>
        {
          // shipping information
        }
        <Row className="info-box">
          <Col sm={3} className="info-col">
            <div className="box-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="#574b90"
                class="bi bi-truck"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
            <span>FREE SHIPPING & RETURN</span>
          </Col>
          <Col sm={3} className="info-col">
            <div className="box-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="#cf6a87"
                class="bi bi-cash"
                viewBox="0 0 16 16"
              >
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
              </svg>
            </div>
            <span>MONEY BACK GUARANTEE</span>
          </Col>
          <Col sm={3} className="info-col">
            <div className="box-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="#ea8685"
                class="bi bi-headset"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
              </svg>
            </div>
            <span>ONLINE SUPPORT 24/7</span>
          </Col>
          <Col sm={3} className="info-col">
            <div className="box-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="#63cdda"
                class="bi bi-credit-card"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
              </svg>
            </div>
            <span>SECURE PAYMENT</span>
          </Col>
        </Row>
        <Row className="category-row"></Row>
        <Row className="about-row">
          {" "}
          <Col sm={6}>
            <div>
              <h2 className="main-title">Who are we ?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel consequat ligula. Mauris vitae purus auctor, condimentum
                lorem quis, placerat libero. Mauris fringilla condimentum
                tortor, vitae aliquet sapien rhoncus eu. Nulla facilisi.
                Praesent venenatis tortor ac lectus interdum, a tempor orci
                interdum. Nullam gravida varius nulla,
              </p>
             
            </div>
          </Col>
          <Col className="start-col" sm={6}>
            <img className="start-img" src="./assets/images/star.png" />
          </Col>
        </Row>
       
        <Row className="reveiw-row">
          <div>
            <h2 className="main-title">what our client says about us</h2>
          </div>
          <Slider {...settings} className="review-slide">
            {reviews.map((review) => {
              return (
                <div key={review.id}>
                  <div className="img-review">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="person-img"
                    />
                  </div>
                  <h4 className="author">{review.name}</h4>
                  <p className="job">{review.job}</p>
                  <p className="info">{review.text}</p>
                </div>
              );
            })}
          </Slider>
        </Row>
        <Row>
          <h2 className="main-title">Our Brands</h2>
          <div className="brand-img">
            <img src="./assets/images/logos/Zara-Algerie.png" alt="zara" />
            <img src="./assets/images/logos/H&M-Logo.png" alt="" />
            <img src="./assets/images/logos/Calvin_klein_logo.png" alt="" />
            <img src="./assets/images/logos/Marc.png" alt="" />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
