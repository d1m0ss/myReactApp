import { FC } from "react";
import { LargePost } from "./LargePost/LargePost";
import { MediumPost } from "./MediumPost/MediumPost";
import { SmallPost } from "./SmallPost/SmallPost";
import "./Post.scss";

interface IPost {
  id?: number;
  title: string;
  type: "large" | "medium" | "small";
  text?: string;
  date: string;
  image: string;
  linkPath?: string;
  lesson_num?: number;
  description?: string;
  author?: number;
}

export const Post: FC<IPost> = ({ title, text = "", type, date, image, linkPath = "" }) => {
  return (
    <>
      {type === "large" && (
        <LargePost title={title} text={text} date={date} image={image} linkPath={linkPath} />
      )}
      {type === "medium" && (
        <MediumPost title={title} date={date} image={image} linkPath={linkPath} />
      )}
      {type === "small" && (
        <SmallPost title={title} date={date} image={image} linkPath={linkPath} />
      )}
    </>
  );
};
