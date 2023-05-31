import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export const Header: FC = () => {
  const { count } = useSelector((state: RootState) => state.counter );
  return (
    <header style={{ width: "100% ", height: "80px", background: "#161683", color: "#fff", marginBottom: "20px" }}>
      <h1>{count}</h1>
    </header>
  );
};
