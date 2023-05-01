import { FC } from "react";
import "./Button.scss";

interface IButton {
  content: string;
  type: "primary" | "secondary" | "secondary2";
  isDisabled: boolean;
  callback: () => void;
}

export const Button: FC<IButton> = ({ content, type, isDisabled, callback }) => {
  const buttonClass = `button button--${type} ${isDisabled ? "disabled" : "active"}`;
  return (
    <button className={buttonClass} onClick={callback} disabled={isDisabled}>
      {content}
    </button>
  );
};
