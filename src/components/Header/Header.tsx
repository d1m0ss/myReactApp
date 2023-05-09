import { FC, useState } from "react";
import { BurgerBtn } from "../BurgerMenu/BurgerMenu";
import { IconButton } from "../IconButton/IconButton";
import { UserInfo } from "../UserInfo/UserInfo";
import Search from "../../assets/icon/Search.svg";
import Cancel from "../../assets/icon/Cancel.svg";
import "./Header.scss";

interface IHeader {}

export const Header: FC<IHeader> = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleToggleClick = () => {
    setOpenSearch(!openSearch);
    setSearchValue("");
  };

  const handleChangeSearch = (newValue: string) => {
    setSearchValue(newValue);
  };

  return (
    <header className="header">
      <BurgerBtn />
      {openSearch && (
        <div className="header__input-wrapp">
          <input
            type="text"
            className="header__search-input"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => handleChangeSearch(e.target.value)}
          />
          <IconButton onClick={handleToggleClick}>
            <img className="header__cancel" src={Cancel} alt="cancel" />
          </IconButton>
        </div>
      )}
      <div className="header__box">
        <div className="header__serch">
          <IconButton onClick={handleToggleClick}>
            <img src={Search} alt="search" />
          </IconButton>
        </div>
        <UserInfo userName="Volkov Dmitriy" />
      </div>
    </header>
  );
};
