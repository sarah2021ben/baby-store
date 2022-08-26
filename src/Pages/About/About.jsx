import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopPage from "../../Component/TopPage/TopPage";

function About(props) {
  const Parallax = require('parallax-js')

  const scene = document.getElementById("scene");
  const parallax = new Parallax(scene);
 
  return (
    <div>
      <TopPage pageName={"About Us"} />
      <Container>
        <div id="container" class="container">
          <div id="scene"  data-input-element="#scene-input">
            <div data-depth="0.2">
              <img src="./assets/images/p1.png" alt="hi" />
            </div>
            <div data-depth="0.6">
              <img src="./assets/images/p2.png" alt="hi" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
