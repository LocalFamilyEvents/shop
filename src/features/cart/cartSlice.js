import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      sku: 123,
      name: "Ski boots",
      price: 12.99,
      quantity: 1,
    },
  ],
  reducers: {
    addToCart: (state, action) => {
      var sku = action.payload.sku;
      var productIfInCart = state.filter((ci) => ci.sku === sku);

      var newState;

      if (productIfInCart.length > 0) {
        var newQuantity = productIfInCart[0].quantity + 1;
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
  },
  // (state, action) => {
  //   switch(action.type) {
  //     case ADD_TO_CART_ACTION:
  //       return [...state, action.payload];
  //     default: return state;
  //   }
  // }
});

export const {
  addToCart,
  deleteCartItem,
  updateCartItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
