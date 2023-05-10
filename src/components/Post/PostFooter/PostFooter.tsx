import { FC } from "react";
import upBtn from "../../../assets/icon/Up.svg";
import downBtn from "../../../assets/icon/Down.svg";
import flag from "../../../assets/icon/Bookmark.svg";
import "./PostFooter.scss";
import { PostMenu } from "./PostMenu/PostMenu";

export const PostFooter: FC = () => {
  return (
    <div className="post__footer">
      <div className="post__evaluation">
        <img src={upBtn} alt="up" />
        <span className="post__count">{Math.floor(Math.random() * 20)}</span>
        <img src={downBtn} alt="down" />
      </div>
      <div className="post__settings">
        <img src={flag} alt="flag" />
        <PostMenu />
      </div>
    </div>
  );
};
