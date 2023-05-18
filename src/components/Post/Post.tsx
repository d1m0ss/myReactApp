import { FC } from "react";
import { IPost } from "../../interfaces/IPost";
import { LargePost } from "./LargePost/LargePost";
import { MediumPost } from "./MediumPost/MediumPost";
import { SmallPost } from "./SmallPost/SmallPost";
import "./Post.scss";

export const Post: FC<IPost> = ({ id, title, text = "", type = "large", date, image, linkPath = "" }) => {
  return (
    <>
      {type === "large" && <LargePost id={id} title={title} text={text} date={date} image={image} linkPath={linkPath} />}
      {type === "medium" && <MediumPost id={id} title={title} date={date} image={image} linkPath={linkPath} />}
      {type === "small" && <SmallPost id={id} title={title} date={date} image={image} linkPath={linkPath} />}
    </>
  );
};
