import { RESET_COUNT, DECREMENT, INCREMENT } from "./actionTypes";

export interface ICounterState {
  count: number;
}

export interface ICountAction {
  type: typeof INCREMENT | typeof DECREMENT | typeof RESET_COUNT;
}
