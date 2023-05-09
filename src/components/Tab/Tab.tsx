import { FC } from "react";
import "./Tab.scss";

interface ITab {
  title: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

const hanleClick = (e: any) => {
  if (e.target.classList.contains("disabled")) return;
  const ParentArr = e.target.parentNode.childNodes;
  ParentArr.forEach((i: any) => i.classList.remove("active"));
  e.target.classList.add("active");
};

export const Tab: FC<ITab> = ({ title, isActive, isDisabled }) => {
  const btnClass = `tabs__item ${isActive && "active"} ${isDisabled && "disabled"}`;

  return (
    <li onClick={hanleClick} className={btnClass}>
      {title}
    </li>
  );
};
