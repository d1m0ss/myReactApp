import { FC, useMemo } from "react";
import { PostMenu } from "./PostMenu/PostMenu";
import { useAppContext } from "../../AppContext/AppContext";
import upBtn from "../../../assets/icon/Up.svg";
import upBtnDark from "../../../assets/icon/Up-dark.svg";
import downBtn from "../../../assets/icon/Down.svg";
import downBtnDark from "../../../assets/icon/Down-dark.svg";
import flag from "../../../assets/icon/Bookmark.svg";
import flagDark from "../../../assets/icon/Bookmark-dark.svg";
import "./PostFooter.scss";

export const PostFooter: FC = () => {
  const { isDarkTheme } = useAppContext();
  const randomScore = useMemo(() => Math.floor(Math.random() * 20), []);
  return (
    <div className="post__footer">
      <div className="post__evaluation">
        <img src={isDarkTheme() ? upBtnDark : upBtn} alt="up" />
        <span className="post__count">{randomScore}</span>
        <img src={isDarkTheme() ? downBtnDark : downBtn} alt="down" />
      </div>
      <div className="post__settings">
        <img src={isDarkTheme() ? flagDark : flag} alt="flag" />
        <PostMenu />
      </div>
    </div>
  );
};
