import { RESET_COUNT, DECREMENT, INCREMENT } from "./actionTypes";
import { ICountAction, ICounterState } from "./interfaces";

const initialState: ICounterState = {
  count: 0,
};

export const counter = (state: ICounterState = initialState, action: ICountAction): ICounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count === 10 ? 0 : state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count === 0 ? 10 : state.count - 1 };
    case RESET_COUNT:
      return { ...state, count: 0 };
    default:
      return state;
  }
  return state;
};
