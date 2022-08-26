import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopPage from "../../Component/TopPage/TopPage";
import SideBar from "../../Component/SideBar/SideBar";
import ProductList from "../../Component/ProductList/ProductList";
import "./Shop.css";

import { useSelector } from "react-redux";

function Shop(props) {
  const { Products } = useSelector((state) => state.FilterReducer);

  return (
    <div>
      {" "}
      <TopPage pageName={"Our Shop"} />
      <Container>
        <Row>
          <Col sm={3}>
            <SideBar />
          </Col>
          <Col sm={9}>
            {Products.length !== 0 ? (
              <ProductList data={Products} />
            ) : (
              <div>
                <p className="text-no-prod">
                  No Product Was found For This Selection
                </p>
                <img
                  src="./assets/images/prod-not-found.webp"
                  alt="not-found"
                />{" "}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
