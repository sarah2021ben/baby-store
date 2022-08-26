import { ActionTypes } from "../Constants/Actions-type";
import data from "../../Data/data.json";

const intialState = {
  Products: data,
};

export const FilterReducer = (
  state = intialState,
  { type, payload } /**actions */
) => {
  switch (type) {
    case ActionTypes.APPLY_FILTER:
      return {
        Products: data.filter(
          (product) =>
            (!payload.filters.searchText?.length ||
              product.name
                .toLowerCase()
                .search(payload.filters.searchText.toLowerCase().trim()) !==
                -1) &&
            (!payload.filters.selectedBrand?.length ||
              product.company === payload.filters.selectedBrand) &&
            (!payload.filters.selectedColor?.length ||
              product.color === payload.filters.selectedColor) &&
            (!payload.filters.selectedPrice?.length ||
              (product.price >= payload.filters.selectedPrice[0] &&
                product.price <= payload.filters.selectedPrice[1])) &&
            (!payload.filters.selectedCategories?.length ||
              payload.filters.selectedCategories.some(
                (f) => f.toLowerCase() === product.category
              ))
        ),
      };

    default:
      return state; //laisser la liste comme elle est
  }
};
