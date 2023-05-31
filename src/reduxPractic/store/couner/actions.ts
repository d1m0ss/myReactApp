import { RESET_COUNT, DECREMENT, INCREMENT } from "./actionTypes";

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const resetCount = () => ({ type: RESET_COUNT });
