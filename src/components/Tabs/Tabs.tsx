import { useState } from "react";
import { Tab } from "./Tab/Tab";
import "./Tabs.scss";

export const Tabs = () => {
  const [tabs] = useState([
    { isActive: true, isDisabled: false, title: "All" },
    { isActive: false, isDisabled: false, title: "My favorites" },
    { isActive: false, isDisabled: true, title: "Popular" },
  ]);

  return (
    <div className="tabs">
      <ul className="tabs__wrapper">
        {tabs.map(({ title, isActive, isDisabled }, i) => (
          <Tab key={i} title={title} isActive={isActive} isDisabled={isDisabled} />
        ))}
      </ul>
    </div>
  );
};
