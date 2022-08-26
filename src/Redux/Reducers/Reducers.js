import { ActionTypes } from "../Constants/Actions-type";

const intialState = {
  favorite: [],
};
export const productsReducer = (
  state = intialState,
  { type, payload } /**actions */
) => {
    
  switch (type) {
    case ActionTypes.ADD_FAVORITE:
      return {
        ...state, // une copie du state
        favorite: [...state.favorite, payload.id],
      };
    case ActionTypes.REMOVE_FAVORITE:
      return {
        ...state, // une copie du state
        favorite: state.favorite.filter(
          (productId) => productId !== payload.id
        ),
      };
    default:
      return state; //laisser la liste comme elle est
  }
};

