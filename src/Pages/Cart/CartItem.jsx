import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  RemoveFromCart,
  AjustQuantity,
} from "../../Redux/Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const { cart } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(AjustQuantity(item.id, e.target.value));
  };

  return (
    <div className="item-cart">
      <Row>
        <Col sm={3}>
          <img src={item.image} alt={item.name} />
        </Col>

        <Col sm={3}>
          <p className="item-title">{item.name}</p>
        </Col>
        <Col sm={2}>
          {" "}
          <p className="item-price">$ {item.price}</p>
        </Col>

        <Col sm={2}>
          
          <div className="qty">
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
        </Col>

        <Col sm={2}>
          <button onClick={() => dispatch(RemoveFromCart(item.id))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
