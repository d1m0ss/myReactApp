import { FC } from "react";
import { Title } from "../../Title/Title";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostDate } from "../PostDate/PostDate";
import PostImg from "../../../assets/img/PostImage.png";
import "./SmallPost.scss";

interface ISmallPost {
  id?: number;
  title: string;
  date: string;
  image: string;
  linkPath?: string;
}

export const SmallPost: FC<ISmallPost> = ({ title, date, image = PostImg, linkPath = "" }) => {
  return (
    <div className="post-small">
      <div className="post-small__wrapper">
        <div className="post-small__texts">
          <PostDate date={date} />
          <Title content={title} type="H3" isLink linkPath={linkPath} />
        </div>
        <div className="post-small__img-wrapper">
          <img src={image} alt="post-img" />
        </div>
      </div>
      <PostFooter />
    </div>
  );
};
