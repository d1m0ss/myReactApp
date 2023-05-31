import { FC } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./store/couner/actions";
import { store } from "./store/store";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  console.log(store.getState());
  

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
