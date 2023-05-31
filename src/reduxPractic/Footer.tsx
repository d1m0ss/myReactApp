import { FC } from "react";
import { useDispatch } from "react-redux";
import { resetCount } from "./store/couner/actions";

export const Footer: FC = () => {
  const dispatch = useDispatch();
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", height: "80px", width: "100%", position: "absolute", bottom: "0" }}>
      <button onClick={()=>dispatch(resetCount())}>counter reset</button>
    </footer>
  );
};
