import { FC } from "react";
import { Title } from "../../Title/Title";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostDate } from "../PostDate/PostDate";
import PostImg from "../../../assets/img/PostImage.png";
import "./MediumPost.scss";

interface IMediumPost {
  id?: number;
  title: string;
  date: string;
  image: string;
  linkPath?: string;
}

export const MediumPost: FC<IMediumPost> = ({ title, date, image = PostImg, linkPath = "" }) => {
  return (
    <div className="post-medium">
      <div className="post-medium__wrapper">
        <div className="post-medium__img-wrapper">
          <img src={image} alt="post-img" />
        </div>
        <div className="post-medium__texts">
          <PostDate date={date} />
          <Title content={title} type="H3" isLink linkPath={linkPath} />
        </div>
      </div>
      <PostFooter />
    </div>
  );
};
