import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productsReducer from './features/products/productsSlice';
import ordersReducer from './features/orders/ordersSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        orders: ordersReducer,
    },
})