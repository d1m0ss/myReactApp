import { FC } from "react";
import { Post } from "../Post/Post";
import { posts } from "../../mock/posts";
import "./PostsCells.scss";

export const PostsCells: FC = () => {
  const mediumPost = posts.slice(0, 6);
  const smallPost = posts.slice(6);
  return (
    <div className="list">
      <div className="list__primary">
        <div className="list__medium-card">
          {mediumPost.map(({ id, date, image, title }) => (
            <Post id={id} date={date} type="medium" image={image} title={title} linkPath={image} />
          ))}
        </div>
      </div>
      <div className="list__small-cards">
        {smallPost.map(({ id, date, image, title }) => (
          <Post id={id} date={date} type="small" image={image} title={title} linkPath={image} />
        ))}
      </div>
    </div>
  );
};
