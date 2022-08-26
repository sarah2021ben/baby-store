import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";
import { AddToCart } from "../../Redux/Actions/ProductActions";
import { useDispatch } from "react-redux";
import data from "../../Data/data.json";
import { useParams } from "react-router-dom";
import "./Product.css";

function Product(props) {
  const { name } = useParams();
  const selectedproduct = data.filter((p) => p.name === name);
  const dispatch = useDispatch();

  return (
    <div className="product">
      <Container>
        <Row>
          <Col sm={5}>
            <img src={selectedproduct[0].image} alt={selectedproduct[0].name} />
          </Col>
          <Col sm={7}>
            <div>
              <span className="company">{selectedproduct[0].company}</span>
              <p className="name">{selectedproduct[0].name}</p>
              <p className="price">
                 $ {selectedproduct[0].price}
              </p>
              <p className="sku"><b>SKU:</b> {selectedproduct[0].id}-PBS</p>

              
              <p className="color">
                {" "}
                <b>disponible color : </b>{selectedproduct[0].color}
              </p>
              <p className="size">
                {" "}
                <b>disponible size :</b> {selectedproduct[0].Age}
              </p>
              <p className="cat">
               <b>Category :  </b>
               {selectedproduct[0].category}
            </p>
              <p className="size">
               <b>About the product : </b>
                 {selectedproduct[0].description}
              </p>
              
              <button
                className="main-btn btn-svg"
                onClick={() => dispatch(AddToCart(selectedproduct[0].id))}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                Add to cart
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="description"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="description" title="Description">
                <p>{selectedproduct[0].description}</p>
                <p>
                  {" "}
                  We work with monitoring programmes to ensure compliance with
                  safety, health and quality standards for our products. The
                  Green to Wear 2.0 standard aims to minimise the environmental
                  impact of textile manufacturing. To that end, we have
                  developed Inditex’s The List programme, which helps guarantee
                  both that production processes are clean and that our garments
                  are safe and healthy.
                </p>
              </Tab>
              <Tab eventKey="delivery" title="Information about Shipping ">
                <p>
                  Free Standard Shipping with any online purchase of $50
                  (merchandise subtotal excludes store pick up items;
                  merchandise subtotal is calculated before sales tax, before
                  gift wrap charges, and after any discounts or coupons). Truck
                  delivery and shipping surcharges on over-sized or extremely
                  heavy items will still apply (these charges are indicated on
                  the appropriate product information pages and will be
                  displayed in the shipping subtotal of your order). Orders
                  typically arrive within 3-6 business days. Items shipped
                  directly from the vendor or to Alaska and Hawaii have longer
                  delivery lead times. This offer does not apply to Alaska,
                  Hawaii, Puerto Rico or Business Direct orders.
                </p>
              </Tab>
              <Tab eventKey="review" title="Review"></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>

      {console.log(selectedproduct)}
    </div>
  );
}

export default Product;
