import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counter } from "./couner/reducer";
import { todo } from "./todo/reducer";

const RootReduser = combineReducers({
  counter,
  todo,
});

export const store = configureStore({
  reducer: RootReduser,
});

export type RootState = ReturnType<typeof store.getState>;
