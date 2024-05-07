import { ADD_DISH, REMOVE_DISH, CLEAR_CART, UPDATE_QUANTITY } from "./types";

export const addDish = (dish) => ({
    type: ADD_DISH,
    payload: { dish },
});

export const removeDish = (dish) => ({
    type: REMOVE_DISH,
    payload: { dish },
});

export const updateQuantity = (dish) => ({
    type: UPDATE_QUANTITY,
    payload: { dish },
});

export const clearCart = () => ({
    type: CLEAR_CART,
});
