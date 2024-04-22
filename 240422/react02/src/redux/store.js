import { createStore, applyMiddleware } from "redux";
import productReducer from "./reducers.js/productReducer";
import { thunk } from "redux-thunk";

const store = createStore(productReducer);

export default store;
