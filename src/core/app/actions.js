import { ADD_TO_CART_ACTION } from "../../shared/constants";

export const addToCart = (product, quantity) => ({
    type: ADD_TO_CART_ACTION,
    payload: {
        quantity,
        product,
    }
});