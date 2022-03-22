import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import ItemListContainer from "../pages/ItemListContainer";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return { ...state, cartItems: [ ...state.cartItems, action.payload ] };
    case REMOVE_FROM_CART:
      //TODO
      const removed = state.cartItems.filter(item => item.itemId !== action.payload.itemId)
      return { ...state, cartItems: removed }
    case SET_QUANTITY:
      //TODO
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      const changed = state.cartItems.map((item, index) => index === idx ? { ...item, quantity: action.payload.quantity} : item);
      return { ...state, cartItems: changed }
    default:
      return state;
  }
}

export default itemReducer;