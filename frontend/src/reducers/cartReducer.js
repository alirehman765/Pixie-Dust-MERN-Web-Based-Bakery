import { ADD_DISH, REMOVE_DISH, CLEAR_CART, UPDATE_QUANTITY } from "../actions/types";

const initialState = {
    dishes: [],
    totalCost: 0,
    dishCount: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_DISH:
            const existingDishIndex = state.dishes.findIndex(
                (dish) => dish.dishName === action.payload.dish.dishName
            );
            if (existingDishIndex !== -1) {
                const updatedDishes = [...state.dishes];
                updatedDishes[existingDishIndex].quantity += action.payload.dish.quantity || 1;
                return {
                    ...state,
                    dishes: updatedDishes,
                    totalCost: state.totalCost + action.payload.dish.price,
                    dishCount: state.dishCount + 1,
                };
            } else {
                return {
                    ...state,
                    dishes: [...state.dishes, { ...action.payload.dish, quantity: 1 }],
                    totalCost: state.totalCost + action.payload.dish.price,
                    dishCount: state.dishCount + 1,
                };
            }
        case REMOVE_DISH:
            const filteredDishes = state.dishes.filter(
                (dish) => dish.dishName !== action.payload.dish.dishName
            );
            return {
                ...state,
                dishes: filteredDishes,
                totalCost: state.totalCost - (action.payload.dish.price * action.payload.dish.quantity),
                dishCount: state.dishCount - 1,
            };
        case UPDATE_QUANTITY:
            const { dishName, price, quantity } = action.payload.dish;
            const updatedDishes = state.dishes.map((dish) =>
                dish.dishName === dishName ? { ...dish, quantity } : dish
            );
            return {
                ...state,
                dishes: updatedDishes,
                totalCost: updatedDishes.reduce((total, dish) => total + dish.price * dish.quantity, 0),
            };
        case CLEAR_CART:
            return {
                ...state,
                dishes: [],
                totalCost: 0,
                dishCount: 0,
            };
        default:
            return state;
    }
}
