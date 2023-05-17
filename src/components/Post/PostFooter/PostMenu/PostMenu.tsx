import { FC, useState } from "react";
import { IconButton } from "../../../IconButton/IconButton";
import more from "../../../../assets/icon/More-Horizontal.svg";
import moreDark from "../../../../assets/icon/More-dark.svg";
import "./PostMenu.scss";
import { useAppContext } from "../../../AppContext/AppContext";

export const PostMenu: FC = () => {
  const { isDarkTheme } = useAppContext();
  const options = ["Edit", "Delete"];
  const [open, setOpen] = useState(false);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  const hanleClickOption = (typeOption: string) => {
    setOpen(false);
    if (typeOption === "Edit") console.log("edit");
    if (typeOption === "Delete") console.log("delete");
  };

  return (
    <div className="menu">
      <IconButton onClick={handleToggleClick}>
        <img src={isDarkTheme() ? moreDark : more} alt="" />
      </IconButton>
      {open && (
        <ul className="menu__items">
          {options.map((option, i) => (
            <li className="menu__item" key={i}>
              <button className="menu__item-btn" onClick={() => hanleClickOption(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
