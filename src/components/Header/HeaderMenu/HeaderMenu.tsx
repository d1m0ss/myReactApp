import { FC } from "react";
import { UserInfo } from "../../UserInfo/UserInfo";
import "./HeaderMenu.scss";
import { IconButton } from "../../IconButton/IconButton";
import { useAppContext } from "../../AppContext/AppContext";
import { Moon, Sun } from "../../../assets";

export const HeaderMenu: FC = () => {
  const { theme, isDarkTheme, toggleTheme } = useAppContext();
  const handleToggletheme = () => {
    toggleTheme();
  };
  return (
    <section className="header-menu">
      <nav className={`header-menu__nav ${theme}`}>
        <UserInfo userName="Volkov Dmitriy" />
        <ul className="header-menu__lunks">
          <li className="header-menu__link">
            <a href="/posts">Home</a>
          </li>
          <li className="header-menu__link">Add post</li>
          <li className="header-menu__link">Profile</li>
        </ul>
        <article className="header-menu__footer">
          <div className="header-menu__theme">
            <IconButton onClick={handleToggletheme}>
              <article className="header-menu__theme-wrapper">
                <div className={`header-menu__theme-icon${isDarkTheme() ? "" : "--light"}`}>
                  <Sun />
                </div>
                <div className={`header-menu__theme-icon${isDarkTheme() ? "--dark" : ""}`}>
                  <Moon />
                </div>
              </article>
            </IconButton>
          </div>
          <span className="header-menu__log-out">Log Out</span>
        </article>
      </nav>
    </section>
  );
};
