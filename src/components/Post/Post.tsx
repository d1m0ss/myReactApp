import { FC } from "react";
import { IPost } from "../../interfaces/IPost";
import { LargePost } from "./LargePost/LargePost";
import { MediumPost } from "./MediumPost/MediumPost";
import { SmallPost } from "./SmallPost/SmallPost";
import "./Post.scss";

export const Post: FC<IPost> = ({ title, text = "", type = "large", date, image, linkPath = "" }) => {
  return (
    <>
      {type === "large" && <LargePost title={title} text={text} date={date} image={image} linkPath={linkPath} />}
      {type === "medium" && <MediumPost title={title} date={date} image={image} linkPath={linkPath} />}
      {type === "small" && <SmallPost title={title} date={date} image={image} linkPath={linkPath} />}
    </>
  );
};
