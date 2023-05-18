import { FC, useMemo } from "react";
import { PostMenu } from "./PostMenu/PostMenu";
import { Bookmark, Down, Up } from "../../../assets";
import "./PostFooter.scss";

export const PostFooter: FC = () => {
  const randomScore = useMemo(() => Math.floor(Math.random() * 20), []);
  return (
    <div className="post__footer">
      <div className="post__evaluation">
        <Up />
        <span className="post__count">{randomScore}</span>
        <Down />
      </div>
      <div className="post__settings">
        <Bookmark />
        <PostMenu />
      </div>
    </div>
  );
};
