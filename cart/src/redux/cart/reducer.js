import { ADD_GOOD_TO_CART, DELETE_GOOD_FROM_CART } from "./type";
import goods from "../../goods.json";

const initialState = {
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOOD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          ...goods.filter(good => good.id === action.payload)
        ]
      };

    case DELETE_GOOD_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(good => good.id !== action.payload)]
      };

    default:
      return state;
  }
};

export default reducer;
