import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      sku: 123,
      name: "Ski boots",
      price: 12.99,
    },
    {
      sku: 234,
      name: "Ski Jacket",
      price: 24.5,
    },
  ],
});

export default productsSlice.reducer;
