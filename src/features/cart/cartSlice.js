import { createSlice } from "@reduxjs/toolkit";

const emptyCartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: emptyCartState,
  reducers: {
    addToCart: (state, action) => {
      var {sku, quantity} = action.payload;
      var productIfInCart = state.filter((ci) => ci.sku === sku);

      var newState;

      if (productIfInCart.length > 0) {
        var newQuantity = productIfInCart[0].quantity + quantity;
        newState = state.map((ci) =>
          ci.sku === sku ? { ...ci, quantity: newQuantity } : ci
        );
      } else {
        newState = [...state, action.payload];
      }

      return newState;
    },
    deleteCartItem: (state, action) => {
      var sku = action.payload;
      return state.filter((ci) => ci.sku !== sku);
    },
    updateCartItemQuantity: (state, action) => {
      var { sku, quantity } = action.payload;
      let newState;

      if(quantity === 0) {
        newState = state.filter((ci) => ci.sku !== sku);
      } else {
        newState = state.map((ci) => ci.sku === sku ? { ...ci, quantity } : ci);
      }
      
      return newState;
    },
    emptyCart: (state, action) => {
      return emptyCartState;
    }
  },
});

export const {
  addToCart,
  deleteCartItem,
  updateCartItemQuantity,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
