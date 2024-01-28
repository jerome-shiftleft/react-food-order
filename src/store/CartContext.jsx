import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex].quantity + 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  } // end of if (action.type === "ADD_ITEM")

  if (action.type === "REMOVE_ITEM") {
    // remove an item from the state
  }

  return state;
} // end of function cartReducer(state, action)

function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider></CartContext.Provider>;
}

export default CartContext;
export { CartContextProvider };
