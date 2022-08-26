import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import TopPage from "../../Component/TopPage/TopPage";
import './Cart.css'

const Cart = () => {
  
  // on ramene notre liste de favoris (id) à partir du store
  const { cart } = useSelector((state) => state.CartReducer);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <>
    <TopPage pageName={"Your Cart"} />
    {cart.length === 0 ? (
        <Container className="favorite-container">
          <div className="notif-favorite">
           <p> No product has been added to your Cart</p>
           <Link to="/shop"><button className="main-btn">Go the shop</button></Link>
           
          </div>

        </Container>
      ) : (

      <Container>
        <Row>
          <Col sm={8}>
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </Col>
          <Col sm={4}>
          <div className="cart-box">
            <h4>Cart Summary</h4>
            <div>
              <span>Number of items :</span>
              <span>{totalItems} items</span>
            </div>
            <div>
              <span>TOTAL: </span>
              <span>$ {totalPrice}</span>
            </div>
            <button className="checkout-btn botn">Proceed To Checkout</button>
            <Link to="/shop">
            <button className="shop-btn botn"> Go back to the Shop</button></Link>
          </div>
          </Col>
        </Row>
      </Container>
      )}
    </>
  );
};

export default Cart;
