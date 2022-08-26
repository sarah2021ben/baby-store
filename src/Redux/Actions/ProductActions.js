import { ActionTypes } from "../Constants/Actions-type";

export const AddFavorite = (id) => {
  return {
    type: ActionTypes.ADD_FAVORITE,
    payload: {
      id: id,
    },
  };
};
export const RemoveFavorite = (id) => {
  return {
    type: ActionTypes.REMOVE_FAVORITE,
    payload: {
      id: id,
    },
  };
};
export const AddToCart = (id) => {
    return {
      type: ActionTypes.ADD_TO_CART,
      payload: {
        id: id,
       
      },
    };
  };
export const RemoveFromCart = (id) => {
    return {
      type: ActionTypes.REMOVE_FROM_CART,
      payload: {
        id: id,
      },
    };
  };

  export const AjustQuantity = (id, value) => {
    return {
      type: ActionTypes.AJUST_QUANTITY,
      payload: {
        id: id,
        qty:value
      },
    };
  };
  export const ApplyFilter = (filters) => {
    return {
      type: ActionTypes.APPLY_FILTER,
      payload: {
       filters
      },
    };
  };  
