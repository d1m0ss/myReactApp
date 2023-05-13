import { FC } from "react";
import { IPost } from "../../../interfaces/IPost";
import { Typogrphy } from "../../Typogrphy/Typogrphy";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostDate } from "../PostDate/PostDate";
import PostImg from "../../../assets/img/PostImage.png";
import "./LargePost.scss";

export const LargePost: FC<IPost> = ({ title, text, date, image = PostImg, linkPath = "" }) => {
  return (
    <div className="post-lage">
      <div className="post-lage__wrapper">
        <div className="post-lage__texts">
          <PostDate date={date} />
          <Typogrphy content={title} type="H2" isLink linkPath={linkPath} />
          <p className="post-lage__text-content">{text}</p>
        </div>
        <div className="post-lage__img-wrapper">
          <img src={image} alt="post-img" />
        </div>
      </div>
      <PostFooter />
    </div>
  );
};
