import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      const updatedCartItems = [...state.cartItems, action.payload];
      return { ...state, cartItems: updatedCartItems }
      break;
    case REMOVE_FROM_CART:
      //TODO
      const removedCartItems = state.cartItems.filter(item => item.itemId !== action.payload.itemId)
      return { ...state, cartItems: removedCartItems };

      break;
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      //TODO
      const changedCartItems = [...state.cartItems];
      changedCartItems[idx].quantity = action.payload.quantity;
      return { ...state, cartItems: changedCartItems };

      break;
    default:
      return state;
  }
}

export default itemReducer;