import { FC } from "react";
import "./Tabs.scss";

interface ITabs {
  content: string;
}

export const Tabs: FC<ITabs> = ({ content }) => {
  const getTabsQuantity = (content: string, event: (e: any) => void) => {
    content = content.trim();
    return content.split(" ").map((el, i) => (
      <li className={`tabs__item${!i ? " active" : ""}`} onClick={event}>
        {el.replace("-", " ")}
      </li>
    ));
  };

  const switchTab = (e: any) => {
    e.target.parentNode.childNodes.forEach((item: any) => item.classList.remove("active"));
    e.target.classList.toggle("active");
  };

  return (
    <div className="tabs">
      <ul className="tabs__wrapper">{getTabsQuantity(content, switchTab)}</ul>
      <hr />
    </div>
  );
};
