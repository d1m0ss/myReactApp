import { FC } from "react";
import { Typogrphy } from "../../Typogrphy/Typogrphy";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostDate } from "../PostDate/PostDate";
import PostImg from "../../../assets/img/PostImage.png";
import "./SmallPost.scss";
import { IPost } from "../../../interfaces/IPost";

export const SmallPost: FC<IPost> = ({ id, title, date, image = PostImg, linkPath = "" }) => {
  return (
    <div className="post-small" id={`${id}`}>
      <div className="post-small__wrapper">
        <div className="post-small__texts">
          <PostDate date={date} />
          <Typogrphy content={title} type="H3" isLink linkPath={`posts/${id}`} />
        </div>
        <div className="post-small__img-wrapper">
          <img src={image} alt="post-img" />
        </div>
      </div>
      <PostFooter />
    </div>
  );
};
