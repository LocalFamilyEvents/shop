import { createSlice } from "@reduxjs/toolkit";

import { getItemsTotal } from "../../shared/moneyUtils";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: [
    {
      ref: 1,
      datePlaced: "2021-12-14",
      total: 37.49,
      items: [
        {
          sku: 123,
          name: "Ski boots",
          quantity: 1,
          price: 12.99,
          imageUrl: '/images/ski-boots.jpg',
        },
        {
          sku: 243,
          name: "Ski Jacket",
          quantity: 1,
          price: 24.50,
          imageUrl: '/images/ski-jacket.jpg',
        },
      ],
    },
  ],
  reducers: {
    placeOrder: (state, action) => {
      const nextOrderRef = Math.max(...state.map(o => o.ref), 0) + 1;
      const items = action.payload;

      const newOrder = {
        items,
        datePlaced: new Date().toISOString().slice(0, 10),
        ref: nextOrderRef,
        total: getItemsTotal(items),
      };

      return [
        ...state,
        newOrder,
      ]
    }
  }
});

export const {
  placeOrder,
} = ordersSlice.actions;

export default ordersSlice.reducer;