export const addToCartAction = (product, quantity) => ({
    ...product,
    quantity
});

export const updateCartItemQuantityAction = (sku, quantity) => ({
    sku,
    quantity
});

export const deleteCartItemAction = (sku) => sku;