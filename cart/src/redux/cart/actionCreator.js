import { ADD_GOOD_TO_CART, DELETE_GOOD_FROM_CART } from "./type";

const addGood = id => ({
  type: ADD_GOOD_TO_CART,
  payload: id
});

const deleteGood = id => ({
  type: DELETE_GOOD_FROM_CART,
  payload: id
});

export { addGood, deleteGood };
