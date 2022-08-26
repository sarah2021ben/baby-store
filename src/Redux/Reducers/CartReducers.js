import { ActionTypes } from "../Constants/Actions-type";
import data from "../../Data/data.json";

const intialState = {
  cart: [],
};
export const CartReducer = (
  state = intialState,
  { type, payload } /**actions */
) => {
  
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const item = data.find((product) => product.id === payload.id);
      // check if the product is aleardy in cart
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state, // une copie du state
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state, // une copie du state
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case ActionTypes.AJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: +payload.qty } : item
        ),
      };
    default:
      return state; //laisser la liste comme elle est
  }
};
