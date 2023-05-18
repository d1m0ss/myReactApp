import { FC } from "react";
import { Post } from "../Post/Post";
import { posts } from "../../mock/posts";
import { IPost } from "../../interfaces/IPost";
import "./PostsList.scss";

export const PostsList: FC = () => {
  const fullPost = posts[0];
  const mediumPost = posts.slice(1, 5);
  const smallPost = posts.slice(5, 11);
  return (
    <div className="list">
      <div className="list__primary">
        <div className="list__full-card">
          <Post id={fullPost.id} date={fullPost.date} type="large" image={fullPost.image} title={fullPost.title} text={fullPost.text} linkPath={fullPost.image} />
        </div>
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
