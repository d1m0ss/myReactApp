import { FC } from "react";
import "./Button.scss";

interface IButton {
  content: string;
  type: "primary" | "secondary" | "secondary2";
  isDisabled?: boolean;
  onClick: () => void;
}

export const Button: FC<IButton> = ({ content, type, isDisabled = false, onClick }) => {
  const buttonClass = `button button--${type} ${isDisabled ? "disabled" : "active"}`;
  return (
    <button className={buttonClass} onClick={onClick} disabled={isDisabled}>
      {content}
    </button>
  );
};
