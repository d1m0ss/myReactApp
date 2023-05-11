import { FC } from "react";
import { Typogrphy } from "../../Typogrphy/Typogrphy";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostDate } from "../PostDate/PostDate";
import PostImg from "../../../assets/img/PostImage.png";
import "./LargePost.scss";

interface ILargePost {
  id?: number;
  title: string;
  text: string;
  date: string;
  image: string;
  linkPath?: string;
}

export const LargePost: FC<ILargePost> = ({ title, text, date, image = PostImg, linkPath = '' }) => {
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
