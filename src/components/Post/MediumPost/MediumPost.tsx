import { FC } from "react";
import { IPost } from "../../../interfaces/IPost";
import { Typogrphy } from "../../Typogrphy/Typogrphy";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostDate } from "../PostDate/PostDate";
import PostImg from "../../../assets/img/PostImage.png";
import "./MediumPost.scss";

export const MediumPost: FC<IPost> = ({ title, date, image = PostImg, linkPath = "" }) => {
  return (
    <div className="post-medium">
      <div className="post-medium__wrapper">
        <div className="post-medium__img-wrapper">
          <img src={image} alt="post-img" />
        </div>
        <div className="post-medium__texts">
          <PostDate date={date} />
          <Typogrphy content={title} type="H3" isLink linkPath={linkPath} />
        </div>
      </div>
      <PostFooter />
    </div>
  );
};
