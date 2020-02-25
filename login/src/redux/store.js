import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

import thunk from 'redux-thunk';

const middelewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middelewares));


const store = createStore(rootReducer, enhancer);

export default store;