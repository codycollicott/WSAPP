import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import apiMiddleware from "./Middleware/Api";
import appReducer from "./Reducers";

// Create store from app's reducers combined with react-router's routerReducer.
const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk),
    // applyMiddleware(apiMiddleware)
  ),
);

export default store;
