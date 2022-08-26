import {combineReducers} from "redux";
import { productsReducer } from "./Reducers";
import { CartReducer } from "./CartReducers";
import {FilterReducer} from "./FilterReducers"

const reducers = combineReducers({
    productsReducer ,
    CartReducer,
    FilterReducer,
});

export default reducers